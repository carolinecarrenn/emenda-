import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "./employer.copy";
import { EMPLOYER_CONNECTION } from "./employerMock";
import { EmployerPageHeader } from "./sections/EmployerPageHeader";
import { InviteCodeField } from "./sections/InviteCodeField";
import { NoteStrip } from "./sections/NoteStrip";
import { StateBanner } from "./sections/StateBanner";
import { ActionButton } from "./sections/ActionButton";

type ConnectPhase =
  | "idle"
  | "validation-error"
  | "checking"
  | "invalid"
  | "expired"
  | "offline";

const URL_STATES: Record<string, ConnectPhase> = {
  "validation-error": "validation-error",
  checking: "checking",
  invalid: "invalid",
  expired: "expired",
  offline: "offline",
};

/** Invite codes are printed as XXXX-XXXX. A well-formed code that EMENDA does
 *  not recognise is treated as expired / revoked / already used (W-49D); a
 *  malformed one cannot belong to this EMENDA ID at all (W-49C). Both states
 *  are therefore reachable from the field itself, not only from ?state=. */
const INVITE_CODE_PATTERN = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;

/** Connect employer — invite code (Figma WD-49, node 1182:598; states
 *  WD-49A/B/C/D/E, nodes 1182:649 / 700 / 751 / 804 / 857; mobile W-49).
 *  680px field column, mint safety note, 320px dark-green "Check invite". */
export function ConnectEmployerPage() {
  const c = useSectionCopy(EMPLOYER_COPY);
  const navigate = useNavigate();
  const urlState = useScreenState();
  const forcedPhase = urlState ? URL_STATES[urlState] : undefined;

  const [code, setCode] = useState(EMPLOYER_CONNECTION.inviteCode);
  const [phase, setPhase] = useState<ConnectPhase>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const activePhase = forcedPhase ?? phase;
  const offline = activePhase === "offline";
  const checking = activePhase === "checking";

  const handleAction = () => {
    if (offline || checking) return;

    if (activePhase === "invalid" || activePhase === "expired") {
      setCode("");
      setPhase("idle");
      return;
    }
    if (code.trim() === "") {
      setPhase("validation-error");
      return;
    }
    setPhase("checking");
    timer.current = window.setTimeout(() => {
      const entered = code.trim().toUpperCase();
      if (entered === EMPLOYER_CONNECTION.inviteCode) {
        navigate("/worker/employer/review");
        return;
      }
      setPhase(
        entered === EMPLOYER_CONNECTION.expiredInviteCode ||
          INVITE_CODE_PATTERN.test(entered)
          ? "expired"
          : "invalid",
      );
    }, 900);
  };

  const subtitle =
    activePhase === "checking"
      ? c.connect.subtitleChecking
      : activePhase === "invalid"
        ? c.connect.subtitleInvalid
        : activePhase === "expired"
          ? c.connect.subtitleExpired
          : activePhase === "offline"
            ? c.connect.subtitleOffline
            : c.connect.subtitle;

  const banner =
    activePhase === "validation-error"
      ? { tone: "red" as const, text: c.connect.validationMessage }
      : activePhase === "invalid"
        ? { tone: "red" as const, text: c.connect.invalidBanner }
        : activePhase === "expired"
          ? { tone: "red" as const, text: c.connect.expiredBanner }
          : activePhase === "offline"
            ? { tone: "amber" as const, text: c.connect.offlineBanner }
            : undefined;

  const actionLabel =
    activePhase === "checking"
      ? c.connect.checking
      : activePhase === "invalid"
        ? c.connect.tryAnotherCode
        : activePhase === "expired"
          ? c.connect.enterNewCode
          : c.connect.checkInvite;

  return (
    <div className="max-w-[1012px] pt-[17px] lg:pt-0">
      <EmployerPageHeader title={c.connect.title} subtitle={subtitle} />

      <div className="mt-[16px] max-w-[680px] lg:mt-[63px]">
        {/* WD-49 node 1182:642 — INVITE CODE field */}
        <InviteCodeField
          value={forcedPhase === "validation-error" ? "" : code}
          onChange={(value) => {
            setCode(value);
            if (phase === "validation-error") setPhase("idle");
          }}
          disabled={Boolean(forcedPhase) || checking}
        />

        {/* WD-49 node 1182:644 — mint safety note */}
        <NoteStrip size="safety" className="mt-[20px] lg:mt-[32px]">
          {offline ? c.connect.safetyNoteOffline : c.connect.safetyNote}
        </NoteStrip>

        {banner && (
          <StateBanner tone={banner.tone} className="mt-[22px]">
            {banner.text}
          </StateBanner>
        )}

        {/* WD-49 node 1182:646 — 320px primary, relabelled per state */}
        <ActionButton
          tone={offline ? "muted" : "primary"}
          width={320}
          onClick={handleAction}
          disabled={offline || checking}
          className={banner ? "mt-[46px]" : "mt-[18px] lg:mt-[132px]"}
        >
          {checking && <LoaderCircle className="size-[16px] animate-spin" />}
          {actionLabel}
        </ActionButton>
      </div>
    </div>
  );
}
