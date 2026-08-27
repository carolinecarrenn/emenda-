import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "../logs.copy";
import { InfoCard } from "./InfoCard";
import { LogsAction } from "./LogsAction";
import { LogsHeader } from "./LogsHeader";

interface NoteDeletedScreenProps {
  /** Back link label + target of the list the note was deleted from. */
  crumb: string;
  crumbTo: string;
  /** W-61S4 "Catatan karier dihapus" / S5 / S6 heading. */
  title: string;
  /** Mint confirmation card body, one per note type. */
  body: string;
}

/* Post-delete confirmation (Figma W-61S4 · 1196:558 career, W-61S5 · 1196:571
   health, W-61S6 · 1196:584 life): the "Penghapusan selesai." lead line, a
   mint "Selesai" card explaining what is gone, and a single full-width
   "Kembali ke daftar" pill. Desktop keeps the WD-61 page head + 240px action
   instead of the mobile 350px stack. */
export function NoteDeletedScreen({
  crumb,
  crumbTo,
  title,
  body,
}: NoteDeletedScreenProps) {
  const c = useSectionCopy(LOGS_COPY);

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={crumb}
        crumbTo={crumbTo}
        title={title}
        subtitle={c.deleted.subtitle}
      />

      <InfoCard
        className="mt-[12px] lg:mt-[50px]"
        title={c.deleted.cardTitle}
        body={body}
      />

      <div className="mt-[12px] lg:mt-[24px]">
        <LogsAction
          to={crumbTo}
          label={c.deleted.backCta}
          widthClass="lg:w-[240px]"
        />
      </div>
    </div>
  );
}
