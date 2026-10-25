import Link from "next/link";
import { Article } from "@/types/content";
import { TrendingUp, Flame, Clock, ArrowRight } from "lucide-react";

interface TrendingRailProps {
  articles: Article[];
}

export function TrendingRail({ articles }: TrendingRailProps) {
  return (
    <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 text-base sm:text-lg tracking-tight">
                Trending Benchmarks
              </h3>
              <p className="text-[11px] text-zinc-500">Most engaged by engineering teams</p>
            </div>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            Top Reads
          </span>
        </div>

        <div className="divide-y divide-zinc-100">
          {articles.map((article, index) => {
            const rank = String(index + 1).padStart(2, "0");
            return (
              <div key={article.slug} className="py-4 first:pt-0 last:pb-0 group">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-black text-zinc-300 group-hover:text-amber-600 transition-colors shrink-0">
                    {rank}
                  </span>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                      <span className="font-semibold text-amber-700 hover:underline">
                        {article.category.name}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime}m
                      </span>
                    </div>
                    <h4 className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors text-sm sm:text-base leading-snug line-clamp-2">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-zinc-100">
        <Link
          href="/category/software-comparisons"
          className="w-full py-2.5 px-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-zinc-200/70"
        >
          <span>View All Architectural Benchmarks</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
        </Link>
      </div>
    </div>
  );
}
