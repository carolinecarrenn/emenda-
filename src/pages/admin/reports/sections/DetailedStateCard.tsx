import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* Shared chrome for the three AD-04D cards (1239:357 / 1239:382 / 1239:407):
   a 760x720 white card, radius 14, 1px #d1e3db, holding a mint #edf7f2 pill
   (radius 12, 10px semibold #0a5740), a 19px semibold #13332b title over its
   11px #63756e caption, 42px read-only fields (#edf7f2, radius 8, 11px
   #63756e) under 11px semibold labels, a tinted note block, the action row
   and the 10px #63756e footnote pinned to the card foot. */

export function StateCard({
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
    <div className="flex flex-col rounded-[14px] border border-[#d1e3db] bg-white px-[19px] pt-[17px] pb-[19px] lg:h-[720px] lg:w-[760px]">
      <span className="flex h-[24px] w-fit items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] font-semibold text-[#0a5740]">
        {pill}
      </span>
      <h3 className="mt-[16px] text-[19px] leading-[23px] font-semibold text-[#13332b]">
        {title}
      </h3>
      <p className="mt-[5px] text-[11px] leading-[14px] text-[#63756e]">
        {subtitle}
      </p>

      <div className="mt-[32px] flex flex-col gap-[15px]">{children}</div>

      <p className="mt-[24px] text-[10px] leading-[13px] text-[#63756e] lg:mt-auto">
        {footnote}
      </p>
    </div>
  );
}

/** A read-only AD-04D field: 11px semibold label over the #edf7f2 value box. */
export function StateField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[11px] leading-[14px] font-semibold text-[#13332b]">
        {label}
      </p>
      <div className="mt-[5px] flex min-h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px] py-[12px]">
        <p className="text-[11px] leading-[14px] text-[#63756e]">{value}</p>
      </div>
    </div>
  );
}

/** AD-04D consequence note — #ebf5fc for impact/after-send, #fdf7ec for the
 *  reopen path drawn on the outcome card. */
export function StateNote({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "info" | "warning";
}) {
  return (
    <div
      className={`rounded-[10px] px-[11px] pt-[11px] pb-[12px] lg:min-h-[74px] ${
        tone === "warning" ? "bg-[#fdf7ec]" : "bg-[#ebf5fc]"
      }`}
    >
      <p className="text-[11px] leading-[14px] font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[6px] text-[10px] leading-[13px] text-[#63756e]">
        {body}
      </p>
    </div>
  );
}

/** AD-04D action row: a white secondary button beside the #0a5740 primary. */
export function StateActions({
  secondaryLabel,
  secondaryTo,
  primaryLabel,
  primaryTo,
}: {
  secondaryLabel: string;
  secondaryTo: string;
  primaryLabel: string;
  primaryTo: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-[24px]">
      <Link
        to={secondaryTo}
        className="flex h-[34px] items-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b]"
      >
        {secondaryLabel}
      </Link>
      <Link
        to={primaryTo}
        className="flex h-[34px] items-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white"
      >
        {primaryLabel}
      </Link>
    </div>
  );
}
