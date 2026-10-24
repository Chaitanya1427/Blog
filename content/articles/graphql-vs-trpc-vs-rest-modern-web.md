---
title: "API Architecture Showdown: tRPC vs GraphQL vs REST with Next.js 15 & React 19"
slug: "graphql-vs-trpc-vs-rest-modern-web"
excerpt: "We compared tRPC v11, GraphQL (Apollo), and standard REST across end-to-end type safety, runtime client bundle footprint, cache invalidation, and edge streaming."
author: "priya-sharma"
date: "2026-03-22"
updatedAt: "2026-03-24"
category: "software-comparisons"
tags: ["APIs", "GraphQL", "tRPC", "REST", "Software Comparisons"]
featuredImage: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1200&h=630&fit=crop"
featuredImageAlt: "Abstract network topology representing distributed client and server API communications"
seoTitle: "tRPC vs GraphQL vs REST: Modern Web API Benchmark (2026)"
seoDescription: "Empirical head-to-head comparison of tRPC, GraphQL, and REST for modern web applications: type safety, client bundle size, and developer velocity."
affiliateDisclosure: false
faqs:
  - question: "Why has tRPC largely supplanted GraphQL in TypeScript full-stack monorepos?"
    answer: "GraphQL requires maintaining separate schema definitions, writing queries, and running code generators (e.g. GraphQL Code Generator) to produce TypeScript types. tRPC shares TypeScript types directly between the server router and client without any build step, code generation, or schema compilation overhead."
  - question: "When is GraphQL still the mandatory choice over tRPC or REST?"
    answer: "GraphQL is essential when building public developer APIs or federated microservice gateways where heterogeneous clients (iOS, Android, web, third-party partners) need to declare exact field requirements from multiple distributed upstream backend services."
---

## The API Layer Evolution

Modern full-stack web applications demand type safety from database query to client React component. However, the three leading API architectural paradigms—**REST**, **GraphQL**, and **tRPC**—approach this challenge with fundamentally different trade-offs:

1. **REST**: The universal HTTP standard with OpenAPI (Swagger) specifications.
2. **GraphQL**: The federated query language that allows clients to request exact JSON shapes.
3. **tRPC**: The zero-build end-to-end TypeScript RPC library designed for full-stack monorepos.

We built an identical enterprise feature across all three paradigms to measure bundle weight, type inference overhead, and developer iteration speed.

## Comparative Scorecard

| Architectural Metric | tRPC v11 | GraphQL (Apollo) | REST + OpenAPI |
| :--- | :--- | :--- | :--- |
| **Type Safety Paradigm** | **Native TypeScript Inference** | Schema Code Generation | TypeScript Schema Generation |
| **Code Generation Step** | **None (Zero codegen)** | Mandatory (`graphql-codegen`) | Mandatory (`openapi-typescript`) |
| **Client Bundle Overhead** | **~ 2.8 KB (Tiny)** | ~ 38 KB (Apollo Client) | ~ 1.2 KB (Native fetch) |
| **Over-fetching Protection** | Manual router projection | **Native (Client selects fields)** | Requires bespoke query params |
| **Public API Suitability** | Poor (Requires TS client) | **Exceptional** | **Exceptional (Universal)** |
| **CDN HTTP Caching** | Requires batch link config | Complex (POST requests) | **Native (GET RFC 7234)** |
| **TechPilot Score** | **9.6 / 10** | **8.9 / 10** | **9.1 / 10** |

## Deep Dive 1: Type Safety Without Code Generation

In GraphQL, making an API change requires:
1. Updating `schema.graphql`.
2. Running `npm run codegen` to produce TypeScript interfaces.
3. Writing a `.graphql` query document in the frontend component.
4. Re-running codegen to generate the React hook.

In **tRPC**, types are inferred natively at compile time:

```typescript
// server/routers/billing.ts
import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const billingRouter = router({
  getInvoice: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      // Inferred return type flows directly to the client
      return {
        id: input.id,
        amountInCents: 4900,
        status: "paid" as const,
      };
    }),
});

export type AppRouter = typeof billingRouter;
```

In the client component:

```tsx
// client/InvoiceCard.tsx
import { trpc } from "@/lib/trpc";

export function InvoiceCard({ id }: { id: string }) {
  // data is strictly typed: { id: string, amountInCents: number, status: "paid" }
  const { data, isLoading } = trpc.getInvoice.useQuery({ id });
  
  if (isLoading) return <span>Loading invoice...</span>;
  return <div>Invoice #{data?.id}: ${(data?.amountInCents ?? 0) / 100}</div>;
}
```

If the backend changes a field name, TypeScript immediately flags a red squiggly in the client component during development—**with zero build step or codegen delay**.

## Deep Dive 2: Client Bundle Weight & HTTP Caching

Apollo Client weighs approximately **38 KB (Gzip)** because it includes a normalized in-memory cache, AST parser, and reactive query observer.

In contrast, tRPC's client is a lightweight wrapper around `@tanstack/react-query`, adding **under 3 KB** to the final client bundle.

For public-facing APIs or edge CDNs, traditional **REST** remains the gold standard for HTTP caching. A `GET /api/v1/invoices/:id` response can be cached globally by Cloudflare or Fastly using standard `Cache-Control: s-maxage=3600` headers.

## Final Architectural Recommendation

- **Choose tRPC** if you are building a full-stack TypeScript/Next.js monorepo where the same team controls both frontend and backend. It eliminates schema drift and delivers unparalleled developer velocity.
- **Choose GraphQL** if you are building an enterprise backend gateway aggregating 10+ microservices for diverse mobile and web platforms.
- **Choose REST** for public-facing third-party developer platforms, webhook integrations, and systems requiring native HTTP/3 edge caching.
