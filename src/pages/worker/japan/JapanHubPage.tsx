import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { JAPAN_COPY, fill } from "./japan.copy";
import { JAPAN_HUB, RESIDENCE_RECORD } from "./japanMock";
import { HubCard } from "./sections/HubCard";
import { SystemBanner } from "./sections/SystemBanner";

/** Japan preparation hub (Figma WD-32, node 1014:2).
 *  H1 32px · 15px subtitle · 2×2 card grid (14px radius, 15/13px type) ·
 *  12px privacy footnote. Desktop column is the Figma 1080px content band
 *  (two 520px cards, 40px gutter); subtitle top sits 48px under the title top
 *  and the card grid 110px under it. States: ?state=loading (WD-32A),
 *  outside-japan (WD-32B), already-in-japan (WD-32C),
 *  needs-attention (WD-32D), offline (WD-32E). */
export function JapanHubPage() {
  const state = useScreenState();
  const c = useSectionCopy(JAPAN_COPY);
  const cc = useCommonCopy();
  const { language } = useLanguage();

  const validUntil = formatDisplayDate(RESIDENCE_RECORD.validUntil, language);
  const nextReminder = formatDisplayDate(JAPAN_HUB.nextReminderDate, language);
  const cachedDate = formatDisplayDate(JAPAN_HUB.cachedUpdatedDate, language);

  const title =
    state === "outside-japan" ? c.hub.titleOutside : c.hub.title;
  const subtitle =
    state === "loading"
      ? c.hub.subtitleLoading
      : state === "outside-japan"
        ? c.hub.subtitleOutside
        : state === "already-in-japan"
          ? c.hub.subtitleAlready
          : state === "needs-attention"
            ? c.hub.subtitleAttention
            : state === "offline"
              ? c.hub.subtitleOffline
              : c.hub.subtitle;

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-[16px]">
      <h1 className="text-[30px] leading-[42px] font-bold text-[#131f1a] lg:text-[32px] lg:leading-[42px]">
        {title}
      </h1>
      <p className="mt-[4px] min-h-[44px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px] lg:text-[15px]">
        {subtitle}
      </p>

      <div
        className={`mt-[22px] grid lg:mt-[18px] ${state === "loading" ? "gap-y-[20px]" : "gap-y-[14px]"} lg:grid-cols-2 lg:items-start lg:gap-x-[40px] lg:gap-y-[24px]`}
      >
        {state === "loading" ? (
          <>
            <div className="h-[96px] rounded-[16px] bg-[#e7eeea] lg:rounded-[14px]" />
            <div className="h-[96px] rounded-[16px] bg-[#e7eeea] lg:rounded-[14px]" />
            <div className="h-[96px] rounded-[16px] bg-[#e7eeea] lg:rounded-[14px]" />
            <div className="h-[96px] rounded-[16px] bg-[#e7eeea] lg:rounded-[14px]" />
          </>
        ) : state === "outside-japan" ? (
          <>
            <HubCard
              title={c.hub.residenceVisa}
              lines={[c.hub.residenceVisaAdd]}
              action={{ label: c.action.add, to: "/worker/japan/visa-plan" }}
              className="lg:min-h-[116px]"
            />
            {/* W-32B routes each card at its own readiness variant: the
                before-arrival checklist (W-34A) and a preview of the
                after-arrival one (W-34B). */}
            <HubCard
              title={c.hub.beforeArrival}
              lines={[c.hub.beforeArrivalSummary]}
              action={{
                label: cc.status.review,
                to: "/worker/japan/readiness?state=outside-japan",
              }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.firstDays}
              lines={[c.hub.firstDaysSummary]}
              action={{
                label: c.action.preview,
                to: "/worker/japan/readiness?state=already-in-japan",
              }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.importantDates}
              lines={[c.hub.datesEmpty]}
              action={{ label: c.action.add, to: "/worker/japan/dates" }}
              className="lg:min-h-[116px]"
            />
          </>
        ) : state === "already-in-japan" ? (
          <>
            <HubCard
              title={c.hub.residenceStatus}
              lines={[fill(c.hub.residenceCurrent, { date: validUntil })]}
              action={{ label: cc.action.view, to: "/worker/japan/residence" }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.residentRegistration}
              lines={[
                fill(c.hub.registrationAlready, {
                  city: JAPAN_HUB.registrationCity,
                }),
              ]}
              action={{
                label: cc.action.view,
                to: "/worker/japan/registration",
              }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.japanReadiness}
              lines={[c.hub.readinessSummary]}
              action={{ label: cc.status.review, to: "/worker/japan/readiness" }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.importantDates}
              lines={[c.hub.datesUpcoming]}
              action={{ label: cc.action.view, to: "/worker/japan/dates" }}
              className="lg:min-h-[116px]"
            />
          </>
        ) : state === "needs-attention" ? (
          <>
            <HubCard
              tone="amber"
              title={c.hub.attentionTitle}
              lines={[c.hub.attentionBody]}
              action={{
                label: cc.status.review,
                to: "/worker/japan/residence?state=expiry-soon",
              }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.japanReadiness}
              lines={[c.hub.readinessAttention]}
              action={{ label: cc.status.review, to: "/worker/japan/readiness" }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.importantDates}
              lines={[c.hub.datesAttention]}
              action={{ label: cc.action.view, to: "/worker/japan/dates" }}
              className="lg:min-h-[116px]"
            />
          </>
        ) : state === "offline" ? (
          <>
            <SystemBanner
              title={c.hub.offlineTitle}
              body={c.hub.offlineBody}
              action={{ label: cc.action.retry, to: "/worker/japan" }}
            />
            <HubCard
              title={c.hub.residenceStatus}
              lines={[fill(c.hub.savedLocally, { date: cachedDate })]}
              className="lg:min-h-[104px]"
            />
            <HubCard
              title={c.hub.japanReadiness}
              lines={[c.hub.readinessSummary]}
              className="lg:min-h-[104px]"
            />
          </>
        ) : (
          <>
            <HubCard
              title={c.hub.residenceStatus}
              lines={[
                RESIDENCE_RECORD.status,
                fill(c.hub.validUntil, { date: validUntil }),
              ]}
              action={{ label: cc.action.view, to: "/worker/japan/residence" }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.japanReadiness}
              lines={[c.hub.readinessSummary]}
              action={{ label: cc.status.review, to: "/worker/japan/readiness" }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.residentRegistration}
              lines={[
                fill(c.hub.registrationSummary, {
                  city: JAPAN_HUB.registrationCity,
                }),
              ]}
              action={{
                label: cc.action.view,
                to: "/worker/japan/registration",
              }}
              className="lg:min-h-[116px]"
            />
            <HubCard
              title={c.hub.importantDates}
              lines={[fill(c.hub.datesNext, { date: nextReminder })]}
              action={{ label: cc.action.view, to: "/worker/japan/dates" }}
              className="lg:min-h-[116px]"
            />
          </>
        )}
      </div>

      {state === null && (
        <p className="mt-[24px] text-[12px] text-[#5e7066]">
          {c.hub.privacyNote}
        </p>
      )}
    </div>
  );
}
