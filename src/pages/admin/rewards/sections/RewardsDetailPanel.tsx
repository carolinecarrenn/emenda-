import type { ReactNode } from "react";

/* A 760x720 AD-07D panel (1239:594 / 1239:619 / 1239:644): the #edf7f2 pill,
 *  the 19px semibold title over its 11px subtitle, the field stack the caller
 *  supplies, and the 10px #63756e footnote pinned near the card foot. */
export function RewardsDetailPanel({
  pill,
  title,
  subtitle,
  footnote,
  children,
}: {
  pill: string;
  title: string;
  subtitle: string;
  footnote: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[#d1e3db] bg-white p-[16px] lg:h-[720px] lg:w-[760px] lg:p-[19px]">
      <span className="flex h-[24px] w-fit items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] font-semibold tracking-[0.04em] text-[#0a5740]">
        {pill}
      </span>
      <h3 className="mt-[20px] text-[19px] leading-none font-semibold text-[#13332b]">
        {title}
      </h3>
      <p className="mt-[12px] text-[11px] leading-none text-[#63756e]">
        {subtitle}
      </p>

      <div className="mt-[27px] flex flex-col gap-[15px]">{children}</div>

      <p className="mt-[24px] text-[10px] leading-[14px] text-[#63756e] lg:mt-auto">
        {footnote}
      </p>
    </div>
  );
}
