import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ShieldCheck, ArrowRight, BarChart3, ChevronDown } from "lucide-react";

export function AIToolsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[560px] max-h-[840px] flex flex-col justify-between overflow-hidden border-b border-zinc-800 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Real Architectural AI Research Pavilion Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-tools-pavilion.jpg"
          alt="Modern Architectural Glass AI Systems Research Pavilion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle cinematic transparent scrim for crystal-clear readability without blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />
      </div>

      {/* Top Bar: Clean Breadcrumb Navigation + Editorial Disclosure Tag */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-3">
        <Breadcrumbs
          items={[{ name: "AI Tools", href: "/category/ai-tools" }]}
          variant="dark"
          className="mb-0"
        />

        {/* Quiet Editorial Integrity Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-zinc-300 text-xs backdrop-blur-md shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
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

      {/* Centered Editorial Content - Minimal, Breathable, Uncrowded */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-6 my-auto">
        {/* Main H1 Headline - No Eyebrow Text */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          AI Tools &amp; Foundation Model Benchmarks
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          Empirical evaluations, prompt caching architectures, local air-gapped LLM deployments, and enterprise foundation model benchmarks for software engineering teams.
        </p>

        {/* Centered Minimal Action Buttons - No Topics Below */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#benchmark-matrix"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-stone-950" />
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
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-center pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-300/80 font-medium drop-shadow-xs">
          <span>Scroll to explore benchmark reports</span>
          <ChevronDown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
