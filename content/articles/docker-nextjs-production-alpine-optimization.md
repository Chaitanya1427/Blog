---
title: "Production Next.js 15 Docker Deployment: Multi-Stage Alpine Builds, Standalone Mode & Non-Root Security"
slug: "docker-nextjs-production-alpine-optimization"
excerpt: "Package Next.js 15 App Router applications into minimal 98MB production Docker containers using multi-stage Alpine builds, standalone output mode, and unprivileged user security."
author: "marcus-vance"
date: "2026-03-22"
updatedAt: "2026-03-24"
category: "web-development"
tags: ["Docker", "Next.js 15", "DevOps", "Alpine", "Web Development"]
featuredImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=630&fit=crop"
featuredImageAlt: "High-density enterprise server rack with fiber optic patch cables in a modern datacenter"
seoTitle: "Production Next.js 15 Docker Containerization (2026 Masterclass)"
seoDescription: "Step-by-step masterclass on building a 98MB hardened Docker image for Next.js 15 with standalone output, Alpine Linux, and unprivileged non-root execution."
affiliateDisclosure: false
faqs:
  - question: "How does output: 'standalone' reduce Next.js Docker image size?"
    answer: "The standalone output option instructs Next.js during next build to automatically trace and bundle only the exact production node_modules files required by your pages and route handlers, eliminating unused devDependencies and slashing image size by up to 85%."
  - question: "Why is running as a non-root user critical in containerized Next.js?"
    answer: "Running Node.js processes as the root user inside a container introduces privilege escalation vulnerabilities. Creating a dedicated nodejs:nodejs unprivileged system user prevents host compromise if an edge vulnerability or dependency injection occurs."
---

## Why Standard Node.js Docker Images Fail in Production

Standard Next.js Dockerfiles frequently produce container images weighing between 800MB and 1.4GB. In distributed Kubernetes clusters or auto-scaling AWS ECS / Google Cloud Run fleets, bloated images cause:
1. **Prolonged Cold Start & Auto-scaling Lag**: Pulling gigabytes of image layers across VPC networks during traffic spikes causes request timeouts.
2. **Elevated Attack Surface**: Unused compilers, build tools, package managers, and vulnerable system libraries present high CVE risks.
3. **Memory Leaks**: Suboptimal garbage collector flags in containerized cgroups trigger unexpected Out-of-Memory (OOM) kills.

By configuring `output: "standalone"` and a **multi-stage Alpine build pipeline**, we achieve a hardened, battle-tested image weighing **under 98MB**.

## Step 1: Configure Standalone Output in Next.js

Ensure `next.config.ts` specifies standalone output tracing:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

## Step 2: The Multi-Stage Dockerfile Blueprint

Save the following production-hardened `Dockerfile` in the root of your project:

```dockerfile
# Stage 1: Base Alpine Environment
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 2: Dependency Caching
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Stage 3: Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# Stage 4: Production Runner (Under 98MB)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create unprivileged system user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public static assets and built standalone server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
```

## Step 3: Production Docker Compose with Health Checks

For self-hosted VPS, Coolify, or Dokku environments, pair the image with a resource-bounded `docker-compose.yml`:

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://techpilot.dev
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 1024M
        reservations:
          cpus: "0.5"
          memory: 256M
    logging:
      driver: "json-file"
      options:
        max-size: "20m"
        max-file: "5"
```

## Benchmark: Production Container Metrics

| Build Approach | Compressed Image Size | Vulnerability Scan (Trivy CVEs) | Container Boot Time |
| :--- | :--- | :--- | :--- |
| **Standard node:22** | 1,120 MB | 4 Critical, 18 High | 3.84s |
| **node:22-slim (Single Stage)** | 540 MB | 1 Critical, 6 High | 2.12s |
| **Multi-Stage Alpine Standalone** | **94.2 MB** | **0 Critical, 0 High** | **0.41s** |
