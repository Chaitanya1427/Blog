import Script from "next/script";
import { siteConfig } from "@/config/site";

export function AdSenseScript() {
  const { enabled, clientId } = siteConfig.monetization.adsense;

  // Only load the external Google AdSense script when explicitly enabled with a valid publisher ID
  if (!enabled || !clientId || clientId === "ca-pub-0000000000000000") {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
    />
  );
}
