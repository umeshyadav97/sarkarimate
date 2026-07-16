'use client';

import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/job-detail/JobDetailPage';
import type { DetailPageConfig } from '@/components/job-detail/types';
import { mapJobDetailsResponse } from '@/services/job-detail.mapper';
import { getJobDetails } from '@/services/jobs';

interface JobDetailQueryPageProps {
  config: DetailPageConfig;
  slug: string;
}

export function JobDetailQueryPage({ config, slug }: JobDetailQueryPageProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['job-details', slug],
    queryFn: () => getJobDetails(slug),
  });

  if (isLoading) {
    return <JobDetailSkeleton />;
  }

  if (isError || !data) {
    notFound();
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
