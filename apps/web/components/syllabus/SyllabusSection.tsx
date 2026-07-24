import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  Download,
  Languages,
  Landmark,
} from 'lucide-react';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusGuide, SyllabusSubject } from '@/types/syllabus';

interface SyllabusSectionProps {
  guide: SyllabusGuide;
  subjects?: SyllabusSubject[];
}

export function SyllabusSection({ guide, subjects }: SyllabusSectionProps) {
  if (!subjects?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="syllabus" title="Syllabus" index={2}>
      <p className="text-sm font-semibold leading-6 text-slate-700">
        The {guide.examName} syllabus is divided into {subjects.length} subject
        {subjects.length === 1 ? '' : 's'}. Review each section topic-wise before starting mock
        tests and previous year papers.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => {
          const Icon = getSubjectIcon(subject.name);

          return (
            <article
              key={subject.name}
              className="flex min-h-[190px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50">
                  <Icon className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
                </span>
                <h3 className="min-w-0 text-sm font-bold leading-5 text-[#111827]">
                  {subject.name}
                </h3>
              </div>
              {subject.description ? (
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {subject.description}
                </p>
              ) : null}
              <ul className="mt-3 grid gap-1 text-sm font-semibold leading-5 text-slate-700">
                {subject.topics.slice(0, 6).map((topic) => (
                  <li key={topic}>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              {/* <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-bold text-[#1D4ED8]">
                View Topics <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span> */}
            </article>
          );
        })}
      </div>
      {/* <a
        href="#"
        className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
      >
        Download Detailed Syllabus PDF
        <Download className="h-4 w-4" aria-hidden="true" />
      </a> */}
    </SyllabusSectionCard>
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
