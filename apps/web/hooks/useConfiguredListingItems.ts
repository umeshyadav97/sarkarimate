'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ListingFilters, ListingItem, ListingResponse } from '@/components/listing/types';
import { getConfiguredListingResponse } from '@/services/configured-listing.service';

interface UseConfiguredListingItemsOptions {
  pageType: string;
  search: string;
  sort: string;
  filters: ListingFilters;
  initialResponse?: ListingResponse;
  initialSearch?: string;
  initialSort?: string;
  initialFilters?: ListingFilters;
}

function areFiltersEqual(first: ListingFilters, second: ListingFilters) {
  return (
    first.year === second.year &&
    first.state === second.state &&
    first.organization === second.organization
  );
}

export function useConfiguredListingItems({
  pageType,
  search,
  sort,
  filters,
  initialResponse,
  initialSearch = '',
  initialSort = 'latest',
  initialFilters,
}: UseConfiguredListingItemsOptions) {
  const canUseInitialResponse = Boolean(
    initialResponse &&
    search === initialSearch &&
    sort === initialSort &&
    initialFilters &&
    areFiltersEqual(filters, initialFilters),
  );
  const [items, setItems] = useState<ListingItem[]>(initialResponse?.items ?? []);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(initialResponse?.total ?? 0);
  const [hasMore, setHasMore] = useState(initialResponse?.hasMore ?? false);
  const [isLoading, setIsLoading] = useState(!canUseInitialResponse);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchItems() {
      if (canUseInitialResponse && initialResponse) {
        setItems(initialResponse.items);
        setTotal(initialResponse.total);
        setHasMore(initialResponse.hasMore);
        setIsLoading(false);
        setError(null);
        setPage(1);
        return;
      }

      setIsLoading(true);
      setError(null);
      setPage(1);

      try {
        const response = await getConfiguredListingResponse({
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
  }, [canUseInitialResponse, filters, initialResponse, pageType, search, sort]);

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || isLoadingMore) return;

    const nextPage = page + 1;

    setIsLoadingMore(true);

    try {
      const response = await getConfiguredListingResponse({
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
  }, [filters, hasMore, isLoading, isLoadingMore, page, pageType, search, sort]);

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
