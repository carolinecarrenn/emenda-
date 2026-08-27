import { DETAIL_BOX, DETAIL_LABEL, DETAIL_SHELL } from "./fieldShell";

/* Daily Report Detail read-only field (W-56 / 56A / 56D).
   Mobile (W-56A node 973:577): caps 11px muted label on the page background
   over a #f6f7f6 box (radius 14, 14/12 padding) holding the 12px/17 value.
   Desktop (WD-56): one white card, caps green label, 14px/22 ink value. */
export function DetailContentCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className={DETAIL_SHELL}>
      <p className={DETAIL_LABEL}>{label}</p>
      <div className={DETAIL_BOX}>
        <p className="text-[12px] leading-[17px] text-lp-muted lg:text-[14px] lg:leading-[22px] lg:text-lp-ink">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}
