/* Review step "REPORT STATUS · Normal" (W-55B / 55K / 55M / 55Q).
   Mobile (W-55B node 978:283): #f0f8f3 card, radius 14, 13/11 padding, a
   13px semibold ink line ("REPORT STATUS" caps + the selected value) over an
   11px/16 muted sentence.
   Desktop (WD-55B): white card, radius 14, 11px muted caps line + 12px body. */
export function ReviewStatusCard({
  label,
  value,
  body,
}: {
  label: string;
  value: string;
  body: string;
}) {
  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:min-h-[70px] lg:bg-white lg:px-[15px] lg:pt-[8px] lg:pb-[9px]">
      <p className="text-[13px] font-semibold text-lp-ink lg:text-[11px] lg:text-lp-muted">
        <span className="uppercase">{label}</span> · {value}
      </p>
      <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[8px] lg:pb-[4px] lg:text-[12px] lg:leading-normal">
        {body}
      </p>
    </div>
  );
}
