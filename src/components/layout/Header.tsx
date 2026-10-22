import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SearchModal } from "@/components/ui/SearchModal";
import { MobileNav } from "./MobileNav";
import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-colors shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-xl tracking-tight text-zinc-900 group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="flex items-center">
              <span>{siteConfig.name}</span>
              <span className="text-emerald-600 font-semibold ml-0.5">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-zinc-600 hover:text-emerald-700 hover:bg-zinc-100 rounded-md transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <SearchModal />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
