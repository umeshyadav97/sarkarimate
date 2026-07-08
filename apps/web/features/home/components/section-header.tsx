import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  href?: string;
  actionLabel?: string;
}

export function SectionHeader({ title, href = '#', actionLabel = 'View All' }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 className="md:text-xl text-md font-bold text-[#111827]">{title}</h2>
      {actionLabel ? (
        <Link href={href} className="text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF]">
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
