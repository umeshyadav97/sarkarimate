import type { Metadata } from 'next';
import { JobDetailQueryPage } from '@/components/job-detail/JobDetailQueryPage';
import { getDetailPageConfig } from '@/config/detail-page.config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .filter((part) => !/^[a-f\d]{8}$/i.test(part))
    .join(' ');

  return {
    title,
    alternates: {
      canonical: `/job-details/${slug}`,
    },
  };
}

export default async function JobDetailsRoute({ params }: PageProps) {
  const { slug } = await params;

  return <JobDetailQueryPage config={getDetailPageConfig('jobs')} slug={slug} />;
}
