import { useSectionCopy } from "@/i18n/copy";
import { ACCESS_COPY } from "../access.copy";

/* LP-05 left column (Figma nodes 1107:8 SIGN IN eyebrow at y=148, 1107:9
   headline at y=188, 1107:10 body at y=258, 1107:11 "Routing info" mint card
   500x196 at y=368 / r20 with the help line inside). */
export function SignInIntro() {
  const c = useSectionCopy(ACCESS_COPY).signIn;

  return (
    <div className="lg:w-[500px] lg:shrink-0">
      <p className="flex min-h-[28px] items-center text-[12px] font-semibold text-[#054d3d]">
        {c.eyebrow}
      </p>
      <h1 className="mt-[12px] flex min-h-[58px] items-center text-[30px] leading-[38px] font-bold text-lp-ink lg:text-[38px] lg:leading-[46px]">
        {c.headline}
      </h1>
      <p className="mt-[12px] flex min-h-[72px] items-center text-[16px] text-lp-muted">
        {c.body}
      </p>

      <div className="mt-[38px] rounded-[20px] border border-[#d1ded6] bg-[#f2f9f5] px-[23px] pt-[21px] pb-[22px] lg:min-h-[196px] lg:w-[500px]">
        <p className="flex min-h-[30px] items-center text-[20px] font-semibold text-lp-ink">
          {c.infoTitle}
        </p>
        <p className="mt-[8px] flex min-h-[82px] items-center text-[14px] leading-[22px] text-lp-muted lg:w-[452px]">
          {c.infoBody}
        </p>
        <p className="mt-[12px] text-[13px] leading-[20px] text-lp-muted lg:w-[452px]">
          {c.helpLine}
        </p>
      </div>
    </div>
  );
}
