import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { Mail, MessageSquare, Briefcase, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Partnerships",
  description: `Contact the editorial desk, submit technical pitches, or inquire about software sponsorships on ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
          Contact & Partnerships
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          Reach our editorial team for technical feedback, benchmark questions, corrections, or transparent software sponsorships.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Editorial Inquiries</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            For code corrections, source updates, or story tips.
          </p>
          <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 pt-1">
            editor@techpilot.dev
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Sponsorships & Ads</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            For transparent sponsored articles and display ads.
          </p>
          <p className="text-xs font-mono text-teal-700 dark:text-teal-400 pt-1">
            partnerships@techpilot.dev
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Press & Media</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Quotes, interview requests, and media kit assets.
          </p>
          <p className="text-xs font-mono text-amber-700 dark:text-amber-400 pt-1">
            press@techpilot.dev
          </p>
        </div>
      </div>

      {/* Editorial Standards Notice */}
      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
        <div className="flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Notice Regarding Paid Links and Ranking Guarantees</span>
        </div>
        <p>
          In accordance with our Editorial Policy and Google Search guidelines, {siteConfig.name} does not sell dofollow links, manipulate search rankings, or accept payment to produce favorable product verdicts. All commercial partnerships and sponsored content are visibly labeled.
        </p>
      </div>
    </div>
  );
}
