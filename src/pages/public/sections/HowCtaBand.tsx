import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { usePublicCopy } from "../public.copy";
import { PUBLIC_LOGIN_HREF } from "../publicMock";

/**
 * LP-04 dark-green CTA band (Figma 1147:303–1147:307): 1268x130 at y=1970,
 * copy inset 28px and the 140x44 Log in button at x=1134 / y=2012.
 */
export function HowCtaBand() {
  const common = useCommonCopy();
  const c = usePublicCopy();

  return (
    <section className="mt-[40px] flex flex-col gap-[22px] rounded-[22px] bg-[#055240] px-[28px] py-[26px] lg:h-[130px] lg:flex-row lg:items-start lg:justify-between lg:pt-[20px] lg:pb-0 lg:pr-[58px]">
      <div>
        <h2 className="flex min-h-[38px] max-w-[560px] items-center text-[20px] leading-[1.22] font-bold text-white lg:text-[22px]">
          {c.how.ctaTitle}
        </h2>
        <p className="mt-[2px] flex min-h-[28px] max-w-[480px] items-center text-[13px] text-[#cce5db]">
          {c.how.ctaBody}
        </p>
      </div>
      <Link
        to={PUBLIC_LOGIN_HREF}
        className="flex h-[44px] w-[140px] shrink-0 items-center justify-center rounded-[12px] bg-[#067a5e] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#0c5941] lg:mt-[22px]"
      >
        {common.action.logIn}
      </Link>
    </section>
  );
}
