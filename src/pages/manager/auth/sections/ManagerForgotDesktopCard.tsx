import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthDesktopField } from "./ManagerAuthFields";
import {
  ManagerAuthOutlineButton,
  ManagerAuthPrimaryButton,
} from "./ManagerAuthButtons";

interface ManagerForgotDesktopCardProps {
  email: string;
  onEmail: (value: string) => void;
  loading: boolean;
  disabled: boolean;
  primaryLabel: string;
  banner?: ReactNode;
  alert?: ReactNode;
  notice?: ReactNode;
  onSubmit: () => void;
  onBack: () => void;
}

/** MD-AUTH-02 card body (nodes 1193:34-42): "Reset your password" heading,
 *  the delivery explanation, the caps EMAIL field, the dark-green
 *  "Send verification code" pill and the white "Back to login" outline. */
export function ManagerForgotDesktopCard({
  email,
  onEmail,
  loading,
  disabled,
  primaryLabel,
  banner,
  alert,
  notice,
  onSubmit,
  onBack,
}: ManagerForgotDesktopCardProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).forgot;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="font-display text-[24px] leading-[29px] font-bold text-[#0b4f3f]">
        {c.cardTitle}
      </h2>
      <p className="mt-[16px] text-[14px] leading-[17px] text-[#6d7d75]">
        {c.cardBody}
      </p>

      {banner ? <div className="mt-[24px]">{banner}</div> : null}

      <ManagerAuthDesktopField
        id="manager-forgot-email-desktop"
        className="mt-[36px]"
        label={c.emailLabel}
        value={email}
        onChange={onEmail}
        type="email"
        tone="mint"
        autoComplete="username"
      />

      {alert ? <div className="mt-[20px]">{alert}</div> : null}
      {notice ? <div className="mt-[20px]">{notice}</div> : null}

      <ManagerAuthPrimaryButton
        className="mt-[27px]"
        heightClass="h-[44px] lg:h-[49px]"
        tone="card"
        type="submit"
        disabled={disabled}
      >
        {loading ? c.sending : primaryLabel}
      </ManagerAuthPrimaryButton>

      <ManagerAuthOutlineButton
        className="mt-[15px]"
        heightClass="h-[44px] lg:h-[43px]"
        onClick={onBack}
      >
        {c.backToLogin}
      </ManagerAuthOutlineButton>
    </form>
  );
}
