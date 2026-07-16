import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ChevronDown, CircleHelp, Info, ShieldCheck } from 'lucide-react';
import {
  disclaimerContent,
  governmentJobsGuide,
  homeFaqs,
  trustReasons,
} from '@/features/home/constants/homepage-data';

export function HomeContentSections() {
  return (
    <section className="mx-auto grid max-w-full gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <GovernmentJobsGuide />
      <HomeFaqSection />
      <TrustSection />
      <DisclaimerSection />
    </section>
  );
}

function GovernmentJobsGuide() {
  return (
    <article className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[minmax(0,1fr)_260px]">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
          <BookOpen className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
          {governmentJobsGuide.title}
        </h2>
        <div className="mt-4 space-y-3 text-sm font-medium leading-6 text-slate-700">
          {governmentJobsGuide.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-5 flex flex-wrap gap-3" aria-label="SarkariMate benefits">
          {governmentJobsGuide.badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#1D4ED8]"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden items-center justify-center lg:flex">
        <Image
          src={governmentJobsGuide.image.src}
          alt={governmentJobsGuide.image.alt}
          width={240}
          height={180}
          className="h-auto w-60 object-contain"
        />
      </div>
    </article>
  );
}

function HomeFaqSection() {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="home-faq"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="home-faq" className="text-lg font-bold text-[#111827]">
          Frequently Asked Questions
        </h2>
        <Link
          href="/contact-us"
          className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-[#1D4ED8] hover:bg-blue-50"
        >
          View All FAQs
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {homeFaqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-slate-200 px-4 py-3"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-[#111827]">
              <span className="flex min-w-0 items-center gap-2">
                <CircleHelp className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                {faq.question}
              </span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="trust"
    >
      <h2 id="trust" className="text-lg font-bold text-[#111827]">
        Why Candidates Trust SarkariMate
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustReasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <article key={reason.title} className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1D4ED8]">
                <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#111827]">{reason.title}</h3>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                  {reason.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section
      className="flex gap-4 rounded-lg border border-blue-100 bg-blue-50/60 p-5"
      aria-labelledby="home-disclaimer"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#1D4ED8]">
        <ShieldCheck className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h2 id="home-disclaimer" className="text-lg font-bold text-[#111827]">
          {disclaimerContent.title}
        </h2>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
          <Info className="mr-1 inline h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
          {disclaimerContent.description}
        </p>
      </div>
    </section>
  );
}
