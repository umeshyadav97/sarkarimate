import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileBadge,
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
  { label: 'Latest Jobs', href: '#', icon: BriefcaseBusiness },
  { label: 'Admit Card', href: '#', icon: FileBadge },
  { label: 'Results', href: '#', icon: Trophy },
  { label: 'Answer Key', href: '#', icon: ClipboardCheck },
  { label: 'Syllabus', href: '#', icon: BookOpen },
];
