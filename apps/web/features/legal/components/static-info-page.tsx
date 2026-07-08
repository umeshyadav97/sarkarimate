import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@repo/ui';
import type { LegalPageContent } from '@/features/legal/constants/legal-pages';

export function StaticInfoPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-10 text-[#111827] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>

        <Card className="rounded-lg p-6 shadow-sm sm:p-8">
          <header className="border-b border-slate-200 pb-6">
            <p className="text-sm font-bold uppercase text-[#1D4ED8]">SarkariMate</p>
            <h1 className="mt-2 text-3xl font-bold tracking-normal text-[#111827] sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base font-medium leading-7 text-slate-600">
              {page.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Last updated: {page.lastUpdated}
            </p>
          </header>

          <div className="mt-7 space-y-7">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-[#111827]">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base font-medium leading-7 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {page.links ? (
            <nav className="mt-8 grid gap-3 sm:grid-cols-2" aria-label={`${page.title} links`}>
              {page.links.map((link) => (
                <InfoLink key={link.label} href={link.href} label={link.label} />
              ))}
            </nav>
          ) : null}

          {page.linkGroups ? (
            <nav
              className="mt-8 grid gap-4 sm:grid-cols-3"
              aria-label={`${page.title} grouped links`}
            >
              {page.linkGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <h2 className="text-base font-bold text-[#111827]">{group.title}</h2>
                  <ul className="mt-3 space-y-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <InfoLink href={link.href} label={link.label} compact />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>
          ) : null}
        </Card>
      </article>
    </main>
  );
}

function InfoLink({
  href,
  label,
  compact = false,
}: {
  href: string;
  label: string;
  compact?: boolean;
}) {
  const className = compact
    ? 'flex items-center justify-between rounded-md px-1 py-1 text-sm font-bold text-[#1D4ED8] hover:bg-blue-50'
    : 'flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1D4ED8] hover:bg-blue-50';

  if (href.startsWith('mailto:')) {
    return (
      <a className={className} href={href}>
        {label}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
