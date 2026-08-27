import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-02 (761:3) "Facility context" note above the CTA: a WHITE card on the
   #dbe3de hairline — not a tinted one — holding the two clauses on their own
   lines, pending actions stay bound to their origin facility and the private
   categories stay unavailable. The desktop MD-02 carries the same two
   clauses inside the ACCESS BEFORE ENTRY rail, so this card is the 390px
   surface only. */
export function FacilityContextNote() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[14px] border border-[#dbe3de] bg-white px-[13px] pt-[12px] pb-[7px] lg:hidden">
      <p className="text-[11px] leading-[13px] font-semibold text-[#083d2d]">
        {c.facility.contextNoteTitle}
      </p>
      <div className="mt-[11px] text-[10px] leading-[11px] text-[#66736b]">
        {c.facility.contextNoteLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
