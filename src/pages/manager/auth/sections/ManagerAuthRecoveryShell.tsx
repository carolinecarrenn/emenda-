import type { ReactNode } from "react";
import { ManagerAuthMobileChrome } from "./ManagerAuthMobileChrome";

interface ManagerAuthRecoveryShellProps {
  /** Tiny grey context line — "Manager access recovery · <org>". */
  context: string;
  title: string;
  subtitle: string;
  desktopTitle: string;
  desktopSubtitle: string;
  mobile: ReactNode;
  desktop: ReactNode;
  /** Distance from the context line to the mobile body (varies per frame). */
  mobileBodyClass?: string;
  /** MD-AUTH-02/03 card is 599px, MD-AUTH-03A is 539px, MD-AUTH-04 is 519px. */
  cardWidthClass?: string;
  /** Card top edge: MD-AUTH-02 y=190.5, MD-AUTH-03 y=180.5, 03A y=210.5. */
  cardTopClass?: string;
  /** MD-AUTH-04 keeps a deeper bottom padding than its 40px top (1193:84). */
  cardPaddingClass?: string;
  /** MD-AUTH-02x / 03x state slab. When present it replaces the desktop page
   *  title block and the white card — those layers are hidden on the state
   *  frames, which draw only the wordmark lockup and the 900x630 panel. */
  desktopPanel?: ReactNode;
}

/** Chrome shared by EM-AUTH-02/03/04 (390x844: status bar, green wordmark,
 *  27px Sora H1 at y=76, 12px grey subtitle at y=116, 10px context at y=148)
 *  and by MD-AUTH-02/03/04 (1440x900: 28px wordmark + context at x=56 y=55,
 *  32px page H1 + 14px subtitle offset to x=420, one centered white card). */
export function ManagerAuthRecoveryShell({
  context,
  title,
  subtitle,
  desktopTitle,
  desktopSubtitle,
  mobile,
  desktop,
  mobileBodyClass = "mt-[10px]",
  cardWidthClass = "lg:w-[599px]",
  cardTopClass = "mt-[62px]",
  cardPaddingClass = "p-[40px]",
  desktopPanel,
}: ManagerAuthRecoveryShellProps) {
  return (
    <div className="min-h-screen bg-[#f7faf8]">
      {/* Mobile · EM-AUTH-02/03/04 single column */}
      <div className="px-[20px] pt-[6px] pb-[48px] lg:hidden">
        <ManagerAuthMobileChrome />
        <h1 className="mt-[18px] font-display text-[27px] leading-[1.1] font-bold tracking-[-0.035em] text-[#17362f]">
          {title}
        </h1>
        <p className="mt-[6px] text-[12px] text-[#6f8781]">{subtitle}</p>
        <p className="mt-[14px] text-[10px] font-semibold text-[#6f8781]">
          {context}
        </p>
        <div className={mobileBodyClass}>{mobile}</div>
      </div>

      {/* Desktop · MD-AUTH-02/03/04 recovery canvas */}
      <div className="hidden pt-[55px] pb-[100px] pl-[56px] lg:block">
        {desktopPanel ? (
          <>
            <p className="font-display text-[28px] leading-[34px] font-bold text-[#0b4f3f]">
              EMENDA
            </p>
            <p className="mt-[9px] text-[13px] leading-[16px] text-[#6d7d75]">
              {context}
            </p>
            {/* Panel origin x=360 → 304px past the 56px canvas gutter. */}
            <div className="mt-[21px] ml-[304px]">{desktopPanel}</div>
          </>
        ) : (
          <div className="pr-[56px]">
            <div className="flex">
              <div className="w-[364px] shrink-0">
                <p className="font-display text-[28px] leading-[34px] font-bold text-[#0b4f3f]">
                  EMENDA
                </p>
                <p className="mt-[9px] text-[13px] leading-[16px] text-[#6d7d75]">
                  {context}
                </p>
              </div>
              <div className="mt-[16px]">
                <h1 className="font-display text-[32px] leading-[39px] font-bold text-[#0b4f3f]">
                  {desktopTitle}
                </h1>
                <p className="mt-[1px] text-[14px] leading-[17px] text-[#6d7d75]">
                  {desktopSubtitle}
                </p>
              </div>
            </div>
            <div
              className={`mx-auto rounded-[16px] border border-line bg-white ${cardPaddingClass} ${cardTopClass} ${cardWidthClass}`}
            >
              {desktop}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
