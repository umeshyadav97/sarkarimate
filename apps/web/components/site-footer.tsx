import Link from 'next/link';
import type { ComponentType } from 'react';
import { Bell, Check, Heart, Mail } from 'lucide-react';
import {
  FaApple,
  // FaFacebookF,
  // FaInstagram,
  FaLinkedinIn,
  // FaTelegram,
  // FaWhatsapp,
  FaXTwitter,
  // FaYoutube,
} from 'react-icons/fa6';
import { Button, Card, Input } from '@repo/ui';
import { BrandShieldIcon } from '@/components/brand-shield-icon';
import { footerLinks, trustPoints } from '@/features/home/constants/homepage-data';
import { legalFooterLinks } from '@/features/legal/constants/legal-pages';

const socialLinks = [
  // Hidden for now. Keep the icons ready until these channels are active.
  // {
  //   label: 'WhatsApp',
  //   href: '#',
  //   icon: FaWhatsapp,
  //   className: 'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
  // },
  // {
  //   label: 'Telegram',
  //   href: '#',
  //   icon: FaTelegram,
  //   className: 'bg-gradient-to-br from-[#37AEE2] to-[#1E96C8]',
  // },
  // {
  //   label: 'Facebook',
  //   href: '#',
  //   icon: FaFacebookF,
  //   className: 'bg-gradient-to-br from-[#4C8BF5] to-[#1877F2]',
  // },
  {
    label: 'X',
    href: 'https://x.com/sarkarimate',
    icon: FaXTwitter,
    className: 'bg-gradient-to-br from-[#2F3336] to-[#000000]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sarkarimate/',
    icon: FaLinkedinIn,
    className: 'bg-gradient-to-br from-[#0A66C2] to-[#004182]',
  },
  // {
  //   label: 'YouTube',
  //   href: '#',
  //   icon: FaYoutube,
  //   className: 'bg-gradient-to-br from-[#FF3D3D] to-[#CD201F]',
  // },
  // {
  //   label: 'Instagram',
  //   href: '#',
  //   icon: FaInstagram,
  //   className:
  //     'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
  // },
];

const footerRouteByLabel: Record<string, string> = {
  'Latest Jobs': '/jobs',
  'Admit Card': '/admit-cards',
  'Admit Cards': '/admit-cards',
  Results: '/results',
  'Answer Key': '/answer-keys',
  'Answer Keys': '/answer-keys',
  Syllabus: '/syllabus',
  'Govt. Schemes': '/schemes',
  'Government Schemes': '/schemes',
};

const resourceFooterLinks = [
  'Exam Calendar',
  'Previous Papers',
  'Career Guide',
  'Government Schemes',
  'Application Tracker',
  'FAQs',
];

const popularExamRoutes: Record<string, string> = {
  'SSC CGL': '/ssc-cgl-2026',
  'UP Police': '/up-police-constable-2026',
  'RRB NTPC': '/rrb-ntpc-graduate-cbtst-result-2026',
  'UP Anganwadi': '/up-anganwadi-bharti-2026',
  'Bihar Police': '/bihar-police-si-2026',
  'Teaching Jobs': '/jharkhand-teacher-eligibility-test-2026',
};

