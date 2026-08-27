import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02C right rail (1213:213…215): the facility-search no-results frame
   swaps MD-02's 410px "ACCESS BEFORE ENTRY" panel for a 330x374 white card,
   radius 12, #dbe3de hairline, headed "ACCESS BOUNDARY" and carrying three
   11px #66736b paragraphs — the search covers only already-assigned
   facilities, an empty result exposes nothing outside organization or role
   scope, and private worker data stays unavailable. EM-02C (949:4) states
   the same rule in the peach AccessBoundaryCard at 390px, so this rail is
   the desktop surface only. */
export function AccessBoundaryRail() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="hidden rounded-[12px] border border-[#dbe3de] bg-white pt-[24px] pr-[26px] pb-[24px] pl-[24px] lg:block lg:h-[374px]">
      <h2 className="text-[15px] font-semibold text-[#083d2d]">
        {c.facility.boundaryRailTitle}
      </h2>

      <div className="mt-[16px] space-y-[13px] text-[11px] leading-[15px] text-[#66736b]">
        {c.facility.boundaryRailLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
