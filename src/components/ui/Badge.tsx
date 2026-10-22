import Link from "next/link";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "sponsored";
  className?: string;
}

export function Badge({
  children,
  href,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full transition-colors uppercase tracking-wider";

  const variantClasses = {
    primary:
      "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/80",
    secondary:
      "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    outline:
      "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500",
    sponsored:
      "bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800 font-bold",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return <span className={combinedClasses}>{children}</span>;
}
