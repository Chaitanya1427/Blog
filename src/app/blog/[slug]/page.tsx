import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/content";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { TableOfContents } from "@/components/article/TableOfContents";
import { AuthorBio } from "@/components/article/AuthorBio";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { ReadingProgress } from "@/components/article/ReadingProgress";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { AffiliateNotice } from "@/components/affiliate/AffiliateNotice";
import { FaqSection } from "@/components/article/FaqSection";
import { AdUnit } from "@/components/ads/AdUnit";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Tag } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  const articles = await getAllArticles(); // Drafts automatically filtered
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.draft) {
    return {
      title: "Article Not Found",
    };
  }

  const pageUrl = absoluteUrl(`/blog/${article.slug}`);
  const canonicalUrl = article.canonicalUrl || pageUrl;
  const pageTitle = article.seoTitle || article.title;
  const pageDesc = article.seoDescription || article.excerpt;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: pageTitle,
      description: pageDesc,
      publishedTime: new Date(article.date).toISOString(),
      modifiedTime: article.updatedAt
        ? new Date(article.updatedAt).toISOString()
        : new Date(article.date).toISOString(),
      authors: [article.author.name],
      section: article.category.name,
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [article.featuredImage],
      creator: article.author.twitter ? `@${article.author.twitter.split("/").pop()}` : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  // If article doesn't exist or is an unauthenticated draft, return 404
  if (!article || article.draft) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(
    article.slug,
    article.category.slug,
    article.tags,
    3
  );

  return (
    <>
      <ReadingProgress />
      <ArticleJsonLd article={article} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content (8 cols on large screens) */}
          <main className="lg:col-span-8 min-w-0">
            <ArticleHeader article={article} />

            {/* Optional Affiliate Disclosure Banner */}
            {article.affiliateDisclosure && (
              <AffiliateNotice customText={article.affiliateNotice} />
            )}

            {/* Main Article Body (Rendered to semantic HTML without client JS requirement) */}
            <div
              className="prose prose-zinc max-w-none text-base sm:text-lg leading-relaxed
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-900
                prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:mb-5 prose-p:leading-relaxed prose-p:text-zinc-700
                prose-li:my-1 prose-li:text-zinc-700
                prose-code:text-emerald-800 prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:border prose-pre:border-zinc-800"
              dangerouslySetInnerHTML={{ __html: article.htmlContent || "" }}
            />

            {/* In-Article Ad Unit */}
            <AdUnit
              slotId={siteConfig.monetization.adsense.slotInArticleBottom}
              format="rectangle"
              showDevPlaceholder={true}
            />

            {/* Optional FAQ Section */}
            {article.faqs && article.faqs.length > 0 && (
              <FaqSection faqs={article.faqs} />
            )}

            {/* Tags List */}
            {article.tags.length > 0 && (
              <div className="my-10 pt-6 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Article Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="text-xs px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Card */}
            <div className="my-10">
              <AuthorBio author={article.author} />
            </div>

            {/* Related Articles Component */}
            <RelatedArticles articles={relatedArticles} />
          </main>

          {/* Sticky Sidebar (4 cols on large screens) */}
          <aside className="lg:col-span-4 hidden lg:block space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Table of contents */}
              {article.tableOfContents.length > 0 && (
                <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs">
                  <TableOfContents items={article.tableOfContents} />
                </div>
              )}

              {/* Sidebar Ad Unit */}
              <AdUnit
                slotId={siteConfig.monetization.adsense.slotSidebar}
                format="rectangle"
                showDevPlaceholder={true}
              />

              {/* Author Quick Card */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs text-xs space-y-3">
                <span className="font-semibold uppercase tracking-wider text-zinc-500 block">
                  Written By
                </span>
                <p className="font-semibold text-sm text-zinc-900">
                  {article.author.name}
                </p>
                <p className="text-zinc-600 leading-relaxed font-normal">
                  {article.author.bio}
                </p>
                <Link
                  href={`/author/${article.author.slug}`}
                  className="inline-block text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
                >
                  View all articles by {article.author.name} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
