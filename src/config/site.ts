import { SiteConfig, Author, Category } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "TechPilot",
  tagline: "Engineering Insights, AI Tools & Modern Web Architecture",
  description:
    "TechPilot is an independent engineering publication providing rigorous benchmarks, software tutorials, AI coding workflows, cloud deployment guides, and in-depth software comparisons.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://techpilot.dev",
  ogImage: "/images/og-default.png",
  locale: "en_US",
  publisher: {
    name: "TechPilot Media",
    logo: "/images/logo.svg",
    description: "Independent technology publishing and software architecture insights.",
    addressCountry: "India & Global",
  },
  navigation: {
    main: [
      { title: "AI Tools", href: "/category/ai-tools" },
      { title: "AI Coding", href: "/category/ai-coding" },
      { title: "Tutorials", href: "/category/web-development" },
      { title: "Software Reviews", href: "/category/software-reviews" },
      { title: "Comparisons", href: "/category/software-comparisons" },
      { title: "About", href: "/about" },
    ],
    footer: {
      topics: [
        { title: "AI Tools", href: "/category/ai-tools" },
        { title: "AI Coding & Agents", href: "/category/ai-coding" },
        { title: "Web Development", href: "/category/web-development" },
        { title: "Hosting & Deployment", href: "/category/hosting-and-deployment" },
        { title: "Software Reviews", href: "/category/software-reviews" },
        { title: "Software Comparisons", href: "/category/software-comparisons" },
      ],
      company: [
        { title: "About Us", href: "/about" },
        { title: "Contact & Partnerships", href: "/contact" },
        { title: "Editorial Policy", href: "/editorial-policy" },
        { title: "Media Kit & Sponsorships", href: "/media-kit" },
      ],
      legal: [
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      ],
    },
  },
  social: {
    twitter: "https://x.com/techpilotdev",
    github: "https://github.com/techpilot",
    linkedin: "https://linkedin.com/company/techpilot",
    youtube: "https://youtube.com/@techpilot",
  },
  monetization: {
    adsense: {
      enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true",
      clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-0000000000000000",
      slotInArticleTop: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || "",
      slotInArticleBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM || "",
      slotSidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || "",
    },
    affiliate: {
      enabled: true,
      defaultDisclosure:
        "Disclosure: When you purchase software through our links, we may earn an affiliate commission at no extra cost to you. We only recommend tools our engineering team has thoroughly tested.",
    },
  },
  newsletter: {
    enabled: true,
    provider: (process.env.NEWSLETTER_PROVIDER as "unconfigured" | "mailchimp" | "convertkit" | "custom") || "unconfigured",
    endpoint: process.env.NEWSLETTER_API_URL,
  },
};

export const authors: Record<string, Author> = {
  "roshan-kumar": {
    name: "Roshan Kumar",
    slug: "roshan-kumar",
    title: "Lead Cloud Architect & AI Systems Researcher",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=face",
    bio: "Roshan specializes in distributed cloud architecture, autonomous coding systems, and enterprise full-stack development across global and Indian tech ecosystems.",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  "editorial-team": {
    name: "TechPilot Editorial Team",
    slug: "editorial-team",
    title: "Technical Editors & Benchmark Analysts",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=160&h=160&fit=crop&crop=face",
    bio: "The TechPilot editorial team conducts empirical benchmarks, reproducible code tests, and rigorous software evaluations across modern web frameworks.",
    twitter: "https://x.com",
    github: "https://github.com",
  },
  "priya-sharma": {
    name: "Priya Sharma",
    slug: "priya-sharma",
    title: "Principal Distributed Systems Engineer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=face",
    bio: "Priya specializes in PostgreSQL internals, distributed caching, vector embeddings, and zero-downtime database scaling at enterprise scale.",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  "marcus-vance": {
    name: "Marcus Vance",
    slug: "marcus-vance",
    title: "Staff DevOps & Cloud Security Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face",
    bio: "Marcus designs multi-cloud Kubernetes clusters, automated CI/CD security pipelines, and high-performance reverse proxies across AWS, GCP, and self-hosted bare metal.",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

export const categories: Record<string, Category> = {
  "ai-tools": {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Curated analysis, evaluations, and practical workflows for the newest generation of generative AI and developer utilities.",
    longDescription:
      "Explore unbiased breakdowns of artificial intelligence tools for programmers, product teams, and technical writers. We analyze API latency, model reasoning capabilities, pricing, and enterprise security.",
  },
  "ai-coding": {
    slug: "ai-coding",
    name: "AI Coding",
    description: "Deep-dives into AI-assisted programming, pair-programming agents, context engineering, and autonomous software workflows.",
    longDescription:
      "Practical guides on orchestrating AI coding assistants, fine-tuning coding agents, context management, test generation, and shipping reliable code faster without sacrificing software craftsmanship.",
  },
  "web-development": {
    slug: "web-development",
    name: "Web Development",
    description: "Modern JavaScript, TypeScript, Next.js App Router, React 19 architecture, and frontend performance optimizations.",
    longDescription:
      "Modern full-stack tutorials, React 19 patterns, state management strategies, server components, and Core Web Vitals optimization techniques for production-grade websites.",
  },
  "hosting-and-deployment": {
    slug: "hosting-and-deployment",
    name: "Hosting & Deployment",
    description: "Production infrastructure guides, Docker containers, zero-downtime CI/CD pipelines, Vercel, AWS, and cost-effective VPS deployments.",
    longDescription:
      "Learn how to ship scalable web applications with zero downtime. We cover Vercel edge functions, self-hosted Docker clusters, reverse proxies, and continuous delivery pipelines.",
  },
  "databases-and-backend": {
    slug: "databases-and-backend",
    name: "Databases & Backend",
    description: "PostgreSQL, Supabase, Redis caching, vector databases, authentication systems, and serverless backends.",
    longDescription:
      "Architectural patterns for resilient databases, connection pooling, indexing, vector search embeddings, real-time sync, and security rules.",
  },
  "software-reviews": {
    slug: "software-reviews",
    name: "Software Reviews",
    description: "Hands-on, empirically tested reviews of developer developer tools, IDEs, monitoring services, and SaaS platforms.",
    longDescription:
      "In-depth, hands-on reviews of modern developer tooling. Every review evaluates setup friction, performance impact, developer ergonomics, and pricing fairness.",
  },
  "software-comparisons": {
    slug: "software-comparisons",
    name: "Software Comparisons",
    description: "Side-by-side head-to-head comparisons to help you select the optimal tech stack for your engineering needs.",
    longDescription:
      "Objective, feature-by-feature comparisons of competing libraries, frameworks, and SaaS products with clear decision matrices and migration trade-offs.",
  },
  "automation-and-productivity": {
    slug: "automation-and-productivity",
    name: "Automation & Productivity",
    description: "CLI scripts, GitHub Actions, workflow automation, and productivity systems for modern engineers.",
    longDescription:
      "Streamline repetitive engineering overhead with automated testing pipelines, webhook integrations, cron jobs, and developer terminal ergonomics.",
  },
};
