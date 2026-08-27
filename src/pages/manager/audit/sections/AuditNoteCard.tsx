import type { ReactNode } from "react";

/* Section 09 caps-heading note card (EM-16 1109:27/30, EM-16A 1109:61/64,
   EM-17 1109:91/94, EM-16B 1109:103/106/109, EM-STATE-01 1109:131/135/137,
   EM-STATE-02 1109:144/160): radius 12, 1px #ccded6, 9px caps title over
   9px #667a73 body. Mint #e8f5f0 · caution #fff5c7 · attention #ffe8e0. */
const TONE = {
  mint: { surface: "bg-[#e8f5f0]", title: "text-[#0c5941]" },
  caution: { surface: "bg-[#fff5c7]", title: "text-[#083d2d]" },
  attention: { surface: "bg-[#ffe8e0]", title: "text-[#083d2d]" },
  plain: { surface: "bg-white", title: "text-[#0c5941]" },
} as const;

export type AuditNoteTone = keyof typeof TONE;

export function AuditNoteCard({
  tone,
  title,
  className = "",
  children,
}: {
  tone: AuditNoteTone;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const styles = TONE[tone];

  return (
    <section
      className={`rounded-[12px] border border-[#ccded6] px-[14px] pt-[10px] pb-[14px] lg:px-5 lg:py-4 ${styles.surface} ${className}`}
    >
      <h2
        className={`text-[9px] font-semibold uppercase lg:text-[11px] ${styles.title}`}
      >
        {title}
      </h2>
      <div className="mt-[8px] text-[9px] leading-[11px] text-[#667a73] lg:text-[11px] lg:leading-[18px]">
        {children}
      </div>
    </section>
  );
}
