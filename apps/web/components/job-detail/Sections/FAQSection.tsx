import { HelpCircle } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailFaqItem } from '@/components/job-detail/types';

interface FAQSectionProps {
  id: string;
  title: string;
  faqs: DetailFaqItem[];
}

export function FAQSection({ id, title, faqs }: FAQSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={HelpCircle} />
      <div className="divide-y divide-slate-100">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-4 first:pt-0 last:pb-0">
            <summary className="cursor-pointer text-sm font-bold text-[#111827] outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionCard>
  );
}
