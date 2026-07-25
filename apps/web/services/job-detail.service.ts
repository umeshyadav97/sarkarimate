import type { DetailPageData, DetailPageType } from '@/components/job-detail/types';
import jobDetailsResponse from '@/features/jobs/store/job-details.json';
import type {
  JobDetailsApiData,
  JobDetailsApiResponse,
} from '@/features/jobs/types/job-details-api.types';
import {
  homePageStore,
  type HomeDeadlineEntry,
  type HomeJobEntry,
} from '@/features/home/store/homepage-store';
import jobsListResponse from '@/features/listings/store/jobs.json';
import {
  staticListApiResponses,
  type StaticListItem,
} from '@/features/listings/store/static-list-api';
import { api } from '@/services/api-client';
import { mapJobDetailsResponse } from '@/services/job-detail.mapper';
import { getJobListingItemBySlug } from '@/services/listing/job-listing.service';

const detailIdCachePrefix = 'sarkarimate:job-detail-id:';
const localJobDetailsResponse = jobDetailsResponse as JobDetailsApiResponse;
const localJobsListResponse = jobsListResponse as {
  data: {
    items: StaticJobListItem[];
  };
};
const detailDataByRoute: Partial<Record<DetailPageType, Record<string, DetailPageData>>> = {};
const seedDate = '2026-07-14';
const listingHrefByPageType: Record<DetailPageType, string> = {
  jobs: '/jobs',
  results: '/results',
  'admit-cards': '/admit-cards',
  'answer-keys': '/answer-keys',
  syllabus: '/syllabus',
  schemes: '/schemes',
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

export async function getJobDetails(identifier: string): Promise<JobDetailsApiResponse | null> {
  try {
    const detailsIdentifier = isObjectId(identifier)
      ? identifier
      : (getCachedJobId(identifier) ?? (await getJobIdFromSlug(identifier)));

    if (detailsIdentifier) {
      return createJobDetailsResponse(await getLiveJobDetails(detailsIdentifier));
    }
  } catch {
    // Use local fallback for offline/dev API failures.
  }

  return getLocalJobDetails(identifier);
}

export function getJobDetailsStaticSlugs() {
  return Array.from(
    new Set([
      localJobDetailsResponse.data.slug,
      ...localJobsListResponse.data.items.map((job) => job.slug),
    ]),
  );
}

export async function getDetailPageData(
  pageType: DetailPageType,
  slug: string,
): Promise<DetailPageData | null> {
  if (pageType === 'jobs') {
    const jobDetails = await getJobDetails(slug);
    return jobDetails ? mapJobDetailsResponse(jobDetails) : null;
  }

  const listItem = getStaticListItem(pageType, slug);

  if (listItem) {
    return mapStaticListItemToDetailPageData(pageType, listItem);
  }

  const routeData = detailDataByRoute[pageType];
  const exactMatch = routeData?.[slug];

  if (exactMatch) {
    return exactMatch;
  }

  return null;
}

export async function getCommonDetailPageData(slug: string): Promise<DetailPageData | null> {
  const jobDetails = await getJobDetails(slug);

  if (jobDetails) {
    return mapJobDetailsResponse(jobDetails);
  }

  for (const pageType of getSearchableDetailPageTypes()) {
    const listItem = getStaticListItem(pageType, slug);

    if (listItem) {
      return mapStaticListItemToDetailPageData(pageType, listItem);
    }
  }

  return null;
}

export function getCommonDetailStaticParams() {
  const slugs = [
    ...getJobDetailsStaticSlugs(),
    ...getSearchableDetailPageTypes().flatMap((pageType) => {
      const listResponse = staticListApiResponses[listingHrefByPageType[pageType]];
      return listResponse?.data.items.map((item) => item.slug) ?? [];
    }),
  ];

  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}

export async function getDetailPageStaticParams(pageType: DetailPageType) {
  if (pageType === 'jobs') {
    return getJobDetailsStaticSlugs().map((slug) => ({ slug }));
  }

  const listResponse = staticListApiResponses[listingHrefByPageType[pageType]];

  if (listResponse) {
    return listResponse.data.items.map((item) => ({ slug: item.slug }));
  }

  const routeData = detailDataByRoute[pageType] ?? {};
  return Object.keys(routeData).map((slug) => ({ slug }));
}

function getStaticListItem(pageType: DetailPageType, slug: string) {
  const listResponse = staticListApiResponses[listingHrefByPageType[pageType]];
  return listResponse?.data.items.find((item) => item.slug === slug);
}

async function getJobIdFromSlug(slug: string) {
  const job = await getJobListingItemBySlug(slug);
  return job._id;
}

function getLiveJobDetails(id: string) {
  return api.get<JobDetailsApiData>(`/api/v1/jobs/details/${id}`);
}

function createJobDetailsResponse(data: JobDetailsApiData): JobDetailsApiResponse {
  return {
    success: true,
    message: 'Job details fetched successfully',
    data,
  };
}

function isObjectId(value: string) {
  return /^[a-f\d]{24}$/i.test(value);
}

function getCachedJobId(slug: string) {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem(`${detailIdCachePrefix}${slug}`);
}

function getLocalJobDetails(identifier: string): JobDetailsApiResponse | null {
  if (
    localJobDetailsResponse.data.slug === identifier ||
    localJobDetailsResponse.data.id === identifier ||
    localJobDetailsResponse.data._id === identifier
  ) {
    return localJobDetailsResponse;
  }

  const listedJob = localJobsListResponse.data.items.find(
    (job) => job.slug === identifier || job.id === identifier,
  );

  if (listedJob) {
    return createJobDetailsResponseFromListItem(listedJob);
  }

  const homeJob = homePageStore.latestJobs.find(
    (job) => job.slug === identifier || job.id === identifier || job._id === identifier,
  );

  if (homeJob) {
    return createJobDetailsResponseFromHomeJob(homeJob);
  }

  const homeDeadline = homePageStore.upcomingDeadlines.find(
    (job) => job.slug === identifier || job.id === identifier || job._id === identifier,
  );

  if (homeDeadline) {
    return createJobDetailsResponseFromHomeDeadline(homeDeadline);
  }

  return null;
}

function createJobDetailsResponseFromListItem(job: StaticJobListItem): JobDetailsApiResponse {
  const lastDateValue = job.lastDate ? formatDisplayDate(job.lastDate) : 'Check Notification';

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

function createJobDetailsResponseFromHomeJob(job: HomeJobEntry): JobDetailsApiResponse {
  const lastDateValue = job.lastDate ? formatDisplayDate(job.lastDate) : 'Check Notification';

  return {
    success: true,
    message: 'Job details fetched successfully',
    data: {
      id: job.id ?? job._id ?? job.slug,
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
        { icon: 'briefcase', label: 'Category', value: 'Latest Job' },
        { icon: 'location', label: 'State', value: 'All India' },
      ],
      overview: {
        title: 'About This Recruitment',
        description: `${job.title} is listed under latest government job updates. Review important dates, official links and notification details before taking action.`,
      },
      importantDates: [{ label: 'Last Date', value: lastDateValue }],
      eligibility: ['Check official notification'],
      importantLinks: [{ title: 'Official Website', url: '#', type: 'secondary' }],
      seo: {
        title: job.title,
        description: `Check details for ${job.title}.`,
        keywords: [job.organization, 'Latest Job', 'Government Job'],
      },
    },
  };
}

function createJobDetailsResponseFromHomeDeadline(job: HomeDeadlineEntry): JobDetailsApiResponse {
  return createJobDetailsResponseFromHomeJob({
    _id: job._id,
    id: job.id,
    title: job.title,
    organization: job.organization,
    slug: job.slug,
    lastDate: job.lastDate,
    status: 'active',
  });
}

function mapStaticListItemToDetailPageData(
  pageType: DetailPageType,
  item: StaticListItem,
): DetailPageData {
  const listingHref = listingHrefByPageType[pageType];
  const canonical = getDetailHref(item.slug);
  const dateItems = getDateItems(item);
  const overviewDescription = createOverviewDescription(pageType, item);
  const importantLinks = getImportantLinks(item);

  return {
    pageType,
    slug: item.slug,
    title: item.title,
    status: {
      label: getStatusLabel(item.status),
      tone: getStatusTone(item.status),
    },
    organization: item.organization,
    location: item.state ?? 'All India',
    postedDate: seedDate,
    updatedDate: seedDate,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: getListingLabel(pageType), href: listingHref },
      { label: item.title, href: canonical },
    ],
    keyInformation: getKeyInformation(pageType, item),
    alert: overviewDescription,
    actions: importantLinks.map((link, index) => ({
      label: link.label,
      href: link.href,
      variant: index === 0 ? 'primary' : 'secondary',
    })),
    about: {
      title: getAboutTitle(pageType),
      body: [overviewDescription],
    },
    importantDates: dateItems,
    vacancy: {
      title: '',
      columns: [],
      rows: [],
    },
    eligibility: item.qualification ? [item.qualification] : [],
    howToApply: [],
    ageLimit: [],
    ageLimitNote: '',
    applicationFee: [],
    applicationFeeNote: '',
    selectionProcess: [],
    importantLinks,
    faqs: [],
    timeline: dateItems.map((date, index) => ({
      title: date.label,
      date: date.value,
      status: index === 0 ? 'active' : 'upcoming',
    })),
    relatedContent: [],
    seo: {
      title: item.title,
      description: overviewDescription,
      canonical,
      keywords: [item.organization, getListingLabel(pageType)],
    },
  };
}

