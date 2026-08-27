import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";

/**
 * The AD-03 lettered companions are states of one screen, so each is reachable
 * through the app's `?state=` convention (src/hooks/useScreenState.ts):
 *
 *   ?state=assign-manager       AD-03B "Assign manager" (1226:61)
 *   ?state=reassign-employees   AD-03B "Reassign employees" (1226:80)
 *   ?state=lifecycle            AD-03C "Team & manager lifecycle" (1226:2680)
 *   ?state=create-team          AD-03D "Create team" (1239:278)
 *   ?state=change-manager       AD-03D "Assign / change manager" (1239:303)
 *   ?state=archive-team         AD-03D "Archive team" (1239:328)
 *
 * They are also real interactive states: the AD-03 buttons and rows that the
 * frames draw as their entry points push the same query param, so a click and
 * a pasted URL land on exactly the same screen.
 */
export const TEAMS_STATES = [
  "assign-manager",
  "reassign-employees",
  "lifecycle",
  "create-team",
  "change-manager",
  "archive-team",
] as const;

export type TeamsState = (typeof TEAMS_STATES)[number];

function isTeamsState(value: string | null): value is TeamsState {
  return (
    value !== null && (TEAMS_STATES as readonly string[]).includes(value)
  );
}

export interface TeamsStateControls {
  /** The active AD-03 state, or null for the base coverage screen. */
  state: TeamsState | null;
  open: (next: TeamsState) => void;
  close: () => void;
}

export function useTeamsState(): TeamsStateControls {
  const raw = useScreenState();
  const [, setSearchParams] = useSearchParams();

  const open = useCallback(
    (next: TeamsState) => setSearchParams({ state: next }),
    [setSearchParams],
  );
  const close = useCallback(() => setSearchParams({}), [setSearchParams]);

  return { state: isTeamsState(raw) ? raw : null, open, close };
}
