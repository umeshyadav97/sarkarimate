import { api } from '@/services/api-client';

export interface JobCategoryItem {
  id: string;
  label: string;
}

export interface JobCategoryOptions {
  categories: JobCategoryItem[];
  subCategoriesByCategoryId: Record<string, JobCategoryItem[]>;
}

interface RawCategoryItem {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  label?: string;
  slug?: string;
}

type CategoryPayload =
  | RawCategoryItem[]
  | {
      categories?: RawCategoryItem[];
      subCategories?: RawCategoryItem[];
      subcategories?: RawCategoryItem[];
      data?: RawCategoryItem[];
      items?: RawCategoryItem[];
    };

function normalizeCategoryPayload(payload: CategoryPayload): JobCategoryItem[] {
  const items = Array.isArray(payload)
    ? payload
    : (payload.categories ??
      payload.subCategories ??
      payload.subcategories ??
      payload.data ??
      payload.items ??
      []);

  return items
    .map((item) => {
      const id = item._id ?? item.id ?? item.slug;
      const label = item.name ?? item.title ?? item.label ?? item.slug;

      if (!id || !label) {
        return null;
      }

      return { id, label };
    })
    .filter((item): item is JobCategoryItem => Boolean(item));
}

export async function getJobCategories(options?: RequestInit) {
  const payload = await api.get<CategoryPayload>('/api/v1/jobs/category', undefined, options);

  return normalizeCategoryPayload(payload);
}

export async function getJobSubCategories(categoryId: string, options?: RequestInit) {
  const payload = await api.get<CategoryPayload>(
    `/api/v1/jobs/sub-categories/${categoryId}`,
    undefined,
    options,
  );

  return normalizeCategoryPayload(payload);
}

export async function getJobCategoryOptions(): Promise<JobCategoryOptions> {
  try {
    const categories = await getJobCategories();
    const subCategoryPairs = await Promise.all(
      categories.map(
        async (category) => [category.id, await getSubCategoriesOrEmpty(category.id)] as const,
      ),
    );

    return {
      categories,
      subCategoriesByCategoryId: Object.fromEntries(subCategoryPairs),
    };
  } catch {
    return {
      categories: [],
      subCategoriesByCategoryId: {},
    };
  }
}

async function getSubCategoriesOrEmpty(categoryId: string) {
  try {
    return await getJobSubCategories(categoryId);
  } catch {
    return [];
  }
}
