import type { ReactNode } from "react";

/* Shared primitives for the three AD-06D panels (1239:515 / :540 / :565).
   The D board runs its own slightly deeper palette than AD-06: panels are
   white on 1px #d1e3db at radius 14, read-back fields are mint #edf7f2 at
   radius 8 (42px tall, 11px #63756e), labels are 11px semibold #13332b, and
   notes are blue #ebf5fc (guardrail) or amber #fff5db (partial failure). */

export function DetailPanel({
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
    <div className="flex w-full flex-col rounded-[14px] border border-[#d1e3db] bg-white px-[20px] pt-[18px] pb-[18px] lg:h-[720px] lg:w-[760px]">
      <span className="self-start rounded-[12px] bg-[#edf7f2] px-[9px] py-[5px] text-[10px] leading-none font-semibold tracking-[0.06em] text-[#0a5740]">
        {pill}
      </span>
      <p className="mt-[16px] text-[19px] leading-[24px] font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[6px] text-[11px] leading-[15px] text-[#63756e]">
        {subtitle}
      </p>

      <div className="mt-[32px] flex flex-col gap-[15px]">{children}</div>

      <p className="mt-[24px] text-[10px] leading-[14px] text-[#63756e] lg:mt-auto">
        {footnote}
      </p>
    </div>
  );
}

export function DetailField({
  label,
  value,
  tone = "mint",
}: {
  label: string;
  value: string;
  tone?: "mint" | "red";
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {label}
      </p>
      <div
        className={`flex h-[42px] items-center rounded-[8px] px-[11px] ${
          tone === "red" ? "bg-[#fcebe8]" : "bg-[#edf7f2]"
        }`}
      >
        <p
          className={`truncate text-[11px] ${
            tone === "red" ? "text-[#8c1f1a]" : "text-[#63756e]"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export function DetailNote({
  title,
  body,
  tone = "info",
}: {
  title: string;
  body: string;
  tone?: "info" | "warning";
}) {
  return (
    <div
      className={`rounded-[10px] px-[11px] py-[11px] ${
        tone === "warning" ? "bg-[#fff5db]" : "bg-[#ebf5fc]"
      }`}
    >
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[9px] text-[10px] leading-[14px] text-[#63756e]">
        {body}
      </p>
    </div>
  );
}

export function DetailButtonRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-[16px]">{children}</div>;
}

export function DetailButton({
  label,
  tone,
  onClick,
}: {
  label: string;
  tone: "solid" | "outline";
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[34px] items-center justify-center rounded-[8px] px-[14px] text-[11px] font-semibold whitespace-nowrap ${
        tone === "solid"
          ? "border border-[#0a5740] bg-[#0a5740] text-white hover:bg-[#0c5941]"
          : "border border-[#d1e3db] bg-white text-[#13332b] hover:bg-[#f2f7f5]"
      }`}
    >
      {label}
    </button>
  );
}
