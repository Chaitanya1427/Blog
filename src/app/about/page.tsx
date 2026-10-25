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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
          <Terminal className="w-3.5 h-3.5 text-amber-600" />
          <span>About {siteConfig.name}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
          Empirical Engineering & AI Systems Publishing
        </h1>

        <p className="text-lg text-zinc-600 leading-relaxed font-normal">
          {siteConfig.name} is an independent technology publication founded to provide clear, reproducible software benchmarks, cloud architecture guides, and developer tooling analyses.
        </p>
      </header>

      {/* Core Mission Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900">Empirical Testing</h3>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            We do not copy marketing bullets. Every tool reviewed is tested with actual monorepo code, real API latency, and stress workloads.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900">Editorial Integrity</h3>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Our editorial opinions are independent. Commercial partnerships and affiliate relationships never influence review verdicts.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center border border-amber-200">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-zinc-900">Global & India Context</h3>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Bridging international developer compensation, remote taxation, GCC systems engineering, and global software architecture.
          </p>
        </div>
      </div>

      {/* Editorial Team */}
      <section className="space-y-6 pt-6">
        <h2 className="text-2xl font-semibold text-zinc-900 pb-3 border-b border-zinc-200">
          Editorial & Engineering Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {authorList.map((author) => (
            <div
              key={author.slug}
              className="p-6 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-2xs"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-zinc-300 bg-zinc-200">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-zinc-900">
                  <Link href={`/author/${author.slug}`} className="hover:text-amber-700">
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
      <div className="p-8 rounded-3xl bg-zinc-100/80 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-zinc-900">
            Have a technical correction or story pitch?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            We welcome constructive peer review and technical benchmarks from engineers.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shrink-0"
        >
          Contact Editorial Desk
        </Link>
      </div>
    </div>
  );
}