function getDetailHref(slug: string) {
  return `/${slug}`;
}

function getSearchableDetailPageTypes(): DetailPageType[] {
  return ['admit-cards', 'results', 'answer-keys'];
}

function getKeyInformation(pageType: DetailPageType, item: StaticListItem) {
  const dateItems = getDateItems(item);
  const items = [
    ...dateItems,
    item.category ? { label: 'Category', value: item.category, tone: 'slate' as const } : null,
    item.state ? { label: 'State', value: item.state, tone: 'slate' as const } : null,
    item.qualification
      ? { label: 'Qualification', value: item.qualification, tone: 'green' as const }
      : null,
    item.status
      ? { label: 'Status', value: getStatusLabel(item.status), tone: 'green' as const }
      : null,
  ].filter((value): value is NonNullable<typeof value> => Boolean(value));

  if (items.length > 0) {
    return items;
  }

  return [{ label: getListingLabel(pageType), value: item.organization, tone: 'slate' as const }];
}

function getDateItems(item: StaticListItem) {
  const rawDates = [
    { label: 'Last Date', value: item.lastDate },
    { label: 'Exam Date', value: item.examDate },
    { label: 'Release Date', value: item.releaseDate },
    { label: 'Result Date', value: item.resultDate },
    { label: 'Answer Key Date', value: item.answerKeyDate },
    { label: 'Objection Last Date', value: item.objectionLastDate },
    { label: 'Updated Date', value: item.updatedDate },
  ];

  return rawDates
    .filter((date): date is { label: string; value: string } => Boolean(date.value))
    .map((date) => ({
      label: date.label,
      value: formatDisplayDate(date.value),
      tone: date.label.includes('Last') ? ('red' as const) : ('slate' as const),
    }));
}

