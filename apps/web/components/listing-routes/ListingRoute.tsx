import { Suspense } from 'react';
import { ListingPage, type ListingPageConfig } from '@/components/listing';
import type { ListingFilters } from '@/components/listing/types';
import { getConfiguredListingResponse } from '@/services/configured-listing.service';
import { getJobCategoryOptions } from '@/services/job-category.service';

interface ListingRouteProps {
  config: ListingPageConfig;
  search?: string;
}

const initialFilters: ListingFilters = {
  year: 'all',
  state: 'all',
  organization: 'all',
};

export async function ListingRoute({ config, search = '' }: ListingRouteProps) {
  const [initialResponse, jobCategoryOptions] = await Promise.all([
    getConfiguredListingResponse({
      pageType: config.pageType,
      page: 1,
      search,
      sort: 'latest',
      filters: initialFilters,
    }),
    getJobCategoryOptions(),
  ]);

  return (
    <Suspense fallback={null}>
      <ListingPage
        config={config}
        initialFilters={initialFilters}
        initialResponse={initialResponse}
        initialSearch={search}
        initialSort="latest"
        jobCategoryOptions={jobCategoryOptions}
      />
    </Suspense>
  );
}
