import type { ListingPageConfig } from '@/components/listing';

function createListingColumns(titleLabel: string): ListingPageConfig['columns'] {
  return [
    { key: 'index', label: '#' },
    { key: 'title', label: titleLabel },
    { key: 'organization', label: 'Organization' },
    { key: 'updatedDate', label: 'Updated Date' },
    { key: 'action', label: 'Action' },
  ];
}

const defaultFilters: ListingPageConfig['filters'] = {
  years: [
    { label: 'All Years', value: 'all' },
    { label: '2026', value: '2026' },
    { label: '2025', value: '2025' },
    { label: '2024', value: '2024' },
  ],
  states: [
    { label: 'All States', value: 'all' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { label: 'Haryana', value: 'Haryana' },
  ],
  organizations: [
    { label: 'All Organizations', value: 'all' },
    { label: 'BCECEB', value: 'BCECEB' },
    { label: 'JPSC', value: 'JPSC' },
    { label: 'UPPSC', value: 'UPPSC' },
    { label: 'HSSC', value: 'HSSC' },
    { label: 'SSC', value: 'SSC' },
    { label: 'RRB', value: 'RRB' },
  ],
};

const defaultStatistics: ListingPageConfig['statistics'] = [
  { label: 'Total', value: '1,254+', icon: 'file', tone: 'blue' },
  { label: 'Updated Today', value: '28', icon: 'calendar', tone: 'green' },
  { label: 'This Week', value: '186', icon: 'clock', tone: 'purple' },
  { label: 'This Month', value: '702', icon: 'building', tone: 'orange' },
];

function createListingConfig(
  overrides: Omit<ListingPageConfig, 'columns' | 'filters' | 'statistics'> &
    Partial<Pick<ListingPageConfig, 'columns' | 'filters' | 'statistics'>>,
): ListingPageConfig {
  return {
    columns: createListingColumns('Exam'),
    filters: defaultFilters,
    statistics: defaultStatistics,
    ...overrides,
  };
}

export const resultsListingConfig = createListingConfig({
  pageTitle: 'All Latest Results',
  breadcrumbLabel: 'Results',
  heroDescription:
    'Stay updated with results of all government exams, recruitments and entrance tests.',
  heroDescriptionHindi: 'सभी सरकारी परीक्षाओं और भर्ती के परिणाम की जानकारी यहाँ देखें।',
  heroImage: {
    src: '/assets/images/result-banner.png',
    alt: 'Illustration of exam results on a clipboard',
    priority: true,
  },
  searchPlaceholder: 'Search by exam or organization...',
  apiEndpoint: '/results',
  pageType: 'results',
  actionLabel: 'View Result',
  sidebar: {
    filterTitle: 'Filter Results',
    newsletterTitle: 'Get Result Alerts',
    newsletterDescription: 'Subscribe to get the latest result updates directly in your inbox.',
    helpText: 'Need help finding a result? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Results | SarkariMate',
    description: 'Latest government exam results, recruitment results and scorecards.',
    canonical: '/results',
  },
});

export const jobsListingConfig = createListingConfig({
  columns: createListingColumns('Post Name'),
  pageTitle: 'All Latest Jobs',
  breadcrumbLabel: 'Latest Jobs',
  heroDescription: 'Find the latest government job notifications, vacancies and online forms.',
  heroDescriptionHindi: 'नई सरकारी नौकरियों, भर्ती और ऑनलाइन फॉर्म की जानकारी यहाँ देखें।',
  heroImage: {
    src: '/assets/images/latest-job.png',
    alt: 'Government building illustration for latest job updates',
  },
  searchPlaceholder: 'Search by post, exam or organization...',
  apiEndpoint: '/jobs',
  pageType: 'jobs',
  actionLabel: 'View Job',
  sidebar: {
    filterTitle: 'Filter Jobs',
    newsletterTitle: 'Get Job Alerts',
    newsletterDescription: 'Subscribe to get the latest job notifications directly in your inbox.',
    helpText: 'Need help finding a job update? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Latest Jobs | SarkariMate',
    description: 'Latest government jobs, recruitment notifications and online forms.',
    canonical: '/jobs',
  },
});

export const admitCardsListingConfig = createListingConfig({
  pageTitle: 'All Latest Admit Cards',
  breadcrumbLabel: 'Admit Cards',
  heroDescription: 'Download admit cards and hall tickets for upcoming government exams.',
  heroDescriptionHindi: 'आगामी सरकारी परीक्षाओं के admit card और hall ticket यहाँ देखें।',
  heroImage: {
    src: '/assets/images/admit-card.png',
    alt: 'Student using SarkariMate for admit card updates',
  },
  searchPlaceholder: 'Search by exam or organization...',
  apiEndpoint: '/admit-cards',
  pageType: 'admit-cards',
  actionLabel: 'View Admit Card',
  sidebar: {
    filterTitle: 'Filter Admit Cards',
    newsletterTitle: 'Get Admit Card Alerts',
    newsletterDescription: 'Subscribe to get admit card updates directly in your inbox.',
    helpText: 'Need help finding an admit card? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Admit Cards | SarkariMate',
    description: 'Latest government exam admit cards, hall tickets and download updates.',
    canonical: '/admit-cards',
  },
});

export const answerKeysListingConfig = createListingConfig({
  pageTitle: 'All Latest Answer Keys',
  breadcrumbLabel: 'Answer Keys',
  heroDescription: 'Check provisional and final answer keys for government recruitment exams.',
  heroDescriptionHindi: 'सरकारी भर्ती परीक्षाओं की provisional और final answer key यहाँ देखें।',
  heroImage: {
    src: '/assets/images/answer-key.png',
    alt: 'Illustration for answer key and result verification',
  },
  searchPlaceholder: 'Search by exam or organization...',
  apiEndpoint: '/answer-keys',
  pageType: 'answer-keys',
  actionLabel: 'View Answer Key',
  sidebar: {
    filterTitle: 'Filter Answer Keys',
    newsletterTitle: 'Get Answer Key Alerts',
    newsletterDescription: 'Subscribe to get answer key updates directly in your inbox.',
    helpText: 'Need help finding an answer key? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Answer Keys | SarkariMate',
    description: 'Latest government exam answer keys, objections and final answer key updates.',
    canonical: '/answer-keys',
  },
});

export const syllabusListingConfig = createListingConfig({
  pageTitle: 'All Latest Syllabus',
  breadcrumbLabel: 'Syllabus',
  heroDescription: 'Find syllabus, exam patterns and syllabus guides for government exams.',
  heroDescriptionHindi: 'सरकारी परीक्षाओं का syllabus, exam pattern और topics यहाँ देखें।',
  heroImage: {
    src: '/assets/images/syllabus.png',
    alt: 'Study illustration for syllabus updates',
  },
  searchPlaceholder: 'Search by exam, post or organization...',
  apiEndpoint: '/syllabus',
  pageType: 'syllabus',
  actionLabel: 'View Syllabus',
  sidebar: {
    filterTitle: 'Filter Syllabus',
    newsletterTitle: 'Get Syllabus Alerts',
    newsletterDescription: 'Subscribe to get syllabus updates directly in your inbox.',
    helpText: 'Need help finding syllabus material? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Syllabus | SarkariMate',
    description:
      'Latest government exam syllabus guides, syllabus, exam pattern and study updates.',
    canonical: '/syllabus',
  },
});

export const schemesListingConfig = createListingConfig({
  columns: createListingColumns('Scheme'),
  pageTitle: 'All Government Schemes',
  breadcrumbLabel: 'Schemes',
  heroDescription:
    'Explore central and state government schemes, benefits and application updates.',
  heroDescriptionHindi: 'केंद्र और राज्य सरकार की योजनाओं, लाभ और आवेदन जानकारी यहाँ देखें।',
  heroImage: {
    src: '/assets/images/gov-schemes.png',
    alt: 'Government building illustration for scheme updates',
  },
  searchPlaceholder: 'Search by scheme, department or state...',
  apiEndpoint: '/schemes',
  pageType: 'schemes',
  actionLabel: 'View Scheme',
  sidebar: {
    filterTitle: 'Filter Schemes',
    newsletterTitle: 'Get Scheme Alerts',
    newsletterDescription: 'Subscribe to get government scheme updates directly in your inbox.',
    helpText: 'Need help finding a scheme? Contact SarkariMate support for guidance.',
  },
  seo: {
    title: 'Schemes | SarkariMate',
    description: 'Latest central and state government schemes, benefits and application updates.',
    canonical: '/schemes',
  },
});
