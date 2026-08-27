import { useState } from "react";
import { ContactRound } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { DOCUMENTS_COPY } from "./documents.copy";
import { EMERGENCY_CONTACT, type EmergencyContact } from "./documentsMock";
import { BackLink, PageHeading } from "./sections/PageChrome";
import { PickerField, TextField } from "./sections/Fields";
import { ConfirmModal, OverlaySheet } from "./sections/Overlays";
import {
  ErrorBanner,
  OfflineBanner,
  SuccessPanel,
} from "./sections/StateCards";
import { ActionButton } from "./sections/ActionButtons";
import { CenteredCard } from "./sections/CenteredCards";

type Mode = "view" | "add" | "edit" | "removed";
type Overlay = null | "remove-confirm" | "leave" | "language";

/** Mock language options offered by the PREFERRED LANGUAGE selector (raw
 *  contact data, not UI copy). */
const LANGUAGE_CHOICES = ["Bahasa Indonesia", "English", "日本語"];

interface ContactForm {
  name: string;
  relationship: string;
  countryCode: string;
  phone: string;
  preferredLanguage: string | null;
  note: string;
}

const EMPTY_FORM: ContactForm = {
  name: "",
  relationship: "",
  countryCode: "+62",
  phone: "",
  preferredLanguage: null,
  note: "",
};

function formFromContact(contact: EmergencyContact): ContactForm {
  return {
    name: contact.name,
    relationship: contact.relationship,
    countryCode: contact.countryCode,
    phone: contact.phone.replace(`${contact.countryCode} `, ""),
    preferredLanguage: contact.preferredLanguage,
    note: contact.note,
  };
}

/** Emergency information (Figma WD-40 1025:734 · mobile W-40 759:572).
 *  Desktop lays every state on the same two 520px columns 40px apart:
 *  WD-40 puts the PRIMARY CONTACT card in column 1 with the solid edit pill
 *  beside it, the 1080px mint privacy panel underneath and the red-outline
 *  remove action below that; WD-40A 1025:806 replaces the card with a centred
 *  empty card and drops the privacy panel; WD-40B/C lay the six fields out as
 *  three 78px rows before the 520px save pill; WD-40F 1025:1208 adds the
 *  full-width rose banner under it; WD-40K 1025:2747 pairs the mint success
 *  panel with its return pill in column 2. */
