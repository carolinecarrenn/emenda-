import { Outlet } from "react-router-dom";
import { ManagerSidebar } from "./ManagerSidebar";
import { ManagerTopBar } from "./ManagerTopBar";
import { ManagerBottomNav } from "./ManagerBottomNav";

/* Manager mobile chrome (EM-xx mocks): unlike the worker app, every in-app
   manager screen keeps the 5-tab bottom navigation with its owning tab
   active — including detail screens (EM-05, EM-07, EM-11A, EM-R2-xx) and
   everything reached from More. Only the full-screen resilience/permission
   interstitials (EM-STATE-01/02/03) and the pre-auth and facility-selection
   flows drop it, and those are standalone routes outside this shell. */
export function ManagerShell() {
  return (
    <div className="flex min-h-screen bg-canvas">
      <ManagerSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <ManagerTopBar />
        <main className="flex-1 px-5 pt-3 pb-24 lg:px-8 lg:pt-0 lg:pb-12">
          <Outlet />
        </main>
      </div>
      <ManagerBottomNav />
    </div>
  );
}
