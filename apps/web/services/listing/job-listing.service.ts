import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';
import { api } from '@/services/api-client';

export function getJobListingItems(params: JobsQueryParams = {}, options?: RequestInit) {
  return api.get<JobsResponse>(
    '/api/v1/jobs',
    {
      ...params,
    },
    options,
  );
}

export async function getJobListingItemBySlug(slug: string) {
  const response = await api.get<{ job: ApiJob }>(`/api/v1/jobs/${slug}`);
  return response.job;
}
