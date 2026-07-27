import {
  AdmitCardsListing,
  admitCardsListingConfig,
  createListingMetadata,
} from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(admitCardsListingConfig);

export default async function AdmitCardsPage({ searchParams }: ListingSearchPageProps) {
  return <AdmitCardsListing search={await getListingSearchParam(searchParams)} />;
}
