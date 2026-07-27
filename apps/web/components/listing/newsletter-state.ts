export interface NewsletterFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  submissionId: number;
}

export const initialNewsletterFormState: NewsletterFormState = {
  status: 'idle',
  message: '',
  submissionId: 0,
};
