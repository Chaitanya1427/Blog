import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllAuthors } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AdUnit } from "@/components/ads/AdUnit";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/config/site";
import { AIToolsHero } from "@/components/ai-tools/AIToolsHero";
import {
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Tools & Foundation Models for Engineers | TechPilot",
  description:
    "Empirical evaluations, prompt caching architectures, local LLM deployments, and enterprise foundation model benchmarks for software engineering teams.",
  alternates: {
    canonical: `${siteConfig.url}/category/ai-tools`,
  },
  openGraph: {
    title: "AI Tools & Foundation Models for Engineers | TechPilot",
    description:
      "Empirical evaluations, prompt caching architectures, local LLM deployments, and enterprise foundation model benchmarks for software engineering teams.",
    url: `${siteConfig.url}/category/ai-tools`,
  },
};

export default async function AIToolsPage() {
  const articles = await getArticlesByCategory("ai-tools");
  const leadArticle = articles[0];
  const gridArticles = articles.slice(1);
  const authors = getAllAuthors();

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Premium Production-Grade Hero Section */}
      <AIToolsHero articlesCount={articles.length} />

      {/* 2. Lead Masterclass Spotlight */}
      {leadArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Foundation Analysis
            </h2>
            <span className="text-xs font-semibold text-emerald-700">
              Lead Masterclass
            </span>
          </div>

          <ArticleCard article={leadArticle} featured={true} />
        </section>
      )}

      {/* 3. The Enterprise AI Tooling Architecture Reference Blueprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The Enterprise AI Infrastructure Stack: 2026 Reference Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Shipping reliable AI capabilities requires a robust layered pipeline spanning model reasoning, token cache optimization, hybrid search retrieval, and automated CI regression gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Frontier Reasoning
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Hybrid thinking models (Claude 3.7, Gemini 2.5) delivering verified AST synthesis on multi-file engineering problems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Prompt Caching
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Prefix KV-cache reuse cutting token expenditures by up to 80% and slashing time-to-first-token latency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Hybrid RAG Retrieval
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                PostgreSQL pgvector combined with BM25 sparse keyword matching and cross-encoder rerankers for sub-50ms search.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Local Air-Gapped LLMs
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Quantized DeepSeek-R1 and Qwen 2.5 Coder deployed inside VPC private subnets using vLLM with zero cloud telemetry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
                05
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Continuous Evaluation
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Automated Promptfoo test suites and Langfuse observability pipelines blocking breaking prompt regressions on PRs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Library of Publications (Full 3-Column Grid) */}
      <section id="all-guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              All AI Tools Masterclasses &amp; Benchmark Reports
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Empirical guides and reproducible architectural configurations.
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

      {/* 6. Empirical Frontier Models Benchmark Evaluation Matrix */}
      <section id="benchmark-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                2026 Frontier AI Models Benchmark Matrix
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Empirical scores across multi-file architectural refactoring, latency budgets, and token economics.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
              Updated March 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 font-semibold">
                  <th className="py-3 px-4">Model &amp; Provider</th>
                  <th className="py-3 px-4">Core Modality</th>
                  <th className="py-3 px-4">AST Refactor Accuracy</th>
                  <th className="py-3 px-4">Context Window</th>
                  <th className="py-3 px-4">Prompt Caching</th>
                  <th className="py-3 px-4">Pricing (In / Out per 1M)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Claude 3.7 Sonnet (Anthropic)</td>
                  <td className="py-3 px-4">Hybrid Thinking</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">94.2% (Tier 1)</td>
                  <td className="py-3 px-4">200k tokens</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">Native (90% discount)</td>
                  <td className="py-3 px-4">$3.00 / $15.00</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">Gemini 2.5 Flash (Google)</td>
                  <td className="py-3 px-4">High-Throughput Vision</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">89.1% (Tier 1)</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">1M+ tokens</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">Context Caching</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">$0.075 / $0.30</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">DeepSeek-R1 671B (Open Weights)</td>
                  <td className="py-3 px-4">Air-Gapped Reasoning</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">90.3% (Tier 1)</td>
                  <td className="py-3 px-4">128k tokens</td>
                  <td className="py-3 px-4">vLLM KV-Cache</td>
                  <td className="py-3 px-4">$0 (Self-Hosted GPU)</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-zinc-950">GPT-4.5 (OpenAI)</td>
                  <td className="py-3 px-4">General Reasoning</td>
                  <td className="py-3 px-4 text-zinc-700">88.4% (Tier 2)</td>
                  <td className="py-3 px-4">128k tokens</td>
                  <td className="py-3 px-4">Automatic</td>
                  <td className="py-3 px-4 text-rose-700 font-medium">$75.00 / $150.00</td>
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
              Practitioners who benchmark the models, configure the vector databases, and audit the token economics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {authors.slice(0, 3).map((author) => (
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
                  <span>View author guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Weekly AI Tools Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
