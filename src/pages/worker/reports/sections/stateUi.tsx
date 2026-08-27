import type { ReactNode } from "react";

/* Shared state primitives for the WD-54/55/56 state variants.
   Amber banner: #fff5d6 fill, #ed911a border, #804d0d 13px text (hub, radius 14)
   or 12px text (form, radius 12). Red banner: #fff0ed / #c72924. The WD-55C
   submitting banner keeps the mock's mint fill with amber text. */

export function StateBanner({
  tone,
  size = "form",
  children,
}: {
  tone: "amber" | "red" | "mint";
  size?: "hub" | "form";
  children: ReactNode;
}) {
  const toneClasses =
    tone === "amber"
      ? "border-[#ed911a] bg-[#fff5d6] text-[#804d0d]"
      : tone === "red"
        ? "border-[#c72924] bg-[#fff0ed] text-[#c72924]"
        : "border-lp-line bg-lp-tint text-[#804d0d]";
  const sizeClasses =
    size === "hub"
      ? "min-h-[64px] rounded-[14px] px-[17px] text-[13px]"
      : "min-h-[56px] rounded-[12px] px-[15px] text-[12px]";
  return (
    <div className={`flex items-center border ${toneClasses} ${sizeClasses}`}>
      <p className="py-[10px] leading-[normal]">{children}</p>
    </div>
  );
}

/* W-54/54C/55C/55E/55F note cards.
   Mobile (W-55E node 973:316 / W-55F node 973:375): radius 14 card on a pale
   fill with no strong border — a 13px/18 semibold INK title over an 11px/16
   muted body, sitting directly above the primary button.
   Desktop (WD-55E/55F): radius 12, tone-coloured 13px title and 13px body,
   below the button. */
export function StateNoteCard({
  tone,
  title,
  lines,
}: {
  tone: "mint" | "amber" | "red";
  title?: string;
  lines: string[];
}) {
  const cardClasses =
    tone === "mint"
      ? "border-lp-line bg-lp-tint"
      : tone === "amber"
        ? "border-[#f0dfa8] bg-[#fdf6dd] lg:border-[#e8ab40] lg:bg-[#fff6e0]"
        : "border-[#f5d6d2] bg-[#fdeeec] lg:border-[#f09e99] lg:bg-[#fff2f2]";
  const titleColor = tone === "red" ? "lg:text-[#d12924]" : "lg:text-lp-green";
  const bodyColor =
    tone === "mint"
      ? "lg:text-lp-muted"
      : tone === "amber"
        ? "lg:text-[#8c540d]"
        : "lg:text-[#d12924]";
  return (
    <div
      className={`rounded-[14px] border px-[14px] pt-[13px] pb-[13px] lg:rounded-[12px] lg:px-[17px] lg:pt-[12px] lg:pb-0 lg:text-[13px] ${cardClasses}`}
    >
      {title !== undefined && (
        <p
          className={`text-[13px] leading-[18px] font-semibold text-lp-ink lg:leading-[20px] ${titleColor}`}
        >
          {title}
        </p>
      )}
      <div
        className={`mt-[6px] flex flex-col text-[11px] leading-[16px] text-lp-muted lg:mt-0 lg:min-h-[58px] lg:justify-center lg:text-[13px] ${bodyColor}`}
      >
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
