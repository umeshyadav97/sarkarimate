import { createListingMetadata, JobsListing, jobsListingConfig } from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(jobsListingConfig);

export default async function JobsPage({ searchParams }: ListingSearchPageProps) {
  return <JobsListing search={await getListingSearchParam(searchParams)} />;
}
