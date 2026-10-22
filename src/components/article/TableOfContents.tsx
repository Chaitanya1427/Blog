"use client";

import { useEffect, useState } from "react";
import { TableOfContentsItem } from "@/types/content";
import { List } from "lucide-react";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -60% 0%",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
        <List className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 border-l border-zinc-200 dark:border-zinc-800">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={`${
                item.level === 3 ? "pl-5" : "pl-3"
              } transition-colors`}
            >
              <a
                href={`#${item.id}`}
                className={`block py-1 transition-colors leading-snug border-l-2 -ml-[13px] ${
                  item.level === 3 ? "-ml-[21px]" : ""
                } ${
                  isActive
                    ? "border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold"
                    : "border-transparent hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
