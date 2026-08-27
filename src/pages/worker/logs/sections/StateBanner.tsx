interface StateBannerProps {
  tone: "amber" | "red";
  title: string;
  body: string;
  className?: string;
}

/* Full-width state strip placed above unchanged content (W-61E/U/V/W offline,
   W-61T save-failed, W-61Z2 employer access ended).
   Mobile (W-61W · 1167:1044, W-61T · 1167:936) uses the shared W-61 card
   chassis — radius 16, 1px #d6e0d9, 14/12px padding, an 11px semibold #096145
   title over a 10px #596b61 body — tinted #fef6d6 (amber) or #fcedeb (red).
   Desktop keeps the WD-59G coloured banner. */
export function StateBanner({
  tone,
  title,
  body,
  className = "",
}: StateBannerProps) {
  const toneClasses =
    tone === "amber"
      ? "bg-[#fef6d6] lg:border-[#ed911a] lg:bg-[#fff5d6] lg:text-[#804d0d]"
      : "bg-[#fcedeb] lg:border-[#c72924] lg:bg-[#fff0ed] lg:text-[#c72924]";
  return (
    <div
      className={`rounded-[16px] border border-lp-line px-[14px] py-[12px] lg:min-h-[72px] lg:rounded-[14px] lg:px-[17px] ${toneClasses} ${className}`}
    >
      <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:text-[13px] lg:leading-normal lg:text-inherit">
        {title}
      </p>
      <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[8px] lg:text-[12px] lg:leading-[18px] lg:text-inherit">
        {body}
      </p>
    </div>
  );
}
