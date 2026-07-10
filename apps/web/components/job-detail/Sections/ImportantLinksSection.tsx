import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailLink } from '@/components/job-detail/types';

interface ImportantLinksSectionProps {
  id: string;
  title: string;
  links: DetailLink[];
}

export function ImportantLinksSection({ id, title, links }: ImportantLinksSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={ExternalLink} />
      <div className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex min-h-14 items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 outline-none hover:border-[#1D4ED8] hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span>
              <span className="block text-sm font-bold text-[#111827]">{link.label}</span>
              {link.description ? (
                <span className="mt-1 block text-sm font-medium text-slate-600">
                  {link.description}
                </span>
              ) : null}
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </SectionCard>
  );
}
