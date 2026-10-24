import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  inverted?: boolean;
}

export function LogoMark({
  size = "md",
  inverted = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          <linearGradient id="prism-top" x1="6.5" y1="4.5" x2="25.5" y2="15.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="prism-right" x1="17" y1="11.5" x2="26.5" y2="26.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="prism-left" x1="5.5" y1="11.5" x2="15" y2="26.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={inverted ? "#FFFFFF" : "#18181B"} />
            <stop offset="1" stopColor={inverted ? "#E4E4E7" : "#09090B"} />
          </linearGradient>
        </defs>

        {/* Top Facet (Navigational Apex / Mint Emerald) */}
        <path
          d="M16 4L25.5 9.5L16 15L6.5 9.5L16 4Z"
          fill="url(#prism-top)"
        />

        {/* Left Facet (Deep Obsidian Architectural Plane) */}
        <path
          d="M5.5 11.2L14.8 16.5V26.5L5.5 21V11.2Z"
          fill="url(#prism-left)"
        />

        {/* Right Facet (Enterprise Forest Emerald Plane) */}
        <path
          d="M17.2 16.5L26.5 11.2V21L17.2 26.5V16.5Z"
          fill="url(#prism-right)"
        />

        {/* Center Precision Spark Node */}
        <circle cx="16" cy="15" r="1.25" fill="#FFFFFF" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

export function Logo({
  className = "",
  size = "md",
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 tracking-tight transition-opacity hover:opacity-95 select-none ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      <LogoMark size={size} inverted={inverted} />

      {showWordmark && (
        <span
          className={`font-bold tracking-tight leading-none flex items-center font-sans ${textClasses[size]} ${
            inverted ? "text-white" : "text-zinc-950"
          }`}
        >
          <span>Tech</span>
          <span className="text-emerald-600 font-semibold ml-0.5">Pilot</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1.5 mb-0.5 group-hover:scale-125 transition-transform" />
        </span>
      )}
    </Link>
  );
}
