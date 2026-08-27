import { useScreenState } from "@/hooks/useScreenState";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../career.copy";
import { CV_SNAPSHOTS } from "../careerMock";
import { CareerBreadcrumb } from "../sections/CareerBreadcrumb";
import { CvBaseView } from "./sections/CvBaseView";
import { UpdateAvailableView } from "./sections/UpdateAvailableView";
import { ReviewUpdateView } from "./sections/ReviewUpdateView";
import { UpdatedView } from "./sections/UpdatedView";
import { CvOfflineView } from "./sections/CvOfflineView";
import { CvHistoryView } from "./sections/CvHistoryView";
import { SnapshotView } from "./sections/SnapshotView";

/** My CV (Figma WD-24, node 994:1025 · mobile W-24, 547:372).
 *  Master-CV overview plus its lettered variants: ?state=update-available
 *  (24A) · review-update (24B, checkbox selections cover 24H/24I/24J) ·
 *  updated (24C) · offline (24D) · history (24E) · snapshot-sakura (24F) ·
 *  snapshot-sample (24G). */
export function MyCvPage() {
  const c = useSectionCopy(CAREER_COPY);
  const { language } = useLanguage();
  const state = useScreenState();

  const snapshot =
    state === "snapshot-sakura"
      ? CV_SNAPSHOTS[0]
      : state === "snapshot-sample"
        ? CV_SNAPSHOTS[1]
        : null;

  const heading = snapshot
    ? {
        title: c.cv.snapshot.title,
        subtitle: fillCopy(c.cv.snapshot.subtitle, {
          employer: snapshot.employer,
          date: formatDisplayDate(snapshot.date, language),
        }),
      }
    : state === "history"
      ? { title: c.cv.history.title, subtitle: c.cv.history.subtitle }
      : state === "offline"
        ? { title: c.cv.title, subtitle: c.cv.offline.subtitle }
        : state === "review-update"
          ? { title: c.cv.review.title, subtitle: c.cv.review.subtitle }
          : state === "update-available"
            ? { title: c.cv.title, subtitle: c.cv.updateAvailable.pageSubtitle }
            : state === "updated"
              ? {
                  title: c.cv.updated.pageTitle,
                  subtitle: c.cv.updated.pageSubtitle,
                }
              : { title: c.cv.title, subtitle: c.cv.subtitle };

  /* Only the history (WD-24E) and submitted-snapshot (WD-24F/G) screens carry
     the back link in Figma; WD-24 and its A–D states start at the H1. */
  const showBackLink = state === "history" || snapshot !== null;

  return (
    <div
      className={`max-w-[1080px] pt-2 ${showBackLink ? "lg:pt-0" : "lg:pt-3"}`}
    >
      {showBackLink && <CareerBreadcrumb />}
      <h1
        className={`text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px] ${
          showBackLink ? "mt-[14px]" : ""
        }`}
      >
        {heading.title}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {heading.subtitle}
      </p>

      {snapshot ? (
        <SnapshotView snapshot={snapshot} />
      ) : state === "history" ? (
        <CvHistoryView />
      ) : state === "review-update" ? (
        <ReviewUpdateView />
      ) : state === "update-available" ? (
        <UpdateAvailableView />
      ) : state === "updated" ? (
        <UpdatedView />
      ) : state === "offline" ? (
        <CvOfflineView />
      ) : (
        <CvBaseView />
      )}
    </div>
  );
}
