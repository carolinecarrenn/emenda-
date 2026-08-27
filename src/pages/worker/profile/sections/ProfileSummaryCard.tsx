import { WORKER } from "@/data/caregiverReport";
import { useProfileCopy } from "../profile.copy";
import { PROFILE, profileLocation } from "../profileMock";

/** WD-19 / W-19 identity card: mint PR initials avatar, name, location,
 *  EMENDA ID, and the outlined "Change photo" pill (bottom-right).
 *  Offline (W-19H): the pill renders at 50% opacity and is not clickable. */
export function ProfileSummaryCard({
  incomplete = false,
  photoDisabled = false,
  onChangePhoto,
}: {
  incomplete?: boolean;
  photoDisabled?: boolean;
  onChangePhoto: () => void;
}) {
  const c = useProfileCopy();
  return (
    <div className="relative flex h-[126px] items-center gap-3 rounded-[16px] border border-line bg-white px-4 py-[14px]">
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-brand-soft lg:size-[72px]">
        <p className="text-[15px] font-semibold text-brand-deep">
          {PROFILE.initials}
        </p>
      </div>
      <div className="flex h-[70px] flex-col gap-1 lg:h-[72px]">
        <p className="text-[18px] leading-[22px] font-semibold text-ink">
          {PROFILE.displayName}
        </p>
        <p className="text-[12px] leading-[18px] text-ink-muted">
          {incomplete ? c.detailsMissing : profileLocation(PROFILE)}
        </p>
        <p className="text-[11px] leading-[18px] text-ink-muted">
          {WORKER.emendaId}
        </p>
      </div>
      <button
        type="button"
        disabled={photoDisabled}
        onClick={onChangePhoto}
        className={`absolute right-[15px] bottom-[11px] flex h-[36px] w-[124px] items-center justify-center rounded-[18px] border border-line bg-white text-[13px] font-semibold text-brand-deep lg:right-[23px] lg:bottom-[17px] lg:w-[140px] ${
          photoDisabled
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-brand-soft"
        }`}
      >
        {c.changePhoto}
      </button>
    </div>
  );
}
