import type { DetailPageData, DetailPageType } from '@/components/job-detail/types';
import { jobDetailMock } from '@/data/job-detail.mock';

const mockDataByRoute: Partial<Record<DetailPageType, Record<string, DetailPageData>>> = {
  jobs: {
    [jobDetailMock.slug]: jobDetailMock,
  },
};

export async function getDetailPageData(
  pageType: DetailPageType,
  slug: string,
): Promise<DetailPageData | null> {
  const routeData = mockDataByRoute[pageType];
  const exactMatch = routeData?.[slug];

  if (exactMatch) {
    return exactMatch;
  }

  if (pageType === 'jobs') {
    return createMockJobDetailForSlug(slug);
  }

  return null;
}

export async function getDetailPageStaticParams(pageType: DetailPageType) {
  const routeData = mockDataByRoute[pageType] ?? {};
  return Object.keys(routeData).map((slug) => ({ slug }));
}

function createMockJobDetailForSlug(slug: string): DetailPageData {
  const title = createTitleFromSlug(slug);
  const canonical = `/jobs/${slug}`;

  return {
    ...jobDetailMock,
    slug,
    title,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Jobs', href: '/jobs' },
      { label: jobDetailMock.location, href: '/jobs?state=Uttar%20Pradesh' },
      { label: title, href: canonical },
    ],
    seo: {
      ...jobDetailMock.seo,
      title,
      canonical,
      description: `Check ${title} details including important dates, eligibility, age limit, vacancy, application fee and official links.`,
    },
  };
}

function createTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => {
      if (/^\d+$/.test(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
