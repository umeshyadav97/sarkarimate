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
      <span className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-sm font-bold text-[#1D4ED8] align-middle">
        <span className="text-slate-700">Total:</span>
        <span className="text-lg leading-none text-[#1D4ED8]">{postCountMatch[1]}</span>
      </span>
    </>
  );
}
