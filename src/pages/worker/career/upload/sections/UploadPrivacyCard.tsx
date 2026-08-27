import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";

/** WD-22 grey-tinted "Private by default" info card. */
export function UploadPrivacyCard() {
  const c = useSectionCopy(CAREER_COPY);
  return (
    <div className="min-h-[88px] rounded-[16px] border border-line bg-[#f0f4f2] px-4 py-[14px]">
      <p className="text-[13px] font-semibold text-brand-deep">
        {c.upload.privacyTitle}
      </p>
      <p className="mt-[7px] text-[11px] text-ink-muted">
        {c.upload.privacyBody}
      </p>
    </div>
  );
}
