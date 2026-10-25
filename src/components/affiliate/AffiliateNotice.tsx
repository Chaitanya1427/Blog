import { siteConfig } from "@/config/site";
import { Info } from "lucide-react";

interface AffiliateNoticeProps {
  customText?: string;
}

export function AffiliateNotice({ customText }: AffiliateNoticeProps) {
  const text = customText || siteConfig.monetization.affiliate.defaultDisclosure;

  return (
    <div className="my-6 p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-amber-950 leading-relaxed flex items-start gap-3">
      <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold block mb-0.5">Editorial Disclosure</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
