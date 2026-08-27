import { Calendar, ChevronDown } from "lucide-react";

/** 10px uppercase field label from the WD-32G/WD-33B forms. The W-33D
 *  validation frame tints the label of a failing field red. */
export function FieldLabel({
  text,
  invalid = false,
}: {
  text: string;
  invalid?: boolean;
}) {
  return (
    <p
      className={`text-[10px] leading-[15px] font-semibold tracking-[0.05em] uppercase lg:leading-[16px] ${invalid ? "text-[#c7261f]" : "text-[#5e7066]"}`}
    >
      {text}
    </p>
  );
}

function inputBorder(error?: string) {
  return error ? "border-[#c7261f]" : "border-[#d6e0da]";
}

function HelperText({ helper, error }: { helper?: string; error?: string }) {
  if (error) {
    return <p className="mt-[4px] text-[10px] leading-[15px] text-[#c7261f] lg:mt-[6px] lg:text-[11px] lg:leading-[20px]">{error}</p>;
  }
  if (helper) {
    return <p className="mt-[4px] text-[10px] leading-[15px] text-[#5e7066] lg:mt-[6px] lg:text-[11px] lg:leading-[20px]">{helper}</p>;
  }
  return null;
}

/** Chevron select field — opens an overlay sheet (WD-32M/N, WD-33S/T). */
export function SelectField({
  label,
  value,
  onOpen,
  helper,
  error,
  labelError,
}: {
  label: string;
  value: string;
  onOpen: () => void;
  helper?: string;
  error?: string;
  /** W-33D tints the label red too; the W-32L frame leaves it grey. */
  labelError?: boolean;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel text={label} invalid={Boolean(labelError && error)} />
      <button
        type="button"
        onClick={onOpen}
        className={`mt-[6px] flex h-[50px] w-full items-center justify-between overflow-hidden rounded-[12px] border bg-white px-[14px] text-left lg:mt-[8px] lg:h-[52px] lg:px-[17px] ${inputBorder(error)}`}
      >
        <span className="line-clamp-2 min-w-0 flex-1 pr-3 text-[13px] leading-[17px] text-[#131f1a]">
          {value}
        </span>
        <ChevronDown className="h-[16px] w-[16px] shrink-0 text-[#5e7066]" />
      </button>
      <HelperText helper={helper} error={error} />
    </div>
  );
}

/** Calendar date field — opens the date-picker sheet (WD-32O, WD-33U). */
export function DateField({
  label,
  value,
  onOpen,
  helper,
  error,
  labelError,
  busy = false,
}: {
  label: string;
  value: string;
  onOpen: () => void;
  helper?: string;
  error?: string;
  /** W-33D tints the label red too; the W-32L frame leaves it grey. */
  labelError?: boolean;
  /** While a save is in flight (WD-32H / WD-33E / WD-35D) the frame drops the
   *  calendar affordance and the helper line and the field goes inert. */
  busy?: boolean;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel text={label} invalid={Boolean(labelError && error)} />
      <button
        type="button"
        onClick={onOpen}
        disabled={busy}
        className={`mt-[6px] flex h-[50px] w-full items-center justify-between overflow-hidden rounded-[12px] border bg-white px-[14px] text-left lg:mt-[8px] lg:h-[52px] lg:px-[17px] ${inputBorder(error)}`}
      >
        <span className="line-clamp-2 min-w-0 flex-1 pr-3 text-[13px] leading-[17px] text-[#131f1a]">
          {value}
        </span>
        {!busy && (
          <Calendar className="h-[18px] w-[18px] shrink-0 text-[#5e7066]" />
        )}
      </button>
      {!busy && <HelperText helper={helper} error={error} />}
    </div>
  );
}

/** Plain text field (note inputs). */
export function TextField({
  label,
  value,
  onChange,
  helper,
  error,
  labelError,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  error?: string;
  /** W-33D tints the label red too; the W-32L frame leaves it grey. */
  labelError?: boolean;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel text={label} invalid={Boolean(labelError && error)} />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-[6px] h-[50px] w-full rounded-[12px] border bg-white px-[14px] text-[13px] text-[#131f1a] outline-none focus:border-[#08664d] lg:mt-[8px] lg:h-[52px] lg:px-[17px] ${inputBorder(error)}`}
      />
      <HelperText helper={helper} error={error} />
    </div>
  );
}
