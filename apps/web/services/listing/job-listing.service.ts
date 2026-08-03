import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';
import { api } from '@/services/api-client';

export async function getJobListingItems(params: JobsQueryParams = {}, options?: RequestInit) {
  const response = await api.get<JobsResponse>(
    '/api/v1/jobs',
    {
      ...params,
    },
    options,
  );

  return response;
}

export async function getJobListingItemBySlug(slug: string) {
  const response = await api.get<{ job: ApiJob }>(`/api/v1/jobs/${slug}`);
  return response.job;
}
