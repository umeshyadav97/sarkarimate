'use client';

import { FilterCard } from '@/components/listing/FilterCard';
import { NeedHelpCard } from '@/components/listing/NeedHelpCard';
import { NewsletterCard } from '@/components/listing/NewsletterCard';
import type { ListingFilters, ListingPageConfig } from '@/components/listing/types';
import type { JobCategoryOptions } from '@/services/job-category.service';

interface ListingSidebarProps {
  config: ListingPageConfig;
  draftFilters: ListingFilters;
  onDraftFilterChange: (key: keyof ListingFilters, value: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
  jobCategoryOptions: JobCategoryOptions;
}

export function ListingSidebar({
  config,
  draftFilters,
  onDraftFilterChange,
  onApplyFilters,
  onResetFilters,
  jobCategoryOptions,
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
      <NewsletterCard config={config} jobCategoryOptions={jobCategoryOptions} />
      <NeedHelpCard config={config} />
    </aside>
  );
}
