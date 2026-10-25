import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ShieldCheck, ArrowRight, BarChart3, ChevronDown } from "lucide-react";

interface AIToolsHeroProps {
  articlesCount: number;
}

export function AIToolsHero({ articlesCount }: AIToolsHeroProps) {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[580px] max-h-[920px] flex flex-col justify-between overflow-hidden border-b border-zinc-800 px-4 sm:px-6 lg:px-8 py-6">
      {/* Real Silicon Valley Architectural AI Research Pavilion Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-tools-pavilion.jpg"
          alt="Modern Architectural Glass AI Systems Research Pavilion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic transparent scrim: 100% sharp architectural visibility with crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
      </div>

      {/* Top Bar: Breadcrumb Navigation + Editorial Disclosure Tag */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-3">
        <Breadcrumbs
          items={[{ name: "AI Tools", href: "/category/ai-tools" }]}
          variant="dark"
          className="mb-0"
        />

        {/* Calm Editorial Integrity Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-zinc-300 text-xs backdrop-blur-md shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-medium text-white">Empirical Benchmarks</span>
          <span className="text-zinc-500">•</span>
          <Link
            href="/affiliate-disclosure"
            className="text-zinc-300 hover:text-white underline decoration-zinc-500 underline-offset-2 transition-colors"
          >
            Affiliate Disclosed
          </Link>
        </div>
      </div>

      {/* Centered Editorial Content - Clean Typographic Hierarchy (No Fake Widgets) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-5 my-auto">
        {/* Subdued Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-zinc-200 text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-semibold uppercase tracking-wider text-[11px] text-white">
            2026 Q1 Production Radar
          </span>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-300">{articlesCount} Audited Stacks</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          AI Tools &amp; Foundation Model Benchmarks
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          Empirical evaluations, prompt caching architectures, local air-gapped LLM deployments, and enterprise foundation model benchmarks for software engineering teams.
        </p>

        {/* Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#benchmark-matrix"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-zinc-950" />
            <span>Explore Benchmark Matrix</span>
          </a>

          <Link
            href="/media-kit"
            className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-medium text-sm transition-all backdrop-blur-md inline-flex items-center gap-2"
          >
            <span>Sponsor a Benchmark Slot</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </Link>
        </div>

        {/* Centered Topic Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mr-1 drop-shadow-xs">
            Topics:
          </span>
          <Link
            href="/blog/claude-3-7-vs-gpt-4-5-system-design"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white border border-white/25 text-white transition-all shadow-xs backdrop-blur-md"
          >
            #Claude 3.7 vs GPT-4.5
          </Link>
          <Link
            href="/blog/prompt-caching-cost-optimization-frontier-models"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white border border-white/25 text-white transition-all shadow-xs backdrop-blur-md"
          >
            #Prompt Caching (-90%)
          </Link>
          <Link
            href="/blog/local-llms-ollama-deepseek-production"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white border border-white/25 text-white transition-all shadow-xs backdrop-blur-md"
          >
            #DeepSeek Local vLLM
          </Link>
          <Link
            href="/blog/hybrid-rag-bm25-pgvector-rerank"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white border border-white/25 text-white transition-all shadow-xs backdrop-blur-md"
          >
            #Hybrid RAG pgvector
          </Link>
        </div>
      </div>

      {/* Bottom Row: 4 Metric Cards + Scroll Prompt Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto space-y-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-white/20">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 drop-shadow-xs">
              Verified Guides
            </span>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-xs">
              {articlesCount} Deep Dives
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 drop-shadow-xs">
              Cache Cost Savings
            </span>
            <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight drop-shadow-xs">
              Up to 90% Off
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 drop-shadow-xs">
              Tested Context
            </span>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-xs">
              2,000,000 Tokens
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 drop-shadow-xs">
              Editorial Integrity
            </span>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-xs">
              100% Unbiased
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex items-center justify-center gap-1.5 text-[11px] text-zinc-300 font-medium drop-shadow-xs">
          <span>Scroll to explore benchmark reports</span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
