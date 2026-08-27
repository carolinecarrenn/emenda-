import { Play } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { RECORDING_TIME, VOICE_TRANSCRIPT } from "../chatMock";
import { ChatGhostButton, ChatPrimaryButton } from "./chatUi";

/* Voice pipeline panels — mobile W-58F 1035:614 → 58G 1035:713 → 58H
   1035:786, failure 58I 1035:890; desktop WD-58F..58I (1182:7040…).
   On mobile each one docks at the bottom of the thread in place of the
   composer: a 350px card, radius 18, with a 36px leading disc, a 13/18
   semibold lead and — where the mock gives the step an action — a second
   card that carries it. Desktop keeps the 716px mint strips. */

/** Waveform bars drawn beside "Recording" / "Translation ready" (W-58F/58H). */
function Waveform({ tone = "#2f6a53" }: { tone?: string }) {
  const bars = [6, 12, 8, 16, 10, 18, 7, 14, 9, 15, 6, 13, 8, 17, 10, 12, 7, 14, 9, 11];
  return (
    <span className="flex items-center gap-[3px]" aria-hidden>
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          style={{ height, backgroundColor: tone }}
          className="w-[2px] rounded-full"
        />
      ))}
    </span>
  );
}

/** W-58F — Voice Recording: a stop disc, the "Recording" lead and the live
 *  waveform. Desktop WD-58F (1182:7040) shows the 00:12 counter instead. */
export function VoiceRecordingPanel({ onStop }: { onStop: () => void }) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex min-h-[62px] items-center gap-[12px] rounded-[18px] border border-[#cfe3d8] bg-white px-[14px] py-[12px] lg:hidden">
        <button
          type="button"
          onClick={onStop}
          aria-label={c.voice.stopRecording}
          className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[#0c5941]"
        >
          <span className="block size-[11px] rounded-[2px] bg-white" />
        </button>
        <span className="min-w-0">
          <span className="block text-[13px] leading-[18px] font-semibold text-[#131f1a]">
            {c.voice.recording}
          </span>
          <span className="mt-[4px] block">
            <Waveform />
          </span>
        </span>
      </div>

      <div className="hidden min-h-[76px] rounded-[14px] border border-lp-line bg-lp-tint px-[18px] py-[12px] lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-[14px] leading-[22px] font-semibold text-[#0a4738]">
            {c.voice.recording}
          </p>
          <p className="mt-[1px] text-[12px] leading-[20px] text-lp-muted">
            {RECORDING_TIME}
          </p>
        </div>
        <ChatGhostButton onClick={onStop} className="h-[42px] w-[176px] shrink-0">
          {c.voice.stopRecording}
        </ChatGhostButton>
      </div>
    </>
  );
}

/** W-58G — Voice Transcribing: the recording is safe while it processes. */
export function VoiceTranscribingPanel() {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex min-h-[62px] items-center gap-[12px] rounded-[18px] border border-[#cfe3d8] bg-white px-[14px] py-[12px] lg:hidden">
        <span
          className="flex size-[32px] shrink-0 items-center justify-center rounded-full border border-[#cfe3d8] bg-[#f0f8f3] text-[13px] font-semibold text-[#2f6a53]"
          aria-hidden
        >
          •••
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] leading-[18px] font-semibold text-[#131f1a]">
            {c.voice.transcribingTitle}
          </span>
          <span className="mt-[2px] block text-[11px] leading-[15px] text-[#596b61]">
            {c.voice.transcribingBody}
          </span>
        </span>
      </div>

      <div className="hidden min-h-[86px] rounded-[14px] border border-lp-line bg-lp-tint px-[18px] py-[12px] lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-[14px] leading-[22px] font-semibold text-[#0a4738]">
            {c.voice.transcribingTitle}
          </p>
          <p className="mt-[2px] text-[12px] leading-[22px] text-lp-muted">
            {c.voice.transcribingBody}
          </p>
        </div>
        <span className="inline-flex h-[26px] w-[150px] items-center justify-center rounded-[13px] border border-lp-line bg-white px-[14px] text-[11px] font-semibold text-lp-green">
          {c.voice.processing}
        </span>
      </div>
    </>
  );
}

/** W-58H — Voice Translation Ready: the playback card, then the mint review
 *  gate. On mobile the gate itself is the control that opens W-58J. */
