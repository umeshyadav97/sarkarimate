import { CalendarDays } from 'lucide-react';
import { Timeline } from '@/components/job-detail/Common/Timeline';
import type { DetailTimelineItem } from '@/components/job-detail/types';

interface TimelineCardProps {
  title: string;
  items: DetailTimelineItem[];
}

export function TimelineCard({ title, items }: TimelineCardProps) {
  return (
    <aside className="hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:block">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#111827]">
        <CalendarDays className="h-5 w-5 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
        {title}
      </h2>
      <Timeline items={items} />
    </aside>
  );
}
