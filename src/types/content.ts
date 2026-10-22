export interface Author {
  name: string;
  slug: string;
  title: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug?: string;
  excerpt: string;
  author: string; // author slug or name
  date: string; // YYYY-MM-DD
  updatedAt?: string; // YYYY-MM-DD
  category: string; // category slug
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  affiliateDisclosure?: boolean;
  affiliateNotice?: string;
  isSponsored?: boolean;
  sponsorName?: string;
  relatedSlugs?: string[];
  faqs?: FAQItem[];
  draft?: boolean;
}

export interface Article extends Omit<ArticleFrontmatter, "author" | "category"> {
  slug: string;
  author: Author;
  category: Category;
  content: string; // Raw markdown/mdx
  htmlContent?: string;
  readingTime: number; // in minutes
  wordCount: number;
  tableOfContents: TableOfContentsItem[];
  draft: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  publisher: {
    name: string;
    logo: string;
    description: string;
    addressCountry: string;
  };
  navigation: {
    main: { title: string; href: string }[];
    footer: {
      topics: { title: string; href: string }[];
      company: { title: string; href: string }[];
      legal: { title: string; href: string }[];
    };
  };
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
  };
  monetization: {
    adsense: {
      enabled: boolean;
      clientId: string; // ca-pub-xxxxxxxxxxxxxxxx
      slotInArticleTop?: string;
      slotInArticleBottom?: string;
      slotSidebar?: string;
    };
    affiliate: {
      enabled: boolean;
      defaultDisclosure: string;
    };
  };
  newsletter: {
    enabled: boolean;
    provider: "unconfigured" | "mailchimp" | "convertkit" | "custom";
    endpoint?: string;
  };
}
