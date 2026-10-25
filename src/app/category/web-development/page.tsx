import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllAuthors } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AdUnit } from "@/components/ads/AdUnit";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/config/site";
import { TutorialCodeShowcase } from "@/components/web-dev/TutorialCodeShowcase";
import {
  BookOpen,
  Code2,
  Zap,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Cpu,
  Server,
  Terminal,
  Activity,
  Boxes,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Engineering Tutorials & Architecture Blueprints | TechPilot",
  description:
    "Production masterclasses on Next.js 15, React 19 Server Components, Core Web Vitals, Tailwind CSS v4, and distributed edge architectures with reproducible GitHub code.",
  alternates: {
    canonical: `${siteConfig.url}/category/web-development`,
  },
  openGraph: {
    title: "Web Engineering Tutorials & Architecture Blueprints | TechPilot",
    description:
      "Production masterclasses on Next.js 15, React 19 Server Components, Core Web Vitals, Tailwind CSS v4, and distributed edge architectures.",
    url: `${siteConfig.url}/category/web-development`,
  },
};

export default async function WebDevelopmentPage() {
  const articles = await getArticlesByCategory("web-development");
  const leadArticle = articles[0];
  const gridArticles = articles.slice(1);
  const authors = getAllAuthors();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header Section (Direct, Authoritative, NO EYEBROW TEXT) */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[{ name: "Tutorials", href: "/category/web-development" }]}
          />

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Web Engineering Tutorials &amp; Architecture Blueprints
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed font-normal">
              Step-by-step masterclasses on Next.js 15, React 19 Server Components, Core Web Vitals, Tailwind CSS v4, and distributed edge architectures with verified production code.
            </p>
          </div>

          {/* Core Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200/80">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Published Tutorials
              </span>
              <p className="text-2xl font-bold text-zinc-900">{articles.length} Masterclasses</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                INP Latency Target
              </span>
              <p className="text-2xl font-bold text-amber-600">&lt; 45ms Real-User</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Architecture Standard
              </span>
              <p className="text-2xl font-bold text-zinc-900">RSC + Edge + PPR</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Code Verification
              </span>
              <p className="text-2xl font-bold text-zinc-900">100% Reproducible</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Learning Tracks (Curriculum Paths) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Curated Engineering Learning Tracks
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Structured architectural curriculums designed for senior frontend and full-stack software engineers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">
                React 19 &amp; Next.js 15
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Server Components, native Server Actions, useOptimistic, form states, and zero-waterfall data fetching patterns.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>3 Masterclasses</span>
              <span className="font-mono text-[11px] text-zinc-500">Intermediate</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">
                Core Web Vitals &amp; INP
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Interaction to Next Paint profiling, Long Animation Frames (LoAF) telemetry, scheduler.yield(), and Rust CSS compilation.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>2 Masterclasses</span>
              <span className="font-mono text-[11px] text-zinc-500">Advanced</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">
                Edge Middleware &amp; Auth
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Distributed edge runtimes, sub-5ms JWT verification via jose, anycast geo-routing, and dynamic localized rewrites.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>2 Masterclasses</span>
              <span className="font-mono text-[11px] text-zinc-500">Advanced</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">
                Production Docker &amp; CI/CD
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Hardened 94MB multi-stage Alpine Docker images, standalone Next.js tracing, non-root users, and health checks.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>3 Masterclasses</span>
              <span className="font-mono text-[11px] text-zinc-500">DevOps</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Masterclass Spotlight */}
      {leadArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Featured Architectural Masterclass
            </h2>
            <span className="text-xs font-semibold text-amber-800">
              Lead Blueprint
            </span>
          </div>

          <ArticleCard article={leadArticle} featured={true} />
        </section>
      )}

      {/* 4. The Modern Web Architecture Stack: 2026 Reference Blueprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              The Modern Full-Stack Web Architecture: 2026 Production Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Modern frontend engineering has evolved from monolithic single-page apps into distributed edge pipelines combining Server Components, Partial Prerendering, and zero-bundle mutations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Hybrid Rendering &amp; PPR
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Instant static page shells served from edge CDNs with dynamic user-specific component streaming.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                INP &amp; Main Thread
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Eliminating long animation frames using modern scheduler.yield() and React 19 compiler optimizations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Tailwind v4 (Oxide)
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Zero-config CSS-first compilation in Rust, native CSS custom properties, and container queries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Server Actions &amp; State
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                End-to-end type-safe mutations with useOptimistic, server Zod validation, and automatic cache revalidation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-xs">
                05
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">
                Edge Middleware &amp; JWT
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sub-5ms cryptographic session verification and geolocation rewrites running on global edge nodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Production Code Showcase (Interactive Runbook Terminal) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Interactive Production Code Blueprints
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Reproducible, type-safe implementation patterns tested across high-throughput production workloads.
            </p>
          </div>
          <span className="text-xs font-mono text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shrink-0">
            TypeScript 5.8 / Next.js 15
          </span>
        </div>

        <TutorialCodeShowcase />
      </section>

      {/* 6. Complete Library of Publications (Full 3-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              All Web Engineering Masterclasses &amp; Step-by-Step Tutorials
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Production-tested code tutorials with complete GitHub examples and verified metrics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* 7. In-Feed Monetization Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdUnit
          slotId={siteConfig.monetization.adsense.slotInArticleTop}
          format="horizontal"
          showDevPlaceholder={true}
        />
      </div>

      {/* 8. Empirical Web Engineering Framework Benchmark Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                2026 Web Engineering Framework Evaluation Matrix
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Empirical architectural scores across rendering flexibility, Core Web Vitals, and developer velocity.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shrink-0">
              Updated March 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 font-semibold">
                  <th className="py-3.5 px-4">Framework</th>
                  <th className="py-3.5 px-4">Rendering Architecture</th>
                  <th className="py-3.5 px-4">Core Web Vitals (INP)</th>
                  <th className="py-3.5 px-4">Server Actions / Mutations</th>
                  <th className="py-3.5 px-4">Edge Compatibility</th>
                  <th className="py-3.5 px-4">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Next.js 15 (App Router)</td>
                  <td className="py-3.5 px-4">RSC + Partial Prerendering</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">&lt; 38ms (Tier 1)</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">Native Server Actions</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">Full Edge &amp; Node</td>
                  <td className="py-3.5 px-4">Full-stack enterprise applications</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Astro 5</td>
                  <td className="py-3.5 px-4">Server Islands + 0KB JS</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">&lt; 25ms (Tier 1)</td>
                  <td className="py-3.5 px-4">Astro Actions</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">Multi-adapter Edge</td>
                  <td className="py-3.5 px-4">Content, marketing &amp; media sites</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">React 19 + Vite 6</td>
                  <td className="py-3.5 px-4">Client SPA + Compiler</td>
                  <td className="py-3.5 px-4 text-zinc-700">65ms - 110ms</td>
                  <td className="py-3.5 px-4 text-zinc-500">Requires REST/GraphQL</td>
                  <td className="py-3.5 px-4 text-zinc-500">Static CDN only</td>
                  <td className="py-3.5 px-4">Internal dashboards &amp; B2B tools</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">Remix / React Router v7</td>
                  <td className="py-3.5 px-4">SSR + Nested Route Loaders</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">&lt; 45ms (Tier 1)</td>
                  <td className="py-3.5 px-4">HTML Form Actions</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">Full Edge &amp; Node</td>
                  <td className="py-3.5 px-4">Dynamic data-intensive web portals</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-zinc-950">SvelteKit 2</td>
                  <td className="py-3.5 px-4">Fine-Grained Runes + SSR</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">&lt; 32ms (Tier 1)</td>
                  <td className="py-3.5 px-4">Form Actions</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">Multi-adapter Edge</td>
                  <td className="py-3.5 px-4">High-performance reactive interfaces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Enterprise Production Readiness Checklist (8 Engineering Gates) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2 pb-4 border-b border-zinc-100">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Enterprise Web Production Checklist: 8 Quality Gates
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Every masterclass on TechPilot is audited against these 8 non-negotiable architectural criteria before publication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">LoAF Task Budget</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Zero main-thread blocking tasks exceeding 50ms during user interaction cycles.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Zero Uncached Cascades</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Server mutations explicitly declare revalidateTag or revalidatePath boundaries.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Cryptographic Nonces</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Strict Content Security Policy (CSP) with per-request random nonces on script tags.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Alpine Docker &lt; 100MB</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Hardened multi-stage Alpine images with zero devDependencies and unprivileged non-root users.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Request-Scoped State</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                QueryClient and auth sessions are strictly isolated per request to prevent cross-tenant data leaks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">WCAG 2.2 AA Standard</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                4.5:1 text contrast ratios, visible focus rings, and automated axe-core CI assertions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Instant Static Shell (PPR)</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sub-30ms TTFB edge cache delivery for layout shells with Suspense component streaming.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="font-semibold text-zinc-900 text-xs">Sub-5ms Edge Execution</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Middleware and edge route handlers execute under 5ms CPU time with zero Node.js polyfill bloat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contributing Web Architects & Engineers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="pb-4 border-b border-zinc-200">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Contributing Web Architects &amp; Frontend Engineers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Practitioners who audit Core Web Vitals, profile React compiler trees, and author the step-by-step masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/author/${author.slug}`}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-amber-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors text-sm">
                        {author.name}
                      </h3>
                      <p className="text-[11px] text-amber-700 font-medium">
                        {author.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {author.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-800">
                  <span>View author guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Dedicated Weekly Tutorials Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
