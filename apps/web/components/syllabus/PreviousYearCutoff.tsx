import { SyllabusDataTable } from '@/components/syllabus/SyllabusDataTable';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusTable } from '@/types/syllabus';

interface PreviousYearCutoffProps {
  cutoff?: SyllabusTable;
  tier2Cutoff?: SyllabusTable;
  cutoffHeading?: string;
  tier1CutoffHeading?: string;
  tier2CutoffHeading?: string;
}

export function PreviousYearCutoff({
  cutoff,
  tier2Cutoff,
  cutoffHeading,
  tier1CutoffHeading,
  tier2CutoffHeading,
}: PreviousYearCutoffProps) {
  const hasTier1Cutoff = Boolean(cutoff?.rows.length);
  const hasTier2Cutoff = Boolean(tier2Cutoff?.rows.length);
  const primaryHeading = hasTier2Cutoff ? (tier1CutoffHeading ?? 'Tier 1 Cutoff') : cutoffHeading;

  if (!hasTier1Cutoff && !hasTier2Cutoff) {
    return null;
  }

  return (
    <SyllabusSectionCard id="previous-year-cutoff" title="Previous Year Cutoff">
      {hasTier1Cutoff && cutoff ? (
        <div>
          {primaryHeading ? (
            <h3 className="mb-3 text-base font-bold text-[#111827]">{primaryHeading}</h3>
          ) : null}
          <SyllabusDataTable table={cutoff} />
        </div>
      ) : null}

      {hasTier2Cutoff && tier2Cutoff ? (
        <div id="previous-year-cutoff-tier-2" className="mt-5 scroll-mt-28">
          <h3 className="mb-3 text-base font-bold text-[#111827]">
            {tier2CutoffHeading ?? 'Tier 2 Cutoff'}
          </h3>
          <SyllabusDataTable table={tier2Cutoff} />
        </div>
      ) : null}
    </SyllabusSectionCard>
  );
}
