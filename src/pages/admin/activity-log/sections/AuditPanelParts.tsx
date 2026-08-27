import type { ReactNode } from "react";

/* Shared primitives for the three AD-08D panels (1239:673, 1239:698,
   1239:723). The board carries its own palette, slightly deeper than AD-08:
   surface #ffffff on #fafcfb, border #d1e3db, brand #0a5740, ink #13332b,
   muted #63756e, field fill #edf7f2, warning #fff5db, error #fcebe8. */

export function AuditPanel({
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
    <section className="flex w-full flex-col rounded-[14px] border border-[#d1e3db] bg-white p-[16px] lg:h-[720px] lg:w-[760px] lg:shrink-0 lg:p-[19px]">
      <span className="flex h-[24px] w-fit items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] leading-none font-semibold tracking-[0.04em] text-[#0a5740]">
        {pill}
      </span>
      <h3 className="mt-[16px] text-[19px] leading-none font-semibold text-[#13332b]">
        {title}
      </h3>
      <p className="mt-[9px] text-[11px] leading-[15px] text-[#63756e]">
        {subtitle}
      </p>
      <div className="mt-[27px] flex flex-col gap-[15px]">{children}</div>
      <p className="mt-[24px] text-[10px] leading-[14px] text-[#63756e] lg:mt-auto">
        {footnote}
      </p>
    </section>
  );
}

/** An 11px label over the #edf7f2 read-only value box (h42, radius 8). */
export function AuditField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <span className="text-[11px] leading-none font-semibold text-[#13332b]">
        {label}
      </span>
      <div className="flex min-h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px] py-[10px]">
        <span className="text-[11px] leading-[15px] text-[#63756e]">
          {value}
        </span>
      </div>
    </div>
  );
}

/** The amber (1239:694) and red (1239:740) notes. */
export function AuditNote({
  tone,
  title,
  body,
}: {
  tone: "warning" | "error";
  title: string;
  body: string;
}) {
  return (
    <div
      className={`rounded-[10px] px-[11px] py-[11px] ${
        tone === "warning" ? "bg-[#fff5db]" : "bg-[#fcebe8]"
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

/** 34px tall, radius 8 — outline #d1e3db or solid #0a5740. */
export function AuditButton({
  variant,
  children,
}: {
  variant: "outline" | "primary";
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`flex h-[34px] items-center justify-center rounded-[8px] px-[13px] text-[11px] font-semibold whitespace-nowrap ${
        variant === "primary"
          ? "border border-[#0a5740] bg-[#0a5740] text-white hover:bg-[#083d2d]"
          : "border border-[#d1e3db] bg-white text-[#13332b] hover:bg-[#f2f7f5]"
      }`}
    >
      {children}
    </button>
  );
}
