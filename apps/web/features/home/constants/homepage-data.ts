import type { LucideIcon } from 'lucide-react';
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
  ShieldCheck,
  Target,
  Trophy,
  Users,
  WalletCards,
} from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface QuickAccessItem {
  label: string;
  description: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface NotificationItem {
  title: string;
  organization: string;
  metaLabel: string;
  metaValue: string;
  accent: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

export interface CategoryItem {
  title: string;
  count: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface StatItem {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface ToolItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', icon: Building2 },
  { label: 'Latest Jobs', href: '/jobs', icon: BriefcaseBusiness },
  { label: 'Admit Card', href: '/admit-card', icon: FileBadge },
  { label: 'Results', href: '/results', icon: Trophy },
  { label: 'Answer Key', href: '/answer-key', icon: ClipboardCheck },
  { label: 'Syllabus', href: '/syllabus', icon: BookOpen },
  { label: 'Schemes', href: '/schemes', icon: Landmark },
];

export const popularSearches = ['SSC CGL', 'UP Police', 'RRB NTPC', 'UP Anganwadi', 'Bihar Police'];

export const quickAccessItems: QuickAccessItem[] = [
  {
    label: 'Latest Jobs',
    description: '25,254+ Active',
    icon: BriefcaseBusiness,
    tone: 'blue',
  },
  { label: 'Admit Card', description: '1,245+ Available', icon: FileBadge, tone: 'green' },
  { label: 'Results', description: '3,876+ Declared', icon: Trophy, tone: 'purple' },
  { label: 'Answer Key', description: '742+ Available', icon: ClipboardCheck, tone: 'orange' },
  { label: 'Syllabus', description: '1,345+ Available', icon: BookOpen, tone: 'blue' },
  { label: 'All Exams', description: '2,540+ Exams', icon: Grid2X2, tone: 'blue' },
];

export const latestJobs: NotificationItem[] = [
  {
    title: 'UP Anganwadi Bharti Online Form 2026',
    organization: 'Uttar Pradesh Government',
    metaLabel: 'Last Date',
    metaValue: 'District Wise',
    accent: 'orange',
  },
  {
    title: 'RRB Technician Recruitment 2026',
    organization: 'Railway Recruitment Board',
    metaLabel: 'Last Date',
    metaValue: '28 Jul 2026',
    accent: 'red',
  },
  {
    title: 'SSC CGL 2026 Online Form',
    organization: 'Staff Selection Commission',
    metaLabel: 'Last Date',
    metaValue: '04 Jul 2026',
    accent: 'orange',
  },
  {
    title: 'Bihar Police Sub Inspector SI 2026',
    organization: 'Bihar Police Subordinate Services Commission',
    metaLabel: 'Last Date',
    metaValue: '20 Jul 2026',
    accent: 'blue',
  },
  {
    title: 'UP Police Constable Recruitment 2026',
    organization: 'Uttar Pradesh Police',
    metaLabel: 'Last Date',
    metaValue: '30 Jul 2026',
    accent: 'green',
  },
];

export const upcomingDeadlines: NotificationItem[] = [
  {
    title: 'UP Anganwadi Bharti 2026',
    organization: 'District Wise',
    metaLabel: 'Deadline',
    metaValue: '6 Days Left',
    accent: 'green',
  },
  {
    title: 'RRB Technician 2026',
    organization: 'Railway Recruitment Board',
    metaLabel: 'Deadline',
    metaValue: '10 Days Left',
    accent: 'blue',
  },
  {
    title: 'Bihar Police SI 2026',
    organization: 'BPSSC',
    metaLabel: 'Deadline',
    metaValue: '12 Days Left',
    accent: 'purple',
  },
  {
    title: 'SSC CGL 2026',
    organization: 'Staff Selection Commission',
    metaLabel: 'Deadline',
    metaValue: '16 Days Left',
    accent: 'orange',
  },
  {
    title: 'UP Police Constable 2026',
    organization: 'Uttar Pradesh Police',
    metaLabel: 'Deadline',
    metaValue: '18 Days Left',
    accent: 'red',
  },
];

export const latestResults: NotificationItem[] = [
  {
    title: 'RRB Group-D Result 2026',
    organization: 'Railway Recruitment Board',
    metaLabel: 'Status',
    metaValue: 'OUT',
    accent: 'red',
  },
  {
    title: 'UPSSSC PET 2025 Result',
    organization: 'Uttar Pradesh Govt.',
    metaLabel: 'Status',
    metaValue: 'OUT',
    accent: 'purple',
  },
  {
    title: 'SSC CGL Tier 1 Result 2026',
    organization: 'Staff Selection Commission',
    metaLabel: 'Status',
    metaValue: 'OUT',
    accent: 'orange',
  },
  {
    title: 'UP Police SI Result 2026',
    organization: 'Uttar Pradesh Police',
    metaLabel: 'Status',
    metaValue: 'OUT',
    accent: 'blue',
  },
  {
    title: 'Bihar DELED Result 2026',
    organization: 'Bihar School Examination Board',
    metaLabel: 'Status',
    metaValue: 'OUT',
    accent: 'green',
  },
];

export const categories: CategoryItem[] = [
  { title: 'SSC', count: '245+ Jobs', icon: Target, tone: 'orange' },
  { title: 'Railway', count: '320+ Jobs', icon: MonitorCheck, tone: 'blue' },
  { title: 'Banking', count: '185+ Jobs', icon: Landmark, tone: 'purple' },
  { title: 'UP Police', count: '215+ Jobs', icon: ShieldCheck, tone: 'orange' },
  { title: 'Teaching', count: '280+ Jobs', icon: GraduationCap, tone: 'blue' },
  { title: 'Defence', count: '120+ Jobs', icon: ShieldCheck, tone: 'green' },
  { title: 'Engineering', count: '150+ Jobs', icon: FileCheck2, tone: 'blue' },
  { title: 'All Categories', count: '1000+ Jobs', icon: Grid2X2, tone: 'blue' },
];

export const stats: StatItem[] = [
  {
    label: 'Total Job Posts',
    value: '2,54,000+',
    helper: 'All Time',
    icon: BriefcaseBusiness,
    tone: 'blue',
  },
  {
    label: 'Active Job Posts',
    value: '25,254+',
    helper: 'Currently Open',
    icon: FileBadge,
    tone: 'green',
  },
  { label: 'Results Declared', value: '3,876+', helper: 'Till Now', icon: Trophy, tone: 'purple' },
  { label: 'Active Users', value: '1M+', helper: 'Trusting Us', icon: Users, tone: 'orange' },
];

export const importantTools: ToolItem[] = [
  { title: 'Exam Calendar', description: 'Check Exam Dates', icon: CalendarDays },
  { title: 'Application Tracker', description: 'Track Your Application', icon: MonitorCheck },
  { title: 'Admit Card', description: 'Download Hall Ticket', icon: WalletCards },
  { title: 'Results', description: 'Check Latest Results', icon: FileCheck2 },
  { title: 'Answer Key', description: 'View and Download', icon: ClipboardCheck },
  { title: 'Syllabus', description: 'Download Syllabus', icon: BookOpen },
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
