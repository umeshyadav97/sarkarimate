'use client';

import { FilterCard } from '@/components/listing/FilterCard';
import { NeedHelpCard } from '@/components/listing/NeedHelpCard';
import { NewsletterCard } from '@/components/listing/NewsletterCard';
import type { ListingFilters, ListingPageConfig } from '@/components/listing/types';

interface ListingSidebarProps {
  config: ListingPageConfig;
  draftFilters: ListingFilters;
  onDraftFilterChange: (key: keyof ListingFilters, value: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

export function ListingSidebar({
  config,
  draftFilters,
  onDraftFilterChange,
  onApplyFilters,
  onResetFilters,
}: ListingSidebarProps) {
  return (
    <aside className="space-y-6" aria-label="Listing sidebar">
      {/* <FilterCard
        config={config}
        draftFilters={draftFilters}
        onApply={onApplyFilters}
        onDraftFilterChange={onDraftFilterChange}
        onReset={onResetFilters}
      /> */}
      <NewsletterCard config={config} />
      <NeedHelpCard config={config} />
    </aside>
  );
}
