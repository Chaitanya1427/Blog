import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { BookCheck, Code2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy & AI Guidelines",
  description: `The editorial standards, code testing benchmarks, and responsible AI usage principles followed by ${siteConfig.name}.`,
  alternates: {
    canonical: absoluteUrl("/editorial-policy"),
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs items={[{ name: "Editorial Policy", href: "/editorial-policy" }]} />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
          Editorial Policy & Testing Standards
        </h1>
        <p className="text-sm text-zinc-600">
          How we research, write, verify code, and use AI responsibly to create world-class engineering journalism.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
        <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
          <Code2 className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-sm text-zinc-900">Every Snippet Tested</h3>
          <p className="text-xs text-zinc-600">
            All code blocks in tutorials are compiled and executed in real environments before publication.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
          <Cpu className="w-5 h-5 text-teal-600" />
          <h3 className="font-semibold text-sm text-zinc-900">Responsible AI Use</h3>
          <p className="text-xs text-zinc-600">
            AI assists our research and drafting, but human engineers direct, edit, verify, and stand behind every word.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
          <BookCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-sm text-zinc-900">Continuous Corrections</h3>
          <p className="text-xs text-zinc-600">
            When APIs change or errors are reported, we issue transparent timestamped updates rather than silent edits.
          </p>
        </div>
      </div>

      <div className="prose prose-zinc prose-headings:text-zinc-900 prose-p:text-zinc-700 max-w-none text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2>1. Practical, Reproducible Engineering</h2>
          <p>
            {siteConfig.name} was established on a simple conviction: technology writing should be authored by engineers who actively build software.
          </p>
          <p>
            We do not accept press releases as fact. When evaluating developer tools or databases, we build actual repositories, measure round-trip network latency, observe cold-start behaviors, and examine package sizes.
          </p>
        </section>

        <section>
          <h2>2. Responsible AI Integration Workflow</h2>
          <p>
            We utilize artificial intelligence to accelerate research, explore alternative explanations, and proofread content. However, we follow strict rules:
          </p>
          <ul>
            <li><strong>No Unreviewed AI Content:</strong> No automated system is permitted to publish directly without human engineering sign-off.</li>
            <li><strong>No Fabricated Experience:</strong> We never generate false benchmarks, fake user sentiment, or fictitious case studies.</li>
            <li><strong>Original Synthesis:</strong> We do not summarize or rewrite competitor articles. Every article must contribute genuine technical perspective or original benchmark data.</li>
          </ul>
        </section>

        <section>
          <h2>3. Corrections & Significant Updates</h2>
          <p>
            If a software update alters a tutorial&apos;s behavior, we update the article and record the last significant modification date in the article header. Minor grammatical corrections do not trigger date changes.
          </p>
        </section>
      </div>
    </div>
  );
}
