import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EXPERIENCE_COPY } from "./experience.copy";
import { CareerSubHeader, EmptyStateCard } from "./careerUi";
import { ExperienceList } from "./sections/ExperienceList";
import {
  ExperienceForm,
  type ExperienceFormPhase,
} from "./sections/ExperienceForm";
import { VerifiedExperienceDetail } from "./sections/VerifiedExperienceDetail";

type View =
  | "list"
  | "empty"
  | "offline"
  | "add"
  | "edit"
  | "error"
  | "saving"
  | "save-failed"
  | "unsaved"
  | "delete-confirm"
  | "verified";

const VIEWS: View[] = [
  "list", "empty", "offline", "add", "edit", "error", "saving",
  "save-failed", "unsaved", "delete-confirm", "verified",
];

/** Experience — Figma WD-25 (A Empty · B Edit · C Validation Error · D Saving
 *  · E Save Failed · F Offline · G Unsaved Changes · H Delete Confirmation ·
 *  I Employer Verified · J Add) · mobile W-25. Non-interactive variants are
 *  reachable via ?state=<name>; interactive ones via the real UI. */
export function ExperiencePage() {
  const c = useSectionCopy(EXPERIENCE_COPY);
  const screenState = useScreenState();
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState<View>("list");

  const go = (v: View) => {
    setView(v);
    if (location.search) navigate(location.pathname, { replace: true });
  };

  const forced =
    screenState !== null && (VIEWS as string[]).includes(screenState)
      ? (screenState as View)
      : null;
  const active = forced ?? view;

  /* Form-hosted variants (WD-25B/C/D/E/G/H/J) */
  if (
    active === "add" ||
    active === "edit" ||
    active === "error" ||
    active === "saving" ||
    active === "save-failed" ||
    active === "unsaved" ||
    active === "delete-confirm" ||
    active === "offline"
  ) {
    const mode = active === "add" || active === "error" ? "add" : "edit";
    const initialPhase: ExperienceFormPhase =
      active === "add" || active === "edit" ? "editing" : active;

    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <ExperienceForm
          key={active}
          mode={mode}
          initialPhase={initialPhase}
          onExit={() => go("list")}
        />
      </div>
    );
  }

  /* WD-25I employer-verified detail */
  if (active === "verified") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <VerifiedExperienceDetail onExit={() => go("list")} />
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.title}
        subtitle={active === "empty" ? c.emptySubtitle : c.subtitle}
      />
      <div className="mt-[38px]">
        {active === "empty" ? (
          <EmptyStateCard
            title={c.emptyTitle}
            body={c.emptyBody}
            ctaLabel={c.addExperience}
            onCta={() => go("add")}
          />
        ) : (
          <ExperienceList
            onView={() => go("verified")}
            onEdit={() => go("edit")}
            onAdd={() => go("add")}
          />
        )}
      </div>
    </div>
  );
}
