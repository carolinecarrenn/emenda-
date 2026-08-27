import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill, signalTitle } from "./followupLabels";
import { formatSignalTime } from "./followupTime";
import { FollowUpPageHeader } from "./FollowUpPageHeader";
import { FollowUpPrimaryLink } from "./FollowUpButtons";
import { FollowUpSentDesktop } from "./FollowUpSentDesktop";

/* EM-10 Follow-up Sent (761:1700 · 1030:215 …): mint "Sent" pill, a 158px
   mint #e8f5f0 record card (radius 14, #d6e3de hairline) whose six lines sit
   on a 22px rhythm carrying signal, template, timestamp, manager and status,
   a 96px white "Follow-up history updated" card whose body ends "no automatic
   decision is implied", a 64px mint "Privacy boundary" card (sentence case in
   the frame, not caps), and the single green "Back to Follow-up" CTA. The
   frame opens straight on EMENDA → title → subtitle, so this screen carries
   no back link above the title — the CTA is the way back. */
export function FollowUpSentView({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <div className="max-w-[1060px]">
      <FollowUpPageHeader
        tone="record"
        title={c.sent.title}
        subtitle={c.sent.subtitle}
        desktopSubtitle={c.sent.subtitleDesktop}
      />

      <FollowUpSentDesktop signal={signal} />

      <div className="mt-[18px] lg:hidden">
        <span className="flex h-[28px] w-fit min-w-[72px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] text-[10px] font-semibold text-[#094033]">
          {c.sent.pill}
        </span>

        <div className="mt-[16px] min-h-[158px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] py-[12px]">
          <p className="text-[13px] font-semibold text-[#094033]">
            {signal.workerName}
          </p>
          <p className="mt-[9px] text-[10px] text-[#6e8a82]">
            {fill(c.sent.signalLabel, { value: signalTitle(c, signal) })}
          </p>
          <p className="mt-[7px] text-[10px] text-[#6e8a82]">
            {fill(c.sent.templateLabel, { value: signal.sentTemplateName })}
          </p>
          <p className="mt-[7px] text-[10px] font-semibold text-[#094033]">
            {fill(c.sent.sentLabel, {
              value: formatSignalTime(signal.sentAt, c, language),
            })}
          </p>
          <p className="mt-[7px] text-[10px] text-[#6e8a82]">
            {fill(c.sent.managerLabel, {
              value: `${EMPLOYER.manager} · ${common.manager.facilityManager}`,
            })}
          </p>
          <p className="mt-[7px] text-[10px] font-semibold text-[#06634f]">
            {fill(c.sent.statusLabel, { value: c.sent.statusValue })}
          </p>
        </div>

        <div className="mt-[18px] min-h-[96px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[14px]">
          <p className="text-[11px] font-semibold text-[#094033]">
            {c.sent.historyTitle}
          </p>
          <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82]">
            {c.sent.historyBody}
          </p>
        </div>

        <div className="mt-[18px] min-h-[64px] rounded-[12px] bg-[#e8f5f0] px-[14px] py-[12px]">
          <p className="text-[9px] font-semibold text-[#6e8a82]">
            {c.sent.privacyTitle}
          </p>
          <p className="mt-[6px] text-[9px] leading-[14px] text-[#6e8a82]">
            {c.sent.privacyBody}
          </p>
        </div>

        <div className="mt-[22px]">
          <FollowUpPrimaryLink to="/manager/follow-up">
            {c.sent.backCta}
          </FollowUpPrimaryLink>
        </div>
      </div>
    </div>
  );
}
