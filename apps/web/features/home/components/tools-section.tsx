import { Card } from '@repo/ui';
import { importantTools } from '@/features/home/constants/homepage-data';
import { SectionHeader } from '@/features/home/components/section-header';

export function ImportantToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <Card className="rounded-lg p-4">
        <SectionHeader actionLabel="" title="Important Tools" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {importantTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <a
                key={tool.title}
                href="#"
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 hover:bg-blue-50"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-[#1D4ED8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-[#111827]">{tool.title}</span>
                  <span className="mt-1 block text-xs font-semibold text-slate-500">
                    {tool.description}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