export function EmergencyInfoPage() {
  const c = useSectionCopy(DOCUMENTS_COPY);
  const sv = useScreenState();

  const svMode: Mode | null =
    sv === "add" || sv === "add-unsaved-changes"
      ? "add"
      : sv === "edit" ||
          sv === "offline" ||
          sv === "saving" ||
          sv === "save-failed" ||
          sv === "validation-error" ||
          sv === "unsaved-changes"
        ? "edit"
        : sv === "removed"
          ? "removed"
          : null;

  const [mode, setMode] = useState<Mode>("view");
  const [contact, setContact] = useState<EmergencyContact | null>(
    EMERGENCY_CONTACT,
  );
  /* W-40D 759:821 / WD-40D 1025:1017 show the saved contact with the two
     required fields cleared, so the validation frame is an Edit frame. */
  const [form, setForm] = useState<ContactForm>(() =>
    svMode === "edit"
      ? {
          ...formFromContact(EMERGENCY_CONTACT),
          ...(sv === "validation-error" ? { name: "", phone: "" } : null),
        }
      : sv === "add-unsaved-changes"
        ? /* W-40I 759:1169 shows a half-typed contact behind the discard
             confirmation, so the name is already filled. */
          { ...EMPTY_FORM, name: EMERGENCY_CONTACT.name }
        : EMPTY_FORM,
  );
  const [dirty, setDirty] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [showErrors, setShowErrors] = useState(false);
  /* Interactive counterpart of ?state=saving (W-40E). */
  const [savingLocal, setSavingLocal] = useState(false);

  const activeMode = svMode ?? mode;
  const activeContact = sv === "empty" ? null : contact;

  const update = (patch: Partial<ContactForm>) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const enterAdd = () => {
    setForm(EMPTY_FORM);
    setDirty(false);
    setShowErrors(false);
    setSavingLocal(false);
    setMode("add");
  };

  const enterEdit = () => {
    if (contact) setForm(formFromContact(contact));
    setDirty(false);
    setShowErrors(false);
    setSavingLocal(false);
    setMode("edit");
  };

  /* ── W-40K Removed (terminal) ──────────────────────────────────────── */
  if (activeMode === "removed") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink to="/worker/documents/emergency" label={c.emergency.title} />
        <PageHeading
          title={c.emergency.removedTitle}
          subtitle={c.emergency.removedSubtitle}
        />
        <div className="mt-[26px] grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <SuccessPanel
            title={c.emergency.removedPanelTitle}
            body={c.emergency.removedBody}
          />
          <ActionButton
            label={c.emergency.backToEmergency}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
            onClick={enterAdd}
          />
        </div>
      </div>
    );
  }

  /* ── W-40B Add / W-40C Edit form ───────────────────────────────────── */
  if (activeMode === "add" || activeMode === "edit") {
    const isAdd = activeMode === "add";
    const saving = sv === "saving" || savingLocal;
    const errorsOn = showErrors || sv === "validation-error";
    const nameError =
      errorsOn && form.name.trim() === "" ? c.emergency.nameError : null;
    const phoneError =
      errorsOn && form.phone.trim() === "" ? c.emergency.phoneError : null;
    const blocked = Boolean(nameError || phoneError);
    const leaveOpen =
      overlay === "leave" ||
      sv === "unsaved-changes" ||
      sv === "add-unsaved-changes";

    const closeForm = () => {
      setOverlay(null);
      setDirty(false);
      setSavingLocal(false);
      setMode("view");
    };

    /* W-40D Validation Error, then W-40E Saving before the contact card. */
    const handleSave = () => {
      if (saving) return;
      if (form.name.trim() === "" || form.phone.trim() === "") {
        setShowErrors(true);
        return;
      }
      setSavingLocal(true);
      window.setTimeout(() => {
        setContact({
          name: form.name,
          relationship: form.relationship,
          countryCode: form.countryCode,
          phone: `${form.countryCode} ${form.phone}`,
          preferredLanguage:
            form.preferredLanguage ?? EMERGENCY_CONTACT.preferredLanguage,
          note: form.note,
        });
        closeForm();
      }, 800);
    };

    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink
          to="/worker/documents/emergency"
          label={c.emergency.title}
          onGuard={() => {
            if (dirty) setOverlay("leave");
            else closeForm();
            return false;
          }}
        />
        <PageHeading
          title={isAdd ? c.emergency.addTitle : c.emergency.editTitle}
          subtitle={
            sv === "offline"
              ? c.emergency.offlineSubtitle
              : c.emergency.addSubtitle
          }
        />
        {sv === "offline" && (
          <div className="mt-[26px]">
            <OfflineBanner body={c.emergency.offlineBody} />
          </div>
        )}
        <div className="mt-[26px] grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <TextField
            label={c.emergency.labelName}
            value={form.name}
            placeholder={c.emergency.placeholderName}
            onChange={(name) => update({ name })}
            error={nameError}
          />
          <TextField
            label={c.emergency.labelRelationship}
            value={form.relationship}
            placeholder={c.emergency.placeholderRelationship}
            onChange={(relationship) => update({ relationship })}
          />
          <TextField
            label={c.emergency.labelCountryCode}
            value={form.countryCode}
            onChange={(countryCode) => update({ countryCode })}
          />
          <TextField
            label={c.emergency.labelPhone}
            value={form.phone}
            placeholder={c.emergency.placeholderPhone}
            onChange={(phone) => update({ phone })}
            error={phoneError}
          />
          {/* WD-40B 1025:886 draws this picker as a plain field — no
              trailing chevron, unlike the WD-38 document pickers. */}
          <PickerField
            label={c.emergency.labelLanguage}
            display={form.preferredLanguage ?? c.emergency.placeholderLanguage}
            isPlaceholder={!form.preferredLanguage}
            onClick={() => setOverlay("language")}
          />
          <TextField
            label={c.emergency.labelNote}
            value={form.note}
            placeholder={c.emergency.placeholderNote}
            onChange={(note) => update({ note })}
          />
          {sv === "save-failed" && (
            /* W-40F 759:971 places the rose banner above the pill; the
               desktop twin WD-40F 1025:1208 runs it full width. */
            <ErrorBanner
              body={c.emergency.saveFailed}
              className="lg:order-last lg:col-span-2 lg:min-h-[72px]"
            />
          )}
          <div className="lg:self-start">
            <button
              type="button"
              disabled={saving || sv === "offline"}
              onClick={handleSave}
              className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white ${
                saving || blocked || sv === "offline"
                  ? "cursor-not-allowed opacity-45"
                  : "hover:bg-brand-deep"
              }`}
            >
              {saving
                ? c.shared.saving
                : sv === "save-failed"
                  ? c.emergency.trySavingAgain
                  : c.emergency.save}
            </button>
          </div>
        </div>

        {overlay === "language" && (
          <OverlaySheet
            title={c.emergency.placeholderLanguage}
            options={LANGUAGE_CHOICES.map((l) => ({ key: l, label: l }))}
            selectedKey={form.preferredLanguage}
            onSelect={(key) => {
              update({ preferredLanguage: key });
              setOverlay(null);
            }}
            onClose={() => setOverlay(null)}
          />
        )}
        {leaveOpen && (
          /* WD-40H 1025:1414 / WD-40I 1025:1421 Unsaved Changes */
          <ConfirmModal
            title={
              isAdd ? c.emergency.addUnsavedTitle : c.emergency.unsavedTitle
            }
            body={isAdd ? c.emergency.addUnsavedBody : c.emergency.unsavedBody}
            safeLabel={c.shared.keepEditing}
            onSafe={() => setOverlay(null)}
            dangerLabel={c.shared.discardChanges}
            dangerTone="solid"
            onDanger={closeForm}
            onClose={() => setOverlay(null)}
          />
        )}
      </div>
    );
  }

  /* ── W-40 View / W-40A Empty ───────────────────────────────────────── */
  const removeOpen = overlay === "remove-confirm" || sv === "remove-confirm";

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <BackLink to="/worker/documents" label={c.shared.myDocuments} />
      <PageHeading
        title={c.emergency.title}
        subtitle={
          activeContact ? c.emergency.subtitle : c.emergency.emptySubtitle
        }
      />

      {sv === "offline" && (
        <div className="mt-[26px]">
          <OfflineBanner body={c.emergency.offlineBody} />
        </div>
      )}

      {activeContact ? (
        <div className="mt-[26px] flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <div className="order-1 min-h-[186px] rounded-[16px] border border-[#d7e2dc] bg-white px-[16px] py-[16px] lg:order-none">
            <p className="text-[10px] font-semibold tracking-[0.04em] text-[#65746d]">
              {c.emergency.primaryContact}
            </p>
            <p className="mt-[12px] text-[16px] font-semibold text-[#17231f]">
              {activeContact.name}
            </p>
            <p className="mt-[8px] text-[11px] text-[#65746d]">
              {activeContact.relationship}
            </p>
            <p className="mt-[12px] text-[13px] text-[#17231f]">
              {activeContact.phone}
            </p>
            <p className="mt-[10px] text-[11px] text-[#65746d]">
              {c.emergency.preferredLanguage} · {activeContact.preferredLanguage}
            </p>
          </div>
          <button
            type="button"
            onClick={enterEdit}
            className="order-2 flex h-[50px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep lg:order-none lg:self-start"
          >
            {c.emergency.editButton}
          </button>
          {/* Figma 1025:2265 — full 1080px privacy panel, 116px tall. */}
          <div className="order-4 rounded-[14px] border border-[#c7ded3] bg-[#eef5f1] px-[14px] py-[14px] lg:order-none lg:col-span-2 lg:min-h-[116px]">
            <p className="text-[12px] font-semibold text-brand-deep">
              {c.emergency.privacyTitle}
            </p>
            <p className="mt-[8px] text-[11px] text-[#65746d]">
              {c.emergency.privacyBody}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOverlay("remove-confirm")}
            className="order-3 flex h-[46px] w-full items-center justify-center rounded-[14px] border border-[#d6382e] text-[12px] font-semibold text-[#c7261f] hover:bg-[#fdecea] lg:order-none lg:self-start"
          >
            {c.emergency.removeButton}
          </button>
        </div>
      ) : (
        /* WD-40A 1025:806 — centred empty card in column 1, the solid add
           pill beside it, and no privacy panel on this frame. */
        <div className="mt-[26px] grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <CenteredCard
            icon={
              <ContactRound
                size={22}
                strokeWidth={1.5}
                className="text-brand"
              />
            }
            title={c.emergency.emptyTitle}
            body={c.emergency.emptyBody}
            className="lg:min-h-[166px] lg:self-start"
          />
          <button
            type="button"
            onClick={enterAdd}
            className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep lg:self-start"
          >
            {c.emergency.addButton}
          </button>
        </div>
      )}

      {removeOpen && activeContact && (
        /* WD-40J 1025:2316 Remove Confirmation */
        <ConfirmModal
          title={c.emergency.removeModalTitle}
          body={c.emergency.removeModalBody}
          safeLabel={c.emergency.keepContact}
          onSafe={() => setOverlay(null)}
          dangerLabel={c.emergency.removeConfirmButton}
          dangerTone="danger-solid"
          onDanger={() => {
            setOverlay(null);
            setContact(null);
            setMode("removed");
          }}
          onClose={() => setOverlay(null)}
        />
      )}
    </div>
  );
}
