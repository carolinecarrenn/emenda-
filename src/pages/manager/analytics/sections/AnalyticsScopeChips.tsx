import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import { ANALYTICS_SCOPES, type AnalyticsScope } from "../analytics.mock";

/* EM-13 (1107:86–91) scope chips: 30px pill, radius 15, border #ccded6, 8px
   gaps, drawn 76 / 108 / 92 wide — a 22px inset lands the live labels on that
   width. Selected chip #e8f5f0 + semibold, the rest white + regular. */
export function AnalyticsScopeChips({
  scope,
  onScope,
}: {
  scope: AnalyticsScope;
  onScope: (next: AnalyticsScope) => void;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="flex flex-wrap gap-[8px]">
      {ANALYTICS_SCOPES.map((option) => {
        const selected = option === scope;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onScope(option)}
            className={`flex h-[30px] items-center justify-center rounded-[15px] border border-[#ccded6] px-[22px] text-[9px] text-[#083d2d] lg:h-[34px] lg:text-[11px] ${
              selected
                ? "bg-[#e8f5f0] font-semibold"
                : "bg-white font-normal hover:border-brand"
            }`}
          >
            {c.analytics.scopes[option]}
          </button>
        );
      })}
    </div>
  );
}
