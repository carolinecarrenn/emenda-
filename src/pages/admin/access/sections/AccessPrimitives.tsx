import type { ReactNode } from "react";

/**
 * Shared chrome for the live AD-00 access screens (AD-00A 1249:4862 and
 * AD-00B 1249:4928): the #f7faf8 canvas, the centred white card with its
 * 1px #d6e3de border and 18px radius, and the field / note / button
 * primitives both frames are built from.
 *
 * The Figma type ramp (8–11px) is drawn on the 1440 canvas. Below lg the same
 * elements step up one notch — the admin convention already used in
 * AdminKpiRow — rather than the desktop frame being scaled down.
 */

export function AccessCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#f7faf8] px-4 py-8 lg:px-8 lg:pt-[110px] lg:pb-[110px]">
      {children}
    </div>
  );
}

export function AccessCard({
  width,
  children,
}: {
  /** Drawn card width on the 1440 canvas — 676 in AD-00A, 580 in AD-00B. */
  width: 580 | 676;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex w-full flex-col rounded-[18px] border border-[#d6e3de] bg-white px-[20px] pt-[22px] pb-[28px] lg:px-[29px] lg:pt-[27px] lg:pb-[45px] ${
        width === 676 ? "lg:w-[676px] lg:px-[31px]" : "lg:w-[580px]"
      }`}
    >
      {children}
    </div>
  );
}

/** "EMENDA" wordmark, 12px bold #083d2d at the top-left of both access cards. */
export function AccessBrand() {
  return <p className="text-[12px] font-bold text-[#083d2d]">EMENDA</p>;
}

/* The card's own title is the page heading — these access frames are drawn as
   a lone card on a bare canvas, with no shell header above them, so nothing
   else on the screen can carry the document heading. Rendered as <h1> rather
   than <p>: the type is unchanged, but the screen stops being headingless for
   assistive technology (and for the route suite, which is what caught it). */
export function AccessTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[22px] leading-[1.2] font-bold text-[#17362e] lg:text-[26px]">
      {children}
    </h1>
  );
}

export function AccessSubtitle({ children }: { children: ReactNode }) {
  return <p className="text-[12px] text-[#65746d] lg:text-[11px]">{children}</p>;
}

export function AccessFieldLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold text-[#65746d] lg:text-[10px]">
      {children}
    </p>
  );
}

/** 44px field, radius 10, 1px #d6e3de — the AD-00B email / password control. */
export function AccessField({
  id,
  type = "text",
  defaultValue,
  placeholder,
  readOnly = false,
  autoComplete,
}: {
  id: string;
  type?: "text" | "email" | "password";
  defaultValue: string;
  placeholder?: string;
  readOnly?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      readOnly={readOnly}
      autoComplete={autoComplete}
      className={`h-[44px] w-full rounded-[10px] border border-[#d6e3de] px-[13px] text-[12px] text-[#17362e] outline-none placeholder:text-[#65746d] focus:border-[#083d2d] lg:text-[11px] ${
        readOnly ? "bg-[#f7faf8] text-[#65746d]" : "bg-white"
      }`}
    />
  );
}

export type AccessNoteTone = "mint" | "blue" | "amber" | "red";

const NOTE_TONE: Record<AccessNoteTone, string> = {
  mint: "bg-[#e8f5f0]",
  blue: "bg-[#eff5fc]",
  amber: "bg-[#fff5db]",
  red: "bg-[#fcebe8]",
};

/** 72px tinted note block, radius 10 — AD-00B "scope", AD-00A global-language
 *  note and every AD-00D state annotation. */
export function AccessNote({
  tone,
  title,
  body,
}: {
  tone: AccessNoteTone;
  title?: string;
  body: string;
}) {
  return (
    <div
      className={`flex flex-col gap-[6px] rounded-[10px] px-[14px] py-[16px] lg:gap-[8px] lg:py-[18px] ${NOTE_TONE[tone]}`}
    >
      {title ? (
        <p className="text-[11px] font-semibold text-[#17362e] lg:text-[10px]">
          {title}
        </p>
      ) : null}
      <p className="text-[10px] leading-[1.5] text-[#65746d] lg:text-[9px]">
        {body}
      </p>
    </div>
  );
}

const BUTTON_BASE =
  "flex h-[42px] shrink-0 items-center rounded-[10px] border px-[13px] text-[11px] font-semibold whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50";

/** AD-00A "Lanjutkan" / AD-00B "Masuk": deep-green fill, left-aligned label. */
export function AccessPrimaryButton({
  onClick,
  disabled = false,
  className = "",
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON_BASE} border-[#083d2d] bg-[#083d2d] text-white hover:bg-[#0c5941] ${className}`}
    >
      {children}
    </button>
  );
}

/** AD-00B "Lupa kata sandi" / "Ubah bahasa · ID": white fill, #d6e3de border. */
export function AccessSecondaryButton({
  onClick,
  disabled = false,
  className = "",
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON_BASE} border-[#d6e3de] bg-white text-[#083d2d] hover:bg-[#f2f7f5] ${className}`}
    >
      {children}
    </button>
  );
}

/** AD-00D card footers: the quiet 10px consequence line under each state. */
export function AccessFooterNote({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] leading-[1.5] text-[#65746d]">{children}</p>
  );
}
