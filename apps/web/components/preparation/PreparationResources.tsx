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
import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { PreparationResource } from '@/types/preparation';

interface PreparationResourcesProps {
  resources?: PreparationResource[];
}

export function PreparationResources({ resources }: PreparationResourcesProps) {
  if (!resources?.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="resources" title="Preparation Guide" index={4}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {resources.map((resource, index) => {
          const Icon = resourceIcons[index % resourceIcons.length];
          const content = (
            <>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50">
                <Icon className="h-6 w-6 text-[#1D4ED8]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xs font-bold leading-5 text-[#111827]">{resource.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">
                {resource.description}
              </p>
              {resource.href ? (
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#1D4ED8]">
                  View <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}
            </>
          );

          return resource.href ? (
            <Link
              key={resource.title}
              href={resource.href}
              className="flex min-h-[150px] flex-col rounded-lg border border-slate-200 bg-white p-4 outline-none hover:border-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {content}
            </Link>
          ) : (
            <article
              key={resource.title}
              className="flex min-h-[150px] flex-col rounded-lg border border-slate-200 bg-white p-4"
            >
              {content}
            </article>
          );
        })}
      </div>
    </PreparationSectionCard>
  );
}

const resourceIcons = [Target, BookOpen, FileText, Trophy, CalendarDays, LineChart];
