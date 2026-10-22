import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/content";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const articles = await searchArticles(query);
  const results = articles.slice(0, 8).map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: {
      name: article.category.name,
      slug: article.category.slug,
    },
    date: article.date,
  }));

  return NextResponse.json({ results });
}
