interface InfoCardProps {
  /** mint = #f0f8f3 rule cards · white = neutral note cards ·
   *  amber = #fef6da program caveats · rose = #fcedeb failure cards. */
  tone: "mint" | "white" | "amber" | "rose";
  /** Desktop fill when the WD-60x frame tints the card differently. */
  lgTone?: "mint" | "white";
  /** Title colour when the mock departs from the tone default (WD-60U draws
   *  the "Work program rewards" heading in green on a mint card). */
  titleTone?: "ink" | "green";
  title?: string;
  body?: string;
  /** W-60M/W-60N/W-60O/W-60Q draw the card body as separate short lines. */
  lines?: string[];
  /** Title → body gap; the mock varies it per card (WD-60L uses 25px, the
   *  WD-60M…WD-60S redeem cards use 32px). */
  bodyGap?: number;
  /** WD-60F rule cards set 14/12px type; WD-60L "Before use" sets 15/13px. */
  size?: "sm" | "md";
  /** Desktop padding. "sm" = the 17/13px note cards; "md" = the 22/18px
   *  redeem-chain cards WD-60M…WD-60S draw at 1012px. */
  pad?: "sm" | "md";
  /** Mobile type step. "card" = W-60M's 12/10px stack (default);
   *  "note" = the 11/10px secondary cards W-60F/W-60G/W-60I put under a hero. */
  density?: "card" | "note";
  className?: string;
}

const LG_SURFACE: Record<"mint" | "white" | "amber" | "rose", string> = {
  mint: "lg:border-lp-line lg:bg-lp-tint",
  white: "lg:border-lp-line lg:bg-white",
  amber: "lg:border-[#ed911a] lg:bg-[#fff5d6]",
  rose: "lg:border-[#f09e99] lg:bg-[#fff2f2]",
};

const BODY_GAP_CLASSES: Record<number, string> = {
  10: "",
  12: "lg:mt-[12px]",
  18: "lg:mt-[18px]",
  25: "lg:mt-[25px]",
  32: "lg:mt-[32px]",
};

/* Coin note cards. Mobile is drawn from the W-60x body stack (1186:310 and
   siblings): 350px card, radius 14, 1px #d9e1dc border, 14/12px padding, a
   12px/16 semibold ink title over a 10px/14 muted body at a 5px gap. Desktop
   keeps the WD-60x sizes: WD-60F "Rule" (1186:1789), WD-60G "Next"
   (1186:1857), WD-60V (1197:27) and the WD-60L "Before you use Coin" notice. */
export function InfoCard({
  tone,
  lgTone,
  titleTone,
  title,
  body,
  lines,
  bodyGap = 10,
  size = "sm",
  pad = "sm",
  density = "card",
  className = "",
}: InfoCardProps) {
  const surface =
    tone === "mint"
      ? "border-lp-line bg-lp-tint"
      : tone === "amber"
        ? "border-lp-line bg-[#fef6da]"
        : tone === "rose"
          ? "border-lp-line bg-[#fcedeb]"
          : "border-lp-line bg-white";
  /* One desktop border+fill pair, so lgTone genuinely replaces the tone
     rather than layering a second border colour on top of it. */
  const lgSurface = LG_SURFACE[lgTone ?? tone];
  const titleColor = titleTone === "green" ? "text-lp-green" : "text-lp-ink";
  const lgPad =
    pad === "md" ? "lg:px-[22px] lg:py-[18px]" : "lg:px-[17px] lg:py-[13px]";

  const titleSize =
    density === "note"
      ? "text-[11px] leading-[15px]"
      : "text-[12px] leading-[16px]";
  const gapClass = density === "note" ? "mt-[6px]" : "mt-[5px]";

  return (
    <div
      className={`rounded-[14px] border px-[14px] py-[12px] lg:rounded-[14px] ${lgPad} ${surface} ${lgSurface} ${className}`}
    >
      {title !== undefined && (
        <p
          className={`${titleSize} font-semibold lg:leading-normal ${size === "md" ? "lg:text-[15px]" : "lg:text-[14px]"} ${titleColor}`}
        >
          {title}
        </p>
      )}
      {lines !== undefined ? (
        <div
          className={`${title !== undefined ? `${gapClass} ${BODY_GAP_CLASSES[bodyGap] ?? ""} ` : ""}text-[10px] leading-[14px] text-lp-muted ${size === "md" ? "lg:text-[13px]" : "lg:text-[12px]"} lg:leading-[19px]`}
        >
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : (
        body !== undefined && (
          <p
            className={`${title !== undefined ? `${gapClass} ${BODY_GAP_CLASSES[bodyGap] ?? ""} ` : ""}text-[10px] leading-[14px] text-lp-muted ${size === "md" ? "lg:text-[13px]" : "lg:text-[12px]"} lg:leading-[19px]`}
          >
            {body}
          </p>
        )
      )}
    </div>
  );
}
