'use client';

import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { useMemo } from 'react';
import { useListingItems } from '@/hooks/useListingItems';

export function LatestJobsCard() {
  const filters = useMemo(() => ({ type: 'jobs' as const }), []);
  const { items, isLoading, error } = useListingItems({ sort: 'latest', filters });
  const latestJobs = items.slice(0, 5);

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <BriefcaseBusiness
          className="h-5 w-5 text-[#1D4ED8]"
          strokeWidth={2.4}
          aria-hidden="true"
        />
        Latest Jobs
      </h2>

      <div className="mt-4 grid gap-2.5">
        {isLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="h-14 animate-pulse rounded-lg border border-slate-100 bg-slate-100"
              />
            ))
          : null}

        {!isLoading && error ? (
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
            Latest jobs are unavailable right now.
          </p>
        ) : null}

        {!isLoading && !error
          ? latestJobs.map((job) => (
              <Link
                key={job._id}
                href={`/${job.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3  px-3 py-2.5 outline-none transition-colors hover:border-[#1D4ED8] hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <span className="min-w-0">
                  <span className="line-clamp-2 text-sm font-bold leading-5 text-[#1D4ED8] underline decoration-blue-200 underline-offset-4 group-hover:decoration-[#1D4ED8]">
                    {job.title}
                  </span>
                  <span className="mt-1 block truncate text-xs font-semibold text-slate-500">
                    {job.organization}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]"
                  aria-hidden="true"
                />
              </Link>
            ))
          : null}
      </div>
    </aside>
  );
}
