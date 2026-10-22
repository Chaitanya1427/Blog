import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service and acceptable use guidelines for ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/terms-of-service"),
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs items={[{ name: "Terms of Service", href: "/terms-of-service" }]} />

      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
          Terms of Service
        </h1>
        <p className="text-xs text-zinc-500">
          Last revised: March 2026 • Configurable template for review by site operator
        </p>
      </header>

      <div className="prose prose-zinc prose-headings:text-zinc-900 prose-p:text-zinc-700 max-w-none text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or reading {siteConfig.name} ({siteConfig.url}), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the website.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property and Content Usage</h2>
          <p>
            All original text, benchmark analyses, diagrams, and code snippets published on {siteConfig.name} are the intellectual property of {siteConfig.publisher.name} unless otherwise noted.
          </p>
          <p>
            You may use code samples included in articles under the permissive MIT License for both personal and commercial software projects. You may not republish, scrape, or mass-distribute our editorial articles without prior written permission.
          </p>
        </section>

        <section>
          <h2>3. Technical Advice Disclaimer</h2>
          <p>
            The software guides, architecture recommendations, benchmark numbers, and deployment instructions are provided for informational and educational purposes. While we rigorously test our tutorials, software configurations evolve rapidly.
          </p>
          <p>
            You are solely responsible for testing and verifying any architecture or code in staging environments before applying it to production databases or infrastructure. {siteConfig.name} is not liable for data loss, server downtime, or costs incurred from following our guides.
          </p>
        </section>

        <section>
          <h2>4. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website following changes constitutes acceptance of revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
