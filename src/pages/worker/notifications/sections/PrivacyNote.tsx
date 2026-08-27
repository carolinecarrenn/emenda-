import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** State-independent privacy footer. Desktop: pale mint (#f2f9f5) 52px
 *  banner anchoring the bottom of the feed; mobile: plain 11px muted text
 *  directly under the last card. Copy is verbatim from the mock. */
export function PrivacyNote() {
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div className="mt-2 lg:mt-[74px] lg:flex lg:h-[52px] lg:items-center lg:rounded-[12px] lg:bg-lp-tint lg:px-[18px]">
      <p className="text-[11px] leading-[15px] text-ink-muted lg:text-[12px] lg:leading-normal lg:text-lp-muted">
        {c.privacyNote}
      </p>
    </div>
  );
}
