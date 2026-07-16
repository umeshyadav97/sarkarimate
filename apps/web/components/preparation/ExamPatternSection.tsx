import { ArrowRight } from 'lucide-react';
import { PreparationDataTable } from '@/components/preparation/PreparationDataTable';
import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { PreparationTable } from '@/types/preparation';

interface ExamPatternSectionProps {
  pattern?: PreparationTable;
}

export function ExamPatternSection({ pattern }: ExamPatternSectionProps) {
  if (!pattern?.rows.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="exam-pattern" title="Exam Pattern" index={3}>
      <PreparationDataTable table={pattern} />
      <a
        href="#"
        className="mt-3 flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-xs font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
      >
        View Detailed Exam Pattern
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </PreparationSectionCard>
  );
}
