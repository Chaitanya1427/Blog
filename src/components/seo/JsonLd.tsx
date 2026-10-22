import { Article } from "@/types/content";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.publisher.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.publisher.logo),
    description: siteConfig.publisher.description,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const articleUrl = absoluteUrl(`/blog/${article.slug}`);
  const authorUrl = absoluteUrl(`/author/${article.author.slug}`);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    image: [article.featuredImage],
    datePublished: new Date(article.date).toISOString(),
    dateModified: article.updatedAt
      ? new Date(article.updatedAt).toISOString()
      : new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.title,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.publisher.logo),
      },
    },
    articleSection: article.category.name,
    keywords: article.tags.join(", "),
    wordCount: article.wordCount,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
