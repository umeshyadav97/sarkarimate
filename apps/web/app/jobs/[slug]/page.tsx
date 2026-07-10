import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/job-detail/JobDetailPage';
import type { DetailPageData } from '@/components/job-detail/types';
import { getDetailPageConfig } from '@/config/detail-page.config';
import { getDetailPageData, getDetailPageStaticParams } from '@/services/job-detail.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

type JsonLdValue =
  string | number | boolean | null | JsonLdValue[] | { [key: string]: JsonLdValue };

const pageType = 'jobs';
const siteUrl = 'https://sarkarimate.com';

export async function generateStaticParams() {
  return getDetailPageStaticParams(pageType);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getDetailPageData(pageType, slug);

  if (!data) {
    return {
      title: 'Page Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${siteUrl}${data.seo.canonical}`;

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: data.seo.canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: canonicalUrl,
      siteName: 'SarkariMate',
      type: 'article',
      publishedTime: data.postedDate,
      modifiedTime: data.updatedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.title,
      description: data.seo.description,
    },
  };
}

export default async function JobDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const [config, data] = [getDetailPageConfig(pageType), await getDetailPageData(pageType, slug)];

  if (!data) {
    notFound();
  }

  return (
    <>
      <StructuredData data={createDetailSchemas(data)} />
      <JobDetailPage config={config} data={data} />
    </>
  );
}

function StructuredData({ data }: { data: JsonLdValue[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

function createDetailSchemas(data: DetailPageData): JsonLdValue[] {
  return [createBreadcrumbSchema(data), createJobPostingSchema(data), createFaqSchema(data)];
}

function createBreadcrumbSchema(data: DetailPageData): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.label,
      item: `${siteUrl}${breadcrumb.href}`,
    })),
  };
}

function createJobPostingSchema(data: DetailPageData): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: data.title,
    description: data.seo.description,
    datePosted: data.postedDate,
    validThrough: findKeyInfoValue(data, 'Last Date') ?? data.updatedDate,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: data.organization,
      sameAs: siteUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: data.location,
        addressCountry: 'IN',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    url: `${siteUrl}${data.seo.canonical}`,
  };
}

function createFaqSchema(data: DetailPageData): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function findKeyInfoValue(data: DetailPageData, label: string) {
  return data.keyInformation.find((item) => item.label === label)?.value;
}
