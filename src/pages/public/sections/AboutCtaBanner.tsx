import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { usePublicCopy } from "../public.copy";
import { PUBLIC_LOGIN_HREF } from "../publicMock";

/**
 * LP-02 solid dark-green CTA banner (Figma 1147:141–1147:145):
 * 1268x200 at y=1900, copy inset 30px, 140x44 Log in button at y=2032.
 */
export function AboutCtaBanner() {
  const common = useCommonCopy();
  const c = usePublicCopy();

  return (
    <section className="mt-[60px] rounded-[24px] bg-[#055240] px-[30px] pt-[34px] pb-[24px] lg:h-[200px]">
      <h2 className="flex min-h-[46px] max-w-[620px] items-center text-[24px] leading-[1.22] font-bold text-white lg:text-[28px]">
        {c.about.ctaTitle}
      </h2>
      <p className="mt-[6px] flex min-h-[32px] max-w-[520px] items-center text-[14px] text-[#cce5db]">
        {c.about.ctaBody}
      </p>
      <Link
        to={PUBLIC_LOGIN_HREF}
        className="mt-[14px] flex h-[44px] w-[140px] items-center justify-center rounded-[12px] bg-[#067a5e] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#0c5941]"
      >
        {common.action.logIn}
      </Link>
    </section>
  );
}
