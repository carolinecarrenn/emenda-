import { useState, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { STRESS_DRAFT } from "./logsMock";
import { ConfirmModal } from "./sections/ConfirmModal";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SaveFailedScreen } from "./sections/SaveFailedScreen";
import { StressOfflineScreen } from "./sections/StressOfflineScreen";
import { StressQuestionRow } from "./sections/StressQuestionRow";
import { InfoCard } from "./sections/InfoCard";
import { StressResultCard } from "./sections/StressResultCard";

/** Stress check — Figma WD-61M (1187:998) · result WD-61N (1187:1072) ·
 *  offline WD-61M3 · save failed WD-61M4 · unsaved changes WD-61M5;
 *  mobile W-61M (1167:613). Three pill-chip questions, an optional private
 *  note and Simpan check-in. Never a medical diagnosis. */
export function StressCheckPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(LOGS_COPY);
  const common = useCommonCopy();

  const [stress, setStress] = useState<0 | 1 | 2>(STRESS_DRAFT.stress);
  const [energy, setEnergy] = useState<0 | 1 | 2>(STRESS_DRAFT.energy);
  const [sleep, setSleep] = useState<0 | 1 | 2>(STRESS_DRAFT.sleep);
  const [note, setNote] = useState(STRESS_DRAFT.note);
  const [saved, setSaved] = useState(state === "result");
  const [unsavedOpen, setUnsavedOpen] = useState(state === "unsaved-changes");
  const [formReopened, setFormReopened] = useState(false);

  const offline = state === "offline";
  const saveFailed = state === "save-failed";
  const dirty =
    stress !== STRESS_DRAFT.stress ||
    energy !== STRESS_DRAFT.energy ||
    sleep !== STRESS_DRAFT.sleep ||
    note !== STRESS_DRAFT.note;

  const handleCrumb = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dirty && !saved) {
      event.preventDefault();
      setUnsavedOpen(true);
    }
  };

  if (offline) {
    /* W-61M3 — offline the questionnaire is replaced by the cached row. */
    return <StressOfflineScreen />;
  }

  if (saveFailed && !formReopened) {
    /* W-61M4 — a failed save is its own review, not a banner over the chips;
       both actions bring the answers back untouched. */
    return (
      <SaveFailedScreen
        crumb={c.health.title}
        crumbTo="/worker/logs/health"
        title={c.stress.title}
        subtitle={c.stress.saveFailedSubtitle}
        cardTitle={c.stress.saveFailedCardTitle}
        cardBody={c.stress.saveFailedCardBody}
        onBackToEdit={() => setFormReopened(true)}
        onRetry={() => setFormReopened(true)}
      />
    );
  }

  if (saved) {
    /* WD-61N — check-in saved; the summary is a self-check, not a diagnosis. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <LogsHeader
          crumb={c.health.title}
          crumbTo="/worker/logs/health"
          title={c.stress.resultTitle}
          subtitle={c.stress.resultSubtitle}
        />
        <div className="mt-[12px] lg:mt-[50px]">
          <StressResultCard
            eyebrow={c.stress.savedEyebrow}
            summary={fillLogsCopy(c.stress.resultSummary, {
              stress: c.stress.stressOptions[stress].toLowerCase(),
              energy: c.stress.energyOptions[energy].toLowerCase(),
              sleep: c.stress.sleepOptions[sleep].toLowerCase(),
            })}
          />
        </div>
        {/* W-61N 1167:700 — the disclaimer is its own white card. */}
        <InfoCard
          className="mt-[12px] lg:mt-[27px]"
          fill="white"
          size="sm"
          title={c.stress.notDiagnosis}
          body={c.stress.resultDisclaimer}
        />
        <div className="mt-[12px] flex flex-col gap-[12px] lg:flex-row lg:gap-4">
          <LogsAction
            to="/worker/logs/health/stress-check/history"
            label={c.stress.historyCta}
            variant="outline"
            widthClass="lg:w-[250px]"
          />
          <LogsAction
            to="/worker/logs/health"
            label={common.action.done}
            widthClass="lg:w-[160px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={c.overview.eyebrow}
        crumbTo="/worker/logs/health"
        onCrumbClick={handleCrumb}
        title={c.stress.title}
        subtitle={c.stress.subtitle}
      />

      {/* W-61M (1167:619) is a flat 12px-rhythm column: the mint PRIVAT ·
          SELF CHECK card, three prompt + chip pairs and the optional note.
          WD-61M wraps the same content in a 1012x466 card, radius 18. */}
      <div className="mt-[12px] lg:mt-[50px] lg:min-h-[466px] lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[19px] lg:pt-[15px] lg:pb-[18px]">
        <div className="rounded-[16px] border border-lp-line bg-lp-mint px-[14px] py-[12px] lg:contents">
          <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:leading-[20px]">
            {c.stress.eyebrow}
          </p>
          <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[4px] lg:text-[12px] lg:leading-[28px]">
            {c.stress.intro}
          </p>
        </div>

        <div className="mt-[12px] space-y-[12px] lg:space-y-[46px]">
          <StressQuestionRow
            question={c.stress.q1}
            options={c.stress.stressOptions}
            selected={stress}
            onSelect={setStress}
          />
          <StressQuestionRow
            question={c.stress.q2}
            options={c.stress.energyOptions}
            selected={energy}
            onSelect={setEnergy}
          />
          <StressQuestionRow
            question={c.stress.q3}
            options={c.stress.sleepOptions}
            selected={sleep}
            onSelect={setSleep}
          />
        </div>

        <div className="mt-[12px] lg:mt-[50px] lg:h-[74px] lg:rounded-[14px] lg:border lg:border-lp-line lg:bg-white lg:px-[15px] lg:pt-[9px] lg:pb-[5px]">
          <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-[18px]">
            {c.stress.optionalLabel}
          </p>
          <textarea
            value={note}
            placeholder={c.stress.optionalPlaceholder}
            onChange={(event) => setNote(event.target.value)}
            className="mt-[7px] h-[78px] w-full resize-none rounded-[12px] border border-lp-line bg-white px-[13px] py-[11px] text-[11px] leading-[15px] text-lp-ink outline-none placeholder:text-lp-muted focus:border-lp-green lg:mt-[4px] lg:h-[36px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-[13px] lg:leading-[18px]"
          />
        </div>
      </div>

      <div className="mt-[12px] lg:mt-[28px]">
        <LogsAction
          label={c.stress.save}
          onClick={() => setSaved(true)}
          widthClass="lg:w-[260px]"
        />
      </div>

      {unsavedOpen && (
        <ConfirmModal
          primaryOutline
          title={c.unsaved.title}
          body={c.unsaved.body}
          primaryLabel={c.unsaved.keep}
          secondaryLabel={c.unsaved.discard}
          onPrimary={() => setUnsavedOpen(false)}
          onSecondary={() => navigate("/worker/logs/health")}
          onDismiss={() => setUnsavedOpen(false)}
        />
      )}
    </div>
  );
}
