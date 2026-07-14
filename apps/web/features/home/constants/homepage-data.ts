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
  Target,
  Trophy,
  Users,
  WalletCards,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { BrandShieldIcon } from '@/components/brand-shield-icon';
import { homePageStore } from '@/features/home/store/homepage-store';

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
  (typeof homePageStore.quickAccess)[number]['type'],
  { icon: HomeIcon; tone: QuickAccessItem['tone']; labelSuffix: string }
> = {
  jobs: { icon: BriefcaseBusiness, tone: 'blue', labelSuffix: 'Active' },
  'admit-card': { icon: FileBadge, tone: 'green', labelSuffix: 'Available' },
  result: { icon: Trophy, tone: 'purple', labelSuffix: 'Declared' },
  'answer-key': { icon: ClipboardCheck, tone: 'orange', labelSuffix: 'Available' },
  syllabus: { icon: BookOpen, tone: 'blue', labelSuffix: 'Available' },
  // scheme: { icon: Landmark, tone: 'green', labelSuffix: 'Available' },
  all: { icon: Grid2X2, tone: 'purple', labelSuffix: 'Exams' },
};

const categoryPresentation: Record<string, { icon: HomeIcon; tone: CategoryItem['tone'] }> = {
  ssc: { icon: Target, tone: 'orange' },
  railway: { icon: MonitorCheck, tone: 'blue' },
  banking: { icon: Landmark, tone: 'purple' },
  upsc: { icon: BadgeCheck, tone: 'blue' },
  'up-police': { icon: BrandShieldIcon, tone: 'orange' },
  police: { icon: BrandShieldIcon, tone: 'orange' },
  teaching: { icon: GraduationCap, tone: 'blue' },
  defence: { icon: BrandShieldIcon, tone: 'green' },
  engineering: { icon: FileCheck2, tone: 'blue' },
  'state-jobs': { icon: Building2, tone: 'green' },
  categories: { icon: Grid2X2, tone: 'blue' },
  'all-categories': { icon: Grid2X2, tone: 'blue' },
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
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

export const popularSearches = homePageStore.popularSearches;

export const quickAccessItems: QuickAccessItem[] = homePageStore.quickAccess.map((item) => {
  const presentation = quickAccessPresentation[item.type];

  return {
    label: item.label,
    description: `${item.count} ${presentation.labelSuffix}`,
    href: normalizeHomepageHref(item.href),
    icon: presentation.icon,
    tone: presentation.tone,
  };
});

export const latestJobs: NotificationItem[] = homePageStore.latestJobs
  .slice(0, 5)
  .map((job, index) => ({
    title: job.title,
    organization: job.organization,
    metaLabel: 'Last Date',
    metaValue: formatDisplayDate(job.lastDate),
    href: '/jobs',
    accent: (['orange', 'red', 'blue', 'green', 'purple'] as const)[index % 5],
  }));

export const upcomingDeadlines: NotificationItem[] = homePageStore.upcomingDeadlines.map(
  (deadline, index) => ({
    title: deadline.title,
    organization: deadline.organization,
    metaLabel: 'Deadline',
    metaValue: `${deadline.daysLeft} Days Left`,
    href: '/jobs',
    accent: (['green', 'blue', 'purple', 'orange', 'red'] as const)[index % 5],
  }),
);

export const latestResults: NotificationItem[] = homePageStore.latestResults.map(
  (result, index) => ({
    title: result.title,
    organization: result.organization,
    metaLabel: 'Result Date',
    metaValue: formatDisplayDate(result.resultDate),
    href: '/results',
    accent: (['red', 'purple', 'orange', 'blue', 'green'] as const)[index % 5],
  }),
);

export const categories: CategoryItem[] = homePageStore.categories.map((category) => {
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

export const stats: StatItem[] = [
  {
    label: 'Total Job Posts',
    value: `${homePageStore.stats.totalJobs}+`,
    helper: 'Available Now',
    icon: BriefcaseBusiness,
    tone: 'blue',
  },
  {
    label: 'Active Job Posts',
    value: `${homePageStore.stats.activeJobs}+`,
    helper: 'Currently Open',
    icon: FileBadge,
    tone: 'green',
  },
  {
    label: 'Results Declared',
    value: `${homePageStore.stats.resultsDeclared}+`,
    helper: 'Latest Updates',
    icon: Trophy,
    tone: 'purple',
  },
  {
    label: 'Active Users',
    value: `${homePageStore.stats.activeUsers}+`,
    helper: 'Tracking Today',
    icon: Users,
    tone: 'orange',
  },
];

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
