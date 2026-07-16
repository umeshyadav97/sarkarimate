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
          const children = [
            data.importantDates.length > 0 ? (
              <ImportantDatesSection
                key="important-dates"
                id={section.id}
                title={section.label}
                items={data.importantDates}
              />
            ) : null,
            data.ageLimit.length > 0 ? (
              <AgeLimitSection
                key="age-limit"
                id="age-limit"
                title={config.embeddedSections.ageLimitTitle}
                items={data.ageLimit}
                note={data.ageLimitNote}
              />
            ) : null,
          ].filter(Boolean);

          return (
            <TwoColumnRow key={section.id} singleColumn={children.length === 1}>
              {children}
            </TwoColumnRow>
          );
        }

        if (section.id === 'eligibility') {
          const children = [
            data.eligibility.length > 0 ? (
              <EligibilitySection
                key="eligibility"
                id={section.id}
                title={section.label}
                items={data.eligibility}
              />
            ) : null,
            data.applicationFee.length > 0 ? (
              <ApplicationFeeSection
                key="application-fee"
                id="application-fee"
                title={config.embeddedSections.applicationFeeTitle}
                items={data.applicationFee}
                note={data.applicationFeeNote}
              />
            ) : null,
          ].filter(Boolean);

          return (
            <TwoColumnRow key={section.id} singleColumn={children.length === 1}>
              {children}
            </TwoColumnRow>
          );
        }

        if (section.id === 'vacancy') {
          return (
            <div key={section.id} className="grid gap-4">
              {data.timeline.length > 0 ? (
                <TimelineSection id="timeline" title={config.timelineTitle} items={data.timeline} />
              ) : null}
              {data.vacancy.rows.length > 0 ? (
                <VacancySection id={section.id} title={section.label} vacancy={data.vacancy} />
              ) : null}
            </div>
          );
        }

        if (section.id === 'important-links') {
          const children = [
            data.selectionProcess.length > 0 ? (
              <SelectionProcessSection
                key="selection-process"
                id="selection-process"
                title={config.embeddedSections.selectionProcessTitle}
                items={data.selectionProcess}
              />
            ) : null,
            data.importantLinks.length > 0 ? (
              <ImportantLinksSection
                key="important-links"
                id={section.id}
                title={section.label}
                links={data.importantLinks}
              />
            ) : null,
          ].filter(Boolean);

          return (
            <TwoColumnRow key={section.id} singleColumn={children.length === 1}>
              {children}
            </TwoColumnRow>
          );
        }

        return renderSection(section);
      })}
    </>
  );
}

function TwoColumnRow({ children, singleColumn }: { children: ReactNode; singleColumn?: boolean }) {
  return <div className={`grid gap-4 ${singleColumn ? '' : 'md:grid-cols-2'}`}>{children}</div>;
}
