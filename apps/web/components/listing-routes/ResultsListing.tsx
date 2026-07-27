import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { resultsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function ResultsListing({ search }: { search?: string }) {
  return <ListingRoute config={resultsListingConfig} search={search} />;
}
