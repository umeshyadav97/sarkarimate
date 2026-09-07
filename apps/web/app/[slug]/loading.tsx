export default function DetailRouteLoading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="h-4 w-52 animate-pulse rounded bg-slate-200" />
          <div className="mt-5 h-10 w-full max-w-3xl animate-pulse rounded bg-slate-200" />
          <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-slate-100" />
          <div className="mt-2 h-5 w-full max-w-xl animate-pulse rounded bg-slate-100" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <div className="grid gap-5">
          <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
                <div className="h-6 w-full animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />
              <div className="mt-5 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-slate-100" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>

        <aside className="grid content-start gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-5 w-36 animate-pulse rounded bg-slate-200" />
              <div className="mt-4 space-y-3">
                <div className="h-10 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-10 w-full animate-pulse rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
