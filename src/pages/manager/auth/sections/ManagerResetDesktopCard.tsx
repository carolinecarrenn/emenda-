import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";
import {
  ManagerAuthDesktopCodeField,
  ManagerAuthDesktopField,
} from "./ManagerAuthFields";
import {
  ManagerAuthOutlineButton,
  ManagerAuthPrimaryButton,
} from "./ManagerAuthButtons";

interface ManagerResetDesktopCardProps {
  code: string;
  onCode: (value: string) => void;
  newPassword: string;
  onNewPassword: (value: string) => void;
  loading: boolean;
  disabled: boolean;
  banner?: ReactNode;
  alert?: ReactNode;
  onSubmit: () => void;
  /** MD-AUTH-03's explicit demo path into the 03A error twin. */
  onDemoInvalid: () => void;
}

/** MD-AUTH-03 Reset Password Verification card (1193:44): 24px "Verification
 *  code" title over the 13px "Code sent to <email>" line, the label-less
 *  #f1f6f3 code field, the NEW PASSWORD field on the same mint fill, the 49px "Verify & update
 *  password" pill and the 41px outlined "Demo invalid / expired code" path.
 *  The confirm-password field and the requirements panel belong to the
 *  EM-AUTH-03 mobile frame only — the desktop card does not carry them. */
export function ManagerResetDesktopCard({
  code,
  onCode,
  newPassword,
  onNewPassword,
  loading,
  disabled,
  banner,
  alert,
  onSubmit,
  onDemoInvalid,
}: ManagerResetDesktopCardProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).reset;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="font-display text-[24px] leading-[29px] font-bold text-[#0b4f3f]">
        {c.desktopCardTitle}
      </h2>
      <p className="mt-[13px] text-[13px] leading-[16px] text-[#6d7d75]">
        {fillManagerAuthCopy(c.desktopCardBody, {
          email: MANAGER_AUTH_ACCOUNT.workEmail,
        })}
      </p>

      {banner ? <div className="mt-[24px]">{banner}</div> : null}

      <ManagerAuthDesktopCodeField
        id="manager-reset-code-desktop"
        className="mt-[37px]"
        label={c.codeLabel}
        value={code}
        onChange={onCode}
      />
      <ManagerAuthDesktopField
        id="manager-reset-new-password-desktop"
        className="mt-[26px]"
        label={c.newPasswordCaps}
        value={newPassword}
        onChange={onNewPassword}
        type="password"
        tone="mint"
        autoComplete="new-password"
      />

      {alert ? <div className="mt-[20px]">{alert}</div> : null}

      <ManagerAuthPrimaryButton
        className="mt-[27px]"
        heightClass="h-[44px] lg:h-[49px]"
        tone="card"
        type="submit"
        disabled={disabled}
      >
        {loading ? c.saving : c.verifyCta}
      </ManagerAuthPrimaryButton>

      <ManagerAuthOutlineButton
        className="mt-[15px]"
        heightClass="h-[44px] lg:h-[41px]"
        onClick={onDemoInvalid}
      >
        {c.demoInvalidCta}
      </ManagerAuthOutlineButton>
    </form>
  );
}
