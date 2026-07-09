import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { syllabusListingConfig } from '@/components/listing-routes/listing-route-configs';

export function SyllabusListing() {
  return <ListingRoute config={syllabusListingConfig} />;
}
