/* EM-R2-01 (1107:167) / EM-R2-02 (1107:208) footer scope line:
   9px regular #667a73, flush with the content column. */
export function RecordsFooterNote({ text }: { text: string }) {
  return (
    <p className="text-[9px] text-[#667a73] lg:text-[11px]">{text}</p>
  );
}
