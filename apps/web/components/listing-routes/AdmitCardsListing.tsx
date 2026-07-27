import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { admitCardsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function AdmitCardsListing({ search }: { search?: string }) {
  return <ListingRoute config={admitCardsListingConfig} search={search} />;
}
