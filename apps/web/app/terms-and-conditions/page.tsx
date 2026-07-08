import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages['terms-and-conditions'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/terms-and-conditions' },
};

export default function TermsAndConditionsPage() {
  return <StaticInfoPage page={page} />;
}
