import type { PreparationOverviewData } from '@/types/preparation';
import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';

interface PreparationOverviewProps {
  overview?: PreparationOverviewData;
}

export function PreparationOverview({ overview }: PreparationOverviewProps) {
  if (!overview) {
    return null;
  }

  return (
    <PreparationSectionCard id="overview" title="Overview" index={1}>
      <p className="text-xs font-semibold leading-6 text-slate-700 sm:text-sm">
        {overview.description}
      </p>
      {/* {overview.highlights?.length ? (
        <dl className="mt-4 grid overflow-hidden rounded-lg border border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {overview.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="border-b border-slate-200 p-4 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <dt className="text-xs font-bold text-slate-500">{highlight.label}</dt>
              <dd className="mt-1 text-sm font-bold leading-5 text-[#1D4ED8]">{highlight.value}</dd>
            </div>
          ))}
        </dl>
      ) : null} */}
    </PreparationSectionCard>
  );
}
