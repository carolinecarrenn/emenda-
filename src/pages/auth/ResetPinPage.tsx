import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY } from "./auth.copy";
import { MOCK_PIN } from "./authMock";
import { useOffline, withOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { PinInput } from "./components/AuthFields";
import {
  InlineAlertCard,
  MintCallout,
  OfflineBanner,
} from "./components/AuthCallouts";

const RAIL_TOP: Record<string, string> = {
  offline: "lg:pt-[181px]",
  failed: "lg:pt-[201px]",
  success: "lg:pt-[224px]",
  mismatch: "lg:pt-[225px]",
};

/** WD-09 Reset PIN (745:1230) — reuses the Create PIN layout; 09A Mismatch ·
 *  09B Loading · 09C Success ("PIN updated" inline alert + "Continue to log
 *  in") · 09D Failed ("Couldn't update PIN" alert + Try again) · 09E Offline.
 *  W-09 mobile: same single column.
 *
 *  09E follows the browser's connection state (useOffline) and is reached by
 *  clicking through from W-06G; its "Try again" clears the pin. 09D is a
 *  server outcome, so it keeps ?state=failed.
 *
 *  W-09A (422:481) and WD-09A (745:1249) draw the confirm field with a red
 *  hairline and the CTA disabled while the two PINs disagree, and WD-09E
 *  (745:1331) disables it while the connection is down; editing either PIN —
 *  or the connection coming back — re-enables it. */
export function ResetPinPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const c = useSectionCopy(AUTH_COPY);
  const [newPin, setNewPin] = useState(MOCK_PIN);
  const [confirmPin, setConfirmPin] = useState(MOCK_PIN);
  const [localMismatch, setLocalMismatch] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const mismatch = state === "mismatch" || localMismatch;
  const loading = state === "loading" || saving;
  const failed = state === "failed";
  const success = state === "success" || saved;
  const offline = useOffline();

  const changeNewPin = (value: string) => {
    setNewPin(value);
    setLocalMismatch(false);
  };

  const changeConfirmPin = (value: string) => {
    setConfirmPin(value);
    setLocalMismatch(false);
  };

  const submit = () => {
    if (loading) return;
    if (success) {
      navigate("/auth/login");
      return;
    }
    if (failed) return;
    if (newPin.length !== 6 || newPin !== confirmPin) {
      setLocalMismatch(true);
      return;
    }
    setLocalMismatch(false);
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
    }, 900);
  };

  return (
    <AuthLayout
      title={c.resetPin.title}
      subtitle={c.resetPin.subtitle}
      railTopClass={
        offline
          ? RAIL_TOP.offline
          : (RAIL_TOP[state ?? ""] ?? "lg:pt-[232px]")
      }
      railMobileTopClass={offline ? "mt-[16px]" : "mt-[40px]"}
    >
      {offline ? (
        <OfflineBanner
          title={c.offline.title}
          action={c.offline.tryAgain}
          onAction={() => navigate("/auth/reset-pin")}
          className="mb-[46px] lg:mb-[45px]"
        />
      ) : null}

      <p className="mb-[9px] text-[11px] leading-[13px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px] lg:mb-[6px]">
        {c.pin.newPinLabel}
      </p>
      <PinInput value={newPin} onChange={changeNewPin} />

      <p className="mt-[22px] mb-[9px] text-[11px] leading-[13px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px] lg:mt-[24px] lg:mb-[6px]">
        {c.pin.confirmPinLabel}
      </p>
      <PinInput
        value={confirmPin}
        onChange={changeConfirmPin}
        invalid={mismatch}
      />
      {mismatch ? (
        <p className="mt-[5px] text-[11px] leading-[16px] font-medium text-[#c73833] lg:mt-[6px] lg:text-[13px]">
          {c.pin.mismatch}
        </p>
      ) : null}

      <MintCallout
        title={c.pin.reqTitle}
        body={c.pin.reqBody}
        padClass="px-[16px] pt-[16px] pb-[18px] lg:pb-[36px]"
        className={mismatch ? "mt-[20px] lg:mt-[22px]" : "mt-[26px] lg:mt-[28px]"}
      />

      {success ? (
        <InlineAlertCard
          title={c.resetPin.successTitle}
          body={c.resetPin.successBody}
          className="mt-[13px] rounded-[14px] border border-[#08745e] bg-[#e8f7f2] lg:mt-[18px]"
        />
      ) : null}
      {failed ? (
        <InlineAlertCard
          title={c.resetPin.failedTitle}
          body={c.resetPin.failedBody}
          className="mt-[13px] rounded-[14px] border border-[#c73833] bg-[#fff2f2] lg:mt-[18px]"
          titleClass="text-signal"
        />
      ) : null}

      <div
        className={
          success
            ? "mt-[16px] lg:mt-[15px]"
            : failed
              ? "mt-[16px] lg:mt-[20px]"
              : "mt-[26px] lg:mt-[32px]"
        }
      >
        <AuthPrimaryButton
          onClick={submit}
          disabled={loading || mismatch || (offline && !success)}
        >
          {loading
            ? c.resetPin.saving
            : success
              ? c.resetPin.continueToLogin
              : failed
                ? c.resetPin.tryAgain
                : c.resetPin.submit}
        </AuthPrimaryButton>
      </div>

      {!success ? (
        <div className="mt-[24px] lg:mt-[26px]">
          <AuthTextLink
            onClick={() => navigate(withOffline("/auth/login", offline))}
          >
            {c.resetPin.cancelRecovery}
          </AuthTextLink>
        </div>
      ) : null}
    </AuthLayout>
  );
}
