import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getAllCategories } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { AdUnit } from "@/components/ads/AdUnit";
import { EcosystemTicker } from "@/components/home/EcosystemTicker";
import { TrendingRail } from "@/components/home/TrendingRail";
import { EditorialTrustBar } from "@/components/home/EditorialTrustBar";
import { TechRadar } from "@/components/home/TechRadar";
import { CuratedPlaybooks } from "@/components/home/CuratedPlaybooks";
import { AuthorsSpotlight } from "@/components/home/AuthorsSpotlight";
import { LatestFeedSection } from "@/components/home/LatestFeedSection";
import { ArrowRight, Cpu, Layers, BookOpen, Database, Compass, Flame } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Article } from "@/types/content";

export default async function HomePage() {
  const allArticles = await getAllArticles(); // Drafts automatically excluded

  // STRICT DEDUPLICATION SYSTEM: Track displayed slugs so NO article or image is ever repeated!
  const seenSlugs = new Set<string>();

  // 1. Featured Lead Story (Hero Lead)
  const featuredArticle = allArticles[0];
  if (featuredArticle) {
    seenSlugs.add(featuredArticle.slug);
  }

  // 2. Trending Rail (Top 4 most engaging stories, excluding featured)
  const trendingArticles: Article[] = [];
  for (const article of allArticles) {
    if (!seenSlugs.has(article.slug) && trendingArticles.length < 4) {
      trendingArticles.push(article);
      seenSlugs.add(article.slug);
    }
  }

  // 3. Topic Section: AI Tools & Agentic Coding (3 distinct articles)
  const aiArticles: Article[] = [];
  for (const article of allArticles) {
    if (
      !seenSlugs.has(article.slug) &&
      (article.category.slug === "ai-tools" || article.category.slug === "ai-coding") &&
      aiArticles.length < 3
    ) {
      aiArticles.push(article);
      seenSlugs.add(article.slug);
    }
  }

  // 4. Topic Section: Software Comparisons & Reviews (3 distinct articles)
  const comparisonArticles: Article[] = [];
  for (const article of allArticles) {
    if (
      !seenSlugs.has(article.slug) &&
      (article.category.slug === "software-comparisons" ||
        article.category.slug === "software-reviews") &&
      comparisonArticles.length < 3
    ) {
      comparisonArticles.push(article);
      seenSlugs.add(article.slug);
    }
  }

  // 5. Topic Section: Web Development, Cloud & Databases (3 distinct articles)
  const infraArticles: Article[] = [];
  for (const article of allArticles) {
    if (
      !seenSlugs.has(article.slug) &&
      (article.category.slug === "web-development" ||
        article.category.slug === "hosting-and-deployment" ||
        article.category.slug === "databases-and-backend" ||
        article.category.slug === "automation-and-productivity") &&
      infraArticles.length < 3
    ) {
      infraArticles.push(article);
      seenSlugs.add(article.slug);
    }
  }

  // 6. Remaining Articles for Continuous Latest Feed (All distinct, 0 repeats!)
  const remainingArticles = allArticles.filter((article) => !seenSlugs.has(article.slug));

  const categories = getAllCategories();

  return (
    <div className="pb-20">
      {/* 1. Full Frame 100vh Hero Section with Real Architectural Photography */}
      <section className="relative w-full h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] min-h-[580px] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-200 px-4 sm:px-6 lg:px-8">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
        </div>

        {/* Centered Content Directly on Hero - Clean Editorial Typographic Hierarchy */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            Architectural Insights, AI Tools &amp; Modern Web Infrastructure
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Empirical benchmarks, step-by-step tutorials, and production deployment guides for software engineers, vibe coders, and technical founders.
          </p>

          {/* Centered Topic Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mr-1 drop-shadow-xs">
              Explore:
            </span>
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 hover:bg-amber-600 hover:border-amber-500 hover:text-white border border-white/30 text-white transition-all shadow-xs backdrop-blur-xs"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Indicator (100vh Full Frame Prompt) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none select-none">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-300 drop-shadow-xs">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 backdrop-blur-xs">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Live Ecosystem Ticker (Real-Time Tech Pulse Strip) */}
      <EcosystemTicker />

      {/* Content wrapper with consistent spacing */}
      <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">

      {/* 3. Editorial Lead Story & Trending Benchmarks Split Layout */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                Editorial Lead Story
              </h2>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-700">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified Benchmark</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Lead Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <ArticleCard article={featuredArticle} featured={true} />
            </div>

            {/* Trending Rail (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <TrendingRail articles={trendingArticles} />
            </div>
          </div>
        </section>
      )}

      {/* 4. Enterprise Editorial Trust & Standards Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorialTrustBar />
      </div>

      {/* 5. In-Feed Responsive Ad Placement (Feature-flag controlled) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdUnit
          slotId={siteConfig.monetization.adsense.slotInArticleTop}
          format="horizontal"
          showDevPlaceholder={true}
        />
      </div>

      {/* 6. Topic Deep Dive: AI Tools & Agentic Coding (All Unique Articles & Images!) */}
      {aiArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  AI Tools &amp; Agentic Coding
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Benchmarked coding assistants, context engines, and autonomous terminal workflows.
                </p>
              </div>
            </div>
            <Link
              href="/category/ai-tools"
              className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 7. Interactive 2026 Tech Radar Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechRadar />
      </div>

      {/* 8. Topic Deep Dive: Software Comparisons & Reviews (All Unique Articles & Images!) */}
      {comparisonArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  Software Comparisons &amp; Reviews
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Head-to-head architectural showdowns and developer tooling evaluations.
                </p>
              </div>
            </div>
            <Link
              href="/category/software-comparisons"
              className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all comparisons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Curated Engineering Blueprints & Field Manuals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CuratedPlaybooks />
      </div>

      {/* 10. Topic Deep Dive: Web Development, Cloud & Infrastructure */}
      {infraArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                  Web Development, Cloud &amp; Infrastructure
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Next.js App Router, Tailwind v4, distributed caching, and zero-downtime deployment.
                </p>
              </div>
            </div>
            <Link
              href="/category/web-development"
              className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View all guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 11. Meet Our Editorial Architects (Author Spotlight) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuthorsSpotlight />
      </div>

      {/* 12. Continuous Latest Publications Feed (Filterable Tabs, 0 Duplicates!) */}
      {remainingArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestFeedSection articles={remainingArticles} />
        </div>
      )}

      {/* 13. Enterprise Weekly Dispatch & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  </div>
  );
}
