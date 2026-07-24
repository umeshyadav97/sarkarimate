import { TableProperties } from 'lucide-react';
import { DataTable } from '@/components/job-detail/Common/DataTable';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailPageData } from '@/components/job-detail/types';

interface VacancySectionProps {
  id: string;
  title: string;
  vacancy: DetailPageData['vacancy'];
}

export function VacancySection({ id, title, vacancy }: VacancySectionProps) {
  const headingTitle = formatVacancyTitle(vacancy.title || title);

  return (
    <SectionCard id={id}>
      <SectionHeading title={headingTitle} icon={TableProperties} />
      <DataTable columns={vacancy.columns} rows={vacancy.rows} />
    </SectionCard>
  );
}

function formatVacancyTitle(title: string) {
  const postCountMatch = title.match(/\s+Total:\s*(.+)$/i);

  if (!postCountMatch?.index) {
    return title;
  }

  return (
    <>
      {title.slice(0, postCountMatch.index)}
      <span className="ml-1.5 inline-flex px-1 py-1 text-lg font-bold text-[#1D4ED8]">
        Total: {postCountMatch[1]}
      </span>
    </>
  );
}
