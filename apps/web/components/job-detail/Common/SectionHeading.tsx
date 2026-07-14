import type { DetailIcon } from '@/components/job-detail/types';

interface SectionHeadingProps {
  title: string;
  icon?: DetailIcon;
}

export function SectionHeading({ title, icon: Icon }: SectionHeadingProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      {Icon ? (
        <Icon className="h-5 w-5 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
      ) : null}
      <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
    </div>
  );
}
