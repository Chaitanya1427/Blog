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
        <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-900 tracking-tight">
          Contact & Partnerships
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          Reach our editorial team for technical feedback, benchmark questions, corrections, or transparent software sponsorships.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 text-sm">Editorial Inquiries</h3>
          <p className="text-xs text-zinc-600">
            For code corrections, source updates, or story tips.
          </p>
          <p className="text-xs font-mono text-emerald-700 pt-1 font-semibold">
            editor@techpilot.dev
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 text-sm">Sponsorships & Ads</h3>
          <p className="text-xs text-zinc-600">
            For transparent sponsored articles and display ads.
          </p>
          <p className="text-xs font-mono text-teal-700 pt-1 font-semibold">
            partnerships@techpilot.dev
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 text-sm">Press & Media</h3>
          <p className="text-xs text-zinc-600">
            Quotes, interview requests, and media kit assets.
          </p>
          <p className="text-xs font-mono text-amber-700 pt-1 font-semibold">
            press@techpilot.dev
          </p>
        </div>
      </div>

      {/* Editorial Standards Notice */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-2">
        <div className="flex items-center gap-2 font-semibold text-zinc-900">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Notice Regarding Paid Links and Ranking Guarantees</span>
        </div>
        <p className="leading-relaxed">
          In accordance with our Editorial Policy and Google Search guidelines, {siteConfig.name} does not sell dofollow links, manipulate search rankings, or accept payment to produce favorable product verdicts. All commercial partnerships and sponsored content are visibly labeled.
        </p>
      </div>
    </div>
  );
}
