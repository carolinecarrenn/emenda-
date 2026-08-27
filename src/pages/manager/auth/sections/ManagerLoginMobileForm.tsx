import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthMobileField } from "./ManagerAuthFields";
import {
  ManagerAuthPrimaryButton,
  ManagerAuthTextLink,
} from "./ManagerAuthButtons";
import { ManagerAuthBanner, ManagerAuthMintCard } from "./ManagerAuthCallouts";
import { ManagerLanguageRow } from "./ManagerLanguageRow";

interface ManagerLoginMobileFormProps {
  email: string;
  onEmail: (value: string) => void;
  password: string;
  onPassword: (value: string) => void;
  /** EM-AUTH-01B: red Password label + outline. */
  invalid: boolean;
  /** EM-AUTH-01C: amber lockout banner and the counting-down CTA. */
  tooMany: boolean;
  loading: boolean;
  /** 01C lockout CTA label, already filled with the mock countdown. */
  lockoutCta: string;
  /** 01C banner body, already filled with the mock countdown. */
  lockoutBody: string;
  onSubmit: () => void;
  onForgot: () => void;
}

/** EM-AUTH-01 Login form (842:1467-1475 + 908:6 + 914:3) and its 01A / 01B /
 *  01C variants. The frames re-order the same parts per state: the base screen
 *  keeps the right-aligned "Forgot password?" above the pill, the mint "Mobile
 *  access" card and the language row; 01A swaps the pill for the disabled
 *  "Signing in…" one plus a loading note; 01B drops the banner between the
 *  fields and the link; 01C moves the link below the locked CTA. */
export function ManagerLoginMobileForm({
  email,
  onEmail,
  password,
  onPassword,
  invalid,
  tooMany,
  loading,
  lockoutCta,
  lockoutBody,
  onSubmit,
  onForgot,
}: ManagerLoginMobileFormProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).login;
  const base = !invalid && !tooMany && !loading;

  const forgotLink = (
    <ManagerAuthTextLink onClick={onForgot}>{c.forgot}</ManagerAuthTextLink>
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <ManagerAuthMobileField
        id="manager-login-email"
        label={c.workEmailLabel}
        value={email}
        onChange={onEmail}
        type="email"
        inputMode="email"
        autoComplete="username"
      />
      <ManagerAuthMobileField
        id="manager-login-password"
        className="mt-[12px]"
        label={c.passwordLabel}
        value={password}
        onChange={onPassword}
        type="password"
        autoComplete="current-password"
        invalid={invalid}
      />

      {/* 01B peach alert (842:1507) / 01C amber lockout (842:1527) at y=378. */}
      {invalid ? (
        <ManagerAuthBanner
          className="mt-[22px]"
          tone="peach"
          title={c.invalidTitle}
          body={c.invalidBody}
        />
      ) : null}
      {tooMany ? (
        <ManagerAuthBanner
          className="mt-[22px]"
          tone="amber"
          title={c.tooManyTitle}
          body={lockoutBody}
        />
      ) : null}

      {/* Base y=365 · 01B y=472 — right-aligned above the CTA. */}
      {base || invalid ? (
        <div
          className={`flex h-[24px] items-start justify-end ${
            invalid ? "mt-[15px]" : "mt-[9px]"
          }`}
        >
          {forgotLink}
        </div>
      ) : null}

      <ManagerAuthPrimaryButton
        className={
          loading ? "mt-[54px]" : tooMany ? "mt-[24px]" : "mt-[21px]"
        }
        type="submit"
        disabled={loading || tooMany}
      >
        {loading ? c.signingIn : tooMany ? lockoutCta : c.signIn}
      </ManagerAuthPrimaryButton>

      {/* 01A loading note (842:1492) at y=472. */}
      {loading ? (
        <p className="mt-[18px] text-[10px] leading-[12px] text-[#6f8781]">
          {c.loadingNote}
        </p>
      ) : null}

      {/* 01C repeats the link below the locked CTA, left-aligned (842:1532). */}
      {tooMany ? (
        <div className="mt-[18px] flex h-[24px] items-start">{forgotLink}</div>
      ) : null}

      {base ? (
        <>
          <ManagerAuthMintCard
            className="mt-[32px] min-h-[94px]"
            title={c.mobileAccessTitle}
            body={c.mobileAccessBody}
          />
          <ManagerLanguageRow className="mt-[27px]" />
        </>
      ) : null}
    </form>
  );
}
