/* WD-29 summary card: white rounded-16, label/value rows on a 37px pitch,
   11px privacy footnote. Values arrive pre-localized from the page. */
export function PreferencesSummaryCard({
  rows,
  privacy,
}: {
  rows: { label: string; value: string }[];
  privacy: string;
}) {
  return (
    <div className="min-h-[260px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[17px] pb-[19px]">
      <div className="space-y-[19px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex h-[18px] items-center justify-between gap-4"
          >
            <p className="text-[13px] text-[#65746d]">{row.label}</p>
            <p className="text-right text-[13px] text-[#17231f]">{row.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-[26px] text-[11px] leading-[16px] text-[#65746d]">
        {privacy}
      </p>
    </div>
  );
}
