'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  getJobListingItemBySlug,
  getJobListingItems,
} from '@/services/listing/job-listing.service';
import type { ApiJob, JobsQueryParams, JobsResponse } from '@/features/jobs/types';

interface AsyncState<TData> {
  data: TData | null;
  error: string | null;
  isLoading: boolean;
  refetch: () => Promise<void>;
}

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Something went wrong';

export function useJobs(params: JobsQueryParams = {}): AsyncState<JobsResponse> {
  const [data, setData] = useState<JobsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setData(await getJobListingItems(params));
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => {
    void fetchJobs();
  }, [fetchJobs]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchJobs,
  };
}

export function useJob(slug: string): AsyncState<ApiJob> {
  const [data, setData] = useState<ApiJob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(slug));

  const fetchJob = useCallback(async () => {
    if (!slug) {
      setData(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setData(await getJobListingItemBySlug(slug));
    } catch (caughtError) {
      setError(getErrorMessage(caughtError));
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void fetchJob();
  }, [fetchJob]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchJob,
  };
}
