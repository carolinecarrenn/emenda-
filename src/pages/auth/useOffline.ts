import { useEffect, useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";

/** True when a funnel screen must wear its Offline dress — W-04D (422:83),
 *  W-05D (422:180), W-06G (452:2), W-08D (451:66), W-09E (452:29) and the
 *  W-11B logout hand-off (452:51).
 *
 *  The mocks draw that dress on almost every auth screen but never draw the
 *  control that causes it: losing the connection is an environment event, not
 *  a button. `?state=offline` stays the stable review URL for those frames,
 *  and this hook adds the honest trigger next to it — the browser's own
 *  connection state. Dropping the network puts the whole funnel into its
 *  offline dress and restoring it takes the funnel back out, with no invented
 *  "go offline" chrome anywhere in the mock. */
export function useOffline(): boolean {
  const state = useScreenState();
  const [disconnected, setDisconnected] = useState(
    () => typeof navigator !== "undefined" && navigator.onLine === false,
  );

  useEffect(() => {
    const drop = () => setDisconnected(true);
    const restore = () => setDisconnected(false);
    window.addEventListener("offline", drop);
    window.addEventListener("online", restore);
    return () => {
      window.removeEventListener("offline", drop);
      window.removeEventListener("online", restore);
    };
  }, []);

  return state === "offline" || disconnected;
}

/** Carries the offline dress across a click so the W-04D → W-08D → W-06G →
 *  W-09E (and W-05D → W-06G) chain is walked through the UI instead of by
 *  editing the URL. Every offline screen's "Try again" navigates to the bare
 *  path, which is what clears it again. */
export function withOffline(path: string, offline: boolean): string {
  if (!offline) return path;
  return `${path}${path.includes("?") ? "&" : "?"}state=offline`;
}
