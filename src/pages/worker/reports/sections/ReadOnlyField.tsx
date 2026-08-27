import { CHIP_ROW, CHIP_SHELL, FIELD_LABEL, FIELD_SHELL } from "./fieldShell";

/* Read-only field primitives for the employer-assigned template previews and
   the W-55 state variants (W-55 / 55A / 55C / 55E / 55F / 55G / 55J / 55L).
   Mobile (W-55B node 978:283): caps label on the page background over a
   #f6f7f6 box (radius 14) holding the 12px/17 muted value; chip and
   quick-note rows sit straight on the canvas under their caps label.
   Desktop (WD-55B): one white card per field, mint strip for quick notes. */

export function ReadOnlyField({
  label,
  value,
  tone = "default",
  size = "lg",
  surface = "review",
}: {
  label: string;
  value: string;
  tone?: "default" | "error";
  /** lg = 62px mobile box / 82px desktop card (W-55 general),
   *  sm = 46px / 76px (W-55H/55J/55L templates). */
  size?: "lg" | "sm";
  /** form = white box + ink value (W-55 node 978:122) ·
   *  review = #f6f7f6 box + muted value (W-55B node 978:283). */
  surface?: "form" | "review";
}) {
  const isError = tone === "error";
  const card =
    size === "sm"
      ? "lg:min-h-[76px] lg:pb-[5px]"
      : "lg:min-h-[82px] lg:pb-[7px]";
  const valueBox =
    size === "sm" ? "min-h-[46px] lg:h-[42px]" : "min-h-[62px] lg:h-[46px]";
  const shell = isError
    ? "lg:rounded-[12px] lg:border lg:border-[#c72924] lg:bg-white lg:px-[13px] lg:pt-[8px]"
    : FIELD_SHELL;
  const box = isError
    ? "mt-[5px] rounded-[12px] border border-[#cc4033] bg-white px-[12px] py-[10px] lg:mt-[4px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
    : surface === "form"
      ? "mt-[5px] rounded-[12px] border border-lp-line bg-white px-[12px] py-[10px] lg:mt-[4px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
      : "mt-[5px] rounded-[14px] border border-lp-line bg-[#f6f7f6] px-[14px] py-[12px] lg:mt-[4px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0";
  return (
    <div className={`${shell} ${card}`}>
      <p className={`${FIELD_LABEL} ${isError ? "lg:text-[#c72924]" : ""}`}>
        {label}
      </p>
      <div className={`${box} ${valueBox}`}>
        <p
          className={`flex h-full items-center lg:text-[12px] lg:leading-[15px] ${
            isError
              ? "text-[11px] leading-[16px] text-[#c72924]"
              : surface === "form"
                ? "text-[11px] leading-[16px] text-lp-ink"
                : "text-[12px] leading-[17px] text-lp-muted lg:text-lp-ink"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* W-55J "SAFETY STATUS" / W-55H "RESIDENT CONDITION": caps label over a
   read-only row of option chips — bare on mobile, inside a white card on
   desktop. */
export function ReadOnlyChipField({
  label,
  options,
  selected,
}: {
  label: string;
  options: readonly string[];
  selected: string;
}) {
  return (
    <div className={CHIP_SHELL}>
      <p className={FIELD_LABEL}>{label}</p>
      <div className={CHIP_ROW}>
        {options.map((option) => (
          <span
            key={option}
            className={`flex h-[30px] min-w-[76px] shrink-0 items-center justify-center rounded-[15px] border px-[10px] text-[10px] font-medium lg:h-[26px] lg:w-[135px] lg:min-w-0 lg:rounded-[13px] lg:px-0 lg:text-[9px] lg:font-semibold ${
              option === selected
                ? "border-lp-green bg-lp-tint text-lp-green lg:border-lp-line lg:bg-lp-mint"
                : "border-lp-line bg-white text-lp-ink lg:text-lp-muted"
            }`}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}

/* W-55J / W-55L "QUICK NOTES": caps label over white 30px pills on the page
   background (mobile); desktop keeps the #f2f9f5 strip with 26px chips. */
export function ReadOnlyQuickNotes({
  label,
  notes,
}: {
  label: string;
  notes: readonly string[];
}) {
  return (
    <div className="lg:min-h-[70px] lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-lp-tint lg:px-[13px] lg:pt-[8px] lg:pb-[9px]">
      <p className={FIELD_LABEL}>{label}</p>
      <div className="mt-[6px] grid grid-cols-2 gap-[8px] lg:mt-[10px] lg:flex lg:flex-wrap lg:gap-[10px]">
        {notes.map((note) => (
          <span
            key={note}
            className="flex h-[30px] items-center justify-center rounded-[15px] border border-lp-line bg-white px-[10px] text-[10px] font-medium text-lp-ink lg:h-[26px] lg:min-w-[116px] lg:shrink-0 lg:rounded-[13px] lg:px-[23px] lg:font-semibold lg:text-lp-green"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
