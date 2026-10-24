import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllAuthors } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AdUnit } from "@/components/ads/AdUnit";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/config/site";
import { ReviewScorecardExplorer } from "@/components/reviews/ReviewScorecardExplorer";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  Scale,
  SlidersHorizontal,
  Flame,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Empirical Software Reviews & Developer Tooling Evaluations | TechPilot",
  description:
    "Rigorous, reproducible benchmarks and production audits of developer tools, cloud infrastructure, IDEs, and databases. Zero sponsored placements, 100% telemetry-driven.",
  alternates: {
    canonical: `${siteConfig.url}/category/software-reviews`,
  },
  openGraph: {
    title: "Empirical Software Reviews & Developer Tooling Evaluations | TechPilot",
    description:
      "Rigorous, reproducible benchmarks and production audits of developer tools, cloud infrastructure, IDEs, and databases.",
    url: `${siteConfig.url}/category/software-reviews`,
  },
};

export default async function SoftwareReviewsPage() {
  const articles = await getArticlesByCategory("software-reviews");
  const leadArticle = articles[0];
  const gridArticles = articles.slice(1);
  const authors = getAllAuthors();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header Section (Direct, Authoritative, NO EYEBROW TEXT) */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[{ name: "Software Reviews", href: "/category/software-reviews" }]}
          />

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Empirical Software Reviews &amp; Developer Tooling Evaluations
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed font-normal">
              Rigorous, reproducible benchmarks and hands-on production audits of developer tools, cloud platforms, IDEs, databases, and engineering SaaS. Zero paid placements, 100% telemetry-driven.
            </p>
          </div>

          {/* Core Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200/80">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Audited Tool Reviews
              </span>
              <p className="text-2xl font-bold text-zinc-900">{articles.length} Deep Audits</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Testing Standard
              </span>
              <p className="text-2xl font-bold text-emerald-600">5-Pillar Scorecard</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Stress Test Baseline
              </span>
              <p className="text-2xl font-bold text-zinc-900">450k LOC Monorepos</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Editorial Independence
              </span>
              <p className="text-2xl font-bold text-zinc-900">100% Unbiased</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Lead Audit Spotlight */}
      {leadArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Comprehensive Software Audit
            </h2>
            <span className="text-xs font-semibold text-emerald-700">
              Lead Audit
            </span>
          </div>

          <ArticleCard article={leadArticle} featured={true} />
        </section>
      )}

      {/* 3. The TechPilot 5-Pillar Evaluation Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The 5-Pillar Developer Tooling Audit Methodology
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We never rely on marketing claims. Every developer tool, library, and cloud SaaS is tested inside real enterprise environments against standardized performance and security criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Resource &amp; Memory
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Profiling resident memory (RSS), idle CPU drain, disk I/O, and battery efficiency under sustained load.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Developer Ergonomics
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Evaluating CLI input responsiveness, setup friction, configuration complexity, and keystroke latency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Type Safety &amp; APIs
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Testing TypeScript LSP auto-completion, compiler diagnostics, documentation accuracy, and breaking change cadence.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Security &amp; Privacy
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Auditing token storage, telemetry opt-outs, offline operation, SOC 2 compliance, and sandboxing isolation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                05
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                TCO &amp; Lock-in Risk
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Calculating total seat licensing, API overage structures, data egress penalties, and migration switching costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Review Scorecard Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Interactive Tool Scorecard Explorer
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Explore granular pillar scores, empirical memory metrics, and key architectural verdicts.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
            Updated March 2026
          </span>
        </div>

        <ReviewScorecardExplorer />
      </section>

      {/* 5. Complete Library of Software Reviews (Full 3-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              All In-Depth Developer Tooling Reviews
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Complete, hands-on architectural evaluations with reproducible test scripts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* 6. In-Feed Monetization Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdUnit
          slotId={siteConfig.monetization.adsense.slotInArticleTop}
          format="horizontal"
          showDevPlaceholder={true}
        />
      </div>

      {/* 7. Empirical 2026 Developer Tooling Benchmark & Verdict Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                2026 Developer Tooling Empirical Scorecard Matrix
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Comparative benchmarks across measured memory RSS, execution latency, and overall editorial rating.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
              Audited Q1 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 font-semibold">
                  <th className="py-3.5 px-4">Developer Tool</th>
                  <th className="py-3.5 px-4">Product Category</th>
                  <th className="py-3.5 px-4">Measured Resource Footprint</th>
                  <th className="py-3.5 px-4">Primary Performance Metric</th>
                  <th className="py-3.5 px-4">TechPilot Score</th>
                  <th className="py-3.5 px-4">Editorial Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">OrbStack 1.7</td>
                  <td className="py-3.5 px-4">Container Virtualization</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">380 MB RAM (Idle)</td>
                  <td className="py-3.5 px-4">1.9s cold engine boot</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.5 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-emerald-800">Editor&apos;s Choice (macOS)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Ghostty 1.0</td>
                  <td className="py-3.5 px-4">Terminal Emulator</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">34 MB RAM (Idle)</td>
                  <td className="py-3.5 px-4">1.8ms keypress-to-render</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.6 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-emerald-800">Editor&apos;s Choice (Terminals)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Biome 1.9</td>
                  <td className="py-3.5 px-4">Linter &amp; Formatter</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">86 MB RAM (Peak)</td>
                  <td className="py-3.5 px-4">1.94s cold check (450k LOC)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.5 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-emerald-800">Editor&apos;s Choice (Toolchains)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Bruno 1.38</td>
                  <td className="py-3.5 px-4">API Testing Client</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">110 MB RAM (Offline)</td>
                  <td className="py-3.5 px-4">0ms cloud sync lag (Git-only)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.6 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-emerald-800">Editor&apos;s Choice (API Clients)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Neon Postgres</td>
                  <td className="py-3.5 px-4">Serverless Database</td>
                  <td className="py-3.5 px-4">Auto-scales to 0 CU</td>
                  <td className="py-3.5 px-4">420ms copy-on-write branch</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.4 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-zinc-800">Highly Recommended (Edge)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Cursor 0.45</td>
                  <td className="py-3.5 px-4">AI Coding IDE</td>
                  <td className="py-3.5 px-4">1,820 MB RAM (Electron)</td>
                  <td className="py-3.5 px-4">91.4% multi-file edit pass</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.2 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-zinc-800">Highly Recommended (AI)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Axiom Observability</td>
                  <td className="py-3.5 px-4">Serverless Logging &amp; APM</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">4.2 KB SDK footprint</td>
                  <td className="py-3.5 px-4">Sub-second query across 100M logs</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">9.4 / 10</td>
                  <td className="py-3.5 px-4 font-medium text-emerald-800">Editor&apos;s Choice (Serverless Logs)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. TechPilot Anti-Bias Pledge & Testing Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2 pb-4 border-b border-zinc-100">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The TechPilot Anti-Bias Pledge &amp; Testing Principles
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Why senior engineering leaders and systems architects trust our evaluations over generic affiliate aggregators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Zero Paid Placements</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We reject all paid vendor sponsorships, sponsored reviews, and guaranteed positive editorial ratings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Real Hardware Testing</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All memory and latency benchmarks run on dedicated bare metal (Apple Silicon M3 Max &amp; AMD Ryzen 9 7950X).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Pinned Version Numbers</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Every review explicitly states the exact semantic version, commit hash, and operating system build tested.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Open Benchmark Scripts</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Test harnesses, k6 load scripts, and memory profilers are open-source and reproducible by your engineering team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contributing Lead Reviewers & Benchmark Analysts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="pb-4 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Contributing Lead Reviewers &amp; Benchmark Analysts
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Engineers who profile resident memory, execute automated k6 stress tests, and author our evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/author/${author.slug}`}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors text-sm">
                        {author.name}
                      </h3>
                      <p className="text-[11px] text-emerald-700 font-medium">
                        {author.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {author.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>View author audits</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Dedicated Weekly Reviews Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
