import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { admitCardsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function AdmitCardsListing() {
  return <ListingRoute config={admitCardsListingConfig} />;
}
