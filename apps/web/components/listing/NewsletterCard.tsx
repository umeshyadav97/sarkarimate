'use client';

import { SelectInput, type SelectOption } from '@/components/SelectInput';
import { Bell, Loader2, Mail } from 'lucide-react';
import { useActionState, useEffect, useMemo, useRef, useState } from 'react';
import { subscribeToNewsletter } from '@/components/listing/newsletter-actions';
import { initialNewsletterFormState } from '@/components/listing/newsletter-state';
import type { ListingPageConfig } from '@/components/listing/types';
import { Toast } from '@/helpers/toast';
import type { JobCategoryItem, JobCategoryOptions } from '@/services/job-category.service';

interface NewsletterCardProps {
  config: ListingPageConfig;
  jobCategoryOptions: JobCategoryOptions;
}

const defaultCategoryOption = { label: 'Select category', value: '' };
const defaultSubCategoryOption = { label: 'Select sub-category', value: '' };

export function NewsletterCard({ config, jobCategoryOptions }: NewsletterCardProps) {
  const [formState, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    initialNewsletterFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const subCategories = useMemo(
    () =>
      selectedCategory
        ? (jobCategoryOptions.subCategoriesByCategoryId[selectedCategory] ?? [])
        : [],
    [selectedCategory, jobCategoryOptions.subCategoriesByCategoryId],
  );
  const shouldShowSubCategory = selectedCategory !== '' && subCategories.length > 0;

  const categoryOptions = useMemo(
    () => [defaultCategoryOption, ...jobCategoryOptions.categories.map(toSelectOption)],
    [jobCategoryOptions.categories],
  );
  const subCategoryOptions = useMemo(
    () => [defaultSubCategoryOption, ...subCategories.map(toSelectOption)],
    [subCategories],
  );

  useEffect(() => {
    if (!formState.message || formState.submissionId === 0) {
      return;
    }

    if (formState.status === 'success') {
      Toast.success(formState.message);
      setSelectedCategory('');
      setSelectedSubCategory('');
      formRef.current?.reset();
      return;
    }

    if (formState.status === 'error') {
      Toast.error(formState.message);
    }
  }, [formState.message, formState.status, formState.submissionId]);

  return (
    <section
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="listing-newsletter"
    >
      <div
        className="mx-auto grid h-24 w-28 place-items-center rounded-xl bg-blue-50 text-[#1D4ED8]"
        aria-hidden="true"
      >
        <div className="relative">
          <Mail className="h-16 w-16" />
          <Bell className="absolute -right-3 -top-3 h-8 w-8 fill-[#F59E0B] text-[#F59E0B]" />
          <span className="absolute -right-4 -top-4 grid h-5 w-5 place-items-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
            1
          </span>
        </div>
      </div>
      <h2 id="listing-newsletter" className="mt-6 text-lg font-bold text-[#111827]">
        {config.sidebar.newsletterTitle}
      </h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
        {config.sidebar.newsletterDescription}
      </p>
      <form ref={formRef} action={formAction} className="mt-5 space-y-3">
        <label className="sr-only" htmlFor="listing-newsletter-email">
          Email address
        </label>
        <SelectInput
          id="listing-newsletter-category"
          hideLabel
          label="Job category"
          name="category"
          options={categoryOptions}
          value={selectedCategory}
          disabled={jobCategoryOptions.categories.length === 0}
          required
          onChange={(value) => {
            setSelectedCategory(value);
            setSelectedSubCategory('');
          }}
        />
        {shouldShowSubCategory ? (
          <SelectInput
            id="listing-newsletter-sub-category"
            hideLabel
            label="Job sub-category"
            name="subCategory"
            options={subCategoryOptions}
            value={selectedSubCategory}
            onChange={setSelectedSubCategory}
          />
        ) : null}
        <input
          id="listing-newsletter-email"
          name="email"
          className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-[#111827] outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100"
          placeholder="Enter your email address"
          required
          suppressHydrationWarning
          type="email"
        />
        <button
          className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 text-sm font-bold text-white transition hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:cursor-wait disabled:opacity-80"
          disabled={isPending}
          suppressHydrationWarning
          type="submit"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          {isPending ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  );
}

function toSelectOption(item: JobCategoryItem): SelectOption {
  return {
    label: item.label,
    value: item.id,
  };
}
