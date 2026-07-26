'use client';

import type { HomePageStore } from '@/features/home/store/homepage-store';
import { getHomePageData } from '@/services/home.service';
import { useEffect, useState } from 'react';

export function useHomePage() {
  const [data, setData] = useState<HomePageStore | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      try {
        setIsLoading(true);
        setError(null);
        const homeData = await getHomePageData();

        if (isMounted) {
          setData(homeData);
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error.message : 'Unable to load homepage data.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export const useHomeData = useHomePage;
