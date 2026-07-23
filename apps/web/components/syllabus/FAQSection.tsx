import { SyllabusSectionCard } from '@/components/syllabus/SyllabusSectionCard';
import type { SyllabusFaq } from '@/types/syllabus';

interface FAQSectionProps {
  faqs?: SyllabusFaq[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <SyllabusSectionCard id="faq" title="Frequently Asked Questions" index={5}>
      <div className="grid gap-3 sm:grid-cols-2">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
          >
            <summary className="cursor-pointer list-none text-sm font-bold leading-6 text-[#111827] outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]">
              {faq.question}
            </summary>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SyllabusSectionCard>
  );
}
