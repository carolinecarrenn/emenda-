/* W-61Z / W-61U0 / W-61AQ bottom strip: the verbatim headless note that keeps
   private records explicitly out of scope of the missing employer connection.
   Mobile uses the shared W-61 card chassis (radius 16, 1px #d6e0d9, 14/12px
   padding, 10px #596b61 body); desktop keeps the WD-61Z tinted strip. */
export function HeadlessNoteStrip({
  note,
  className = "",
}: {
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border border-lp-line bg-white px-[14px] py-[12px] lg:flex lg:min-h-[72px] lg:items-center lg:rounded-[12px] lg:border-0 lg:bg-lp-tint lg:px-[18px] lg:py-3 ${className}`}
    >
      <p className="text-[10px] leading-[14px] text-lp-muted lg:text-[13px] lg:leading-[20px]">
        {note}
      </p>
    </div>
  );
}
