import {
  BadgeCheck,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ClipboardCheck,
  FileBadge,
  FileCheck2,
  GraduationCap,
  Grid2X2,
  Landmark,
  ListChecks,
  MonitorCheck,
  Newspaper,
  School,
  Target,
  Trophy,
  TrainFront,
  Users,
  WalletCards,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { BrandShieldIcon } from '@/components/brand-shield-icon';
import {
  DefenceBadgeIcon,
  PoliceBadgeIcon,
  SscEmblemIcon,
} from '@/features/home/components/category-icons';
import admitCardsResponse from '@/features/listings/store/admit-cards.json';
import { homePageStore, type HomePageStore } from '@/features/home/store/homepage-store';

type HomeIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    className?: string;
    strokeWidth?: number;
  }
>;

export interface NavigationItem {
  label: string;
  href: string;
  icon?: HomeIcon;
}

export interface QuickAccessItem {
  label: string;
  description: string;
  href: string;
  icon: HomeIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface NotificationItem {
  title: string;
  organization: string;
  metaLabel: string;
  metaValue: string;
  href?: string;
  accent: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

export interface CategoryItem {
  title: string;
  count: string;
  href: string;
  icon: HomeIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface StatItem {
  label: string;
  value: string;
  helper: string;
  icon: HomeIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface ToolItem {
  title: string;
  description: string;
  href: string;
  icon: HomeIcon;
}

export interface DeadlineItem {
  title: string;
  date: string;
  daysLeft: string;
  href: string;
}

export interface HomeGuideContent {
  title: string;
  paragraphs: string[];
  badges: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface TrustReason {
  title: string;
  description: string;
  icon: HomeIcon;
}

export interface DisclaimerContent {
  title: string;
  description: string;
}

export interface HomepageViewData {
  popularSearches: string[];
  quickAccessItems: QuickAccessItem[];
  latestJobs: NotificationItem[];
  upcomingDeadlines: DeadlineItem[];
  latestAdmitCards: NotificationItem[];
  latestResults: NotificationItem[];
  oldUpcomingDeadlines: NotificationItem[];
  categories: CategoryItem[];
  stats: StatItem[];
}

const admitCardItems = admitCardsResponse.data.items;

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', icon: Building2 },
  { label: 'Latest Jobs', href: '/jobs', icon: BriefcaseBusiness },
  { label: 'Admit Card', href: '/admit-cards', icon: FileBadge },
  { label: 'Results', href: '/results', icon: Trophy },
  { label: 'Answer Key', href: '/answer-keys', icon: ClipboardCheck },
  { label: 'Syllabus', href: '/syllabus', icon: BookOpen },
  { label: 'Schemes', href: '/schemes', icon: Landmark },
];

const quickAccessPresentation: Record<
  string,
  { icon: HomeIcon; tone: QuickAccessItem['tone']; labelSuffix: string }
> = {
  jobs: { icon: BriefcaseBusiness, tone: 'blue', labelSuffix: 'Active' },
  latest_job: { icon: BriefcaseBusiness, tone: 'blue', labelSuffix: 'Active' },
  'admit-card': { icon: FileBadge, tone: 'green', labelSuffix: 'Available' },
  admit_card: { icon: FileBadge, tone: 'green', labelSuffix: 'Available' },
  result: { icon: Trophy, tone: 'purple', labelSuffix: 'Declared' },
  'answer-key': { icon: ClipboardCheck, tone: 'orange', labelSuffix: 'Available' },
  answer_key: { icon: ClipboardCheck, tone: 'orange', labelSuffix: 'Available' },
  syllabus: { icon: BookOpen, tone: 'blue', labelSuffix: 'Available' },
  // scheme: { icon: Landmark, tone: 'green', labelSuffix: 'Available' },
  all: { icon: Grid2X2, tone: 'purple', labelSuffix: 'Exams' },
};

const categoryPresentation: Record<string, { icon: HomeIcon; tone: CategoryItem['tone'] }> = {
  ssc: { icon: SscEmblemIcon, tone: 'orange' },
  railway: { icon: TrainFront, tone: 'blue' },
  banking: { icon: Landmark, tone: 'purple' },
  upsc: { icon: BadgeCheck, tone: 'blue' },
  'up-police': { icon: BrandShieldIcon, tone: 'orange' },
  police: { icon: PoliceBadgeIcon, tone: 'blue' },
  teaching: { icon: School, tone: 'blue' },
  defence: { icon: DefenceBadgeIcon, tone: 'blue' },
  engineering: { icon: MonitorCheck, tone: 'blue' },
  'state-jobs': { icon: Building2, tone: 'green' },
  categories: { icon: Grid2X2, tone: 'blue' },
  'all-categories': { icon: Grid2X2, tone: 'blue' },
};

function formatDisplayDate(date: string) {
  const parsedDate = parseHomepageDate(date);

  if (!parsedDate) {
    return date;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsedDate);
}

function parseHomepageDate(date: string) {
  const normalizedDate = date.trim();
  const indianDateMatch = normalizedDate.match(/\b(\d{2})\/(\d{2})\/(\d{4})\b/);

  if (indianDateMatch) {
    const [, day, month, year] = indianDateMatch;
    return new Date(`${year}-${month}-${day}T00:00:00`);
  }

  const parsedDate = new Date(
    normalizedDate.includes('T') ? normalizedDate : `${normalizedDate}T00:00:00`,
  );

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

function normalizeHomepageHref(href: string) {
  if (href === '/answer-key') {
    return '/answer-keys';
  }

  if (href === '/categories') {
    return '/jobs';
  }

  return href;
}

function mapPopularSearches(store: HomePageStore) {
  return Array.isArray(store.popularSearches)
    ? [...store.popularSearches]
    : defaultHomepageViewData.popularSearches;
}

function mapQuickAccessItems(store: HomePageStore): QuickAccessItem[] {
  const quickAccess = Array.isArray(store.quickAccess)
    ? store.quickAccess
    : homePageStore.quickAccess;

  return quickAccess.map((item) => {
    const presentation = quickAccessPresentation[item.type] ?? quickAccessPresentation.all;

    return {
      label: item.label,
      description: `${item.count} ${presentation.labelSuffix}`,
      href: normalizeHomepageHref(item.href),
      icon: presentation.icon,
      tone: presentation.tone,
    };
  });
}

function mapLatestJobs(store: HomePageStore): NotificationItem[] {
  const latestJobs = Array.isArray(store.latestJobs) ? store.latestJobs : homePageStore.latestJobs;

  return latestJobs.slice(0, 5).map((job, index) => ({
    title: job.title,
    organization: job.organization,
    metaLabel: 'Last Date',
    metaValue: formatDisplayDate(job.lastDate),
    href: `/job-details/${job.slug}`,
    accent: (['orange', 'red', 'blue', 'green', 'purple'] as const)[index % 5],
  }));
}

function mapUpcomingDeadlines(store: HomePageStore): DeadlineItem[] {
  const upcomingDeadlines = Array.isArray(store.upcomingDeadlines)
    ? store.upcomingDeadlines
    : homePageStore.upcomingDeadlines;

  return upcomingDeadlines.map((deadline) => ({
    title: deadline.title,
    date: formatDisplayDate(deadline.lastDate),
    daysLeft:
      typeof deadline.daysLeft === 'number' ? `${deadline.daysLeft} Days Left` : 'Check Date',
    href: `/job-details/${deadline.slug}`,
  }));
}

function mapLatestAdmitCards(): NotificationItem[] {
  return admitCardItems.slice(0, 5).map((admitCard, index) => ({
    title: admitCard.title,
    organization: admitCard.organization,
    metaLabel: 'Status',
    metaValue: admitCard.status === 'released' ? 'Released' : admitCard.status,
    href: `/job-details/${admitCard.slug}`,
    accent: (['green', 'blue', 'purple', 'orange', 'red'] as const)[index % 5],
  }));
}

function mapLatestResults(store: HomePageStore): NotificationItem[] {
  const latestResults = Array.isArray(store.latestResults)
    ? store.latestResults
    : homePageStore.latestResults;

  return latestResults.map((result, index) => ({
    title: result.title,
    organization: result.organization,
    metaLabel: 'Result Date',
    metaValue: formatDisplayDate(result.resultDate),
    href: `/job-details/${result.slug}`,
    accent: (['red', 'purple', 'orange', 'blue', 'green'] as const)[index % 5],
  }));
}

function mapOldUpcomingDeadlines(store: HomePageStore): NotificationItem[] {
  const upcomingDeadlines = Array.isArray(store.upcomingDeadlines)
    ? store.upcomingDeadlines
    : homePageStore.upcomingDeadlines;

  return upcomingDeadlines.map((deadline, index) => ({
    title: deadline.title,
    organization: deadline.organization,
    metaLabel: 'Deadline',
    metaValue:
      typeof deadline.daysLeft === 'number' ? `${deadline.daysLeft} Days Left` : 'Check Date',
    href: `/job-details/${deadline.slug}`,
    accent: (['green', 'blue', 'purple', 'orange', 'red'] as const)[index % 5],
  }));
}

function mapCategories(store: HomePageStore): CategoryItem[] {
  const categories = Array.isArray(store.categories) ? store.categories : homePageStore.categories;

  return categories.map((category) => {
    const slug = String(category.slug);
    const presentation = categoryPresentation[slug] ?? {
      icon: Grid2X2,
      tone: 'blue',
    };
    const isAllCategories = slug === 'categories' || slug === 'all-categories';

    return {
      title: category.name,
      count: `${category.count}+ Jobs`,
      href: isAllCategories ? '/jobs' : `/jobs?category=${slug}`,
      icon: presentation.icon,
      tone: presentation.tone,
    };
  });
}

function mapStats(store: HomePageStore): StatItem[] {
  const stats = store.stats ?? homePageStore.stats;

  return [
    {
      label: 'Total Job Posts',
      value: `${stats.totalJobs}+`,
      helper: 'Available Now',
      icon: BriefcaseBusiness,
      tone: 'blue',
    },
    {
      label: 'Active Job Posts',
      value: `${stats.activeJobs ?? stats.totalJobs}+`,
      helper: 'Currently Open',
      icon: FileBadge,
      tone: 'green',
    },
    {
      label: 'Results Declared',
      value: `${stats.resultsDeclared}+`,
      helper: 'Latest Updates',
      icon: Trophy,
      tone: 'purple',
    },
    {
      label: 'Active Users',
      value: `${stats.activeUsers ?? 0}+`,
      helper: 'Tracking Today',
      icon: Users,
      tone: 'orange',
    },
  ];
}

export function createHomepageViewData(store: HomePageStore): HomepageViewData {
  return {
    popularSearches: mapPopularSearches(store),
    quickAccessItems: mapQuickAccessItems(store),
    latestJobs: mapLatestJobs(store),
    upcomingDeadlines: mapUpcomingDeadlines(store),
    latestAdmitCards: mapLatestAdmitCards(),
    latestResults: mapLatestResults(store),
    oldUpcomingDeadlines: mapOldUpcomingDeadlines(store),
    categories: mapCategories(store),
    stats: mapStats(store),
  };
}

export const defaultHomepageViewData = createHomepageViewData(homePageStore);

export const popularSearches = defaultHomepageViewData.popularSearches;
export const quickAccessItems = defaultHomepageViewData.quickAccessItems;
export const latestJobs = defaultHomepageViewData.latestJobs;
export const upcomingDeadlines = defaultHomepageViewData.upcomingDeadlines;
export const latestAdmitCards = defaultHomepageViewData.latestAdmitCards;
export const latestResults = defaultHomepageViewData.latestResults;
export const oldUpcomingDeadlines = defaultHomepageViewData.oldUpcomingDeadlines;
export const categories = defaultHomepageViewData.categories;
export const stats = defaultHomepageViewData.stats;

export const importantTools: ToolItem[] = [
  { title: 'Exam Calendar', description: 'Check Exam Dates', href: '#', icon: CalendarDays },
  {
    title: 'Application Tracker',
    description: 'Track Your Application',
    href: '#',
    icon: MonitorCheck,
  },
  {
    title: 'Admit Card',
    description: 'Download Hall Ticket',
    href: '/admit-cards',
    icon: WalletCards,
  },
  { title: 'Results', description: 'Check Latest Results', href: '/results', icon: FileCheck2 },
  {
    title: 'Answer Key',
    description: 'View and Download',
    href: '/answer-keys',
    icon: ClipboardCheck,
  },
  { title: 'Syllabus', description: 'Download Syllabus', href: '/syllabus', icon: BookOpen },
];

export const trustPoints = [
  '100% official information',
  'Fast updates and notifications',
  'Easy to understand',
  'Mobile friendly',
  'AI assistant for your help',
  'No registration required',
];

export const governmentJobsGuide: HomeGuideContent = {
  title: 'Government Jobs Guide',
  paragraphs: [
    'SarkariMate is your trusted platform for the latest Government Job notifications, Admit Cards, Results, Answer Keys, Syllabus, Exam Dates and Admissions across India. We cover recruitment from top organizations including SSC, UPSC, Railway, Banking, Defence, Police, Teaching, PSU and various State Government departments.',
    'We simplify complex govt job notifications and present them in easy-to-understand language. Each job post includes important details such as eligibility criteria, age limit, application fee, vacancy details, selection process, salary structure and important dates.',
    'Candidates can apply directly through the official website links provided with each notification. We aim to save your time and help you never miss an important update.',
    'Whether you are looking for 10th pass jobs, 12th pass jobs, graduate level jobs or Post Graduate level jobs, SarkariMate has everything you need to stay ahead in your preparation.',
  ],
  badges: ['100% Free Access', 'Official Links Only', 'Fast & Reliable Updates', 'Mobile Friendly'],
  image: {
    src: '/assets/images/latest-job.png',
    alt: 'Government jobs checklist illustration',
  },
};

export const homeFaqs: HomeFaqItem[] = [
  {
    question: 'What is SarkariMate?',
    answer:
      'SarkariMate is an information portal for government jobs, admit cards, results, answer keys, syllabus and exam updates.',
  },
  {
    question: 'How can I download admit cards?',
    answer:
      'Open the Admit Cards section, choose your exam update, and use the official link provided on the detail page.',
  },
  {
    question: 'Is SarkariMate an official government website?',
    answer:
      'No. SarkariMate is an independent information portal and is not affiliated with any government department.',
  },
  {
    question: 'How can I check my exam results?',
    answer:
      'Visit the Results section, search for your exam, and follow the official result link from the detail page.',
  },
  {
    question: 'How often are notifications updated?',
    answer:
      'We update listings regularly so candidates can track important government exam and recruitment updates in one place.',
  },
  {
    question: 'Which government exams are covered?',
    answer:
      'We cover SSC, UPSC, Railway, Banking, Defence, Police, Teaching, PSU, State Government exams and related updates.',
  },
];

export const trustReasons: TrustReason[] = [
  {
    title: 'Official Notification Links',
    description: 'Direct links to official websites',
    icon: ClipboardCheck,
  },
  {
    title: 'Verified Information',
    description: 'Accurate and verified updates',
    icon: BrandShieldIcon,
  },
  {
    title: 'Easy to Understand',
    description: 'Simple and clear explanations',
    icon: Users,
  },
  {
    title: 'Daily Updates',
    description: 'Timely and fast notifications',
    icon: CalendarDays,
  },
  {
    title: 'Mobile Friendly',
    description: 'Best experience on mobile',
    icon: MonitorCheck,
  },
];

export const disclaimerContent: DisclaimerContent = {
  title: 'Disclaimer',
  description:
    'SarkariMate is an independent informational platform and is not affiliated with any Government organization or department. All information provided on this website is for general informational purposes only. Candidates are advised to verify all details from the official notification and the respective department website before applying. We are not responsible for any errors or omissions.',
};

export const footerLinks = {
  quickLinks: ['Latest Jobs', 'Admit Card', 'Results', 'Answer Key', 'Syllabus', 'Exam Calendar'],
  popularExams: [
    'SSC CGL',
    'UP Police',
    'RRB NTPC',
    'UP Anganwadi',
    'Bihar Police',
    'Teaching Jobs',
  ],
  resources: [
    'Exam Calendar',
    'Previous Papers',
    'Career Guide',
    'Govt. Schemes',
    'Application Tracker',
  ],
  company: [
    'About Us',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions',
    'Disclaimer',
    'Sitemap',
  ],
};

export const newsArticles = [
  {
    '@type': 'NewsArticle',
    headline: 'Latest Government Job Notifications 2026',
    datePublished: '2026-07-07',
    author: { '@type': 'Organization', name: 'SarkariMate' },
  },
];
