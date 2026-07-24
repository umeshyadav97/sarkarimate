'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { FilterCard } from '@/components/listing/FilterCard';
import { InfiniteList } from '@/components/listing/InfiniteList';
import { ListingHero } from '@/components/listing/ListingHero';
import { ListingSidebar } from '@/components/listing/ListingSidebar';
import { ListingStats } from '@/components/listing/ListingStats';
import { ListingTable } from '@/components/listing/ListingTable';
import { ListingToolbar } from '@/components/listing/ListingToolbar';
import { NeedHelpCard } from '@/components/listing/NeedHelpCard';
import { NewsletterCard } from '@/components/listing/NewsletterCard';
import type { ListingFilters, ListingPageConfig } from '@/components/listing/types';
import { useConfiguredListingItems } from '@/hooks/useConfiguredListingItems';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useSearchParams } from 'next/navigation';

interface ListingPageProps {
  config: ListingPageConfig;
}

const initialFilters: ListingFilters = {
  year: 'all',
  state: 'all',
  organization: 'all',
};

export function ListingPage({ config }: ListingPageProps) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') ?? '');
  const [sort, setSort] = useState('latest');
  const [filters, setFilters] = useState<ListingFilters>(initialFilters);
  const [draftFilters, setDraftFilters] = useState<ListingFilters>(initialFilters);

  useEffect(() => {
    setSearch(searchParams.get('q') ?? '');
  }, [searchParams]);

  const {
    items: listingItems,
    total,
    hasMore,
    isLoading,
    isLoadingMore,
    error,
    loadMore,
  } = useConfiguredListingItems({
    endpoint: config.apiEndpoint,
    pageType: config.pageType,
    search,
    sort,
    filters,
  });

  const sentinelRef = useInfiniteScroll({
    hasMore,
    isLoading: isLoading || isLoadingMore,
    onLoadMore: loadMore,
  });

  const loadedSummary = useMemo(() => {
    if (total === 0) {
      return 'No listings available';
    }

    return `Showing ${listingItems.length} of ${total} listings`;
  }, [listingItems.length, total]);

  const handleDraftFilterChange = useCallback((key: keyof ListingFilters, value: string) => {
    setDraftFilters((currentFilters) => ({ ...currentFilters, [key]: value }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setDraftFilters(initialFilters);
    setFilters(initialFilters);
  }, []);

  return (
    <main className="bg-[#F8FAFC] text-[#111827]">
      <ListingHero config={config} />
      {/* <ListingStats statistics={config.statistics} /> */}

      <section className="mx-auto grid w-full max-w-full gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)] lg:px-8">
        <div className="order-1 hidden">
          <FilterCard
            config={config}
            draftFilters={draftFilters}
            onApply={() => setFilters(draftFilters)}
            onDraftFilterChange={handleDraftFilterChange}
            onReset={handleResetFilters}
          />
        </div>

        <div className="order-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:order-1">
          <ListingToolbar
            search={search}
            searchPlaceholder={config.searchPlaceholder}
            sort={sort}
            onSearchChange={setSearch}
            onSortChange={setSort}
          />

          {error ? (
            <div className="px-4 py-8 text-center" role="alert">
              <h2 className="text-lg font-bold text-[#111827]">Something went wrong</h2>
              <p className="mt-2 text-sm font-medium text-slate-600">{error}</p>
            </div>
          ) : null}

          {isLoading ? <ListingSkeleton /> : null}

          {!isLoading && !error ? (
            <>
              <ListingTable
                actionLabel={config.actionLabel}
                columns={config.columns}
                items={listingItems}
                startIndex={1}
              />
              {listingItems.length > 0 ? (
                <>
                  <div className="border-t border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
                    {loadedSummary}
                  </div>
                  <InfiniteList
                    hasMore={hasMore}
                    isLoadingMore={isLoadingMore}
                    sentinelRef={sentinelRef}
                  />
                </>
              ) : null}
            </>
          ) : null}
        </div>

        <div className="order-3 grid gap-6 md:grid-cols-2 lg:hidden">
          <NewsletterCard config={config} />
          <NeedHelpCard config={config} />
        </div>

        <div className="hidden lg:order-2 lg:block">
          <ListingSidebar
            config={config}
            draftFilters={draftFilters}
            onApplyFilters={() => setFilters(draftFilters)}
            onDraftFilterChange={handleDraftFilterChange}
            onResetFilters={handleResetFilters}
          />
        </div>
      </section>
    </main>
  );
}

function ListingSkeleton() {
  return (
    <div className="space-y-3 p-4" aria-label="Loading listings">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="grid gap-3 rounded-lg border border-slate-100 p-4 md:grid-cols-[48px_1fr_160px_140px_96px]"
        >
          <span className="h-5 animate-pulse rounded bg-slate-100" />
          <span className="h-5 animate-pulse rounded bg-slate-100" />
          <span className="h-5 animate-pulse rounded bg-slate-100" />
          <span className="h-5 animate-pulse rounded bg-slate-100" />
          <span className="h-8 animate-pulse rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}
