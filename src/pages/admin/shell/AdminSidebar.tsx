import { AdminNavPanel } from "./AdminNavPanel";

/* AD-01 "Desktop · Company Admin Sidebar" (1182:5693): fixed 232px white
   column with a 1px #d6e3de right border, full viewport height. Desktop only —
   below lg the mock has no drawn variant, so the sidebar collapses into the
   derived drawer in AdminMobileNav. */
export function AdminSidebar() {
  return (
    <aside className="hidden w-[232px] shrink-0 border-r border-[#d6e3de] bg-white lg:block">
      <div className="sticky top-0 flex h-screen flex-col">
        <AdminNavPanel />
      </div>
    </aside>
  );
}
