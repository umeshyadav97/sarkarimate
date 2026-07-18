import type { HomePageStore } from '@/features/home/store/homepage-store';
import { api } from '@/services/api-client';

export function getJobListingData(signal?: AbortSignal) {
  return api.get<HomePageStore>('/api/v1/jobs/latest-job', { page: 1, limit: 20 }, { signal });
}
