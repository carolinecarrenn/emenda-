import { Outlet, useLocation } from "react-router-dom";
import { WorkerSidebar } from "./WorkerSidebar";
import { WorkerTopBar } from "./WorkerTopBar";
import { WorkerBottomNav } from "./WorkerBottomNav";

/* Mobile chrome rule, per the W-xx mocks — it is per SECTION, not per depth:
   - Tab-chrome areas keep the wordmark/bell header and the 5-tab bottom nav
     on their hub screen: Home (W-18), Reports (W-54), Chat (W-57),
     Assistant (W-59), Profile (W-19), Notifications (W-53), Career (W-21)
     and Japan preparation (W-32).
   - Their deeper screens drop that chrome for a back link.
   - Documents (W-37..40), Knowledge (W-41..46), Help (W-47..48), Employer
     connection (W-49..52), Coin (W-60) and Logs (W-61) have NO bottom
     navigation on any screen — every screen there is a sub-page reached
     from Home/Profile. */
const TAB_HUBS = new Set([
  "/worker",
  "/worker/reports",
  "/worker/chat",
  "/worker/assistant",
  "/worker/profile",
  "/worker/notifications",
  "/worker/career",
  "/worker/japan",
]);

function hasTabChrome(pathname: string): boolean {
  return TAB_HUBS.has(pathname.replace(/\/$/, ""));
}

export function WorkerShell() {
  const { pathname } = useLocation();
  const tabChrome = hasTabChrome(pathname);

  return (
    <div className="flex min-h-screen bg-lp-bg">
      <WorkerSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className={tabChrome ? "" : "hidden lg:block"}>
          <WorkerTopBar />
        </div>
        {/* Figma puts desktop content at x=280 — 48px in from the 232px
            sidebar — and the first element 20px (sub-pages) to 36px (hubs)
            below the 80px header divider. */}
        <main
          className={`flex-1 px-5 pt-6 lg:px-12 lg:pt-5 lg:pb-12 ${tabChrome ? "pb-24" : "pb-10"}`}
        >
          <Outlet />
        </main>
      </div>
      {tabChrome && <WorkerBottomNav />}
    </div>
  );
}
