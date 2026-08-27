/* EM-18D "UNSAVED CHANGES" row (1133:37…1133:48): 350x48 white card, radius
   10, 1px hairline — the 10px grey preference name on the left and the red
   11px "Pending" marker in the fixed 74px column at x=284. No stored value is
   printed: nothing was written, so nothing is claimed. */
export function UnsavedChangeRow({
  label,
  marker,
}: {
  label: string;
  marker: string;
}) {
  return (
    <div className="flex min-h-[48px] items-center gap-4 rounded-[10px] border border-[#d1e0d9] bg-white px-[14px] py-[10px]">
      <span className="min-w-0 text-[10px] text-[#6e8a82] lg:text-[12px]">
        {label}
      </span>
      <span className="ml-auto w-[74px] shrink-0 text-[11px] font-bold text-[#c24529] lg:w-[90px] lg:text-[13px]">
        {marker}
      </span>
    </div>
  );
}
