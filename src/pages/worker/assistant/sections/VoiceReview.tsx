import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { ASSISTANT_COPY } from "../assistant.copy";
import { VOICE_DRAFT } from "../assistantMock";

/* Consent-first voice input.
   Desktop (WD-59E · 1186:1026): a 690x180 #f2f9f5 card — 16px semibold
   "Review voice input", 12px body, a white 654x50 transcript field and a
   180x32 #056b54 "Use transcript" button bottom-right.
   Mobile (W-59E · 1084:1055): the spoken utterance as a dark-green bubble, a
   mint note strip, then a white review card with VOICE TRANSCRIPT and
   TRANSLATED · 日本語 (Noto Sans JP) plus Edit / Send buttons.
   Nothing is sent automatically in either variant. */
export function VoiceReview({
  onUseTranscript,
  onEdit,
}: {
  onUseTranscript: () => void;
  onEdit: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const common = useCommonCopy();

  return (
    <>
      {/* Desktop WD-59E */}
      <div className="hidden max-w-[690px] rounded-[16px] border border-lp-line bg-lp-tint px-[17px] pt-[12px] pb-[17px] lg:block">
        <p className="text-[16px] font-semibold text-lp-ink">{c.voiceTitle}</p>
        <p className="mt-[8px] text-[12px] leading-[18px] text-lp-muted">
          {c.voiceBody}
        </p>
        <div className="mt-[12px] flex min-h-[50px] items-center rounded-[10px] border border-lp-line bg-white px-[11px] text-[13px] text-lp-ink">
          {VOICE_DRAFT.desktopTranscript}
        </div>
        {/* W-59E offers Edit beside Send; desktop keeps the same pair so the
            transcript can be corrected before anything is sent. */}
        <div className="mt-[14px] flex justify-end gap-[10px]">
          <button
            type="button"
            onClick={onEdit}
            className="flex h-[32px] w-[120px] items-center justify-center rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:border-lp-green"
          >
            {common.action.edit}
          </button>
          <button
            type="button"
            onClick={onUseTranscript}
            className="flex h-[32px] w-[180px] items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white hover:bg-lp-green"
          >
            {c.useTranscript}
          </button>
        </div>
      </div>

      {/* Mobile W-59E */}
      <div className="space-y-[14px] lg:hidden">
        <div className="flex justify-end">
          <p className="max-w-[300px] rounded-[16px] bg-[#0c5941] px-[16px] py-[12px] text-[14px] leading-[20px] text-white">
            {VOICE_DRAFT.utterance}
          </p>
        </div>
        <p className="rounded-[14px] bg-brand-soft px-[16px] py-[12px] text-[13px] leading-[19px] text-lp-ink">
          {c.voiceNote}
        </p>
        <div className="rounded-[16px] border border-lp-line bg-white px-[16px] pt-[16px] pb-[16px]">
          <p className="text-[10px] font-semibold tracking-[0.06em] text-lp-green">
            {c.voiceTranscriptLabel}
          </p>
          <p className="mt-[6px] text-[14px] leading-[20px] text-lp-ink">
            {VOICE_DRAFT.transcript}
          </p>
          <p className="mt-[16px] text-[10px] font-semibold tracking-[0.06em] text-lp-green">
            {c.voiceTranslatedLabel}
          </p>
          <p
            lang="ja"
            className="mt-[6px] font-jp text-[14px] leading-[22px] text-lp-ink"
          >
            {VOICE_DRAFT.translation}
          </p>
          <div className="mt-[18px] flex gap-[10px]">
            <button
              type="button"
              onClick={onEdit}
              className="flex h-[44px] flex-1 items-center justify-center rounded-[22px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green"
            >
              {common.action.edit}
            </button>
            <button
              type="button"
              onClick={onUseTranscript}
              className="flex h-[44px] flex-1 items-center justify-center rounded-[22px] bg-[#0c5941] text-[13px] font-semibold text-white"
            >
              {c.sendLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
