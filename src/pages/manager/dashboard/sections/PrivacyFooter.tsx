import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03 privacy strip: #e3f0e8, radius 10, 12px semibold #083d2d. */
export function PrivacyFooter() {
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div className="rounded-[10px] bg-brand-soft px-6 py-[19px] lg:py-[20px]">
      <p className="text-[12px] font-semibold text-brand-deep">
        {c.dashboard.privacyStrip}
      </p>
    </div>
  );
}
