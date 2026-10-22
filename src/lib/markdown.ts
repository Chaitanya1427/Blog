import { marked } from "marked";
import { TableOfContentsItem } from "@/types/content";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Strip markdown formatting if any in heading
    const cleanText = rawText.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\[(.*?)\]\(.*?\)/g, "$1");
    const id = slugify(cleanText);

    toc.push({
      id,
      text: cleanText,
      level,
    });
  }

  return toc;
}

export function calculateReadingTime(content: string): { readingTime: number; wordCount: number } {
  const cleanContent = content.replace(/```[\s\S]*?```/g, "").replace(/<[^>]*>/g, "");
  const words = cleanContent.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 225));
  return { readingTime, wordCount };
}

export async function parseMarkdownToHtml(markdown: string): Promise<string> {
  // Custom marked renderer to inject IDs on h2 and h3
  const renderer = new marked.Renderer();

  renderer.heading = ({ depth, text }) => {
    const raw = text.replace(/<[^>]+>/g, "");
    const id = slugify(raw);
    return `<h${depth} id="${id}" class="scroll-mt-20 group flex items-center justify-between">
      <span>${text}</span>
      <a href="#${id}" class="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-emerald-600 transition-opacity ml-2 text-base font-normal" aria-label="Permalink to ${raw}">#</a>
    </h${depth}>`;
  };

  renderer.link = ({ href, title, text }) => {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const isAffiliate = href.includes("ref=") || href.includes("aff=") || href.includes("tag=") || href.includes("sponsor");
    const rel = isAffiliate
      ? 'rel="sponsored nofollow noopener"'
      : isExternal
      ? 'rel="noopener noreferrer"'
      : "";
    const target = isExternal ? 'target="_blank"' : "";
    const titleAttr = title ? `title="${title}"` : "";

    return `<a href="${href}" ${rel} ${target} ${titleAttr} class="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">${text}</a>`;
  };

  renderer.table = (token) => {
    // Wrap tables in responsive overflow container
    let headerHtml = "";
    if (token.header) {
      headerHtml = `<thead><tr>${token.header.map((cell) => `<th class="border border-zinc-200 px-4 py-2.5 bg-zinc-100 text-left font-semibold text-zinc-900">${cell.text}</th>`).join("")}</tr></thead>`;
    }
    const bodyHtml = `<tbody>${token.rows.map((row) => `<tr>${row.map((cell) => `<td class="border border-zinc-200 px-4 py-2 text-zinc-700">${cell.text}</td>`).join("")}</tr>`).join("")}</tbody>`;

    return `<div class="overflow-x-auto my-6 rounded-xl border border-zinc-200 shadow-2xs"><table class="w-full text-sm border-collapse">${headerHtml}${bodyHtml}</table></div>`;
  };

  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const html = await marked.parse(markdown, { renderer });
  return html;
}
