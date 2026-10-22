import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getAuthorBySlug, getAllAuthors, getArticlesByAuthor } from "@/lib/content";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { UserCheck } from "lucide-react";
import { XTwitterIcon, LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: "Author Not Found" };
  }

  const pageUrl = absoluteUrl(`/author/${author.slug}`);
  const title = `${author.name} — ${author.title}`;

  return {
    title,
    description: author.bio,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "profile",
      title: `${title} | ${siteConfig.name}`,
      description: author.bio,
      url: pageUrl,
      images: [{ url: author.avatar }],
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = await getArticlesByAuthor(author.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs items={[{ name: author.name, href: `/author/${author.slug}` }]} />

      {/* Author Profile Header */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-emerald-500/20 shadow-md bg-zinc-200">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4 text-center sm:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Author & Contributor</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            {author.name}
          </h1>

          <p className="text-sm font-semibold text-emerald-700">
            {author.title}
          </p>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            {author.bio}
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:text-emerald-700 transition-colors"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:text-emerald-700 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            )}
            {author.github && (
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:text-emerald-700 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Author's Articles Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-zinc-900 pb-3 border-b border-zinc-200">
          Articles by {author.name} ({articles.length})
        </h2>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">No published articles yet.</p>
        )}
      </section>
    </div>
  );
}
