import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "./audit.copy";
import { StateScreenLayout } from "./sections/StateScreenLayout";
import { AccessDeniedCard } from "./sections/AccessDeniedCard";
import { AccessContextRows } from "./sections/AccessContextRows";
import { RequiredToContinueCard } from "./sections/RequiredToContinueCard";
import { PrivacyBoundaryCard } from "./sections/PrivacyBoundaryCard";
import { RestrictedBackButton } from "./sections/RestrictedBackButton";

/** App-wide permission interstitial — EM-STATE-03 Permission Restricted
 *  (Figma 761:3697, section 09 Audit & Resilience 759:1304). Full-screen,
 *  no bottom nav and no status chip: red ACCESS DENIED SAFELY label over a
 *  pale-pink explanation card, CURRENT ACCESS CONTEXT rows, mint REQUIRED
 *  TO CONTINUE bullets, yellow PRIVACY BOUNDARY card and one outlined Back
 *  CTA. The screen explains the block without revealing extra worker or
 *  facility data. */
export function ManagerRestrictedStatePage() {
  const c = useSectionCopy(AUDIT_COPY).restricted;

  return (
    <StateScreenLayout title={c.title} subtitle={c.subtitle}>
      <div className="mt-[24px]">
        <AccessDeniedCard />
      </div>
      <div className="mt-[24px]">
        <AccessContextRows />
      </div>
      <div className="mt-[18px]">
        <RequiredToContinueCard />
      </div>
      <div className="mt-[14px]">
        <PrivacyBoundaryCard />
      </div>
      <div className="mt-[14px]">
        <RestrictedBackButton />
      </div>
    </StateScreenLayout>
  );
}
