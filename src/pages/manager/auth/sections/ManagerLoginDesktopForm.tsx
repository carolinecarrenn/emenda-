import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthDesktopCardField } from "./ManagerAuthFields";
import {
  ManagerAuthPrimaryButton,
  ManagerAuthTextLink,
} from "./ManagerAuthButtons";
import { ManagerLanguageRow } from "./ManagerLanguageRow";

interface ManagerLoginDesktopFormProps {
  managerId: string;
  onManagerId: (value: string) => void;
  organization: string;
  onOrganization: (value: string) => void;
  invalid: boolean;
  loading: boolean;
  disabled: boolean;
  banner?: ReactNode;
  alert?: ReactNode;
  onSubmit: () => void;
  onForgot: () => void;
}

/** MD-AUTH-01 form column (nodes 1193:14-25) on the #f7f9f6 canvas right of
 *  the brand panel: "Manager Login" H1, the org-scope subtitle, the two
 *  641x63 white input cards (Manager / HR ID · Organization / Company), the
 *  full-width "Continue to Organization Access" pill, the recovery link and
 *  the language row. Desktop authenticates the organization pair — the
 *  work-email + password pair is the EM-AUTH-01 mobile variant. */
export function ManagerLoginDesktopForm({
  managerId,
  onManagerId,
  organization,
  onOrganization,
  invalid,
  loading,
  disabled,
  banner,
  alert,
  onSubmit,
  onForgot,
}: ManagerLoginDesktopFormProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).login;

  return (
    <form
      className="w-[642px]"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h1 className="font-display text-[34px] leading-[41px] font-bold text-brand-deep">
        {c.desktopTitle}
      </h1>
      <p className="mt-[4px] text-[14px] leading-[17px] text-ink-muted">
        {c.desktopSubtitle}
      </p>

      {banner ? <div className="mt-[28px]">{banner}</div> : null}

      <ManagerAuthDesktopCardField
        id="manager-login-id"
        className="mt-[46px]"
        label={c.managerIdLabel}
        value={managerId}
        onChange={onManagerId}
        autoComplete="username"
        invalid={invalid}
      />
      <ManagerAuthDesktopCardField
        id="manager-login-org"
        className="mt-[17px]"
        label={c.organizationLabel}
        value={organization}
        onChange={onOrganization}
        autoComplete="organization"
      />

      {alert ? <div className="mt-[18px]">{alert}</div> : null}

      <ManagerAuthPrimaryButton
        className="mt-[28px]"
        heightClass="h-[44px] lg:h-[56px]"
        type="submit"
        disabled={disabled}
      >
        {loading ? c.signingIn : c.continueCta}
      </ManagerAuthPrimaryButton>

      <div className="mt-[15px]">
        <ManagerAuthTextLink onClick={onForgot}>{c.forgot}</ManagerAuthTextLink>
      </div>

      <ManagerLanguageRow className="mt-[34px]" />
    </form>
  );
}
