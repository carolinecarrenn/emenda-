import { useCommonCopy } from "@/i18n/common";

/** The mobile retry banners of section 07 (Figma 758:221 offline, 758:924
 *  save error, 759:1046 / 803:522 detail twins): a 58px pill with an 11px
 *  line on the left and a white 70x44 Retry button pinned right — 10px
 *  radius, #d7e2dc hairline, 12px semibold green label. Amber #fff8e6 with
 *  #8a5a12 copy when the cause is the connection, rose #fff1ef with #a5382b
 *  copy when a write failed. */

function RetryBanner({
  body,
  tone,
  onRetry,
  className,
}: {
  body: string;
  tone: "amber" | "rose";
  onRetry?: () => void;
  className: string;
}) {
  const common = useCommonCopy();
  const toneClass =
    tone === "rose"
      ? "bg-[#fff1ef] text-[#a5382b]"
      : "bg-[#fff8e6] text-[#8a5a12]";
  return (
    <div
      className={`flex min-h-[58px] items-center gap-[12px] rounded-[12px] px-[13px] py-[7px] ${toneClass} ${className}`}
    >
      <p className="min-w-0 flex-1 text-[11px] leading-[1.6]">{body}</p>
      <button
        type="button"
        onClick={onRetry}
        className="h-[44px] w-[70px] shrink-0 rounded-[10px] border border-[#d7e2dc] bg-white text-[12px] font-semibold text-brand hover:border-brand"
      >
        {common.action.retry}
      </button>
    </div>
  );
}

export function OfflineRetryBanner({
  body,
  onRetry,
  className = "",
}: {
  body: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <RetryBanner body={body} tone="amber" onRetry={onRetry} className={className} />
  );
}

export function SaveErrorBanner({
  body,
  onRetry,
  className = "",
}: {
  body: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <RetryBanner body={body} tone="rose" onRetry={onRetry} className={className} />
  );
}
