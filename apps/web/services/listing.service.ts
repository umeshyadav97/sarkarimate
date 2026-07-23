import type { ListingItem, ListingQuery, ListingResponse } from '@/components/listing';
import {
  staticListApiResponses,
  type StaticListEndpoint,
} from '@/features/listings/store/static-list-api';

type StaticApiItem = (typeof staticListApiResponses)[StaticListEndpoint]['data']['items'][number];

function getStaticApiResponse(endpoint: string) {
  return staticListApiResponses[endpoint as StaticListEndpoint] ?? staticListApiResponses['/jobs'];
}

function formatListingDate(date?: string | null) {
  if (!date) {
    return 'Recently Updated';
  }

  const normalizedDate = date.includes('T') ? date : `${date}T00:00:00`;
  const parsedDate = new Date(normalizedDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Recently Updated';
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsedDate);
}

function getItemDate(item: StaticApiItem) {
  return (
    item.updatedDate ??
    item.releaseDate ??
    item.examDate ??
    item.resultDate ??
    item.answerKeyDate ??
    item.objectionLastDate ??
    item.lastDate
  );
}

function getItemYear(item: StaticApiItem) {
  const date = getItemDate(item);

  if (date) {
    const normalizedDate = date.includes('T') ? date : `${date}T00:00:00`;
    const parsedDate = new Date(normalizedDate);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.getFullYear().toString();
    }
  }

  return item.title.match(/\b(20\d{2})\b/)?.[1] ?? '2026';
}

function toListingItem(item: StaticApiItem): ListingItem {
  const href = item.href.startsWith('/syllabus/') ? item.href : `/${item.slug}`;

  return {
    id: item.id,
    title: item.title,
    organization: item.organization,
    updatedDate: formatListingDate(getItemDate(item)),
    year: getItemYear(item),
    state: item.state ?? 'All India',
    href,
  };
}

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

  const staticApiResponse = getStaticApiResponse(query.endpoint);
  const staticListingItems = staticApiResponse.data.items.map(toListingItem);
  const filteredItems = applySort(
    applyFilters(applySearch(staticListingItems, query.search), query),
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
