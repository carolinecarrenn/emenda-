import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { SKILLS_COPY } from "./skills.copy";
import {
  CareerSubHeader,
  ConfirmSheet,
  DangerButton,
  EmptyStateCard,
  OfflineBanner,
  PrimaryButton,
  InlineErrorCard,
} from "../experience/careerUi";
import { SkillsOverview } from "./sections/SkillsOverview";
import { SkillsEditor } from "./sections/SkillsEditor";
import {
  LanguageSheet,
  ProficiencySheet,
  SkillSheet,
} from "./sections/SkillSheets";
import {
  EDITOR_SKILLS,
  LANGUAGES,
  type LanguageEntry,
  type ProficiencyLevel,
} from "./skillsMock";

type Sheet =
  | null
  | "add-skill"
  | "edit-skill"
  | "add-language"
  | "edit-language"
  | "proficiency";

type Phase = "editing" | "saving" | "save-failed" | "unsaved" | "offline";

const FORCED_STATES = [
  "empty", "offline", "edit", "add-skill", "edit-skill", "add-language",
  "edit-language", "proficiency", "saving", "save-failed", "unsaved",
] as const;

/** Skills & Languages — Figma WD-27 (A Empty · B Edit · C Save Failed ·
 *  D Add Skill · E Add Language · F Edit Skill · G Edit Language ·
 *  H Proficiency Selector · I Saving · J Offline · K Unsaved Changes) ·
 *  mobile W-27 (sheets render as bottom sheets). */
