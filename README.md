# TechPilot — Production SEO-First Blogging Platform

TechPilot is an engineering-first, high-performance digital publishing platform built with Next.js (App Router), TypeScript, Tailwind CSS, and a file-based Markdown/MDX content system. 

It is architected for long-term organic search dominance, rapid Core Web Vitals performance, and monetization through Google AdSense, software affiliate partnerships, transparent sponsorships, and newsletter distribution.

---

## Architecture & Core Capabilities

- **Framework**: Next.js 16 with Turbopack, App Router, and TypeScript strict mode.
- **Rendering Model**: Static Site Generation (SSG) and Partial Prerendering (PPR) for instant initial HTML responses without client-side render blocking.
- **Design System**: Tailored light theme aesthetic with clean typography (Inter / Geist), subtle geometric cybernetic hero background, refined header font weights (`font-semibold`), and an optional dark mode toggle with zero layout shift or flash.
- **Content Abstraction**: Fast file-based Markdown/MDX architecture in `content/articles/` with `gray-matter` frontmatter parsing. Easily migratable to a headless CMS (Sanity, Strapi, Supabase) via `src/lib/content.ts`.
- **Draft Protection**: Articles with `draft: true` are automatically excluded from public listings, category archives, search results, and XML sitemaps.
- **SEO System**: Automated dynamic XML sitemap (`/sitemap.xml`), crawl-safe `robots.txt`, dynamic OpenGraph and Twitter cards, canonical link tags, Schema.org JSON-LD structured data (`WebSite`, `Organization`, `BlogPosting`, `BreadcrumbList`, `FAQPage`), and crawlable internal linking.
- **Search Engine**: Full client/server instant search modal (keyboard shortcut `⌘K` / `Ctrl+K`) plus a dedicated search results page (`/search`) with `noindex` directives to conserve crawl budget.
- **Monetization Readiness**:
  - Google AdSense integration with responsive in-article, sidebar, and banner containers with clear "ADVERTISEMENT" labels and a production feature flag.
  - Software affiliate cards, notice banners, and links enforcing `rel="sponsored nofollow noopener"`.
  - Sponsorship & Media Kit pages (`/media-kit`, `/contact`).
- **Trust & Compliance**: Complete editorial policies, FTC/ASA affiliate disclosures, terms of service, and privacy policy templates.

---

## Directory Structure

```text
├── content/
│   └── articles/               # MDX/Markdown article repository
│       ├── top-developer-ai-tools-2026.md
│       ├── build-deploy-nextjs-ai-agents.md
│       ├── supabase-vs-firebase-2026.md
│       ├── zero-downtime-deployment-guide.md
│       ├── cursor-vs-copilot-vs-claude-code.md
│       ├── india-tech-ecosystem-remote-work-2026.md
│       └── upcoming-framework-features.md  (draft: true)
├── public/
│   └── images/
│       ├── hero-bg.jpg         # High-resolution architectural background
│       ├── logo.png            # Publisher logo
│       └── og-default.png      # Default OpenGraph image
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO meta & anti-FOUC script
│   │   ├── page.tsx            # Centered hero homepage with topic sections
│   │   ├── not-found.tsx       # 404 handler with crawlable navigation
│   │   ├── sitemap.ts          # Dynamic XML sitemap generator
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   ├── blog/[slug]/        # Static article page with TOC and JSON-LD
│   │   ├── category/[slug]/    # Category archive pages
│   │   ├── author/[slug]/      # Author profile and articles listing
│   │   ├── tag/[slug]/         # Tag archive pages
│   │   ├── search/             # Dedicated search page with Suspense
│   │   ├── about/              # About us & masthead
│   │   ├── contact/            # Contact desk & partnerships
│   │   ├── privacy-policy/     # Privacy policy template
│   │   ├── terms-of-service/   # Terms of service template
│   │   ├── affiliate-disclosure/ # Commercial affiliate disclosure
│   │   ├── editorial-policy/   # Editorial standards & AI policy
│   │   ├── media-kit/          # Sponsorships & audience media kit
│   │   └── api/
│   │       ├── newsletter/     # Newsletter submission handler
│   │       └── search-index/   # Instant search endpoint
│   ├── components/
│   │   ├── layout/             # Header, Footer, MobileNav, ThemeToggle
│   │   ├── article/            # ArticleCard, ArticleHeader, TOC, AuthorBio, Share
│   │   ├── ads/                # AdSenseScript, AdUnit container
│   │   ├── affiliate/          # AffiliateNotice, AffiliateCard, AffiliateButton
│   │   ├── seo/                # Breadcrumbs, JsonLd schemas
│   │   └── ui/                 # SearchModal, NewsletterForm, Badge, Icons
│   ├── config/
│   │   └── site.ts             # Central site branding, navigation & monetization config
│   ├── lib/
│   │   ├── content.ts          # Content abstraction queries & draft filtering
│   │   ├── markdown.ts         # Heading extraction, TOC generator & marked HTML parser
│   │   └── utils.ts            # Absolute URL builder & date formatters
│   └── types/
│       └── content.ts          # Article, Author, Category, TOC TypeScript models
├── .env.example                # Documented configuration variables
├── .env.local                  # Local development variables
└── README.md
```

---

