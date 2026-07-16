import jobDetailsResponse from '@/features/jobs/store/job-details.json';
import type { JobDetailsApiResponse } from '@/features/jobs/types/job-details-api.types';
import jobsListResponse from '@/features/listings/store/jobs.json';

const localJobDetailsResponse = jobDetailsResponse as JobDetailsApiResponse;
const localJobsListResponse = jobsListResponse as {
  data: {
    items: StaticJobListItem[];
  };
};

interface StaticJobListItem {
  id: string;
  title: string;
  organization: string;
  slug: string;
  category: string;
  state: string;
  qualification: string;
  lastDate: string | null;
  status: string;
  href: string;
  officialUrl: string;
  notificationUrl: string;
}

export async function getJobDetails(slug: string): Promise<JobDetailsApiResponse | null> {
  if (localJobDetailsResponse.data.slug === slug) {
    return localJobDetailsResponse;
  }

  const listedJob = localJobsListResponse.data.items.find((job) => job.slug === slug);

  if (!listedJob) {
    return null;
  }

  return createJobDetailsResponseFromListItem(listedJob);
}

export function getJobDetailsStaticSlugs() {
  return Array.from(
    new Set([
      localJobDetailsResponse.data.slug,
      ...localJobsListResponse.data.items.map((job) => job.slug),
    ]),
  );
}

function createJobDetailsResponseFromListItem(job: StaticJobListItem): JobDetailsApiResponse {
  const lastDateValue = job.lastDate ? formatDisplayDate(job.lastDate) : 'Check Notification';
  const seedDate = '2026-07-14';

  return {
    success: true,
    message: 'Job details fetched successfully',
    data: {
      id: job.slug,
      type: 'job',
      slug: job.slug,
      title: job.title,
      organization: job.organization,
      organizationShort: job.organization,
      status: job.status === 'active' ? 'Application Open' : job.status,
      badgeColor: job.status === 'active' ? 'green' : 'slate',
      postedOn: seedDate,
      updatedOn: seedDate,
      hero: {
        summary: `${job.organization} has released an update for ${job.title}. Candidates should check the official notification before applying.`,
      },
      quickFacts: [
        { icon: 'calendar', label: 'Last Date', value: lastDateValue },
        { icon: 'education', label: 'Qualification', value: job.qualification },
        { icon: 'briefcase', label: 'Category', value: job.category },
        { icon: 'location', label: 'State', value: job.state },
      ],
      overview: {
        title: 'About This Recruitment',
        description: `${job.title} is listed under ${job.category}. Review eligibility, important links and official notification details before taking action.`,
      },
      importantDates: [{ label: 'Last Date', value: lastDateValue }],
      eligibility: [job.qualification],
      importantLinks: [
        { title: 'Official Notification', url: job.notificationUrl, type: 'secondary' },
        { title: 'Official Website', url: job.officialUrl, type: 'secondary' },
      ],
      seo: {
        title: job.title,
        description: `Check details for ${job.title}.`,
        keywords: [job.organization, job.category, 'Government Job'],
      },
    },
  };
}

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}
