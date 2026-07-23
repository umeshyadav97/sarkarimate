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

export function mapJobDetailsResponse(response: JobDetailsApiResponse): DetailPageData {
  const job = response.data;
  const canonical = getDetailHref(job.slug);
  const importantDates = mapImportantDates(job);
  const applicationFee = mapKeyInfo(
    (job.applicationFees ?? job.applicationFee)?.map((fee) => ({
      label: fee.category,
      value: fee.fee,
    })),
  );
  const ageLimit = mapAgeLimit(job);
  const overviewDescription =
    job.overview?.description ?? job.shortDescription ?? getDescriptionPreview(job.description);
  const overviewTitle = job.overview?.title ?? 'About This Recruitment';

  return {
    pageType: 'jobs',
    slug: job.slug,
    title: job.title,
    status: {
      label: job.status ?? job.applicationStatus ?? '',
      tone: mapStatusTone(job.badgeColor, job.applicationStatus ?? job.status),
    },
    organization: job.organizationShort ?? job.organization,
    location: getLocation(job),
    postedDate: formatMaybeDate(job.postedOn ?? job.publishedAt),
    updatedDate: formatMaybeDate(job.updatedOn ?? job.updatedAt),
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Jobs', href: jobListingHref },
      { label: job.title, href: canonical },
    ],
    keyInformation: mapQuickFacts(job),
    alert: job.hero?.summary ?? overviewDescription,
    actions: mapActions(job.importantLinks),
    about: {
      title: overviewTitle,
      body: overviewDescription ? [overviewDescription] : [],
    },
    importantDates,
    vacancy: mapVacancy(job),
    eligibility: mapEligibility(job),
    howToApply: job.howToApply?.length
      ? job.howToApply.map(formatInstructionItem).filter(Boolean)
      : extractHowToApply(job.description),
    ageLimit,
    ageLimitNote: mapAgeLimitNote(job),
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
              href: getDetailHref(related.slug),
            })),
          },
        ]
      : [],
    seo: {
      title: job.seo?.title ?? job.seo?.metaTitle ?? job.title,
      description:
        job.seo?.description ?? job.seo?.metaDescription ?? job.hero?.summary ?? job.title,
      canonical,
      keywords: job.seo?.keywords,
    },
  };
}

