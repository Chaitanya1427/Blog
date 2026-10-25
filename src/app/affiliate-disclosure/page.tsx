import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate & Commercial Disclosure",
  description: `Affiliate marketing policy, monetization disclosure, and editorial independence statement for ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/affiliate-disclosure"),
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs items={[{ name: "Affiliate Disclosure", href: "/affiliate-disclosure" }]} />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
          Affiliate & Commercial Disclosure
        </h1>
        <p className="text-sm text-zinc-600">
          Transparency in software recommendations, monetization, and editorial ethics.
        </p>
      </header>

      {/* Primary Disclosure Callout Box */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 text-amber-600" />
          <span>Our Transparent Promise to Readers</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed">
          {siteConfig.monetization.affiliate.defaultDisclosure}
        </p>
      </div>

      <div className="prose prose-zinc prose-headings:text-zinc-900 prose-p:text-zinc-700 max-w-none text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2>How Affiliate Links Function</h2>
          <p>
            When we recommend developer tools, cloud hosting platforms, IDE extensions, or databases, we may include links with special tracking parameters.
          </p>
          <p>
            If you click one of these links and create an account or purchase a subscription, the merchant may pay us a referral fee. This does <strong>not</strong> increase the price you pay; in many instances, our partnership allows us to share verified promotional discounts with readers.
          </p>
        </section>

        <section>
          <h2>Strict Editorial Independence</h2>
          <p>We maintain an uncompromising separation between editorial content and revenue:</p>
          <ul>
            <li>We never promise positive reviews in exchange for affiliate commission or free trials.</li>
            <li>If a tool has high latency, poor documentation, or predatory billing practices, we report those findings regardless of commercial relationship.</li>
            <li>We frequently recommend free and open-source tools (such as Ollama, vLLM, and Docker) that offer no financial compensation whatsoever.</li>
          </ul>
        </section>

        <section>
          <h2>Compliance with Regulatory Frameworks</h2>
          <p>
            This disclosure adheres to the U.S. Federal Trade Commission (FTC) guidelines, the UK Advertising Standards Authority (ASA), and Google Search Central publisher recommendations regarding commercial links, which are marked with <code>rel=&quot;sponsored nofollow noopener&quot;</code> attributes.
          </p>
        </section>
      </div>
    </div>
  );
}
