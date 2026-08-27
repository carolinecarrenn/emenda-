/* WD-29B / WD-31B compact save-error card: #fff1ef fill, #f3c8c2 border,
   11px semibold #b3261e title, 10px #b05b54 body. */
export function SaveErrorCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="h-[54px] rounded-[12px] border border-[#f3c8c2] bg-[#fff1ef] px-[20px] py-[9px]">
      <p className="text-[11px] leading-[16px] font-semibold text-[#b3261e]">
        {title}
      </p>
      <p className="mt-[3px] text-[10px] leading-[15px] text-[#b05b54]">
        {body}
      </p>
    </div>
  );
}
