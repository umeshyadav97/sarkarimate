'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ListingFilters, ListingItem } from '@/components/listing/types';
import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';
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

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
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

async function getConfiguredListingResponse({
  pageType,
  page,
  search,
  sort,
  filters,
}: UseConfiguredListingItemsOptions & { page: number }) {
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
