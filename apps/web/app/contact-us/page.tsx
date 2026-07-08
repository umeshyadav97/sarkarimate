import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages['contact-us'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/contact-us' },
};

export default function ContactUsPage() {
  return <StaticInfoPage page={page} />;
}
