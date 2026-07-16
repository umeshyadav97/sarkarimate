import { ExamPatternSection } from '@/components/preparation/ExamPatternSection';
import { FAQSection } from '@/components/preparation/FAQSection';
import { PreparationHero } from '@/components/preparation/PreparationHero';
import { PreparationHighlights } from '@/components/preparation/PreparationHighlights';
import { PreparationHelpCard } from '@/components/preparation/PreparationHelpCard';
import { PreparationOverview } from '@/components/preparation/PreparationOverview';
import { PreparationResources } from '@/components/preparation/PreparationResources';
import { PreparationShareCard } from '@/components/preparation/PreparationShareCard';
import { QuickActions } from '@/components/preparation/QuickActions';
import { SidebarCutoffCard } from '@/components/preparation/SidebarCutoffCard';
import { SyllabusSection } from '@/components/preparation/SyllabusSection';
import type { PreparationGuide } from '@/types/preparation';

interface PreparationGuidePageProps {
  guide: PreparationGuide;
}

export function PreparationGuidePage({ guide }: PreparationGuidePageProps) {
  return (
    <main className="overflow-x-hidden bg-[#F8FAFC] text-[#111827]">
      <PreparationHero guide={guide} />

      <section className="mx-auto grid w-full max-w-full items-start gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:px-8">
        <div className="order-2 grid min-w-0 gap-4 lg:order-1">
          <PreparationOverview overview={guide.overview} />
          <SyllabusSection subjects={guide.syllabus} />
          <ExamPatternSection pattern={guide.examPattern} />
          <PreparationResources resources={guide.resources} />
          <FAQSection faqs={guide.faqs} />
        </div>

        <div className="order-1 grid min-w-0 gap-4 lg:order-2 lg:w-full lg:max-w-[340px]">
          <QuickActions actions={guide.quickActions} />
          <PreparationHighlights highlights={guide.sidebarHighlights} />
          <SidebarCutoffCard cutoff={guide.cutoff} />
          <PreparationHelpCard />
          <PreparationShareCard />
        </div>
      </section>
    </main>
  );
}
