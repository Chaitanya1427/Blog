import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/content";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group relative rounded-3xl bg-white border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-zinc-100">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt || article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <Badge href={`/category/${article.category.slug}`} variant="primary">
              {article.category.name}
            </Badge>
            {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime} min read</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors tracking-tight">
              <Link href={`/blog/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
            <Link
              href={`/author/${article.author.slug}`}
              className="flex items-center gap-3 group/author"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-zinc-200 bg-zinc-200">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 group-hover/author:text-amber-700 transition-colors">
                  {article.author.name}
                </p>
                <p className="text-[11px] text-zinc-500">
                  {article.author.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/blog/${article.slug}`}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col rounded-2xl bg-white border border-zinc-200/80 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <Badge href={`/category/${article.category.slug}`} variant="primary">
            {article.category.name}
          </Badge>
          {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 mt-5 border-t border-zinc-100 flex items-center justify-between">
          <Link
            href={`/author/${article.author.slug}`}
            className="flex items-center gap-2.5 text-xs text-zinc-700 hover:text-amber-700"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-zinc-200 bg-zinc-200">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span className="font-semibold truncate max-w-[120px]">{article.author.name}</span>
          </Link>

          <Link
            href={`/blog/${article.slug}`}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 group-hover:underline"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
