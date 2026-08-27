interface EmendaIdCardProps {
  eyebrow: string;
  id: string;
  /** WD-12: "Created for Putri Rahayu" caption directly under the ID. */
  ownerNote?: string;
  /** WD-17D: green "Identity verified" line between ID and holder name. */
  verifiedLine?: string;
  /** WD-17: holder name row. */
  name?: string;
  /** WD-17: "Created 23 Aug 2026" row. */
  created?: string;
}

/** White EMENDA ID card (Figma W-12 468:13 / W-17 468:132 mobile, 816:10 /
 *  817:939 desktop): 16px padding, radius 16, 8px stack, 11px uppercase
 *  micro-eyebrow, 22px bold ID, quiet 13px/11px caption rows. */
export function EmendaIdCard({
  eyebrow,
  id,
  ownerNote,
  verifiedLine,
  name,
  created,
}: EmendaIdCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[16px] border border-line bg-white p-4">
      <p className="text-[11px] leading-[18px] font-semibold text-ink-muted uppercase lg:text-[11.6px] lg:leading-[14px]">
        {eyebrow}
      </p>
      <p className="text-[22px] leading-[28px] font-bold text-ink lg:text-[23.1px]">
        {id}
      </p>
      {verifiedLine ? (
        <p className="text-[13px] leading-[15px] font-semibold text-brand lg:text-[12.6px]">
          {verifiedLine}
        </p>
      ) : null}
      {name ? (
        <p className="text-[13px] leading-[19px] font-semibold text-ink lg:text-[13.7px] lg:leading-[17px]">
          {name}
        </p>
      ) : null}
      {ownerNote ? (
        <p className="text-[11px] leading-[18px] text-ink-muted lg:text-[11.6px] lg:leading-[14px]">
          {ownerNote}
        </p>
      ) : null}
      {created ? (
        <p className="text-[11px] leading-[18px] text-ink-muted lg:text-[11.6px] lg:leading-[14px]">{created}</p>
      ) : null}
    </div>
  );
}
