import type { ReactNode } from "react";

/** Centre-aligned cards used by the empty, permission, preview and upload
 *  screens (Figma "Empty state" 1024:371 / 1025:806, "Permission card"
 *  1025:1939, "Preview canvas" 1025:1514, "Upload progress" 1025:250 and
 *  "Verified reference" 1025:2058). Every one of them is a single 520px grid
 *  cell on the desktop frames. */

export function CenteredCard({
  icon,
  title,
  body,
  className = "",
}: {
  icon?: ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border border-[#d7e2dc] bg-white px-[20px] py-[24px] text-center ${className}`}
    >
      {icon && (
        <span className="mx-auto flex size-[42px] items-center justify-center rounded-[12px] border border-[#c7d8d0] bg-white">
          {icon}
        </span>
      )}
      <p
        className={`text-[14px] font-semibold text-[#17231f] ${icon ? "mt-[12px]" : ""}`}
      >
        {title}
      </p>
      <p className="mx-auto mt-[8px] max-w-[460px] text-[11px] leading-[1.6] text-[#65746d]">
        {body}
      </p>
    </div>
  );
}

/** W-39M / WD-39M 1025:1514 — 520x420 #f2f5f3 panel whose file name, meta and
 *  placeholder note sit centred just below the middle. */
export function PreviewCanvas({
  fileName,
  fileMeta,
  note,
}: {
  fileName: string;
  fileMeta: string;
  note: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[16px] border border-[#d7e2dc] bg-[#f2f5f3] px-[30px] py-[40px] min-h-[420px] text-center">
      <p className="text-[14px] font-semibold text-[#17231f]">{fileName}</p>
      <p className="mt-[8px] text-[11px] text-[#65746d]">{fileMeta}</p>
      <p className="mt-[36px] max-w-[440px] text-[11px] leading-[1.6] text-[#65746d]">
        {note}
      </p>
    </div>
  );
}

/** W-39C / WD-39C 1025:250 — white 520x172 card with an 8px #e2eae6 track and
 *  a #0c5941 fill, shown while a replacement file uploads. */
export function UploadProgressCard({
  title,
  fileName,
  helper,
  percent,
}: {
  title: string;
  fileName: string;
  helper: string;
  percent: number;
}) {
  return (
    <div className="rounded-[16px] border border-[#d7e2dc] bg-white px-[17px] py-[23px] lg:min-h-[172px]">
      <p className="text-[14px] font-semibold text-[#17231f]">{title}</p>
      <p className="mt-[12px] text-[11px] text-[#65746d]">{fileName}</p>
      <div className="mt-[18px] h-[8px] w-full overflow-hidden rounded-full bg-[#e2eae6]">
        <div
          className="h-[8px] rounded-full bg-[#0c5941]"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-[16px] text-[10px] leading-[1.6] text-[#65746d]">
        {helper}
      </p>
    </div>
  );
}

/** W-39H/T/U/V — mint 14px-radius summary of the verified record being
 *  reported on (Figma 1025:2058). */
export function VerifiedReferenceCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[14px] border border-[#c7ded3] bg-[#eef5f1] px-[15px] py-[13px] lg:min-h-[94px]">
      <p className="text-[13px] font-semibold text-[#17231f]">{title}</p>
      <p className="mt-[6px] text-[11px] leading-[1.6] text-[#65746d]">{body}</p>
    </div>
  );
}
