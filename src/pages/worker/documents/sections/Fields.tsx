import type { ReactNode } from "react";

/** WD-38 / WD-40B form primitives. Figma field frames (1025:868 et al.) are
 *  520 x 78 on desktop: a 14px-tall 10px uppercase label, a 6px gap, then a
 *  46px input with a 12px radius — the remaining 12px reserve the validation
 *  line so an error grows the block to 86 instead of shifting the grid.
 *  Errors use #d6382e borders with 11px #c7261f helper lines; picker inputs
 *  are buttons with an optional right icon (WD-40B's language picker has
 *  none). */

export function FieldBlock({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | null;
  children: ReactNode;
}) {
  return (
    <div className="lg:min-h-[78px]">
      <p className="h-[14px] text-[10px] leading-[14px] font-semibold tracking-[0.04em] text-[#65746d]">
        {label}
      </p>
      <div className="mt-[6px]">{children}</div>
      {error && <p className="mt-[7px] text-[11px] text-[#c7261f]">{error}</p>}
    </div>
  );
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  error,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string | null;
  /** Two-line box — W-39H 759:479 wraps the additional note. */
  multiline?: boolean;
}) {
  if (multiline) {
    return (
      <FieldBlock label={label} error={error}>
        <textarea
          rows={2}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full resize-none rounded-[12px] border bg-white px-[14px] py-[13px] text-[12px] leading-[1.5] text-[#17231f] placeholder:text-[#65746d] focus:border-brand focus:outline-none ${
            error ? "border-[#d6382e]" : "border-[#d7e2dc]"
          }`}
        />
      </FieldBlock>
    );
  }
  return (
    <FieldBlock label={label} error={error}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`h-[46px] w-full rounded-[12px] border bg-white px-[14px] text-[12px] text-[#17231f] placeholder:text-[#65746d] focus:border-brand focus:outline-none ${
          error ? "border-[#d6382e]" : "border-[#d7e2dc]"
        }`}
      />
    </FieldBlock>
  );
}

export function PickerField({
  label,
  display,
  isPlaceholder,
  icon,
  onClick,
  error,
  disabled,
}: {
  label: string;
  display: string;
  /** Placeholder-style values render muted grey like the mocks. */
  isPlaceholder?: boolean;
  /** Omitted where the Figma field carries no trailing affordance. */
  icon?: ReactNode;
  onClick: () => void;
  error?: string | null;
  /** W-38B 758:442/455/460/465 drop every picker to 45% while a file
   *  uploads; the plain text inputs stay live. */
  disabled?: boolean;
}) {
  return (
    <FieldBlock label={label} error={error}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`flex h-[46px] w-full items-center justify-between rounded-[12px] border bg-white px-[14px] text-left text-[12px] ${
          error ? "border-[#d6382e]" : "border-[#d7e2dc]"
        } ${isPlaceholder ? "text-[#65746d]" : "text-[#17231f]"} ${
          disabled ? "opacity-45" : "hover:border-brand"
        }`}
      >
        <span className="truncate">{display}</span>
        {icon && <span className="ml-2 shrink-0 text-[#0b684f]">{icon}</span>}
      </button>
    </FieldBlock>
  );
}
