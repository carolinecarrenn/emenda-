import type { ReactNode } from "react";

/* One AD-10D panel (1239:831 / 1239:853 / 1239:875): a 760x720 white card,
   radius 14, 1px border — a tinted uppercase pill, a 19px title, an 11px
   subtitle, then a 15px-spaced column of labelled 42px fields and 74px notes,
   an action pair, and a footer rule pinned to the bottom of the card.

   AD-10D is drawn in a second, near-identical palette (#fafcfb / #d1e3db /
   #0a5740 / #13332b / #63756e / #edf7f2 / #fcebe8 / #ebf5fc / #fff5db); it is
   mapped here onto the Company Admin token set AD-01 and AD-10 already use so
   the whole role reads as one surface. */

export type DetailTone = "mint" | "error" | "info" | "warning";

const FIELD_TONE: Record<DetailTone, string> = {
  mint: "bg-[#e8f5f0] text-[#65746d]",
  error: "bg-[#fdf0ef] text-[#b04139]",
  info: "bg-[#eff5fc] text-[#65746d]",
  warning: "bg-[#fdf7ec] text-[#b57023]",
};

const NOTE_TONE: Record<DetailTone, string> = {
  mint: "bg-[#e8f5f0]",
  error: "bg-[#fdf0ef]",
  info: "bg-[#eff5fc]",
  warning: "bg-[#fdf7ec]",
};

export interface DetailBlock {
  kind: "field" | "note";
  label: string;
  detail: string;
  tone: DetailTone;
}

export function RecoveryDetailPanel({
  pill,
  title,
  subtitle,
  blocks,
  actions,
  footer,
}: {
  pill: string;
  title: string;
  subtitle: string;
  blocks: DetailBlock[];
  actions: ReactNode;
  footer: string;
}) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[#d6e3de] bg-white p-[19px] lg:min-h-[720px]">
      <span className="inline-flex h-[24px] w-fit items-center rounded-[12px] bg-[#e8f5f0] px-[9px] text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {pill}
      </span>
      <h4 className="mt-[16px] text-[19px] leading-[24px] font-semibold text-[#17362e]">
        {title}
      </h4>
      <p className="mt-[8px] text-[11px] leading-[16px] text-[#65746d]">
        {subtitle}
      </p>

      <div className="mt-[27px] flex flex-col gap-[15px]">
        {blocks.map((block) =>
          block.kind === "field" ? (
            <div key={block.label}>
              <p className="text-[11px] leading-none font-semibold text-[#17362e]">
                {block.label}
              </p>
              <div
                className={`mt-[8px] flex items-center rounded-[8px] px-[11px] py-[12px] lg:min-h-[42px] ${FIELD_TONE[block.tone]}`}
              >
                <p className="text-[11px] leading-[16px]">{block.detail}</p>
              </div>
            </div>
          ) : (
            <div
              key={block.label}
              className={`rounded-[10px] p-[11px] lg:min-h-[74px] ${NOTE_TONE[block.tone]}`}
            >
              <p className="text-[11px] leading-none font-semibold text-[#17362e]">
                {block.label}
              </p>
              <p className="mt-[9px] text-[10px] leading-[15px] text-[#65746d]">
                {block.detail}
              </p>
            </div>
          ),
        )}
      </div>

      <div className="mt-[14px] flex items-center gap-[16px]">{actions}</div>

      <p className="mt-[24px] text-[10px] leading-[15px] text-[#65746d] lg:mt-auto lg:pt-[24px]">
        {footer}
      </p>
    </div>
  );
}
