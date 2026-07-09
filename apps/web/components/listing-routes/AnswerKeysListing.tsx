import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { answerKeysListingConfig } from '@/components/listing-routes/listing-route-configs';

export function AnswerKeysListing() {
  return <ListingRoute config={answerKeysListingConfig} />;
}
