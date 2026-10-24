"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "@/types/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Layers, ArrowRight } from "lucide-react";

interface LatestFeedSectionProps {
  articles: Article[];
}

const FILTER_TABS = [
  { key: "all", label: "All Topics" },
  { key: "ai", label: "AI & Agents" },
  { key: "web", label: "Web Development" },
  { key: "db", label: "Databases & Cloud" },
  { key: "reviews", label: "Reviews & Benchmarks" },
];

export function LatestFeedSection({ articles }: LatestFeedSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") {
      return article.category.slug === "ai-tools" || article.category.slug === "ai-coding";
    }
    if (activeFilter === "web") {
      return article.category.slug === "web-development";
    }
    if (activeFilter === "db") {
      return (
        article.category.slug === "databases-and-backend" ||
        article.category.slug === "hosting-and-deployment"
      );
    }
    if (activeFilter === "reviews") {
      return (
        article.category.slug === "software-reviews" ||
        article.category.slug === "software-comparisons" ||
        article.category.slug === "automation-and-productivity"
      );
    }
    return true;
  });

  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Continuous Feed
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">
            Latest Engineering Publications
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 border border-zinc-200/80">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-xs border border-zinc-200"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-500 text-sm">
          No publications found in this category.
        </div>
      )}

      <div className="text-center pt-6">
        <Link
          href="/category/ai-tools"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs"
        >
          <span>Explore Complete Publishing Archive</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
