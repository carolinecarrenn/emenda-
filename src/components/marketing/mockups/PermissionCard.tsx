import { MapPin } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";

/**
 * The permission prompt, shown as it actually appears: what is being asked
 * for, what it will be used for, and a decline that sits level with the accept
 * rather than being hidden.
 */
export function PermissionCard() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="w-full max-w-[360px] rounded-[22px] border border-lp-line bg-white p-5 shadow-lp-lg">
      <span className="flex size-11 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
        <MapPin size={20} strokeWidth={1.85} aria-hidden="true" />
      </span>
      <p className="mt-4 text-[16px] font-semibold text-lp-ink">
        {m.permission.title}
      </p>
      <p className="mt-2 text-[13px] leading-[1.6] text-lp-muted">
        {m.permission.body}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <span className="flex h-10 items-center justify-center rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-muted">
          {m.permission.deny}
        </span>
        <span className="flex h-10 items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white">
          {m.permission.allow}
        </span>
      </div>
    </div>
  );
}
