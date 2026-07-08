import type { Metadata } from 'next';
import { StaticInfoPage } from '@/features/legal/components/static-info-page';
import { legalPages } from '@/features/legal/constants/legal-pages';

const page = legalPages.disclaimer;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return <StaticInfoPage page={page} />;
}
