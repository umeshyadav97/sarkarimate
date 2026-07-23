import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileBadge,
  Landmark,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', icon: Building2 },
  { label: 'Latest Jobs', href: '/jobs', icon: BriefcaseBusiness },
  { label: 'Admit Card', href: '/admit-cards', icon: FileBadge },
  { label: 'Results', href: '/results', icon: Trophy },
  { label: 'Answer Key', href: '/answer-keys', icon: ClipboardCheck },
  { label: 'Syllabus', href: '/syllabus', icon: BookOpen },
  // { label: 'Schemes', href: '/schemes', icon: Landmark },
];
