import { BadgeCheck, FileText } from "lucide-react";

/** WD-39 detail primitives: mint file-preview card with a white icon tile,
 *  and bordered label/value rows (10px uppercase label · 11px value).
 *  Rows keep their own 72px height in the two-column grid (Figma 1025:96 et
 *  al.) instead of stretching to the taller file card beside them. */

export function FilePreviewCard({
  kind,
  title,
  meta,
  onClick,
}: {
  kind: "document" | "verified";
  title: string;
  meta: string;
  onClick?: () => void;
}) {
  const Icon = kind === "verified" ? BadgeCheck : FileText;
  const content = (
    <>
      <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[#c7d8d0] bg-white">
        <Icon size={22} strokeWidth={1.5} className="text-brand" />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-[#17231f]">
          {title}
        </span>
        <span className="mt-[8px] block text-[11px] text-[#65746d]">{meta}</span>
      </span>
    </>
  );
  const baseClass = `flex w-full items-start gap-[12px] rounded-[14px] border border-[#c7ded3] bg-[#eef5f1] px-[17px] py-[19px] text-left ${
    kind === "verified" ? "min-h-[96px]" : "min-h-[96px] lg:min-h-[110px]"
  }`;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClass}>
        {content}
      </button>
    );
  }
  return <div className={baseClass}>{content}</div>;
}

export function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-[58px] gap-[6px] lg:min-h-[72px] rounded-[12px] border border-[#d7e2dc] bg-white px-[14px] py-[10px] lg:self-start">
      <p className="w-[130px] shrink-0 text-[10px] font-semibold tracking-[0.04em] text-[#65746d]">
        {label}
      </p>
      <p className="min-w-0 text-[11px] leading-[1.6] text-[#17231f]">{value}</p>
    </div>
  );
}
