'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
  LineChart,
  Target,
  Trophy,
} from 'lucide-react';
import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusResource } from '@/types/syllabus';

interface SyllabusResourcesProps {
  resources?: SyllabusResource[];
}

export function SyllabusResources({ resources }: SyllabusResourcesProps) {
  if (!resources?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="resources" title="Syllabus Guide" index={4}>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource, index) => {
          const Icon = resourceIcons[index % resourceIcons.length];
          const isAvailable = resource.href ? availableResourceHrefs.has(resource.href) : false;
          const content = (
            <>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50">
                <Icon className="h-6 w-6 text-[#1D4ED8]" aria-hidden="true" />
              </span>
              {!isAvailable ? (
                <span className="mt-4 inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#1D4ED8] ring-1 ring-blue-100">
                  Coming Soon
                </span>
              ) : null}
              <h3 className="mt-4 text-sm font-bold leading-5 text-[#111827]">{resource.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {resource.description}
              </p>
              {isAvailable ? (
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-bold text-[#1D4ED8]">
                  View <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : (
                <span className="mt-auto inline-flex items-center pt-3 text-sm font-bold text-[#1D4ED8]">
                  Coming Soon
                </span>
              )}
            </>
          );

          return isAvailable && resource.href ? (
            resource.href === '#previous-year-cutoff' ? (
              <button
                key={resource.title}
                type="button"
                suppressHydrationWarning
                onClick={scrollToCutoff}
                className="flex min-h-[170px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 text-left outline-none hover:border-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
              >
                {content}
              </button>
            ) : (
              <Link
                key={resource.title}
                href={resource.href}
                className="flex min-h-[170px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 outline-none hover:border-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
              >
                {content}
              </Link>
            )
          ) : (
            <article
              key={resource.title}
              className="flex min-h-[170px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              {content}
            </article>
          );
        })}
      </div>
    </SyllabusSectionCard>
  );
}

const resourceIcons = [Target, BookOpen, FileText, Trophy, CalendarDays, LineChart];

const availableResourceHrefs = new Set(['#previous-year-cutoff']);

function scrollToCutoff() {
  document
    .getElementById('previous-year-cutoff')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
