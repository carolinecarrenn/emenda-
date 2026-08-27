import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthMobileField } from "./ManagerAuthFields";
import {
  ManagerAuthPrimaryButton,
  ManagerAuthTextLink,
} from "./ManagerAuthButtons";
import { ManagerAuthTintPanel } from "./ManagerAuthCallouts";

interface ManagerResetMobileFormProps {
  code: string;
  onCode: (value: string) => void;
  newPassword: string;
  onNewPassword: (value: string) => void;
  confirmPassword: string;
  onConfirmPassword: (value: string) => void;
  /** 03B puts the red outline + helper on the verification code field and
   *  drops the requirements panel. */
  codeInvalid: boolean;
  /** 03D puts them on the confirm-password field and keeps the panel. */
  mismatch: boolean;
  /** 03A saving: disabled CTA, no Resend / Cancel row. */
  saving: boolean;
  onSubmit: () => void;
  onResend: () => void;
  onCancel: () => void;
}

/** EM-AUTH-03 Reset Password form (842:1629-1643) with the 03A Saving
 *  (842:1664), 03B Invalid Code (842:1674-1686) and 03D Mismatch
 *  (842:1709-1723 + 914:23) variants: Verification code, New password and
 *  Confirm password fields, the #e5f4ef "Password requirements" panel, the
 *  "Update password" pill and the Resend code / Cancel reset link row. */
export function ManagerResetMobileForm({
  code,
  onCode,
  newPassword,
  onNewPassword,
  confirmPassword,
  onConfirmPassword,
  codeInvalid,
  mismatch,
  saving,
  onSubmit,
  onResend,
  onCancel,
}: ManagerResetMobileFormProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).reset;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <ManagerAuthMobileField
        id="manager-reset-code"
        label={c.codeLabel}
        value={code}
        onChange={onCode}
        inputMode="numeric"
        autoComplete="one-time-code"
        invalid={codeInvalid}
        helper={codeInvalid ? c.invalidCodeHelper : undefined}
      />
      <ManagerAuthMobileField
        id="manager-reset-new-password"
        className="mt-[12px]"
        label={c.newPasswordLabel}
        value={newPassword}
        onChange={onNewPassword}
        type="password"
        autoComplete="new-password"
      />
      <ManagerAuthMobileField
        id="manager-reset-confirm-password"
        className="mt-[12px]"
        label={c.confirmPasswordLabel}
        value={confirmPassword}
        onChange={onConfirmPassword}
        type="password"
        autoComplete="new-password"
        invalid={mismatch}
        helper={mismatch ? c.mismatchHelper : undefined}
      />

      {/* 842:1638 — 03B replaces the panel with the red code helper. */}
      {codeInvalid ? null : (
        <ManagerAuthTintPanel
          className="mt-[14px] min-h-[72px]"
          title={c.requirementsTitle}
          body={c.requirementsBody}
        />
      )}

      <ManagerAuthPrimaryButton
        className={codeInvalid ? "mt-[34px]" : "mt-[22px]"}
        type="submit"
        disabled={saving}
      >
        {saving ? c.saving : c.updatePassword}
      </ManagerAuthPrimaryButton>

      {saving ? null : (
        <div className="mt-[18px] flex h-[24px] items-start justify-between">
          {mismatch ? <span /> : null}
          {mismatch ? null : (
            <ManagerAuthTextLink onClick={onResend}>
              {c.resendCode}
            </ManagerAuthTextLink>
          )}
          <ManagerAuthTextLink onClick={onCancel}>
            {c.cancelReset}
          </ManagerAuthTextLink>
        </div>
      )}
    </form>
  );
}
