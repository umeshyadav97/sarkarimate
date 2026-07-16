import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PreparationGuidePage } from '@/components/preparation';
import { getPreparationGuide, getPreparationStaticParams } from '@/services/preparation.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPreparationStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPreparationGuide(slug);

  if (!guide) {
    return {
      title: 'Preparation Guide Not Found',
      robots: { index: false, follow: false },
    };
  }

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
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seo.title,
      description: guide.seo.description,
    },
  };
}

export default async function PreparationGuideRoute({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPreparationGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <PreparationStructuredData guide={guide} />
      <PreparationGuidePage guide={guide} />
    </>
  );
}

function PreparationStructuredData({
  guide,
}: {
  guide: NonNullable<ReturnType<typeof getPreparationGuide>>;
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
