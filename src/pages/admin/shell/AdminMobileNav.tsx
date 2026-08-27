import { X } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import { AdminNavPanel } from "./AdminNavPanel";

/* Derived mobile treatment for the AD-01 sidebar (1182:5693). Figma draws
   Company Admin at 1440x900 only; below lg the 232px column slides in as a
   left drawer over a scrim, carrying the identical brand block, primary nav
   and pinned utility rows. Interactive state, so it uses real React state
   (owned by AdminShell) rather than ?state=. */
export function AdminMobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const c = useSectionCopy(ADMIN_COPY);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label={c.shell.closeNavigation}
        onClick={onClose}
        className="absolute inset-0 bg-[#0f1f1a]/40"
      />
      <div className="absolute inset-y-0 left-0 flex w-[232px] flex-col border-r border-[#d6e3de] bg-white">
        <button
          type="button"
          aria-label={c.shell.closeNavigation}
          onClick={onClose}
          className="absolute top-[18px] right-[12px] flex size-[30px] items-center justify-center rounded-[9px] border border-[#d6e3de] bg-white"
        >
          <X className="size-[16px] text-[#65746d]" aria-hidden="true" />
        </button>
        <AdminNavPanel onNavigate={onClose} />
      </div>
    </div>
  );
}
