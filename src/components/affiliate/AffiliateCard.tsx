import { Check, X, ShieldAlert } from "lucide-react";
import { AffiliateButton } from "./AffiliateButton";

interface AffiliateCardProps {
  productName: string;
  tagline: string;
  rating?: string;
  pricing: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  badge?: string;
}

export function AffiliateCard({
  productName,
  tagline,
  rating,
  pricing,
  affiliateUrl,
  pros,
  cons,
  badge = "Editor's Pick",
}: AffiliateCardProps) {
  return (
    <div className="my-8 rounded-2xl border-2 border-emerald-600/30 bg-white p-6 sm:p-8 shadow-md relative overflow-hidden">
      {badge && (
        <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-xs">
          {badge}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-zinc-900">
            {productName}
          </h4>
          <p className="text-sm text-zinc-600 mt-0.5">
            {tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {rating && (
            <div className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm">
              ★ {rating}
            </div>
          )}
          <div className="text-xs text-zinc-500">
            <span className="block font-semibold text-zinc-800">
              {pricing}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs">
        <div>
          <span className="font-bold text-emerald-700 block mb-2">
            Key Advantages:
          </span>
          <ul className="space-y-1.5">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-zinc-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-bold text-rose-700 block mb-2">
            Considerations / Limitations:
          </span>
          <ul className="space-y-1.5">
            {cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-zinc-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
          <ShieldAlert className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span>Verified link directly to vendor. Clear affiliate disclosure applies.</span>
        </div>

        <AffiliateButton href={affiliateUrl} productName={productName}>
          Explore {productName} →
        </AffiliateButton>
      </div>
    </div>
  );
}
