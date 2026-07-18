'use client';

import { useCallback, useEffect, useState } from 'react';
import { getJobs } from '@/services/jobs.service';
import type { ApiJob, JobsQueryParams } from '@/features/jobs/types';

const PAGE_SIZE = 20;
const DEFAULT_FILTERS: UseListingItemsOptions['filters'] = {};

interface UseListingItemsOptions {
  search?: string;
  sort?: 'latest' | 'oldest' | 'views' | 'featured';
  filters?: Omit<JobsQueryParams, 'page' | 'limit' | 'search' | 'sort'>;
}

export function useListingItems({
  search = '',
  sort = 'latest',
  filters = DEFAULT_FILTERS,
}: UseListingItemsOptions) {
  const [items, setItems] = useState<ApiJob[]>([]);
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
        const response = await getJobs({
          page: 1,
          limit: PAGE_SIZE,
          search,
          sort,
          ...filters,
        });

        if (!isMounted) return;

        setItems(response.jobs);
        setTotal(response.pagination.total);
        setHasMore(response.pagination.hasNextPage);
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
  }, [filters, search, sort]);

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isLoadingMore) return;

    const nextPage = page + 1;

    setIsLoadingMore(true);

    try {
      const response = await getJobs({
        page: nextPage,
        limit: PAGE_SIZE,
        search,
        sort,
        ...filters,
      });

      setItems((prev) => [...prev, ...response.jobs]);
      setTotal(response.pagination.total);
      setHasMore(response.pagination.hasNextPage);
      setPage(nextPage);
    } catch {
      setError('Unable to load more listings.');
    } finally {
      setIsLoadingMore(false);
    }
  }, [page, hasMore, isLoading, isLoadingMore, search, sort, filters]);

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
