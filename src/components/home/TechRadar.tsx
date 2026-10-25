"use client";

import { useState } from "react";
import Link from "next/link";
import { Radar, CheckCircle2, FlaskConical, Search, AlertCircle, ArrowUpRight } from "lucide-react";

type RadarCategory = "adopt" | "trial" | "assess" | "hold";

interface RadarItem {
  name: string;
  category: string;
  status: RadarCategory;
  summary: string;
  slug?: string;
}

const RADAR_DATA: Record<RadarCategory, { label: string; badgeColor: string; description: string; items: RadarItem[] }> = {
  adopt: {
    label: "Adopt",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    description: "Industry-proven, battle-tested technologies with strong production track records and high developer ergonomics.",
    items: [
      {
        name: "Next.js 15 App Router & PPR",
        category: "Web Framework",
        status: "adopt",
        summary: "Partial Prerendering and async request headers deliver best-in-class Core Web Vitals.",
        slug: "nextjs-15-react-19-compiler-architecture",
      },
      {
        name: "PostgreSQL 17 & pgvector",
        category: "Database & Vector",
        status: "adopt",
        summary: "SIMD vector accelerations and VACUUM overhauls eliminate the need for distinct vector DBs.",
        slug: "postgresql-17-performance-pgvector",
      },
      {
        name: "Tailwind CSS v4 (Oxide)",
        category: "Frontend Tooling",
        status: "adopt",
        summary: "Zero-config CSS-first architecture with 10x Rust build speedup over v3.",
        slug: "tailwind-v4-engine-performance-deep-dive",
      },
      {
        name: "Drizzle ORM",
        category: "TypeScript ORM",
        status: "adopt",
        summary: "Zero-engine TypeScript library ideal for serverless cold-start constraints.",
        slug: "prisma-vs-drizzle-orm-benchmark",
      },
    ],
  },
  trial: {
    label: "Trial",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Technologies ready for production pilot branches with compelling ROI, low operational friction, and high momentum.",
    items: [
      {
        name: "Claude Code CLI Agent",
        category: "AI Tooling",
        status: "trial",
        summary: "Terminal-native multi-file refactoring and automated test healing loops.",
        slug: "autonomous-terminal-coding-claude-code-vs-aider",
      },
      {
        name: "DeepSeek-R1 / Local Ollama",
        category: "AI Infrastructure",
        status: "trial",
        summary: "Air-gapped 32B quantized reasoning models deployed inside private VPCs.",
        slug: "local-llms-ollama-deepseek-production",
      },
      {
        name: "Bun 1.2 Microservices",
        category: "JavaScript Runtime",
        status: "trial",
        summary: "Near-total Node.js API parity with 2x HTTP throughput on high-concurrency endpoints.",
        slug: "bun-vs-node-vs-deno-runtime-benchmark",
      },
      {
        name: "OrbStack macOS Container Engine",
        category: "Developer Ergonomics",
        status: "trial",
        summary: "90% less idle RAM and 6x faster container spin-up compared to Docker Desktop.",
        slug: "docker-desktop-vs-orbstack-benchmark",
      },
    ],
  },
  assess: {
    label: "Assess",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "Promising technologies worth team exploration and benchmark spike projects to understand enterprise trade-offs.",
    items: [
      {
        name: "Dragonfly In-Memory Cache",
        category: "High Concurrency",
        status: "assess",
        summary: "Multi-threaded share-nothing architecture achieving 1M+ ops/sec on single instances.",
        slug: "distributed-caching-redis-vs-dragonfly-vs-momento",
      },
      {
        name: "HashiCorp Nomad Clusters",
        category: "DevOps Orchestration",
        status: "assess",
        summary: "Lightweight single-binary alternative to Kubernetes for medium engineering teams.",
        slug: "kubernetes-vs-nomad-2026",
      },
      {
        name: "Autonomous PR Self-Healing",
        category: "CI/CD Automation",
        status: "assess",
        summary: "AI agents parsing GitHub Actions build logs to commit automated test corrections.",
        slug: "github-actions-ci-cd-enterprise-optimization",
      },
      {
        name: "Merchant of Record (Lemon Squeezy)",
        category: "Fintech Billing",
        status: "assess",
        summary: "Automatic worldwide digital sales tax and VAT filing for early-stage SaaS apps.",
        slug: "stripe-vs-lemon-squeezy-vs-paddle",
      },
    ],
  },
  hold: {
    label: "Hold",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    description: "Approaches and tools showing diminishing returns, excessive maintenance overhead, or high total cost of ownership.",
    items: [
      {
        name: "Unquantized Cloud LLM Calls Without Caching",
        category: "AI Architecture",
        status: "hold",
        summary: "High token costs and latency; transition to prompt caching and semantic response routing.",
      },
      {
        name: "Heavy Rust Query Engines in Serverless",
        category: "Backend",
        status: "hold",
        summary: "Engine binary size triggers 300ms+ cold starts on edge and serverless environments.",
      },
      {
        name: "Over-engineered In-Place K8s Upgrades",
        category: "Infrastructure",
        status: "hold",
        summary: "Blue-green immutable cluster rotations reduce zero-downtime risks significantly.",
      },
      {
        name: "Manual useMemo / useCallback Boilerplate",
        category: "React Architecture",
        status: "hold",
        summary: "React 19 compiler automates memoization; manual hook chains increase maintenance debt.",
      },
    ],
  },
};

export function TechRadar() {
  const [activeTab, setActiveTab] = useState<RadarCategory>("adopt");
  const activeData = RADAR_DATA[activeTab];

  const tabs: { key: RadarCategory; label: string; icon: typeof CheckCircle2 }[] = [
    { key: "adopt", label: "Adopt", icon: CheckCircle2 },
    { key: "trial", label: "Trial", icon: FlaskConical },
    { key: "assess", label: "Assess", icon: Search },
    { key: "hold", label: "Hold", icon: AlertCircle },
  ];

  return (
    <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-zinc-100 gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold mb-2">
            <Radar className="w-3.5 h-3.5" />
            <span>Quarterly Architectural Radar</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            2026 Developer &amp; Tech Stack Radar
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            Empirically scored engineering status for frameworks, AI assistants, databases, and ops tooling.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 border border-zinc-200/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-xs border border-zinc-200"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-600" : "text-zinc-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Description */}
      <div className="mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
        <p className="text-xs sm:text-sm text-zinc-600">
          <strong className="text-zinc-900 font-semibold">{activeData.label} Status:</strong>{" "}
          {activeData.description}
        </p>
      </div>

      {/* Radar Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeData.items.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-amber-300 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${activeData.badgeColor}`}>
                  {item.status}
                </span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors">
                {item.slug ? (
                  <Link href={`/blog/${item.slug}`} className="flex items-center gap-1">
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                  </Link>
                ) : (
                  item.name
                )}
              </h4>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                {item.summary}
              </p>
            </div>

            {item.slug && (
              <div className="pt-3 mt-3 border-t border-zinc-100">
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  Read benchmark breakdown →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
