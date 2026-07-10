import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HeaderActions } from '@/components/job-detail/JobHeader/HeaderActions';
import { JobMeta } from '@/components/job-detail/JobHeader/JobMeta';
import { StatusBadge } from '@/components/job-detail/JobHeader/StatusBadge';
import type { DetailPageData } from '@/components/job-detail/types';

interface JobHeaderProps {
  data: DetailPageData;
}

export function JobHeader({ data }: JobHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-full px-4 pt-6 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          {data.breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === data.breadcrumbs.length - 1;
            return (
              <li key={breadcrumb.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-slate-900" aria-current="page">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="rounded-sm hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
                {isLast ? null : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              {data.title}
            </h1>
            <StatusBadge status={data.status} />
          </div>
          <JobMeta
            organization={data.organization}
            location={data.location}
            postedDate={data.postedDate}
            updatedDate={data.updatedDate}
          />
        </div>
        <HeaderActions
          title={data.title}
          description={data.seo.description}
          canonicalPath={data.seo.canonical}
          bookmarkKey={`${data.pageType}:${data.slug}`}
        />
      </div>
    </header>
  );
}
