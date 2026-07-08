'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getListingItems } from '@/services/listing.service';
import type { ListingFilters, ListingItem } from '@/components/listing/types';

const PAGE_SIZE = 20;

interface UseListingItemsOptions {
  endpoint: string;
  search: string;
  sort: string;
  filters: ListingFilters;
}

export function useListingItems({ endpoint, search, sort, filters }: UseListingItemsOptions) {
  const [items, setItems] = useState<ListingItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const querySignature = useMemo(
    () => JSON.stringify({ endpoint, search, sort, filters }),
    [endpoint, filters, search, sort],
  );

  useEffect(() => {
    let isActive = true;

    async function loadInitialItems() {
      setIsLoading(true);
      setError(null);
      setPage(1);

      try {
        const response = await getListingItems({
          endpoint,
          page: 1,
          pageSize: PAGE_SIZE,
          search,
          sort,
          filters,
        });

        if (isActive) {
          setItems(response.items);
          setTotal(response.total);
          setHasMore(response.hasMore);
        }
      } catch (caughtError) {
        console.error(caughtError);

        if (isActive) {
          setError('Unable to load listings right now. Please try again.');
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadInitialItems();

    return () => {
      isActive = false;
    };
  }, [endpoint, filters, querySignature, search, sort]);

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isLoadingMore) {
      return;
    }

    const nextPage = page + 1;
    setIsLoadingMore(true);
    setError(null);

    try {
      const response = await getListingItems({
        endpoint,
        page: nextPage,
        pageSize: PAGE_SIZE,
        search,
        sort,
        filters,
      });

      setItems((currentItems) => [...currentItems, ...response.items]);
      setTotal(response.total);
      setHasMore(response.hasMore);
      setPage(nextPage);
    } catch (caughtError) {
      console.error(caughtError);
      setError('Unable to load more listings right now. Please try again.');
    } finally {
      setIsLoadingMore(false);
    }
  }, [endpoint, filters, hasMore, isLoading, isLoadingMore, page, search, sort]);

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
