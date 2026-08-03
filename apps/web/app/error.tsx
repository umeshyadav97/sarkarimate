'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-[#F8FAFC] text-[#111827]">
      <section className="mx-auto flex min-h-[calc(100vh-240px)] max-w-4xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-[#1D4ED8] ring-1 ring-blue-100">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </div>

        <p className="mt-5 text-sm font-bold uppercase text-[#1D4ED8]">Something went wrong</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
          This page could not load.
        </h1>
        <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600">
          Please refresh the page. If the issue continues, use the home page or latest jobs section
          while we recover this route.
        </p>

        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            suppressHydrationWarning
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-bold text-[#111827] shadow-sm transition-colors hover:border-blue-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}
