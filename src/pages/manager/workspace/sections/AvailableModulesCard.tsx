import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-02A "Available modules" — the manager's full feature map
   (Communication · Reports · Follow-up · Analytics · Knowledge/OJT · Human
   Rights DD · Audit Export). The 390px frame (761:38) prints it as a 10px
   uppercase AVAILABLE MODULES micro-label over two plain text lines, with
   no card and no check glyphs; the checked list on the #dbe3de dividers is
   the wider surface. */
export function AvailableModulesCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <>
    <section className="lg:hidden">
      <p className="text-[10px] font-semibold tracking-[0.06em] text-[#66736b] uppercase">
        {c.context.availableModulesLabel}
      </p>
      <div className="mt-[10px] space-y-[2px] text-[12px] leading-[19px] text-[#17241f]">
        {c.context.mobileModuleLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
    <section className="hidden lg:block rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {c.context.availableModules}
      </h2>
      <ul className="mt-[12px] divide-y divide-[#dbe3de]">
        {c.context.moduleList.map((module) => (
          <li
            key={module}
            className="flex items-center gap-[10px] py-[10px] text-[12px] text-[#66736b] lg:text-[13px]"
          >
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#e3f0e8]">
              <Check aria-hidden="true" className="size-[11px] text-[#0c5941]" />
            </span>
            {module}
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}
