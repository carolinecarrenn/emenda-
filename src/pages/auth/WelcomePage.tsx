import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { AUTH_COPY } from "./auth.copy";
import { AuthLayout } from "./components/AuthLayout";
import {
  AuthPrimaryButton,
  AuthSecondaryButton,
  AuthTextLink,
} from "./components/AuthButtons";

/** Worker-owned ID card shared by WD-03 and the WD-11B signed-out screen. */
export function WorkerOwnedCard({ heightClass = "h-[162px]" }: { heightClass?: string }) {
  const c = useSectionCopy(AUTH_COPY).welcome;
  return (
    <div
      className={`rounded-[18px] border border-[#d4e1dd] bg-white px-[17px] pt-[23px] ${heightClass}`}
    >
      <p className="text-[16px] leading-[19px] font-semibold text-[#173a32]">
        {c.cardTitle}
      </p>
      <p className="mt-[13px] text-[13px] leading-[16px] text-[#7c918b]">
        {c.cardBody}
      </p>
      <div className="mt-[32px] flex h-[30px] w-[116px] items-center justify-center rounded-full bg-[#e3f3ee] lg:w-fit lg:justify-start lg:px-[8px]">
        <span className="text-[10px] leading-[12px] font-semibold tracking-[0] text-[#08745e] lg:tracking-[0.1em]">
          {c.workerOwned}
        </span>
      </div>
    </div>
  );
}

/** WD-03 Welcome (744:64) / W-03 (421:11) — worker-owned ID card, Log in,
 *  Create new account, employer-optional footnote. */
export function WelcomePage() {
  const navigate = useNavigate();
  const c = useSectionCopy(AUTH_COPY).welcome;
  const common = useCommonCopy();

  return (
    <AuthLayout
      title={c.title}
      subtitle={c.subtitle}
      railTopClass="lg:pt-[244px]"
      railMobileTopClass="mt-[40px]"
    >
      <WorkerOwnedCard />
      <div className="mt-[34px] lg:mt-[50px]">
        <AuthPrimaryButton onClick={() => navigate("/auth/login")}>
          {common.action.logIn}
        </AuthPrimaryButton>
      </div>
      <div className="mt-[14px] lg:mt-[17px]">
        <AuthSecondaryButton onClick={() => navigate("/auth/register")}>
          {c.createAccount}
        </AuthSecondaryButton>
      </div>
      <p className="mt-[28px] text-center text-[12px] leading-[18px] text-[#7c918b] lg:mt-[33px] lg:text-[14px]">
        {c.footnote}
      </p>
      {/* W-10 Session Expired ends at "Back to welcome", but the mocks never
          draw the return leg — a session drop is pushed by the app, which this
          prototype cannot raise. This link is that leg, kept quiet so W-03's
          Log in / Create new account hierarchy is unchanged. */}
      <div className="mt-[20px]">
        <AuthTextLink
          onClick={() => navigate("/auth/session-expired")}
          className="font-medium text-[#7c918b]"
        >
          {c.sessionExpiredLink}
        </AuthTextLink>
      </div>
    </AuthLayout>
  );
}
