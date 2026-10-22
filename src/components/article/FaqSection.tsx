import { FAQItem } from "@/types/content";
import { HelpCircle } from "lucide-react";
import { FaqJsonLd } from "@/components/seo/JsonLd";

interface FaqSectionProps {
  faqs: FAQItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
      <FaqJsonLd faqs={faqs} />
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <h4 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {faq.question}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
