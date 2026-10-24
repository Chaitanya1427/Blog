import Link from "next/link";
import { BookMarked, Sparkles, ArrowRight, Code2, Database, ShieldAlert } from "lucide-react";

export function CuratedPlaybooks() {
  const playbooks = [
    {
      title: "The Agentic Engineering Handbook",
      description: "From IDE autocompletion to headless CI terminal coding agents: patterns, context engineering, and test gates.",
      tag: "5-Part Deep Dive",
      icon: Code2,
      slug: "claude-3-7-vs-gpt-4-5-system-design",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      border: "border-emerald-200/80 hover:border-emerald-400",
    },
    {
      title: "Production Postgres & Vector Scale",
      description: "Mastering query plans, HNSW indexes in pgvector, connection pooling, and multi-tenant RLS policies.",
      tag: "Architectural Blueprint",
      icon: Database,
      slug: "postgresql-17-performance-pgvector",
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      border: "border-blue-200/80 hover:border-blue-400",
    },
    {
      title: "Zero-Downtime Infrastructure Playbook",
      description: "Blue-green releases, edge caching headers, atomic database migrations, and instant automatic rollbacks.",
      tag: "Ops Field Manual",
      icon: ShieldAlert,
      slug: "zero-downtime-deployment-guide",
      gradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
      border: "border-purple-200/80 hover:border-purple-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              Engineering Blueprints &amp; Field Manuals
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Curated architectural series built for leads, staff engineers, and founding teams.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {playbooks.map((pb, idx) => {
          const Icon = pb.icon;
          return (
            <Link
              key={idx}
              href={`/blog/${pb.slug}`}
              className={`p-6 sm:p-7 rounded-3xl bg-white border ${pb.border} bg-gradient-to-b ${pb.gradient} transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-300/60">
                    {pb.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white shadow-2xs border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-emerald-700 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                  {pb.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {pb.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                <span>Start reading playbook</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
