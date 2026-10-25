"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Layers,
  Flame,
  Award,
} from "lucide-react";

interface StackBattle {
  id: string;
  title: string;
  category: string;
  slug: string;
  winner: string;
  contenderA: {
    name: string;
    score: number;
    metric: string;
    bestFor: string;
  };
  contenderB: {
    name: string;
    score: number;
    metric: string;
    bestFor: string;
  };
  keyTradeoff: string;
  decidingFactor: string;
}

const BATTLES: StackBattle[] = [
  {
    id: "orm",
    title: "Prisma vs Drizzle ORM",
    category: "TypeScript Data Layer",
    slug: "prisma-vs-drizzle-orm-benchmark",
    winner: "Drizzle ORM",
    contenderA: {
      name: "Drizzle ORM",
      score: 9.6,
      metric: "12ms query exec (Zero binary engine)",
      bestFor: "Serverless edge runtimes & pure SQL control",
    },
    contenderB: {
      name: "Prisma ORM",
      score: 8.9,
      metric: "34ms query exec (Rust query engine)",
      bestFor: "Rapid prototyping & complex declarative relations",
    },
    keyTradeoff: "Drizzle offers raw SQL proximity and zero cold starts; Prisma offers automated schema management and declarative relations.",
    decidingFactor: "Serverless cold starts and memory overhead in V8 isolates.",
  },
  {
    id: "baas",
    title: "Supabase vs Firebase",
    category: "BaaS & Cloud Platform",
    slug: "supabase-vs-firebase-2026",
    winner: "Supabase",
    contenderA: {
      name: "Supabase",
      score: 9.5,
      metric: "Open-source Postgres + Row-Level Security",
      bestFor: "Relational data modeling, SQL queries & zero lock-in",
    },
    contenderB: {
      name: "Firebase (Google)",
      score: 8.7,
      metric: "NoSQL Firestore + Proprietary Rules",
      bestFor: "Mobile-first apps & Google Cloud ecosystem sync",
    },
    keyTradeoff: "Supabase delivers full relational SQL power without vendor lock-in; Firebase excels at document NoSQL mobile push notifications.",
    decidingFactor: "Data portability, SQL standard compliance, and open-source self-hosting.",
  },
  {
    id: "runtimes",
    title: "Bun vs Node.js vs Deno",
    category: "JavaScript Server Runtimes",
    slug: "bun-vs-node-vs-deno-runtime-benchmark",
    winner: "Bun (Dev Velocity) / Node.js (Enterprise Stability)",
    contenderA: {
      name: "Bun 1.2",
      score: 9.4,
      metric: "4.8x faster package installs & instant TS runner",
      bestFor: "Local development speed, CLI tools & microservices",
    },
    contenderB: {
      name: "Node.js 22 (LTS)",
      score: 9.2,
      metric: "Rock-solid enterprise ecosystem compatibility",
      bestFor: "Mission-critical production enterprise workloads",
    },
    keyTradeoff: "Bun delivers unmatched local developer speed; Node.js provides a decade of battle-tested ecosystem stability.",
    decidingFactor: "Native TypeScript execution vs enterprise legacy package compatibility.",
  },
  {
    id: "analytics",
    title: "PostgreSQL vs ClickHouse",
    category: "Analytics & Big Data",
    slug: "postgres-vs-clickhouse-realtime-analytics-benchmark",
    winner: "ClickHouse (OLAP) / PostgreSQL (OLTP)",
    contenderA: {
      name: "ClickHouse 24",
      score: 9.5,
      metric: "38ms on 100M rows (15x LZ4 disk compression)",
      bestFor: "Real-time user dashboards, audit logs & telemetry",
    },
    contenderB: {
      name: "PostgreSQL 17",
      score: 9.3,
      metric: "Strict ACID serializable transactions",
      bestFor: "Core transactional data, users, billing & orders",
    },
    keyTradeoff: "ClickHouse accelerates analytical aggregations by 100x; PostgreSQL provides flawless transactional ACID integrity.",
    decidingFactor: "Row-store heap tuples vs vectorized columnar SIMD execution on queries over 10M rows.",
  },
  {
    id: "streaming",
    title: "Apache Kafka vs Redis Streams",
    category: "Event Streaming",
    slug: "kafka-vs-rabbitmq-vs-redis-streams-benchmark",
    winner: "Kafka (Scale) / Redis Streams (Simplicity)",
    contenderA: {
      name: "Apache Kafka",
      score: 9.4,
      metric: "185,000 msgs/sec sequential disk commit log",
      bestFor: "Multi-day historical event replay & high-throughput CDC",
    },
    contenderB: {
      name: "Redis Streams",
      score: 9.3,
      metric: "0.82ms sub-millisecond in-memory latency",
      bestFor: "Low operational overhead & real-time ephemeral streaming",
    },
    keyTradeoff: "Kafka guarantees persistent multi-day event replay at the cost of ops complexity; Redis Streams delivers sub-millisecond latency.",
    decidingFactor: "Historical message retention volume and DevOps operational bandwidth.",
  },
  {
    id: "api",
    title: "tRPC vs GraphQL vs REST",
    category: "API Architecture",
    slug: "graphql-vs-trpc-vs-rest-modern-web",
    winner: "tRPC (TypeScript Monorepos) / REST (Public APIs)",
    contenderA: {
      name: "tRPC v11",
      score: 9.6,
      metric: "Zero-build type safety (2.8 KB client bundle)",
      bestFor: "Full-stack TypeScript monorepos & Next.js apps",
    },
    contenderB: {
      name: "GraphQL / REST",
      score: 9.1,
      metric: "Universal public clients & edge RFC 7234 caching",
      bestFor: "Public developer platforms & cross-platform mobile apps",
    },
    keyTradeoff: "tRPC eliminates API schema drift without code generation; REST and GraphQL support heterogeneous non-TypeScript clients.",
    decidingFactor: "Monorepo ownership vs multi-client public API exposure.",
  },
];

