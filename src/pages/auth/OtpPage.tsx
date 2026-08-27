import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY, fillCopy } from "./auth.copy";
import {
  AUTH_PHONE,
  LOCKOUT_SECONDS,
  OTP_COUNTDOWN_SECONDS,
  OTP_FULL,
  OTP_PREFILL,
  OTP_RESEND_SECONDS,
} from "./authMock";
import { isValidOtp, MAX_OTP_RESENDS } from "./authFlow";
import { useOffline, withOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./components/AuthButtons";
import { OfflineBanner } from "./components/AuthCallouts";
import { formatSeconds, useCountdown } from "./components/useCountdown";

const EMPTY = ["", "", "", "", "", ""];

/** W-06B/C/E inline helper: 11px medium, 16px line, tinted per outcome. */
const HELPER_BASE = "text-[11px] leading-[16px] font-medium lg:text-[13px]";
const HELPER = `mt-[7px] lg:mt-[10px] ${HELPER_BASE}`;
/** W-06D/F status line that replaces the Resend link. */
const STATUS_LINE =
  "text-center text-[13px] leading-[16px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px]";

const RAIL_TOP: Record<string, string> = {
  offline: "lg:pt-[256px]",
  expired: "lg:pt-[327px]",
  invalid: "lg:pt-[305px]",
  "new-code-sent": "lg:pt-[305px]",
  "too-many-requests": "lg:pt-[295px]",
};

/** WD-06 OTP Verification (745:122) — six digit boxes (80×58, 6px gaps),
 *  00:42 countdown, sage Verify that activates on completion, Resend code /
 *  Change phone number links. Nine lettered variants (A–I) via ?state= or
 *  real input; W-06 (421:72) mobile: same stack, boxes span the column.
 *
 *  Two entries, both live: the signup leg from W-05 Register (Verify → W-07
 *  Create PIN) and the recovery leg from W-08 Forgot PIN via ?flow=recovery
 *  (Verify → W-09 Reset PIN). "Change phone number" is the mock's back link
 *  and returns to whichever screen sent the code.
 *
 *  Interactive variants: a code other than the one sent raises 06B, the
 *  countdown draining raises 06C, "Resend code" raises 06E and then the 06D
 *  cooldown, and MAX_OTP_RESENDS presses raise 06F. 06G follows the browser's
 *  connection state (useOffline); it is also reached by clicking through from
 *  W-05D / W-08D, its "Try again" clears the pin, and Verify carries it on to
 *  W-09E. */
export function OtpPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const [params] = useSearchParams();
  const c = useSectionCopy(AUTH_COPY);
  const flow = params.get("flow");

  const [digits, setDigits] = useState<string[]>(OTP_PREFILL);
  const [seed, setSeed] = useState(OTP_COUNTDOWN_SECONDS);
  const [resendCount, setResendCount] = useState(0);
  const [wrongCode, setWrongCode] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const boxRefs = useRef<(HTMLInputElement | null)[]>([]);

  const offline = useOffline();
  const tooMany =
    state === "too-many-requests" || resendCount >= MAX_OTP_RESENDS;
  const loading = state === "loading" || verifying;
  const variantDigits =
    state === "loading" ||
    state === "invalid" ||
    state === "expired" ||
    state === "code-entered" ||
    state === "recovery-code"
      ? OTP_FULL
      : state === "new-code-sent"
        ? EMPTY
        : null;
  const shown = variantDigits ?? digits;
  const complete = shown.every((digit) => digit !== "");

  /* Validity window of the code that was last sent — 00:42 for the first
     code, 00:59 for every resent one. `resendCount` restarts it. */
  const countdownLeft = useCountdown(
    state === "new-code-sent" ? OTP_RESEND_SECONDS : seed,
    true,
    resendCount,
  );
  const resendLockLeft = useCountdown(LOCKOUT_SECONDS, tooMany);
  /* 06D: the resend link is replaced by a live cooldown after each resend. */
  const cooldownActive = resendCount > 0 && !tooMany;
  const resendPendingLeft = useCountdown(
    OTP_RESEND_SECONDS,
    state === "resend-pending" || cooldownActive,
    resendCount,
  );

  /* 06C: the code stops being valid the moment the window reaches 00:00. */
  const expired =
    (state === "expired" || (!state && countdownLeft === 0)) && !tooMany;
  const newCodeSent =
    (state === "new-code-sent" || resendCount > 0) && !expired && !tooMany;
  const invalid = (state === "invalid" || wrongCode) && !expired && !newCodeSent;
  const resendPending =
    (state === "resend-pending" || (cooldownActive && resendPendingLeft > 0)) &&
    !expired;

  /* Bare path = "retry / clear the offline pin"; otpPath() keeps the funnel's
     offline dress on while resending. */
  const otpBase = flow ? `/auth/otp?flow=${flow}` : "/auth/otp";
  const otpPath = () => withOffline(otpBase, offline);

  const setDigit = (index: number, raw: string) => {
    const value = raw.replace(/\D/g, "").slice(-1);
    const next = [...shown];
    next[index] = value;
    setDigits(next);
    setWrongCode(false);
    if (value && index < 5) boxRefs.current[index + 1]?.focus();
  };

  const onBoxKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !shown[index] && index > 0) {
      boxRefs.current[index - 1]?.focus();
    }
  };

  const verify = () => {
    if (!complete || loading) return;
    if (!isValidOtp(shown)) {
      setWrongCode(true);
      return;
    }
    setWrongCode(false);
    setVerifying(true);
    setTimeout(
      () =>
        navigate(
          flow === "recovery"
            ? withOffline("/auth/reset-pin", offline)
            : "/auth/create-pin",
        ),
      900,
    );
  };

  const resend = () => {
    if (tooMany) return;
    setDigits(EMPTY);
    setSeed(OTP_RESEND_SECONDS);
    setResendCount((count) => count + 1);
    setWrongCode(false);
    if (state) navigate(otpPath());
  };

  /* W-06B outlines every box in 1.5px #c73833, W-06C in #ad6e0f. */
  const boxBorder = invalid
    ? "border-[1.5px] border-[#c73833]"
    : expired
      ? "border-[1.5px] border-[#ad6e0f]"
      : "border border-[#d4e1dd] focus:border-[#08745e]";

  const railKey = offline
    ? "offline"
    : expired
      ? "expired"
      : tooMany
        ? "too-many-requests"
        : newCodeSent
          ? "new-code-sent"
          : invalid
            ? "invalid"
            : "";

  return (
    <AuthLayout
      title={c.otp.title}
      subtitle={fillCopy(c.otp.subtitle, { phone: AUTH_PHONE.masked })}
      railTopClass={RAIL_TOP[railKey] ?? "lg:pt-[312px]"}
      railMobileTopClass={offline ? "mt-[16px]" : "mt-[52px]"}
    >
      {offline ? (
        <OfflineBanner
          title={c.offline.title}
          action={c.offline.tryAgain}
          onAction={() => navigate(otpBase)}
          className="mb-[58px] lg:mb-[57px]"
        />
      ) : null}

      <div className="flex gap-[10px] lg:grid lg:grid-cols-6 lg:gap-[6px]">
        {shown.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              boxRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={(event) => setDigit(index, event.target.value)}
            onKeyDown={(event) => onBoxKeyDown(index, event.key)}
            className={`h-[58px] w-[48px] rounded-[14px] bg-white text-center text-[20px] font-semibold text-[#173a32] outline-none lg:w-full ${boxBorder}`}
          />
        ))}
      </div>

      {invalid ? (
        <p className={`${HELPER} text-[#c73833]`}>{c.otp.invalidCode}</p>
      ) : null}
      {expired ? (
        <p className={`${HELPER} text-[#ad6e0f]`}>{c.otp.expiredHelper}</p>
      ) : null}
      {newCodeSent ? (
        <p className={`${HELPER} text-[#08745e]`}>{c.otp.newCodeSent}</p>
      ) : null}

      {expired ? (
        <p className="mt-[1px] text-[12px] leading-[15px] font-medium text-[#7c918b] lg:mt-[8px] lg:text-center lg:text-[14px] lg:leading-[17px]">
          {c.otp.expiredLabel}
        </p>
      ) : (
        <p
          className={`text-center text-[12px] leading-[15px] font-medium text-[#7c918b] lg:text-[14px] lg:leading-[17px] ${
            invalid || newCodeSent
              ? "mt-[15px] lg:mt-[28px]"
              : "mt-[24px] lg:mt-[28px]"
          }`}
        >
          {formatSeconds(countdownLeft)}
        </p>
      )}

      <div className={expired ? "mt-[45px] lg:mt-[31px]" : "mt-[31px]"}>
        {expired ? (
          <AuthPrimaryButton onClick={resend}>
            {c.otp.sendNewCode}
          </AuthPrimaryButton>
        ) : (
          <AuthPrimaryButton onClick={verify} disabled={!complete || loading}>
            {loading ? c.otp.verifying : c.otp.verify}
          </AuthPrimaryButton>
        )}
      </div>

      {!expired ? (
        <div className="mt-[22px] lg:mt-[24px]">
          {tooMany ? (
            <p className={STATUS_LINE}>
              {fillCopy(c.otp.resendLocked, {
                time: formatSeconds(resendLockLeft),
              })}
            </p>
          ) : resendPending ? (
            <p className={STATUS_LINE}>
              {fillCopy(c.otp.resendAvailableIn, {
                time: formatSeconds(resendPendingLeft),
              })}
            </p>
          ) : (
            <AuthTextLink onClick={resend}>{c.otp.resend}</AuthTextLink>
          )}
        </div>
      ) : null}

      {tooMany ? (
        <p className={`mt-[16px] lg:mt-[17px] ${HELPER_BASE} text-[#c73833]`}>
          {c.otp.tooManyRequests}
        </p>
      ) : null}

      <div
        className={
          expired
            ? "mt-[22px] lg:mt-[27px]"
            : tooMany
              ? "mt-[28px] lg:mt-[29px]"
              : "mt-[26px] lg:mt-[27px]"
        }
      >
        <AuthTextLink
          onClick={() =>
            navigate(
              withOffline(
                flow === "recovery" ? "/auth/forgot-pin" : "/auth/register",
                offline,
              ),
            )
          }
        >
          {c.otp.changePhone}
        </AuthTextLink>
      </div>
    </AuthLayout>
  );
}
