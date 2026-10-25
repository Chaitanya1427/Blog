import { Suspense } from "react";
import type { Metadata } from "next";
import { searchArticles } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search Articles",
  description: "Search all engineering tutorials, AI tool evaluations, and cloud architecture articles.",
  robots: {
    index: false, // Prevent Google from indexing internal search result permutations
    follow: true,
  },
};

interface SearchParamsProps {
  searchParams: Promise<{ q?: string }>;
}

async function SearchResults({ searchParams }: SearchParamsProps) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const results = query ? await searchArticles(query) : [];

  return (
    <div className="space-y-8">
      {query && (
        <p className="text-sm text-zinc-600">
          Showing {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;
          <span className="font-semibold text-zinc-900">{query}</span>&rdquo;
        </p>
      )}

      {query && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 space-y-3">
          <h3 className="text-lg font-semibold text-zinc-900">
            No matching articles found
          </h3>
          <p className="text-sm text-zinc-600 max-w-md mx-auto">
            We couldn&apos;t find any articles matching &ldquo;{query}&rdquo;. Check your spelling or browse our key categories.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            <Link
              href="/category/ai-tools"
              className="text-xs px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-amber-700 font-medium"
            >
              AI Tools
            </Link>
            <Link
              href="/category/ai-coding"
              className="text-xs px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-amber-700 font-medium"
            >
              AI Coding
            </Link>
            <Link
              href="/category/software-comparisons"
              className="text-xs px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-amber-700 font-medium"
            >
              Software Comparisons
            </Link>
          </div>
        </div>
      )}

      {!query && (
        <div className="p-12 text-center rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-600">
          Enter a term above to search our technical articles, software reviews, and benchmarks.
        </div>
      )}
    </div>
  );
}

function SearchLoading() {
  return (
    <div className="p-12 text-center text-zinc-500 text-sm flex items-center justify-center gap-2">
      <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
      <span>Searching article repository...</span>
    </div>
  );
}

export default function SearchPage({ searchParams }: SearchParamsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Breadcrumbs items={[{ name: "Search", href: "/search" }]} />

      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
          Search Articles & Guides
        </h1>

        <form action="/search" method="GET" className="relative flex items-center">
          <SearchIcon className="absolute left-4 w-5 h-5 text-zinc-400" />
          <input
            type="search"
            name="q"
            placeholder="Search keywords: Next.js, Supabase, Cursor, Docker..."
            className="w-full pl-12 pr-28 py-3.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
          />
          <button
            type="submit"
            className="absolute right-2 px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <Suspense fallback={<SearchLoading />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
