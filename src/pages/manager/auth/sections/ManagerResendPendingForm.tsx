import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";
import { ManagerAuthMobileField } from "./ManagerAuthFields";
import { ManagerAuthPrimaryButton } from "./ManagerAuthButtons";

interface ManagerResendPendingFormProps {
  code: string;
  onCode: (value: string) => void;
}

/** EM-AUTH-03G Resend · Pending (842:1761-1766): while a new code is on its
 *  way the frame keeps only the (cleared) Verification code field at y=226,
 *  the grey "Resend available in 00:59" countdown at y=294 and the disabled
 *  "Update password" pill at y=342 — the password pair, the requirements
 *  panel and the Resend link stay on the base screen. */
export function ManagerResendPendingForm({
  code,
  onCode,
}: ManagerResendPendingFormProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).reset;

  return (
    <div>
      <ManagerAuthMobileField
        id="manager-reset-code"
        label={c.codeLabel}
        value={code}
        onChange={onCode}
        inputMode="numeric"
        autoComplete="one-time-code"
      />
      <div className="mt-[20px] flex h-[24px] items-start">
        <p className="text-[11px] font-semibold text-[#6f8781]">
          {fillManagerAuthCopy(c.resendCountdown, {
            time: MANAGER_AUTH_ACCOUNT.resendCountdown,
          })}
        </p>
      </div>
      <ManagerAuthPrimaryButton className="mt-[24px]" disabled>
        {c.updatePassword}
      </ManagerAuthPrimaryButton>
    </div>
  );
}
