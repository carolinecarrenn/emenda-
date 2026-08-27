import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "./audit.copy";
import { StateScreenLayout } from "./sections/StateScreenLayout";
import { AuditStatusChip } from "./sections/AuditStatusChip";
import { FacilityConfirmedCard } from "./sections/FacilityConfirmedCard";
import { PendingActionRows } from "./sections/PendingActionRows";
import { RevalidationRuleCard } from "./sections/RevalidationRuleCard";
import { AuditLinkButton } from "./sections/AuditButtons";

/** App-wide reconnect interstitial — EM-STATE-02 Reconnected · Pending
 *  Actions Resolved (Figma 761:2946, section 09 Audit & Resilience
 *  759:1304). Full-screen, no bottom nav: mint "Back online" chip, mint
 *  facility-confirmed card, PENDING ACTION REVIEW rows (Ready to send /
 *  Ready to save on mint, "Needs fresh data check" on yellow), white
 *  REVALIDATION RULE card and the two stacked full-width CTAs. */
export function ManagerReconnectedStatePage() {
  const c = useSectionCopy(AUDIT_COPY).reconnected;

  return (
    <StateScreenLayout
      title={c.title}
      subtitle={c.subtitle}
      chip={<AuditStatusChip label={c.chip} tone="mint" />}
    >
      <div className="mt-[14px]">
        <FacilityConfirmedCard />
      </div>
      <div className="mt-[20px]">
        <PendingActionRows />
      </div>
      <div className="mt-[20px]">
        <RevalidationRuleCard />
      </div>

      {/* EM-STATE-02 CTAs (1109:163 / 1109:165): two stacked 350px buttons. */}
      <div className="mt-[16px] space-y-[10px]">
        <AuditLinkButton to="/manager" tone="dark" className="w-full">
          {c.continueCta}
        </AuditLinkButton>
        <AuditLinkButton
          to="/manager/follow-up"
          tone="outline"
          className="w-full"
        >
          {c.reviewCta}
        </AuditLinkButton>
      </div>
    </StateScreenLayout>
  );
}
