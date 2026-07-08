import type { Metadata } from 'next';
import type { ListingPageConfig } from '@/components/listing';

export function createListingMetadata(config: ListingPageConfig): Metadata {
  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: {
      canonical: config.seo.canonical,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: config.seo.canonical,
      siteName: 'SarkariMate',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
    },
  };
}
