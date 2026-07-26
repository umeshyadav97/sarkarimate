import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SelectionProcessStep } from '@/types/syllabus';

interface SelectionProcessSectionProps {
  steps?: SelectionProcessStep[];
}

export function SelectionProcessSection({ steps }: SelectionProcessSectionProps) {
  if (!steps?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="selection-process" title="Selection Process">
      <ol className="grid gap-3">
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-start gap-3">
            <span className="flex shrink-0 flex-col items-center">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1D4ED8] text-sm font-bold text-white">
                {index + 1}
              </span>
              {index === steps.length - 1 ? null : <span className="mt-1 h-6 w-px bg-slate-200" />}
            </span>
            <span className="pb-1">
              <span className="block text-sm font-bold text-[#111827]">{step.title}</span>
              {step.description ? (
                <span className="mt-1 block text-sm font-medium leading-6 text-slate-600">
                  {step.description}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </SyllabusSectionCard>
  );
}
