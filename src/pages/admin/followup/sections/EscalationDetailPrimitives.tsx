import type { ReactNode } from "react";

/* Shared primitives for the three AD-05D state cards (1239:436 / 1239:461 /
   1239:486). AD-05D is drawn against a later, warmer token set than the rest
   of AD-05 — #fafcfb board, #d1e3db lines, #edf7f2 fields, #13332b ink,
   #63756e muted — so these primitives carry that palette verbatim. */

export function DetailStateCard({
  pill,
  title,
  subtitle,
  footer,
  children,
}: {
  pill: string;
  title: string;
  subtitle: string;
  footer: string;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col gap-[18px] rounded-[14px] border border-[#d1e3db] bg-white p-[19px] lg:h-[720px] lg:w-[760px] lg:shrink-0">
      <div className="flex flex-col gap-[10px]">
        <span className="flex h-[24px] w-fit items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] leading-none font-semibold tracking-[0.04em] text-[#0a5740]">
          {pill}
        </span>
        <h3 className="text-[19px] leading-[24px] font-semibold text-[#13332b]">
          {title}
        </h3>
        <p className="text-[11px] leading-[15px] text-[#63756e]">{subtitle}</p>
      </div>

      <div className="flex flex-1 flex-col gap-[15px]">{children}</div>

      <p className="text-[10px] leading-[14px] text-[#63756e]">{footer}</p>
    </article>
  );
}

export function DetailField({
  id,
  label,
  value,
}: {
  id: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label
        htmlFor={id}
        className="text-[11px] leading-none font-semibold text-[#13332b]"
      >
        {label}
      </label>
      <input
        id={id}
        readOnly
        value={value}
        className="h-[42px] w-full rounded-[8px] border border-[#edf7f2] bg-[#edf7f2] px-[11px] text-[11px] text-[#63756e] outline-none"
      />
    </div>
  );
}

export function DetailNote({
  tone,
  title,
  body,
}: {
  tone: "amber" | "red" | "blue";
  title: string;
  body: string;
}) {
  const surface =
    tone === "amber"
      ? "bg-[#fff5db]"
      : tone === "red"
        ? "bg-[#fcebe8]"
        : "bg-[#ebf5fc]";

  return (
    <div className={`flex flex-col gap-[9px] rounded-[10px] p-[11px] ${surface}`}>
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="text-[10px] leading-[14px] text-[#63756e]">{body}</p>
    </div>
  );
}
