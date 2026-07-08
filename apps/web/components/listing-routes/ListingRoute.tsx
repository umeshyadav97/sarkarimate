import { ListingPage, type ListingPageConfig } from '@/components/listing';

interface ListingRouteProps {
  config: ListingPageConfig;
}

export function ListingRoute({ config }: ListingRouteProps) {
  return <ListingPage config={config} />;
}
