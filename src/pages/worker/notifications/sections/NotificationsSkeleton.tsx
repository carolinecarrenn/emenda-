import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** WD-53C / W-53C loading state.
 *  Mobile (W-53C, 952:1074): a 12px semibold "Loading notifications…" label
 *  in the summary slot, then five 76px skeleton cards (#f4f6f5 fill, a
 *  190x12 and a 250x10 rounded bar inset 14px).
 *  Desktop (WD-53C, 1182:2954): four flat 82px #edf2f0 cards at y=290 with a
 *  23px gutter and no inner bars — the frame keeps the loading label
 *  (14px regular #63756b, node 1203:323) flush to the column edge and
 *  laid over the first card, so it renders as an overlay here.
 *  No unread pill or Mark-all while loading. */
export function NotificationsSkeleton() {
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div className="relative lg:pt-[54px]">
      <p className="mt-2 text-[12px] leading-[17px] font-semibold text-ink-muted lg:absolute lg:top-[66px] lg:left-0 lg:mt-0 lg:flex lg:h-[36px] lg:items-center lg:text-[14px] lg:leading-normal lg:font-normal lg:text-lp-muted">
        {c.loadingLabel}
      </p>
      <div className="mt-2 space-y-2 lg:mt-0 lg:space-y-[23px]">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`flex h-[76px] animate-pulse flex-col justify-start gap-[14px] rounded-[14px] bg-[#f4f6f5] pt-[18px] pl-[14px] lg:h-[82px] lg:justify-center lg:gap-[16px] lg:bg-[#edf2f0] lg:pt-0 lg:pl-[18px] ${
              index === 4 ? "lg:hidden" : ""
            }`}
          >
            <div className="h-[12px] w-[190px] rounded-[6px] bg-[#e0e5e3] lg:hidden" />
            <div className="h-[10px] w-[250px] rounded-[5px] bg-[#e5e9e7] lg:hidden" />
          </div>
        ))}
      </div>
    </div>
  );
}
