import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@repo/ui';
import {
  latestAdmitCards as defaultLatestAdmitCards,
  latestAnswerKeys as defaultLatestAnswerKeys,
  latestJobs as defaultLatestJobs,
  latestResults as defaultLatestResults,
  latestSyllabus as defaultLatestSyllabus,
  type NotificationItem,
} from '@/features/home/constants/homepage-data';
import { SectionHeader } from '@/features/home/components/section-header';

const detailIdCachePrefix = 'sarkarimate:job-detail-id:';

const metaClasses = {
  Status: 'bg-blue-50 text-[#1D4ED8]',
  Deadline: 'bg-red-50 text-[#DC2626]',
  'Last Date': 'text-[#DC2626]',
  'Answer Key': 'bg-blue-50 text-[#1D4ED8]',
  Revision: 'bg-blue-50 text-[#1D4ED8]',
};

function cacheDetailId(item: NotificationItem) {
  if (!item.href || !item.detailId) {
    return;
  }

  const slug = item.href.split('/').filter(Boolean).at(-1);

  if (!slug) {
    return;
  }

  window.localStorage.setItem(`${detailIdCachePrefix}${slug}`, item.detailId);
}

interface NotificationPanelsProps {
  latestJobs?: NotificationItem[];
  latestResults?: NotificationItem[];
  latestAdmitCards?: NotificationItem[];
  latestAnswerKeys?: NotificationItem[];
  latestSyllabus?: NotificationItem[];
}

export function NotificationPanels({
  latestJobs = defaultLatestJobs,
  latestResults = defaultLatestResults,
  latestAdmitCards = defaultLatestAdmitCards,
  latestAnswerKeys = defaultLatestAnswerKeys,
  latestSyllabus = defaultLatestSyllabus,
}: NotificationPanelsProps) {
  return (
    <section className="mx-auto grid max-w-full grid-cols-1 gap-5 px-4 py-5 sm:grid-cols-2 sm:px-6 xl:grid-cols-3 2xl:grid-cols-5 lg:px-8">
      <NotificationPanel
        actionHref="/jobs"
        actionLabel="View All Jobs"
        items={latestJobs}
        title="Latest Job"
      />
      <NotificationPanel
        actionHref="/results"
        actionLabel="View All Results"
        items={latestResults}
        title="Latest Results"
      />
      <NotificationPanel
        actionHref="/admit-cards"
        actionLabel="View All Admit Cards"
        items={latestAdmitCards}
        title="Latest Admit Cards"
      />
      <NotificationPanel
        actionHref="/answer-keys"
        actionLabel="View All Answer Keys"
        items={latestAnswerKeys}
        title="Latest Answer Keys"
      />
      <NotificationPanel
        actionHref="/syllabus"
        actionLabel="View All Syllabus"
        items={latestSyllabus}
        title="Latest Syllabus"
      />
    </section>
  );
}

function NotificationPanel({
  title,
  items,
  actionHref,
  actionLabel,
}: {
  title: string;
  items: NotificationItem[];
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <Card className="rounded-lg border-slate-200 p-4 shadow-sm">
      <SectionHeader title={title} actionHref={actionHref} actionLabel={actionLabel} />
      <div className="divide-y divide-slate-100">
        {items.map((item) => (
          <article key={item.title} className="grid grid-cols-[1fr_auto] items-center gap-3 py-4">
            <div>
              {item.href ? (
                <Link
                  className="text-sm font-bold leading-5 text-[#111827] hover:text-[#1D4ED8]"
                  href={item.href}
                  onClick={() => cacheDetailId(item)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                </Link>
              ) : (
                <h3 className="text-sm font-bold leading-5 text-[#111827]">{item.title}</h3>
              )}
              <p className="mt-1 text-xs font-semibold text-slate-500">{item.organization}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-500">{item.metaLabel}</p>
              <p
                className={`mt-1 rounded-md px-2 py-1 text-xs font-bold ${
                  metaClasses[item.metaLabel as keyof typeof metaClasses] ?? 'text-[#1D4ED8]'
                }`}
              >
                {item.metaValue}
              </p>
            </div>
          </article>
        ))}
      </div>
      <Link
        href={actionHref}
        aria-label={`${actionLabel} in ${title}`}
        className="mt-3 flex h-11 items-center justify-center gap-2 rounded-md border border-blue-300 text-sm font-bold text-[#1D4ED8] hover:bg-blue-50"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
