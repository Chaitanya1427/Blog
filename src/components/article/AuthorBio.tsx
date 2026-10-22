import Image from "next/image";
import Link from "next/link";
import { Author } from "@/types/content";
import { XTwitterIcon, LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

interface AuthorBioProps {
  author: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/20 bg-zinc-200">
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
            <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
              <Link href={`/author/${author.slug}`} className="hover:text-emerald-700 dark:hover:text-emerald-400">
                {author.name}
              </Link>
            </h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
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
                className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
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
                className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
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
                className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
