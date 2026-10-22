import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getAllCategories } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { AdUnit } from "@/components/ads/AdUnit";
import { Sparkles, ArrowRight, Cpu, Layers, BookOpen, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

export default async function HomePage() {
  const allArticles = await getAllArticles(); // Drafts automatically excluded
  const featuredArticle = allArticles[0];
  const secondaryFeatured = allArticles.slice(1, 3);
  const latestArticles = allArticles.slice(3, 7);

  // Group articles by key categories for topic-based sections
  const aiArticles = allArticles.filter(
    (a) => a.category.slug === "ai-tools" || a.category.slug === "ai-coding"
  );
  const comparisonArticles = allArticles.filter(
    (a) => a.category.slug === "software-comparisons" || a.category.slug === "software-reviews"
  );
  const webDevArticles = allArticles.filter(
    (a) => a.category.slug === "web-development" || a.category.slug === "hosting-and-deployment"
  );

  const categories = getAllCategories();

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Super-Premium Centered Hero Section with Real Architectural Photography */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-zinc-800 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Real Architectural Campus Background Image - Super Premium & 100% Visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Real Silicon Valley Technology Engineering Headquarters Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.01]"
          />
          {/* Subtle balanced cinematic overlay that preserves full visibility of illuminated architecture and water reflection */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-zinc-950/65" />
        </div>

        {/* Centered Typography Directly Over Background Photo */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-medium backdrop-blur-md shadow-lg mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Independent Engineering Publishing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] max-w-3xl mx-auto drop-shadow-md mb-6">
            Architectural Insights, AI Tools & Modern Web Infrastructure
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow mb-8">
            Empirical benchmarks, step-by-step tutorials, and production deployment guides for software engineers, vibe coders, and technical founders.
          </p>

          {/* Centered Topic Pills with Translucent Glass Design */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-2xl mx-auto">
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider mr-1 drop-shadow">
              Explore:
            </span>
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-black/40 hover:bg-emerald-600/90 border border-white/20 hover:border-emerald-400 text-white backdrop-blur-md transition-all shadow-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lead Story */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Featured Analysis
              </h2>
            </div>
          </div>

          <ArticleCard article={featuredArticle} featured={true} />

          {/* Secondary Featured Grid */}
          {secondaryFeatured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {secondaryFeatured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Responsive In-Content Ad Placement (Feature-flag controlled) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdUnit
          slotId={siteConfig.monetization.adsense.slotInArticleTop}
          format="horizontal"
          showDevPlaceholder={true}
        />
      </div>

      {/* Topic-Based Section: AI Tools & Agents */}
      {aiArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                  AI Tools & Agentic Coding
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Benchmarked coding assistants, context engines, and autonomous terminal workflows.
                </p>
              </div>
            </div>
            <Link
              href="/category/ai-tools"
              className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Topic-Based Section: Software Comparisons & Reviews */}
      {comparisonArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                  Software Comparisons & Reviews
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Head-to-head architectural showdowns and developer tooling evaluations.
                </p>
              </div>
            </div>
            <Link
              href="/category/software-comparisons"
              className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Topic-Based Section: Web Development & Cloud Infrastructure */}
      {webDevArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                  Web Development & Deployment
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Full-stack Next.js, TypeScript architecture, and zero-downtime ops guides.
                </p>
              </div>
            </div>
            <Link
              href="/category/web-development"
              className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDevArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      {latestArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
              Latest Publications
            </h2>
            <Link
              href="/category/ai-tools"
              className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Explore all articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Dispatch Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
