/** W-38O Already linked (Figma 803:114): mint 16px-radius card carrying a
 *  10px uppercase provenance label, the 16px record title and an 11px
 *  explanation of why the record cannot be added by hand. */
export function LinkedRecordCard({
  label,
  title,
  body,
  className = "",
}: {
  label: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border border-[#c7ded3] bg-[#eef5f1] px-[15px] pt-[15px] pb-[19px] ${className}`}
    >
      <p className="text-[10px] font-semibold tracking-[0.04em] text-[#65746d]">
        {label}
      </p>
      <p className="mt-[12px] text-[16px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p className="mt-[10px] text-[11px] leading-[1.6] text-[#65746d]">
        {body}
      </p>
    </div>
  );
}
