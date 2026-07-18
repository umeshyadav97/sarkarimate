'use client';

import { useQuery } from '@tanstack/react-query';
import { JobDetailPage } from '@/components/job-detail/JobDetailPage';
import type { DetailPageConfig } from '@/components/job-detail/types';
import { mapJobDetailsResponse } from '@/services/job-detail.mapper';
import { getJobDetails } from '@/services/job-detail.service';

interface JobDetailQueryPageProps {
  config: DetailPageConfig;
  slug: string;
}

export function JobDetailQueryPage({ config, slug }: JobDetailQueryPageProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['job-details', slug],
    queryFn: () => getJobDetails(slug),
    retry: 1,
  });

  if (isLoading) {
    return <JobDetailSkeleton />;
  }

  if (isError || !data) {
    return (
      <main className="bg-[#F8FAFC] px-4 py-12 text-[#111827] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold">Job details not found</h1>
          <p className="mt-3 text-sm font-medium text-slate-600">
            We could not load this update right now. Please refresh the page or try again later.
          </p>
        </div>
      </main>
    );
  }

  return <JobDetailPage config={config} data={mapJobDetailsResponse(data)} />;
}

function JobDetailSkeleton() {
  return (
    <main className="bg-[#F8FAFC] px-4 py-8 text-[#111827] sm:px-6 lg:px-8">
      <div className="grid gap-4">
        <div className="h-8 w-72 animate-pulse rounded bg-slate-200" />
        <div className="h-28 animate-pulse rounded-xl bg-white" />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">
          <div className="h-96 animate-pulse rounded-xl bg-white" />
          <div className="h-64 animate-pulse rounded-xl bg-white" />
        </div>
      </div>
    </main>
  );
}
