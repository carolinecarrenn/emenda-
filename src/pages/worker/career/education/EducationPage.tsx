import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EDUCATION_COPY } from "./education.copy";
import {
  CareerSubHeader,
  EmptyStateCard,
} from "../experience/careerUi";
import { EducationList } from "./sections/EducationList";
import {
  EducationForm,
  type EducationFormPhase,
} from "./sections/EducationForm";

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
  | "delete-confirm";

const VIEWS: View[] = [
  "list", "empty", "offline", "add", "edit", "error", "saving",
  "save-failed", "unsaved", "delete-confirm",
];

/** Education — Figma WD-26 (A Empty · B Edit · C Validation Error · D Saving
 *  · E Save Failed · F Offline · G Unsaved Changes · H Delete Confirmation ·
 *  I Add) · mobile W-26. Mirrors the WD-25 Experience pattern exactly. */
export function EducationPage() {
  const c = useSectionCopy(EDUCATION_COPY);
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
    const initialPhase: EducationFormPhase =
      active === "add" || active === "edit" ? "editing" : active;
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <EducationForm
          key={active}
          mode={mode}
          initialPhase={initialPhase}
          onExit={() => go("list")}
        />
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
            ctaLabel={c.addEducation}
            onCta={() => go("add")}
          />
        ) : (
          <EducationList onEdit={() => go("edit")} onAdd={() => go("add")} />
        )}
      </div>
    </div>
  );
}
