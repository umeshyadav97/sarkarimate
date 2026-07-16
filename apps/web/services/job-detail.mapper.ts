import type {
  DetailAction,
  DetailKeyInfo,
  DetailPageConfig,
  DetailPageData,
  DetailSectionConfig,
  DetailTableColumn,
  DetailTimelineItem,
} from '@/components/job-detail/types';
import type {
  JobDetailsApiData,
  JobDetailsApiResponse,
} from '@/features/jobs/types/job-details-api.types';

const jobListingHref = '/jobs';
const detailHrefPrefix = '/job-details';

export function mapJobDetailsResponse(response: JobDetailsApiResponse): DetailPageData {
  const job = response.data;
  const canonical = `${detailHrefPrefix}/${job.slug}`;
  const importantDates = mapKeyInfo(job.importantDates);
  const applicationFee = mapKeyInfo(
    job.applicationFee?.map((fee) => ({
      label: fee.category,
      value: fee.fee,
    })),
  );
  const ageLimit = mapAgeLimit(job);

  return {
    pageType: 'jobs',
    slug: job.slug,
    title: job.title,
    status: {
      label: job.status ?? '',
      tone: mapStatusTone(job.badgeColor),
    },
    organization: job.organizationShort ?? job.organization,
    location: getLocation(job),
    postedDate: job.postedOn ?? '',
    updatedDate: job.updatedOn ?? '',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Jobs', href: jobListingHref },
      { label: job.title, href: canonical },
    ],
    keyInformation: mapQuickFacts(job.quickFacts),
    alert: job.hero?.summary,
    actions: mapActions(job.importantLinks),
    about: {
      title: job.overview?.title ?? '',
      body: job.overview?.description ? [job.overview.description] : [],
    },
    importantDates,
    vacancy: mapVacancy(job),
    eligibility: job.eligibility ?? [],
    howToApply: job.howToApply ?? [],
    ageLimit,
    ageLimitNote: job.ageLimit?.relaxation ?? '',
    applicationFee,
    applicationFeeNote: '',
    selectionProcess: mapTimelineItems(job.selectionProcess),
    importantLinks:
      job.importantLinks?.map((link) => ({
        label: link.title,
        href: link.url,
        description: link.type,
      })) ?? [],
    faqs: job.faq ?? [],
    timeline: importantDates.map((date, index) => ({
      title: date.label,
      date: date.value,
      status: index < 2 ? 'complete' : index === 2 ? 'active' : 'upcoming',
    })),
    relatedContent: job.related?.length
      ? [
          {
            title: 'Related Jobs',
            buttonText: 'View All Jobs',
            href: jobListingHref,
            items: job.related.map((related) => ({
              label: related.title,
              href: `${detailHrefPrefix}/${related.slug}`,
            })),
          },
        ]
      : [],
    seo: {
      title: job.seo?.title ?? job.title,
      description: job.seo?.description ?? job.hero?.summary ?? job.title,
      canonical,
      keywords: job.seo?.keywords,
    },
  };
}

export function getVisibleDetailSections(
  sections: DetailSectionConfig[],
  data: DetailPageData,
): DetailSectionConfig[] {
  return sections.filter((section) => hasDetailSectionData(section.id, data));
}

export function hasDetailSectionData(sectionId: DetailSectionConfig['id'], data: DetailPageData) {
  switch (sectionId) {
    case 'overview':
      return data.about.body.length > 0;
    case 'important-dates':
      return data.importantDates.length > 0 || data.ageLimit.length > 0;
    case 'vacancy':
      return data.vacancy.rows.length > 0 || data.timeline.length > 0;
    case 'eligibility':
      return data.eligibility.length > 0 || data.applicationFee.length > 0;
    case 'how-to-apply':
      return data.howToApply.length > 0;
    case 'age-limit':
      return data.ageLimit.length > 0;
    case 'application-fee':
      return data.applicationFee.length > 0;
    case 'selection-process':
      return data.selectionProcess.length > 0;
    case 'important-links':
      return data.importantLinks.length > 0 || data.selectionProcess.length > 0;
    case 'faq':
      return data.faqs.length > 0;
    case 'timeline':
      return data.timeline.length > 0;
    default:
      return false;
  }
}

