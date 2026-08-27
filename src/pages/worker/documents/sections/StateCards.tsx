import { BadgeCheck } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";

/** Reusable state surfaces for section 07: amber warning banners (W-37E,
 *  W-39A read-only note), the flat full-width offline banner (W-37C, W-39G,
 *  W-39P, W-39V), the rose error card (W-37D, W-39D, W-39O, W-39U, W-40F),
 *  the centred empty/permission card (W-37B 1024:371, W-40A 1025:806,
 *  W-39R 1025:1939), the standalone action pill and the mint success
 *  confirmation (W-38P 1024:2140, W-39I, W-39W, W-39X, W-40K). */

/** Historic alias — `ErrorBanner` is the Figma layer name. */
export { ErrorBanner as ErrorCard };

export function AmberBanner({
  title,
  body,
  /** Extra layout classes for grid placement / fixed mock heights. */
  className = "",
}: {
  title?: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[14px] border border-[#e7c98d] bg-[#fff8e6] px-[13px] py-[11px] text-[#8a5a12] ${className}`}
    >
      {title && <p className="text-[11px] font-semibold">{title}</p>}
      <p className={`text-[11px] leading-[1.6] ${title ? "mt-[6px]" : ""}`}>
        {body}
      </p>
    </div>
  );
}

/** Figma "Offline banner" (1025:550 / 1025:1784 / 1025:2203): borderless
 *  #fff8e6 block, 12px radius, 72px tall on desktop, one 11px #8a5a12 line. */
export function OfflineBanner({
  body,
  withRetry,
  className = "",
}: {
  body: string;
  withRetry?: boolean;
  className?: string;
}) {
  const common = useCommonCopy();
  return (
    <div
      className={`rounded-[12px] bg-[#fff8e6] px-[13px] py-[11px] lg:min-h-[72px] ${className}`}
    >
      <p className="text-[11px] leading-[1.6] text-[#8a5a12]">{body}</p>
      {withRetry && (
        <button
          type="button"
          className="mt-[8px] text-[11px] font-semibold text-[#8a5a12] underline underline-offset-2"
        >
          {common.action.retry}
        </button>
      )}
    </div>
  );
}

/** Figma "Load error" / "Error banner" / "Save error" / "Rejected file":
 *  borderless #fff1ef block with #a5382b copy. `title` renders the 13px
 *  semibold headline; `meta` the 10px grey trailing line (W-39S). */
export function ErrorBanner({
  title,
  body,
  meta,
  className = "",
}: {
  title?: string;
  body: string;
  meta?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[14px] bg-[#fff1ef] px-[15px] py-[13px] ${className}`}
    >
      {title && (
        <p className="text-[13px] font-semibold text-[#a5382b]">{title}</p>
      )}
      <p
        className={`text-[11px] leading-[1.6] text-[#a5382b] ${title ? "mt-[10px]" : ""}`}
      >
        {body}
      </p>
      {meta && <p className="mt-[12px] text-[10px] text-[#65746d]">{meta}</p>}
    </div>
  );
}

export function NoticeCard({
  title,
  body,
  withRetry,
}: {
  title: string;
  body: string;
  withRetry?: boolean;
}) {
  const common = useCommonCopy();
  return (
    <div className="rounded-[14px] border border-[#d7e2dc] bg-white px-[15px] py-[13px]">
      <p className="text-[13px] font-semibold text-[#17231f]">{title}</p>
      <p className="mt-[6px] text-[11px] text-[#65746d]">{body}</p>
      {withRetry && (
        <button
          type="button"
          className="mt-[12px] flex h-[36px] items-center justify-center rounded-full border border-[#d7e2dc] bg-white px-[22px] text-[12px] font-semibold text-brand hover:border-brand"
        >
          {common.action.retry}
        </button>
      )}
    </div>
  );
}

/** Figma "Success confirmation" (1024:2140, 1025:680, 1025:2632, 1025:2693):
 *  mint 16px-radius panel, 138px tall on desktop, with a 40px white icon tile
 *  at 11/15 and the headline/body offset to 59px. */
export function SuccessPanel({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-[8px] rounded-[16px] border border-[#c7ded3] bg-[#eef5f1] px-[11px] py-[15px] lg:min-h-[138px]">
      <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[12px] border border-[#c7d8d0] bg-white">
        <BadgeCheck size={22} strokeWidth={1.5} className="text-brand-deep" />
      </span>
      <span className="min-w-0 pt-[4px]">
        <span className="block text-[14px] font-semibold text-[#17231f]">
          {title}
        </span>
        <span className="mt-[8px] block text-[11px] leading-[1.6] text-[#65746d]">
          {body}
        </span>
      </span>
    </div>
  );
}

/** Rose banner that carries its own inline Retry affordance (W-38H save
 *  failed, W-39D replace failed). */
export function ErrorRetryBanner({
  title,
  body,
  onRetry,
  className = "",
}: {
  title?: string;
  body: string;
  onRetry?: () => void;
  className?: string;
}) {
  const common = useCommonCopy();
  return (
    <div
      className={`rounded-[14px] bg-[#fff1ef] px-[15px] py-[13px] lg:min-h-[72px] ${className}`}
    >
      {title && (
        <p className="text-[13px] font-semibold text-[#a5382b]">{title}</p>
      )}
      <p
        className={`text-[11px] leading-[1.6] text-[#a5382b] ${title ? "mt-[10px]" : ""}`}
      >
        {body}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-[8px] text-[11px] font-semibold text-[#a5382b] underline underline-offset-2"
        >
          {common.action.retry}
        </button>
      )}
    </div>
  );
}
