import type { ReactNode } from "react";

/* The shape AD-10 gives an individual state screen (1225:1328 …1225:1342):
   a white card, radius 12, 1px #d6e3de, 23px padding — an optional 56px
   tinted circle with a 26px glyph, an 18px bold title, a 10px #65746d body,
   any tinted rule blocks the state carries, and the frame's own button pair.

   Held at the full 1144 column so the state replaces the screen's content
   without collapsing the route, per the AD-10C context-preservation rule. */

export function StateScreenCard({
  glyph,
  glyphClassName,
  title,
  body,
  children,
  actions,
}: {
  glyph?: string;
  glyphClassName?: string;
  title: string;
  body: string;
  children?: ReactNode;
  actions: ReactNode;
}) {
  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[23px]">
      {glyph ? (
        <div
          className={`flex size-[56px] items-center justify-center rounded-full ${glyphClassName ?? ""}`}
        >
          <span className="text-[26px] leading-none font-bold" aria-hidden="true">
            {glyph}
          </span>
        </div>
      ) : null}
      <p
        className={`text-[18px] leading-[22px] font-bold text-[#17362e] ${glyph ? "mt-[16px]" : ""}`}
      >
        {title}
      </p>
      <p className="mt-[14px] text-[11px] leading-[16px] text-[#65746d] lg:text-[10px] lg:leading-[15px]">
        {body}
      </p>
      {children ? <div className="mt-[20px] flex flex-col gap-[15px]">{children}</div> : null}
      <div className="mt-[24px] flex flex-wrap items-center gap-[16px]">
        {actions}
      </div>
    </div>
  );
}

/** The 74px tinted rule block AD-10D pins beneath a state (1239:845 …). */
export function StateScreenNote({
  label,
  detail,
  toneClassName,
}: {
  label: string;
  detail: string;
  toneClassName: string;
}) {
  return (
    <div className={`rounded-[10px] p-[11px] lg:min-h-[74px] ${toneClassName}`}>
      <p className="text-[11px] leading-none font-semibold text-[#17362e]">
        {label}
      </p>
      <p className="mt-[9px] text-[10px] leading-[15px] text-[#65746d]">
        {detail}
      </p>
    </div>
  );
}
