interface MobileFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  inputMode?: "text" | "email" | "numeric";
  /** EM-AUTH-01B / 02D / 03B / 03D red label + field outline. */
  invalid?: boolean;
  /** 10px #b84a3a line under the field (842:1677 / 842:1718). */
  helper?: string;
  className?: string;
}

/** Mobile stacked field: 11px semibold label over a 350x48 white card, 1px
 *  #d9e5e0, r12, 12px value at x=34 (nodes 842:1467-1472 / 842:1629-1637). */
export function ManagerAuthMobileField({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
  invalid = false,
  helper,
  className = "",
}: MobileFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`block text-[11px] font-semibold ${
          invalid ? "text-[#b84a3a]" : "text-[#17362f]"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-[7px] h-[48px] w-full rounded-[12px] border bg-white px-[14px] text-[12px] text-[#17362f] outline-none focus:border-[#0b6b57] ${
          invalid ? "border-[#b84a3a]" : "border-[#d9e5e0]"
        }`}
      />
      {helper ? (
        <p className="mt-[6px] text-[10px] leading-[12px] text-[#b84a3a]">
          {helper}
        </p>
      ) : null}
    </div>
  );
}

interface DesktopCardFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  invalid?: boolean;
  className?: string;
}

/** MD-AUTH-01 input card (1193:16-21): 641x63 white card, r14, 1px line,
 *  tiny uppercase-weight 10px label over the 13px value, both at x+18. */
export function ManagerAuthDesktopCardField({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  invalid = false,
  className = "",
}: DesktopCardFieldProps) {
  return (
    <div
      className={`flex h-[63px] w-full flex-col rounded-[14px] border bg-white px-[18px] pt-[8px] ${
        invalid ? "border-[#c94f3d]" : "border-line"
      } ${className}`}
    >
      <label
        htmlFor={id}
        className="text-[10px] leading-[12px] font-bold text-[#596b61]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-[10px] w-full bg-transparent text-[13px] leading-[16px] text-[#141f1a] outline-none"
      />
    </div>
  );
}

interface DesktopRecoveryFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  /** MD-AUTH-03 code field sits on the mint-grey fill instead of white. */
  tone?: "white" | "mint";
  className?: string;
}

/** MD-AUTH-02 / MD-AUTH-03 in-card field: 11px caps label over a 519x53
 *  rounded input, 12px apart (1193:36-38 / 1193:55-57). */
export function ManagerAuthDesktopField({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  tone = "white",
  className = "",
}: DesktopRecoveryFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[11px] leading-[13px] font-bold text-[#6d7d75]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-[12px] h-[53px] w-full rounded-[12px] border border-line px-[17px] text-[14px] text-[#17221d] outline-none focus:border-[#0c5941] ${
          tone === "mint" ? "bg-[#f1f6f3]" : "bg-white"
        }`}
      />
    </div>
  );
}

interface DesktopCodeFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/** MD-AUTH-03 verification-code field (1193:53-54): a label-less 519x57
 *  #f1f6f3 card holding the 20px bold digits centred and widely tracked. */
export function ManagerAuthDesktopCodeField({
  id,
  label,
  value,
  onChange,
  className = "",
}: DesktopCodeFieldProps) {
  return (
    <input
      id={id}
      type="text"
      inputMode="numeric"
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`h-[57px] w-full rounded-[12px] border border-line bg-[#f1f6f3] px-[17px] indent-[6px] text-center text-[20px] font-bold tracking-[0.29em] text-[#17221d] outline-none focus:border-[#0c5941] ${className}`}
    />
  );
}