export function StackComparisonMatcher() {
  const [activeBattleId, setActiveBattleId] = useState<string>(BATTLES[0].id);

  const activeBattle =
    BATTLES.find((b) => b.id === activeBattleId) || BATTLES[0];

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-xs overflow-hidden">
      {/* Category Battle Tabs */}
      <div className="border-b border-zinc-200 bg-zinc-50/70 p-4 sm:p-5 flex items-center gap-2 overflow-x-auto">
        {BATTLES.map((battle) => (
          <button
            key={battle.id}
            onClick={() => setActiveBattleId(battle.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeBattleId === battle.id
                ? "bg-zinc-900 text-white shadow-xs"
                : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80"
            }`}
          >
            <span>{battle.title}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                activeBattleId === battle.id
                  ? "bg-amber-500/20 text-amber-300"
                  : "bg-zinc-100 text-zinc-600"
              }`}
            >
              {battle.category.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Main Face-Off Content */}
      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                Architectural Showdown
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {activeBattle.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              {activeBattle.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-2xl">
              {activeBattle.keyTradeoff}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-50/80 border border-amber-200 px-4 py-2.5 rounded-2xl shrink-0">
            <Award className="w-4 h-4 text-amber-700 shrink-0" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                Editor Verdict
              </span>
              <span className="text-xs font-semibold text-amber-950">
                {activeBattle.winner}
              </span>
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contender A */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-zinc-950">
                  {activeBattle.contenderA.name}
                </h4>
                <span className="font-mono text-sm font-bold text-amber-700 bg-white px-2.5 py-1 rounded-lg border border-zinc-200">
                  {activeBattle.contenderA.score.toFixed(1)} / 10
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Benchmark Performance
                </span>
                <p className="text-sm font-semibold font-mono text-zinc-900">
                  {activeBattle.contenderA.metric}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                When to Choose
              </span>
              <p className="text-xs text-zinc-700 leading-relaxed">
                {activeBattle.contenderA.bestFor}
              </p>
            </div>
          </div>

          {/* Contender B */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-zinc-950">
                  {activeBattle.contenderB.name}
                </h4>
                <span className="font-mono text-sm font-bold text-amber-700 bg-white px-2.5 py-1 rounded-lg border border-zinc-200">
                  {activeBattle.contenderB.score.toFixed(1)} / 10
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Benchmark Performance
                </span>
                <p className="text-sm font-semibold font-mono text-zinc-900">
                  {activeBattle.contenderB.metric}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                When to Choose
              </span>
              <p className="text-xs text-zinc-700 leading-relaxed">
                {activeBattle.contenderB.bestFor}
              </p>
            </div>
          </div>
        </div>

        {/* The Deciding Factor Strip */}
        <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="text-zinc-600">
              <strong className="text-zinc-900 font-semibold">Deciding Factor:</strong>{" "}
              {activeBattle.decidingFactor}
            </span>
          </div>
          <Link
            href={`/blog/${activeBattle.slug}`}
            className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800 transition-colors shrink-0 group"
          >
            <span>Read complete benchmark audit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
