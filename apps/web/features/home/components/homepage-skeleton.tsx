export function HomepageSkeleton() {
  return (
    <div aria-label="Loading homepage" className="grid gap-5">
      <section className="mx-auto grid w-full max-w-full items-center gap-6 px-4 py-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="min-w-0">
          <div className="h-8 w-52 animate-pulse rounded bg-slate-100 md:h-12 md:w-96" />
          <div className="mt-3 h-8 w-44 animate-pulse rounded bg-slate-100 md:h-12 md:w-80" />
          <div className="mt-4 h-5 max-w-lg animate-pulse rounded bg-slate-100" />
          <div className="mt-2 h-5 w-4/5 animate-pulse rounded bg-slate-100" />
          <div className="mt-4 h-12 max-w-xl animate-pulse rounded-lg bg-slate-100" />
        </div>

        <div className="flex w-full flex-wrap gap-3 md:col-span-2">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-8 w-28 animate-pulse rounded-full bg-slate-100" />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-full px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-6">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="grid min-h-28 place-items-center gap-3 border-slate-100 p-3"
            >
              <span className="h-10 w-10 animate-pulse rounded-xl bg-slate-100" />
              <span className="h-4 w-20 animate-pulse rounded bg-slate-100" />
              <span className="h-3 w-16 animate-pulse rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-full grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-2 sm:px-6 xl:grid-cols-3 lg:px-8">
        {Array.from({ length: 3 }, (_, panelIndex) => (
          <div
            key={panelIndex}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="h-6 w-36 animate-pulse rounded bg-slate-100" />
            <div className="mt-4 divide-y divide-slate-100">
              {Array.from({ length: 5 }, (_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-[1fr_5rem] gap-4 py-4">
                  <div>
                    <div className="h-4 animate-pulse rounded bg-slate-100" />
                    <div className="mt-2 h-3 w-32 animate-pulse rounded bg-slate-100" />
                  </div>
                  <div className="h-6 animate-pulse rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-3 h-11 animate-pulse rounded-md bg-slate-100" />
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="h-6 w-44 animate-pulse rounded bg-slate-100" />
            <div className="h-10 w-24 animate-pulse rounded bg-slate-100" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-lg bg-slate-100" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-full px-4 py-2 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-6 w-36 animate-pulse rounded bg-slate-100" />
          <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-8">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="h-32 animate-pulse rounded-lg bg-slate-100" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="h-12 w-12 animate-pulse rounded-lg bg-slate-100" />
              <span className="grid flex-1 gap-2">
                <span className="h-6 w-24 animate-pulse rounded bg-slate-100" />
                <span className="h-4 w-32 animate-pulse rounded bg-slate-100" />
                <span className="h-3 w-28 animate-pulse rounded bg-slate-100" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
