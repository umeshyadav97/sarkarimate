import type { ListingFilters, ListingItem, ListingResponse } from '@/components/listing/types';
import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';
import { extractLeadingDate } from '@/lib/date-display';
import { getJobListingItems } from '@/services/listing/job-listing.service';

export const LISTING_PAGE_SIZE = 20;

export interface ConfiguredListingQuery {
  pageType: string;
  page: number;
  search: string;
  sort: string;
  filters: ListingFilters;
}

function getFilterValue(value: string) {
  return value === 'all' ? undefined : value;
}

function getJobDate(job: ApiJob) {
  return job.updatedAt ?? job.publishedAt ?? job.createdAt;
}

function formatListingDate(date?: string) {
  if (!date) {
    return 'Recently Updated';
  }

  const leadingDate = extractLeadingDate(date);

  if (leadingDate) {
    return leadingDate;
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsedDate);
}

function getListingYear(job: ApiJob) {
  const jobDate = getJobDate(job);

  if (jobDate) {
    return new Date(jobDate).getFullYear().toString();
  }

  return job.title.match(/\b(20\d{2})\b/)?.[1] ?? '';
}

function normalizeStatus(status: string | undefined, fallback: string) {
  if (!status) {
    return fallback;
  }

  if (status.toLowerCase() === 'open') {
    return fallback;
  }

  if (['released', 'available'].includes(status.toLowerCase())) {
    return 'Out';
  }

  return status
    .split('-')
    .join(' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getListingDisplayValue(job: ApiJob, pageType: string) {
  switch (pageType) {
    case 'jobs':
      return formatListingDate(job.lastDate ?? getJobDate(job));
    case 'admit-cards':
      return normalizeStatus(job.applicationStatus, 'Out');
    case 'results':
      return normalizeStatus(job.applicationStatus, 'Out');
    case 'answer-keys':
      return normalizeStatus(job.applicationStatus, 'Out');
    case 'syllabus':
      return normalizeStatus(job.applicationStatus, 'Updated');
    default:
      return formatListingDate(getJobDate(job));
  }
}

function toListingItem(job: ApiJob, pageType: string): ListingItem {
  const href = pageType === 'syllabus' ? `/syllabus/${job.slug}` : `/${job.slug}`;

  return {
    id: job._id,
    detailId: job._id,
    title: job.title,
    organization: job.organization,
    updatedDate: formatListingDate(getJobDate(job)),
    lastDate: getListingDisplayValue(job, pageType),
    year: getListingYear(job),
    state: job.state || 'All India',
    href,
  };
}

function toApiFilters(pageType: string, filters: ListingFilters): JobsQueryParams {
  return {
    type: pageType as JobsQueryParams['type'],
    state: getFilterValue(filters.state),
    organization: getFilterValue(filters.organization),
    year: getFilterValue(filters.year),
  };
}

export async function getConfiguredListingResponse({
  pageType,
  page,
  search,
  sort,
  filters,
}: ConfiguredListingQuery): Promise<ListingResponse> {
  const response: JobsResponse = await getJobListingItems({
    page,
    limit: LISTING_PAGE_SIZE,
    search,
    sort: sort as JobsQueryParams['sort'],
    ...toApiFilters(pageType, filters),
  });

  return {
    items: response.jobs.map((job) => toListingItem(job, pageType)),
    total: response.pagination.total,
    hasMore: response.pagination.hasNextPage,
  };
}
