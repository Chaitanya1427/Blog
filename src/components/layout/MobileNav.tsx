"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-zinc-700" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-zinc-950/40 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xs h-[calc(100vh-4rem)] bg-white border-r border-zinc-200 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="pb-4 border-b border-zinc-100">
                <Logo size="sm" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Navigation
              </div>
              <nav className="flex flex-col space-y-1">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-800 hover:bg-zinc-100 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-zinc-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Key Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.navigation.footer.topics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 hover:text-amber-700 font-medium"
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 text-xs text-zinc-500">
              <p>© 2026 {siteConfig.name}.</p>
              <p className="mt-1">Built for engineers and modern web creators.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
