import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/job-detail/JobDetailPage';
import { getDetailPageConfig } from '@/config/detail-page.config';
import {
  getCommonDetailPageData,
  getCommonDetailStaticParams,
} from '@/services/job-detail.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCommonDetailStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCommonDetailPageData(slug);

  if (!data) {
    return {
      title: 'Page Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: data.seo.canonical,
    },
  };
}

export default async function JobDetailsRoute({ params }: PageProps) {
  const { slug } = await params;
  const data = await getCommonDetailPageData(slug);

  if (!data) {
    notFound();
  }

  return <JobDetailPage config={getDetailPageConfig(data.pageType)} data={data} />;
}
