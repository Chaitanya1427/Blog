"use client";

import { useState } from "react";
import { Terminal, Copy, Check, FileCode2, Layers } from "lucide-react";

interface Snippet {
  id: string;
  filename: string;
  language: string;
  tag: string;
  description: string;
  code: string;
}

const SNIPPETS: Snippet[] = [
  {
    id: "action",
    filename: "app/actions/billing.ts",
    language: "typescript",
    tag: "Next.js 15 Server Action",
    description: "Type-safe server mutation with Zod schema validation, optimistic rollback support, and cache tag purging.",
    code: `"use server";

import { z } from "zod";
import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";
import { requireAuthSession } from "@/lib/auth/dal";

const UpgradePlanSchema = z.object({
  organizationId: z.string().uuid(),
  tier: z.enum(["team", "enterprise"]),
  seats: z.number().int().min(1).max(500),
});

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function upgradeSubscriptionAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const session = await requireAuthSession();
  
  const parsed = UpgradePlanSchema.safeParse({
    organizationId: formData.get("organizationId"),
    tier: formData.get("tier"),
    seats: Number(formData.get("seats")),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validation failed. Verify input fields.",
    };
  }

  try {
    await db.transaction(async (tx) => {
      await tx.subscriptions.update({
        where: { orgId: parsed.data.organizationId },
        data: { tier: parsed.data.tier, seats: parsed.data.seats },
      });
    });

    revalidateTag(\`org-\${parsed.data.organizationId}-billing\`);
    return { success: true, message: "Subscription upgraded successfully." };
  } catch (error) {
    return { success: false, message: "Transaction failed. No charges made." };
  }
}`,
  },
  {
    id: "optimistic",
    filename: "components/OptimisticCounter.tsx",
    language: "tsx",
    tag: "React 19 Hooks",
    description: "Instant client UI updates via useOptimistic coupled with useActionState for zero-latency feedback.",
    code: `"use client";

import { useActionState, useOptimistic, startTransition } from "react";
import { upgradeSubscriptionAction } from "@/app/actions/billing";

interface Props {
  orgId: string;
  initialSeats: number;
}

export function OptimisticSeatsForm({ orgId, initialSeats }: Props) {
  const [state, formAction, isPending] = useActionState(
    upgradeSubscriptionAction,
    { success: false }
  );

  const [optimisticSeats, setOptimisticSeats] = useOptimistic(
    initialSeats,
    (current, update: number) => current + update
  );

  const handleIncrement = (amount: number) => {
    startTransition(async () => {
      setOptimisticSeats(amount);
      const formData = new FormData();
      formData.set("organizationId", orgId);
      formData.set("tier", "enterprise");
      formData.set("seats", String(optimisticSeats + amount));
      await formAction(formData);
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 text-white">
      <div>
        <span className="text-xs text-zinc-400">Allocated Seats</span>
        <p className="text-2xl font-bold font-mono">{optimisticSeats}</p>
      </div>
      <button
        onClick={() => handleIncrement(5)}
        disabled={isPending}
        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold"
      >
        {isPending ? "Syncing..." : "+5 Seats (Optimistic)"}
      </button>
    </div>
  );
}`,
  },
  {
    id: "edge",
    filename: "middleware.ts",
    language: "typescript",
    tag: "Edge Runtime Auth",
    description: "Sub-5ms edge authentication and geolocation rewrites using lightweight jose crypto primitives.",
    code: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.AUTH_JWT_SECRET!);

export const config = {
  matcher: ["/dashboard/:path*", "/api/v1/protected/:path*"],
  runtime: "experimental-edge",
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("tp_session")?.value;

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: ["HS256"],
    });

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", payload.sub as string);
    requestHeaders.set("x-user-role", (payload.role as string) || "member");
    requestHeaders.set("x-geo-country", req.geo?.country || "US");

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (err) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("tp_session");
    return response;
  }
}`,
  },
  {
    id: "docker",
    filename: "Dockerfile",
    language: "dockerfile",
    tag: "Production Container",
    description: "Hardened 94MB multi-stage Alpine build for Next.js 15 standalone output with unprivileged non-root runner.",
    code: `FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=3s --retries=3 \\
  CMD wget --spider http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]`,
  },
];

export function TutorialCodeShowcase() {
  const [activeTab, setActiveTab] = useState<string>(SNIPPETS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-950 rounded-3xl border border-zinc-800 shadow-xl overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-zinc-400 pl-2 border-l border-zinc-800 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            enterprise-reference-blueprint
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {SNIPPETS.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => setActiveTab(snippet.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === snippet.id
                  ? "bg-zinc-800 text-emerald-400 border border-zinc-700/80"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              {snippet.filename.split("/").pop()}
            </button>
          ))}
        </div>
      </div>

      {/* Snippet Context Strip */}
      <div className="px-6 py-3.5 bg-zinc-900/40 border-b border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded font-mono text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
            {activeSnippet.tag}
          </span>
          <span className="text-zinc-400">{activeSnippet.description}</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0 text-xs font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display Body */}
      <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-zinc-200 bg-zinc-950/90 selection:bg-emerald-800 selection:text-white">
        <pre>
          <code>{activeSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
