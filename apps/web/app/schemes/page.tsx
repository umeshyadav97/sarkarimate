import {
  createListingMetadata,
  SchemesListing,
  schemesListingConfig,
} from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(schemesListingConfig);

export default async function SchemesPage({ searchParams }: ListingSearchPageProps) {
  return <SchemesListing search={await getListingSearchParam(searchParams)} />;
}
