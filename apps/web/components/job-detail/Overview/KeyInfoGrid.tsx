import {
  BadgeIndianRupee,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  GraduationCap,
  Hourglass,
  ShieldCheck,
  Venus,
} from 'lucide-react';
import type { DetailKeyInfo } from '@/components/job-detail/types';

interface KeyInfoGridProps {
  items: DetailKeyInfo[];
}

const toneClasses = {
  blue: {
    icon: 'bg-blue-50 text-[#1D4ED8] ring-blue-100',
    value: 'text-[#1D4ED8]',
  },
  green: {
    icon: 'bg-emerald-50 text-[#059669] ring-emerald-100',
    value: 'text-[#059669]',
  },
  red: {
    icon: 'bg-red-50 text-[#DC2626] ring-red-100',
    value: 'text-[#DC2626]',
  },
  orange: {
    icon: 'bg-orange-50 text-[#EA580C] ring-orange-100',
    value: 'text-[#059669]',
  },
  pink: {
    icon: 'bg-rose-50 text-[#E11D48] ring-rose-100',
    value: 'text-[#DC2626]',
  },
  slate: {
    icon: 'bg-slate-100 text-slate-700 ring-slate-200',
    value: 'text-slate-700',
  },
};

type VisualTone = keyof typeof toneClasses;

function getVisualTreatment(label: string): { icon: typeof CalendarDays; tone: VisualTone } {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('last date')) {
    return { icon: CalendarDays, tone: 'blue' };
  }

  if (normalizedLabel.includes('post') || normalizedLabel.includes('vacancy')) {
    return { icon: BriefcaseBusiness, tone: 'blue' };
  }

  if (normalizedLabel.includes('age')) {
    return { icon: Hourglass, tone: 'orange' };
  }

  if (normalizedLabel.includes('status')) {
    return { icon: CircleCheck, tone: 'green' };
  }

  if (normalizedLabel.includes('qualification')) {
    return { icon: GraduationCap, tone: 'blue' };
  }

  if (normalizedLabel.includes('fee')) {
    return { icon: BadgeIndianRupee, tone: 'green' };
  }

  if (normalizedLabel.includes('gender')) {
    return { icon: Venus, tone: 'pink' };
  }

  return { icon: ShieldCheck, tone: 'blue' };
}

export function KeyInfoGrid({ items }: KeyInfoGridProps) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const { icon: Icon, tone } = getVisualTreatment(item.label);
        const valueTone = item.tone === 'red' ? 'red' : item.tone === 'slate' ? 'slate' : tone;

        return (
          <div
            key={`${item.label}-${item.value}`}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-left lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:text-center"
          >
            <dt className="flex shrink-0 items-center gap-3 lg:block">
              <span
                className={`grid h-10 w-10 place-items-center rounded-full ring-1 lg:mx-auto lg:h-12 lg:w-12 ${toneClasses[tone].icon}`}
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden="true" />
              </span>
              <span className="hidden text-sm font-bold text-slate-700 lg:mt-3 lg:block">
                {item.label}
              </span>
            </dt>
            <dd className="min-w-0 lg:mt-2">
              <span className="block text-sm font-bold text-slate-700 lg:hidden">{item.label}</span>
              <span
                className={`mt-1 block text-sm font-bold lg:mt-0 ${toneClasses[valueTone].value}`}
              >
                {item.value}
              </span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
