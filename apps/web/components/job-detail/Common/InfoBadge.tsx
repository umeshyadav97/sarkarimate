const toneClasses = {
  blue: 'bg-blue-50 text-[#1D4ED8] ring-blue-100',
  green: 'bg-emerald-50 text-[#047857] ring-emerald-100',
  red: 'bg-red-50 text-[#DC2626] ring-red-100',
  orange: 'bg-orange-50 text-[#F59E0B] ring-orange-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
};

interface InfoBadgeProps {
  label: string;
  tone?: keyof typeof toneClasses;
}

export function InfoBadge({ label, tone = 'slate' }: InfoBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}
