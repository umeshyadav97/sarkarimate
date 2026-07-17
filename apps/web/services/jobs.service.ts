import { api } from '@/services/api-client';
import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';

export function getJobs(params: JobsQueryParams = {}) {
  return api.get<JobsResponse>('/api/v1/jobs/home', {
    ...params,
  });
}

export function getJobBySlug(slug: string) {
  return api.get<ApiJob>(`/api/v1/jobs/${slug}`);
}
