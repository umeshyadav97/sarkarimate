import type { ComponentType, ReactNode } from 'react';

export type DetailPageType =
  'jobs' | 'results' | 'admit-cards' | 'answer-keys' | 'syllabus' | 'schemes';

export interface DetailAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface DetailBreadcrumb {
  label: string;
  href: string;
}

export interface DetailKeyInfo {
  label: string;
  value: string;
  tone?: 'blue' | 'green' | 'red' | 'orange' | 'slate';
}

export interface DetailTableColumn {
  key: string;
  label: string;
  kind?: 'text' | 'document' | 'action';
  hrefKey?: string;
}

export interface DetailTableRow {
  id: string;
  values: Record<string, ReactNode>;
}

export interface DetailLink {
  label: string;
  href: string;
  description?: string;
}

export interface DetailTimelineItem {
  title: string;
  date: string;
  status: 'complete' | 'active' | 'upcoming';
}

export interface DetailRelatedContent {
  title: string;
  buttonText: string;
  href: string;
  items: DetailLink[];
}

export interface DetailFaqItem {
  question: string;
  answer: string;
}

export interface DetailSeo {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}

export interface DetailPageData {
  pageType: DetailPageType;
  slug: string;
  title: string;
  status: {
    label: string;
    tone: 'green' | 'red' | 'orange' | 'blue' | 'slate';
  };
  organization: string;
  location: string;
  postedDate: string;
  updatedDate: string;
  breadcrumbs: DetailBreadcrumb[];
  keyInformation: DetailKeyInfo[];
  alert?: string;
  actions: DetailAction[];
  about: {
    title: string;
    body: string[];
  };
  importantDates: DetailKeyInfo[];
  vacancy: {
    title: string;
    columns: DetailTableColumn[];
    rows: DetailTableRow[];
  };
  eligibility: string[];
  howToApply: string[];
  ageLimit: DetailKeyInfo[];
  ageLimitNote: string;
  applicationFee: DetailKeyInfo[];
  applicationFeeNote: string;
  selectionProcess: DetailTimelineItem[];
  importantLinks: DetailLink[];
  faqs: DetailFaqItem[];
  timeline: DetailTimelineItem[];
  relatedContent: DetailRelatedContent[];
  seo: DetailSeo;
}

export type DetailSectionId =
  | 'overview'
  | 'important-dates'
  | 'vacancy'
  | 'eligibility'
  | 'how-to-apply'
  | 'age-limit'
  | 'application-fee'
  | 'selection-process'
  | 'important-links'
  | 'faq'
  | 'timeline';

export interface DetailSectionConfig {
  id: DetailSectionId;
  label: string;
}

export type DetailSidebarWidgetId =
  'actions' | 'timeline' | 'related' | 'share' | 'newsletter' | 'help';

export interface DetailPageConfig {
  pageType: DetailPageType;
  listingHref: string;
  listingLabel: string;
  atGlanceTitle: string;
  actionTitle: string;
  actionDescription: string;
  actionButtonLabels: string[];
  timelineTitle: string;
  shareTitle: string;
  sections: DetailSectionConfig[];
  sidebarWidgets: DetailSidebarWidgetId[];
  embeddedSections: {
    ageLimitTitle: string;
    applicationFeeTitle: string;
    selectionProcessTitle: string;
  };
  relatedContentTitle: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  helpTitle: string;
  helpDescription: string;
  helpHref: string;
  helpButtonText: string;
}

export interface DetailIconProps {
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export type DetailIcon = ComponentType<DetailIconProps>;
