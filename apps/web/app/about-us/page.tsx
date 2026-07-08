import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages['about-us'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/about-us' },
};

export default function AboutUsPage() {
  return <StaticInfoPage page={page} />;
}
