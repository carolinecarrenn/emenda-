import type { ComponentType, ReactNode } from "react";

type NoteIcon = ComponentType<{ size?: number; className?: string }>;

interface NoteCardProps {
  icon: NoteIcon;
  /** Mint note (article meta, privacy, answered status) vs amber caution. */
  tone: "mint" | "amber";
  title?: ReactNode;
  body: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/* Icon + text note card used across Knowledge on mobile: the article meta
   strip (W-43), the privacy note (W-44), the official-source caution (W-43)
   and the question status cards (W-46/46A). Mint = #eef5f1 on a #c7ded3
   hairline; amber = #fff8e6 on #e7c98d. 12px radius, 20-22px glyph at 13px
   from the left edge, text column starting at 45px. */
export function NoteCard({
  icon: Icon,
  tone,
  title,
  body,
  className = "",
  bodyClassName = "",
}: NoteCardProps) {
  const surface =
    tone === "mint"
      ? "border-[#c7ded3] bg-[#eef5f1]"
      : "border-[#e7c98d] bg-[#fff8e6]";
  const glyph = tone === "mint" ? "text-lp-green" : "text-[#8a5a12]";

  return (
    <div
      className={`flex items-start gap-[12px] rounded-[12px] border px-[13px] py-[13px] ${surface} ${className}`}
    >
      <Icon size={20} className={`mt-[5px] shrink-0 ${glyph}`} aria-hidden />
      <span className="min-w-0 flex-1">
        {title !== undefined && (
          <span className="block text-[11px] leading-[20px] font-semibold text-brand-deep">
            {title}
          </span>
        )}
        <span
          className={`block text-[10px] leading-[17px] text-lp-muted ${bodyClassName}`}
        >
          {body}
        </span>
      </span>
    </div>
  );
}
