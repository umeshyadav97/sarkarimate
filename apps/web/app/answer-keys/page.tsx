import {
  AnswerKeysListing,
  answerKeysListingConfig,
  createListingMetadata,
} from '@/components/listing-routes';

export const metadata = createListingMetadata(answerKeysListingConfig);

export default function AnswerKeysPage() {
  return <AnswerKeysListing />;
}
