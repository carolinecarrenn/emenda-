import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import type { ManagedFacility } from "../workspaceMock";
import { useFacilityMeta } from "./facilityMeta";

/* MD-02B (1213:146…158): the 11px uppercase "CHOOSE NEXT FACILITY" eyebrow
   over 760x104 rows, radius 12 — 14px semibold #17241f name, 11px #66736b
   caption, and a right-pinned 10px uppercase CURRENT / SELECTED / AVAILABLE
   label. The row the manager is switching to fills mint #e3f0e8; the
   facility they are already in reads "Current workspace" and is inert.
   EM-02B (761:1125) re-cuts the same list for 390px: a 10px #66736b
   "SELECT FACILITY" eyebrow, the alternatives first and the facility the
   manager is already in last, both mint rows carrying an outlined
   sentence-case chip ("Selected" / "Current") while an untouched
   alternative carries no chip at all. */
export function SwitchFacilityRows({
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
    <section>
      <p className="text-[10px] font-semibold text-[#66736b] uppercase lg:text-[11px] lg:text-[#083d2d]">
        <span className="lg:hidden">
          {c.switchFacility.mobileSelectFacility}
        </span>
        <span className="hidden lg:inline">{c.switchFacility.chooseNext}</span>
      </p>
      {/* EM-02B pushes the current facility to the bottom of the list while
          MD-02B keeps it first, so the order is CSS-only and the DOM order
          stays the desktop one. */}
      <ul className="mt-[14px] flex flex-col gap-[12px] lg:mt-[18px] lg:gap-[16px]">
        {facilities.map((facility) => {
          const isCurrent = facility.isCurrent;
          const selected = !isCurrent && facility.id === selectedId;
          const label = isCurrent
            ? c.switchFacility.pillCurrent
            : selected
              ? c.switchFacility.pillSelected
              : c.switchFacility.pillAvailable;
          const mobileChip = isCurrent
            ? c.switchFacility.mobilePillCurrent
            : selected
              ? c.switchFacility.mobilePillSelected
              : null;

          return (
            <li
              key={facility.id}
              className={isCurrent ? "order-2 lg:order-none" : "lg:order-none"}
            >
              <button
                type="button"
                aria-pressed={selected}
                disabled={isCurrent}
                onClick={() => onSelect(facility.id)}
                className={`flex w-full items-center justify-between gap-[12px] rounded-[12px] border px-[18px] py-[16px] text-left lg:h-[104px] lg:items-start lg:py-[21px] ${
                  selected
                    ? "border-[#e3f0e8] bg-[#e3f0e8]"
                    : isCurrent
                      ? "border-[#e3f0e8] bg-[#e3f0e8] lg:border-[#dbe3de] lg:bg-white"
                      : "border-[#dbe3de] bg-white hover:border-brand"
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold text-[#17241f] lg:text-[14px]">
                    {facility.name}
                  </span>
                  <span className="mt-[8px] block text-[11px] leading-[16px] text-[#66736b]">
                    {isCurrent ? (
                      <>
                        <span className="lg:hidden">
                          {fill(c.switchFacility.mobileCurrentRow, {
                            workers: facility.workers,
                          })}
                        </span>
                        <span className="hidden lg:inline">
                          {c.switchFacility.currentWorkspaceRow}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="lg:hidden">
                          {meta.shortMobile(facility)}
                        </span>
                        <span className="hidden lg:inline">
                          {meta.short(facility)}
                        </span>
                      </>
                    )}
                  </span>
                </span>
                {/* 390px: an outlined sentence-case chip, and nothing at all
                    on an untouched alternative. Desktop keeps the plain
                    uppercase CURRENT / SELECTED / AVAILABLE label. */}
                <span className="shrink-0">
                  {mobileChip && (
                    <span className="block rounded-full border border-[#c9ded4] px-[12px] py-[5px] text-[11px] font-semibold text-[#083d2d] lg:hidden">
                      {mobileChip}
                    </span>
                  )}
                  <span className="hidden text-[10px] font-semibold text-[#66736b] uppercase lg:block lg:w-[122px]">
                    {label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
