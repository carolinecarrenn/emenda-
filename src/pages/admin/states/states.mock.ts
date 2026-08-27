/**
 * Record data for the Company Admin "Empty & Access States" area
 * (Figma AD-10 1225:1044, AD-10B 1226:1202, AD-10C 1226:4070, AD-10D 1239:827).
 *
 * Everything here is DATA and stays raw in every language: the employee named
 * in the destructive confirmation and the shape of the skeleton drawn in the
 * AD-10B "Loading list" card. Every label around it comes from states.copy.ts.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin is not Super Admin — no
 * cross-company record ever appears here, which is the whole point of the
 * "Permission boundary" card this area documents.
 */

/** The employee AD-10B (1226:1229) names in "Deactivate employee?". */
export const STATES_DEACTIVATION_SUBJECT = "Rina Sato";

/**
 * AD-10B "Loading list" (1226:1206) draws four 26px placeholder rows, each a
 * 110px bar on the left and an 80px bar at x=175 inside a 280px row.
 */
export const STATES_SKELETON_ROWS = [0, 1, 2, 3] as const;

/** AD-10 draws three reference cards; the loading state mirrors their count. */
export const STATES_REFERENCE_CARD_SLOTS = [0, 1, 2] as const;
