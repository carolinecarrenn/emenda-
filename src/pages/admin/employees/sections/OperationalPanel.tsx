import type { ReactNode } from "react";

/* Shared parts of the three AD-02D "Concrete operational states" panels
   (1239:200, 1239:225, 1239:250): a 760x720 white card, radius 14, 1px
   #d1e3db, 20px inset — an uppercase mint pill, a 19px semibold #13332b
   title over an 11px #63756e line, 42px #edf7f2 read-back fields (radius 8)
   under 11px semibold labels, tinted 74px notes (radius 10), 34px buttons
   (radius 8) and a 10px footnote pinned to the bottom of the panel. */

export function OperationalPanel({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[#d1e3db] bg-white p-[20px] lg:h-[720px] lg:w-[760px]">
      {children}
    </div>
  );
}

export function PanelHeader({
  pill,
  title,
  subtitle,
}: {
  pill: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <span className="flex h-[24px] items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] font-semibold tracking-[0.04em] text-[#0a5740]">
        {pill}
      </span>
      <h3 className="mt-[16px] pr-[40px] text-[19px] leading-none font-semibold text-[#13332b]">
        {title}
      </h3>
      <p className="mt-[9px] text-[11px] leading-none text-[#63756e]">
        {subtitle}
      </p>
    </div>
  );
}

export function PanelField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] leading-none font-semibold text-[#13332b]">
        {label}
      </span>
      <p className="mt-[6px] flex h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px] text-[11px] text-[#63756e]">
        {value}
      </p>
    </div>
  );
}

const NOTE_TONE = {
  mint: "bg-[#edf7f2]",
  red: "bg-[#fcebe8]",
  amber: "bg-[#fff5db]",
  blue: "bg-[#ebf5fc]",
} as const;

export function PanelNote({
  tone,
  title,
  body,
}: {
  tone: keyof typeof NOTE_TONE;
  title: string;
  body: string;
}) {
  return (
    <div className={`rounded-[10px] p-[11px] lg:h-[74px] ${NOTE_TONE[tone]}`}>
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[9px] text-[10px] leading-[14px] text-[#63756e]">
        {body}
      </p>
    </div>
  );
}

const BUTTON_TONE = {
  ghost: "border-[#d1e3db] bg-white text-[#13332b]",
  primary: "border-[#0a5740] bg-[#0a5740] text-white",
  danger: "border-[#fcebe8] bg-[#fcebe8] text-[#8c1f1a]",
} as const;

export function PanelButton({
  tone,
  label,
  onClick,
}: {
  tone: keyof typeof BUTTON_TONE;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[34px] rounded-[8px] border px-[13px] text-[11px] font-semibold ${BUTTON_TONE[tone]}`}
    >
      {label}
    </button>
  );
}

export function PanelFootnote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-[24px] text-[10px] leading-[14px] text-[#63756e] lg:mt-auto lg:pt-[24px]">
      {children}
    </p>
  );
}
