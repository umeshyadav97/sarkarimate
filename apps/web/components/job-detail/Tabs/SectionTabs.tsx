'use client';

import { useMemo } from 'react';
import {
  CalendarDays,
  CircleHelp,
  ClipboardCheck,
  Landmark,
  Link2,
  TableProperties,
  UserCheck,
} from 'lucide-react';
import type { DetailSectionConfig } from '@/components/job-detail/types';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface SectionTabsProps {
  sections: DetailSectionConfig[];
}

const sectionIcons = {
  overview: Landmark,
  'important-dates': CalendarDays,
  vacancy: TableProperties,
  eligibility: UserCheck,
  'how-to-apply': ClipboardCheck,
  'age-limit': UserCheck,
  'application-fee': ClipboardCheck,
  'selection-process': ClipboardCheck,
  'important-links': Link2,
  faq: CircleHelp,
  timeline: CalendarDays,
};

export function SectionTabs({ sections }: SectionTabsProps) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      className="sticky top-[104px] z-30 hidden overflow-x-auto border-b border-slate-200 bg-[#F8FAFC]/95 px-4 pt-3 backdrop-blur md:block sm:px-6 lg:px-8"
      aria-label="Page sections"
    >
      <ul className="mx-auto flex max-w-full min-w-max gap-6">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          const Icon = sectionIcons[section.id];
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex min-h-10 items-center gap-2 border-b-2 px-0 text-sm font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  isActive
                    ? 'border-[#1D4ED8] text-[#1D4ED8]'
                    : 'border-transparent text-slate-700 hover:text-[#1D4ED8]'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                <Icon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
