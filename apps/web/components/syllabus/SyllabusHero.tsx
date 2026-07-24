import Link from 'next/link';
import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Monitor,
  Users,
} from 'lucide-react';
import { HeaderActions } from '@/components/job-detail/JobHeader/HeaderActions';
import type { SyllabusGuide } from '@/types/syllabus';

interface SyllabusHeroProps {
  guide: SyllabusGuide;
}

export function SyllabusHero({ guide }: SyllabusHeroProps) {
  return (
    <header className="mx-auto w-full max-w-full px-4 pt-6 sm:px-6 lg:px-8">
      <div>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
            {guide.breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === guide.breadcrumbs.length - 1;
              return (
                <li key={breadcrumb.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-slate-900" aria-current="page">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link
                      href={breadcrumb.href}
                      className="rounded-sm hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                  {isLast ? null : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                  {guide.title}
                </h1>
                {guide.badgeLabel ? (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1D4ED8]">
                    {guide.badgeLabel}
                  </span>
                ) : null}
              </div>
            </div>
            <HeaderActions
              title={guide.title}
              description={guide.seo.description}
              canonicalPath={guide.seo.canonical}
              bookmarkKey={`syllabus:${guide.slug}`}
            />
          </div>

          {guide.heroFacts?.length ? (
            <dl className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
              {guide.heroFacts.map((fact) => (
                <div key={fact.label} className="flex min-w-0 items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                    <HeroFactIcon label={fact.label} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-sm font-bold text-[#111827]">{fact.label}</dt>
                    <dd className="mt-1 break-words text-sm font-semibold leading-5 text-slate-600">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function HeroFactIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes('body')) {
    return <Building2 className="h-5 w-5" aria-hidden="true" />;
  }

  if (normalized.includes('mode')) {
    return <Monitor className="h-5 w-5" aria-hidden="true" />;
  }

  if (normalized.includes('level')) {
    return <GraduationCap className="h-5 w-5" aria-hidden="true" />;
  }

  if (normalized.includes('selection')) {
    return <Users className="h-5 w-5" aria-hidden="true" />;
  }

  if (normalized.includes('website')) {
    return <Globe2 className="h-5 w-5" aria-hidden="true" />;
  }

  return <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />;
}
