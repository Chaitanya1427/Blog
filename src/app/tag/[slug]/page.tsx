import type { Metadata } from "next";
import { getArticlesByTag, getAllTags } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Tag as TagIcon } from "lucide-react";

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const title = `Articles Tagged #${decodedSlug} | ${siteConfig.name}`;

  return {
    title,
    description: `Read all articles and developer tutorials filed under #${decodedSlug} on ${siteConfig.name}.`,
    alternates: {
      canonical: absoluteUrl(`/tag/${slug}`),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const articles = await getArticlesByTag(decodedSlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Breadcrumbs
        items={[{ name: `#${decodedSlug}`, href: `/tag/${slug}` }]}
      />

      <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
          <TagIcon className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white">
            Tagged: #{decodedSlug}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {articles.length} {articles.length === 1 ? "article found" : "articles found"}
          </p>
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            No articles found matching this tag.
          </p>
        </div>
      )}
    </div>
  );
}
