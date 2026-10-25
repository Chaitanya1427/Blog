"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { XTwitterIcon, LinkedInIcon } from "@/components/ui/Icons";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Clipboard copy failed", e);
    }
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">
        Share:
      </span>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
      >
        <XTwitterIcon className="w-4 h-4" />
      </a>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
      >
        <LinkedInIcon className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy link to clipboard"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-colors relative cursor-pointer shadow-2xs"
      >
        {copied ? (
          <Check className="w-4 h-4 text-amber-600" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
      {copied && (
        <span className="text-xs text-amber-600 font-medium animate-in fade-in">
          Copied!
        </span>
      )}
    </div>
  );
}
