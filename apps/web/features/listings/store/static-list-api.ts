import admitCardsResponse from './admit-cards.json';
import answerKeysResponse from './answer-keys.json';
import jobsResponse from './jobs.json';
import resultsResponse from './results.json';
import syllabusResponse from './syllabus.json';
import upcomingDeadlinesResponse from './upcoming-deadlines.json';

export type StaticListItem = {
  id: string;
  title: string;
  organization: string;
  slug: string;
  category?: string;
  state?: string;
  qualification?: string;
  status?: string;
  href: string;
  lastDate?: string | null;
  examDate?: string | null;
  releaseDate?: string | null;
  resultDate?: string | null;
  answerKeyDate?: string | null;
  objectionLastDate?: string | null;
  updatedDate?: string | null;
};

export type StaticListResponse = {
  success: boolean;
  source: string;
  dataStatus: string;
  sourceNote: string;
  message: string;
  data: {
    items: StaticListItem[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
};

export const staticListApiResponses: Record<string, StaticListResponse> = {
  '/api/v1/jobs': jobsResponse,
  '/api/v1/admit-cards': admitCardsResponse,
  '/api/v1/results': resultsResponse,
  '/api/v1/answer-keys': answerKeysResponse,
  '/api/v1/preparation': syllabusResponse,
  '/api/v1/deadlines': upcomingDeadlinesResponse,
  '/jobs': jobsResponse,
  '/admit-cards': admitCardsResponse,
  '/results': resultsResponse,
  '/answer-keys': answerKeysResponse,
  '/preparation': syllabusResponse,
  '/deadlines': upcomingDeadlinesResponse,
};

export type StaticListEndpoint = keyof typeof staticListApiResponses;
