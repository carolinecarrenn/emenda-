import type { ReactNode } from "react";

/* AD-09 card primitives (1225:970 / 992 / 1010).
   Every settings column is the same 640px white card: radius 12, 1px #d6e3de,
   15px padding, a 13px bold #17362e title over an 8px #65746d subtitle. Below
   lg the fixed height is dropped and the card fills the 390 column, with the
   small desktop type stepped up one notch the way the admin top bar does. */

export function SettingsCard({
  title,
  subtitle,
  className = "",
  children,
}: {
  title: string;
  subtitle: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`flex flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[15px] lg:h-[640px] ${className}`}
    >
      <h2 className="text-[13px] leading-none font-bold text-[#17362e]">
        {title}
      </h2>
      <p className="mt-[5px] text-[10px] leading-none text-[#65746d] lg:text-[8px]">
        {subtitle}
      </p>
      {children}
    </section>
  );
}

/** AD-09 label + 36px input pair (e.g. 1225:973 / 1225:974). */
export function SettingsField({
  label,
  value,
  onChange,
  readOnly = false,
}: {
  label: string;
  value: string;
  onChange?: (next: string) => void;
  readOnly?: boolean;
}) {
  return (
    <label className="flex flex-col gap-[9px]">
      <span className="text-[11px] leading-none font-semibold text-[#65746d] lg:text-[9px]">
        {label}
      </span>
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[12px] text-[#65746d] outline-none focus:border-[#083d2d] lg:text-[10px]"
      />
    </label>
  );
}

/** AD-09 button styles — dark #083d2d fill or white outline, radius 10. */
export function SettingsButton({
  tone,
  onClick,
  className = "",
  children,
}: {
  tone: "dark" | "outline";
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  const skin =
    tone === "dark"
      ? "border-[#083d2d] bg-[#083d2d] text-white hover:bg-[#0c5941]"
      : "border-[#d6e3de] bg-white text-[#083d2d] hover:bg-[#f2f7f5]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[32px] items-center justify-center rounded-[10px] border px-[13px] text-[11px] font-semibold whitespace-nowrap ${skin} ${className}`}
    >
      {children}
    </button>
  );
}
