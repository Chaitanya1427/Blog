import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/content";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ShareButtons } from "./ShareButtons";
import { Clock, Calendar, RefreshCw } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const articleUrl = absoluteUrl(`/blog/${article.slug}`);

  return (
    <header className="space-y-6 mb-10">
      <Breadcrumbs
        items={[
          { name: article.category.name, href: `/category/${article.category.slug}` },
          { name: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <div className="flex flex-wrap items-center gap-2">
        <Badge href={`/category/${article.category.slug}`} variant="primary">
          {article.category.name}
        </Badge>
        {article.isSponsored && (
          <Badge variant="sponsored">
            {article.sponsorName ? `Sponsored by ${article.sponsorName}` : "Sponsored Content"}
          </Badge>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
        {article.title}
      </h1>

      <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
        {article.excerpt}
      </p>

      {/* Author and Date Meta Row */}
      <div className="pt-2 pb-4 border-y border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href={`/author/${article.author.slug}`}
            className="relative w-11 h-11 rounded-full overflow-hidden border border-zinc-200 bg-zinc-200 shrink-0"
          >
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </Link>
          <div>
            <Link
              href={`/author/${article.author.slug}`}
              className="font-semibold text-sm text-zinc-900 hover:text-amber-700 transition-colors"
            >
              {article.author.name}
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mt-0.5">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published {formatDate(article.date)}</span>
              </span>
              {article.updatedAt && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-700 font-semibold">
                    <RefreshCw className="w-3 h-3" />
                    <span>Updated {formatDate(article.updatedAt)}</span>
                  </span>
                </>
              )}
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime} min read</span>
              </span>
            </div>
          </div>
        </div>

        <ShareButtons title={article.title} url={articleUrl} />
      </div>

      {/* Featured Hero Image (Priority loaded for Core Web Vitals LCP) */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
    </header>
  );
}
