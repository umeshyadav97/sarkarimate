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
  return (
    <SectionCard id={id}>
      <SectionHeading title={vacancy.title || title} icon={TableProperties} />
      <DataTable columns={vacancy.columns} rows={vacancy.rows} />
    </SectionCard>
  );
}
