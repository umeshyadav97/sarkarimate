import type { DetailTimelineItem } from '@/components/job-detail/types';

interface TimelineProps {
  items: DetailTimelineItem[];
  variant?: 'vertical' | 'responsive';
}

const dotClasses = {
  complete: 'bg-[#059669] ring-emerald-100',
  active: 'bg-[#1D4ED8] ring-blue-100',
  upcoming: 'bg-slate-300 ring-slate-100',
};

export function Timeline({ items, variant = 'vertical' }: TimelineProps) {
  if (variant === 'responsive') {
    return (
      <>
        <div className="md:hidden">
          <VerticalTimeline items={items} />
        </div>
        <div className="hidden overflow-x-auto pb-1 md:block">
          <ol className="relative grid min-w-[760px] grid-cols-6 gap-4 pt-8 before:absolute before:left-0 before:right-0 before:top-4 before:h-px before:bg-slate-200">
            {items.map((item, index) => (
              <li key={`${index}-${item.status}`} className="relative min-w-0 text-center">
                <span
                  className={`absolute left-1/2 top-[-1.45rem] z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ${dotClasses[item.status]}`}
                  aria-hidden="true"
                />
                <span
                  className="block truncate text-sm font-bold leading-5 text-[#111827]"
                  title={item.title}
                >
                  {item.title}
                </span>
                <span
                  className="mt-1 block truncate text-sm font-medium leading-5 text-slate-600"
                  title={item.date}
                >
                  {item.date}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }

  return <VerticalTimeline items={items} />;
}

function VerticalTimeline({ items }: { items: DetailTimelineItem[] }) {
  return (
    <ol className="relative space-y-5 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-200">
      {items.map((item, index) => (
        <li key={`${index}-${item.status}`} className="relative flex gap-4">
          <span
            className={`mt-1 h-4 w-4 shrink-0 rounded-full ring-4 ${dotClasses[item.status]}`}
            aria-hidden="true"
          />
          <span>
            <span className="block text-sm font-bold text-[#111827]">{item.title}</span>
            <span className="mt-1 block text-sm font-medium text-slate-600">{item.date}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
