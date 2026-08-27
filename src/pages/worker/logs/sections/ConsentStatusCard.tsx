interface ConsentStatusCardProps {
  /** W-61O4 drops the green caption and leads with the heading. */
  eyebrow?: string;
  /** W-61O2 carries the sentence alone, with no bold lead line. */
  heading?: string;
  body: string;
  /** mint = granted / active confirmations, white = revoked / expired. */
  tone?: "mint" | "white";
}

/* WD-61O2 / O4 / O6 / O7 lifecycle confirmation panel: 11px semibold eyebrow,
   15px semibold heading and a 13px muted explanation of when access ends.
   Mobile follows the W-61O card chassis — radius 16, 1px #d6e0d9, 14/12px
   padding, an 11px green eyebrow, a 12px semibold heading and a 10px body. */
export function ConsentStatusCard({
  eyebrow,
  heading,
  body,
  tone = "mint",
}: ConsentStatusCardProps) {
  return (
    <div
      className={`rounded-[16px] border border-lp-line px-[14px] py-[12px] lg:min-h-[180px] lg:px-[21px] lg:py-[19px] ${
        tone === "mint" ? "bg-lp-mint" : "bg-white"
      }`}
    >
      {eyebrow !== undefined && (
        <p className="text-[11px] leading-[15px] font-semibold text-lp-green">
          {eyebrow}
        </p>
      )}
      {heading !== undefined && (
        <p className="mt-[6px] max-w-[940px] text-[12px] leading-[16px] font-semibold text-lp-ink first:mt-0 lg:mt-[30px] lg:text-[15px] lg:leading-[22px] lg:first:mt-0">
          {heading}
        </p>
      )}
      <p className="mt-[6px] max-w-[940px] text-[10px] leading-[14px] text-lp-muted first:mt-0 lg:mt-[26px] lg:text-[13px] lg:leading-[20px] lg:first:mt-0">
        {body}
      </p>
    </div>
  );
}