function getImportantLinks(item: StaticListItem) {
  const links = [
    'notificationUrl' in item && item.notificationUrl
      ? { label: 'Official Notification', href: item.notificationUrl }
      : null,
    'officialUrl' in item && item.officialUrl
      ? { label: 'Official Website', href: item.officialUrl }
      : null,
    'downloadUrl' in item && item.downloadUrl
      ? { label: 'Download', href: item.downloadUrl }
      : null,
  ];

  return links.filter((link): link is { label: string; href: string } => Boolean(link));
}

function createOverviewDescription(pageType: DetailPageType, item: StaticListItem) {
  return `${item.organization} has published ${item.title}. Check the official details, important links and latest update before taking action.`;
}

function getAboutTitle(pageType: DetailPageType) {
  if (pageType === 'results') {
    return 'About This Result';
  }

  if (pageType === 'admit-cards') {
    return 'About This Admit Card';
  }

  if (pageType === 'answer-keys') {
    return 'About This Answer Key';
  }

  if (pageType === 'syllabus') {
    return 'About This Syllabus';
  }

  return 'About This Update';
}

function getListingLabel(pageType: DetailPageType) {
  const labels: Record<DetailPageType, string> = {
    jobs: 'Jobs',
    results: 'Results',
    'admit-cards': 'Admit Cards',
    'answer-keys': 'Answer Keys',
    syllabus: 'Syllabus',
    schemes: 'Schemes',
  };

  return labels[pageType];
}

function getStatusLabel(status?: string) {
  if (!status) {
    return 'Published';
  }

  return status
    .split('-')
    .join(' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getStatusTone(status?: string): DetailPageData['status']['tone'] {
  if (status === 'active' || status === 'released' || status === 'declared') {
    return 'green';
  }

  return 'slate';
}

function formatDisplayDate(date: string) {
  const normalizedDate = date.includes('T') ? date : `${date}T00:00:00`;
  const parsedDate = new Date(normalizedDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Recently Updated';
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsedDate);
}
