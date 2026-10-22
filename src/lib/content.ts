import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article, ArticleFrontmatter, Category, Author } from "@/types/content";
import { authors, categories } from "@/config/site";
import {
  extractTableOfContents,
  calculateReadingTime,
  parseMarkdownToHtml,
  slugify,
} from "./markdown";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content/articles");

// Ensure articles directory exists
if (!fs.existsSync(ARTICLES_DIRECTORY)) {
  fs.mkdirSync(ARTICLES_DIRECTORY, { recursive: true });
}

export function getArticleFilePaths(): string[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }
  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fileNames = getArticleFilePaths();
  const matchedFile = fileNames.find((filename) => {
    const fileSlug = filename.replace(/\.(md|mdx)$/, "");
    return fileSlug === slug;
  });

  if (!matchedFile) {
    return null;
  }

  const fullPath = path.join(ARTICLES_DIRECTORY, matchedFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as ArticleFrontmatter;

  const articleSlug = frontmatter.slug || matchedFile.replace(/\.(md|mdx)$/, "");
  const author = authors[frontmatter.author] || {
    name: frontmatter.author || "TechPilot Staff",
    slug: slugify(frontmatter.author || "staff"),
    title: "Contributor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=face",
    bio: "Technical contributor covering modern web architecture and AI software systems.",
  };

  const category = categories[frontmatter.category] || {
    slug: frontmatter.category || "uncategorized",
    name: frontmatter.category || "General",
    description: "Technology and engineering articles.",
  };

  const { readingTime, wordCount } = calculateReadingTime(content);
  const tableOfContents = extractTableOfContents(content);
  const htmlContent = await parseMarkdownToHtml(content);

  return {
    ...frontmatter,
    slug: articleSlug,
    author,
    category,
    content,
    htmlContent,
    readingTime,
    wordCount,
    tableOfContents,
    draft: Boolean(frontmatter.draft),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
  };
}

export async function getAllArticles(options: {
  includeDrafts?: boolean;
  category?: string;
  tag?: string;
  author?: string;
} = {}): Promise<Article[]> {
  const fileNames = getArticleFilePaths();
  const articles: Article[] = [];

  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.(md|mdx)$/, "");
    const article = await getArticleBySlug(slug);
    if (!article) continue;

    // Filter out drafts unless explicitly requested (e.g. in development preview)
    if (!options.includeDrafts && article.draft) {
      continue;
    }

    if (options.category && article.category.slug !== options.category) {
      continue;
    }

    if (
      options.tag &&
      !article.tags.some((t) => slugify(t) === slugify(options.tag || ""))
    ) {
      continue;
    }

    if (options.author && article.author.slug !== options.author) {
      continue;
    }

    articles.push(article);
  }

  // Sort by published date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.slice(0, limit);
}

export async function getLatestArticles(limit = 6): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.slice(0, limit);
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  return getAllArticles({ category: categorySlug });
}

export async function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  return getAllArticles({ author: authorSlug });
}

export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
  return getAllArticles({ tag: tagSlug });
}

export async function getRelatedArticles(
  currentSlug: string,
  categorySlug: string,
  tags: string[],
  limit = 3
): Promise<Article[]> {
  const allArticles = await getAllArticles();
  const candidates = allArticles.filter((a) => a.slug !== currentSlug);

  // Score candidates based on category match and shared tags
  const scored = candidates.map((article) => {
    let score = 0;
    if (article.category.slug === categorySlug) {
      score += 5;
    }
    const sharedTags = article.tags.filter((t) =>
      tags.some((curTag) => slugify(curTag) === slugify(t))
    );
    score += sharedTags.length * 2;
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.article);
}

export function getAllCategories(): Category[] {
  return Object.values(categories);
}

export function getCategoryBySlug(slug: string): Category | null {
  return categories[slug] || null;
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
}

export function getAuthorBySlug(slug: string): Author | null {
  return authors[slug] || null;
}

export async function getAllTags(): Promise<{ name: string; slug: string; count: number }[]> {
  const articles = await getAllArticles();
  const tagCounts: Record<string, { name: string; count: number }> = {};

  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const tagSlug = slugify(tag);
      if (!tagCounts[tagSlug]) {
        tagCounts[tagSlug] = { name: tag, count: 0 };
      }
      tagCounts[tagSlug].count += 1;
    });
  });

  return Object.entries(tagCounts).map(([slug, data]) => ({
    slug,
    name: data.name,
    count: data.count,
  }));
}

export async function searchArticles(query: string): Promise<Article[]> {
  const articles = await getAllArticles();
  if (!query || !query.trim()) {
    return [];
  }

  const q = query.toLowerCase().trim();
  return articles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(q);
    const excerptMatch = article.excerpt.toLowerCase().includes(q);
    const tagMatch = article.tags.some((t) => t.toLowerCase().includes(q));
    const categoryMatch = article.category.name.toLowerCase().includes(q);
    const contentMatch = article.content.toLowerCase().includes(q);

    return titleMatch || excerptMatch || tagMatch || categoryMatch || contentMatch;
  });
}
