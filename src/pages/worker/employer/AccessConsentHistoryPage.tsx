import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "./employer.copy";
import { ACCESS_HISTORY_ACTIVE, ACCESS_HISTORY_ENDED } from "./employerMock";
import { useEmployerLink } from "./employerStatus";
import { EmployerPageHeader } from "./sections/EmployerPageHeader";
import { HistoryEntryCard } from "./sections/HistoryEntryCard";
import { NoteStrip } from "./sections/NoteStrip";
import { ActionButton } from "./sections/ActionButton";

/** Access & consent history (Figma WD-52 active, node 1182:1680; WD-52A
 *  ended, node 1182:1731; mobile W-52 946:1143 / W-52A 946:1192). One audit
 *  card per recorded grant, then the mint "Back to connection" strip — which
 *  W-52 node 946:1189 draws as a filled primary button on mobile. */
export function AccessConsentHistoryPage() {
  const c = useSectionCopy(EMPLOYER_COPY);
  const link = useEmployerLink();
  /* W-52A — the log is append-only: once a grant has been revoked (from
     W-51A's confirmation or an employer-side end) the ended entry stays. */
  const ended = useScreenState() === "ended" || link.hasEndedGrant;
  const entries = ended ? ACCESS_HISTORY_ENDED : ACCESS_HISTORY_ACTIVE;

  return (
    <div className="max-w-[1012px] pt-[17px] lg:pt-0">
      <EmployerPageHeader
        title={c.history.title}
        subtitle={ended ? c.history.subtitleEnded : c.history.subtitleActive}
      />

      {/* W-52 nodes 946:1183 / 946:1186 — history entry cards */}
      <div className="mt-[26px] space-y-4 lg:mt-[57px]">
        {entries.map((entry) => (
          <HistoryEntryCard key={entry.id} entry={entry} ended={ended} />
        ))}
      </div>

      {/* W-52 node 946:1189 — mobile closes with the filled primary button */}
      <ActionButton
        tone="primary"
        width={464}
        to="/worker/employer"
        className={`lg:hidden ${ended ? "mt-[16px]" : "mt-[24px]"}`}
      >
        {c.history.backToConnection}
      </ActionButton>

      {/* WD-52 node 1182:1728 — mint "Back to connection" strip */}
      <NoteStrip
        size="link"
        to="/worker/employer"
        className="mt-[22px] hidden lg:flex"
      >
        {c.history.backToConnection}
      </NoteStrip>
    </div>
  );
}
