import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";

/* EM-STATE-03 mint "REQUIRED TO CONTINUE" card (1137:21-23): #f0f9f5 on
   #c7dbd1, radius 10, three bulleted preconditions. */
export function RequiredToContinueCard() {
  const c = useSectionCopy(AUDIT_COPY).restricted;

  return (
    <section className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] py-[12px] lg:px-5 lg:py-[18px]">
      <h2 className="text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
        {c.requiredTitle}
      </h2>
      <ul className="mt-[8px] text-[10px] leading-[12px] text-[#083d2d] lg:text-[12px] lg:leading-[20px]">
        {c.requiredItems.map((item) => (
          <li key={item} className="flex items-start gap-[6px]">
            <span aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
