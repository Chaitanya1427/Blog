"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Zap,
  Cpu,
  ShieldCheck,
  Scale,
  ArrowRight,
  Sparkles,
  BarChart3,
  Layers,
} from "lucide-react";

interface ToolEvaluation {
  id: string;
  name: string;
  category: string;
  verdict: "Editor's Choice" | "Recommended" | "Conditional";
  score: number;
  slug: string;
  testedVersion: string;
  metrics: {
    label: string;
    value: string;
    baseline: string;
  }[];
  pillars: {
    name: string;
    score: number;
    detail: string;
  }[];
  keyTakeaway: string;
}

const EVALUATIONS: ToolEvaluation[] = [
  {
    id: "ghostty",
    name: "Ghostty vs Modern Terminals",
    category: "Developer Terminals",
    verdict: "Editor's Choice",
    score: 9.6,
    slug: "warp-vs-ghostty-vs-alacritty-terminal-review",
    testedVersion: "Ghostty 1.0 (Zig) vs Warp vs Alacritty",
    metrics: [
      { label: "Input Latency", value: "1.8 ms", baseline: "16.2 ms (Electron)" },
      { label: "Idle RAM (RSS)", value: "34 MB", baseline: "185 MB (Warp)" },
      { label: "1M Log Lines Render", value: "1.82 s", baseline: "4.12 s (Warp)" },
    ],
    pillars: [
      { name: "Performance & FPS", score: 9.9, detail: "Hardware-accelerated OpenGL/Metal with sub-frame input response." },
      { name: "Developer Ergonomics", score: 9.5, detail: "Native macOS Cocoa & Linux GTK integration with zero cross-platform jank." },
      { name: "Privacy & Telemetry", score: 9.8, detail: "100% offline, zero mandatory cloud account or telemetry tracking." },
    ],
    keyTakeaway: "Combines the raw sub-2ms speed of Alacritty with native platform polish and native window tabs.",
  },
  {
    id: "biome",
    name: "Biome vs ESLint + Prettier",
    category: "Linter & Formatter",
    verdict: "Editor's Choice",
    score: 9.5,
    slug: "biome-vs-eslint-prettier-toolchain-review",
    testedVersion: "Biome 1.9 (Rust) vs ESLint 9 + Prettier 3",
    metrics: [
      { label: "450k LOC Cold Check", value: "1.94 s", baseline: "48.2 s (ESLint)" },
      { label: "Pre-commit Hook Lag", value: "0.12 s", baseline: "3.4 s (Prettier)" },
      { label: "Memory Footprint", value: "86 MB", baseline: "1,420 MB (Node.js)" },
    ],
    pillars: [
      { name: "CI Pipeline Speed", score: 9.9, detail: "25x faster execution across monorepos via parallel Rayon Rust threads." },
      { name: "Config Simplicity", score: 9.6, detail: "Single biome.json replaces 4 separate fragile configuration files." },
      { name: "Formatting Parity", score: 9.4, detail: "97% identical output to Prettier without plugin conflicts." },
    ],
    keyTakeaway: "Drastically eliminates monorepo CI bottlenecks and ends ESLint/Prettier configuration drift.",
  },
  {
    id: "bruno",
    name: "Bruno vs Postman",
    category: "API Testing Clients",
    verdict: "Editor's Choice",
    score: 9.6,
    slug: "postman-vs-bruno-vs-insomnia-api-client-review",
    testedVersion: "Bruno 1.38 vs Postman Enterprise",
    metrics: [
      { label: "Data Storage", value: "Plain Text (.bru)", baseline: "Proprietary Cloud" },
      { label: "Mandatory Cloud Login", value: "Zero (Offline)", baseline: "Required in Postman" },
      { label: "CI Runner Cost", value: "Free Open-Source", baseline: "$49/seat Add-on" },
    ],
    pillars: [
      { name: "Git Native Workflow", score: 9.8, detail: "Collections live in the repo; reviewed and merged via standard PRs." },
      { name: "Secrets Security", score: 9.9, detail: "Local gitignored .env keeps API keys off external third-party servers." },
      { name: "Automation & CLI", score: 9.4, detail: "Lightweight @usebruno/cli runs seamlessly in GitHub Actions." },
    ],
    keyTakeaway: "Restores developer autonomy by storing collections directly in Git with zero cloud leaks.",
  },
  {
    id: "orbstack",
    name: "OrbStack vs Docker Desktop",
    category: "Container Virtualization",
    verdict: "Editor's Choice",
    score: 9.5,
    slug: "docker-desktop-vs-orbstack-benchmark",
    testedVersion: "OrbStack 1.7 vs Docker Desktop 4.35",
    metrics: [
      { label: "Idle RAM Usage", value: "380 MB", baseline: "2,840 MB (Docker)" },
      { label: "Cold Engine Boot", value: "1.9 s", baseline: "14.2 s (Docker)" },
      { label: "Battery Drain (8h)", value: "12% Total", baseline: "38% Total" },
    ],
    pillars: [
      { name: "Resource Efficiency", score: 9.8, detail: "Dynamic memory ballooning releases unused RAM back to macOS instantly." },
      { name: "Networking Speed", score: 9.6, detail: "Sub-millisecond bridge ping with native domain resolution." },
      { name: "Drop-in Compatibility", score: 9.5, detail: "100% compatible with existing docker-compose.yml and k8s clusters." },
    ],
    keyTakeaway: "Replaces heavy Docker Desktop VM overhead with lightweight native virtualization on Apple Silicon.",
  },
  {
    id: "neon",
    name: "Neon vs Supabase",
    category: "Serverless PostgreSQL",
    verdict: "Recommended",
    score: 9.4,
    slug: "neon-vs-supabase-serverless-postgres-review",
    testedVersion: "Neon Auto-scaling vs Supabase Pro",
    metrics: [
      { label: "Branch Creation Time", value: "420 ms", baseline: "Schema Sync (~45s)" },
      { label: "Scale-to-Zero Boot", value: "480 ms", baseline: "Always-on Instance" },
      { label: "Concurrent Edge Conn", value: "WebSocket Pool", baseline: "Supavisor (Elixir)" },
    ],
    pillars: [
      { name: "Database Branching", score: 9.8, detail: "Instant copy-on-write storage clones production data for every PR." },
      { name: "Cost Elasticity", score: 9.5, detail: "True serverless pricing scales idle staging databases to exactly $0." },
      { name: "BaaS Breadth", score: 8.8, detail: "Focused strictly on PostgreSQL rather than complete Firebase replacement." },
    ],
    keyTakeaway: "The premier serverless database for teams wanting instant GitHub PR database branches.",
  },
  {
    id: "sentry",
    name: "Sentry vs Axiom vs Baselime",
    category: "Serverless APM & Logs",
    verdict: "Recommended",
    score: 9.3,
    slug: "sentry-vs-baselime-serverless-observability-review",
    testedVersion: "Sentry SDK 8 vs Axiom vs Baselime",
    metrics: [
      { label: "Edge TTFB Overhead", value: "+ 4.2 ms", baseline: "+ 0.8 ms (Baselime)" },
      { label: "Crash Context Depth", value: "DOM Replay + Vars", baseline: "Raw JSON Stack" },
      { label: "Release Triage", value: "Automated Regression", baseline: "Manual Queries" },
    ],
    pillars: [
      { name: "Error Debuggability", score: 9.9, detail: "Unrivaled breadcrumbs and variable state inspection at exception time." },
      { name: "Session Replay", score: 9.6, detail: "Visual replay of user clicks and layout shifts leading up to crashes." },
      { name: "High-Volume Cost", score: 8.4, detail: "Requires disciplined trace sampling to avoid enterprise billing surges." },
    ],
    keyTakeaway: "Unmatched depth for diagnosing hard customer crashes, best paired with Axiom for raw logs.",
  },
];

