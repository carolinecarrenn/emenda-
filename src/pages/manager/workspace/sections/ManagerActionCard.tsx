import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-05A cream #fdf3d7 "Manager action" card: plan the renewal, confirm the
   responsible PIC and the required documents — operational administration
   only, no private health data and no legal filing. Feeds directly into the
   "Create Follow-up" CTA below it. */
export function ManagerActionCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#f3e3b4] bg-[#fdf3d7] px-[16px] py-[14px] lg:px-[20px] lg:py-[16px]">
      <p className="text-[12px] font-semibold text-[#8a6116]">
        {c.visa.managerActionTitle}
      </p>
      <p className="mt-[6px] text-[11px] leading-[17px] text-[#8a6116]">
        {c.visa.managerActionBody}
      </p>
    </section>
  );
}
