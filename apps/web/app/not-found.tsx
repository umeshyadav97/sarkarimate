import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileBadge,
  Home,
  Landmark,
  Search,
  Trophy,
} from 'lucide-react';

const quickLinks = [
  {
    label: 'Latest Jobs',
    href: '/jobs',
    description: 'Fresh government job notifications',
    icon: BriefcaseBusiness,
    className: 'border-blue-100 bg-blue-50 text-[#1D4ED8]',
  },
  {
    label: 'Admit Cards',
    href: '/admit-cards',
    description: 'Hall tickets and exam city updates',
    icon: FileBadge,
    className: 'border-red-100 bg-red-50 text-[#DC2626]',
  },
  {
    label: 'Results',
    href: '/results',
    description: 'Merit lists, marks and scorecards',
    icon: Trophy,
    className: 'border-amber-100 bg-amber-50 text-[#B45309]',
  },
  {
    label: 'Syllabus',
    href: '/syllabus',
    description: 'Exam patterns and syllabus topics',
    icon: BookOpen,
    className: 'border-emerald-100 bg-emerald-50 text-[#047857]',
  },
  {
    label: 'Answer Keys',
    href: '/answer-keys',
    description: 'Official keys and objection windows',
    icon: ClipboardCheck,
    className: 'border-sky-100 bg-sky-50 text-[#0369A1]',
  },
  {
    label: 'Schemes',
    href: '/schemes',
    description: 'Government schemes and benefits',
    icon: Landmark,
    className: 'border-violet-100 bg-violet-50 text-[#6D28D9]',
  },
];

const searchHints = ['SSC', 'Railway', 'UPSC', 'Police', 'Teacher', 'Bank'];

export default function NotFound() {
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#111827]">
      <section className="mx-auto grid min-h-[calc(100vh-240px)] max-w-7xl items-center gap-6 px-4 py-6 sm:px-6 md:py-8 xl:grid-cols-[0.88fr_1.12fr] xl:gap-8 xl:px-8 xl:py-10">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-[#1D4ED8] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <Search className="h-4 w-4" aria-hidden="true" />
            Page not found
          </div>

          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-[#111827] sm:text-4xl xl:text-5xl">
            This update seems to have moved.
          </h1>
          <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-base">
            The link may be old, mistyped, or the notification was shifted to another section.
            Let&apos;s get you back to the right SarkariMate desk.
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-500">
            यह page नहीं मिला, लेकिन सही जानकारी अभी भी पास में है।
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Go to Home
            </Link>
            <Link
              href="/jobs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-bold text-[#111827] shadow-sm transition-colors hover:border-blue-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
            >
              Browse Latest Jobs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7">
            <p className="text-sm font-bold text-[#111827]">Try a popular search:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {searchHints.map((hint) => (
                <Link
                  key={hint}
                  href={`/jobs?q=${encodeURIComponent(hint)}`}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#1D4ED8] ring-1 ring-blue-100 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                >
                  {hint}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-[#F8FAFC]">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Notice board</p>
                <h2 className="text-base font-bold text-[#111827]">Find your section</h2>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-red-50 text-lg font-bold text-[#DC2626] ring-1 ring-red-100">
                404
              </div>
            </div>

            <div className="grid gap-3 p-3 sm:grid-cols-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(29,78,216,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-lg border ${item.className}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-[#111827]">{item.label}</span>
                      <ArrowRight
                        className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#1D4ED8]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-5 text-slate-500">
                      {item.description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
