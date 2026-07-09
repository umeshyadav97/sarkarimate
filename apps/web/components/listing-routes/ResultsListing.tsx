import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { resultsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function ResultsListing() {
  return <ListingRoute config={resultsListingConfig} />;
}
