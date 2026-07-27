import { AboutSection } from '@/components/job-detail/Sections/AboutSection';
import { AgeLimitSection } from '@/components/job-detail/Sections/AgeLimitSection';
import { ApplicationFeeSection } from '@/components/job-detail/Sections/ApplicationFeeSection';
import { EligibilitySection } from '@/components/job-detail/Sections/EligibilitySection';
import { FAQSection } from '@/components/job-detail/Sections/FAQSection';
import { HowToApplySection } from '@/components/job-detail/Sections/HowToApplySection';
import { ImportantDatesSection } from '@/components/job-detail/Sections/ImportantDatesSection';
import { ImportantLinksSection } from '@/components/job-detail/Sections/ImportantLinksSection';
import { SelectionProcessSection } from '@/components/job-detail/Sections/SelectionProcessSection';
import { TimelineSection } from '@/components/job-detail/Sections/TimelineSection';
import { VacancySection } from '@/components/job-detail/Sections/VacancySection';
import { DetailMainSections } from '@/components/job-detail/DetailMainSections';
import { DetailSidebar } from '@/components/job-detail/DetailSidebar';
import { JobHeader } from '@/components/job-detail/JobHeader/JobHeader';
import { ActionCard } from '@/components/job-detail/Overview/ActionCard';
import { AtGlanceCard } from '@/components/job-detail/Overview/AtGlanceCard';
import { RelatedContentCard } from '@/components/job-detail/Sidebar/RelatedContentCard';
import { SectionTabs } from '@/components/job-detail/Tabs/SectionTabs';
import { getVisibleDetailConfig } from '@/services/job-detail.mapper';
import type {
  DetailPageConfig,
  DetailPageData,
  DetailSectionConfig,
} from '@/components/job-detail/types';
import type { ApiJob } from '@/features/jobs/types';

interface JobDetailPageProps {
  config: DetailPageConfig;
  data: DetailPageData;
  latestJobs?: ApiJob[];
}

export function JobDetailPage({ config, data, latestJobs = [] }: JobDetailPageProps) {
  const visibleConfig = getVisibleDetailConfig(config, data);
  const actions = getConfiguredActions(data.actions, visibleConfig.actionButtonLabels);

  return (
    <main className="bg-[#F8FAFC] text-[#111827]">
      <JobHeader data={data} />

      <section className="mx-auto grid w-full max-w-full items-start gap-4 px-4 py-5 sm:gap-6 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,2.6fr)_minmax(300px,1fr)] lg:px-8">
        {data.keyInformation.length > 0 ? (
          <AtGlanceCard
            title={visibleConfig.atGlanceTitle}
            items={data.keyInformation}
            alert={data.alert}
          />
        ) : null}
        {actions.length > 0 ? (
          <ActionCard
            title={visibleConfig.actionTitle}
            description={visibleConfig.actionDescription}
            actions={actions}
          />
        ) : null}
      </section>

      <SectionTabs sections={visibleConfig.sections} />

      <section className="mx-auto grid w-full max-w-full gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)] lg:px-8">
        <div className="grid gap-4">
          <DetailMainSections
            config={visibleConfig}
            data={data}
            renderSection={(section) => renderStandaloneSection(section, data)}
          />
        </div>
        <DetailSidebar
          actions={actions}
          config={visibleConfig}
          data={data}
          latestJobs={latestJobs}
        />
      </section>

      <section className="mx-auto grid w-full max-w-full gap-4 px-4 pb-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {data.relatedContent.slice(1).map((content) => (
          <RelatedContentCard key={content.title} content={content} />
        ))}
      </section>
    </main>
  );
}

function getConfiguredActions(actions: DetailPageData['actions'], labels: string[]) {
  return labels
    .map((label) => actions.find((action) => action.label === label))
    .filter((action): action is DetailPageData['actions'][number] => Boolean(action));
}

function renderStandaloneSection(section: DetailSectionConfig, data: DetailPageData) {
  const commonProps = { id: section.id, title: section.label };

  switch (section.id) {
    case 'overview':
      return <AboutSection key={section.id} {...commonProps} about={data.about} />;
    case 'important-dates':
      return (
        <ImportantDatesSection key={section.id} {...commonProps} items={data.importantDates} />
      );
    case 'vacancy':
      return <VacancySection key={section.id} {...commonProps} vacancy={data.vacancy} />;
    case 'eligibility':
      return <EligibilitySection key={section.id} {...commonProps} items={data.eligibility} />;
    case 'how-to-apply':
      return <HowToApplySection key={section.id} {...commonProps} items={data.howToApply} />;
    case 'age-limit':
      return (
        <AgeLimitSection
          key={section.id}
          {...commonProps}
          items={data.ageLimit}
          note={data.ageLimitNote}
        />
      );
    case 'application-fee':
      return (
        <ApplicationFeeSection
          key={section.id}
          {...commonProps}
          items={data.applicationFee}
          note={data.applicationFeeNote}
        />
      );
    case 'selection-process':
      return (
        <SelectionProcessSection key={section.id} {...commonProps} items={data.selectionProcess} />
      );
    case 'important-links':
      return (
        <ImportantLinksSection key={section.id} {...commonProps} links={data.importantLinks} />
      );
    case 'faq':
      return <FAQSection key={section.id} {...commonProps} faqs={data.faqs} />;
    case 'timeline':
      return <TimelineSection key={section.id} {...commonProps} items={data.timeline} />;
    default:
      return null;
  }
}
