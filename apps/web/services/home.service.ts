import type { HomePageStore } from '@/features/home/store/homepage-store';
import type { ApiJob } from '@/features/jobs/types';
import { api } from '@/services/api-client';
import { getJobListingItems } from '@/services/listing/job-listing.service';

function toHomeSyllabusEntry(job: ApiJob) {
  return {
    _id: job._id,
    title: job.title,
    organization: job.organization,
    slug: job.slug,
    status: job.applicationStatus,
    updatedDate: job.updatedAt ?? job.publishedAt ?? job.createdAt ?? null,
    href: `/syllabus/${job.slug}`,
  };
}

function updateSyllabusQuickAccessCount(store: HomePageStore, count: number) {
  return store.quickAccess.map((item) =>
    item.type === 'syllabus' ? { ...item, count: String(count) } : item,
  );
}

export async function getHomePageData(signal?: AbortSignal) {
  const [homeResult, syllabusResult] = await Promise.allSettled([
    api.get<HomePageStore>('/api/v1/jobs/home', { page: 1, limit: 20 }, { signal }),
    getJobListingItems(
      {
        page: 1,
        limit: 20,
        sort: 'latest',
        type: 'syllabus',
      },
      { signal },
    ),
  ]);

  if (homeResult.status === 'rejected') {
    throw homeResult.reason;
  }

  if (syllabusResult.status === 'rejected') {
    return homeResult.value;
  }

  const syllabusItems = syllabusResult.value.jobs.map(toHomeSyllabusEntry);
  const syllabusCount = syllabusResult.value.pagination.total || syllabusItems.length;

  return {
    ...homeResult.value,
    quickAccess: updateSyllabusQuickAccessCount(homeResult.value, syllabusCount),
    syllabus: syllabusItems,
    latestSyllabus: syllabusItems,
  };
}
