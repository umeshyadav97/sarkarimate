import { Suspense } from 'react';
import { ListingPage, type ListingPageConfig } from '@/components/listing';

interface ListingRouteProps {
  config: ListingPageConfig;
}

export function ListingRoute({ config }: ListingRouteProps) {
  return (
    <Suspense fallback={null}>
      <ListingPage config={config} />
    </Suspense>
  );
}
