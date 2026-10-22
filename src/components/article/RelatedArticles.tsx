import { Article } from "@/types/content";
import { ArticleCard } from "./ArticleCard";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
            Recommended Engineering Reads
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Hand-curated related tutorials, benchmarks, and architecture guides.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
