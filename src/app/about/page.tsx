import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, authors } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import {
  ShieldCheck,
  Target,
  Award,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Engineering Publishing & Standards",
  description: `Learn about ${siteConfig.name}'s mission, technical team, editorial testing benchmarks, and software evaluation methodology.`,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  const authorList = Object.values(authors);

  return (
    <div className="pb-20">
      {/* 1. Minimal, Premium Full-Width Hero Section */}
      <section className="relative w-full h-[calc(100vh-4rem)] min-h-[560px] max-h-[840px] flex flex-col justify-between overflow-hidden border-b border-zinc-800 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Real Architectural Publishing Center Photography Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Modern Architectural Engineering & Publishing Headquarters"
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
            items={[{ name: "About Us", href: "/about" }]}
            variant="dark"
            className="mb-0"
          />

          {/* Quiet Editorial Integrity Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-zinc-300 text-xs backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium text-white">Independent Standards</span>
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
            Empirical Engineering &amp; Systems Publishing
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {siteConfig.name} is an independent technology publication dedicated
            to reproducible software benchmarks, cloud architecture tutorials,
            and unbiased developer tooling evaluations.
          </p>

          {/* Centered Minimal Action Buttons - No Topics Below */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#mission"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
            >
              <Target className="w-4 h-4 text-stone-950" />
              <span>Our Standards &amp; Mission</span>
            </a>

            <a
              href="#team"
              className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-medium text-sm transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <span>Editorial Team</span>
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

      {/* Main Body Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 space-y-16 sm:space-y-20">
        {/* Core Mission Pillars */}
        <section id="mission" className="space-y-6">
          <div className="pb-3 border-b border-zinc-200">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Core Principles &amp; Publication Standards
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              How we evaluate technologies, maintain 100% independence, and guarantee reproducible engineering insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">Empirical Testing</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We never copy marketing claims. Every tool reviewed is tested with actual monorepo code, real API latency, and stress workloads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">Editorial Integrity</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Our editorial opinions are independent. Commercial partnerships and affiliate relationships never influence review verdicts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center border border-amber-200">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-900 text-base">Global &amp; Systems Context</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Bridging international developer compensation, remote taxation, GCC systems engineering, and global software architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section id="team" className="space-y-6">
          <div className="pb-3 border-b border-zinc-200">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Editorial &amp; Engineering Team
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Practitioners, system architects, and researchers who design the benchmarks and author the field guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {authorList.map((author) => (
              <div
                key={author.slug}
                className="p-6 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-zinc-300 bg-zinc-200">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors">
                    <Link href={`/author/${author.slug}`}>
                      {author.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-amber-700 font-medium">
                    {author.title}
                  </p>
                  <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Contact Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-100/90 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-semibold text-zinc-900 text-lg">
              Have a technical correction or story pitch?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              We welcome constructive peer review, benchmark datasets, and technical insights from engineers.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] shrink-0 inline-flex items-center gap-2"
          >
            <span>Contact Editorial Desk</span>
            <ArrowRight className="w-4 h-4 text-stone-950" />
          </Link>
        </div>
      </div>
    </div>
  );
}
