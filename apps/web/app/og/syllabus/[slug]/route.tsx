import { notFound } from 'next/navigation';
import { createDetailOgImage } from '@/lib/og/detail-og-image';
import { getSyllabusGuide } from '@/services/syllabus.service';

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const guide = getSyllabusGuide(slug);

  if (!guide) {
    notFound();
  }

  return createDetailOgImage({
    title: guide.seo.title,
    description: guide.seo.description,
    label: 'Syllabus Guide',
    organization: guide.organization,
    facts: [
      guide.examName,
      guide.category ?? '',
      guide.overviewHighlights?.[0]?.value ?? guide.heroFacts?.[0]?.value ?? '',
    ],
  });
}
