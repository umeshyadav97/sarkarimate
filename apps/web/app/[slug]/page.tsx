import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/job-detail/JobDetailPage';
import { getDetailPageConfig } from '@/config/detail-page.config';
import { getCommonDetailPageData } from '@/services/job-detail.service';
import { getLatestJobs } from '@/services/latest-jobs.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCommonDetailPageData(slug);
  const fallbackTitle = formatSlugTitle(slug);
  const title = data?.seo.title ?? data?.title ?? fallbackTitle;
  const description = data?.seo.description ?? data?.alert;
  const canonical = data?.seo.canonical ?? `/${slug}`;
  const imageUrl = `/og/detail/${slug}`;

  return {
    title,
    description,
    keywords: data?.seo.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'SarkariMate',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: data ? undefined : { index: false, follow: false },
  };
}

function formatSlugTitle(slug: string) {
  return slug
    .split('-')
    .filter((part) => !/^[a-f\d]{8}$/i.test(part))
    .join(' ');
}

export default async function JobDetailsRoute({ params }: PageProps) {
  const { slug } = await params;
  const [data, latestJobs] = await Promise.all([getCommonDetailPageData(slug), getLatestJobs()]);

  if (!data) {
    notFound();
  }

  return (
    <JobDetailPage
      config={getDetailPageConfig(data.pageType)}
      data={data}
      latestJobs={latestJobs}
    />
  );
}
