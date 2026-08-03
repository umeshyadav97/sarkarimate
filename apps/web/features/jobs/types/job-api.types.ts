export interface ApiCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface ApiDepartment {
  _id: string;
  name: string;
  slug: string;
}

export interface ApiJob {
  _id: string;
  title: string;
  slug: string;
  organization: string;
  state: string;
  category?: ApiCategory | string;
  department?: ApiDepartment | string;
  applicationStatus?: string;
  lastDate?: string | null;
  qualification?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  sourceUrl?: string;
  tags?: string[];
  views?: number;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface JobsPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface JobsResponse {
  jobs: ApiJob[];
  latestJobs?: ApiJob[];
  admitCards?: ApiJob[];
  results?: ApiJob[];
  answerKeys?: ApiJob[];
  syllabus?: ApiJob[];
  pagination: JobsPagination;
}

export interface JobsQueryParams extends Record<string, string | number | boolean | undefined> {
  page?: number;
  limit?: number;

  search?: string;
  category?: string;
  department?: string;
  state?: string;
  applicationStatus?: string;

  type?: 'jobs' | 'admit-cards' | 'results' | 'answer-keys' | 'syllabus';

  isFeatured?: boolean;
  isTrending?: boolean;

  sort?: 'latest' | 'oldest' | 'views' | 'featured';
}
