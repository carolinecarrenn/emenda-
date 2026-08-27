import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import type { ManagedFacility } from "../workspaceMock";
import { useFacilityMeta } from "./facilityMeta";

/* MD-02 facility rows (1213:42…53): 700x98 selectable rows, radius 10 —
   the selected row is mint #e3f0e8 on a matching border, the rest white on
   #dbe3de. 13px semibold #17241f name, 11px #66736b meta, and the 10px
   uppercase SELECTED / AVAILABLE label set on the same baseline as the name,
   left-aligned inside the 102px column MD-02 reserves for it. EM-02 stacks
   the same rows as full-width cards and draws the label as an outlined
   chip over the shorter "… · Follow-up 4" meta line. */
export function FacilityRows({
  facilities,
  selectedId,
  onSelect,
}: {
  facilities: ManagedFacility[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const meta = useFacilityMeta();

  return (
    <ul className="space-y-[15px] lg:space-y-[14px]">
      {facilities.map((facility) => {
        const selected = facility.id === selectedId;
        return (
          <li key={facility.id}>
            <button
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(facility.id)}
              className={`flex w-full items-start justify-between gap-[12px] rounded-[10px] border px-[13px] py-[17px] text-left lg:h-[98px] lg:px-[18px] lg:py-[18px] ${
                selected
                  ? "border-[#e3f0e8] bg-[#e3f0e8]"
                  : "border-[#dbe3de] bg-white hover:border-brand"
              }`}
            >
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-[#17241f]">
                  {facility.name}
                </span>
                <span className="mt-[9px] block text-[11px] leading-[16px] text-[#66736b]">
                  <span className="lg:hidden">{meta.mobile(facility)}</span>
                  <span className="hidden lg:inline">
                    {meta.full(facility)}
                  </span>
                </span>
              </span>
              <span className="shrink-0 rounded-full border border-[#c9ded4] px-[10px] py-[4px] text-[10px] font-semibold text-[#66736b] uppercase lg:w-[102px] lg:rounded-none lg:border-0 lg:px-0 lg:py-0">
                {selected ? c.facility.pillSelected : c.facility.pillAvailable}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
