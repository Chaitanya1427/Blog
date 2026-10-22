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
      "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100",
    secondary:
      "bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200",
    outline:
      "border border-zinc-300 text-zinc-600 hover:border-zinc-400",
    sponsored:
      "bg-amber-50 text-amber-800 border border-amber-300 font-bold",
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
