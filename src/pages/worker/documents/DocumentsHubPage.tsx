import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { DOCUMENTS_COPY } from "./documents.copy";
import { DOCUMENTS, type VaultDocument } from "./documentsMock";
import { BackLink, PageHeading } from "./sections/PageChrome";
import { DocumentCard, SkeletonDocumentCards } from "./sections/DocumentCards";
import {
  AmberBanner,
  ErrorBanner,

} from "./sections/StateCards";
import { OfflineRetryBanner } from "./sections/RetryBanners";
import { CenteredCard } from "./sections/CenteredCards";
import { ActionButton } from "./sections/ActionButtons";

/** My documents — vault hub (Figma WD-37, node 1024:235 · mobile W-37 758:7).
 *  Back-link "Headless home" · 2-col 520px card grid with provenance pills
 *  (mint Verified / amber linked Verified / mint Self-added) · solid green
 *  Add document · mint Emergency information shortcut · privacy footnote.
 *  States: ?state=loading|empty|offline|load-failed|needs-attention.
 *  Each state frame carries its own subtitle and its own body treatment:
 *  W-37A 758:73 flat skeletons, W-37B 758:122 empty card + button outside it,
 *  W-37C 758:176 amber offline banner, W-37D 803:4 rose error card + full-
 *  width Retry. The privacy footnote only appears on the populated frames. */
export function DocumentsHubPage() {
  const c = useSectionCopy(DOCUMENTS_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const state = useScreenState();

  const metaFor = (doc: VaultDocument): string => {
    if (doc.provenance === "verified")
      return `${c.hub.verifiedIdentitySource} · ${c.hub.expires} ${formatDisplayDate(doc.expires ?? "", language)}`;
    if (doc.provenance === "linked")
      return `${c.hub.linkedFromResidenceStatus} · ${c.hub.expires} ${formatDisplayDate(doc.expires ?? "", language)}`;
    return `${c.hub.selfAdded} · ${doc.selfAddedBy} · ${doc.addedMonth}`;
  };

  const addButton = (
    <Link
      to="/worker/documents/add"
      className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep lg:self-start"
    >
      {c.hub.addDocument}
    </Link>
  );

  const emergencyShortcut = (body: string) => (
    <Link
      to="/worker/documents/emergency"
      className="block min-h-[82px] rounded-[14px] border border-[#c7ded3] bg-[#eef5f1] px-[15px] py-[13px] hover:border-brand"
    >
      <p className="text-[13px] font-semibold text-brand-deep">
        {c.hub.emergencyShortcutTitle}
      </p>
      <p className="mt-[4px] text-[11px] text-[#65746d]">{body}</p>
    </Link>
  );

  const subtitle =
    state === "needs-attention"
      ? c.hub.subtitleNeedsAttention
      : state === "loading"
        ? c.hub.subtitleLoading
        : state === "empty"
          ? c.hub.subtitleEmpty
          : state === "offline"
            ? c.hub.subtitleOffline
            : state === "load-failed"
              ? c.hub.subtitleLoadFailed
              : c.hub.subtitle;

  const showPrivacyFootnote =
    state !== "loading" && state !== "empty" && state !== "load-failed";

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <BackLink to="/worker" label={c.shared.headlessHome} />
      <PageHeading title={c.hub.title} subtitle={subtitle} />

      {state === "needs-attention" && (
        <div className="mt-[26px]">
          <AmberBanner
            body={c.hub.needsAttentionBanner.replace(
              "{date}",
              formatDisplayDate("18 May 2027", language),
            )}
          />
        </div>
      )}

      <div className="mt-[26px]">
        {state === "loading" ? (
          <div className="grid gap-[20px] lg:grid-cols-2 lg:gap-x-10">
            <SkeletonDocumentCards />
          </div>
        ) : state === "empty" ? (
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
            {/* WD-37B 1024:371 — the empty card keeps the first 520px column
                and the solid "Add document" pill sits beside it in column 2. */}
            <CenteredCard
              className="lg:min-h-[172px] lg:self-start"
              icon={
                <FileText size={22} strokeWidth={1.5} className="text-brand" />
              }
              title={c.hub.emptyTitle}
              body={c.hub.emptyBody}
            />
            {addButton}
            {emergencyShortcut(c.hub.emergencyShortcutBodyEmpty)}
          </div>
        ) : state === "load-failed" ? (
          /* WD-37D 1024:1952 — the rose card runs the full 1080px content
             width and the solid Retry pill below it is only 104px wide. */
          <div className="grid gap-4 lg:gap-[18px]">
            <ErrorBanner
              title={c.hub.loadFailedTitle}
              body={c.hub.loadFailedBody}
              className="lg:min-h-[132px]"
            />
            <div className="lg:w-[104px]">
              <ActionButton label={common.action.retry} />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
            {state === "offline" && (
              <div className="lg:col-span-2">
                <OfflineRetryBanner body={c.hub.offlineBody} />
              </div>
            )}
            {DOCUMENTS.map((doc) => (
              <DocumentCard
                key={doc.id}
                to={`/worker/documents/${doc.id}`}
                name={doc.name}
                meta={metaFor(doc)}
                pillLabel={
                  doc.provenance === "self"
                    ? c.hub.selfAdded
                    : common.status.verified
                }
                pillTone={doc.provenance === "linked" ? "amber" : "mint"}
              />
            ))}
            {addButton}
            {emergencyShortcut(c.hub.emergencyShortcutBody)}
          </div>
        )}
      </div>

      {showPrivacyFootnote && (
        <p className="mt-[24px] max-w-[1080px] text-[10px] text-[#65746d]">
          {c.hub.privacyFootnote}
        </p>
      )}
    </div>
  );
}
