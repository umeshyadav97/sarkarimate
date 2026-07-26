import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages.sitemap;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/site-map' },
};

export default function SitemapPage() {
  return <StaticInfoPage page={page} />;
}
