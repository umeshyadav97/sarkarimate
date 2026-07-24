import { ArrowRight } from 'lucide-react';
import { SyllabusDataTable } from '@/components/syllabus/SyllabusDataTable';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusTable } from '@/types/syllabus';

interface ExamPatternSectionProps {
  pattern?: SyllabusTable;
}

export function ExamPatternSection({ pattern }: ExamPatternSectionProps) {
  if (!pattern?.rows.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="exam-pattern" title="Exam Pattern" index={3}>
      <SyllabusDataTable table={pattern} />
      {/* <a
        href="#"
        className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
      >
        View Detailed Exam Pattern
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a> */}
    </SyllabusSectionCard>
  );
}
