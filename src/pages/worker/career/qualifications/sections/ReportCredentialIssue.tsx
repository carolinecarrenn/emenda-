import { useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { QUALIFICATIONS_COPY } from "../qualifications.copy";
import { CareerSubHeader, PrimaryButton } from "../../experience/careerUi";

type ReasonKey = "training-name" | "completion-date" | "not-my-training" | "other";

/** WD-28N Report Employer Credential — "What is incorrect?" radio-row card,
 *  NOTE · OPTIONAL textarea, "Submit issue" primary. */
export function ReportCredentialIssue({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const [reason, setReason] = useState<ReasonKey | null>(null);
  const [note, setNote] = useState("");

  const reasons: [ReasonKey, string][] = [
    ["training-name", c.reasonTrainingName],
    ["completion-date", c.reasonCompletionDate],
    ["not-my-training", c.reasonNotMyTraining],
    ["other", c.reasonOther],
  ];

  return (
    <div>
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.reportTitle}
        subtitle={c.reportSubtitle}
      />

      <div className="mt-[38px] grid items-start gap-4 lg:grid-cols-2 lg:gap-x-[40px]">
        <div className="min-h-[220px] rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] lg:px-[23px] py-[13px]">
          <p className="text-[14px] font-semibold text-[#17231f]">
            {c.whatIncorrect}
          </p>
          <div className="mt-[12px] flex flex-col gap-[6px]">
            {reasons.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setReason(key)}
                className={`flex h-[34px] w-full items-center gap-[10px] rounded-[12px] border bg-white px-[11px] text-[12px] font-semibold text-[#0b5842] ${
                  reason === key
                    ? "border-[#0c664b]"
                    : "border-[#d1ddd7] hover:bg-[#f4f8f5]"
                }`}
              >
                <span
                  className={`flex size-[14px] shrink-0 items-center justify-center rounded-full border ${
                    reason === key ? "border-[#0c664b]" : "border-[#9db3a8]"
                  }`}
                >
                  {reason === key && (
                    <span className="size-[7px] rounded-full bg-[#0c664b]" />
                  )}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.06em] text-[#65746d] uppercase">
            {c.noteLabel}
          </p>
          <textarea
            value={note}
            placeholder={c.notePlaceholder}
            onChange={(e) => setNote(e.target.value)}
            className="mt-[16px] h-[84px] w-full resize-none rounded-[14px] border border-[#d1ddd7] bg-white px-[20px] py-[13px] text-[13px] text-[#17231f] outline-none placeholder:text-[#65746d] focus:border-[#0b684f]"
          />
          <div className="mt-[18px]">
            <PrimaryButton label={c.submitIssue} onClick={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