function getDetailHref(slug: string) {
  return `/${slug}`;
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

function mapQuickFacts(job: JobDetailsApiData): DetailKeyInfo[] {
  const ageLimitValue = getAgeLimitSummary(job);
  const liveFacts = [
    job.lastDate ? { label: 'Last Date', value: job.lastDate } : null,
    job.totalPosts ? { label: 'Total Posts', value: String(job.totalPosts) } : null,
    ageLimitValue ? { label: 'Age Limit', value: ageLimitValue } : null,
    job.applicationStatus ? { label: 'Status', value: job.applicationStatus } : null,
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  const facts = job.quickFacts?.length ? job.quickFacts : liveFacts;

  return (
    facts?.map((fact) => ({
      label: fact.label,
      value: fact.value,
      tone: getToneForFact(fact.label, fact.value),
    })) ?? []
  );
}

function mapKeyInfo(items?: { label?: string; value?: string }[]): DetailKeyInfo[] {
  return (
    items
      ?.filter((item): item is { label: string; value: string } =>
        Boolean(item.label && item.value),
      )
      .map((item) => ({
        label: item.label,
        value: item.value,
        tone: getToneForLabel(item.label),
      })) ?? []
  );
}

function mapAgeLimit(job: JobDetailsApiData): DetailKeyInfo[] {
  const items: DetailKeyInfo[] = [];

  const minimumAge = job.ageLimit?.minimum ?? numberToString(job.minimumAge);
  const maximumAge = job.ageLimit?.maximum ?? numberToString(job.maximumAge);

  if (minimumAge) {
    items.push({ label: 'Minimum Age', value: minimumAge, tone: 'green' });
  }

  if (maximumAge) {
    items.push({ label: 'Maximum Age', value: maximumAge, tone: 'green' });
  }

  if (job.ageLimit?.asOn) {
    items.push({ label: 'Age Reference Date', value: job.ageLimit.asOn, tone: 'slate' });
  }

  return items;
}

function mapVacancy(job: JobDetailsApiData): DetailPageData['vacancy'] {
  if (job.vacancies?.length) {
    const columns: DetailTableColumn[] = [
      { key: 'postName', label: 'Post Name' },
      { key: 'totalPosts', label: 'Total Posts' },
      { key: 'qualification', label: 'Qualification' },
    ];

    return {
      title: `Vacancy Details${job.totalPosts ? ` Total: ${job.totalPosts} Posts` : ''}`,
      columns,
      rows: job.vacancies.map((vacancy, index) => ({
        id: `${job.slug}-vacancy-${index + 1}`,
        values: {
          postName: vacancy.postName,
          totalPosts: vacancy.totalPosts,
          qualification: vacancy.qualification,
        },
      })),
    };
  }

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

function mapTimelineItems(items?: unknown[]): DetailTimelineItem[] {
  return (items ?? []).reduce<DetailTimelineItem[]>((timelineItems, item, index) => {
    const formattedItem = formatInstructionItem(item);

    if (formattedItem) {
      timelineItems.push({
        title: formattedItem,
        date: formattedItem,
        status: index === 0 ? 'active' : 'upcoming',
      });
    }

    return timelineItems;
  }, []);
}

function formatInstructionItem(item: unknown) {
  if (typeof item === 'string') {
    return item;
  }

  if (typeof item === 'number') {
    return String(item);
  }

  if (!item || typeof item !== 'object') {
    return '';
  }

  const instruction = item as {
    step?: string | number;
    title?: string;
    description?: string;
    label?: string;
    value?: string;
  };
  const parts = [
    instruction.step ? `Step ${instruction.step}` : '',
    instruction.title,
    instruction.description ?? instruction.value ?? instruction.label,
  ].filter(Boolean);

  return parts.join(': ');
}

function mapActions(links: JobDetailsApiData['importantLinks']): DetailAction[] {
  return (
    links?.map((link, index) => ({
      label: getActionLabel(link, index),
      href: link.url,
      variant: index === 0 || link.type === 'primary' || link.isPrimary ? 'primary' : 'secondary',
    })) ?? []
  );
}

function getActionLabel(
  link: NonNullable<JobDetailsApiData['importantLinks']>[number],
  index: number,
) {
  const normalizedTitle = link.title.toLowerCase();
  const normalizedType = link.type?.toLowerCase();

  if (normalizedType === 'official' || normalizedTitle.includes('official website')) {
    return 'Official Website';
  }

  if (
    normalizedTitle.includes('notification') ||
    normalizedTitle.includes('notice') ||
    normalizedTitle.includes('pdf')
  ) {
    return 'Official Notification';
  }

  if (index === 0) {
    return 'Apply Online';
  }

  return link.title;
}

function mapStatusTone(tone?: string, status?: string): DetailPageData['status']['tone'] {
  if (tone === 'green' || tone === 'red' || tone === 'orange' || tone === 'blue') {
    return tone;
  }

  if (status?.toLowerCase() === 'open') {
    return 'green';
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

function getToneForFact(label: string, value: string): DetailKeyInfo['tone'] {
  if (label.toLowerCase().includes('status')) {
    return mapStatusTone(undefined, value);
  }

  return getToneForLabel(label);
}

function getAgeLimitSummary(job: JobDetailsApiData) {
  const minimumAge = job.ageLimit?.minimum ?? numberToString(job.minimumAge);
  const maximumAge = job.ageLimit?.maximum ?? numberToString(job.maximumAge);

  if (minimumAge && maximumAge) {
    return `${minimumAge} - ${maximumAge}`;
  }

  return minimumAge ?? maximumAge;
}

function getLocation(job: JobDetailsApiData) {
  if (job.category?.name) {
    return job.category.name;
  }

  if (job.organization.toLowerCase().includes('uttar pradesh')) {
    return 'Uttar Pradesh';
  }

  return 'All India';
}

function mapImportantDates(job: JobDetailsApiData): DetailKeyInfo[] {
  const dateByTitle: Record<string, string | undefined> = {
    'application start': job.applicationStartDate,
    'last date': job.lastDate,
    'exam date': job.examDate,
    'admit card': job.admitCardDate,
    'answer key': job.answerKeyDate,
  };

  if (job.importantDates?.length) {
    const mappedDates = job.importantDates
      .map<DetailKeyInfo | null>((date) => {
        const label = date.title ?? date.label;

        if (!label) {
          return null;
        }

        const value =
          'value' in date && date.value
            ? date.value
            : (dateByTitle[label.toLowerCase()] ?? date.status);

        return value ? { label, value, tone: getToneForLabel(label) } : null;
      })
      .filter((date): date is DetailKeyInfo => Boolean(date));

    if (mappedDates.length) {
      return mappedDates;
    }
  }

  return mapKeyInfo([
    { label: 'Application Start', value: job.applicationStartDate },
    { label: 'Last Date', value: job.lastDate },
    { label: 'Exam Date', value: job.examDate },
    { label: 'Admit Card', value: job.admitCardDate },
    { label: 'Answer Key', value: job.answerKeyDate },
  ]);
}

function mapEligibility(job: JobDetailsApiData) {
  if (job.eligibility?.length) {
    return job.eligibility.map(formatInstructionItem).filter(Boolean);
  }

  if (job.qualifications?.length) {
    return job.qualifications.map(formatInstructionItem).filter(Boolean);
  }

  return (
    job.qualification
      ?.split('|')
      .map((item) => item.trim())
      .filter(Boolean) ?? []
  );
}

function mapAgeLimitNote(job: JobDetailsApiData) {
  if (job.ageLimit?.relaxation) {
    return job.ageLimit.relaxation;
  }

  return job.ageRelaxations?.map((item) => `${item.category}: ${item.relaxation}`).join(' ') ?? '';
}

function extractHowToApply(description?: string) {
  if (!description) {
    return [];
  }

  const howToApplyStart = description.indexOf('How to Fill');

  if (howToApplyStart === -1) {
    return [];
  }

  return description
    .slice(howToApplyStart)
    .split('.')
    .map((item) => item.trim())
    .filter((item) => item.length > 20)
    .slice(0, 8);
}

function getDescriptionPreview(description?: string) {
  if (!description) {
    return '';
  }

  return (
    description
      .split('\n')
      .find((line) => line.trim().length > 40)
      ?.trim() ?? description
  );
}

function formatMaybeDate(date?: string) {
  if (!date) {
    return '';
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsedDate);
}

function numberToString(value?: number) {
  return typeof value === 'number' ? `${value} Years` : undefined;
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
