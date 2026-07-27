import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { syllabusListingConfig } from '@/components/listing-routes/listing-route-configs';

export function SyllabusListing({ search }: { search?: string }) {
  return <ListingRoute config={syllabusListingConfig} search={search} />;
}
