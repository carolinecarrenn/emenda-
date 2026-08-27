import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthResultPanel } from "./ManagerAuthResultPanel";

interface ManagerUpdatedMobilePanelProps {
  onBackToLogin: () => void;
}

/** EM-AUTH-04 Password Updated body (842:1801-1805): the mint "Update
 *  complete" banner at y=184 over the "Back to Manager Login" pill at
 *  y=302 — the terminal frame carries no link row. */
export function ManagerUpdatedMobilePanel({
  onBackToLogin,
}: ManagerUpdatedMobilePanelProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).updated;

  return (
    <ManagerAuthResultPanel
      tone="mint"
      bannerTitle={c.cardTitle}
      bannerBody={c.cardBody}
      ctaGapClass="mt-[40px]"
      ctaLabel={c.backToLogin}
      onCta={onBackToLogin}
    />
  );
}
