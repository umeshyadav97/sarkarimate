import { BadgeIndianRupeeIcon } from 'lucide-react';
import { FaCreditCard, FaMobileAlt, FaUniversity, FaWallet } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import type { DetailKeyInfo } from '@/components/job-detail/types';

const onlinePaymentModes: {
  label: string;
  Icon: IconType;
  iconClassName: string;
  iconWrapClassName: string;
}[] = [
  {
    label: 'Debit Card',
    Icon: FaCreditCard,
    iconClassName: 'text-emerald-700',
    iconWrapClassName: 'bg-emerald-100 ring-emerald-200',
  },
  {
    label: 'Credit Card',
    Icon: FaCreditCard,
    iconClassName: 'text-indigo-700',
    iconWrapClassName: 'bg-indigo-100 ring-indigo-200',
  },
  {
    label: 'Internet Banking',
    Icon: FaUniversity,
    iconClassName: 'text-blue-700',
    iconWrapClassName: 'bg-blue-100 ring-blue-200',
  },
  {
    label: 'IMPS',
    Icon: FaMobileAlt,
    iconClassName: 'text-orange-700',
    iconWrapClassName: 'bg-orange-100 ring-orange-200',
  },
  {
    label: 'Cash Card / Mobile Wallet',
    Icon: FaWallet,
    iconClassName: 'text-rose-700',
    iconWrapClassName: 'bg-rose-100 ring-rose-200',
  },
];

interface ApplicationFeeSectionProps {
  id: string;
  title: string;
  items: DetailKeyInfo[];
  note: string;
}

export function ApplicationFeeSection({ id, title, items, note }: ApplicationFeeSectionProps) {
  const primaryFee = items[0];

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
      {primaryFee ? (
        <dl className="mb-3 grid gap-3">
          <div className="flex min-w-0 items-center justify-between gap-4">
            <dt className="min-w-0 truncate text-sm font-semibold text-slate-600">
              {primaryFee.label}
            </dt>
            <dd className="shrink-0 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-bold text-[#009A44] ring-1 ring-emerald-200">
              {primaryFee.value}
            </dd>
          </div>
        </dl>
      ) : null}
      <p className="text-sm font-medium leading-6 text-slate-700">{note}</p>
      <div className="mt-4 ">
        <div className="mb-2 flex items-center gap-2">
          <FaCreditCard className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
          <h3 className="text-sm font-bold text-[#111827]">Payment Mode (Online)</h3>
        </div>
        <p className="mb-2 text-sm font-medium leading-6 text-slate-700">
          You can make the payment using the following methods:
        </p>
        <ul className="grid gap-1.5 text-sm font-semibold text-slate-700 sm:grid-cols-2">
          {onlinePaymentModes.map(({ label, Icon, iconClassName, iconWrapClassName }) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ${iconWrapClassName}`}
                aria-hidden="true"
              >
                <Icon className={`h-4 w-4 ${iconClassName}`} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
