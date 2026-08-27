import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02 facility search (1213:39/40/41): the 10px uppercase "FACILITY
   SEARCH" micro-label above a 700x46 white field, radius 12, #dbe3de
   hairline, 12px #66736b placeholder set 19px in. Neither MD-02 nor EM-02
   carries a magnifier glyph, so the field is text-only; EM-02 keeps the same
   eyebrow above a full-width field. */
export function FacilitySearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <div>
      <p className="text-[10px] font-semibold text-[#66736b] uppercase">
        {c.facility.searchLabel}
      </p>
      <div className="mt-[4px]">
        <input
          type="search"
          aria-label={c.facility.searchLabel}
          placeholder={c.facility.searchPlaceholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-[44px] w-full rounded-[12px] border border-[#dbe3de] bg-white px-[13px] text-[12px] text-[#17241f] placeholder:text-[#66736b] focus:border-brand focus:outline-none lg:h-[46px] lg:px-[18px]"
        />
      </div>
    </div>
  );
}
