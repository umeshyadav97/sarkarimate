import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  Download,
  Languages,
  Landmark,
} from 'lucide-react';
import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { SyllabusSubject } from '@/types/preparation';

interface SyllabusSectionProps {
  subjects?: SyllabusSubject[];
}

export function SyllabusSection({ subjects }: SyllabusSectionProps) {
  if (!subjects?.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="syllabus" title="Syllabus" index={2}>
      <p className="text-xs font-semibold leading-6 text-slate-700 sm:text-sm">
        The SSC CGL syllabus is divided into 4 subjects for Tier 1 and advanced level in Tier 2.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => {
          const Icon = getSubjectIcon(subject.name);

          return (
            <article
              key={subject.name}
              className="flex min-h-[188px] flex-col rounded-lg border border-slate-200 bg-white p-3.5"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50">
                  <Icon className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
                </span>
                <h3 className="min-w-0 text-xs font-bold leading-5 text-[#111827]">
                  {subject.name}
                </h3>
              </div>
              {subject.description ? (
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {subject.description}
                </p>
              ) : null}
              <ul className="mt-3 grid gap-1 text-xs font-semibold leading-5 text-slate-700">
                {subject.topics.slice(0, 6).map((topic) => (
                  <li key={topic}>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold text-[#1D4ED8]">
                View Topics <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </article>
          );
        })}
      </div>
      <a
        href="#"
        className="mt-4 flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-xs font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
      >
        Download Detailed Syllabus PDF
        <Download className="h-4 w-4" aria-hidden="true" />
      </a>
    </PreparationSectionCard>
  );
}

function getSubjectIcon(name: string) {
  const normalized = name.toLowerCase();

  if (normalized.includes('reasoning') || normalized.includes('intelligence')) {
    return Brain;
  }

  if (normalized.includes('quant') || normalized.includes('math')) {
    return Calculator;
  }

  if (normalized.includes('english') || normalized.includes('language')) {
    return Languages;
  }

  if (normalized.includes('awareness') || normalized.includes('studies')) {
    return Landmark;
  }

  return BookOpen;
}
