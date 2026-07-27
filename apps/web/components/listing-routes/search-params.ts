export interface ListingSearchPageProps {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
}

export async function getListingSearchParam(searchParams?: ListingSearchPageProps['searchParams']) {
  const params = await searchParams;
  const query = params?.q;

  if (Array.isArray(query)) {
    return query[0] ?? '';
  }

  return query ?? '';
}
