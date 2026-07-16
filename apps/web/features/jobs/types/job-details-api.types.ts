export interface JobDetailsApiResponse {
  success: boolean;
  message: string;
  data: JobDetailsApiData;
}

export interface JobDetailsApiData {
  id: string;
  type: string;
  slug: string;
  title: string;
  organization: string;
  organizationShort?: string;
  status?: string;
  badgeColor?: string;
  postedOn?: string;
  updatedOn?: string;
  shareEnabled?: boolean;
  saveEnabled?: boolean;
  hero?: {
    summary?: string;
  };
  quickFacts?: JobQuickFact[];
  overview?: {
    title?: string;
    description?: string;
  };
  importantDates?: JobLabelValue[];
  vacancy?: JobVacancy;
  eligibility?: string[];
  ageLimit?: {
    minimum?: string;
    maximum?: string;
    asOn?: string;
    relaxation?: string;
  };
  applicationFee?: JobApplicationFee[];
  selectionProcess?: string[];
  howToApply?: string[];
  importantLinks?: JobImportantLink[];
  faq?: JobFaq[];
  related?: JobRelated[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface JobQuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface JobLabelValue {
  label: string;
  value: string;
}

export interface JobVacancy {
  title?: string;
  totalPosts?: number;
  columns?: string[];
  rows?: Record<string, string | number>[];
}

export interface JobApplicationFee {
  category: string;
  fee: string;
}

export interface JobImportantLink {
  title: string;
  url: string;
  type?: string;
}

export interface JobFaq {
  question: string;
  answer: string;
}

export interface JobRelated {
  title: string;
  slug: string;
}
