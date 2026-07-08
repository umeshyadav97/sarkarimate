import { Bell, Mail } from 'lucide-react';
import type { ListingPageConfig } from '@/components/listing/types';

interface NewsletterCardProps {
  config: ListingPageConfig;
}

export function NewsletterCard({ config }: NewsletterCardProps) {
  return (
    <section
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="listing-newsletter"
    >
      <div
        className="mx-auto grid h-24 w-28 place-items-center rounded-xl bg-blue-50 text-[#1D4ED8]"
        aria-hidden="true"
      >
        <div className="relative">
          <Mail className="h-16 w-16" />
          <Bell className="absolute -right-3 -top-3 h-8 w-8 fill-[#F59E0B] text-[#F59E0B]" />
          <span className="absolute -right-4 -top-4 grid h-5 w-5 place-items-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
            1
          </span>
        </div>
      </div>
      <h2 id="listing-newsletter" className="mt-6 text-lg font-bold text-[#111827]">
        {config.sidebar.newsletterTitle}
      </h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
        {config.sidebar.newsletterDescription}
      </p>
      <form className="mt-5 space-y-3">
        <label className="sr-only" htmlFor="listing-newsletter-email">
          Email address
        </label>
        <input
          id="listing-newsletter-email"
          className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-[#111827] outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100"
          placeholder="Enter your email address"
          type="email"
        />
        <button
          className="min-h-11 w-full rounded-lg bg-[#1D4ED8] px-4 text-sm font-bold text-white transition hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-blue-100"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
