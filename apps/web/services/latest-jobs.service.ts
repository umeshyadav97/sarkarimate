import { getJobListingItems } from '@/services/listing/job-listing.service';

export async function getLatestJobs(limit = 5) {
  try {
    const response = await getJobListingItems({
      page: 1,
      limit,
      sort: 'latest',
      type: 'jobs',
    });

    return response.jobs;
  } catch {
    return [];
  }
}
