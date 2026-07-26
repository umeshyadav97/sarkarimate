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
        {links.map((link, index) => {
          const isExternal = isExternalHref(link.href);

          return (
            <Link
              key={`${index}-${link.label}`}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex min-h-14 items-center justify-between gap-4 rounded-lg border border-blue-200 bg-blue-50/60 px-4 py-3 outline-none transition-colors hover:border-[#1D4ED8] hover:bg-blue-100/70 focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              <span className="min-w-0">
                <span className="block text-sm font-bold text-[#1D4ED8] underline decoration-blue-300 underline-offset-4 group-hover:decoration-[#1D4ED8]">
                  {link.label}
                </span>
                {link.description ? (
                  <span className="mt-1 block text-sm font-medium text-slate-600">
                    {link.description}
                  </span>
                ) : null}
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#1D4ED8] ring-1 ring-blue-200 transition-colors group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:ring-[#1D4ED8]">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </SectionCard>
  );
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}
