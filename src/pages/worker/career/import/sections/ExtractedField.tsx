/** Uppercase-eyebrow field used by the WD-23F/23G extracted-item edit forms. */
export function ExtractedField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold tracking-[0.06em] text-[#65746d] uppercase">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-[10px] h-[50px] w-full rounded-[14px] border border-[#d5e0da] bg-white px-[14px] text-[13px] text-[#17231f] outline-none focus:border-brand"
      />
    </label>
  );
}
