import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "default" | "dark";
  className?: string;
}

export function Breadcrumbs({ items, variant = "default", className = "" }: BreadcrumbsProps) {
  const isDark = variant === "dark";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.href),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs mb-6 flex-wrap gap-1 ${
          isDark ? "text-zinc-400" : "text-zinc-500"
        } ${className}`}
      >
        <Link
          href="/"
          className={`flex items-center gap-1 transition-colors ${
            isDark ? "hover:text-emerald-400" : "hover:text-emerald-700"
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <div key={item.href} className="flex items-center gap-1">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isDark ? "text-zinc-600" : "text-zinc-400"
                }`}
              />
              {isLast ? (
                <span
                  className={`font-medium truncate max-w-[200px] sm:max-w-md ${
                    isDark ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors truncate max-w-[150px] ${
                    isDark
                      ? "hover:text-emerald-400 text-zinc-400"
                      : "hover:text-emerald-700 text-zinc-500"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
