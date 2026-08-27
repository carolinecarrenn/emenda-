import { useState, type ReactNode } from "react";
import { AdminMobileNav } from "./AdminMobileNav";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopBar } from "./AdminTopBar";

/* AD-01 frame shell (1182:5692): 232px white sidebar + #f7faf8 main column
   whose content area is 32px padded (22px top / 24px bottom) around a
   1144px content column.

   Governance (Figma AD-SCOPE board): Company Admin is not Super Admin — this
   chrome deliberately exposes no tenant switcher, billing or platform
   configuration entry point. */
export function AdminShell({ children }: { children: ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f7faf8]">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopBar onOpenNav={() => setNavOpen(true)} />
        <main className="flex-1 px-4 pt-4 pb-8 lg:px-[32px] lg:pt-[22px] lg:pb-[24px]">
          {children}
        </main>
      </div>
      <AdminMobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}
