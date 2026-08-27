import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";
import {
  ManagerAuthStatePanel,
  type ManagerAuthPanelTone,
} from "./ManagerAuthStatePanel";

export type ManagerLoginPanelState =
  | "loading"
  | "invalid"
  | "too-many-attempts"
  | "offline"
  | "verified";

interface ManagerLoginStatePanelProps {
  state: ManagerLoginPanelState;
  onRetry: () => void;
  onForgot: () => void;
  onContinue: () => void;
}

const TONE: Record<ManagerLoginPanelState, ManagerAuthPanelTone> = {
  loading: "mint",
  invalid: "alert",
  "too-many-attempts": "caution",
  offline: "caution",
  verified: "mint",
};

/** MD-AUTH-01A Signing in (1235:14) · 01B Invalid Credentials (1235:47) ·
 *  01C Too Many Attempts (1235:82) · 01D Offline (1235:117) · 01E Access
 *  Verified (1235:152). Each covers the MD-AUTH-01 form with the 790x620
 *  state slab at x=610 y=150; the credential fields stay one click away
 *  behind the panel's own way forward. */
export function ManagerLoginStatePanel({
  state,
  onRetry,
  onForgot,
  onContinue,
}: ManagerLoginStatePanelProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).desktopStates;

  const footer = fillManagerAuthCopy(c.loginFooter, {
    org: MANAGER_AUTH_ACCOUNT.organization,
  });

  if (state === "loading") {
    return (
      <ManagerAuthStatePanel
        variant="login"
        tone={TONE.loading}
        title={c.signingIn.title}
        subtitle={c.signingIn.subtitle}
        cardTitle={c.signingIn.cardTitle}
        cardBody={c.signingIn.cardBody}
        primaryLabel={c.signingIn.primary}
        primaryDisabled
        footer={footer}
      />
    );
  }

  if (state === "verified") {
    return (
      <ManagerAuthStatePanel
        variant="login"
        tone={TONE.verified}
        title={c.accessVerified.title}
        subtitle={c.accessVerified.subtitle}
        cardTitle={c.accessVerified.cardTitle}
        cardBody={fillManagerAuthCopy(c.accessVerified.cardBody, {
          manager: MANAGER_AUTH_ACCOUNT.managerId,
          role: MANAGER_AUTH_ACCOUNT.managerRole,
          org: MANAGER_AUTH_ACCOUNT.organization,
        })}
        primaryLabel={c.accessVerified.primary}
        onPrimary={onContinue}
        secondaryLabel={c.accessVerified.secondary}
        onSecondary={onRetry}
        footer={footer}
      />
    );
  }

  const panel =
    state === "invalid"
      ? c.invalidCredentials
      : state === "too-many-attempts"
        ? c.tooManyAttempts
        : c.loginOffline;

  return (
    <ManagerAuthStatePanel
      variant="login"
      tone={TONE[state]}
      title={panel.title}
      subtitle={panel.subtitle}
      cardTitle={panel.cardTitle}
      cardBody={panel.cardBody}
      primaryLabel={panel.primary}
      onPrimary={onRetry}
      secondaryLabel={panel.secondary}
      onSecondary={state === "offline" ? onRetry : onForgot}
      footer={footer}
    />
  );
}
