import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { jobsListingConfig } from '@/components/listing-routes/listing-route-configs';

export function JobsListing({ search }: { search?: string }) {
  return <ListingRoute config={jobsListingConfig} search={search} />;
}
