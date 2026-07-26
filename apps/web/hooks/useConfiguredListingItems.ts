'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ListingFilters, ListingItem } from '@/components/listing/types';
import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';
import { extractLeadingDate } from '@/lib/date-display';
import { getListingItems } from '@/services/listing.service';
import { getJobListingItems } from '@/services/listing/job-listing.service';

const PAGE_SIZE = 20;

interface UseConfiguredListingItemsOptions {
  endpoint: string;
  pageType: string;
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

function toApiFilters(pageType: string, filters: ListingFilters): JobsQueryParams {
  return {
    type: pageType as JobsQueryParams['type'],
    state: getFilterValue(filters.state),
    organization: getFilterValue(filters.organization),
    year: getFilterValue(filters.year),
  };
}

async function getConfiguredListingResponse({
  endpoint,
  pageType,
  page,
  search,
  sort,
  filters,
}: UseConfiguredListingItemsOptions & { page: number }) {
  if (pageType === 'syllabus') {
    // TODO: Re-enable the live syllabus list when the backend stops returning 500 for:
    // /api/v1/jobs?page=1&limit=20&sort=latest&type=syllabus
    return getListingItems({
      endpoint,
      page,
      pageSize: PAGE_SIZE,
      search,
      sort,
      filters,
    });
  }

  const response: JobsResponse = await getJobListingItems({
    page,
    limit: PAGE_SIZE,
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

export function useConfiguredListingItems({
  endpoint,
  pageType,
  search,
  sort,
  filters,
}: UseConfiguredListingItemsOptions) {
  const [items, setItems] = useState<ListingItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchItems() {
      setIsLoading(true);
      setError(null);
      setPage(1);

      try {
        const response = await getConfiguredListingResponse({
          endpoint,
          pageType,
          page: 1,
          search,
          sort,
          filters,
        });

        if (!isMounted) return;

        setItems(response.items);
        setTotal(response.total);
        setHasMore(response.hasMore);
      } catch {
        if (isMounted) {
          setError('Unable to load listings.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [endpoint, filters, pageType, search, sort]);

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isLoadingMore) return;

    const nextPage = page + 1;

    setIsLoadingMore(true);

    try {
      const response = await getConfiguredListingResponse({
        endpoint,
        pageType,
        page: nextPage,
        search,
        sort,
        filters,
      });

      setItems((currentItems) => [...currentItems, ...response.items]);
      setTotal(response.total);
      setHasMore(response.hasMore);
      setPage(nextPage);
    } catch {
      setError('Unable to load more listings.');
    } finally {
      setIsLoadingMore(false);
    }
  }, [endpoint, filters, hasMore, isLoading, isLoadingMore, page, pageType, search, sort]);

  return {
    items,
    total,
    hasMore,
    isLoading,
    isLoadingMore,
    error,
    loadMore,
  };
}
