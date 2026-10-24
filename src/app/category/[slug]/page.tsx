import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategoryBySlug, getAllCategories, getArticlesByCategory } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Layers } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  const pageUrl = absoluteUrl(`/category/${category.slug}`);
  const title = `${category.name} Tutorials & Articles`;
  const description = category.longDescription || category.description;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: pageUrl,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticlesByCategory(category.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs
        items={[{ name: category.name, href: `/category/${category.slug}` }]}
      />

      {/* Category Header */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-zinc-50 to-teal-500/5 border border-zinc-200 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
          {category.name}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-normal">
          {category.longDescription || category.description}
        </p>

        <div className="text-xs font-semibold text-zinc-500 pt-2">
          {articles.length} {articles.length === 1 ? "published article" : "published articles"}
        </div>
      </div>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50">
          <p className="text-base font-semibold text-zinc-700">
            No published articles in this category yet.
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            Our engineering editorial team is actively conducting benchmarks and preparing tutorials for {category.name}. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
