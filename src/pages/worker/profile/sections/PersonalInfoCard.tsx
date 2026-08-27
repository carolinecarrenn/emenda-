import { Link } from "react-router-dom";
import { useProfileCopy } from "../profile.copy";
import { PROFILE, profileLocation } from "../profileMock";

function InfoRow({
  label,
  value,
  muted = false,
  tall = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex ${tall ? "h-[40px]" : "h-[32px]"} items-center justify-between text-[12px]`}
    >
      <p className="text-ink-muted">{label}</p>
      <p className={`text-right ${muted ? "text-ink-muted" : "text-ink"}`}>
        {value}
      </p>
    </div>
  );
}

/** WD-19 / W-19 "Personal information" card. Incomplete (WD-19B): Email and
 *  Current location show "Not added", the About me row disappears, and the
 *  action button becomes "Add personal information". Offline (W-19H): the
 *  cached values stay readable but the edit action drops to 50% and is inert
 *  — editing needs a connection. */
export function PersonalInfoCard({
  incomplete = false,
  editDisabled = false,
}: {
  incomplete?: boolean;
  editDisabled?: boolean;
}) {
  const c = useProfileCopy();
  const actionLabel = incomplete
    ? c.addPersonalInformation
    : c.editPersonalInformation;
  return (
    <div className="flex flex-col gap-[7px] rounded-[16px] border border-line bg-white px-4 pt-[14px] pb-[10px] lg:pb-2">
      <p className="text-[14px] leading-[18px] font-semibold text-ink lg:leading-[20px]">
        {c.personalInformation}
      </p>
      <InfoRow
        label={c.emailLabel}
        value={incomplete ? c.notAdded : PROFILE.email}
        muted={incomplete}
      />
      <InfoRow
        label={c.currentLocationLabel}
        value={incomplete ? c.notAdded : profileLocation(PROFILE)}
        muted={incomplete}
      />
      {!incomplete && (
        <InfoRow label={c.aboutMeLabel} value={PROFILE.aboutMe} tall />
      )}
      {editDisabled ? (
        <button
          type="button"
          disabled
          className="flex h-[40px] w-full cursor-not-allowed items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep opacity-50"
        >
          {actionLabel}
        </button>
      ) : (
        <Link
          to="/worker/profile/edit"
          className="flex h-[40px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
