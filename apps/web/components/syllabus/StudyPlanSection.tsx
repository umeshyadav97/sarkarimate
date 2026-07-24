import { CalendarDays } from 'lucide-react';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { StudyPlanPhase } from '@/types/syllabus';

interface StudyPlanSectionProps {
  phases?: StudyPlanPhase[];
}

export function StudyPlanSection({ phases }: StudyPlanSectionProps) {
  if (!phases?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="study-plan" title="Study Plan">
      <div className="grid gap-3">
        {phases.map((phase) => (
          <article key={phase.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-[#111827]">{phase.title}</h3>
              {phase.duration ? (
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1D4ED8]">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {phase.duration}
                </span>
              ) : null}
            </div>
            <ul className="mt-3 grid gap-2 text-sm font-medium text-slate-700">
              {phase.tasks.map((task) => (
                <li key={task} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8]" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SyllabusSectionCard>
  );
}
