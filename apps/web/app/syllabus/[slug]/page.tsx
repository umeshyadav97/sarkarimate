import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SyllabusGuidePage } from '@/components/syllabus';
import { getLatestJobs } from '@/services/latest-jobs.service';
import { getSyllabusGuide, getSyllabusStaticParams } from '@/services/syllabus.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getSyllabusStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSyllabusGuide(slug);

  if (!guide) {
    return {
      title: 'Syllabus Guide Not Found',
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = `/og/syllabus/${guide.slug}`;

  return {
    title: guide.seo.title,
    description: guide.seo.description,
    keywords: guide.seo.keywords,
    alternates: {
      canonical: guide.seo.canonical,
    },
    openGraph: {
      title: guide.seo.title,
      description: guide.seo.description,
      url: guide.seo.canonical,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: guide.seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seo.title,
      description: guide.seo.description,
      images: [imageUrl],
    },
  };
}

export default async function SyllabusGuideRoute({ params }: PageProps) {
  const { slug } = await params;
  const [guide, latestJobs] = await Promise.all([getSyllabusGuide(slug), getLatestJobs()]);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <SyllabusStructuredData guide={guide} />
      <SyllabusGuidePage guide={guide} latestJobs={latestJobs} />
    </>
  );
}

function SyllabusStructuredData({
  guide,
}: {
  guide: NonNullable<ReturnType<typeof getSyllabusGuide>>;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: guide.breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.label,
      item: `https://sarkarimate.com${breadcrumb.href}`,
    })),
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: guide.title,
    description: guide.seo.description,
    url: `https://sarkarimate.com${guide.seo.canonical}`,
    dateModified: guide.updatedDate,
  };

  const faqSchema = guide.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
