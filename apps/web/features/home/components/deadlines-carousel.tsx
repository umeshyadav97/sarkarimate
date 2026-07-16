import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { upcomingDeadlines } from '@/features/home/constants/homepage-data';

const repeatedDeadlines = [...upcomingDeadlines, ...upcomingDeadlines];

export function DeadlinesCarousel() {
  if (upcomingDeadlines.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-full px-4 py-3 sm:px-6 lg:px-8" aria-labelledby="deadlines">
      <div className="overflow-hidden rounded-lg border border-amber-100 bg-amber-50/45 px-4 py-2 shadow-sm">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h2 id="deadlines" className="text-lg font-bold text-[#111827]">
            Upcoming Deadlines
          </h2>
          <Link
            href="/jobs"
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#1D4ED8] shadow-sm hover:bg-blue-50"
          >
            View All
          </Link>
        </div>
        <div className="deadline-carousel-mask overflow-hidden">
          <div className="deadline-carousel-track flex w-max gap-4">
            {repeatedDeadlines.map((deadline, index) => (
              <Link
                key={`${deadline.title}-${index}`}
                href={deadline.href}
                className="grid min-h-24 w-72 shrink-0 grid-cols-[2.75rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-red-50 text-[#DC2626]">
                  <CalendarDays className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-[#111827]">
                    {deadline.title}
                  </span>
                  <span className="mt-2 block text-xs font-semibold text-slate-600">
                    {deadline.date}
                  </span>
                  <span className="mt-2 block text-sm font-bold text-[#DC2626]">
                    {deadline.daysLeft}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
