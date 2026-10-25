import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllAuthors } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AdUnit } from "@/components/ads/AdUnit";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/config/site";
import {
  Cpu,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  GitBranch,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Coding & Autonomous Software Engineering | TechPilot",
  description:
    "Empirical benchmarks, context engineering patterns, AST resolution engines, and production sandboxing blueprints for autonomous coding agents and terminal pair-programming.",
  alternates: {
    canonical: `${siteConfig.url}/category/ai-coding`,
  },
  openGraph: {
    title: "AI Coding & Autonomous Software Engineering | TechPilot",
    description:
      "Empirical benchmarks, context engineering patterns, AST resolution engines, and production sandboxing blueprints for autonomous coding agents.",
    url: `${siteConfig.url}/category/ai-coding`,
  },
};

export default async function AICodingPage() {
  const articles = await getArticlesByCategory("ai-coding");
  const leadArticle = articles[0];
  const gridArticles = articles.slice(1);
  const authors = getAllAuthors();

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Header Section (Direct & Authoritative, NO EYEBROW TEXT) */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[{ name: "AI Coding", href: "/category/ai-coding" }]}
          />

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              AI Coding &amp; Autonomous Software Engineering
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed font-normal">
              Empirical benchmarks, context engineering patterns, AST resolution engines, and production sandboxing blueprints for autonomous coding agents and terminal pair-programming.
            </p>
          </div>

          {/* Core Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-200/80">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Verified Guides
              </span>
              <p className="text-2xl font-bold text-zinc-900">{articles.length} Deep Dives</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Refactor Pass Rate
              </span>
              <p className="text-2xl font-bold text-amber-600">94.2% Monorepo</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Sandboxing Standard
              </span>
              <p className="text-2xl font-bold text-zinc-900">gVisor / Docker</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Editorial Stance
              </span>
              <p className="text-2xl font-bold text-zinc-900">100% Unbiased</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lead Analysis Spotlight */}
      {leadArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Architectural Analysis
            </h2>
            <span className="text-xs font-semibold text-amber-800">
              Lead Masterclass
            </span>
          </div>

          <ArticleCard article={leadArticle} featured={true} />
        </section>
      )}

      {/* 3. The 5-Layer Autonomous AI Coding Reference Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The Autonomous Coding Stack: 2026 Reference Architecture
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Modern agentic workflows have moved far beyond basic single-file autocomplete. Production-ready teams deploy a 5-layer pipeline to guarantee type-safety, eliminate hallucinations, and enforce strict security boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                AST Context Engine
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Tree-sitter symbol graphs and call-hierarchy slicing that feed only relevant tokens into the prompt window.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Spec-Driven Planning
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Zod schemas and TypeScript interface contracts that constrain agent generation to immutable boundaries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                MCP Tool Protocol
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Standardized Model Context Protocol servers exposing read-only schemas and sanitized database inspection.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                gVisor Sandboxing
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                User-space kernel isolation and outbound egress proxy whitelisting preventing unauthorized network exfiltration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                05
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Self-Healing TDD
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Headless CI loops executing Vitest assertions, parsing JSON error stacks, and autonomously committing validated patches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Library of Publications (Full 3-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              All AI Coding Masterclasses &amp; Field Handbooks
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Hands-on engineering tutorials verified on isolated production codebases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* 5. In-Feed Monetization Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdUnit
          slotId={siteConfig.monetization.adsense.slotInArticleTop}
          format="horizontal"
          showDevPlaceholder={true}
        />
      </div>

      {/* 6. Empirical Tooling Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                2026 AI Coding Tools Benchmark Evaluation
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Empirical scores across 40-step multi-file refactoring tests in an isolated 45,000-line TypeScript repository.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shrink-0">
              Updated March 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 font-semibold">
                  <th className="py-3 px-4">Tool</th>
                  <th className="py-3 px-4">Core Modality</th>
                  <th className="py-3 px-4">Refactor Pass Rate</th>
                  <th className="py-3 px-4">Context Indexing</th>
                  <th className="py-3 px-4">MCP Protocol</th>
                  <th className="py-3 px-4">Security Sandboxing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Claude Code (Anthropic)</td>
                  <td className="py-3 px-4">Terminal CLI Native</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">94.2% (Tier 1)</td>
                  <td className="py-3 px-4">Git aware + sub-AST</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">Native Stdio/SSE</td>
                  <td className="py-3 px-4">Interactive confirmation</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Cursor</td>
                  <td className="py-3 px-4">Forked VS Code IDE</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">91.8% (Tier 1)</td>
                  <td className="py-3 px-4">Embeddings + AST</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">Supported</td>
                  <td className="py-3 px-4">Local host execution</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Aider</td>
                  <td className="py-3 px-4">Terminal Git Companion</td>
                  <td className="py-3 px-4 text-zinc-700">87.4% (Tier 2)</td>
                  <td className="py-3 px-4">Tree-sitter repo map</td>
                  <td className="py-3 px-4 text-zinc-500">Partial</td>
                  <td className="py-3 px-4">Git rollback commits</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Windsurf</td>
                  <td className="py-3 px-4">Full IDE Cascade</td>
                  <td className="py-3 px-4 text-zinc-700">86.1% (Tier 2)</td>
                  <td className="py-3 px-4">Flow engine</td>
                  <td className="py-3 px-4 text-zinc-500">Plugin ecosystem</td>
                  <td className="py-3 px-4">Host sandbox</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Lead Researchers & Authors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="pb-4 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Contributing AI Systems Researchers &amp; Engineers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Practitioners who write the code, run the benchmarks, and configure the sandboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {authors.slice(0, 3).map((author) => (
              <Link
                key={author.slug}
                href={`/author/${author.slug}`}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-amber-300 hover:shadow-md transition-all group flex flex-col justify-between"
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
                      <h3 className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors text-sm">
                        {author.name}
                      </h3>
                      <p className="text-[11px] text-amber-700 font-medium">
                        {author.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {author.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-800">
                  <span>View author guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Weekly AI Coding Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
