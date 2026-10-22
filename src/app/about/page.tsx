import type { Metadata } from "next";
import { siteConfig, authors } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Terminal, Award } from "lucide-react";

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
          <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>About {siteConfig.name}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Empirical Engineering & AI Systems Publishing
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          {siteConfig.name} is an independent technology publication founded to provide clear, reproducible software benchmarks, cloud architecture guides, and developer tooling analyses.
        </p>
      </header>

      {/* Core Mission Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">Empirical Testing</h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We do not copy marketing bullets. Every tool reviewed is tested with actual monorepo code, real API latency, and stress workloads.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">Editorial Integrity</h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our editorial opinions are independent. Commercial partnerships and affiliate relationships never influence review verdicts.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">Global & India Context</h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bridging international developer compensation, remote taxation, GCC systems engineering, and global software architecture.
          </p>
        </div>
      </div>

      {/* Editorial Team */}
      <section className="space-y-6 pt-6">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white pb-3 border-b border-zinc-200 dark:border-zinc-800">
          Editorial & Engineering Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {authorList.map((author) => (
            <div
              key={author.slug}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-4"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-zinc-300 dark:border-zinc-700 bg-zinc-200">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  <Link href={`/author/${author.slug}`} className="hover:text-emerald-700 dark:hover:text-emerald-400">
                    {author.name}
                  </Link>
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {author.title}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-1 leading-relaxed">
                  {author.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Contact Banner */}
      <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Have a technical correction or story pitch?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            We welcome constructive peer review and technical benchmarks from engineers.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shrink-0"
        >
          Contact Editorial Desk
        </Link>
      </div>
    </div>
  );
}
