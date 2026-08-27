/* W-55K / WD-55B review summary card: #f2f9f5, border #d1ded6, radius 14,
   12px semibold title over a 10px muted body — used for the template info,
   the report-status line, the quick-note recap and the
   "Ready to submit · Employer visibility" block. */
export function ReviewSummaryCard({
  title,
  body,
  uppercaseTitle = false,
}: {
  title: string;
  body: string;
  uppercaseTitle?: boolean;
}) {
  return (
    <div className="min-h-[58px] rounded-[14px] border border-lp-line bg-lp-tint px-[15px] pt-[9px] pb-[13px]">
      <p
        className={`text-[13px] font-semibold text-lp-ink ${
          uppercaseTitle ? "uppercase" : ""
        }`}
      >
        {title}
      </p>
      <p className="mt-[7px] text-[12px] leading-[18px] text-lp-muted">
        {body}
      </p>
    </div>
  );
}
