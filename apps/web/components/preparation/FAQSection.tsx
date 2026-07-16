import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { PreparationFaq } from '@/types/preparation';

interface FAQSectionProps {
  faqs?: PreparationFaq[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="faq" title="Frequently Asked Questions" index={5}>
      <div className="grid gap-2 sm:grid-cols-2">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-md border border-slate-200 bg-white px-3 py-2"
          >
            <summary className="cursor-pointer list-none text-xs font-bold leading-5 text-[#111827] outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]">
              {faq.question}
            </summary>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </PreparationSectionCard>
  );
}
