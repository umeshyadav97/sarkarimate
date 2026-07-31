import { notFound } from 'next/navigation';
import { createDetailOgImage } from '@/lib/og/detail-og-image';
import { getCommonDetailPageData } from '@/services/job-detail.service';

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const data = await getCommonDetailPageData(slug);

  if (!data) {
    notFound();
  }

  return createDetailOgImage({
    title: data.seo.title,
    description: data.seo.description,
    label: getDetailLabel(data.pageType),
    organization: data.organization,
    facts: [
      data.status.label,
      data.keyInformation[0]?.value ?? '',
      data.keyInformation[1]?.value ?? '',
    ],
  });
}

function getDetailLabel(pageType: string) {
  const labels: Record<string, string> = {
    jobs: 'Job Details',
    results: 'Result Update',
    'admit-cards': 'Admit Card',
    'answer-keys': 'Answer Key',
    syllabus: 'Syllabus Guide',
    schemes: 'Scheme Details',
  };

  return labels[pageType] ?? 'Latest Update';
}
