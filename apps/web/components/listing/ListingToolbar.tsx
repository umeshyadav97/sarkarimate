import { SelectInput } from '@/components/SelectInput';
import { SearchInput } from '@/components/SearchInput';

interface ListingToolbarProps {
  search: string;
  searchPlaceholder: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

const sortOptions = [
  { label: 'Latest First', value: 'latest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Most Viewed', value: 'views' },
  { label: 'Featured', value: 'featured' },
];

export function ListingToolbar({
  search,
  searchPlaceholder,
  sort,
  onSearchChange,
  onSortChange,
}: ListingToolbarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchInput
        id="listing-search"
        ariaLabel="Search listings"
        className="w-full sm:max-w-xl"
        placeholder={searchPlaceholder}
        showButton={false}
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <div className="flex items-center gap-3">
        <label
          className="whitespace-nowrap text-sm font-bold text-[#111827]"
          htmlFor="listing-sort"
        >
          Sort By:
        </label>
        <SelectInput
          id="listing-sort"
          className="w-auto"
          hideLabel
          label="Sort By"
          options={sortOptions}
          selectClassName="min-h-10 min-w-36 rounded-md border-slate-200 px-3 pr-9 text-sm shadow-sm"
          value={sort}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
}
