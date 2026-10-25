import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XTwitterIcon, YouTubeIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100/70 text-zinc-600 mt-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm leading-relaxed max-w-sm text-zinc-600">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TechPilot on X (Twitter)"
                  className="p-2 rounded-lg bg-white hover:bg-zinc-200 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TechPilot on GitHub"
                  className="p-2 rounded-lg bg-white hover:bg-zinc-200 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TechPilot on LinkedIn"
                  className="p-2 rounded-lg bg-white hover:bg-zinc-200 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TechPilot on YouTube"
                  className="p-2 rounded-lg bg-white hover:bg-zinc-200 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Focus Topics
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.topics.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-700 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Publication
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-700 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Legal & Standards
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-700 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate & Editorial Disclosure Note */}
        <div className="mt-12 pt-8 border-t border-zinc-200 text-xs text-zinc-500 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Independent editorial coverage. Software evaluations are conducted by our team without vendor interference.
            </span>
          </div>
          <div>
            © 2026 {siteConfig.publisher.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
