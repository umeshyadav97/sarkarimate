import type { MetadataRoute } from 'next';
import { legalPageRoutes } from '@/features/legal/constants/legal-pages';
import { getCommonDetailStaticParams } from '@/services/job-detail.service';
import { getSyllabusSitemapEntries } from '@/services/syllabus.service';

const siteUrl = 'https://sarkarimate.com';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://sarkarimate-api.vercel.app';
const lastModified = new Date('2026-07-15T00:00:00+05:30');

const staticRoutes = [
  '/',
  '/jobs',
  '/admit-cards',
  '/results',
  '/answer-keys',
  '/syllabus',
  '/schemes',
  ...Object.values(legalPageRoutes),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? ('daily' as const) : ('weekly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));

  const staticDetailSlugs = getCommonDetailStaticParams().map(({ slug }) => slug);
  const liveDetailSlugs = await getLiveSitemapJobSlugs();
  const detailPages = Array.from(new Set([...staticDetailSlugs, ...liveDetailSlugs])).map(
    (slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }),
  );

  return [...staticPages, ...detailPages, ...getSyllabusSitemapEntries()];
}

async function getLiveSitemapJobSlugs() {
  try {
    const url = new URL('/api/v1/jobs', apiBaseUrl);
    url.searchParams.set('limit', '1000');

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const payload: unknown = await response.json();
    const jobs = getJobsFromPayload(payload);

    return jobs
      .map((job) => job.slug)
      .filter((slug): slug is string => Boolean(slug && /^[a-z0-9-]+$/.test(slug)));
  } catch {
    return [];
  }
}

function getJobsFromPayload(payload: unknown): Array<{ slug: string }> {
  if (!isRecord(payload)) {
    return [];
  }

  const data = isRecord(payload.data) ? payload.data : payload;
  const jobs = isRecord(data) ? data.jobs : undefined;

  return Array.isArray(jobs) ? jobs.filter(isJobSitemapEntry) : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isJobSitemapEntry(value: unknown): value is { slug: string } {
  return isRecord(value) && typeof value.slug === 'string';
}
