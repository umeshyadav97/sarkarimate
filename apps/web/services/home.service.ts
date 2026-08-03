import type { HomePageStore } from '@/features/home/store/homepage-store';
import { api } from '@/services/api-client';

export async function getHomePageData(signal?: AbortSignal) {
  return api.get<HomePageStore>('/api/v1/jobs/home', { page: 1, limit: 20 }, { signal });
}
