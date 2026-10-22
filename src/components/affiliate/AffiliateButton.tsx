import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface AffiliateButtonProps {
  href: string;
  children: ReactNode;
  productName?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function AffiliateButton({
  href,
  children,
  productName,
  className = "",
  variant = "primary",
}: AffiliateButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shadow-xs";

  const variantClasses = {
    primary: "bg-emerald-700 hover:bg-emerald-600 text-white shadow-emerald-700/20",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label={`Visit ${productName || "Product"} (affiliate link)`}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
    </a>
  );
}
