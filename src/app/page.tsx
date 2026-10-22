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
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-zinc-200 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Real Architectural Campus Background Image - 100% Sharp & Unblurred */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Real Silicon Valley Technology Engineering Headquarters Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle cinematic transparent scrim for crystal-clear readability without any blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
        </div>

        {/* Centered Content Directly on Hero - NO BOX */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-semibold border border-white/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Independent Engineering Publishing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            Architectural Insights, AI Tools &amp; Modern Web Infrastructure
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Empirical benchmarks, step-by-step tutorials, and production deployment guides for software engineers, vibe coders, and technical founders.
          </p>

          {/* Centered Topic Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mr-1 drop-shadow-xs">
              Explore:
            </span>
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white border border-white/30 text-white transition-all shadow-xs backdrop-blur-xs"
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
              <Compass className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  AI Tools & Agentic Coding
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Benchmarked coding assistants, context engines, and autonomous terminal workflows.
                </p>
              </div>
            </div>
            <Link
              href="/category/ai-tools"
              className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 shrink-0"
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  Software Comparisons & Reviews
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Head-to-head architectural showdowns and developer tooling evaluations.
                </p>
              </div>
            </div>
            <Link
              href="/category/software-comparisons"
              className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 shrink-0"
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  Web Development & Deployment
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Full-stack Next.js, TypeScript architecture, and zero-downtime ops guides.
                </p>
              </div>
            </div>
            <Link
              href="/category/web-development"
              className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 shrink-0"
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              Latest Publications
            </h2>
            <Link
              href="/category/ai-tools"
              className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
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
