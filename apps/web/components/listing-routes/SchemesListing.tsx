import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { schemesListingConfig } from '@/components/listing-routes/listing-route-configs';

export function SchemesListing() {
  return <ListingRoute config={schemesListingConfig} />;
}
