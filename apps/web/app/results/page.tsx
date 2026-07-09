import {
  createListingMetadata,
  ResultsListing,
  resultsListingConfig,
} from '@/components/listing-routes';

export const metadata = createListingMetadata(resultsListingConfig);

export default function ResultsPage() {
  return <ResultsListing />;
}
