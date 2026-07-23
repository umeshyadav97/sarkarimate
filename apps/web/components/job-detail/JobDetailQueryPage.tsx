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
    queryKey: ['job-detail', slug],
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
    <main
      className="bg-[#F8FAFC] px-4 py-6 text-[#111827] sm:px-6 lg:px-8"
      aria-label="Loading job details"
    >
      <div className="grid gap-5">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-100" />
          <div className="mt-4 h-8 max-w-3xl animate-pulse rounded bg-slate-100" />
          <div className="mt-3 h-5 w-56 animate-pulse rounded bg-slate-100" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="rounded-lg border border-slate-100 p-3">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-100" />
                <div className="mt-3 h-5 w-32 animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">
          <div className="grid gap-4">
            {Array.from({ length: 3 }, (_, sectionIndex) => (
              <div
                key={sectionIndex}
                className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-6 w-48 animate-pulse rounded bg-slate-100" />
                {Array.from({ length: 4 }, (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid gap-3 rounded-lg border border-slate-100 p-4 md:grid-cols-[1fr_140px_2fr]"
                  >
                    <span className="h-5 animate-pulse rounded bg-slate-100" />
                    <span className="h-5 animate-pulse rounded bg-slate-100" />
                    <span className="h-5 animate-pulse rounded bg-slate-100" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <aside className="grid content-start gap-4">
            {Array.from({ length: 3 }, (_, cardIndex) => (
              <div
                key={cardIndex}
                className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-6 w-36 animate-pulse rounded bg-slate-100" />
                <div className="h-11 animate-pulse rounded-lg bg-slate-100" />
                <div className="h-11 animate-pulse rounded-lg bg-slate-100" />
                <div className="h-11 animate-pulse rounded-lg bg-slate-100" />
              </div>
            ))}
          </aside>
        </section>
      </div>
    </main>
  );
}
