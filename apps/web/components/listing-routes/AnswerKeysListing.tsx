import { ListingRoute } from '@/components/listing-routes/ListingRoute';
import { answerKeysListingConfig } from '@/components/listing-routes/listing-route-configs';

export function AnswerKeysListing({ search }: { search?: string }) {
  return <ListingRoute config={answerKeysListingConfig} search={search} />;
}
