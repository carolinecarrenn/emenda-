/**
 * The four employer-assigned report templates in the Figma mocks:
 * WD-55 (general) · WD-55H (caregiver) · WD-55J (warehouse) ·
 * WD-55L (food service). Templates are assigned by the employer — the worker
 * never picks one — so this is only used to select which read-only preview
 * or lettered state variant to render.
 */
export type TemplateKey = "general" | "caregiver" | "warehouse" | "food";

export function isTemplateKey(value: string | null): value is TemplateKey {
  return (
    value === "general" ||
    value === "caregiver" ||
    value === "warehouse" ||
    value === "food"
  );
}
