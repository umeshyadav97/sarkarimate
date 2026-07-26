import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { RelatedSyllabusGuide } from '@/types/syllabus';

interface RelatedSyllabusGuidesProps {
  guides?: RelatedSyllabusGuide[];
}

export function RelatedSyllabusGuides({ guides }: RelatedSyllabusGuidesProps) {
  if (!guides?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="related-guides" title="Related Syllabus Guides">
      <div className="grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 outline-none hover:border-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            {guide.category ? (
              <p className="text-xs font-bold uppercase text-[#1D4ED8]">{guide.category}</p>
            ) : null}
            <h3 className="mt-1 text-sm font-bold text-[#111827]">{guide.title}</h3>
            {guide.description ? (
              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                {guide.description}
              </p>
            ) : null}
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#1D4ED8]">
              Open Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </SyllabusSectionCard>
  );
}
