import Link from 'next/link';
import { FileText } from 'lucide-react';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { PreviousYearPaper } from '@/types/syllabus';

interface PreviousYearPapersProps {
  papers?: PreviousYearPaper[];
}

export function PreviousYearPapers({ papers }: PreviousYearPapersProps) {
  if (!papers?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="previous-year-papers" title="Previous Year Papers">
      <div className="grid gap-3 sm:grid-cols-3">
        {papers.map((paper) => {
          const content = (
            <>
              <FileText className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#111827]">{paper.title}</span>
              {paper.year ? (
                <span className="text-sm font-semibold text-slate-500">{paper.year}</span>
              ) : null}
            </>
          );

          return paper.href ? (
            <Link
              key={paper.title}
              href={paper.href}
              className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 hover:border-[#1D4ED8]"
            >
              {content}
            </Link>
          ) : (
            <article
              key={paper.title}
              className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              {content}
            </article>
          );
        })}
      </div>
    </SyllabusSectionCard>
  );
}
