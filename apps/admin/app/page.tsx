export default function AdminHomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-8">
          <p className="text-sm font-semibold uppercase text-cyan-300">SarkariMate Admin</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Admin app foundation is ready.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-300">
            This page gives the admin app something visible to render while keeping dashboards,
            auth, and API behavior out until they are actually designed.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {['Content', 'Users', 'Settings'].map((item) => (
            <div key={item} className="rounded-md border border-zinc-800 bg-zinc-900 p-5">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Keep this area feature-first when real admin workflows are added.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
