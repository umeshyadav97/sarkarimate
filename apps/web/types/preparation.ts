import type { ReactNode } from 'react';

export interface PreparationBreadcrumb {
  label: string;
  href: string;
}

export interface PreparationMetric {
  label: string;
  value: string;
  tone?: 'blue' | 'green' | 'red' | 'orange' | 'slate';
}

export interface PreparationAction {
  label: string;
  href: string;
  type: 'download' | 'official' | 'notification' | 'apply' | 'internal';
}

export interface PreparationOverviewData {
  title: string;
  description: string;
  highlights?: PreparationMetric[];
}

export interface SyllabusSubject {
  name: string;
  description?: string;
  topics: string[];
}

export interface PreparationTableColumn {
  key: string;
  label: string;
}

export interface PreparationTableRow {
  id: string;
  values: Record<string, ReactNode>;
}

export interface PreparationTable {
  columns: PreparationTableColumn[];
  rows: PreparationTableRow[];
}

export interface SelectionProcessStep {
  title: string;
  description?: string;
}

export interface PreparationResource {
  title: string;
  description: string;
  href?: string;
  tone?: 'blue' | 'green' | 'orange' | 'purple' | 'slate';
}

export interface RecommendedBook {
  title: string;
  author?: string;
  subject?: string;
  description?: string;
}

export interface PreviousYearPaper {
  title: string;
  year?: string;
  href?: string;
}

export interface PreparationHighlight {
  title: string;
  value: string;
  description?: string;
}

export interface StudyPlanPhase {
  title: string;
  duration?: string;
  tasks: string[];
}

export interface PreparationFaq {
  question: string;
  answer: string;
}

export interface RelatedPreparationGuide {
  title: string;
  href: string;
  category?: string;
  description?: string;
}

export interface SEOContentBlock {
  title: string;
  body: string[];
}

export interface PreparationGuideSeo {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}

export interface PreparationGuide {
  slug: string;
  title: string;
  examName: string;
  organization: string;
  category?: string;
  badgeLabel?: string;
  updatedDate: string;
  breadcrumbs: PreparationBreadcrumb[];
  heroFacts?: PreparationMetric[];
  quickActions?: PreparationAction[];
  overview?: PreparationOverviewData;
  syllabus?: SyllabusSubject[];
  examPattern?: PreparationTable;
  selectionProcess?: SelectionProcessStep[];
  resources?: PreparationResource[];
  books?: RecommendedBook[];
  previousPapers?: PreviousYearPaper[];
  cutoff?: PreparationTable;
  sidebarHighlights?: PreparationHighlight[];
  studyPlan?: StudyPlanPhase[];
  faqs?: PreparationFaq[];
  relatedGuides?: RelatedPreparationGuide[];
  seoContent?: SEOContentBlock[];
  seo: PreparationGuideSeo;
}
