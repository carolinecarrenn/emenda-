import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { AccessHeader } from "./sections/AccessHeader";
import { RoutingIdentityColumn } from "./sections/RoutingIdentityColumn";
import { RoutingRouteCard } from "./sections/RoutingRouteCard";
import { isAccountRoute, ROUTING_ACCOUNTS } from "./accessMock";

/** Post-auth routing interstitial (Figma LP-06 node 1053:981, LP-07 node
 *  1053:1012, LP-08 node 1107:50) — one 1440x900 template, three account
 *  situations selected with `?account=headless` (default) | `work` |
 *  `employee` (`?state=` is accepted as an alias). Identity column left
 *  (x=64, 520px), route card right (x=700, y=180, 610px). The screen never
 *  auto-redirects: the person picks the destination. */
export function PostAuthRoutingPage() {
  const [params] = useSearchParams();
  const state = useScreenState();
  const requested = params.get("account") ?? state;
  const account = ROUTING_ACCOUNTS[isAccountRoute(requested) ? requested : "headless"];

  return (
    <div className="min-h-screen bg-[#f7f9f7]">
      <AccessHeader variant="routing" />
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-16 lg:flex lg:items-start lg:gap-[116px] lg:px-[64px] lg:pt-[59px] lg:pb-[120px]">
        <RoutingIdentityColumn account={account} />
        <div className="mt-10 lg:mt-[20px]">
          <RoutingRouteCard account={account} />
        </div>
      </div>
    </div>
  );
}
