import { Link } from "react-router-dom";
import { LANGUAGE_OPTIONS, useLanguage } from "@/i18n/language";
import { useCommonCopy } from "@/i18n/common";
import { usePublicCopy } from "../public.copy";
import {
  PUBLIC_HOME_HREF,
  PUBLIC_LOGIN_HREF,
  PUBLIC_NAV,
  type PublicNavKey,
} from "../publicMock";

/**
 * Public chrome header shared by LP-02 / LP-03 / LP-04
 * (Figma 1147:4–1147:17 · 1147:19–1147:32 · 1147:34–1147:47).
 * The nav item of the current page renders as the mint pill — the only
 * state variant the public inner pages define.
 *
 * Desktop geometry is taken straight from Figma: 96px bar (divider at y=96)
 * with the content block sitting at y=31, brand at x=62, nav items 112/86/112
 * wide from x=642, the 116px Log in pill at x=970 and the 230px language
 * switcher at x=1104 (right inset 106).
 */

/** Figma nav frame widths — 1147:5 / 1147:7 / 1147:9. */
const NAV_WIDTH: Record<PublicNavKey, string> = {
  about: "lg:w-[112px] lg:px-0",
  features: "lg:w-[86px] lg:px-0",
  how: "lg:w-[112px] lg:px-0",
};

export function PublicHeader({ current }: { current: PublicNavKey }) {
  const { language, setLanguage } = useLanguage();
  const common = useCommonCopy();
  const c = usePublicCopy();

  return (
    <header className="w-full border-b border-[#d1ded6]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-x-4 gap-y-3 px-6 py-[20px] lg:h-[96px] lg:flex-nowrap lg:gap-x-2 lg:py-0 lg:pt-[8px] lg:pr-[106px] lg:pl-[62px]">
        <Link
          to={PUBLIC_HOME_HREF}
          className="mr-auto text-[22px] font-bold text-[#055240]"
        >
          EMENDA
        </Link>

        <nav className="flex flex-wrap items-center gap-1 lg:flex-nowrap lg:gap-x-[5px]">
          {PUBLIC_NAV.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              aria-current={item.key === current ? "page" : undefined}
              className={`flex h-[42px] items-center justify-center rounded-[21px] px-[16px] text-[13px] transition-colors duration-150 ${
                NAV_WIDTH[item.key]
              } ${
                item.key === current
                  ? "border border-[#d1ded6] bg-[#e8f6f0] font-semibold text-[#055240]"
                  : "text-[#63756b] hover:text-[#055240]"
              }`}
            >
              {c.nav[item.key]}
            </Link>
          ))}
        </nav>

        <Link
          to={PUBLIC_LOGIN_HREF}
          className="flex h-[42px] w-[116px] items-center justify-center rounded-[12px] bg-[#067a5e] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#055240]"
        >
          {common.action.logIn}
        </Link>

        <div className="flex h-[42px] items-center gap-1 rounded-[22px] border border-[#d1ded6] bg-white px-3 lg:ml-[10px] lg:gap-[3px] lg:px-[10px]">
          {LANGUAGE_OPTIONS.map((option, index) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={language === option.code}
              className={`px-2 text-[12px] lg:px-0 ${
                index === 1 ? "lg:w-[62px]" : "lg:w-[70px]"
              } ${
                language === option.code
                  ? "font-semibold text-[#055240]"
                  : "text-[#63756b] transition-colors duration-150 hover:text-[#055240]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
