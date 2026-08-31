/* feature-catalog  —  PAGES.featureCatalog
   Merged from 2 original layers (lines 2499, 2813). */
PAGES.featureCatalog=()=>`
<section class="phero"><div class="wrap catalog-hero">
  <div>
    <span class="eyebrow">${L('Product / Feature Catalog','Produk / Katalog Fitur','製品 / 機能カタログ')}</span>
    <h1>${L('The complete product is larger than the nine-pillar overview.','Produk lengkap jauh lebih besar daripada overview sembilan pilar.','製品全体は9つの柱という概要よりも広い機能体系を持ちます。')}</h1>
    <p>${L('The frozen Product Feature Catalog v1.0 r10 is the scope reference across Product, Design, Engineering, QA, and stakeholders. It separates approved features from candidates and maps release/status explicitly.','Product Feature Catalog v1.0 r10 yang sudah frozen menjadi acuan scope untuk Product, Design, Engineering, QA, dan stakeholder. Dokumen ini memisahkan fitur approved dari candidate serta memetakan release/status secara eksplisit.','凍結済みProduct Feature Catalog v1.0 r10は、Product・Design・Engineering・QA・stakeholder共通のスコープ基準です。ApprovedとCandidateを分離し、ReleaseとStatusを明示します。')}</p>
  </div>
  <div class="catalog-summary">
    <div class="catalog-stat"><b>59</b><span>${L('Approved features in the current catalog baseline.','Fitur approved pada baseline katalog saat ini.','現行カタログのApproved機能。')}</span></div>
    <div class="catalog-stat"><b>27</b><span>${L('Candidate features awaiting explicit Product Owner ruling.','Fitur candidate yang menunggu keputusan eksplisit Product Owner.','Product Owner判断待ちのCandidate機能。')}</span></div>
    <div class="catalog-stat"><b>34</b><span>${L('Approved features allocated to R1.','Fitur approved yang masuk R1.','R1に割り当てられたApproved機能。')}</span></div>
    <div class="catalog-stat"><b>15</b><span>${L('Official module groups in the catalog.','Kelompok modul resmi dalam katalog.','公式モジュールグループ。')}</span></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Official module inventory','Inventory modul resmi','公式モジュール一覧')}</span>
  <h2>${L('Approved scope, candidates, releases, and maturity in one view.','Approved scope, candidate, release, dan maturity dalam satu view.','Approved、Candidate、Release、成熟度を一つの表で確認。')}</h2>
  <div class="module-list">
    <div class="module-row head"><span>#</span><span>${L('Module','Modul','モジュール')}</span><span>${L('What it covers','Cakupan','概要')}</span><span>${L('Approved','Approved','Approved')}</span><span>${L('Release','Release','Release')}</span><span>${L('Status','Status','Status')}</span></div>
    ${[
      ['01','Identity & Access',12,L('Lifetime EMENDA ID, authentication, language, employment connection, resignation continuity, re-connection, export, self-registration.','Lifetime EMENDA ID, authentication, bahasa, employment connection, resignation continuity, re-connection, export, self-registration.','Lifetime EMENDA ID、認証、言語、雇用接続、退職継続、再接続、export、self-registration。'),'R1–R3+','MVP → Vision'],
      ['02','Organization Management',3,L('Manager authentication, organization creation, invite issuance and management.','Manager authentication, organization creation, invite issuance dan management.','管理者認証、組織作成、招待発行・管理。'),'R1','MVP'],
      ['03','Communication',10,L('Worker messaging, dual bubbles, original retention, translation preview, intent tags, manager reply, receipts, voice input.','Worker messaging, dual bubble, original retention, translation preview, intent tag, manager reply, receipt, voice input.','労働者メッセージ、dual bubble、原文保持、翻訳preview、intent tag、管理者返信、既読、音声入力。'),'R1','MVP'],
      ['04','Translation',4,L('Commercial MT, care glossary, fourth-language expansion, future context translation.','Commercial MT, care glossary, fourth-language expansion, future context translation.','商用MT、介護glossary、第4言語、将来の文脈翻訳。'),'R1–R3','MVP → Roadmap'],
      ['05','Work Records',6,L('Care daily report, free text + preview, confirmation, manager report list, unified timeline, construction template.','Care daily report, free text + preview, confirmation, manager report list, unified timeline, construction template.','介護日報、自由記述＋preview、確認、管理者report list、統合timeline、建設template。'),'R1–R2','MVP → Roadmap'],
      ['06','Work Log',3,L('Structured professional history, certifications, worker profile view.','Structured professional history, certification, worker profile view.','構造化職歴、資格、worker profile。'),'R2–R3','Roadmap'],
      ['07','Measurement & Analytics',3,L('Platform event logging, KPI computation, manager KPI strip.','Platform event logging, KPI computation, manager KPI strip.','イベントlog、KPI計算、manager KPI strip。'),'R1','MVP'],
      ['08','Consent & Privacy',5,L('Onboarding disclosure, consent recording, visibility banner, consent ledger, purpose-scoped re-consent.','Onboarding disclosure, consent recording, visibility banner, consent ledger, purpose-scoped re-consent.','onboarding disclosure、consent記録、visibility banner、consent ledger、目的別再同意。'),'R1–R2','MVP → Roadmap'],
      ['09','Notifications',2,L('In-app unread indicators and push notifications.','In-app unread indicator dan push notification.','アプリ内未読表示、push通知。'),'R1–R2','MVP → Roadmap'],
      ['10','Administration',1,L('Super Admin internal console.','Super Admin internal console.','Super Admin内部console。'),'R1±','MVP-adjacent'],
      ['11','Health Log',4,L('Device health integration, wearable × work insights, stress-check worker and employer surfaces.','Device health integration, wearable × work insight, stress-check worker dan employer surface.','health device連携、wearable×work、stress check worker/employer。'),'R3','Roadmap'],
      ['12','Life Log',1,L('Worker-private life records.','Worker-private life record.','worker-private life record。'),'R3+','Vision'],
      ['13','EMENDA Score',2,L('Worker-controlled score and reputation concepts.','Worker-controlled score dan reputation concept.','worker-controlled score、reputation concept。'),'R4','Vision'],
      ['14','EMENDA Coin',1,L('Future value-circulation layer with incentive-law constraints.','Future value-circulation layer dengan constraint incentive law.','将来のvalue circulation layer。'),'R4','Vision'],
      ['15','External Connections',2,L('Credit-layer connection and backward data import. Connection, not transfer.','Credit-layer connection dan backward data import. Connection, bukan transfer.','credit layer接続、backward data import。データ移転ではなく接続。'),'R2–R4','Roadmap → Vision']
    ].map(([n,t,c,d,r,s])=>`<div class="module-row"><span class="mn">${n}</span><span class="mt">${t}</span><span class="md">${d}</span><span class="count">${c}</span><span class="rel">${r}</span><span class="st">${s}</span></div>`).join('')}
  </div>
  <p class="note-source">${L('Catalog baseline: Product Feature Catalog v1.0 r10, dated 5 Aug 2026. Candidate features are not approved scope until explicitly ruled.','Baseline katalog: Product Feature Catalog v1.0 r10, tanggal 5 Agustus 2026. Candidate feature bukan approved scope sampai diputuskan secara eksplisit.','カタログ基準：Product Feature Catalog v1.0 r10（2026-08-05）。Candidateは明示判断されるまでApproved scopeではありません。')}</p>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Release logic','Logika release','Releaseロジック')}</span>
  <h2>${L('MVP, roadmap, and vision should not be presented as the same maturity.','MVP, roadmap, dan vision tidak boleh ditampilkan seolah maturity-nya sama.','MVP・Roadmap・Visionを同じ成熟度として扱いません。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">R1</div><h3>${L('Operational entry layer','Entry layer operasional','運用入口')}</h3><p>${L('Identity/auth, organization setup, communication, translation, care reporting, measurement, core consent/privacy, and essential admin surfaces.','Identity/auth, organization setup, communication, translation, care reporting, measurement, core consent/privacy, dan admin surface penting.','ID/auth、組織設定、communication、translation、介護report、measurement、consent/privacy、admin。')}</p></div>
    <div class="deep-card"><div class="num">R2</div><h3>${L('Continuity & deeper records','Kontinuitas & record lebih dalam','継続性・記録深化')}</h3><p>${L('Worker timeline, professional history, notifications, consent ledger, and selected external/data connections.','Worker timeline, professional history, notification, consent ledger, dan selected external/data connection.','worker timeline、professional history、notification、consent ledger、外部/data接続。')}</p></div>
    <div class="deep-card"><div class="num">R3–R4</div><h3>${L('Data enrichment & future layers','Data enrichment & future layer','データ拡張・将来レイヤー')}</h3><p>${L('Context translation, health/wearable connections, life log, Score, Coin, and broader external connection concepts.','Context translation, health/wearable connection, life log, Score, Coin, dan broader external connection.','文脈翻訳、health/wearable、life log、Score、Coin、外部接続。')}</p></div>
  </div>
</div></section>
${detailedCTA()}
<section class="sec" id="catalog-governance"><div class="wrap">
  <span class="eyebrow">${L('Catalog governance','Governance katalog','Catalog governance')}</span>
  <h2>${L('A feature is not in scope just because it appears in a discussion or Figma exploration.','Feature tidak otomatis in scope hanya karena muncul di diskusi atau eksplorasi Figma.','discussionやFigma探索に出ただけでscopeにはならない。')}</h2>
  <div class="matrix-grid">
    <div class="mh">${L('Status','Status','Status')}</div><div class="mh">${L('Meaning','Arti','意味')}</div><div class="mh">${L('Can be promised?','Boleh dijanjikan?','約束可能か')}</div><div class="mh">${L('Required action','Action yang dibutuhkan','必要action')}</div>
    <div class="mr">Approved</div><div>${L('Product Owner has accepted the feature into catalog scope.','Product Owner sudah menerima feature ke catalog scope.','Product Ownerがcatalog scopeへ承認。')}</div><div>${L('Only according to its release/maturity label.','Hanya sesuai label release/maturity.','release/maturity labelの範囲のみ。')}</div><div>${L('Design, build, QA, and document to the approved behavior.','Design, build, QA, dan dokumentasikan sesuai approved behavior.','approved behaviorに沿ってdesign/build/QA。')}</div>
    <div class="mr">Candidate</div><div>${L('A potentially useful idea awaiting explicit ruling.','Ide yang berpotensi berguna dan menunggu keputusan eksplisit.','明示判断待ちの候補。')}</div><div>${L('No. Do not sell or present as committed.','Tidak. Jangan dijual atau ditampilkan sebagai committed.','不可。committedとして提示しない。')}</div><div>${L('Research, feasibility, privacy/legal, and business-value validation as relevant.','Research, feasibility, privacy/legal, dan business-value validation sesuai kebutuhan.','research、feasibility、privacy/legal、business validation。')}</div>
    <div class="mr">Roadmap / Vision</div><div>${L('Direction beyond immediate MVP maturity.','Arah di luar maturity MVP langsung.','即時MVPを超える方向性。')}</div><div>${L('Only as future direction with clear labeling.','Hanya sebagai future direction dengan label jelas.','future directionとして明示。')}</div><div>${L('Protect current product from future-scope leakage.','Lindungi current product dari future-scope leakage.','future scopeのcurrent product混入を防止。')}</div>
  </div>
</div></section>
<section class="sec tinted" id="catalog-rules"><div class="wrap">
  <span class="eyebrow">${L('Scope decision rules','Aturan keputusan scope','Scope判断ルール')}</span>
  <h2>${L('High-risk or speculative modules have a higher evidence bar.','Module berisiko tinggi atau spekulatif membutuhkan evidence bar yang lebih tinggi.','高リスク・speculative moduleは高いevidence barを要求。')}</h2>
  <div class="detail-grid">
    <div class="detail-card span6"><div class="code">HEALTH / LIFE</div><h3>${L('Least-sensitive-data rule','Aturan least-sensitive data','Least-sensitive-data rule')}</h3><p>${L('Do not integrate health/life data merely because the data exists. A validated job-to-be-done, concrete user benefit, exact field need, consent willingness, access rule, and technical feasibility are required first.','Jangan integrasikan health/life data hanya karena datanya tersedia. Harus ada validated job-to-be-done, concrete user benefit, exact field need, consent willingness, access rule, dan technical feasibility.','health/life dataは存在するだけで連携しない。validated JTBD、benefit、field、consent、access、feasibilityが必要。')}</p></div>
    <div class="detail-card span6"><div class="code">COMMUNITY / REWARD</div><h3>${L('Prove supply and demand first','Buktikan supply dan demand dulu','Supply-demandを先に証明')}</h3><p>${L('Community/Q&A and reward economy should not be built before a concierge/manual pilot proves recurring unanswered questions, reliable answer supply, trust, and moderation feasibility.','Community/Q&A dan reward economy tidak dibangun sebelum concierge/manual pilot membuktikan recurring unanswered question, reliable answer supply, trust, dan moderation feasibility.','community/Q&A・rewardはconcierge pilotでquestion supply、answer supply、trust、moderationを検証後。')}</p></div>
    <div class="detail-card span6"><div class="code">DASHBOARD</div><h3>${L('No vanity metrics','Tidak ada vanity metric','Vanity metric禁止')}</h3><p>${L('A manager/executive metric belongs on the product only if it has a decision use-case, owner, baseline, reliable event source, threshold, and clear action.','Metric manager/executive masuk product hanya jika punya decision use-case, owner, baseline, reliable event source, threshold, dan clear action.','metricはdecision use-case、owner、baseline、reliable event、threshold、actionがある場合のみ。')}</p></div>
    <div class="detail-card span6"><div class="code">MOBILE</div><h3>${L('Do not assume device strategy','Jangan asumsi device strategy','Device strategyを仮定しない')}</h3><p>${L('Native manager mobile should be justified by away-from-desk ratio, device usage, urgency, response delay, and task frequency instead of preference alone.','Native manager mobile dibenarkan oleh away-from-desk ratio, device usage, urgency, response delay, dan task frequency, bukan preference saja.','manager mobileはaway-from-desk、device、urgency、response delay、frequencyで判断。')}</p></div>
  </div>
</div></section>`;
