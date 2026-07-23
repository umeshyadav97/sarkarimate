import {
  createListingMetadata,
  SyllabusListing,
  syllabusListingConfig,
} from '@/components/listing-routes';

export const metadata = createListingMetadata(syllabusListingConfig);

export default function SyllabusPage() {
  return <SyllabusListing />;
}
