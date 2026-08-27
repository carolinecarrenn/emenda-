import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";
import { ManagerAuthResultPanel } from "./ManagerAuthResultPanel";

interface ManagerAccessVerifiedPanelProps {
  onContinue: () => void;
}

/** EM-AUTH-01E Access Verified (842:1555-1559): the mint "Access verified"
 *  banner at y=184 over the "Continue to facility selection" pill at y=292 —
 *  auth hands off to the facility context step instead of a personal home.
 *  The frame carries no organization context line above it. */
export function ManagerAccessVerifiedPanel({
  onContinue,
}: ManagerAccessVerifiedPanelProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).login;

  return (
    <ManagerAuthResultPanel
      tone="mint"
      bannerTitle={c.verifiedCardTitle}
      bannerBody={fillManagerAuthCopy(c.verifiedCardBody, {
        org: MANAGER_AUTH_ACCOUNT.organization,
      })}
      ctaLabel={c.verifiedCta}
      onCta={onContinue}
    />
  );
}
