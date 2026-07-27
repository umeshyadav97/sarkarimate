'use server';

import type { NewsletterFormState } from '@/components/listing/newsletter-state';
import { subscribeToJobAlerts } from '@/services/job-subscription.service';

export async function subscribeToNewsletter(
  _previousState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  const submissionId = Date.now();
  const email = String(formData.get('email') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim();
  const subCategory = String(formData.get('subCategory') ?? '').trim();

  if (!email) {
    return {
      status: 'error',
      message: 'Please enter your email address.',
      submissionId,
    };
  }

  if (!category) {
    return {
      status: 'error',
      message: 'Please select a category.',
      submissionId,
    };
  }

  try {
    const response = await subscribeToJobAlerts({
      email,
      category: [category],
      subCategory: subCategory ? [subCategory] : [],
    });

    return {
      status: response.success ? 'success' : 'error',
      message: response.message || 'Subscription saved successfully.',
      submissionId,
    };
  } catch {
    return {
      status: 'error',
      message: 'Unable to save subscription right now. Please try again.',
      submissionId,
    };
  }
}