export function VoiceTranslationReadyPanel({
  onReview,
}: {
  onReview: () => void;
}) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex flex-col gap-[12px] lg:hidden">
        <div className="flex min-h-[62px] items-center gap-[12px] rounded-[18px] border border-[#cfe3d8] bg-white px-[14px] py-[12px]">
          <span
            className="flex size-[32px] shrink-0 items-center justify-center rounded-full border border-[#cfe3d8] bg-[#f0f8f3] text-[#2f6a53]"
            aria-hidden
          >
            <Play size={12} strokeWidth={2} fill="currentColor" />
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] leading-[18px] font-semibold text-[#131f1a]">
              {c.voice.translationReady}
            </span>
            <span className="mt-[4px] block">
              <Waveform tone="#9dbbad" />
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={onReview}
          className="rounded-[14px] border border-[#d9e1dc] bg-lp-tint px-[12px] py-[10px] text-left"
        >
          <span className="block text-[12px] leading-[16px] font-semibold text-[#131f1a]">
            {c.voice.reviewBeforeSending}
          </span>
          <span className="mt-[4px] block text-[11px] leading-[15px] text-[#596b61]">
            {c.voice.reviewGateBody}
          </span>
        </button>
      </div>

      <div className="hidden min-h-[196px] rounded-[14px] border border-lp-line bg-lp-tint px-[18px] py-[12px] lg:block">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <p className="text-[15px] leading-[24px] font-semibold text-[#0a4738]">
              {c.voice.translationReady}
            </p>
            <p className="mt-[6px] max-w-[650px] text-[12px] leading-[18px] text-lp-muted">
              {c.voice.readyCaption}
            </p>
          </div>
          <ChatPrimaryButton onClick={onReview} className="h-[40px] w-[150px] shrink-0">
            {c.voice.review}
          </ChatPrimaryButton>
        </div>

        <div className="mt-[12px] grid gap-[12px] lg:grid-cols-[320px_340px]">
          <div className="min-h-[64px] rounded-[12px] border border-lp-line bg-white px-[12px] py-[10px]">
            <p className="text-[10px] leading-[16px] font-semibold text-lp-green">
              {c.thread.labelTranscript}
            </p>
            <p className="mt-[2px] text-[13px] leading-[20px] text-lp-ink">
              {VOICE_TRANSCRIPT.transcript}
            </p>
          </div>
          <div className="min-h-[64px] rounded-[12px] border border-lp-line bg-white px-[12px] py-[10px]">
            <p className="text-[10px] leading-[16px] font-semibold text-lp-muted">
              {c.thread.labelTranslation}
            </p>
            <p lang="ja" className="mt-[2px] text-[13px] leading-[20px] text-lp-ink">
              {VOICE_TRANSCRIPT.translation}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/** W-58I — Voice Failed: the recording survives. On mobile the
 *  "Recording preserved" card is the control that re-runs processing. */
export function VoiceFailedPanel({ onRetry }: { onRetry: () => void }) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex flex-col gap-[12px] lg:hidden">
        <div className="flex min-h-[62px] items-center gap-[12px] rounded-[18px] border border-[#f2cdca] bg-[#fdeeed] px-[14px] py-[12px]">
          <span
            className="flex size-[28px] shrink-0 items-center justify-center rounded-full border border-[#c72924] text-[14px] font-semibold text-[#c72924]"
            aria-hidden
          >
            !
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] leading-[18px] font-semibold text-[#c72924]">
              {c.voice.failedTitle}
            </span>
            <span className="mt-[2px] block text-[11px] leading-[15px] text-[#596b61]">
              {c.voice.failedBody}
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={onRetry}
          aria-label={c.voice.tryAgain}
          className="rounded-[14px] border border-[#f2cdca] bg-[#fbe9e8] px-[12px] py-[10px] text-left"
        >
          <span className="block text-[12px] leading-[16px] font-semibold text-[#131f1a]">
            {c.voice.recordingPreserved}
          </span>
          <span className="mt-[4px] block text-[11px] leading-[15px] text-[#596b61]">
            {c.voice.failedHelper}
          </span>
        </button>
      </div>

      <div className="hidden min-h-[86px] rounded-[14px] border border-[#c72924] bg-[#fdedec] px-[18px] py-[12px] lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-[15px] leading-[24px] font-semibold text-[#c72924]">
            {c.voice.failedTitle}
          </p>
          <p className="mt-[2px] max-w-[460px] text-[12px] leading-[18px] text-lp-muted">
            {c.voice.failedBody}
          </p>
          {/* WD-58I (1182:7245) keeps the third reassurance line inside the
              alert instead of splitting it into a second card. */}
          <p className="mt-[2px] text-[12px] leading-[18px] font-semibold text-[#0a4738]">
            {c.voice.recordingPreserved}
          </p>
        </div>
        <ChatPrimaryButton onClick={onRetry} className="h-[42px] w-[150px] shrink-0">
          {c.voice.tryAgain}
        </ChatPrimaryButton>
      </div>
    </>
  );
}
