import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { jobsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function JobsListing() {
  return <ListingRoute config={jobsListingConfig} />;
}
