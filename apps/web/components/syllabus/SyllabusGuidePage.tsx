import { ExamPatternSection } from '@/components/syllabus/ExamPatternSection';
import { FAQSection } from '@/components/syllabus/FAQSection';
import { LatestJobsCard } from '@/components/job-detail/Sidebar/LatestJobsCard';
import { SyllabusHero } from '@/components/syllabus/SyllabusHero';
import { SyllabusHighlights } from '@/components/syllabus/SyllabusHighlights';
import { SyllabusHelpCard } from '@/components/syllabus/SyllabusHelpCard';
import { SyllabusOverview } from '@/components/syllabus/SyllabusOverview';
import { SyllabusResources } from '@/components/syllabus/SyllabusResources';
import { SyllabusShareCard } from '@/components/syllabus/SyllabusShareCard';
import {
  SyllabusSectionTabs,
  type SyllabusTabSection,
} from '@/components/syllabus/SyllabusSectionTabs';
import { QuickActions } from '@/components/syllabus/QuickActions';
import { SidebarCutoffCard } from '@/components/syllabus/SidebarCutoffCard';
import { SyllabusSection } from '@/components/syllabus/SyllabusSection';
import type { SyllabusGuide } from '@/types/syllabus';

interface SyllabusGuidePageProps {
  guide: SyllabusGuide;
}

export function SyllabusGuidePage({ guide }: SyllabusGuidePageProps) {
  const sections = getSyllabusTabSections(guide);

  return (
    <main className="overflow-x-hidden bg-[#F8FAFC] text-[#111827]">
      <SyllabusHero guide={guide} />

      <SyllabusSectionTabs sections={sections} />

      <section className="mx-auto grid w-full max-w-full items-start gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)] lg:px-8">
        <div className="order-2 grid min-w-0 gap-4 lg:order-1">
          <SyllabusOverview overview={guide.overview} />
          <SyllabusSection subjects={guide.syllabus} />
          <ExamPatternSection pattern={guide.examPattern} />
          <SyllabusResources resources={guide.resources} />
          <FAQSection faqs={guide.faqs} />
        </div>

        <div className="order-1 grid min-w-0 gap-4 lg:order-2">
          <QuickActions actions={guide.quickActions} />
          <SyllabusHighlights highlights={guide.sidebarHighlights} />
          <SidebarCutoffCard cutoff={guide.cutoff} />
          <SyllabusHelpCard />
          <SyllabusShareCard />
          <LatestJobsCard />
        </div>
      </section>
    </main>
  );
}

function getSyllabusTabSections(guide: SyllabusGuide): SyllabusTabSection[] {
  return [
    guide.overview ? { id: 'overview', label: 'Overview' } : null,
    guide.syllabus?.length ? { id: 'syllabus', label: 'Syllabus' } : null,
    guide.examPattern?.rows.length ? { id: 'exam-pattern', label: 'Exam Pattern' } : null,
    guide.resources?.length ? { id: 'resources', label: 'Syllabus Guide' } : null,
    guide.faqs?.length ? { id: 'faq', label: 'FAQ' } : null,
  ].filter((section): section is SyllabusTabSection => Boolean(section));
}