export function SkillsLanguagesPage() {
  const c = useSectionCopy(SKILLS_COPY);
  const common = useCommonCopy();
  const screenState = useScreenState();
  const navigate = useNavigate();
  const location = useLocation();

  const [view, setView] = useState<"overview" | "empty" | "edit">(
    "overview",
  );
  const [sheet, setSheet] = useState<Sheet>(null);
  const [phase, setPhase] = useState<Phase>("editing");
  const [skills, setSkills] = useState<string[]>(EDITOR_SKILLS);
  const [languages, setLanguages] = useState<LanguageEntry[]>(LANGUAGES);
  /* W-27E opens on an empty draft; W-27G opens on the first saved language. */
  const [langDraft, setLangDraft] = useState<LanguageEntry>(() =>
    screenState === "add-language"
      ? { name: "", level: "basic" }
      : LANGUAGES[0],
  );
  const [langIndex, setLangIndex] = useState<number | null>(
    screenState === "add-language" ? null : 0,
  );
  /** Which chip the W-27F edit-skill sheet is editing (card pill = the first). */
  const [skillIndex, setSkillIndex] = useState(0);
  const profReturnRef = useRef<Sheet>(null);
  const timerRef = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const clearQuery = () => {
    if (location.search) navigate(location.pathname, { replace: true });
  };

  const forced =
    screenState !== null &&
    (FORCED_STATES as readonly string[]).includes(screenState)
      ? screenState
      : null;

  /* Resolve the forced URL state into view / sheet / phase. */
  const activeView =
    forced === null
      ? view
      : forced === "empty"
        ? forced
        : "edit";
  const activeSheet =
    forced === null
      ? sheet
      : forced === "add-skill" ||
          forced === "edit-skill" ||
          forced === "add-language" ||
          forced === "edit-language" ||
          forced === "proficiency"
        ? (forced as Sheet)
        : null;
  const activePhase =
    forced === null
      ? phase
      : forced === "saving" ||
          forced === "save-failed" ||
          forced === "unsaved" ||
          forced === "offline"
        ? (forced as Phase)
        : "editing";

  const dirty =
    JSON.stringify(skills) !== JSON.stringify(EDITOR_SKILLS) ||
    JSON.stringify(languages) !== JSON.stringify(LANGUAGES);

  const enterEdit = () => {
    setView("edit");
    setPhase("editing");
    setSheet(null);
    clearQuery();
  };
  const exitToOverview = () => {
    setView("overview");
    setPhase("editing");
    setSheet(null);
    clearQuery();
  };
  const save = () => {
    setView("edit");
    setPhase("saving");
    clearQuery();
    timerRef.current = window.setTimeout(() => {
      setPhase("editing");
      setView("overview");
    }, 900);
  };
  const openSheet = (s: Sheet) => {
    setView("edit");
    setSheet(s);
    clearQuery();
  };

  /* ---- Edit mode (hosts sheets + saving / save-failed / unsaved) ---- */
  if (activeView === "edit") {
    return (
      <div
        className={`max-w-[1080px] pt-2 lg:pt-0 ${
          activePhase === "saving" ? "opacity-50" : ""
        }`}
      >
        <CareerSubHeader
          backLabel={c.backLink}
          title={c.editTitle}
          subtitle={
            activePhase === "saving"
              ? c.savingSubtitle
              : activePhase === "save-failed"
                ? c.saveFailedSubtitle
                : activePhase === "offline"
                  ? c.offlineFormSubtitle
                  : c.editSubtitle
          }
          onBackClick={(e) => {
            if (dirty && activePhase === "editing") {
              e.preventDefault();
              setView("edit");
              setPhase("unsaved");
              clearQuery();
            }
          }}
        />
        <div className="mt-[38px]">
          <SkillsEditor
            skills={skills}
            languages={languages}
            onRemoveSkill={(skill) => {
              setSkills((s) => s.filter((x) => x !== skill));
              setView("edit");
              clearQuery();
            }}
            onAddSkill={() => openSheet("add-skill")}
            onEditSkill={(index) => {
              setSkillIndex(index);
              openSheet("edit-skill");
            }}
            onAddLanguage={() => {
              setLangDraft({ name: "", level: "basic" });
              setLangIndex(null);
              openSheet("add-language");
            }}
            onEditLanguage={(index) => {
              setLangDraft(languages[index] ?? { name: "", level: "basic" });
              setLangIndex(index);
              openSheet("edit-language");
            }}
          />
        </div>

        <div className="mt-[16px]">
          {activePhase === "save-failed" ? (
            /* WD-27C: retry primary in the left column, inline failure notice
               beside it in the right column (stacked on mobile). */
            <div className="grid gap-[12px] lg:grid-cols-2 lg:gap-x-[40px]">
              <div className="lg:col-start-2 lg:row-start-1">
                <InlineErrorCard
                  title={c.saveFailedTitle}
                  body={c.saveFailedBody}
                />
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <PrimaryButton label={c.trySavingAgain} onClick={save} tall />
              </div>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-[40px]">
              <PrimaryButton
                label={activePhase === "saving" ? c.saving : c.saveChanges}
                onClick={save}
                disabled={
                  activePhase === "saving" || activePhase === "offline"
                }
                tall
              />
              {activePhase === "offline" && (
                <div className="mt-[58px] lg:mt-0">
                  <OfflineBanner
                    title={c.offlineBannerTitle}
                    body={c.offlineBannerBody}
                    retryLabel={common.action.retry}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {activePhase === "unsaved" && (
          <ConfirmSheet
            title={c.unsavedTitle}
            body={c.unsavedBody}
            onScrimClick={() => {
              setView("edit");
              setPhase("editing");
              clearQuery();
            }}
          >
            <PrimaryButton
              label={c.keepEditing}
              onClick={() => {
                setView("edit");
                setPhase("editing");
                clearQuery();
              }}
              tall
            />
            <DangerButton
              label={c.discardChanges}
              tall
              onClick={() => {
                setSkills(EDITOR_SKILLS);
                setLanguages(LANGUAGES);
                exitToOverview();
              }}
            />
          </ConfirmSheet>
        )}

        {activeSheet === "add-skill" && (
          <SkillSheet
            mode="add"
            onSave={(value) => {
              setSkills((s) => (s.includes(value) ? s : [...s, value]));
              openSheet(null);
            }}
            onClose={() => openSheet(null)}
          />
        )}
        {activeSheet === "edit-skill" && (
          <SkillSheet
            key={`edit-skill-${skillIndex}`}
            mode="edit"
            initialValue={skills[skillIndex] ?? ""}
            onSave={(value) => {
              setSkills((s) =>
                s.map((x, i) => (i === skillIndex ? value : x)),
              );
              openSheet(null);
            }}
            onRemove={() => {
              setSkills((s) => s.filter((_, i) => i !== skillIndex));
              setSkillIndex(0);
              openSheet(null);
            }}
            onClose={() => openSheet(null)}
          />
        )}
        {(activeSheet === "add-language" || activeSheet === "edit-language") && (
          <LanguageSheet
            mode={activeSheet === "add-language" ? "add" : "edit"}
            name={langDraft.name}
            level={langDraft.level}
            onNameChange={(name) => setLangDraft((d) => ({ ...d, name }))}
            onOpenProficiency={() => {
              profReturnRef.current = activeSheet;
              openSheet("proficiency");
            }}
            onSave={() => {
              const entry = { ...langDraft, name: langDraft.name.trim() };
              setLanguages((list) =>
                langIndex === null
                  ? [...list, entry]
                  : list.map((l, i) => (i === langIndex ? entry : l)),
              );
              openSheet(null);
            }}
            onRemove={() => {
              setLanguages((list) =>
                list.filter((_, i) => i !== (langIndex ?? -1)),
              );
              openSheet(null);
            }}
            onClose={() => openSheet(null)}
          />
        )}
        {activeSheet === "proficiency" && (
          <ProficiencySheet
            selected={langDraft.level}
            onSelect={(level: ProficiencyLevel) => {
              setLangDraft((d) => ({ ...d, level }));
              openSheet(profReturnRef.current);
              profReturnRef.current = null;
            }}
            onClose={() => {
              openSheet(profReturnRef.current);
              profReturnRef.current = null;
            }}
          />
        )}
      </div>
    );
  }

  /* ---- Overview / empty / offline ---- */
  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.title}
        subtitle={activeView === "empty" ? c.emptySubtitle : c.subtitle}
      />
      <div className="mt-[38px]">
        {activeView === "empty" ? (
          <EmptyStateCard
            title={c.emptyTitle}
            body={c.emptyBody}
            ctaLabel={c.emptyCta}
            onCta={enterEdit}
          />
        ) : (
          <SkillsOverview onEdit={enterEdit} />
        )}
      </div>
    </div>
  );
}
