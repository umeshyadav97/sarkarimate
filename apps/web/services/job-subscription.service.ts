import { api } from '@/services/api-client';

export interface JobSubscriptionPayload {
  email: string;
  category: string[];
  subCategory: string[];
}

export interface JobSubscriptionResponse {
  success: boolean;
  message: string;
}

export function subscribeToJobAlerts(payload: JobSubscriptionPayload) {
  return api.postEnvelope<JobSubscriptionResponse>('/api/v1/jobs/subscribe', payload);
}
