"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-zinc-700 dark:text-zinc-200" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-zinc-950/60 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xs h-[calc(100vh-4rem)] bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Navigation
              </div>
              <nav className="flex flex-col space-y-1">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Key Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.navigation.footer.topics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-emerald-700"
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500">
              <p>© 2026 {siteConfig.name}.</p>
              <p className="mt-1">Built for engineers and modern web creators.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
