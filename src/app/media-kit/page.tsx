import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import Link from "next/link";
import { Users, Eye, Mail, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Media Kit & Sponsorship Opportunities",
  description: `Sponsorship packages, audience demographics, and advertising opportunities with ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/media-kit"),
  },
};

export default function MediaKitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs items={[{ name: "Media Kit", href: "/media-kit" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
          <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Partnerships & Sponsorships</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
          Partner with {siteConfig.name}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          Connect your developer tools, cloud infrastructure, and AI platforms with an audience of senior software engineers, technical leads, and full-stack builders.
        </p>
      </header>

      {/* Audience Demographics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">Senior Engineers</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Staff engineers, full-stack builders, and technical founders actively choosing tools and cloud providers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <Eye className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">Global Reach</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            High concentration of technical readers across the US, India, UK, Germany, Canada, and Singapore.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">High Intent</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Readers seeking solutions for deployment, database migrations, and autonomous coding workflows.
          </p>
        </div>
      </div>

      {/* Available Sponsorship Formats */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white pb-3 border-b border-zinc-200 dark:border-zinc-800">
          Sponsorship Formats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Format A
            </span>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Dedicated Sponsored Tutorial
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              An in-depth, hands-on engineering tutorial demonstrating how to integrate your API, SDK, or database to build a complete application.
            </p>
            <ul className="text-xs space-y-1.5 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Permanent publication on TechPilot</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Prominent &ldquo;Sponsored&rdquo; badge transparency</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Featured in weekly engineering newsletter</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Format B
            </span>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Newsletter Sponsorship
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Main sponsor placement at the top of our Thursday engineering newsletter dispatch with custom copy and logo.
            </p>
            <ul className="text-xs space-y-1.5 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Exclusive single sponsor per issue</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Direct UTM click-through tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Audience of active full-stack developers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sponsorship Contact Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-800 via-teal-900 to-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-700/30">
        <div>
          <h3 className="text-xl font-semibold">Ready to discuss a partnership?</h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-md">
            Reach out with your product overview and target launch timeline. We typically reply within 24 hours.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-emerald-50 transition-colors shadow-md shrink-0"
        >
          Inquire About Sponsorships
        </Link>
      </div>
    </div>
  );
}
