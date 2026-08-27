import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";

/* AD-09D primitives (1239:748). The detailed-state board runs a palette of
   its own, one step cooler than AD-09: #fafcfb board, #d1e3db line, #0a5740
   green, #13332b ink, #63756e muted, #edf7f2 field, #fff5db / #fcebe8 /
   #ebf5fc notes and #8c1f1a destructive text.

   Each panel is drawn 760x720; in the 1144 admin column one panel is shown at
   a time, addressed by ?state= (unsaved · confirm-apply · reset-rules). */

export function SettingsStatesBoard({ children }: { children: ReactNode }) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <div className="rounded-[16px] border border-[#d1e3db] bg-[#fafcfb] p-[23px]">
      <p className="text-[10px] leading-none font-semibold text-[#0a5740]">
        {c.statesBoard.eyebrow}
      </p>
      <h2 className="mt-[16px] text-[23px] leading-[28px] font-semibold text-[#13332b]">
        {c.statesBoard.title}
      </h2>
      <p className="mt-[10px] text-[11px] leading-[16px] text-[#63756e]">
        {c.statesBoard.subtitle}
      </p>
      <div className="mt-[22px]">{children}</div>
    </div>
  );
}

export function StatePanel({
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
    <section className="flex w-full max-w-[760px] flex-col rounded-[14px] border border-[#d1e3db] bg-white p-[19px] lg:h-[720px]">
      <span className="flex h-[24px] w-fit items-center rounded-[12px] bg-[#edf7f2] px-[9px] text-[10px] font-semibold text-[#0a5740]">
        {pill}
      </span>
      <h3 className="mt-[16px] text-[19px] leading-none font-semibold text-[#13332b]">
        {title}
      </h3>
      <p className="mt-[9px] text-[11px] leading-none text-[#63756e]">
        {subtitle}
      </p>
      <div className="mt-[26px] flex flex-col gap-[15px]">{children}</div>
      <p className="mt-[24px] text-[10px] leading-[15px] text-[#63756e] lg:mt-auto">
        {footnote}
      </p>
    </section>
  );
}

/** AD-09D label + 42px #edf7f2 value box (e.g. 1239:757 / 1239:758). */
export function StateField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {label}
      </p>
      <div className="flex min-h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px] py-[12px]">
        <p className="text-[11px] leading-[16px] text-[#63756e]">{value}</p>
      </div>
    </div>
  );
}

export type StateNoteTone = "amber" | "red" | "blue";

const NOTE_TONE: Record<StateNoteTone, string> = {
  amber: "bg-[#fff5db]",
  red: "bg-[#fcebe8]",
  blue: "bg-[#ebf5fc]",
};

/** AD-09D 74px note block (1239:766 / 798 / 810 / 813). */
export function StateNote({
  tone,
  title,
  body,
}: {
  tone: StateNoteTone;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`rounded-[10px] px-[11px] pt-[11px] pb-[13px] lg:h-[74px] ${NOTE_TONE[tone]}`}
    >
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[9px] text-[10px] leading-[15px] text-[#63756e]">
        {body}
      </p>
    </div>
  );
}

export type StateButtonTone = "outline" | "primary" | "danger";

const BUTTON_TONE: Record<StateButtonTone, string> = {
  outline: "border-[#d1e3db] bg-white text-[#13332b] hover:bg-[#f2f7f5]",
  primary: "border-[#0a5740] bg-[#0a5740] text-white hover:bg-[#083d2d]",
  danger: "border-[#fcebe8] bg-[#fcebe8] text-[#8c1f1a] hover:bg-[#f8ded9]",
};

/** AD-09D 34px action button (1239:769 / 771 / 816 / 818). */
export function StateButton({
  tone,
  children,
}: {
  tone: StateButtonTone;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`flex h-[34px] items-center justify-center rounded-[8px] border px-[13px] text-[11px] font-semibold whitespace-nowrap ${BUTTON_TONE[tone]}`}
    >
      {children}
    </button>
  );
}
