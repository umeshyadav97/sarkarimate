import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { FaFacebookF, FaTelegram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const shareItems = [
  { label: 'WhatsApp', icon: FaWhatsapp, className: 'bg-[#1D4ED8]' },
  { label: 'Telegram', icon: FaTelegram, className: 'bg-[#38BDF8]' },
  { label: 'Facebook', icon: FaFacebookF, className: 'bg-[#2563EB]' },
  { label: 'X', icon: FaXTwitter, className: 'bg-[#0EA5E9]' },
];

export function PreparationShareCard() {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-base font-bold text-[#111827]">Share this page</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {shareItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            aria-label={item.label}
            className={`grid h-9 w-9 place-items-center rounded-full text-white ${item.className}`}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
          </Link>
        ))}
        <Link
          href="#"
          aria-label="Copy link"
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700"
        >
          <LinkIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
