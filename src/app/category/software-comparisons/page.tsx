import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllAuthors } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AdUnit } from "@/components/ads/AdUnit";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/config/site";
import { StackComparisonMatcher } from "@/components/comparisons/StackComparisonMatcher";
import {
  Scale,
  CheckCircle2,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
  Database,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Head-to-Head Software Comparisons & Stack Face-Offs | TechPilot",
  description:
    "Objective, empirical side-by-side comparisons of developer tooling, databases, cloud runtimes, and frameworks. Deciding performance metrics and migration trade-offs.",
  alternates: {
    canonical: `${siteConfig.url}/category/software-comparisons`,
  },
  openGraph: {
    title: "Head-to-Head Software Comparisons & Stack Face-Offs | TechPilot",
    description:
      "Objective, empirical side-by-side comparisons of developer tooling, databases, cloud runtimes, and frameworks.",
    url: `${siteConfig.url}/category/software-comparisons`,
  },
};

export default async function SoftwareComparisonsPage() {
  const articles = await getArticlesByCategory("software-comparisons");
  const leadArticle = articles[0];
  const gridArticles = articles.slice(1);
  const authors = getAllAuthors();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header Section (Direct, Authoritative, NO EYEBROW TEXT) */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[{ name: "Comparisons", href: "/category/software-comparisons" }]}
          />

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Head-to-Head Software Comparisons &amp; Tech Stack Face-Offs
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed font-normal">
              Objective, data-driven comparisons of competing frameworks, databases, and developer infrastructure. Side-by-side architectural trade-offs, migration cost analyses, and empirical decision matrices.
            </p>
          </div>

          {/* Core Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200/80">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Verified Comparisons
              </span>
              <p className="text-2xl font-bold text-zinc-900">{articles.length} Deep Face-Offs</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Decision Framework
              </span>
              <p className="text-2xl font-bold text-emerald-600">4-Quadrant Audit</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Synthetic Load Baseline
              </span>
              <p className="text-2xl font-bold text-zinc-900">100k Req/s Testing</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Editorial Stance
              </span>
              <p className="text-2xl font-bold text-zinc-900">100% Objective</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Lead Showdown Spotlight */}
      {leadArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Architectural Showdown
            </h2>
            <span className="text-xs font-semibold text-emerald-700">
              Lead Comparison
            </span>
          </div>

          <ArticleCard article={leadArticle} featured={true} />
        </section>
      )}

      {/* 3. The 4-Quadrant Architecture Decision Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The 4-Quadrant Architecture Evaluation Framework
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Every comparison on TechPilot isolates architectural variables under standardized production conditions. We assess trade-offs across four rigorous operational axes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">
                Throughput &amp; Latency Floor
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Measuring real P50, P95, and P99 latency percentiles under sustained concurrent synthetic traffic and edge cold-start conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">
                Type Inference &amp; Velocity
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Profiling TypeScript compiler overhead, cold type-checking duration, LSP auto-completion lag, and breaking schema migration friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">
                Migration &amp; Lock-in Risk
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Calculating exportability, open standard compliance, vendor switching costs, and the operational pain of migrating off the stack.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">
                Day-2 Operational Complexity
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Auditing connection pooling stability, observability hooks, automated failover behavior, and SRE maintenance burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Stack Comparison Matcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Interactive Stack Decision Matcher
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Compare competing technologies head-to-head across empirical benchmarks, trade-offs, and deciding factors.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
            Updated March 2026
          </span>
        </div>

        <StackComparisonMatcher />
      </section>

      {/* 5. Complete Library of Software Comparisons (Full 3-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              All In-Depth Tech Stack Comparisons &amp; Benchmarks
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Rigorous, side-by-side engineering evaluations with complete code and data.
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

      {/* 7. Empirical 2026 Enterprise Stack Decision Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                2026 Enterprise Stack Migration &amp; Decision Matrix
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Executive architectural comparison across primary trade-offs, migration friction, and recommended enterprise choices.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
              Q1 2026 Audit
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 font-semibold">
                  <th className="py-3.5 px-4">Stack Domain</th>
                  <th className="py-3.5 px-4">Head-to-Head Contenders</th>
                  <th className="py-3.5 px-4">Deciding Performance Metric</th>
                  <th className="py-3.5 px-4">Migration Friction</th>
                  <th className="py-3.5 px-4">Recommended Winner</th>
                  <th className="py-3.5 px-4">Primary Trade-Off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">TypeScript ORMs</td>
                  <td className="py-3.5 px-4">Drizzle ORM vs Prisma</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">12ms vs 34ms query exec</td>
                  <td className="py-3.5 px-4 text-amber-700 font-medium">Medium (Schema syntax)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">Drizzle (Serverless)</td>
                  <td className="py-3.5 px-4">Manual relation joins vs Rust engine overhead</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Backend-as-a-Service</td>
                  <td className="py-3.5 px-4">Supabase vs Firebase</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">Open Postgres vs NoSQL</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Low (Standard SQL)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">Supabase (Relational)</td>
                  <td className="py-3.5 px-4">SQL schema discipline vs rapid NoSQL prototyping</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">JavaScript Runtimes</td>
                  <td className="py-3.5 px-4">Bun 1.2 vs Node.js 22 LTS</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">4.8x faster install / test</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Low (Drop-in Node API)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">Bun (Dev) / Node (Prod)</td>
                  <td className="py-3.5 px-4">Developer ergonomics vs long-term LTS enterprise SLAs</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Data Analytics &amp; OLAP</td>
                  <td className="py-3.5 px-4">ClickHouse vs PostgreSQL</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">38ms vs 4,820ms on 100M rows</td>
                  <td className="py-3.5 px-4 text-rose-700 font-medium">High (Columnar schema)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">ClickHouse (Analytics)</td>
                  <td className="py-3.5 px-4">15x storage compression vs transactional ACID updates</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Message Brokers</td>
                  <td className="py-3.5 px-4">Apache Kafka vs Redis Streams</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">185k msgs/s vs 0.82ms latency</td>
                  <td className="py-3.5 px-4 text-amber-700 font-medium">Medium (Consumer group APIs)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">Kafka (Scale) / Redis (Fast)</td>
                  <td className="py-3.5 px-4">Multi-day disk replay vs in-memory operational simplicity</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">API Layer Architecture</td>
                  <td className="py-3.5 px-4">tRPC v11 vs GraphQL vs REST</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">0s codegen / 2.8KB bundle</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Low (TypeScript Native)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">tRPC (Monorepos)</td>
                  <td className="py-3.5 px-4">Full-stack monorepo lock-in vs multi-client public APIs</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Monorepo Orchestration</td>
                  <td className="py-3.5 px-4">Turborepo 2.0 vs Nx 20</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">84ms graph resolution</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Low (Standard workspaces)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">Turborepo (Zero Config)</td>
                  <td className="py-3.5 px-4">Lightweight task caching vs enterprise module boundaries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Objective Benchmark Guarantees & Testing Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2 pb-4 border-b border-zinc-100">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              TechPilot Objective Comparison Guarantees
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Our architectural comparisons are designed to help senior engineering teams make multi-million dollar technology decisions with empirical confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Zero Sponsor Influence</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Vendors cannot purchase favorable head-to-head outcomes or edit comparative performance graphs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Identical Bare Metal</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All competing runtimes, databases, and message brokers are deployed on identical hardware instances with pinned kernels.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Real Production Workloads</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We reject toy &quot;Hello World&quot; benchmarks; all tests run on real 450k LOC monorepos and 100M row production datasets.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Reproducible Repositories</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Every benchmark includes full Docker Compose files, k6 load scripts, and seed fixtures for local verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contributing Systems Architects & Benchmark Analysts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="pb-4 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Contributing Systems Architects &amp; Benchmark Analysts
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Practitioners who stress-test distributed clusters, profile kernel memory, and author our head-to-head evaluations.
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
                  <span>View author comparisons</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Dedicated Weekly Stack Comparisons Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
