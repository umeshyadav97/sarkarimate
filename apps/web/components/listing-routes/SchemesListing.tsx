import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { schemesListingConfig } from '@/components/listing-routes/listing-route-configs';

export function SchemesListing({ search }: { search?: string }) {
  return <ListingRoute config={schemesListingConfig} search={search} />;
}
