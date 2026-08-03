'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileBadge,
  Trophy,
} from 'lucide-react';
import type { ListingSidebarSection } from '@/components/listing/types';

interface ListingSidebarLinksCardProps {
  section: ListingSidebarSection;
}

const sectionIcons = {
  'latest-jobs': BriefcaseBusiness,
  'admit-cards': FileBadge,
  results: Trophy,
  'answer-keys': ClipboardCheck,
  syllabus: BookOpen,
};

export function ListingSidebarLinksCard({ section }: ListingSidebarLinksCardProps) {
  const Icon = sectionIcons[section.type];

  if (section.items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <Icon className="h-5 w-5 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
        {section.title}
      </h2>

      <div className="mt-4 grid gap-2.5">
        {section.items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 px-3 py-2.5 outline-none transition-colors hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span className="min-w-0">
              <span className="line-clamp-2 text-sm font-bold leading-5 text-[#1D4ED8] underline decoration-blue-200 underline-offset-4 group-hover:decoration-[#1D4ED8]">
                {item.title}
              </span>
              <span className="mt-1 block truncate text-xs font-semibold text-slate-500">
                {item.organization}
              </span>
            </span>
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
