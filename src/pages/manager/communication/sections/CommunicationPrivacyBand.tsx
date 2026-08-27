/* MD-06 boundary strip (1225:83/84): full 1060px mint #e3f0e8 band, radius
   10, 64px tall, an 11px semibold #083d2d line at a 20px inset. MD-07 uses
   the same shape in #e8f5ed with #0d4736 text (1255:2905/2906); MD-07B and
   MD-07C repeat it at 72px (1225:304 · 1225:342). Desktop only. */
export function CommunicationPrivacyBand({
  children,
  tone = "mint",
}: {
  children: string;
  /** "thread" is MD-07's 54px strip, "record" the 72px MD-07B / MD-07C band. */
  tone?: "mint" | "thread" | "record";
}) {
  const skin = {
    mint: "lg:min-h-[64px] lg:px-[20px] lg:bg-[#e3f0e8] lg:text-[#083d2d] lg:font-semibold",
    thread:
      "lg:min-h-[54px] lg:px-[20px] lg:bg-[#e8f5ed] lg:text-[#0d4736] lg:font-normal",
    record:
      "lg:min-h-[72px] lg:px-[24px] lg:bg-[#e3f0e8] lg:text-[#083d2d] lg:font-semibold",
  }[tone];

  return (
    <div
      className={`hidden lg:flex lg:items-center lg:rounded-[10px] lg:py-[14px] ${skin}`}
    >
      <p className="text-[11px] leading-[18px]">{children}</p>
    </div>
  );
}

/* EM-07 (1001:2) / EM-08 (994:2831) closing lines: 9px #6e8a82, flush to the
   content edge, stacked one per line. EM-06 (994:2724) prints its pair at
   10px. Mobile only. */
export function CommunicationFooterNote({
  children,
  size = "sm",
}: {
  children: string;
  /** "md" is the 10px EM-06 pair; "sm" the 9px note everywhere else. */
  size?: "sm" | "md";
}) {
  return (
    <p
      className={`leading-[14px] text-[#6e8a82] lg:hidden ${
        size === "md" ? "text-[10px]" : "text-[9px]"
      }`}
    >
      {children}
    </p>
  );
}
