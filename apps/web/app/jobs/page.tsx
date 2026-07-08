import { createListingMetadata, JobsListing, jobsListingConfig } from '@/components/listing-routes';

export const metadata = createListingMetadata(jobsListingConfig);

export default function JobsPage() {
  return <JobsListing />;
}
