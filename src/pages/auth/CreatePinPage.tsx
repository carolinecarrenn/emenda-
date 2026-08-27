import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY } from "./auth.copy";
import { MOCK_PIN } from "./authMock";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { PinInput } from "./components/AuthFields";
import { MintCallout } from "./components/AuthCallouts";

/** WD-07 Create PIN (745:1038) + 07A Mismatch · 07B Loading · 07C Failed.
 *  NEW PIN / CONFIRM PIN masked fields, mint "PIN requirements" callout,
 *  green Create PIN, centered Back link. W-07 mobile: same single column.
 *
 *  End of the signup leg: the new account continues into section 02 at W-12
 *  "Your EMENDA ID is ready" (/onboarding/id), which is where the mobile flow
 *  goes — not straight to Home, which would skip identity setup entirely.
 *  The mock's "Back" (421:115) returns to W-06 OTP, the screen that sent
 *  the worker here. */
export function CreatePinPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const c = useSectionCopy(AUTH_COPY);
  const common = useCommonCopy();
  const [newPin, setNewPin] = useState(MOCK_PIN);
  const [confirmPin, setConfirmPin] = useState(MOCK_PIN);
  const [localMismatch, setLocalMismatch] = useState(false);
  const [saving, setSaving] = useState(false);

  const mismatch = state === "mismatch" || localMismatch;
  const loading = state === "loading" || saving;
  const failed = state === "failed";

  const submit = () => {
    if (loading) return;
    if (newPin.length !== 6 || newPin !== confirmPin) {
      setLocalMismatch(true);
      return;
    }
    setLocalMismatch(false);
    setSaving(true);
    setTimeout(() => navigate("/onboarding/id"), 900);
  };

  return (
    <AuthLayout
      title={c.createPin.title}
      subtitle={c.createPin.subtitle}
      railTopClass="lg:pt-[232px]"
      railMobileTopClass="mt-[40px]"
    >
      <p className="mb-[9px] text-[11px] leading-[13px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px] lg:mb-[7px]">
        {c.pin.newPinLabel}
      </p>
      <PinInput value={newPin} onChange={setNewPin} />

      <p className="mt-[22px] mb-[9px] text-[11px] leading-[13px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px] lg:mt-[24px] lg:mb-[7px]">
        {c.pin.confirmPinLabel}
      </p>
      <PinInput value={confirmPin} onChange={setConfirmPin} />
      {mismatch ? (
        <p className="mt-[5px] text-[11px] leading-[16px] font-medium text-[#c73833] lg:mt-[7px] lg:text-[13px]">
          {c.pin.mismatch}
        </p>
      ) : null}

      <MintCallout
        title={c.pin.reqTitle}
        body={c.pin.reqBody}
        padClass="px-[16px] pt-[16px] pb-[18px] lg:pb-[36px]"
        className={mismatch ? "mt-[20px] lg:mt-[26px]" : "mt-[26px]"}
      />

      {failed ? (
        <p className="mt-[14px] min-h-[32px] text-[11px] leading-[16px] text-[#c71f1f] lg:mt-[20px] lg:min-h-0 lg:text-[13px]">
          {c.createPin.failed}
        </p>
      ) : null}

      <div
        className={
          failed ? "mt-[12px] lg:mt-[30px]" : "mt-[26px] lg:mt-[32px]"
        }
      >
        <AuthPrimaryButton onClick={submit} disabled={loading}>
          {loading
            ? c.createPin.saving
            : failed
              ? c.createPin.tryAgain
              : c.createPin.submit}
        </AuthPrimaryButton>
      </div>

      <div className="mt-[24px] lg:mt-[26px]">
        <AuthTextLink onClick={() => navigate("/auth/otp")}>
          {common.action.back}
        </AuthTextLink>
      </div>
    </AuthLayout>
  );
}
