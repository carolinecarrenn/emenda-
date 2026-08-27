import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../career.copy";
import { ImportBaseView } from "./sections/ImportBaseView";
import { ImportSavingView } from "./sections/ImportSavingView";
import { ImportFailedView } from "./sections/ImportFailedView";
import { ReviewExperienceView } from "./sections/ReviewExperienceView";
import { ReviewEducationView } from "./sections/ReviewEducationView";
import { ReviewSkillsView } from "./sections/ReviewSkillsView";
import { ReviewQualificationsView } from "./sections/ReviewQualificationsView";

/** Review CV Import (Figma WD-23, node 994:797 · mobile W-23, 547:287).
 *  Consent-first post-parse review. "Import reviewed data" runs the real
 *  W-23 → W-23A (saving) → hub transition; the per-category drill-downs and
 *  the failure variant keep their URLs: ?state=saving (23A) · save-failed
 *  (23B) · experience (23C, edit = 23F) · education (23D, edit = 23G) ·
 *  skills (23E, sheets = 23H/23I) · qualifications (23J). */
export function ReviewImportPage() {
  const c = useSectionCopy(CAREER_COPY);
  const state = useScreenState();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const runImport = () => {
    if (saving) return;
    setSaving(true);
    timerRef.current = window.setTimeout(
      () => navigate("/worker/career"),
      1300,
    );
  };

  const categoryView =
    state === "experience" ? (
      <ReviewExperienceView />
    ) : state === "education" ? (
      <ReviewEducationView />
    ) : state === "skills" ? (
      <ReviewSkillsView />
    ) : state === "qualifications" ? (
      <ReviewQualificationsView />
    ) : null;

  return (
    <div
      className={`max-w-[1080px] pt-2 ${categoryView ? "lg:pt-0" : "lg:pt-3"}`}
    >
      {/* WD-23 base / saving / save-failed carry no back link; only the
          per-category review screens (WD-23C..J) do. */}
      {categoryView ? (
        categoryView
      ) : (
        <>
          <h1 className="text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
            {c.import.title}
          </h1>
          <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
            {state === "saving" || saving
              ? c.import.savingSubtitle
              : c.import.subtitle}
          </p>
          {state === "saving" || saving ? (
            <ImportSavingView />
          ) : state === "save-failed" ? (
            <ImportFailedView onTryAgain={runImport} />
          ) : (
            <ImportBaseView onImport={runImport} />
          )}
        </>
      )}
    </div>
  );
}