## Quickstart & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Copy environment variables**:
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run production build**:
   ```bash
   npm run build
   ```

5. **Run production server**:
   ```bash
   npm run start
   ```

6. **Run linter**:
   ```bash
   npm run lint
   ```

---

## How to Publish a New Article

All articles reside in `content/articles/` as Markdown (`.md`) or MDX (`.mdx`) files.

Create a new file, for example: `content/articles/my-new-guide.md`:

```markdown
---
title: "How to Build High-Performance Cloud Pipelines"
slug: "how-to-build-high-performance-cloud-pipelines"
excerpt: "A practical guide to designing low-latency serverless pipelines."
author: "roshan-kumar"
date: "2026-03-22"
updatedAt: "2026-03-25"
category: "hosting-and-deployment"
tags: ["DevOps", "Serverless", "Cloud"]
featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop"
featuredImageAlt: "Modern glowing server racks in enterprise datacenter"
seoTitle: "How to Build High-Performance Cloud Pipelines (2026 Guide)"
seoDescription: "Step-by-step tutorial on building scalable serverless pipelines with TypeScript and AWS."
affiliateDisclosure: false
draft: false
faqs:
  - question: "What is the typical cold start time?"
    answer: "Using ARM64 Graviton instances, cold starts average under 180ms."
---

## Section One: Architecture Overview

Write your content here using standard Markdown syntax.

### Subheading
Code snippets are formatted with syntax highlighting:

\`\`\`typescript
export function processEvent(event: CloudEvent) {
  return { status: "processed" };
}
\`\`\`
```

### Important Article Rules
- **Drafts**: Set `draft: true` while drafting. The article will be excluded from the homepage, categories, search, and `sitemap.xml`. Change to `draft: false` when ready to go live.
- **Unique Slugs**: Keep slugs permanent once published. Do not alter slugs of published articles without creating a 301 redirect in `next.config.ts`.
- **TOC**: The Table of Contents is automatically constructed from `## ` (H2) and `### ` (H3) headings.

---

## Customizing Brand Name, Domain & Social Links

Brand identity is centralized in `src/config/site.ts` and `.env`:

1. **Update Domain**:
   Change `NEXT_PUBLIC_SITE_URL="https://yourdomain.com"` in `.env.local` or your production host settings.
2. **Update Brand Name**:
   Change `name: "YourBrand"` in `src/config/site.ts` or set `NEXT_PUBLIC_SITE_NAME="YourBrand"`.
3. **Update Navigation**:
   Modify `navigation.main` and `navigation.footer` in `src/config/site.ts`.
4. **Update Authors**:
   Edit or add author objects to `authors` in `src/config/site.ts`.
5. **Update Categories**:
   Add or rename topics in `categories` in `src/config/site.ts`.

---

## Google AdSense Setup Guide

AdSense units are built to avoid layout shifts (CLS) and keep ads visually distinct from editorial text.

1. **Apply for Google AdSense**:
   Ensure you have 15-20 original, thoroughly tested articles and your custom domain configured.
2. **Configure Publisher ID**:
   Once approved by Google, update your environment variables:
   ```env
   NEXT_PUBLIC_ADSENSE_ENABLED="true"
   NEXT_PUBLIC_ADSENSE_CLIENT_ID="ca-pub-XXXXXXXXXXXXXXXX"
   NEXT_PUBLIC_ADSENSE_SLOT_TOP="1234567890"
   NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM="0987654321"
   NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR="1122334455"
   ```
3. **Validation**:
   The `AdSenseScript` component automatically loads the official script only when `NEXT_PUBLIC_ADSENSE_ENABLED="true"` and a valid `clientId` is supplied.

---

## Affiliate Marketing Guidelines

For commercial reviews or comparisons:
- Use the `AffiliateCard` component to present structured reviews with pros, cons, pricing, and button.
- Use `AffiliateButton` or Markdown links with query params like `?ref=...`.
- All commercial links automatically receive `rel="sponsored nofollow noopener"` to comply with Google Search and FTC rules.
- Set `affiliateDisclosure: true` in article frontmatter to display the transparent disclosure box above the article.

---

## Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. Set Environment Variables:
   - `NEXT_PUBLIC_SITE_NAME`: `TechPilot`
   - `NEXT_PUBLIC_SITE_URL`: `https://yourdomain.com`
   - `NEXT_PUBLIC_ADSENSE_ENABLED`: `false` (until approved)
5. Click **Deploy**. Vercel will build all static pages and output a zero-downtime deployment.
6. Under **Settings > Domains**, attach your custom domain and add the DNS records (`CNAME` / `A`).

### Deploying to a Linux VPS (Docker / Nginx)
1. Build the production standalone server:
   ```bash
   npm run build
   ```
2. Run via PM2 or Docker:
   ```bash
   pm2 start npm --name "techpilot" -- start -- -p 3000
   ```
3. Configure Nginx reverse proxy with SSL (Let's Encrypt) as documented in `content/articles/zero-downtime-deployment-guide.md`.

---

## Google Search Console Verification

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your domain property (`yourdomain.com`).
3. Verify via DNS TXT record or HTML tag.
4. Navigate to **Sitemaps** in Search Console and submit:
   ```text
   https://yourdomain.com/sitemap.xml
   ```
5. Googlebot will immediately discover all canonical published articles and category archives.
