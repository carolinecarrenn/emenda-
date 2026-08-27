interface SelectDisplayProps {
  value: string;
  /** Dial-code chip renders its value semibold green; country value is regular ink. */
  valueClass?: string;
  className?: string;
}

/** Display-only select (Country / dial code): white field, hairline #d4e0db
 *  border, 14px radius, 13px value, green ▾ caret — as in the mocks. */
export function SelectDisplay({
  value,
  valueClass = "text-[#173b33]",
  className = "",
}: SelectDisplayProps) {
  return (
    <div
      className={`flex h-[54px] items-center justify-between rounded-[14px] border border-[#d4e0db] bg-white px-[13px] lg:h-[56px] ${className}`}
    >
      <span className={`text-[13px] whitespace-pre ${valueClass}`}>{value}</span>
      <span className="text-[12px] font-semibold text-[#055e4d]">▾</span>
    </div>
  );
}

interface CountryPhoneFieldsProps {
  countryLabel: string;
  phoneLabel: string;
  country: string;
  dialCode: string;
  phoneValue: string;
  onPhoneChange: (value: string) => void;
  /** Inline error under the phone row (red 13px). */
  phoneError?: string | null;
  /** WD-05x indents the error to the number field; WD-08B spans full width. */
  indentError?: boolean;
  /** W-05C's "already linked" helper is amber (#c77a08), not red. */
  errorTone?: "error" | "warning";
}

/** Country select + split dial-code/phone row shared by Login, Register and
 *  Forgot PIN. Labels are 11px/16 semibold #7a918a on mobile (W-04 438:2) and
 *  14px/17 medium on desktop; dial chip 154px wide with an 18px gap on
 *  desktop, 104px / 12px on mobile (W-04). */
export function CountryPhoneFields({
  countryLabel,
  phoneLabel,
  country,
  dialCode,
  phoneValue,
  onPhoneChange,
  phoneError = null,
  indentError = true,
  errorTone = "error",
}: CountryPhoneFieldsProps) {
  return (
    <div>
      <p className="mb-[6px] text-[11px] leading-[16px] font-semibold text-[#7a918a] lg:mb-[7px] lg:text-[14px] lg:leading-[17px] lg:font-medium">
        {countryLabel}
      </p>
      <SelectDisplay value={country} />
      <p className="mt-[20px] mb-[6px] text-[11px] leading-[16px] font-semibold text-[#7a918a] lg:mt-[22px] lg:mb-[7px] lg:text-[14px] lg:leading-[17px] lg:font-medium">
        {phoneLabel}
      </p>
      <div className="flex gap-[12px] lg:gap-[18px]">
        <SelectDisplay
          value={dialCode}
          valueClass="font-semibold text-[#055e4d]"
          className="w-[104px] shrink-0 lg:w-[154px]"
        />
        <input
          type="tel"
          value={phoneValue}
          onChange={(event) => onPhoneChange(event.target.value)}
          className="h-[54px] w-full min-w-0 rounded-[14px] border border-[#d4e0db] bg-white px-[13px] text-[13px] text-[#173b33] outline-none focus:border-[#08745e] lg:h-[56px]"
        />
      </div>
      {phoneError ? (
        <p
          className={`text-[11px] leading-[16px] lg:mt-[8px] lg:text-[13px] ${
            errorTone === "warning" ? "text-[#c77a08]" : "text-[#d1332e]"
          } ${indentError ? "mt-[5px] pl-[116px] lg:pl-[172px]" : "mt-[12px]"}`}
        >
          {phoneError}
        </p>
      ) : null}
    </div>
  );
}

interface PinInputProps {
  value: string;
  onChange: (value: string) => void;
  /** W-09A / WD-09A draw the confirm field with a #c73833 hairline when the
   *  two PINs disagree. */
  invalid?: boolean;
  className?: string;
}

/** Masked 6-digit PIN field: white, #d4e1dd hairline, 14px radius, dots. */
export function PinInput({
  value,
  onChange,
  invalid = false,
  className = "",
}: PinInputProps) {
  return (
    <input
      type="password"
      inputMode="numeric"
      maxLength={6}
      value={value}
      aria-invalid={invalid || undefined}
      onChange={(event) =>
        onChange(event.target.value.replace(/\D/g, "").slice(0, 6))
      }
      className={`h-[54px] w-full rounded-[14px] border bg-white px-[15px] text-[14px] leading-[17px] font-semibold text-[#173a32] outline-none focus:border-[#08745e] lg:h-[56px] ${
        invalid ? "border-[#c73833]" : "border-[#d4e1dd]"
      } ${className}`}
    />
  );
}
