import { FAQItem } from "@/types/content";
import { HelpCircle } from "lucide-react";
import { FaqJsonLd } from "@/components/seo/JsonLd";

interface FaqSectionProps {
  faqs: FAQItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
      <FaqJsonLd faqs={faqs} />
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-emerald-600" />
        <h3 className="text-xl font-semibold text-zinc-900">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs"
          >
            <h4 className="text-sm sm:text-base font-semibold text-zinc-900 mb-2">
              {faq.question}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
