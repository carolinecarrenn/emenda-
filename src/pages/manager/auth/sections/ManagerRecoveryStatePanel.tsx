import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";
import {
  ManagerAuthStatePanel,
  type ManagerAuthPanelTone,
} from "./ManagerAuthStatePanel";

/** Every recovery-canvas state slab, keyed by its Figma frame. */
export type ManagerRecoveryPanelState =
  | "sendingRequest"
  | "codeSent"
  | "forgotOffline"
  | "emailNotFound"
  | "noWorkEmail"
  | "saving"
  | "codeExpired"
  | "mismatch"
  | "updateFailed"
  | "resetOffline"
  | "resendPending"
  | "newCodeSent"
  | "tooManyRequests";

interface ManagerRecoveryStatePanelProps {
  state: ManagerRecoveryPanelState;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

const TONE: Record<ManagerRecoveryPanelState, ManagerAuthPanelTone> = {
  sendingRequest: "mint",
  codeSent: "mint",
  forgotOffline: "caution",
  emailNotFound: "alert",
  noWorkEmail: "caution",
  saving: "mint",
  codeExpired: "caution",
  mismatch: "alert",
  updateFailed: "alert",
  resetOffline: "caution",
  resendPending: "mint",
  newCodeSent: "mint",
  tooManyRequests: "caution",
};

/** The 02x panels footer with the org line, the 03x panels with the
 *  scope-preserved line (1235:462 / 1235:632). */
const RESET_FOOTER = new Set<ManagerRecoveryPanelState>([
  "saving",
  "codeExpired",
  "mismatch",
  "updateFailed",
  "resetOffline",
  "resendPending",
  "newCodeSent",
  "tooManyRequests",
]);

/** Panels whose work is still in flight draw no second action and hold the
 *  primary disabled (MD-AUTH-02A · 03A · 03G). */
const IN_FLIGHT = new Set<ManagerRecoveryPanelState>([
  "sendingRequest",
  "saving",
  "resendPending",
]);

/**
 * MD-AUTH-02A…02E and MD-AUTH-03A / 03C…03I: the 900x630 slab at x=360 y=135
 * that replaces the recovery card while a request is in flight, refused, or
 * finished. MD-AUTH-03B keeps its own soft-red card instead.
 */
export function ManagerRecoveryStatePanel({
  state,
  onPrimary,
  onSecondary,
}: ManagerRecoveryStatePanelProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).desktopStates;
  const panel = c[state];
  const inFlight = IN_FLIGHT.has(state);

  const footer = RESET_FOOTER.has(state)
    ? c.resetFooter
    : fillManagerAuthCopy(c.recoveryFooter, {
        org: MANAGER_AUTH_ACCOUNT.organization,
      });

  return (
    <ManagerAuthStatePanel
      variant="recovery"
      tone={TONE[state]}
      title={panel.title}
      subtitle={panel.subtitle}
      cardTitle={panel.cardTitle}
      cardBody={fillManagerAuthCopy(panel.cardBody, {
        email: MANAGER_AUTH_ACCOUNT.workEmail,
      })}
      primaryLabel={panel.primary}
      onPrimary={inFlight ? undefined : onPrimary}
      primaryDisabled={inFlight}
      secondaryLabel={"secondary" in panel ? panel.secondary : undefined}
      onSecondary={onSecondary}
      footer={footer}
    />
  );
}
