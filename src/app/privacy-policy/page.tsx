import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy, cookie details, and data protection practices for ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-500">
          Last revised: March 2026 • Configurable template for review by site operator
        </p>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2>1. Introduction</h2>
          <p>
            {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to respecting and protecting the privacy of our readers and visitors. This Privacy Policy outlines what information is collected when you visit our website ({siteConfig.url}), how it is processed, and your rights regarding your data.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We believe in minimal data collection necessary to deliver an engineering publication:</p>
          <ul>
            <li>
              <strong>Directly Provided Information:</strong> When you subscribe to our newsletter or reach out through our contact email, we collect your email address and any message contents you provide.
            </li>
            <li>
              <strong>Automatically Collected Server Logs:</strong> Standard web server logs collect non-identifiable technical data such as IP address (anonymized where possible), browser type, referring URL, and timestamp to protect against abusive traffic and DDoS attacks.
            </li>
            <li>
              <strong>Cookies and Local Storage:</strong> We use local browser storage strictly to remember your preferred visual theme (light or dark mode).
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Advertising and Third-Party Services (Google AdSense)</h2>
          <p>
            When advertising is enabled on {siteConfig.name}, third-party vendors including Google may use cookies to serve ads based on prior visits to our website or other websites on the internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section>
          <h2>4. Affiliate Links and Tracking</h2>
          <p>
            Some articles contain commercial affiliate links. When you click an affiliate link to a software vendor, a temporary tracking cookie may be set by the destination merchant or affiliate network to identify {siteConfig.name} as the referring publisher. No personal data is stored on our servers.
          </p>
        </section>

        <section>
          <h2>5. Your Rights and Contact Information</h2>
          <p>
            Depending on your jurisdiction (such as GDPR in Europe or state privacy laws in the US), you have the right to request access to, correction of, or deletion of your email from our newsletter database.
          </p>
          <p>
            For privacy inquiries or deletion requests, please contact:{" "}
            <code>privacy@techpilot.dev</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
