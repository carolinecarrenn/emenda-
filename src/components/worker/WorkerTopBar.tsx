import { NavLink, Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { WORKER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";

/* Figma WD-54I header zone: canvas background, hairline divider at the
   bottom (from the sidebar edge), bell + avatar floating top-right.
   Mobile keeps the wordmark on the left (worker mobile hub chrome).
   The bell opens Notifications and the avatar opens Profile — in the mocks
   these are the app chrome's only entry points to those two screens. */
export function WorkerTopBar() {
  const c = useCommonCopy();

  return (
    <header className="relative flex h-[80px] shrink-0 items-center justify-between px-5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-lp-line lg:px-12">
      <NavLink
        to="/"
        className="text-[18px] font-bold text-lp-green lg:invisible"
      >
        EMENDA
      </NavLink>
      <div className="flex items-center gap-4">
        <Link
          to="/worker/notifications"
          aria-label={c.nav.notifications}
          className="flex size-10 items-center justify-center rounded-full border border-lp-line bg-white text-lp-muted hover:text-lp-green"
        >
          <Bell size={18} strokeWidth={1.5} />
        </Link>
        <Link
          to="/worker/profile"
          aria-label={c.nav.profile}
          className="flex size-10 items-center justify-center rounded-full border border-lp-line bg-lp-mint text-[13px] font-semibold text-lp-green hover:border-brand"
        >
          {WORKER.name.charAt(0)}
        </Link>
      </div>
    </header>
  );
}
