import Link from 'next/link';
import { BriefcaseBusiness, Home, RefreshCw } from 'lucide-react';
import { Homepage } from '@/features/home/components/homepage';
import { getHomePageData } from '@/services/home.service';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  try {
    const data = await getHomePageData();

    if (process.env.NODE_ENV === 'development') {
      console.log('[homepage-api] response:', data);
    }

    return <Homepage initialData={data} />;
  } catch (error) {
    console.error('[homepage-api] failed:', error);

    return <HomepageErrorState />;
  }
}

function HomepageErrorState() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827]">
      <section className="mx-auto flex min-h-[calc(100vh-240px)] max-w-4xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-[#1D4ED8] ring-1 ring-blue-100">
          <RefreshCw className="h-8 w-8" aria-hidden="true" />
        </div>

        <p className="mt-5 text-sm font-bold uppercase text-[#1D4ED8]">SarkariMate updates</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
          We could not load the latest updates right now.
        </h1>
        <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600">
          The data service did not return the homepage content. Please try again in a moment, or
          continue with the latest jobs section.
        </p>

        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-bold text-[#111827] shadow-sm transition-colors hover:border-blue-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Try Again
          </Link>
          <Link
            href="/jobs"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
          >
            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
            Browse Jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
