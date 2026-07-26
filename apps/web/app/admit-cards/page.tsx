import {
  AdmitCardsListing,
  admitCardsListingConfig,
  createListingMetadata,
} from '@/components/listing-routes';

export const metadata = createListingMetadata(admitCardsListingConfig);

export default function AdmitCardsPage() {
  return <AdmitCardsListing />;
}
