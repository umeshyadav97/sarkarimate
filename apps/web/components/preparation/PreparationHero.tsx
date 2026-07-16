import Link from 'next/link';
import {
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Monitor,
  Share2,
  Users,
} from 'lucide-react';
import type { PreparationGuide } from '@/types/preparation';

interface PreparationHeroProps {
  guide: PreparationGuide;
}

export function PreparationHero({ guide }: PreparationHeroProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-full px-4 py-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
            {guide.breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === guide.breadcrumbs.length - 1;
              return (
                <li key={breadcrumb.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-slate-900" aria-current="page">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link href={breadcrumb.href} className="hover:text-[#1D4ED8]">
                      {breadcrumb.label}
                    </Link>
                  )}
                  {isLast ? null : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl">
                  {guide.title}
                </h1>
                {guide.badgeLabel ? (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1D4ED8]">
                    {guide.badgeLabel}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-[#111827]">
              <button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-50">
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-slate-50">
                <Bookmark className="h-4 w-4" aria-hidden="true" />
                Save
              </button>
            </div>
          </div>

          {guide.heroFacts?.length ? (
            <dl className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
              {guide.heroFacts.map((fact) => (
                <div key={fact.label} className="flex min-w-0 items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1D4ED8]">
                    <HeroFactIcon label={fact.label} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold text-[#111827]">{fact.label}</dt>
                    <dd className="mt-1 break-words text-xs font-semibold leading-5 text-slate-600">
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
