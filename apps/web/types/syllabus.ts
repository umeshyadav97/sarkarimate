import type { ReactNode } from 'react';

export interface SyllabusBreadcrumb {
  label: string;
  href: string;
}

export interface SyllabusMetric {
  label: string;
  value: string;
  tone?: 'blue' | 'green' | 'red' | 'orange' | 'slate';
}

export interface SyllabusAction {
  label: string;
  href: string;
  type: 'download' | 'official' | 'notification' | 'apply' | 'internal';
}

export interface SyllabusOverviewData {
  title: string;
  description: string;
  highlights?: SyllabusMetric[];
}

export interface SyllabusSubject {
  name: string;
  description?: string;
  topics: string[];
}

export interface SyllabusTableColumn {
  key: string;
  label: string;
}

export interface SyllabusTableRow {
  id: string;
  values: Record<string, ReactNode>;
}

export interface SyllabusTable {
  columns: SyllabusTableColumn[];
  rows: SyllabusTableRow[];
}

export interface SelectionProcessStep {
  title: string;
  description?: string;
}

export interface SyllabusResource {
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

export interface SyllabusHighlight {
  title: string;
  value: string;
  description?: string;
}

export interface StudyPlanPhase {
  title: string;
  duration?: string;
  tasks: string[];
}

export interface SyllabusFaq {
  question: string;
  answer: string;
}

export interface RelatedSyllabusGuide {
  title: string;
  href: string;
  category?: string;
  description?: string;
}

export interface SEOContentBlock {
  title: string;
  body: string[];
}

export interface SyllabusGuideSeo {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}

export interface SyllabusGuide {
  slug: string;
  title: string;
  examName: string;
  organization: string;
  category?: string;
  badgeLabel?: string;
  updatedDate: string;
  breadcrumbs: SyllabusBreadcrumb[];
  heroFacts?: SyllabusMetric[];
  quickActions?: SyllabusAction[];
  overviewDescription?: string;
  overviewHighlights?: SyllabusMetric[];
  overview?: SyllabusOverviewData;
  syllabus?: SyllabusSubject[];
  examPattern?: SyllabusTable;
  selectionProcess?: SelectionProcessStep[] | string[];
  resources?: SyllabusResource[];
  books?: RecommendedBook[];
  previousPapers?: PreviousYearPaper[];
  cutoff?: SyllabusTable;
  tier1Cutoff?: SyllabusTable;
  tier2Cutoff?: SyllabusTable;
  cutoffHeading?: string;
  tier1CutoffHeading?: string;
  tier2CutoffHeading?: string;
  sidebarHighlights?: SyllabusHighlight[];
  studyPlan?: StudyPlanPhase[];
  faqs?: SyllabusFaq[];
  relatedGuides?: RelatedSyllabusGuide[];
  seoContent?: SEOContentBlock[];
  seo: SyllabusGuideSeo;
}
