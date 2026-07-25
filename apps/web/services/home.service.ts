import type { HomePageStore } from '@/features/home/store/homepage-store';
import { api } from '@/services/api-client';

export function getHomePageData(signal?: AbortSignal) {
  // TODO: Keep homepage syllabus static for now. The live endpoint currently returns 500:
  // /api/v1/jobs?page=1&limit=20&sort=latest&type=syllabus
  return api.get<HomePageStore>('/api/v1/jobs/home', { page: 1, limit: 20 }, { signal });
}