export function SiteFooter() {
  return (
    <footer className="bg-white" aria-label="Site footer">
      <TrustNewsletterSection />
      <div className="bg-[#0B2F6B] bg-gradient-to-br from-[#0D3B82] to-[#0B2F6B] text-white">
        <div className="mx-auto grid max-w-full gap-8 px-4 py-8 text-center sm:px-6 md:grid-cols-3 md:text-left lg:grid-cols-[1.35fr_repeat(4,1fr)_1.15fr] lg:gap-10 lg:px-8">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-md outline-none ring-offset-2 ring-offset-[#0B2F6B] focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              aria-label="SarkariMate home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
                <BrandShieldIcon className="h-9 w-9" variant="dark" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xl font-bold leading-none text-white">
                  Sarkari<span className="text-[#60A5FA]">Mate</span>
                </span>
                <span className="text-xs font-medium text-[#CBD5E1]">
                  Sahi Jaankari, Sahi Samay Par
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-medium leading-6 text-[#CBD5E1]">
              Your trusted source for government jobs, results, admit cards, answer keys and
              schemes.
            </p>
            <nav
              className="mt-5 flex items-center justify-center gap-2 md:justify-start"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </nav>
          </div>

          <FooterColumn
            links={footerLinks.quickLinks}
            title="Quick Links"
            useKnownRoutes
            openInNewTab
          />
          <FooterColumn
            links={footerLinks.popularExams}
            title="Popular Exams"
            usePopularExamRoutes
            openInNewTab
          />
          <FooterColumn links={resourceFooterLinks} title="Resources" useKnownRoutes />
          <FooterColumn links={footerLinks.company} title="Company" useKnownRoutes />

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-sm font-bold text-white">Download App</h2>
            <p className="mt-3 max-w-40 text-sm font-medium leading-6 text-[#CBD5E1]">
              Get instant updates on your mobile.
            </p>
            <div className="mt-4 space-y-2">
              <DownloadButton icon={GooglePlayLogo} label="Google Play" overline="GET IT ON" />
              <DownloadButton icon={FaApple} label="App Store" overline="Download on the" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/12">
          <div className="mx-auto flex max-w-full flex-col items-center gap-4 px-4 py-4 text-xs font-semibold text-[#CBD5E1] sm:px-6 lg:flex-row lg:justify-between lg:px-8">
            <p>&copy; 2026 SarkariMate. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Legal links">
              {legalFooterLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                >
                  {link.label === 'Contact Us' ? 'Contact' : link.label}
                </Link>
              ))}
            </nav>
            <p className="inline-flex items-center gap-1.5">
              Made with
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
              for India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  label,
  href,
  icon: Icon,
  className,
}: {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  className: string;
}) {
  return (
    <a
      href={href}
      className={`grid h-8 w-8 place-items-center rounded-full text-white shadow-[0_4px_12px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-0.5 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] ${className}`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function TrustNewsletterSection() {
  return (
    <section className="mx-auto grid max-w-full gap-4 bg-[#F8FAFC] px-4 py-5 sm:px-6 md:grid-cols-2 lg:grid-cols-[0.78fr_1.42fr] lg:px-8">
      <Card className="rounded-xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-6">
        <h2 className="text-base font-bold text-[#111827] sm:text-lg">Why Choose SarkariMate?</h2>
        <ul className="mt-4 space-y-2.5">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm font-semibold leading-5 text-slate-800"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 stroke-[3] text-[#16A34A]"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="grid items-center gap-5 rounded-xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-6 md:gap-7">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-[#111827] sm:text-lg">
              Get Job Alerts on Email
            </h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-slate-600">
              Subscribe to get the latest job notifications, results and important updates directly
              in your inbox.
            </p>
          </div>
          <div
            className="relative hidden h-28 w-32 shrink-0 place-items-center md:grid"
            aria-hidden="true"
          >
            <div className="absolute bottom-0 h-24 w-24 rotate-12 rounded-2xl bg-blue-100" />
            <Mail className="relative z-10 h-20 w-20 -rotate-12 text-blue-200" />
            <Bell className="absolute right-2 top-0 z-20 h-12 w-12 rotate-12 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="absolute right-1 top-1 z-30 grid h-5 w-5 place-items-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
              1
            </span>
          </div>
        </div>
        <form className="flex w-full max-w-4xl flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <Input
            id="newsletter-email"
            className="min-h-12 w-full flex-1 rounded-lg border-slate-300 text-sm"
            placeholder="Enter your email address"
            type="email"
          />
          <Button
            className="min-h-12 w-full rounded-lg bg-[#1D4ED8] px-9 text-sm font-bold hover:bg-[#1E40AF] sm:w-auto"
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
  usePopularExamRoutes = false,
  openInNewTab = false,
}: {
  title: string;
  links: string[];
  useKnownRoutes?: boolean;
  usePopularExamRoutes?: boolean;
  openInNewTab?: boolean;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-bold text-white">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <FooterColumnLink
              label={link}
              useKnownRoutes={useKnownRoutes}
              usePopularExamRoutes={usePopularExamRoutes}
              openInNewTab={openInNewTab}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterColumnLink({
  label,
  useKnownRoutes,
  usePopularExamRoutes,
  openInNewTab,
}: {
  label: string;
  useKnownRoutes: boolean;
  usePopularExamRoutes: boolean;
  openInNewTab: boolean;
}) {
  const knownRoute = legalFooterLinks.find((link) => link.label === label);
  const href = usePopularExamRoutes
    ? (popularExamRoutes[label] ?? '/jobs')
    : useKnownRoutes
      ? (knownRoute?.href ?? footerRouteByLabel[label] ?? '/jobs')
      : '/jobs';

  return (
    <Link
      className="inline-flex rounded-sm text-sm font-medium text-[#CBD5E1] transition-colors hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {label}
    </Link>
  );
}

function DownloadButton({
  icon: Icon,
  overline,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  overline: string;
  label: string;
}) {
  return (
    <a
      href="#"
      className="flex h-14 w-48 items-center gap-3 rounded-lg bg-black px-4 text-white shadow-sm transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] lg:w-40 xl:w-48"
    >
      <Icon className="h-7 w-7 shrink-0" aria-hidden="true" />
      <span>
        <span className="block text-[10px] font-bold uppercase leading-none">{overline}</span>
        <span className="block text-lg font-bold leading-tight">{label}</span>
      </span>
    </a>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true">
      <path
        fill="#00A0FF"
        d="M96.2 46.1c-6.8 7.2-10.7 18.4-10.7 32.8v354.2c0 14.4 3.9 25.6 10.7 32.8l1.2 1.1 198.4-208.7v-4.6L97.4 45z"
      />
      <path
        fill="#00F076"
        d="m361.8 328.2-66-69.9v-4.6l66-69.9 1.5.9 78.2 44.8c22.3 12.8 22.3 33.8 0 46.6l-78.2 44.8z"
      />
      <path fill="#FFB300" d="m363.3 320.9-67.5-71.2L96.2 465.9c10.8 11.4 28.5 12.8 48.3 1.5z" />
      <path fill="#FF3D00" d="M363.3 184.7 144.5 44.6c-19.8-11.3-37.5-9.9-48.3 1.5l199.6 216.2z" />
    </svg>
  );
}
