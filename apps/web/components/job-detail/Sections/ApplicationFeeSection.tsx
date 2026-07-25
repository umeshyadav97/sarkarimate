import {
  BadgeIndianRupeeIcon,
  CreditCard,
  Landmark,
  Smartphone,
  WalletCards,
  type LucideIcon,
} from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import type { DetailKeyInfo } from '@/components/job-detail/types';

const onlinePaymentModes: {
  label: string;
  Icon: LucideIcon;
}[] = [
  {
    label: 'Debit Card',
    Icon: CreditCard,
  },
  {
    label: 'Credit Card',
    Icon: CreditCard,
  },
  {
    label: 'Internet Banking',
    Icon: Landmark,
  },
  {
    label: 'IMPS',
    Icon: Smartphone,
  },
  {
    label: 'Cash Card / Mobile Wallet',
    Icon: WalletCards,
  },
];

interface ApplicationFeeSectionProps {
  id: string;
  title: string;
  items: DetailKeyInfo[];
  note: string;
}

export function ApplicationFeeSection({ id, title, items, note }: ApplicationFeeSectionProps) {
  return (
    <SectionCard id={id}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BadgeIndianRupeeIcon
            className="h-5 w-5 text-[#1D4ED8]"
            strokeWidth={2.4}
            aria-hidden="true"
          />
          <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
        </div>
      </div>
      {items.length ? (
        <dl className="mb-3 grid gap-3">
          {items.map((fee) => (
            <div
              key={`${fee.label}-${fee.value}`}
              className="flex min-w-0 items-center justify-between gap-4"
            >
              <dt className="min-w-0 truncate text-sm font-semibold text-slate-600">{fee.label}</dt>
              <dd className="shrink-0 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-bold text-[#009A44] ring-1 ring-emerald-200">
                {fee.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
      {note ? <p className="text-sm font-medium leading-6 text-slate-700">{note}</p> : null}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
          <h3 className="text-sm font-bold text-[#111827]">Payment Mode (Online)</h3>
        </div>
        <p className="mb-2 text-sm font-medium leading-6 text-slate-700">
          You can make the payment using the following methods:
        </p>
        <ul className="grid gap-1.5 text-sm font-semibold text-slate-700 sm:grid-cols-2">
          {onlinePaymentModes.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center text-[#1D4ED8]"
                aria-hidden="true"
              >
                <Icon className="h-4 w-4" strokeWidth={2.4} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
