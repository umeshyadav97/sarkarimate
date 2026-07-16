import { PreparationDataTable } from '@/components/preparation/PreparationDataTable';
import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { PreparationTable } from '@/types/preparation';

interface PreviousYearCutoffProps {
  cutoff?: PreparationTable;
}

export function PreviousYearCutoff({ cutoff }: PreviousYearCutoffProps) {
  if (!cutoff?.rows.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="previous-year-cutoff" title="Previous Year Cutoff">
      <PreparationDataTable table={cutoff} />
    </PreparationSectionCard>
  );
}
