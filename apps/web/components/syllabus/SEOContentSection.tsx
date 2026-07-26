import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SEOContentBlock } from '@/types/syllabus';

interface SEOContentSectionProps {
  blocks?: SEOContentBlock[];
}

export function SEOContentSection({ blocks }: SEOContentSectionProps) {
  if (!blocks?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="official-update" title="Official Update">
      <div className="grid gap-5">
        {blocks.map((block) => (
          <article key={block.title}>
            <h3 className="text-base font-bold text-[#111827]">{block.title}</h3>
            <div className="mt-2 grid gap-3">
              {block.body.map((paragraph) => (
                <p key={paragraph} className="text-sm font-medium leading-6 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SyllabusSectionCard>
  );
}
