import { Check, Circle } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-05A ADMIN CHECKLIST (1213:571…573): a 650x298 white card, radius 12 —
   three checked items (residence reference on file, expiry captured,
   connection active), two open items (confirm renewal documents with the
   responsible PIC, create a follow-up if worker action is needed), and the
   closing rule "Do not request private health information." MD-05A marks
   the items with plain check / bullet glyphs on a flat 16px rhythm; the
   tinted icon chips belong to the 390px EM-05A card. */
export function AdminChecklistCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:h-[298px] lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {c.visa.checklistTitle}
      </h2>

      <ul className="mt-[16px] space-y-[10px] text-[12px] leading-[19px] text-[#66736b] lg:space-y-0 lg:text-[13px] lg:leading-[16px]">
        {c.visa.checklistDone.map((item) => (
          <li key={item} className="flex items-start gap-[10px] lg:gap-[7px]">
            <span className="mt-[2px] flex size-[16px] shrink-0 items-center justify-center rounded-full bg-[#e3f0e8] lg:hidden">
              <Check aria-hidden="true" className="size-[10px] text-[#0c5941]" />
            </span>
            <span aria-hidden="true" className="hidden shrink-0 lg:inline">
              ✓
            </span>
            {item}
          </li>
        ))}
        {c.visa.checklistOpen.map((item) => (
          <li key={item} className="flex items-start gap-[10px] lg:gap-[7px]">
            <Circle
              aria-hidden="true"
              className="mt-[5px] size-[10px] shrink-0 text-[#8a6116] lg:hidden"
            />
            <span aria-hidden="true" className="hidden shrink-0 lg:inline">
              •
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-[16px] text-[12px] leading-[19px] font-semibold text-[#66736b] lg:text-[13px] lg:leading-[16px] lg:font-normal">
        {c.visa.checklistFooter}
      </p>
    </section>
  );
}