export function ReviewScorecardExplorer() {
  const [selectedId, setSelectedId] = useState<string>(EVALUATIONS[0].id);

  const activeTool =
    EVALUATIONS.find((t) => t.id === selectedId) || EVALUATIONS[0];

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-xs overflow-hidden">
      {/* Tool Selector Bar */}
      <div className="border-b border-zinc-200 bg-zinc-50/70 p-4 sm:p-5 flex items-center gap-2 overflow-x-auto">
        {EVALUATIONS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedId(tool.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedId === tool.id
                ? "bg-zinc-900 text-white shadow-xs"
                : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80"
            }`}
          >
            <span>{tool.name.split(" vs ")[0]}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                selectedId === tool.id
                  ? "bg-amber-500/20 text-amber-300"
                  : "bg-zinc-100 text-zinc-600"
              }`}
            >
              {tool.score.toFixed(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Main Tool Breakdown */}
      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                {activeTool.verdict}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {activeTool.testedVersion}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              {activeTool.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-2xl">
              {activeTool.keyTakeaway}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 bg-zinc-50 px-5 py-3 rounded-2xl border border-zinc-200">
            <div className="text-right">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 block">
                Overall Score
              </span>
              <span className="text-3xl font-bold font-mono text-amber-700">
                {activeTool.score.toFixed(1)}
              </span>
            </div>
            <span className="text-zinc-400 font-mono text-xs">/ 10.0</span>
          </div>
        </div>

        {/* Empirical Measurements Strip */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
            Verified Empirical Measurements
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeTool.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1"
              >
                <span className="text-xs text-zinc-500 font-medium">
                  {metric.label}
                </span>
                <p className="text-xl font-bold font-mono text-zinc-900">
                  {metric.value}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono">
                  vs {metric.baseline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar Scores */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            Evaluation Pillars Breakdown
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeTool.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-zinc-900 text-sm">
                    {pillar.name}
                  </h5>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {pillar.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link to Full Review */}
        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Read the complete 4,000-word audit with reproducible benchmark scripts.
          </span>
          <Link
            href={`/blog/${activeTool.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group"
          >
            <span>Read full audit &amp; benchmarks</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
