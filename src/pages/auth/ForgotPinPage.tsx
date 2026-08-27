import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY } from "./auth.copy";
import { AUTH_PHONE } from "./authMock";
import { isAccountPhone } from "./authFlow";
import { useOffline, withOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { CountryPhoneFields } from "./components/AuthFields";
import { MintCallout, OfflineBanner } from "./components/AuthCallouts";
import { RecoverAccessScreen } from "./components/RecoverAccessScreen";

/** WD-08 Forgot PIN (745:1116) + 08A Loading · 08B Phone Not Found · 08D
 *  Offline, and the distinct WD-08C "Recover account access" screen (reached
 *  via the "I can't access this phone" link or ?state=no-phone-access).
 *  W-08 mobile: same single column.
 *
 *  08B is raised by a number that is not the account's verified one. 08D
 *  follows the browser's connection state (useOffline), is reached by
 *  clicking through from W-04D, and is carried on to W-06G by "Send
 *  verification code"; its "Try again" clears the pin. */
export function ForgotPinPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const c = useSectionCopy(AUTH_COPY);
  const [phone, setPhone] = useState(AUTH_PHONE.number);
  const [sending, setSending] = useState(false);
  const [unknownPhone, setUnknownPhone] = useState(false);

  const offline = useOffline();
  const notFound = state === "not-found" || unknownPhone;
  const loading = state === "loading" || sending;

  const changePhone = (value: string) => {
    setPhone(value);
    setUnknownPhone(false);
  };

  if (state === "no-phone-access") {
    return <RecoverAccessScreen offline={offline} />;
  }

  const sendCode = () => {
    if (loading) return;
    /* W-08B: recovery only starts for the account's verified number. */
    if (!isAccountPhone(phone)) {
      setUnknownPhone(true);
      return;
    }
    setUnknownPhone(false);
    setSending(true);
    setTimeout(
      () => navigate(withOffline("/auth/otp?flow=recovery", offline)),
      900,
    );
  };

  return (
    <AuthLayout
      title={c.forgotPin.title}
      subtitle={c.forgotPin.subtitle}
      railTopClass={
        offline
          ? "lg:pt-[180px]"
          : notFound
            ? "lg:pt-[195px]"
            : "lg:pt-[215px]"
      }
      railMobileTopClass={offline ? "mt-[16px]" : "mt-[38px]"}
    >
      {offline ? (
        <OfflineBanner
          title={c.offline.title}
          action={c.offline.tryAgain}
          onAction={() => navigate("/auth/forgot-pin")}
          className="mb-[44px] lg:mb-[38px]"
        />
      ) : null}

      <CountryPhoneFields
        countryLabel={c.login.countryLabel}
        phoneLabel={c.login.phoneLabel}
        country={AUTH_PHONE.country}
        dialCode={AUTH_PHONE.dialCode}
        phoneValue={phone}
        onPhoneChange={changePhone}
        phoneError={notFound ? c.forgotPin.phoneNotFound : null}
        indentError={false}
      />

      <div
        className={
          notFound ? "mt-[22px] lg:mt-[26px]" : "mt-[14px] lg:mt-[15px]"
        }
      >
        <AuthTextLink
          onClick={() => navigate("/auth/forgot-pin?state=no-phone-access")}
          className="font-semibold text-brand"
          sizeClass="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[17px]"
        >
          {c.forgotPin.noPhoneAccess}
        </AuthTextLink>
      </div>

      <MintCallout
        title={c.forgotPin.whyTitle}
        body={c.forgotPin.whyBody}
        padClass="px-[16px] pt-[16px] pb-[20px] lg:pb-[38px]"
        className="mt-[24px] lg:mt-[27px]"
      />

      <div className="mt-[28px] lg:mt-[34px]">
        <AuthPrimaryButton onClick={sendCode} disabled={loading}>
          {loading ? c.forgotPin.sending : c.forgotPin.send}
        </AuthPrimaryButton>
      </div>

      <div className="mt-[24px] lg:mt-[26px]">
        <AuthTextLink
          onClick={() => navigate(withOffline("/auth/login", offline))}
        >
          {c.forgotPin.backToLogin}
        </AuthTextLink>
      </div>
    </AuthLayout>
  );
}
