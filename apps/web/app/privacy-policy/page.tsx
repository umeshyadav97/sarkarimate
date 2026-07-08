import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages['privacy-policy'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <StaticInfoPage page={page} />;
}
