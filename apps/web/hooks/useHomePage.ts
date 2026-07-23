'use client';

import type { HomePageStore } from '@/features/home/store/homepage-store';
import { getHomePageData } from '@/services/home.service';
import { useEffect, useState } from 'react';

export function useHomePage() {
  const [data, setData] = useState<HomePageStore | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHomeData() {
      try {
        setIsLoading(true);
        setError(null);
        const homeData = await getHomePageData(controller.signal);

        if (!controller.signal.aborted) {
          setData(homeData);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error instanceof Error ? error.message : 'Unable to load homepage data.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadHomeData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export const useHomeData = useHomePage;
