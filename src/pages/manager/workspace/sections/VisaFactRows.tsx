import { EMPLOYER } from "@/data/caregiverReport";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";

/* EM-05A (761:953) key-value facts — Visa/status, Expiry, Renewal window,
   Facility and Document status. The frame stacks them as five separate
   radius-10 cards on their own 10px gaps, not as one divided list: the
   expiry and the renewal-window cards take the peach #ffe8e0 tint while a
   renewal window is open, the rest stay white on the #dbe3de hairline. The
   visa category ("Tokutei Ginou") and the dates are DATA and stay raw. */
export function VisaFactRows({ worker }: { worker: RosterWorker }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const { language } = useLanguage();
  const renewalUrgent = worker.visaDaysRemaining !== null;

  const rows = [
    { key: "status", label: c.visa.rowVisaStatus, value: worker.visaStatusLabel },
    {
      key: "expiry",
      label: c.visa.rowExpiry,
      value: formatDisplayDate(worker.visaValidUntilShort, language),
      urgent: renewalUrgent,
    },
    {
      key: "renewal",
      label: c.visa.rowRenewalWindow,
      value: c.visa.valueRenewalOpen,
      urgent: renewalUrgent,
    },
    { key: "facility", label: c.visa.rowFacility, value: EMPLOYER.facility },
    {
      key: "document",
      label: c.visa.rowDocumentStatus,
      value: c.visa.valueOnFile,
    },
  ];

  return (
    <dl className="space-y-[10px]">
      {rows.map((row) => (
        <div
          key={row.key}
          className={`flex items-baseline justify-between gap-[12px] rounded-[10px] border px-[16px] py-[15px] ${
            row.urgent
              ? "border-[#ffe8e0] bg-[#ffe8e0]"
              : "border-[#dbe3de] bg-white"
          }`}
        >
          <dt className="text-[11px] text-[#66736b]">{row.label}</dt>
          <dd
            className={`text-right text-[12px] font-semibold ${
              row.urgent ? "text-[#a04b2c]" : "text-[#17241f]"
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
