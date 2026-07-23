import { SyllabusDataTable } from '@/components/syllabus/SyllabusDataTable';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusTable } from '@/types/syllabus';

interface PreviousYearCutoffProps {
  cutoff?: SyllabusTable;
}

export function PreviousYearCutoff({ cutoff }: PreviousYearCutoffProps) {
  if (!cutoff?.rows.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="previous-year-cutoff" title="Previous Year Cutoff">
      <SyllabusDataTable table={cutoff} />
    </SyllabusSectionCard>
  );
}
