import Link from "next/link";
import { Home, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 font-semibold text-2xl border border-emerald-200 shadow-sm">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
        Page Not Found
      </h1>

      <p className="text-zinc-600 text-base max-w-lg mx-auto leading-relaxed font-normal">
        The requested article or page could not be located. It may have been moved, updated, or does not exist.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 font-semibold text-sm transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>Search Articles</span>
        </Link>
      </div>

      <div className="pt-10 border-t border-zinc-200 max-w-md mx-auto">
        <span className="text-xs uppercase font-semibold tracking-wider text-zinc-500 block mb-3">
          Popular Categories
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {siteConfig.navigation.footer.topics.slice(0, 4).map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="text-xs px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 hover:text-emerald-700 transition-colors"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
