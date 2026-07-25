import type { ListingItem, ListingQuery, ListingResponse } from '@/components/listing';
import {
  staticListApiResponses,
  type StaticListEndpoint,
} from '@/features/listings/store/static-list-api';
import { extractLeadingDate } from '@/lib/date-display';

type StaticApiItem = (typeof staticListApiResponses)[StaticListEndpoint]['data']['items'][number];

function getStaticApiResponse(endpoint: string) {
  return staticListApiResponses[endpoint as StaticListEndpoint] ?? staticListApiResponses['/jobs'];
}

function formatListingDate(date?: string | null) {
  if (!date) {
    return 'Recently Updated';
  }

  const leadingDate = extractLeadingDate(date);

  if (leadingDate) {
    return leadingDate;
  }

  const displayDate = date;
  const normalizedDate = displayDate.includes('T') ? displayDate : `${displayDate}T00:00:00`;
  const parsedDate = new Date(normalizedDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return displayDate;
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

function toListingItem(item: StaticApiItem, endpoint: string): ListingItem {
  const href = item.href.startsWith('/syllabus/') ? item.href : `/${item.slug}`;

  return {
    id: item.id,
    title: item.title,
    organization: item.organization,
    updatedDate: formatListingDate(getItemDate(item)),
    lastDate: getListingDisplayValue(item, endpoint),
    year: getItemYear(item),
    state: item.state ?? 'All India',
    href,
  };
}

function getListingDisplayValue(item: StaticApiItem, endpoint: string) {
  switch (endpoint) {
    case '/jobs':
    case '/api/v1/jobs':
      return formatListingDate(item.lastDate ?? getItemDate(item));
    case '/admit-cards':
    case '/api/v1/admit-cards':
      return normalizeStatus(item.status, 'Out');
    case '/results':
    case '/api/v1/results':
      return normalizeStatus(item.status, 'Out');
    case '/answer-keys':
    case '/api/v1/answer-keys':
      return normalizeStatus(item.status, 'Out');
    case '/syllabus':
    case '/api/v1/syllabus':
      return normalizeStatus(item.status, 'Updated');
    default:
      return formatListingDate(getItemDate(item));
  }
}

function normalizeStatus(status: string | undefined, fallback: string) {
  if (!status) {
    return fallback;
  }

  if (status.toLowerCase() === 'active') {
    return fallback;
  }

  if (['released', 'available'].includes(status.toLowerCase())) {
    return 'Out';
  }

  return status
    .split('-')
    .join(' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
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
  const staticListingItems = staticApiResponse.data.items.map((item) =>
    toListingItem(item, query.endpoint),
  );
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
