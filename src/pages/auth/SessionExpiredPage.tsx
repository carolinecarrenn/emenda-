import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { AUTH_COPY } from "./auth.copy";
import { AuthLayout } from "./components/AuthLayout";
import {
  AuthPrimaryButton,
  AuthSecondaryButton,
} from "./components/AuthButtons";
import { MintCallout } from "./components/AuthCallouts";

/** WD-10 Session Expired (745:1353) — pale-blue "You were signed out" status
 *  card, Log in again / Back to welcome buttons, mint "Your data is
 *  preserved" reassurance card. W-10 mobile: same single column.
 *
 *  Desktop frame 745:1353: both cards are 112 tall on 16px padding with a
 *  deep 52px foot, so the buttons land at y=383 and y=454. */
export function SessionExpiredPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(AUTH_COPY).sessionExpired;

  return (
    <AuthLayout
      title={c.title}
      subtitle={c.subtitle}
      railTopClass="lg:pt-[238px]"
      railMobileTopClass="mt-[44px]"
      titleSizeClass="text-[26px] leading-[31px] lg:text-[44px] lg:leading-[1.12]"
    >
      <div className="rounded-[16px] border border-[#bdd9e8] bg-[#eef6fb] px-[15px] pt-[15px] pb-[35px] lg:px-[16px] lg:pt-[15px] lg:pb-[51px]">
        <p className="text-[13px] leading-[16px] font-semibold text-[#173a32]">
          {c.cardTitle}
        </p>
        <p className="mt-[10px] text-[12px] leading-[18px] text-[#7c918b]">
          {c.cardBody}
        </p>
      </div>

      <div className="mt-[26px] lg:mt-[33px]">
        <AuthPrimaryButton onClick={() => navigate("/auth/login")}>
          {c.loginAgain}
        </AuthPrimaryButton>
      </div>
      <div className="mt-[14px] lg:mt-[15px]">
        <AuthSecondaryButton onClick={() => navigate("/auth/welcome")}>
          {c.backToWelcome}
        </AuthSecondaryButton>
      </div>

      <MintCallout
        title={c.preservedTitle}
        body={c.preservedBody}
        padClass="px-[16px] pt-[16px] pb-[34px] lg:pb-[52px]"
        className="mt-[32px] lg:mt-[34px]"
      />
    </AuthLayout>
  );
}
