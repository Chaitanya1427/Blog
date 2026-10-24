import Link from "next/link";
import Image from "next/image";
import { getAllAuthors } from "@/lib/content";
import { Users2, ArrowRight } from "lucide-react";

export function AuthorsSpotlight() {
  const authors = getAllAuthors();

  return (
    <div className="bg-zinc-50 rounded-3xl border border-zinc-200/90 p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Users2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              Meet Our Editorial Architects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Principal engineers, systems researchers, and DevOps practitioners behind our empirical guides.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.slice(0, 3).map((author) => (
          <Link
            key={author.slug}
            href={`/author/${author.slug}`}
            className="p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-600/20 bg-zinc-100 shrink-0">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors text-base">
                    {author.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    {author.title}
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                {author.bio}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
              <span>View publications</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
