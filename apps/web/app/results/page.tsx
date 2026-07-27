import {
  createListingMetadata,
  ResultsListing,
  resultsListingConfig,
} from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(resultsListingConfig);

export default async function ResultsPage({ searchParams }: ListingSearchPageProps) {
  return <ResultsListing search={await getListingSearchParam(searchParams)} />;
}
