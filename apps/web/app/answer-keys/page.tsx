import {
  AnswerKeysListing,
  answerKeysListingConfig,
  createListingMetadata,
} from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(answerKeysListingConfig);

export default async function AnswerKeysPage({ searchParams }: ListingSearchPageProps) {
  return <AnswerKeysListing search={await getListingSearchParam(searchParams)} />;
}
