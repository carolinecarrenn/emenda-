import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { AUTH_COPY } from "../auth.copy";
import { withOffline } from "../useOffline";
import { AuthLayout } from "./AuthLayout";
import { AuthPrimaryButton, AuthTextLink } from "./AuthButtons";

/** W-08C Forgot PIN — No Phone Access (451:36) / WD-08C "Recover account
 *  access": its own screen, not a dressed W-08.
 *
 *  Mobile frame: 28px title at y=92, 13px/18 subtitle at y=142, a #e8f5f0
 *  radius-14 security notice at y=208 (h124), the #088566 "Start account
 *  recovery" CTA at y=362, an 11px centered identity-check footnote at y=434
 *  and "Back to log in" at y=494.
 *
 *  Desktop frame 745:1189: the two-line headline starts at y=292 (not the
 *  usual 306) with a 28px gap to the subtitle, the notice card is 124 tall
 *  (16/44 padding), the CTA sits at y=453 and the identity footnote is a
 *  centered 14px/16 two-liner at y=529. */
export function RecoverAccessScreen({ offline }: { offline: boolean }) {
  const navigate = useNavigate();
  const c = useSectionCopy(AUTH_COPY);

  return (
    <AuthLayout
      title={c.recover.title}
      subtitle={c.recover.subtitle}
      railTopClass="lg:pt-[291px]"
      railMobileTopClass="mt-[30px]"
      headDesktopTopClass="lg:pt-[292px]"
      subtitleGapClass="mt-[10px] lg:mt-[28px]"
      titleSizeClass="text-[28px] leading-[40px] lg:text-[44px] lg:leading-[1.12]"
      subtitleSizeClass="text-[13px] leading-[18px] lg:text-[18px] lg:leading-[27px]"
    >
      <div className="rounded-[14px] bg-[#e8f5f0] px-[16px] pt-[16px] pb-[26px] lg:rounded-[16px] lg:pb-[44px]">
        <p className="text-[13px] leading-[18px] font-semibold text-[#084f3b] lg:leading-[16px]">
          {c.recover.noticeTitle}
        </p>
        <p className="mt-[10px] text-[12px] leading-[18px] text-[#63756e] lg:mt-[12px]">
          {c.recover.noticeBody}
        </p>
      </div>

      <div className="mt-[30px] lg:mt-[38px]">
        <AuthPrimaryButton
          onClick={() =>
            navigate(withOffline("/auth/otp?flow=recovery", offline))
          }
          className="rounded-[14px] bg-[#088566] hover:bg-[#08745e]"
          textClass="text-[13px] lg:text-[14px]"
        >
          {c.recover.start}
        </AuthPrimaryButton>
      </div>

      <p className="mt-[18px] text-center text-[11px] leading-[16px] text-[#63756e] lg:mt-[20px] lg:text-[14px]">
        {c.recover.footnote}
      </p>

      <div className="mt-[28px] lg:mt-[31px]">
        <AuthTextLink
          onClick={() => navigate(withOffline("/auth/login", offline))}
        >
          {c.forgotPin.backToLogin}
        </AuthTextLink>
      </div>
    </AuthLayout>
  );
}
