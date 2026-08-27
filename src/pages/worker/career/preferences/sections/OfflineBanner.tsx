import { useCommonCopy } from "@/i18n/common";

/* WD-29C / WD-31G offline banner: neutral tinted strip with title, body and
   a right-aligned Retry pill (metadata: 520x56-70, retry ~125x36). */
export function OfflineBanner({
  title,
  body,
  onRetry,
}: {
  title: string;
  body: string;
  onRetry?: () => void;
}) {
  const common = useCommonCopy();

  return (
    <div className="flex min-h-[56px] items-center justify-between gap-3 rounded-[12px] border border-[#d5e0da] bg-[#eef3ef] px-[20px] py-[8px]">
      <div>
        <p className="text-[12px] font-semibold text-[#17231f]">{title}</p>
        <p className="mt-[2px] text-[11px] text-[#65746d]">{body}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="flex h-[36px] w-[125px] shrink-0 items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
      >
        {common.action.retry}
      </button>
    </div>
  );
}
