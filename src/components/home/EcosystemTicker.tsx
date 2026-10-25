import Link from "next/link";
import { Zap, TrendingUp, Sparkles } from "lucide-react";

interface TickerItem {
  tag: string;
  title: string;
  href: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    tag: "BENCHMARK",
    title: "Claude 3.7 vs GPT-4.5 vs Gemini 2.5: System Design & Coding Benchmarked",
    href: "/blog/claude-3-7-vs-gpt-4-5-system-design",
  },
  {
    tag: "RELEASE",
    title: "Next.js 15 & React 19: Async Request APIs & Partial Prerendering Guide",
    href: "/blog/nextjs-15-react-19-compiler-architecture",
  },
  {
    tag: "DATABASE",
    title: "PostgreSQL 17 & pgvector: Billion-Row HNSW Optimization Guide",
    href: "/blog/postgresql-17-performance-pgvector",
  },
  {
    tag: "PERFORMANCE",
    title: "Bun 1.2 vs Node.js 22 vs Deno 2: Runtime Throughput & Latency",
    href: "/blog/bun-vs-node-vs-deno-runtime-benchmark",
  },
];

export function EcosystemTicker() {
  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-800 text-zinc-300 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 overflow-hidden">
        {/* Left Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-bold tracking-wider uppercase text-amber-400 text-[11px] flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            2026 Tech Pulse:
          </span>
        </div>

        {/* Scrolling / Flex Ticker Items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5 w-full text-zinc-300">
          {TICKER_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="inline-flex items-center gap-2 whitespace-nowrap hover:text-white transition-colors group"
            >
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-semibold text-zinc-300 group-hover:bg-amber-950 group-hover:text-amber-300 group-hover:border-amber-800/50 border border-zinc-700 transition-colors">
                {item.tag}
              </span>
              <span className="group-hover:text-amber-300 transition-colors">
                {item.title}
              </span>
              {index < TICKER_ITEMS.length - 1 && (
                <span className="text-zinc-700 ml-4 hidden md:inline">•</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