export function getVisibleDetailConfig(config: DetailPageConfig, data: DetailPageData) {
  return {
    ...config,
    sections: getVisibleDetailSections(config.sections, data),
    sidebarWidgets: config.sidebarWidgets.filter((widget) => {
      if (widget === 'related') {
        return data.relatedContent.length > 0;
      }

      if (widget === 'timeline') {
        return data.timeline.length > 0;
      }

      if (widget === 'actions') {
        return data.actions.length > 0;
      }

      return true;
    }),
  };
}

function mapQuickFacts(facts: JobDetailsApiData['quickFacts']): DetailKeyInfo[] {
  return (
    facts?.map((fact) => ({
      label: fact.label,
      value: fact.value,
      tone: getToneForLabel(fact.label),
    })) ?? []
  );
}

function mapKeyInfo(items?: { label: string; value: string }[]): DetailKeyInfo[] {
  return (
    items?.map((item) => ({
      label: item.label,
      value: item.value,
      tone: getToneForLabel(item.label),
    })) ?? []
  );
}

function mapAgeLimit(job: JobDetailsApiData): DetailKeyInfo[] {
  const items: DetailKeyInfo[] = [];

  if (job.ageLimit?.minimum) {
    items.push({ label: 'Minimum Age', value: job.ageLimit.minimum, tone: 'green' });
  }

  if (job.ageLimit?.maximum) {
    items.push({ label: 'Maximum Age', value: job.ageLimit.maximum, tone: 'green' });
  }

  if (job.ageLimit?.asOn) {
    items.push({ label: 'Age Reference Date', value: job.ageLimit.asOn, tone: 'slate' });
  }

  return items;
}

function mapVacancy(job: JobDetailsApiData): DetailPageData['vacancy'] {
  const columns = mapVacancyColumns(job.vacancy?.columns);

  return {
    title: job.vacancy?.title ?? '',
    columns,
    rows:
      job.vacancy?.rows?.map((row, index) => ({
        id: `${job.slug}-vacancy-${index + 1}`,
        values: columns.reduce<Record<string, string | number>>((values, column) => {
          values[column.key] = row[column.key] ?? '-';
          return values;
        }, {}),
      })) ?? [],
  };
}

function mapVacancyColumns(columns?: string[]): DetailTableColumn[] {
  return (
    columns?.map((column) => ({
      key: toCamelCase(column),
      label: column,
    })) ?? []
  );
}

function mapTimelineItems(items?: string[]): DetailTimelineItem[] {
  return (
    items?.map((item, index) => ({
      title: item,
      date: item,
      status: index === 0 ? 'active' : 'upcoming',
    })) ?? []
  );
}

function mapActions(links: JobDetailsApiData['importantLinks']): DetailAction[] {
  return (
    links?.map((link) => ({
      label: link.title,
      href: link.url,
      variant: link.type === 'primary' ? 'primary' : 'secondary',
    })) ?? []
  );
}

function mapStatusTone(tone?: string): DetailPageData['status']['tone'] {
  if (tone === 'green' || tone === 'red' || tone === 'orange' || tone === 'blue') {
    return tone;
  }

  return 'slate';
}

function getToneForLabel(label: string): DetailKeyInfo['tone'] {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('last') || normalizedLabel.includes('fee')) {
    return 'red';
  }

  if (normalizedLabel.includes('post') || normalizedLabel.includes('age')) {
    return 'green';
  }

  return 'slate';
}

function getLocation(job: JobDetailsApiData) {
  if (job.organization.toLowerCase().includes('uttar pradesh')) {
    return 'Uttar Pradesh';
  }

  return 'All India';
}

function toCamelCase(value: string) {
  const [first = '', ...rest] = value
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .split(/\s+/);

  return `${first.charAt(0).toLowerCase()}${first.slice(1)}${rest
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('')}`;
}
