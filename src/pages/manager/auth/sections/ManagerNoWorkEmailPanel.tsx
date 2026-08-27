import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthResultPanel } from "./ManagerAuthResultPanel";

interface ManagerNoWorkEmailPanelProps {
  onOpenSupport: () => void;
  onBack?: () => void;
}

/** EM-AUTH-02E No Work Email Access (842:1903-1908): the recovery dead-end —
 *  the 84px amber "Your access stays protected" banner at y=186, the single
 *  "Open Support" CTA at y=296 and the "Back to sign in" link at y=360. No
 *  self-service takeover of an organization account. */
export function ManagerNoWorkEmailPanel({
  onOpenSupport,
  onBack,
}: ManagerNoWorkEmailPanelProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).forgot;

  return (
    <ManagerAuthResultPanel
      tone="amber"
      bannerHeightClass="min-h-[84px]"
      bannerTitle={c.protectedTitle}
      bannerBody={c.protectedBody}
      ctaGapClass="mt-[26px]"
      ctaLabel={c.openSupport}
      onCta={onOpenSupport}
      linkLabel={onBack ? c.backToSignIn : undefined}
      onLink={onBack}
    />
  );
}
