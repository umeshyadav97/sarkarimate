import type { ListingItem, ListingQuery, ListingResponse } from '@/components/listing';
import { getMockListingItems } from '@/services/mock-listing-data';

function applySearch(items: ListingItem[], search: string) {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return items;
  }

  return items.filter((item) =>
    [item.title, item.organization, item.state].some((value) =>
      value.toLowerCase().includes(normalizedSearch),
    ),
  );
}

function applyFilters(items: ListingItem[], query: ListingQuery) {
  return items.filter((item) => {
    const matchesYear = query.filters.year === 'all' || item.year === query.filters.year;
    const matchesState = query.filters.state === 'all' || item.state === query.filters.state;
    const matchesOrganization =
      query.filters.organization === 'all' || item.organization === query.filters.organization;

    return matchesYear && matchesState && matchesOrganization;
  });
}

function applySort(items: ListingItem[], sort: string) {
  const sortedItems = [...items];

  if (sort === 'oldest') {
    return sortedItems.reverse();
  }

  if (sort === 'alphabetical') {
    return sortedItems.sort((first, second) => first.title.localeCompare(second.title));
  }

  return sortedItems;
}

export async function getListingItems(query: ListingQuery): Promise<ListingResponse> {
  await new Promise((resolve) => {
    setTimeout(resolve, 350);
  });

  const mockListingItems = getMockListingItems(query.endpoint);
  const filteredItems = applySort(
    applyFilters(applySearch(mockListingItems, query.search), query),
    query.sort,
  );
  const start = (query.page - 1) * query.pageSize;
  const end = start + query.pageSize;
  const items = filteredItems.slice(start, end);

  return {
    items,
    total: filteredItems.length,
    hasMore: end < filteredItems.length,
  };
}
