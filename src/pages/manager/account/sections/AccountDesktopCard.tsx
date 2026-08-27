import type { ReactNode } from "react";

/* Desktop key-value card shared by MD-18E (1223:95…1223:116), MD-18
   (1223:155…1223:166) and MD-18B (1223:236…1223:250): a 74px white card,
   radius 10, 1px hairline — a 10px caps label at 16/14 in, the 16px value on
   the next line and an optional 11px meta line under it. */
export function AccountDesktopKeyValueCard({
  label,
  value,
  meta,
  className = "",
}: {
  label: string;
  value: ReactNode;
  meta?: string;
  className?: string;
}) {
  return (
    <div
      className={`h-[74px] rounded-[10px] border border-[#dbe3de] bg-white px-[16px] pt-[14px] ${className}`}
    >
      <p className="text-[10px] leading-[13px] font-semibold text-[#65746d] uppercase">
        {label}
      </p>
      <p className="mt-[7px] truncate text-[16px] leading-[20px] font-semibold text-brand-deep">
        {value}
      </p>
      {meta && (
        <p className="mt-[1px] truncate text-[11px] leading-[14px] text-[#65746d]">
          {meta}
        </p>
      )}
    </div>
  );
}

/* Desktop mint boundary / note panel: MD-18E "Access boundary" (1223:127),
   MD-18B "Source timestamps stay unchanged" (1223:251). A fixed-height panel
   with a 13px title over the 11px body, both 24px in. */
export function AccountDesktopNotePanel({
  title,
  body,
  tone = "mint",
  heightClass,
  className = "",
}: {
  title: string;
  body: string;
  tone?: "mint" | "white";
  heightClass: string;
  className?: string;
}) {
  return (
    <div
      className={`${heightClass} rounded-[10px] border px-[24px] pt-[22px] ${
        tone === "mint"
          ? "border-[#d5e6dc] bg-[#e3f0e8]"
          : "border-[#dbe3de] bg-white"
      } ${className}`}
    >
      <p className="text-[13px] leading-[20px] font-semibold text-brand-deep">
        {title}
      </p>
      <p className="mt-[6px] text-[11px] leading-[13px] text-[#65746d]">
        {body}
      </p>
    </div>
  );
}

/* Desktop single-line mint strip: MD-18 (1223:176) and MD-18A (1223:213)
   place one 11px semibold sentence in a fixed-height rounded panel. */
export function AccountDesktopBoundaryStrip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center rounded-[10px] bg-[#e3f0e8] px-[24px] ${className}`}
    >
      <p className="text-[11px] leading-[18px] font-semibold text-brand-deep">
        {children}
      </p>
    </div>
  );
}
