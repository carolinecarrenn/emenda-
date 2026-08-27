import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthMobileField } from "./ManagerAuthFields";
import {
  ManagerAuthPrimaryButton,
  ManagerAuthTextLink,
} from "./ManagerAuthButtons";
import { ManagerAuthBanner, ManagerAuthMintCard } from "./ManagerAuthCallouts";

interface ManagerForgotMobileFormProps {
  email: string;
  onEmail: (value: string) => void;
  loading: boolean;
  /** 02C offline: amber banner under the field, CTA becomes "Try again". */
  offline: boolean;
  /** 02D: red label + outline and the peach "Work email not found" banner. */
  notFound: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

/** EM-AUTH-02 Forgot Password form (842:1569-1574 + 908:9) with its 02A
 *  Loading (842:1584-1588), 02C Offline (842:1611-1619) and 02D Email Not
 *  Found (842:1886-1894) variants: the Work email field at y=242, then either
 *  the mint "Security" prototype note (base only) or the state banner, the
 *  pill and the "Back to sign in" link. */
export function ManagerForgotMobileForm({
  email,
  onEmail,
  loading,
  offline,
  notFound,
  onSubmit,
  onBack,
}: ManagerForgotMobileFormProps) {
  const copy = useSectionCopy(MANAGER_AUTH_COPY);
  const c = copy.forgot;
  const base = !loading && !offline && !notFound;

  const ctaLabel = loading
    ? c.sending
    : offline
      ? copy.offline.tryAgain
      : notFound
        ? c.tryAnotherEmail
        : c.sendCode;

  const ctaGap = base
    ? "mt-[24px]"
    : loading
      ? "mt-[14px]"
      : "mt-[22px]";
  const backGap = base
    ? "mt-[10px]"
    : loading
      ? "mt-[22px]"
      : "mt-[20px]";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <ManagerAuthMobileField
        id="manager-forgot-email"
        label={c.workEmailLabel}
        value={email}
        onChange={onEmail}
        type="email"
        inputMode="email"
        autoComplete="username"
        invalid={notFound}
      />

      {base ? (
        <ManagerAuthMintCard
          className="mt-[22px] min-h-[100px]"
          title={c.securityTitle}
          body={c.securityBody}
        />
      ) : null}

      {offline ? (
        <ManagerAuthBanner
          className="mt-[12px]"
          tone="amber"
          title={copy.offline.title}
          body={c.offlineBannerBody}
        />
      ) : null}
      {notFound ? (
        <ManagerAuthBanner
          className="mt-[12px]"
          tone="peach"
          heightClass="min-h-[84px]"
          title={c.notFoundTitle}
          body={c.notFoundBody}
        />
      ) : null}

      <ManagerAuthPrimaryButton
        className={ctaGap}
        type="submit"
        disabled={loading}
      >
        {ctaLabel}
      </ManagerAuthPrimaryButton>

      <div className={`${backGap} flex h-[24px] items-start`}>
        <ManagerAuthTextLink onClick={onBack}>
          {c.backToSignIn}
        </ManagerAuthTextLink>
      </div>
    </form>
  );
}
