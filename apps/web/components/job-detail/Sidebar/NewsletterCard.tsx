import { Mail } from 'lucide-react';

interface NewsletterCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export function NewsletterCard({ title, description, buttonText }: NewsletterCardProps) {
  return (
    <aside className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <Mail className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
        {title}
      </h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{description}</p>
      <form className="mt-4 grid gap-3">
        <label className="sr-only" htmlFor="detail-newsletter-email">
          Email address
        </label>
        <input
          id="detail-newsletter-email"
          className="min-h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100"
          placeholder="Enter your email address"
          type="email"
        />
        <button
          className="min-h-11 rounded-lg bg-[#1D4ED8] px-4 text-sm font-bold text-white hover:bg-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </aside>
  );
}
