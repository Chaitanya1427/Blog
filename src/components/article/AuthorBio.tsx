import Image from "next/image";
import Link from "next/link";
import { Author } from "@/types/content";
import { XTwitterIcon, LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

interface AuthorBioProps {
  author: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center shadow-2xs">
      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-amber-500/30 bg-zinc-200">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-base font-semibold text-zinc-900">
              <Link href={`/author/${author.slug}`} className="hover:text-amber-700 transition-colors">
                {author.name}
              </Link>
            </h4>
            <p className="text-xs text-amber-700 font-semibold">
              {author.title}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on X (Twitter)`}
                className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on LinkedIn`}
                className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            )}
            {author.github && (
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on GitHub`}
                className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
