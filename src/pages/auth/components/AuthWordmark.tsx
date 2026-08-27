import { Link } from "react-router-dom";

/** The EMENDA wordmark that heads every pre-auth screen (W-xx x=20 y=40 ·
 *  WD-xx x=96 y=72).
 *
 *  It also carries the funnel's only upward navigation. The mocks draw a
 *  strictly forward graph — W-01 Splash → W-02 Language → W-03 Welcome →
 *  W-04/W-05 — and give no screen a way back up to the fork, so the wordmark
 *  doubles as the funnel "home" control and returns to W-01. Same element,
 *  same position, same type on both viewports; only the affordance is new. */
export function AuthWordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/auth" aria-label="EMENDA" className={className}>
      EMENDA
    </Link>
  );
}
