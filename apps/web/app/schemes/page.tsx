import {
  createListingMetadata,
  SchemesListing,
  schemesListingConfig,
} from '@/components/listing-routes';

export const metadata = createListingMetadata(schemesListingConfig);

export default function SchemesPage() {
  return <SchemesListing />;
}
