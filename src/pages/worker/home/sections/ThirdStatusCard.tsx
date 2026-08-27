import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";
import type { HomeThirdCard } from "../useHomeView";

/* WD-18 third card: white, radius 14, p-12. Two shapes across the 13 states:
   "Your profile — N% complete" with a 6px green progress bar (headless
   states), or a title + right-aligned status label + one-line body
   ("Work tools unlocked / Connected", "Profile ready / Ready",
   "Work tools offline / Offline"). */
export function ThirdStatusCard({ card }: { card: HomeThirdCard }) {
  const c = useSectionCopy(HOME_COPY);

  if (card.kind === "progress") {
    return (
      <div className="flex flex-col gap-[7px] rounded-[14px] border border-line bg-white p-3 lg:min-h-[108px]">
        <div className="flex items-start justify-between">
          <p className="text-[13px] leading-[18px] font-semibold text-ink">
            {c.profileCard.title}
          </p>
          <p className="text-[11px] leading-[16px] font-semibold text-brand-deep">
            {card.percentLabel}
          </p>
        </div>
        <div className="h-[6px] w-full overflow-hidden rounded-full bg-brand-soft">
          <div
            className="h-full rounded-full bg-brand"
            style={{ width: `${card.percent}%` }}
          />
        </div>
        <p className="text-[10px] leading-[15px] text-ink-muted">
          {c.profileCard.helper}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[7px] rounded-[14px] border border-line bg-white p-3 lg:min-h-[108px]">
      <div className="flex items-start justify-between">
        <p className="text-[13px] leading-[18px] font-semibold text-ink">
          {card.title}
        </p>
        <p
          className={`text-[11px] leading-[16px] font-semibold ${
            card.badgeTone === "green" ? "text-brand-deep" : "text-ink-muted"
          }`}
        >
          {card.badge}
        </p>
      </div>
      <p className="text-[10px] leading-[15px] text-ink-muted">{card.body}</p>
    </div>
  );
}
