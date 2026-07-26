import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import type { ListingPageConfig } from '@/components/listing/types';

interface ListingHeroProps {
  config: ListingPageConfig;
}

export function ListingHero({ config }: ListingHeroProps) {
  return (
    <section className="mx-auto w-full max-w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="flex items-center gap-2 text-sm font-medium text-slate-600"
        aria-label="Breadcrumb"
      >
        <Link className="hover:text-[#1D4ED8]" href="/">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="font-semibold text-[#111827]" aria-current="page">
          {config.breadcrumbLabel}
        </span>
      </nav>

      <div className="mt-4 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] md:grid-cols-[1.5fr_1fr] sm:grid-cols-[1.5fr_1fr] md:pb-4 lg:pb-1 pb-4">
        <div>
          <h1 className="text-2xl font-bold lg:leading-13 md:leading-11 leading-8 text-[#111827] md:text-3xl lg:text-4xl">
            {config.pageTitle}
          </h1>
          <p className="mt-2 max-w-2xl sm:text-base text-sm font-medium lg:leading-7 md:leading-6 leading-5 text-slate-600">
            {config.heroDescription}
          </p>
          <p className="mt-1 max-w-2xl sm:text-base text-sm font-medium lg:leading-7 md:leading-6 leading-5 text-slate-600">
            {config.heroDescriptionHindi}
          </p>
        </div>

        <div className="hidden justify-end md:flex" aria-hidden="true">
          <div className="relative h-44 w-full max-w-md lg:h-48">
            <Image
              src={config.heroImage.src}
              alt={config.heroImage.alt}
              fill
              priority={config.heroImage.priority}
              className="object-contain object-right"
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 60vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
