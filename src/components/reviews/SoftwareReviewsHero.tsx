import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ShieldCheck, ArrowRight, ChevronDown, BookOpen } from "lucide-react";

export function SoftwareReviewsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[560px] max-h-[840px] flex flex-col justify-between overflow-hidden border-b border-zinc-800 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Real Architectural Software Research Lab Photography Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/software-reviews-hero.jpg"
          alt="Modern Architectural Technology & Software Research Center"
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
          items={[{ name: "Software Reviews", href: "/category/software-reviews" }]}
          variant="dark"
          className="mb-0"
        />

        {/* Quiet Editorial Integrity Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-zinc-300 text-xs backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium text-white">Independent Lab Audits</span>
          <span className="text-zinc-500">•</span>
          <Link
            href="/editorial-policy"
            className="text-zinc-300 hover:text-white underline decoration-zinc-500 underline-offset-2 transition-colors"
          >
            Editorial Policy
          </Link>
        </div>
      </div>

      {/* Centered Editorial Content - Minimal, Breathable, Uncrowded */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center space-y-6 my-auto">
        {/* Main H1 Headline - No Eyebrow Text */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          Empirical Software Reviews &amp; Developer Tooling Evaluations
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          Rigorous, reproducible benchmarks and hands-on production audits of developer tools,
          cloud platforms, IDEs, databases, and engineering SaaS. Zero paid placements, 100% objective.
        </p>

        {/* Centered Minimal Action Buttons - No Topics Below */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#all-reviews"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-stone-950" />
            <span>Explore Audits</span>
          </a>

          <a
            href="#scorecard-explorer"
            className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-medium text-sm transition-all backdrop-blur-md inline-flex items-center gap-2"
          >
            <span>Scorecard Explorer</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </a>
        </div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-center pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-300/80 font-medium drop-shadow-xs">
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

