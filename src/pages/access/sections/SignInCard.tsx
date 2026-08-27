import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ACCESS_COPY } from "../access.copy";
import { SIGN_IN_SEED } from "../accessMock";
import { SignInCreateAccount } from "./SignInCreateAccount";

/* LP-05 "Unified login card" (Figma node 1107:19): 544x520 white card at
   x=700 / y=156, r20, 1px #d1ded6 — uppercase micro-labels at y=130 / y=232,
   two #fcfefc inputs (484x52 / r10) at y=160 / y=262, a full-width #056b54
   "Log in" pill at y=338, the green recovery link at y=400 and the footer
   microcopy at y=444. No role selector: one door for every role.

   The card's 520px Figma height is kept as a MINIMUM, not a fixed height,
   because <SignInCreateAccount /> appends the account-creation door the
   canonical mobile flow (W-03) requires and LP-05 does not draw — see that
   file for the full rationale. Everything above it stays at its Figma
   position. */
export function SignInCard() {
  const c = useSectionCopy(ACCESS_COPY).signIn;
  const common = useCommonCopy();
  const navigate = useNavigate();
  const [accountId, setAccountId] = useState<string>(SIGN_IN_SEED.accountId);
  const [password, setPassword] = useState<string>(SIGN_IN_SEED.password);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/welcome");
      }}
      className="rounded-[20px] border border-[#d1ded6] bg-white px-5 pt-[23px] pb-[26px] lg:min-h-[520px] lg:w-[544px] lg:shrink-0 lg:px-[29px]"
    >
      <p className="flex min-h-[42px] items-center text-[27px] font-bold text-lp-ink">
        {c.cardTitle}
      </p>
      <p className="mt-[2px] flex min-h-[28px] items-center text-[14px] text-lp-muted">
        {c.cardSubtitle}
      </p>

      <label
        htmlFor="access-account-id"
        className="mt-[34px] flex min-h-[24px] items-center text-[11px] font-semibold text-lp-muted"
      >
        {c.accountIdLabel}
      </label>
      <input
        id="access-account-id"
        type="text"
        autoComplete="username"
        value={accountId}
        onChange={(event) => setAccountId(event.target.value)}
        placeholder={c.accountIdPlaceholder}
        className="mt-[6px] h-[52px] w-full rounded-[10px] border border-[#d1ded6] bg-[#fcfefc] px-[15px] text-[14px] text-lp-ink placeholder:text-lp-muted focus:border-[#056b54] focus:outline-none lg:w-[484px]"
      />

      <label
        htmlFor="access-password"
        className="mt-[20px] flex min-h-[24px] items-center text-[11px] font-semibold text-lp-muted"
      >
        {c.passwordLabel}
      </label>
      <input
        id="access-password"
        type="password"
        autoComplete="current-password"
        aria-label={c.passwordAria}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="mt-[6px] h-[52px] w-full rounded-[10px] border border-[#d1ded6] bg-[#fcfefc] px-[15px] text-[16px] text-lp-ink focus:border-[#056b54] focus:outline-none lg:w-[484px]"
      />

      <button
        type="submit"
        className="mt-[24px] flex h-[52px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-lp-green lg:w-[484px]"
      >
        {common.action.logIn}
      </button>

      <div className="mt-[10px] flex min-h-[28px] items-center justify-center text-center lg:w-[484px]">
        <Link
          to="/auth/forgot-pin"
          className="text-[13px] font-medium text-lp-green hover:underline"
        >
          {c.forgot}
        </Link>
      </div>

      <p className="mt-[16px] flex min-h-[42px] items-center justify-center text-center text-[12px] text-lp-muted lg:w-[484px]">
        {c.footer}
      </p>

      <SignInCreateAccount />
    </form>
  );
}
