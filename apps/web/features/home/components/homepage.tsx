'use client';

import { CategoriesSection, StatsSection } from '@/features/home/components/categories-section';
import { DeadlinesCarousel } from '@/features/home/components/deadlines-carousel';
import { HomeContentSections } from '@/features/home/components/home-content-sections';
import { HeroSection } from '@/features/home/components/hero-section';
import { NotificationPanels } from '@/features/home/components/notification-panels';
import { QuickAccessSection } from '@/features/home/components/quick-access-section';
import { ImportantToolsSection } from '@/features/home/components/tools-section';
import {
  createHomepageViewData,
  homeFaqs,
  newsArticles,
} from '@/features/home/constants/homepage-data';
import type { HomePageStore } from '@/features/home/store/homepage-store';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SarkariMate',
  url: 'https://sarkarimate.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sarkarimate.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SarkariMate',
  url: 'https://sarkarimate.com',
  slogan: 'Sahi Jaankari, Sahi Samay Par',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function Homepage({ initialData }: { initialData: HomePageStore }) {
  const homepageData = createHomepageViewData(initialData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, organizationSchema, faqSchema, ...newsArticles]),
        }}
      />
      <main className="bg-[#F8FAFC] text-[#111827]">
        <HeroSection popularSearches={homepageData.popularSearches} />
        <QuickAccessSection items={homepageData.quickAccessItems} />
        <NotificationPanels
          latestAdmitCards={homepageData.latestAdmitCards}
          latestAnswerKeys={homepageData.latestAnswerKeys}
          latestJobs={homepageData.latestJobs}
          latestResults={homepageData.latestResults}
          latestSyllabus={homepageData.latestSyllabus}
        />
        <DeadlinesCarousel deadlines={homepageData.upcomingDeadlines} />
        <CategoriesSection categories={homepageData.categories} />
        <StatsSection stats={homepageData.stats} />
        <ImportantToolsSection />
        <HomeContentSections />
      </main>
    </>
  );
}
