import {
  createListingMetadata,
  SyllabusListing,
  syllabusListingConfig,
} from '@/components/listing-routes';
import {
  getListingSearchParam,
  type ListingSearchPageProps,
} from '@/components/listing-routes/search-params';

export const metadata = createListingMetadata(syllabusListingConfig);

export default async function SyllabusPage({ searchParams }: ListingSearchPageProps) {
  return <SyllabusListing search={await getListingSearchParam(searchParams)} />;
}
