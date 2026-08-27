interface SyncRowProps {
  label: string;
  /** Raw draft title (worker content). */
  draftTitle: string;
  status: string;
  failed?: boolean;
}

/* W-61AR/AS/AT draft row (1205:156): a 350px mint (#f0f8f3) card at radius 16
   with 14px padding, the note type in 13px semibold #1c2621 and the per-row
   sync status (Syncing… / Waiting… / Synced / Sync failed) in 11px underneath,
   over the local draft title. Desktop keeps the WD-61AR white row with the
   status right-aligned. */
export function SyncRow({ label, draftTitle, status, failed = false }: SyncRowProps) {
  return (
    <div className="rounded-[16px] border border-lp-line bg-[#f0f8f3] p-[14px] lg:flex lg:min-h-[68px] lg:items-center lg:justify-between lg:gap-4 lg:rounded-[12px] lg:bg-white lg:px-[15px] lg:py-[13px]">
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-lp-ink lg:text-[14px]">
          {label}
        </p>
        <p
          className={`mt-[8px] text-[11px] font-semibold lg:hidden ${
            failed ? "text-signal" : "text-lp-green"
          }`}
        >
          {status}
        </p>
        <p className="mt-[8px] truncate text-[11px] text-lp-muted lg:mt-[5px]">
          {draftTitle}
        </p>
      </div>
      <p
        className={`hidden shrink-0 text-[12px] font-semibold lg:block ${
          failed ? "text-signal" : "text-lp-green"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
