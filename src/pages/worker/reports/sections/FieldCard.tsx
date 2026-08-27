import { FIELD_BOX, FIELD_LABEL, FIELD_SHELL } from "./fieldShell";

/* Editable field.
   Mobile (W-55 node 978:120 / W-55J): caps label on the page background, then
   a white bordered box (radius 12, 12/10 padding) holding the 11px/16 value.
   Desktop (WD-55H): one white card, caps label inside, borderless input. */
export function FieldCard({
  label,
  value,
  placeholder,
  onChange,
  readOnly = false,
  size = "sm",
  tone = "default",
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  /** sm = 46px mobile box / 76px desktop card · lg = 62px / 82px (W-55 general). */
  size?: "sm" | "lg";
  /** W-55A validation error: red border on the box and red placeholder. */
  tone?: "default" | "error";
}) {
  const isError = tone === "error";
  const card =
    size === "lg"
      ? "lg:min-h-[82px] lg:pb-[7px]"
      : "lg:min-h-[76px] lg:pb-[5px]";
  const box =
    size === "lg" ? "min-h-[62px] lg:h-[46px]" : "min-h-[46px] lg:h-[42px]";
  /* The desktop card carries the WD-55A red border; the mobile box carries it
     instead, so each breakpoint states its own border colour exactly once. */
  const shell = isError
    ? "lg:rounded-[12px] lg:border lg:border-[#c72924] lg:bg-white lg:px-[13px] lg:pt-[8px]"
    : FIELD_SHELL;
  const boxTone = isError
    ? "mt-[5px] rounded-[12px] border border-[#cc4033] bg-white px-[12px] py-[10px] lg:mt-[4px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
    : FIELD_BOX;
  return (
    <div className={`${shell} ${card}`}>
      <p className={`${FIELD_LABEL} ${isError ? "lg:text-[#c72924]" : ""}`}>
        {label}
      </p>
      <div className={`${boxTone} ${box}`}>
        {readOnly ? (
          <p className="flex h-full items-center text-[11px] leading-[16px] text-lp-ink lg:text-[12px] lg:leading-[15px]">
            {value || "—"}
          </p>
        ) : (
          <textarea
            aria-label={label}
            rows={2}
            className={`block h-full w-full resize-none border-0 bg-transparent p-0 text-[11px] leading-[16px] content-center focus:ring-0 focus:outline-none lg:text-[12px] lg:leading-[15px] ${
              isError
                ? "text-[#c72924] placeholder:text-transparent lg:placeholder:text-[#c72924]"
                : "text-lp-ink placeholder:text-lp-muted/60"
            }`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
