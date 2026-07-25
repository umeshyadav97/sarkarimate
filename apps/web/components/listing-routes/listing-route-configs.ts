import type { ListingPageConfig } from '@/components/listing';

function createListingColumns(
  titleLabel: string,
  displayValueLabel = 'Last Date',
): ListingPageConfig['columns'] {
  return [
    { key: 'index', label: '#' },
    { key: 'title', label: titleLabel },
    { key: 'organization', label: 'Organization' },
    { key: 'lastDate', label: displayValueLabel },
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
  columns: createListingColumns('Exam', 'Result Status'),
  pageTitle: 'All Latest Results',
  breadcrumbLabel: 'Results',
  heroDescription:
    'Stay updated with results of all government exams, recruitments and entrance tests.',
  heroDescriptionHindi: 'सभी सरकारी परीक्षाओं और भर्ती के परिणाम की जानकारी यहां देखें।',
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
    description:
      'Check Sarkari Result 2026, latest government exam results, recruitment results, merit lists and scorecard updates.',
    canonical: '/results',
  },
});

export const jobsListingConfig = createListingConfig({
  columns: createListingColumns('Post Name', 'Last Date'),
  pageTitle: 'All Latest Jobs',
  breadcrumbLabel: 'Latest Jobs',
  heroDescription: 'Find the latest government job notifications, vacancies and online forms.',
  heroDescriptionHindi: 'नई सरकारी नौकरियों, भर्ती और ऑनलाइन फॉर्म की जानकारी यहां देखें।',
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
    description:
      'Find latest govt jobs 2026, Sarkari Result job updates, recruitment notifications, vacancy details and online form links.',
    canonical: '/jobs',
  },
});

export const admitCardsListingConfig = createListingConfig({
  columns: createListingColumns('Exam', 'Status'),
  pageTitle: 'All Latest Admit Cards',
  breadcrumbLabel: 'Admit Cards',
  heroDescription: 'Download admit cards and hall tickets for upcoming government exams.',
  heroDescriptionHindi: 'आगामी सरकारी परीक्षाओं के एडमिट कार्ड और हॉल टिकट यहां देखें।',
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
    description:
      'Download latest admit card 2026, government exam hall tickets, Sarkari Result admit card updates and exam date notices.',
    canonical: '/admit-cards',
  },
});

export const answerKeysListingConfig = createListingConfig({
  columns: createListingColumns('Exam', 'Answer Key'),
  pageTitle: 'All Latest Answer Keys',
  breadcrumbLabel: 'Answer Keys',
  heroDescription: 'Check provisional and final answer keys for government recruitment exams.',
  heroDescriptionHindi: 'सरकारी भर्ती परीक्षाओं की प्रोविजनल और फाइनल आंसर की यहां देखें।',
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
    description:
      'Check latest answer key 2026, Sarkari Result answer key updates, objection links and final answer key notices.',
    canonical: '/answer-keys',
  },
});

export const syllabusListingConfig = createListingConfig({
  columns: createListingColumns('Exam', 'Revision'),
  pageTitle: 'All Latest Syllabus',
  breadcrumbLabel: 'Syllabus',
  heroDescription: 'Find syllabus, exam patterns and syllabus guides for government exams.',
  heroDescriptionHindi: 'सरकारी परीक्षाओं का सिलेबस, एग्जाम पैटर्न और टॉपिक्स यहां देखें।',
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
      'Check latest syllabus 2026, government exam pattern, Sarkari Result syllabus guides, topics and study updates.',
    canonical: '/syllabus',
  },
});

export const schemesListingConfig = createListingConfig({
  columns: createListingColumns('Scheme', 'Updated'),
  pageTitle: 'All Government Schemes',
  breadcrumbLabel: 'Schemes',
  heroDescription:
    'Explore central and state government schemes, benefits and application updates.',
  heroDescriptionHindi: 'केंद्र और राज्य सरकार की योजनाओं, लाभ और आवेदन जानकारी यहां देखें।',
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
    description:
      'Explore latest government schemes 2026, central and state benefits, Sarkari Yojana updates and online application details.',
    canonical: '/schemes',
  },
});
