"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

interface AdUnitProps {
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
  showDevPlaceholder?: boolean;
}

export function AdUnit({
  slotId,
  format = "auto",
  className = "",
  showDevPlaceholder = false,
}: AdUnitProps) {
  const { enabled, clientId } = siteConfig.monetization.adsense;
  const isLoaded = useRef(false);

  useEffect(() => {
    if (enabled && typeof window !== "undefined" && !isLoaded.current) {
      try {
        // @ts-expect-error adsbygoogle is loaded via external script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, [enabled]);

  // When AdSense is disabled, return null or dev placeholder for layout testing
  if (!enabled || !clientId || clientId === "ca-pub-0000000000000000") {
    if (showDevPlaceholder && process.env.NODE_ENV === "development") {
      return (
        <div
          className={`my-8 p-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-100/80 text-center text-xs text-zinc-600 ${className}`}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider block mb-1 text-zinc-700">
            AdSense Placement ({format})
          </span>
          <span>Disabled in development. Set NEXT_PUBLIC_ADSENSE_ENABLED=true in production.</span>
        </div>
      );
    }
    return null;
  }

  const heightClasses = {
    horizontal: "min-h-[90px]",
    rectangle: "min-h-[250px]",
    auto: "min-h-[100px]",
  };

  return (
    <div
      className={`my-8 overflow-hidden rounded-xl bg-zinc-50 border border-zinc-200 p-2 text-center ${heightClasses[format]} ${className}`}
    >
      <div className="text-[10px] uppercase font-semibold tracking-widest text-zinc-500 mb-1.5 select-none">
        Advertisement
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId || "0000000000"}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
