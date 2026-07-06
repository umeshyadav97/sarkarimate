export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase text-emerald-700">SarkariMate Web</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Public app foundation is ready.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            This screen is intentionally simple so the team can start building real features without
            working around generated demo code.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {['Jobs', 'Results', 'Notifications'].map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add feature code under <span className="font-medium text-slate-900">features/</span>{' '}
                when this area is implemented.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
