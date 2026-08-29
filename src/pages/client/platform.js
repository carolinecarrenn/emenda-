/* platform  —  PAGES.platform
   Merged from 2 original layers (lines 1460, 2289). */
PAGES.platform=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Platform</span>
  <h1>An intelligent layer, grounded in your knowledge.</h1>
  <p>AI woven into operational context — not a standalone chatbot — on a secure, role-based foundation.</p>
</div></section>

<section class="sec" id="ai"><div class="wrap">
  <span class="eyebrow">Emenda Assistant</span>
  <h2>AI that understands context — not just questions.</h2>
  <p class="lede">The assistant helps people understand work, navigate life in Japan, find knowledge, decide the next step, and communicate across languages.</p>
  <div class="grid g4" style="margin-top:34px">
    ${[['Discover','Find the right info & procedure','compass'],['Understand','Grasp context & intent','eye'],['Act','Recommend the next action','bolt'],['Follow-up','Track it to an outcome','route']]
    .map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
  <div class="grid g2" style="margin-top:20px">
    <div class="card reveal" style="background:var(--paper2)"><span class="cn">Traditional chatbot</span><p style="font-size:16px;color:var(--ink)">Question → Answer → End</p></div>
    <div class="card reveal" style="background:var(--emerald-tint);border-color:#c9e2d8"><span class="cn" style="color:var(--emerald)">Emenda Assistant</span><p style="font-size:16px;color:var(--ink)">Question → Understand → Guide → Recommend → <b>Permission</b> → Action → Follow-up → Outcome</p></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Human-controlled AI</span>
  <h2>The user always stays in control.</h2>
  <p class="lede">Sensitive actions ask for explicit permission before Emenda acts.</p>
  <div class="pills">${['Location','Call','Email','SMS','Calendar','Contacts'].map(x=>`<span class="pill">${x} · asks permission</span>`).join('')}</div>
  <div class="grid g3" style="margin-top:30px">
    ${[['User knows','Nothing happens silently','eye'],['User decides','Consent before any action','check'],['Emenda assists','Help within clear limits','bolt']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec" id="architecture"><div class="wrap">
  <span class="eyebrow">Architecture</span>
  <h2>Four layers, one coherent system.</h2>
  <div class="layers">
    ${[['l1','Experience','What people use',['Worker Mobile','Manager Web','Employer','Admin']],['l2','AI','Assistance layer',['Assistant','Retrieval / Knowledge','Context','Actions','Follow-up']],['l3','Application','Core capabilities',['Identity','Reports','Communication','Follow-up','Notifications','Career','Knowledge']],['l4','Platform','Foundations',['Auth','Permissions','Audit','Multilingual','Data','API / Integration']]]
    .map(([c,n,s,items])=>`<div class="layer ${c} reveal"><div class="ln">${n}<span>${s}</span></div><div class="items">${items.map(x=>`<span class="p">${x}</span>`).join('')}</div></div>`).join('')}
  </div>
  <div style="margin-top:30px">
    <span class="eyebrow">Knowledge & retrieval</span>
    <div class="spine" style="margin-top:16px">${[['User','question / intent'],['Assistant','entry point'],['Context + Intent','what & why'],['Retrieval','RAG'],['Company knowledge','grounded source'],['Answer / Action','with guidance'],['Follow-up','to outcome']].map(([t,s],i)=>`<div class="node"><span class="sn">0${i+1}</span><b>${t}</b><span>${s}</span></div>`).join('')}</div>
    <div class="legend"><span class="lg"><span class="mk done"></span>Available</span><span class="lg"><span class="mk prog"></span>MVP / In development</span><span class="lg"><span class="mk plan"></span>Planned</span></div>
    <p class="form-note" style="margin-top:14px">Capability maturity to be labelled per module. <span class="req">[STATUS TO BE VALIDATED]</span></p>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Integration approach</span>
  <h2>Connect the journey without forcing a big-bang replacement.</h2>
  <p class="lede">Emenda can be introduced around the workflows that create the most friction first, then expand as product and integration readiness grows.</p>
  <div class="grid g4" style="margin-top:30px">
    ${[['01','Discover','Map current communication, reporting, and handoff gaps.'],['02','Configure','Align roles, report flows, content, and permissions.'],['03','Connect','Integrate approved data and systems where needed.'],['04','Expand','Add AI actions, knowledge, and additional workflows in stages.']].map(([n,t,p])=>`<div class="card reveal"><span class="cn">${n}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
  <p class="source-note">Specific integrations should only be listed when an endpoint, connector, or implementation scope has been confirmed.</p>
</div></section>

<section class="sec" id="security"><div class="wrap">
  <span class="eyebrow">Security, privacy & governance</span>
  <h2>Trust designed into every layer.</h2>
  <div class="grid g4" style="margin-top:34px">
    ${[['Role-based access','Right people, right data','lock'],['User consent','Permission before actions','check'],['Org separation','Each org isolated','building'],['Audit history','Actions are traceable','clip'],['Privacy boundaries','Clear limits on data use','shield'],['Controlled AI','Acts only with consent','bolt'],['Traceability','Owner, time & status','eye'],['Data protection','Careful by design','shield']]
    .map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
  <p class="form-note" style="margin-top:16px">No compliance certifications are claimed. Certification roadmap <span class="req">[TO BE VALIDATED]</span>.</p>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Platform services','Service platform','プラットフォームサービス')}</span>
  <h2>${L('The visible application sits on shared rules and services.','Aplikasi yang terlihat berdiri di atas rule dan service bersama.','見えるアプリの下に共通ルール・サービスがあります。')}</h2>
  <div class="deep-grid">
    ${[
      ['01',L('Authentication & session','Authentication & session','認証・セッション'),L('Account access, session control, recovery, and secure handoff between public client and private application services.','Akses akun, session control, recovery, dan secure handoff antara public client dan private application service.','アカウント、セッション、復旧、公開クライアントと非公開サービス間の境界。')],
      ['02',L('Role & permission','Role & permission','ロール・権限'),L('Visibility and actions are constrained by user role, organization relationship, purpose, and consent.','Visibility dan action dibatasi oleh role, hubungan organisasi, purpose, dan consent.','役割、組織関係、目的、同意で閲覧・操作を制御。')],
      ['03',L('Localization','Localization','ローカライズ'),L('Bahasa Indonesia, English, and Japanese are treated as full interface contexts, not a one-off translation overlay.','Bahasa Indonesia, English, dan Japanese diperlakukan sebagai full interface context, bukan overlay translation sesaat.','インドネシア語・英語・日本語を完全なUI文脈として扱います。')],
      ['04',L('Knowledge & retrieval','Knowledge & retrieval','ナレッジ・検索'),L('Relevant guidebook and operational knowledge can ground assistant answers with source and freshness metadata.','Guidebook dan operational knowledge yang relevan dapat menjadi grounding answer dengan source dan freshness metadata.','ガイド・業務ナレッジを根拠としてソース・更新性を持たせます。')],
      ['05',L('Audit & evidence','Audit & evidence','監査・証跡'),L('Operational transitions, important actions, and tool usage can remain traceable.','Operational transition, important action, dan tool usage dapat tetap traceable.','状態遷移・重要操作・ツール利用を追跡可能に。')],
      ['06',L('Integration boundary','Integration boundary','連携境界'),L('Existing systems can be connected progressively without turning every integration into product core logic.','Existing system dapat dihubungkan bertahap tanpa menjadikan setiap integration sebagai core logic produk.','既存システムを段階連携し、個別連携をコアロジック化しません。')]
    ].map(([n,t,p])=>`<div class="deep-card"><div class="num">${n}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Platform deep dives','Detail platform','プラットフォーム詳細')}</span>
  <h2>${L('Open each technical topic as a separate page.','Buka setiap topik teknis sebagai halaman terpisah.','技術トピックごとに専用ページへ。')}</h2>
  <div class="page-links">
    <a href="#/emenda-assistant" data-nav class="page-link-card">${ic('bolt')}<b>${L('Emenda Assistant','Emenda Assistant','Emendaアシスタント')}</b><span>${L('Discover–Understand–Act–Outcome, knowledge, sources, memory, permissions, and safe degradation.','Discover–Understand–Act–Outcome, knowledge, source, memory, permission, dan safe degradation.','発見・理解・行動・成果、ナレッジ、ソース、メモリ、権限、安全な縮退。')}</span></a>
    <a href="#/architecture" data-nav class="page-link-card">${ic('layers')}<b>${L('Architecture','Arsitektur','アーキテクチャ')}</b><span>${L('React/Vite/TypeScript/Tailwind, Node.js, Supabase, Hostinger VPS, API and AI boundaries.','React/Vite/TypeScript/Tailwind, Node.js, Supabase, Hostinger VPS, API dan AI boundary.','React/Vite/TypeScript/Tailwind、Node.js、Supabase、Hostinger VPS、API・AI境界。')}</span></a>
    <a href="#/security-privacy" data-nav class="page-link-card">${ic('shield')}<b>${L('Security & Privacy','Security & Privacy','セキュリティ・プライバシー')}</b><span>${L('Worker-owned identity, organization isolation, permissions, consent, content integrity, and auditability.','Worker-owned identity, organization isolation, permission, consent, content integrity, dan auditability.','労働者主体ID、組織分離、権限、同意、原文保持、監査。')}</span></a>
  </div>
</div></section>`;
