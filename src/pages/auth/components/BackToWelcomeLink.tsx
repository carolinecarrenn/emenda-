import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { AUTH_COPY } from "../auth.copy";
import { AuthTextLink } from "./AuthButtons";

/** Return leg from W-04 Login (421:29) and W-05 Register (421:51) back up to
 *  W-03 Welcome (421:11).
 *
 *  The canonical mobile funnel is drawn as a strictly forward graph —
 *  W-01 → W-02 → W-03 → W-04 | W-05 — and neither login nor register frame
 *  contains a back control, so a worker who takes the wrong branch at the
 *  W-03 fork has no drawn way back to the other one. This is that leg. It is
 *  kept as the quietest control on the screen (muted, last in the rail) so
 *  W-04's "Log in" / "Forgot PIN?" and W-05's "Continue to verification" /
 *  "Already have an account? Log in" hierarchy is untouched, and it reuses
 *  W-10's own verbatim label rather than inventing copy. */
export function BackToWelcomeLink({ centered = true }: { centered?: boolean }) {
  const navigate = useNavigate();
  const c = useSectionCopy(AUTH_COPY).sessionExpired;

  return (
    <AuthTextLink
      centered={centered}
      onClick={() => navigate("/auth/welcome")}
      className="font-medium text-[#7c918b]"
    >
      {c.backToWelcome}
    </AuthTextLink>
  );
}
