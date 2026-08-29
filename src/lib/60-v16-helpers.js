/* ============================================================
   V16 — DEEP PRODUCT PAGES
   Pillar → module drill-down · build evidence · deployment ·
   integration · comparison · per-industry · roadmap · demo.
   Every number on these pages is re-derived from this repository
   (src/app/router.tsx, docs/parity-matrix.md, e2e/, docs/doc/doc/**)
   and not from marketing copy.
   ============================================================ */

/* ---------- shared small helpers ---------- */
const V16_NAV_FAMILY = {};
const relTag = (r) => `<span class="mrel ${r.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,2)}">${r}</span>`;
const anchorBar = (items) => `<div class="anchors">${items.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div>`;
const derived = (en,id,ja) => `<p class="derived-note">${L(en,id,ja)}</p>`;
const backTo = (href,label) => `<div style="margin-top:34px"><a class="btn btn-ghost" href="${href}" data-nav>← ${label}</a></div>`;
