import type { MetadataRoute } from 'next';
import { legalPageRoutes } from '@/features/legal/constants/legal-pages';
import { getCommonDetailStaticParams } from '@/services/job-detail.service';

const siteUrl = 'https://sarkarimate.com';
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

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? ('daily' as const) : ('weekly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));

  const detailPages = getCommonDetailStaticParams().map(({ slug }) => ({
    url: `${siteUrl}/job-details/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...detailPages];
}
