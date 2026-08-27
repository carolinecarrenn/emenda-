import { useSearchParams } from "react-router-dom";

/**
 * Non-interactive Figma state variants (loading / offline / error / empty /
 * saving / …) are reachable via a `?state=` query param so every mock state
 * has a stable URL, e.g. /worker/career?state=offline.
 * Interactive states (filled forms, selections, flows) use real UI instead.
 */
export function useScreenState(): string | null {
  const [params] = useSearchParams();
  return params.get("state");
}
