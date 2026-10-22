import { siteConfig } from "@/config/site";
import { Info } from "lucide-react";

interface AffiliateNoticeProps {
  customText?: string;
}

export function AffiliateNotice({ customText }: AffiliateNoticeProps) {
  const text = customText || siteConfig.monetization.affiliate.defaultDisclosure;

  return (
    <div className="my-6 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed flex items-start gap-3">
      <Info className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold block mb-0.5">Editorial Disclosure</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
