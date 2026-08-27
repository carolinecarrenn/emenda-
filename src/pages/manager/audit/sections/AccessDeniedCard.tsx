import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";

/* EM-STATE-03 red "ACCESS DENIED SAFELY" label + pale-pink explanation card
   (1137:4-7): #b83826 caps label over a #ffe5de / #c7dbd1 card. */
export function AccessDeniedCard() {
  const c = useSectionCopy(AUDIT_COPY).restricted;

  return (
    <section>
      <p className="text-[10px] font-semibold text-[#b83826] uppercase lg:text-[12px]">
        {c.deniedLabel}
      </p>
      <div className="mt-[15px] rounded-[10px] border border-[#c7dbd1] bg-[#ffe5de] px-[12px] py-[12px] lg:px-5 lg:py-[18px]">
        <p className="text-[12px] font-semibold text-[#083d2d] lg:text-[15px]">
          {c.summaryTitle}
        </p>
        <p className="mt-[8px] text-[10px] leading-[15px] text-[#65746d] lg:text-[12px] lg:leading-[19px]">
          {c.summaryBody}
        </p>
      </div>
    </section>
  );
}
