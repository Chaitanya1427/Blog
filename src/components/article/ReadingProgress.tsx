"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-16 left-0 w-full h-1 bg-transparent z-50 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 transition-all duration-100 ease-out shadow-xs"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
