import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY } from "./auth.copy";
import { AUTH_PHONE } from "./authMock";
import { isPlausiblePhone } from "./authFlow";
import { useOffline, withOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { BackToWelcomeLink } from "./components/BackToWelcomeLink";
import { CountryPhoneFields } from "./components/AuthFields";
import { OfflineBanner } from "./components/AuthCallouts";

/** WD-05 Register (745:2) + 05A Loading · 05B Invalid Phone · 05C Phone
 *  Already Registered · 05D Offline. W-05 mobile: same single column.
 *
 *  Entered from W-03 Welcome ("Create new account") and from the public
 *  LP-05 sign-in card; "Already have an account? Log in" is the mock's own way
 *  back to W-04 and "Back to welcome" is the added leg back to the W-03 fork.
 *  Clearing the number and continuing raises 05B for real; 05D follows the
 *  browser's connection state (useOffline) and is carried on to W-06G by
 *  "Continue to verification"; 05C needs a server answer this prototype has
 *  no honest source for, so it keeps ?state=registered. */
export function RegisterPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const copy = useSectionCopy(AUTH_COPY);
  const c = copy.register;
  const offlineCopy = copy.offline;
  const [phone, setPhone] = useState(AUTH_PHONE.number);
  const [submitting, setSubmitting] = useState(false);
  const [badPhone, setBadPhone] = useState(false);

  const offline = useOffline();
  const loading = state === "loading" || submitting;
  const registered = state === "registered";
  const phoneError =
    state === "invalid" || badPhone
      ? c.invalidPhone
      : registered
        ? c.alreadyRegistered
        : null;

  const changePhone = (value: string) => {
    setPhone(value);
    setBadPhone(false);
  };

  const continueToVerification = () => {
    if (loading) return;
    if (!isPlausiblePhone(phone)) {
      setBadPhone(true);
      return;
    }
    setBadPhone(false);
    setSubmitting(true);
    setTimeout(() => navigate(withOffline("/auth/otp", offline)), 900);
  };

  return (
    <AuthLayout
      title={c.title}
      subtitle={c.subtitle}
      railTopClass={offline ? "lg:pt-[197px]" : "lg:pt-[235px]"}
      railMobileTopClass={offline ? "mt-[26px]" : "mt-[38px]"}
    >
      {offline ? (
        <OfflineBanner
          title={offlineCopy.title}
          action={offlineCopy.tryAgain}
          onAction={() => navigate("/auth/register")}
          className="mb-[24px] lg:mb-[22px]"
        />
      ) : null}

      <CountryPhoneFields
        countryLabel={copy.login.countryLabel}
        phoneLabel={copy.login.phoneLabel}
        country={AUTH_PHONE.country}
        dialCode={AUTH_PHONE.dialCode}
        phoneValue={phone}
        onPhoneChange={changePhone}
        phoneError={phoneError}
        errorTone={registered ? "warning" : "error"}
      />

      <div
        className={
          registered
            ? "mt-[8px] lg:mt-[26px]"
            : phoneError
              ? "mt-[22px] lg:mt-[26px]"
              : "mt-[26px]"
        }
      >
        <AuthPrimaryButton
          onClick={continueToVerification}
          disabled={loading}
          className="rounded-[14px] bg-[#0a8266] hover:bg-[#08745e]"
          disabledClass="rounded-[14px] bg-[#c2d1c9]"
          textClass="text-[13px]"
        >
          {loading ? c.loading : c.primary}
        </AuthPrimaryButton>
      </div>

      <div className="mt-[24px] lg:mt-[26px]">
        <AuthTextLink
          onClick={() => navigate(withOffline("/auth/login", offline))}
          className="font-normal text-[#055e4d]"
          sizeClass="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[17px]"
        >
          {c.secondary}
        </AuthTextLink>
      </div>

      <div className="mt-[40px] rounded-[14px] bg-[#e5f5f0] px-[14px] pt-[13px] pb-[21px] lg:mt-[44px] lg:pb-[26px]">
        <p className="text-[12px] leading-[17px] font-semibold text-[#173b33]">
          {c.noteTitle}
        </p>
        <p className="mt-[7px] text-[11px] leading-[18px] text-[#7a918a] lg:mt-[9px] lg:leading-[13px]">
          {c.noteBody}
        </p>
      </div>

      {/* W-05's own way back is "Already have an account? Log in"; this is the
          leg back up to the W-03 fork itself, which the frame never draws. */}
      <div className="mt-[22px]">
        <BackToWelcomeLink />
      </div>
    </AuthLayout>
  );
}
