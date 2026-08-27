import { Calendar, ChevronDown } from "lucide-react";

/* WD-35B/H form-field pattern: 10px semibold uppercase grey micro-label,
   52px white rounded-12 input with 13px ink value. Date fields carry an
   18px calendar glyph, selects a 16px chevron; validation swaps the border
   to red with the message rendered in the input area. */

/* Mobile geometry is the W-35B/C frame (628:645): 50px field, 13px inset,
   6px label gap; desktop keeps the WD-35B 52px/18px band. */
const inputBase =
  "mt-[6px] flex h-[50px] w-full items-center rounded-[12px] border bg-white px-[13px] text-left text-[13px] text-[#131f1a] lg:mt-[8px] lg:h-[52px] lg:px-[17px]";

/** 10px micro-label; W-35C 628:644 turns it red alongside the field. */
function FieldLabel({ text, error }: { text: string; error?: boolean }) {
  return (
    <p
      className={`text-[10px] leading-[16px] font-semibold uppercase ${error ? "text-[#c72e26]" : "text-[#5e7066]"}`}
    >
      {text}
    </p>
  );
}

/** W-35C 628:647 — 11px red message under the field, never inside it. */
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-[6px] text-[11px] text-[#c72e26]">{message}</p>;
}

export function TextField({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  /** Inline validation message shown in the empty input (WD-35C style). */
  error?: string;
}) {
  const showError = error !== undefined;
  return (
    <div className="min-w-0">
      <FieldLabel text={label} error={showError} />
      <input
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputBase} ${
          showError ? "border-[#c72e26]" : "border-[#d6e0da]"
        } focus:border-[#08664d] focus:outline-none`}
      />
      <FieldError message={error} />
    </div>
  );
}

export function DateFieldButton({
  label,
  value,
  onClick,
  error,
}: {
  label: string;
  value: string;
  onClick: () => void;
  error?: string;
}) {
  const showError = error !== undefined && value.trim() === "";
  return (
    <div className="min-w-0">
      <FieldLabel text={label} error={showError} />
      <button
        type="button"
        onClick={onClick}
        className={`${inputBase} justify-between ${
          showError ? "border-[#c72e26]" : "border-[#d6e0da]"
        } hover:border-[#b9ccc2]`}
      >
        <span className="min-w-0 truncate">{value}</span>
        <Calendar className="size-[18px] shrink-0 text-[#08664d]" strokeWidth={2} />
      </button>
      <FieldError message={showError ? error : undefined} />
    </div>
  );
}

export function SelectFieldButton({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel text={label} />
      <button
        type="button"
        onClick={onClick}
        className={`${inputBase} justify-between border-[#d6e0da] hover:border-[#b9ccc2]`}
      >
        <span className="min-w-0 truncate">{value}</span>
        <ChevronDown className="size-[16px] shrink-0 text-[#08664d]" strokeWidth={2} />
      </button>
    </div>
  );
}

/** Sheet-internal option row (white pill, green bold label). */
export function SheetOptionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-[8px] flex h-[44px] w-full items-center justify-center rounded-[11px] border border-[#d6e0da] bg-white text-[13px] font-semibold text-[#08664d] hover:bg-lp-tint"
    >
      {label}
    </button>
  );
}

/** Sheet-internal editable date input (WD-35K/L picker pattern). */
export function SheetDateInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-[10px] flex h-[52px] w-full items-center justify-between rounded-[12px] border border-[#d6e0da] bg-white px-[16px] lg:mt-[14px]">
      <input
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 bg-transparent p-0 text-[13px] text-[#131f1a] focus:ring-0 focus:outline-none"
      />
      <Calendar className="size-[18px] shrink-0 text-[#08664d]" strokeWidth={2} />
    </div>
  );
}
