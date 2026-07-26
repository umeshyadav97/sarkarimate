import { SelectInput } from '@/components/SelectInput';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import type { ListingFilters, ListingPageConfig } from '@/components/listing/types';

interface FilterCardProps {
  config: ListingPageConfig;
  draftFilters: ListingFilters;
  onDraftFilterChange: (key: keyof ListingFilters, value: string) => void;
  onApply: () => void;
  onReset: () => void;
}

export function FilterCard({
  config,
  draftFilters,
  onDraftFilterChange,
  onApply,
  onReset,
}: FilterCardProps) {
  return (
    <section
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="listing-filters"
    >
      <h2 id="listing-filters" className="text-lg font-bold text-[#111827]">
        {config.sidebar.filterTitle}
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <SelectInput
          id="listing-year"
          label="Select Year"
          options={config.filters.years}
          value={draftFilters.year}
          onChange={(value) => onDraftFilterChange('year', value)}
        />
        <SelectInput
          id="listing-state"
          label="Select State"
          options={config.filters.states}
          value={draftFilters.state}
          onChange={(value) => onDraftFilterChange('state', value)}
        />
        <SelectInput
          id="listing-organization"
          label="Select Organization"
          options={config.filters.organizations}
          value={draftFilters.organization}
          onChange={(value) => onDraftFilterChange('organization', value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] md:px-3 px-2 md:text-sm text-xs font-bold text-white transition hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-blue-100"
          type="button"
          onClick={onApply}
        >
          <SlidersHorizontal className="h-3 w-3" aria-hidden="true" />
          Apply Filter
        </button>
        <button
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white md:px-3 px-2 md:text-sm text-xs font-bold text-[#1D4ED8] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
          type="button"
          onClick={onReset}
        >
          <RotateCcw className="h-3 w-3" aria-hidden="true" />
          Reset Filter
        </button>
      </div>
    </section>
  );
}
