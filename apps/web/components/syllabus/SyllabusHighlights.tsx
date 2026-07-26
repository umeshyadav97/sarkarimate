import { AlertTriangle, CalendarDays, Clock, GraduationCap, IndianRupee } from 'lucide-react';
import type { SyllabusHighlight } from '@/types/syllabus';

interface SyllabusHighlightsProps {
  highlights?: SyllabusHighlight[];
}

const icons = [AlertTriangle, CalendarDays, GraduationCap, IndianRupee, Clock];

export function SyllabusHighlights({ highlights }: SyllabusHighlightsProps) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-[#111827]">Highlights</h2>
      <dl className="mt-4 grid gap-4">
        {highlights.map((highlight, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div key={highlight.title} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50">
                <Icon className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-sm font-bold text-[#111827]">{highlight.title}</dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                  {highlight.value}
                </dd>
                {highlight.description ? (
                  <p className="text-sm font-medium leading-6 text-slate-500">
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
