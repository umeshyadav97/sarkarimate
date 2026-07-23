export interface JobDetailsApiResponse {
  success: boolean;
  message: string;
  data: JobDetailsApiData;
}

export interface JobDetailsApiData {
  id: string;
  _id?: string;
  type: string;
  slug: string;
  title: string;
  organization: string;
  organizationShort?: string;
  status?: string;
  applicationStatus?: string;
  badgeColor?: string;
  postedOn?: string;
  updatedOn?: string;
  publishedAt?: string;
  updatedAt?: string;
  shortDescription?: string;
  description?: string;
  sourceUrl?: string;
  officialWebsite?: string;
  notificationPdf?: string;
  applyLink?: string;
  admitCardDate?: string;
  answerKeyDate?: string;
  applicationStartDate?: string;
  examDate?: string;
  lastDate?: string;
  minimumAge?: number;
  maximumAge?: number;
  qualification?: string;
  totalPosts?: number;
  category?: {
    _id: string;
    name: string;
    slug: string;
  };
  department?: {
    _id: string;
    name: string;
    slug: string;
  };
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
  vacancies?: JobVacancyRow[];
  eligibility?: string[];
  qualifications?: string[];
  ageLimit?: {
    minimum?: string;
    maximum?: string;
    asOn?: string;
    relaxation?: string;
  };
  applicationFee?: JobApplicationFee[];
  applicationFees?: JobApplicationFee[];
  ageRelaxations?: {
    category: string;
    relaxation: string;
  }[];
  selectionProcess?: string[];
  howToApply?: string[];
  importantLinks?: JobImportantLink[];
  faq?: JobFaq[];
  related?: JobRelated[];
  seo?: {
    title?: string;
    metaTitle?: string;
    description?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface JobQuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface JobLabelValue {
  label?: string;
  title?: string;
  value?: string;
  status?: string;
  highlight?: boolean;
}

export interface JobVacancy {
  title?: string;
  totalPosts?: number;
  columns?: string[];
  rows?: Record<string, string | number>[];
}

export interface JobVacancyRow {
  postName: string;
  totalPosts: number;
  qualification: string;
}

export interface JobApplicationFee {
  category: string;
  fee: string;
}

export interface JobImportantLink {
  title: string;
  url: string;
  type?: string;
  isPrimary?: boolean;
}

export interface JobFaq {
  question: string;
  answer: string;
}

export interface JobRelated {
  title: string;
  slug: string;
}
