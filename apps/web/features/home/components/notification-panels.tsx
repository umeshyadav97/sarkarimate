import Link from 'next/link';
import { ArrowRight, Circle } from 'lucide-react';
import { Card } from '@repo/ui';
import {
  latestJobs,
  latestResults,
  type NotificationItem,
  upcomingDeadlines,
} from '@/features/home/constants/homepage-data';
import { SectionHeader } from '@/features/home/components/section-header';

const accentClasses = {
  blue: 'bg-blue-100 text-[#1D4ED8]',
  green: 'bg-green-100 text-[#16A34A]',
  orange: 'bg-orange-100 text-[#F59E0B]',
  purple: 'bg-violet-100 text-violet-600',
  red: 'bg-red-100 text-[#DC2626]',
};

const metaClasses = {
  Status: 'bg-green-50 text-[#16A34A]',
  Deadline: 'bg-red-50 text-[#DC2626]',
  'Last Date': 'text-[#DC2626]',
};

export function NotificationPanels() {
  return (
    <section className="mx-auto grid max-w-full gap-5 px-4 py-5 sm:px-6 lg:grid-cols-3 md:grid-cols-2 lg:px-8">
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
        actionHref="#"
        actionLabel="View All Deadlines"
        items={upcomingDeadlines}
        title="Upcoming Deadlines"
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
      <SectionHeader title={title} />
      <div className="divide-y divide-slate-100">
        {items.map((item) => (
          <article
            key={item.title}
            className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 py-4"
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full ${accentClasses[item.accent]}`}
            >
              <Circle className="h-3 w-3 fill-current" aria-hidden="true" />
            </span>
            <div>
              {item.href ? (
                <Link
                  className="text-sm font-bold leading-5 text-[#111827] hover:text-[#1D4ED8]"
                  href={item.href}
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
        className="mt-3 flex h-11 items-center justify-center gap-2 rounded-md border border-blue-300 text-sm font-bold text-[#1D4ED8] hover:bg-blue-50"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
