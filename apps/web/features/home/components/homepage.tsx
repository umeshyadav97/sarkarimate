import { CategoriesSection, StatsSection } from '@/features/home/components/categories-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { HomeFooter } from '@/features/home/components/home-footer';
import { HomeHeader } from '@/features/home/components/home-header';
import { NotificationPanels } from '@/features/home/components/notification-panels';
import { QuickAccessSection } from '@/features/home/components/quick-access-section';
import { ImportantToolsSection } from '@/features/home/components/tools-section';
import { newsArticles } from '@/features/home/constants/homepage-data';

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

export function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, organizationSchema, ...newsArticles]),
        }}
      />
      <HomeHeader />
      <main className="bg-[#F8FAFC] text-[#111827]">
        <HeroSection />
        <QuickAccessSection />
        <NotificationPanels />
        <CategoriesSection />
        <StatsSection />
        <ImportantToolsSection />
      </main>
      <HomeFooter />
    </>
  );
}
