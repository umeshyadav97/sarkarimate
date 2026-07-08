import Link from 'next/link';
import { Apple, Bell, Check, Mail, Play, Send, ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Button, Card, Input } from '@repo/ui';
import { footerLinks, trustPoints } from '@/features/home/constants/homepage-data';
import { legalFooterLinks } from '@/features/legal/constants/legal-pages';

const socialLinks = [
  { label: 'WhatsApp', icon: FaWhatsapp, className: 'text-[#16A34A]' },
  { label: 'Telegram', icon: Send, className: 'text-[#1D4ED8]' },
  { label: 'Facebook', icon: FaFacebookF, className: 'text-[#1D4ED8]' },
  { label: 'X', icon: FaXTwitter, className: 'text-[#111827]' },
  { label: 'YouTube', icon: FaYoutube, className: 'text-[#DC2626]' },
  { label: 'Instagram', icon: FaInstagram, className: 'text-[#111827]' },
];

export function HomeFooter() {
  return (
    <footer className="bg-white">
      <TrustNewsletterSection />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-4 sm:px-6 md:grid-cols-[1.05fr_2.6fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="SarkariMate home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-[#1D4ED8]">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xl font-bold leading-none text-red-600">
                Sarkari<span className="text-[#1D4ED8]">Mate</span>
              </span>
              <span className="text-xs font-medium text-slate-500">
                Sahi Jaankari, Sahi Samay Par
              </span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-xs font-medium leading-5 text-slate-600">
            Your trusted source for government job updates, results, admit cards and more.
          </p>
          <div className="mt-3 flex items-center gap-3" aria-label="Social media links">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href="#"
                  className={`grid h-5 w-5 place-items-center transition-colors hover:text-[#1E40AF] ${social.className}`}
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          <FooterColumn links={footerLinks.quickLinks} title="Quick Links" />
          <FooterColumn links={footerLinks.popularExams} title="Popular Exams" />
          <FooterColumn links={footerLinks.resources} title="Resources" />
          <FooterColumn links={footerLinks.company} title="Company" useKnownRoutes />
        </div>

        <div>
          <h2 className="text-xs font-bold text-[#111827]">Download App</h2>
          <p className="mt-2 text-xs font-medium leading-5 text-slate-600">
            Get instant updates on your mobile.
          </p>
          <div className="mt-3 space-y-2">
            <DownloadButton icon={Play} label="Google Play" overline="GET IT ON" />
            <DownloadButton icon={Apple} label="App Store" overline="Download on the" />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright 2026 SarkariMate. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Legal links">
            {legalFooterLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#1D4ED8]">
                {link.label}
              </Link>
            ))}
          </nav>
          <p>Made with care for India</p>
        </div>
      </div>
    </footer>
  );
}

function TrustNewsletterSection() {
  return (
    <section className="mx-auto grid max-w-full gap-3 bg-white px-4 py-4 sm:gap-4 sm:px-6 lg:grid-cols-[0.78fr_1.42fr] md:grid-cols-2 lg:px-8">
      <Card className="rounded-lg p-4 shadow-xs sm:p-5">
        <h2 className="text-base font-bold text-[#111827] sm:text-lg">Why Choose SarkariMate?</h2>
        <ul className="mt-3 space-y-2 sm:space-y-1.5">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm font-semibold leading-5 text-slate-700 sm:text-xs sm:leading-normal"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 stroke-[3] text-[#16A34A] sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="grid items-center gap-4 rounded-lg p-4 shadow-xs sm:p-5  md:gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-[#111827] sm:text-lg">
              Get Job Alerts on Email
            </h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-xs sm:leading-5">
              Subscribe to get the latest job notifications, results and important updates directly
              in your inbox.
            </p>
          </div>
          <div className="relative hidden h-28 w-32 place-items-center md:grid" aria-hidden="true">
            <div className="absolute bottom-1 h-20 w-24 rotate-12 rounded-lg bg-blue-100" />
            <Mail className="relative z-10 h-20 w-20 -rotate-12 text-blue-200" />
            <Bell className="absolute right-4 top-0 z-20 h-12 w-12 rotate-12 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="absolute right-3 top-1 z-30 grid h-5 w-5 place-items-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
              1
            </span>
          </div>
        </div>
        <form className="mt-4 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <Input
            id="newsletter-email"
            className="min-h-11 w-full flex-1 text-sm sm:min-h-10"
            placeholder="Enter your email address"
            type="email"
          />
          <Button
            className="min-h-11 w-full bg-[#1D4ED8] px-7 text-sm hover:bg-[#1E40AF] sm:min-h-10 sm:w-auto"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </Card>
    </section>
  );
}

function FooterColumn({
  title,
  links,
  useKnownRoutes = false,
}: {
  title: string;
  links: string[];
  useKnownRoutes?: boolean;
}) {
  return (
    <div>
      <h2 className="text-xs font-bold text-[#111827]">{title}</h2>
      <ul className="mt-2 space-y-1">
        {links.map((link) => (
          <li key={link}>
            <FooterColumnLink label={link} useKnownRoutes={useKnownRoutes} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterColumnLink({ label, useKnownRoutes }: { label: string; useKnownRoutes: boolean }) {
  const knownRoute = legalFooterLinks.find((link) => link.label === label);
  const href = useKnownRoutes && knownRoute ? knownRoute.href : '#';

  return (
    <Link className="text-xs font-medium text-slate-600 hover:text-[#1D4ED8]" href={href}>
      {label}
    </Link>
  );
}

function DownloadButton({
  icon: Icon,
  overline,
  label,
}: {
  icon: typeof Play;
  overline: string;
  label: string;
}) {
  return (
    <a
      href="#"
      className="flex h-10 w-36 items-center gap-2 rounded-md bg-black px-3 text-white shadow-sm hover:bg-slate-900"
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>
        <span className="block text-[8px] font-semibold uppercase leading-none">{overline}</span>
        <span className="block text-sm font-bold leading-tight">{label}</span>
      </span>
    </a>
  );
}
