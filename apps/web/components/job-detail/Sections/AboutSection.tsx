import { Landmark } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailPageData } from '@/components/job-detail/types';

interface AboutSectionProps {
  id: string;
  title: string;
  about: DetailPageData['about'];
}

export function AboutSection({ id, title, about }: AboutSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={about.title || title} icon={Landmark} />
      <div className="space-y-3 text-sm font-medium leading-7 text-slate-700">
        {about.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </SectionCard>
  );
}
