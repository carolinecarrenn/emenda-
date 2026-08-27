/* WD-30B/D/E "Creating state" card: 520x178 tinted #f3f7f5 card with title,
   body,
   a determinate progress track (hidden for failed/offline) and a status
   button (disabled sage while creating; actionable otherwise). */
export function CreatingCard({
  title,
  body,
  buttonLabel,
  showProgress,
  onAction,
  offline = false,
}: {
  title: string;
  body: string;
  buttonLabel: string;
  /** WD-30B shows a ~66% progress fill; 30D/30E hide the track. */
  showProgress: boolean;
  /** Absent → disabled sage "Creating…" pill (WD-30B). */
  onAction?: () => void;
  /** WD-30E offline: 177px tinted card with the action pinned to its foot. */
  offline?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-[16px] border border-[#d5e0da] px-[16px] lg:px-[23px] lg:pt-[24px] lg:pb-[16px] ${
        offline
          ? "bg-[#f3f7f5] pt-[26px] pb-[4px] lg:h-[177px]"
          : "min-h-[178px] bg-[#f3f7f5] pt-[24px] pb-[16px] lg:min-h-[178px]"
      }`}
    >
      <p className="text-[15px] leading-[22px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p
        className={`text-[13px] text-[#65746d] lg:mt-[12px] lg:leading-[20px] ${
          offline ? "mt-[14px] leading-[21px]" : "mt-[12px] leading-[20px]"
        }`}
      >
        {body}
      </p>
      {showProgress && (
        <div className="mt-[20px] h-[8px] w-full overflow-hidden rounded-full bg-[#e3efe8]">
          <div className="h-full w-[66%] rounded-full bg-[#0c664b]" />
        </div>
      )}
      {onAction ? (
        <button
          type="button"
          onClick={onAction}
          className={`flex h-[32px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-[#0b5842] ${
            offline ? "mt-[38px] lg:mt-auto" : "mt-auto"
          }`}
        >
          {buttonLabel}
        </button>
      ) : (
        <div className="mt-[12px] flex h-[32px] w-full cursor-default items-center justify-center rounded-[12px] bg-[#9dbbad] text-[12px] font-semibold text-white">
          {buttonLabel}
        </div>
      )}
    </div>
  );
}
