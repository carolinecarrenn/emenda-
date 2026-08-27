import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY, fillCopy } from "./auth.copy";
import { AUTH_PHONE, LOCKOUT_SECONDS, MOCK_PIN } from "./authMock";
import { isAccountPin, MAX_PIN_ATTEMPTS } from "./authFlow";
import { useOffline, withOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { BackToWelcomeLink } from "./components/BackToWelcomeLink";
import { CountryPhoneFields, PinInput } from "./components/AuthFields";
import { OfflineBanner } from "./components/AuthCallouts";
import { formatSeconds, useCountdown } from "./components/useCountdown";

/** WD-04 Login (744:81) + 04A Loading · 04B Invalid PIN · 04C Too Many
 *  Attempts (live 14:32 countdown in helper AND button label) · 04D Offline.
 *  W-04 (421:29) mobile: same stack, single column.
 *
 *  04B and 04C are driven by real input: a PIN other than the account PIN
 *  shows Invalid, and MAX_PIN_ATTEMPTS wrong tries lock the button until the
 *  countdown drains. 04D follows the browser's own connection state (see
 *  useOffline) and keeps ?state=offline as its review URL; its "Try again"
 *  clears that pin and "Forgot PIN?" carries it on to W-08D. The field is
 *  prefilled with the account PIN, so the canonical Log in → /worker path is
 *  still one click, and "Back to welcome" is the leg back to the W-03 fork
 *  that the frame itself never draws. */
export function LoginPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const c = useSectionCopy(AUTH_COPY);
  const common = useCommonCopy();
  const [phone, setPhone] = useState(AUTH_PHONE.number);
  const [pin, setPin] = useState(MOCK_PIN);
  const [submitting, setSubmitting] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [wrongPin, setWrongPin] = useState(false);
  /* Timestamp of the last lock — doubles as the countdown's reset key so a
     second lock restarts the 14:32 window instead of resuming a drained one. */
  const [lockedAt, setLockedAt] = useState<number | null>(null);

  const offline = useOffline();
  const lockRunning = state === "lockout" || lockedAt !== null;
  const lockoutLeft = useCountdown(LOCKOUT_SECONDS, lockRunning, lockedAt);
  const lockout =
    state === "lockout" || (lockedAt !== null && lockoutLeft > 0);
  const invalid = (state === "invalid" || wrongPin) && !lockout;
  const loading = state === "loading" || submitting;
  const lockoutTime = formatSeconds(lockoutLeft);

  const changePin = (value: string) => {
    setPin(value);
    setWrongPin(false);
  };

  const logIn = () => {
    if (loading || lockout) return;
    if (!isAccountPin(pin)) {
      const tried = attempts + 1;
      setWrongPin(true);
      if (tried >= MAX_PIN_ATTEMPTS) {
        setAttempts(0);
        setLockedAt(Date.now());
      } else {
        setAttempts(tried);
      }
      return;
    }
    setWrongPin(false);
    setSubmitting(true);
    setTimeout(() => navigate("/worker"), 900);
  };

  return (
    <AuthLayout
      title={common.action.logIn}
      subtitle={c.login.subtitle}
      railTopClass={offline ? "lg:pt-[204px]" : "lg:pt-[238px]"}
    >
      {offline ? (
        <OfflineBanner
          title={c.offline.title}
          action={c.offline.tryAgain}
          /* "Try again" is the mock's own retry control: it drops the offline
             pin and re-renders the connected screen. */
          onAction={() => navigate("/auth/login")}
          className="mb-[17px]"
        />
      ) : null}

      <CountryPhoneFields
        countryLabel={c.login.countryLabel}
        phoneLabel={c.login.phoneLabel}
        country={AUTH_PHONE.country}
        dialCode={AUTH_PHONE.dialCode}
        phoneValue={phone}
        onPhoneChange={setPhone}
      />

      <p className="mt-[26px] mb-[4px] text-[11px] leading-[18px] font-medium text-[#7c918b] lg:mt-[30px] lg:mb-[7px] lg:text-[14px] lg:leading-[17px]">
        {c.login.pinLabel}
      </p>
      <PinInput value={pin} onChange={changePin} />
      {invalid ? (
        <p className="mt-[7px] text-[13px] text-signal">{c.login.invalidPin}</p>
      ) : null}
      {lockout ? (
        <p className="mt-[7px] text-[13px] text-signal">
          {fillCopy(c.login.tooManyHelper, { time: lockoutTime })}
        </p>
      ) : null}

      <div className="mt-[24px] lg:mt-[28px]">
        <AuthPrimaryButton onClick={logIn} disabled={loading || lockout}>
          {loading
            ? c.login.loggingIn
            : lockout
              ? fillCopy(c.login.tryAgainIn, { time: lockoutTime })
              : common.action.logIn}
        </AuthPrimaryButton>
      </div>

      <div className="mt-[24px] lg:mt-[28px]">
        <AuthTextLink
          centered={false}
          onClick={() => navigate(withOffline("/auth/forgot-pin", offline))}
        >
          {c.login.forgotPin}
        </AuthTextLink>
      </div>

      {/* W-04 draws no back control, so the W-03 fork would be a one-way
          door — this is the leg back to it (see BackToWelcomeLink). */}
      <div className="mt-[18px]">
        <BackToWelcomeLink centered={false} />
      </div>
    </AuthLayout>
  );
}
