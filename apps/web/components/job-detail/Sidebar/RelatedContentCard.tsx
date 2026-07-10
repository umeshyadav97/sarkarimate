import Link from 'next/link';
import { ChevronRight, Link2 } from 'lucide-react';
import type { DetailRelatedContent } from '@/components/job-detail/types';

interface RelatedContentCardProps {
  content: DetailRelatedContent;
}

export function RelatedContentCard({ content }: RelatedContentCardProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <Link2 className="h-5 w-5 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
        {content.title}
      </h2>
      <ul className="mt-4 space-y-3">
        {content.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-start gap-2 rounded-md text-sm font-semibold leading-6 text-slate-700 outline-none hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              <ChevronRight
                className="mt-1 h-4 w-4 shrink-0 text-[#1D4ED8]"
                strokeWidth={2.6}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={content.href}
        className="mt-5 flex min-h-11 items-center justify-center rounded-lg border border-[#1D4ED8] px-4 text-sm font-bold text-[#1D4ED8] outline-none hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
      >
        {content.buttonText}
      </Link>
    </aside>
  );
}
