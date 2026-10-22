import { MetadataRoute } from "next";
import { getAllArticles, getAllCategories, getAllAuthors } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

const BUILD_DATE = new Date("2026-03-21T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allArticles = await getAllArticles(); // Drafts automatically filtered out
  const categories = getAllCategories();
  const authors = getAllAuthors();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: BUILD_DATE,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/editorial-policy"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified: BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/terms-of-service"),
      lastModified: BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/affiliate-disclosure"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/media-kit"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Articles pages
  const articlePages: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Categories pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: absoluteUrl(`/category/${cat.slug}`),
    lastModified: BUILD_DATE,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Authors pages
  const authorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: absoluteUrl(`/author/${author.slug}`),
    lastModified: BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...categoryPages, ...authorPages];
}
