import { ChevronDown } from "lucide-react";

/** WD-20 form field: dotted-caps 11px label, 52px white input (14px radius),
 *  optional helper line. Validation error (WD-20A): thin #b42419 border +
 *  11px red helper text. */
export function ProfileField({
  label,
  value,
  onChange,
  helper,
  error,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  error?: string;
  textarea?: boolean;
}) {
  const borderClass = error ? "border-[#b42419]" : "border-line";
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[11px] leading-[18px] font-semibold text-ink-muted">
        {label}
      </p>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[54px] w-full resize-none rounded-[14px] border ${borderClass} bg-white px-[14px] pt-3 text-[13px] text-ink outline-none focus:border-brand`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[52px] w-full rounded-[14px] border ${borderClass} bg-white px-[14px] text-[13px] text-ink outline-none focus:border-brand`}
        />
      )}
      {error ? (
        <p className="text-[11px] leading-4 text-[#b42419]">{error}</p>
      ) : (
        helper && (
          <p className="text-[11px] leading-4 text-[#61756b]">{helper}</p>
        )
      )}
    </div>
  );
}

/** WD-20 "LOCATION · CURRENT COUNTRY" dropdown trigger. Desktop it opens a
 *  centered modal, mobile a bottom sheet (Country Selector overlay). */
export function CountryField({
  label,
  value,
  placeholder,
  error,
  onOpen,
}: {
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onOpen: () => void;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[11px] leading-[18px] font-semibold text-ink-muted">
        {label}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className={`flex h-[52px] w-full items-center justify-between rounded-[14px] border ${
          error ? "border-[#b42419]" : "border-line"
        } bg-white pl-[14px] pr-0 text-[13px] lg:pr-[14px] ${value ? "text-ink" : "text-[#65746d]"}`}
      >
        <span>{value || placeholder}</span>
        <ChevronDown size={16} className="text-ink-muted" />
      </button>
      {error && <p className="text-[11px] leading-4 text-[#b42419]">{error}</p>}
    </div>
  );
}
