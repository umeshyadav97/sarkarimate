import { AlertTriangle, CalendarDays, Clock, GraduationCap, IndianRupee } from 'lucide-react';
import type { PreparationHighlight } from '@/types/preparation';

interface PreparationHighlightsProps {
  highlights?: PreparationHighlight[];
}

const icons = [AlertTriangle, CalendarDays, GraduationCap, IndianRupee, Clock];

export function PreparationHighlights({ highlights }: PreparationHighlightsProps) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-base font-bold text-[#1D4ED8]">Highlights</h2>
      <dl className="mt-4 grid gap-4">
        {highlights.map((highlight, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div key={highlight.title} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50">
                <Icon className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold text-[#111827]">{highlight.title}</dt>
                <dd className="text-xs font-semibold leading-5 text-slate-700">
                  {highlight.value}
                </dd>
                {highlight.description ? (
                  <p className="text-xs font-medium leading-5 text-slate-500">
                    {highlight.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </dl>
    </aside>
  );
}
