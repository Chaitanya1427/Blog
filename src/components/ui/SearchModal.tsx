"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, FileText, CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  category: { name: string; slug: string };
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Fetch search results with debouncing
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(`/api/search-index?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
        }
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Search articles"
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-lg transition-colors cursor-pointer"
      >
        <Search className="w-4 h-4 text-zinc-500" />
        <span className="hidden sm:inline">Search articles...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 bg-white border border-zinc-300 rounded text-zinc-600 shadow-xs">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-zinc-900/40 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleFullSearch} className="flex items-center px-4 border-b border-zinc-200">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tutorials, AI tools, comparisons..."
                className="w-full px-3 py-4 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none text-base"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-1 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            <div className="max-h-96 overflow-y-auto p-2">
              {isLoading ? (
                <div className="p-8 text-center text-sm text-zinc-500">Searching content...</div>
              ) : results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                            {item.category.name}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-amber-700 line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                          {item.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-amber-600 transition-all shrink-0 mt-1" />
                    </Link>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center">
                  <p className="text-sm text-zinc-700">
                    No articles found for &ldquo;<span className="font-semibold text-zinc-900">{query}</span>&rdquo;
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">Try searching for keywords like &ldquo;Next.js&rdquo;, &ldquo;Supabase&rdquo;, or &ldquo;Cursor&rdquo;.</p>
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-zinc-500 space-y-2">
                  <p>Type keywords to search live articles across tutorials, tools, and reviews.</p>
                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-300 rounded text-zinc-600">ESC</kbd> to close
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <CornerDownLeft className="w-3 h-3" /> to search all
                    </span>
                  </div>
                </div>
              )}
            </div>

            {query.trim() && (
              <div className="p-3 bg-zinc-50 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-500">
                <span>Press Enter for complete results page</span>
                <button
                  type="button"
                  onClick={handleFullSearch}
                  className="text-amber-700 font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View all results <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
