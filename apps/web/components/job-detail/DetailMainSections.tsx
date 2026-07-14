import type { ReactNode } from 'react';
import { AgeLimitSection } from '@/components/job-detail/Sections/AgeLimitSection';
import { ApplicationFeeSection } from '@/components/job-detail/Sections/ApplicationFeeSection';
import { EligibilitySection } from '@/components/job-detail/Sections/EligibilitySection';
import { ImportantDatesSection } from '@/components/job-detail/Sections/ImportantDatesSection';
import { ImportantLinksSection } from '@/components/job-detail/Sections/ImportantLinksSection';
import { SelectionProcessSection } from '@/components/job-detail/Sections/SelectionProcessSection';
import { TimelineSection } from '@/components/job-detail/Sections/TimelineSection';
import { VacancySection } from '@/components/job-detail/Sections/VacancySection';
import type {
  DetailPageConfig,
  DetailPageData,
  DetailSectionConfig,
} from '@/components/job-detail/types';

interface DetailMainSectionsProps {
  config: DetailPageConfig;
  data: DetailPageData;
  renderSection: (section: DetailSectionConfig) => ReactNode;
}

export function DetailMainSections({ config, data, renderSection }: DetailMainSectionsProps) {
  return (
    <>
      {config.sections.map((section) => {
        if (section.id === 'important-dates') {
          return (
            <TwoColumnRow key={section.id}>
              <ImportantDatesSection
                id={section.id}
                title={section.label}
                items={data.importantDates}
              />
              <AgeLimitSection
                id="age-limit"
                title={config.embeddedSections.ageLimitTitle}
                items={data.ageLimit}
                note={data.ageLimitNote}
              />
            </TwoColumnRow>
          );
        }

        if (section.id === 'eligibility') {
          return (
            <TwoColumnRow key={section.id}>
              <EligibilitySection id={section.id} title={section.label} items={data.eligibility} />
              <ApplicationFeeSection
                id="application-fee"
                title={config.embeddedSections.applicationFeeTitle}
                items={data.applicationFee}
                note={data.applicationFeeNote}
              />
            </TwoColumnRow>
          );
        }

        if (section.id === 'vacancy') {
          return (
            <div key={section.id} className="grid gap-4">
              <TimelineSection id="timeline" title={config.timelineTitle} items={data.timeline} />
              <VacancySection id={section.id} title={section.label} vacancy={data.vacancy} />
            </div>
          );
        }

        if (section.id === 'important-links') {
          return (
            <TwoColumnRow key={section.id}>
              <SelectionProcessSection
                id="selection-process"
                title={config.embeddedSections.selectionProcessTitle}
                items={data.selectionProcess}
              />
              <ImportantLinksSection
                id={section.id}
                title={section.label}
                links={data.importantLinks}
              />
            </TwoColumnRow>
          );
        }

        return renderSection(section);
      })}
    </>
  );
}

function TwoColumnRow({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
}
