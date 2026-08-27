import { useHomeView } from "./useHomeView";
import { GreetingHeader } from "./sections/GreetingHeader";
import { EmendaIdCard } from "./sections/EmendaIdCard";
import { NextActionPanel } from "./sections/NextActionPanel";
import { ThirdStatusCard } from "./sections/ThirdStatusCard";
import { ExploreGrid } from "./sections/ExploreGrid";
import { EmendaCoinCard } from "./sections/EmendaCoinCard";
import { RecentUpdates } from "./sections/RecentUpdates";
import { OfflineBanner } from "./sections/OfflineBanner";
import { HomeSkeleton } from "./sections/HomeSkeleton";

/** Worker Home — Headless Home state machine (Figma WD-18 base + A..L,
 *  section 712:5; mobile W-18, 529:3). Desktop: 620px main column + 460px
 *  Explore/updates rail; mobile stacks single-column with the hub bottom nav.
 *  Default render (no ?state=) = WD-18J Employer Connected (node 946:815);
 *  the other twelve lifecycle variants carry a ?state= URL. Layout is frozen
 *  across all states — only subtitle, ID status line, mint panel, third card,
 *  fifth Explore tile, and the Recent updates feed swap.
 *
 *  Every control on the screen is live: the mint panel CTA opens the action it
 *  names (identity setup, employer review/connect, document review, Career),
 *  "View ID" opens the matching W-17 badge variant, the Explore tiles route
 *  into their sections, and the offline banner's "Try again" reloads Home
 *  online. The lifecycle transitions that land the user *on* a state are owned
 *  by the sections that cause them (W-16 → identity-pending, employer connect
 *  → connected, and so on). */
export function WorkerHomePage() {
  const view = useHomeView();

  if (view.kind === "loading") {
    return <HomeSkeleton greeting={view.greeting} subtitle={view.subtitle} />;
  }

  return (
    <div className="lg:pt-2">
      <GreetingHeader title={view.greeting} subtitle={view.subtitle} />
      <div className="mt-2 flex flex-col gap-2 lg:mt-[43px] lg:flex-row lg:gap-8">
        <div className="flex w-full max-w-[620px] flex-col gap-2 lg:gap-5">
          {view.offlineBanner && (
            <OfflineBanner
              title={view.offlineBanner.title}
              body={view.offlineBanner.body}
              retry={view.offlineBanner.retry}
              retryTo="/worker"
            />
          )}
          <EmendaIdCard
            status={view.idStatus}
            tone={view.idStatusTone}
            to={view.idLink}
          />
          {view.panel && <NextActionPanel panel={view.panel} />}
          <ThirdStatusCard card={view.thirdCard} />
        </div>
        <div className="flex w-full max-w-[460px] flex-col gap-2 lg:gap-[50px]">
          <ExploreGrid fifthTile={view.exploreTile} />
          {/* W-18 carries the Emenda Coin card (base/F/J/K/L) and the Recent
              updates feed (A–E, G–J) on mobile; the desktop rail (WD-18) mocks
              only the feed. Both surfaces render on both viewports so neither
              viewport loses a capability, and the skeleton stays frozen
              across all thirteen states. */}
          <EmendaCoinCard />
          <RecentUpdates updates={view.updates} />
        </div>
      </div>
    </div>
  );
}
