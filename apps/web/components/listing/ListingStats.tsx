import { Building2, CalendarCheck, Clock3, FileText } from 'lucide-react';
import type { ListingStatistic } from '@/components/listing/types';

interface ListingStatsProps {
  statistics: ListingStatistic[];
}

const statisticIcons = {
  file: FileText,
  calendar: CalendarCheck,
  clock: Clock3,
  building: Building2,
};
const toneClasses = {
  blue: 'bg-blue-50 text-[#1D4ED8]',
  green: 'bg-green-50 text-[#15803D]',
  purple: 'bg-violet-50 text-violet-600',
  orange: 'bg-orange-50 text-[#F97316]',
};

export function ListingStats({ statistics }: ListingStatsProps) {
  return (
    <section
      className="mx-auto w-full max-w-full px-4 pb-6 sm:px-6 lg:px-8"
      aria-label="Listing statistics"
    >
      <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
        {statistics.map((statistic) => {
          const Icon = statisticIcons[statistic.icon];

          return (
            <article key={statistic.label} className="flex items-center gap-4 px-2 py-2 lg:px-5">
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${toneClasses[statistic.tone]}`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" strokeWidth="1.5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#111827]">{statistic.label}</p>
                <p className="mt-1 text-2xl font-bold text-[#1D4ED8]">{statistic.value}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
