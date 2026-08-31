/* product  —  PAGES.product
   Merged from 3 original layers (lines 1325, 2082, 2780). */
PAGES.product=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Product</span>
  <h1>One platform. Multiple journeys.</h1>
  <p>Emenda connects identity, daily operations, reports, communication, support, and AI assistance into a single system — so nothing falls between the cracks.</p>
</div></section>

<section class="sec" id="lifecycle"><div class="wrap">
  <span class="eyebrow">Follow-up lifecycle</span>
  <h2>From a report to a resolved, evidenced outcome.</h2>
  <p class="lede">The signature of Emenda: every item raised in the field travels one connected lifecycle. Each step carries an owner, a timestamp, a status, and the conversation & evidence behind it.</p>
  ${spine()}
  <div class="grid g4" style="margin-top:30px">
    ${[['Owner','Every step has a responsible person','user'],['Timestamp','When it happened is recorded','clip'],['Status','Visible to both sides','eye'],['Evidence','Conversation & proof attached','shield']]
    .map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted" id="modules"><div class="wrap">
  <span class="eyebrow">Modules</span>
  <h2>Nine connected pillars — not nine separate tools.</h2>
  <div class="grid g3" style="margin-top:34px">
    ${[['01','Identity','user','EMENDA ID, profile & personal details'],['02','Work & Career','route','Employment, CV & Japan readiness'],['03','Daily Operations','clip','Daily reports & field activity'],['04','Reports & Follow-up','report','Structured, tracked to outcome'],['05','Communication','chat','In-context, cross-language'],['06','Support & Knowledge','book','Guidance & company knowledge'],['07','AI Assistance','bolt','Context-aware help across the app'],['08','Organization Management','building','Roles, config & oversight'],['09','Evidence & History','shield','Auditable trail of everything']]
    .map(([n,t,i,p])=>`<div class="card hover reveal">${ic(i)}<span class="cn">${n}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Why Emenda</span>
  <h2>Not another chat app, form tool, or standalone AI.</h2>
  <p class="lede">Emenda’s difference is the connection between identity, operational work, communication, follow-up, and assistance — with the worker remaining a first-class subject of the system.</p>
  <div class="grid g4" style="margin-top:30px">
    <div class="card reveal">${ic('user')}<h3>Worker-centered</h3><p>Identity, career history, support, and work context are not reduced to a manager-only record.</p></div>
    <div class="card reveal">${ic('route')}<h3>Outcome-oriented</h3><p>Reports and requests continue through ownership, action, resolution, and closure.</p></div>
    <div class="card reveal">${ic('globe')}<h3>Language-aware</h3><p>Original content is preserved while translation helps people communicate across languages.</p></div>
    <div class="card reveal">${ic('shield')}<h3>Permission-aware</h3><p>Privacy, role, purpose, and consent shape what people and AI can access or act on.</p></div>
  </div>
</div></section>

<section class="sec tinted" id="screens"><div class="wrap">
  <span class="eyebrow">Product design</span>
  <h2>Use the fixed Worker mobile Figma as the design reference.</h2>
  <div class="figma-preview-grid" style="margin-bottom:34px">
    <div class="figma-preview-item reveal"><div class="screen-wrap"><img src="${FIGMA_PREVIEW.home}" alt="Worker Home Figma preview"></div><h3>Worker Home</h3><p>Direct Figma export from the fixed Worker Mobile experience.</p></div>
    <div class="figma-preview-item reveal"><div class="screen-wrap"><img src="${FIGMA_PREVIEW.report}" alt="Daily Report Figma preview"></div><h3>Daily Report</h3><p>Direct Figma export from the caregiver reporting flow.</p></div>
    <div class="figma-preview-item reveal"><div class="screen-wrap"><img src="${FIGMA_PREVIEW.assistant}" alt="Assistant Figma preview"></div><h3>Assistant</h3><p>Direct Figma export from the fixed Assistant conversation surface.</p></div>
  </div>
  <p class="lede">This microsite explains the product, system, workflows, architecture, and business context. It does not recreate the mobile UI with simplified mockups. For visual design review, open the official Figma source directly.</p>
  <div class="design-gateway">
    <div class="design-card emerald reveal">
      <span class="eyebrow" style="color:#a7d9c8">Official UI source</span>
      <h3 style="font-size:28px;margin-top:8px">Full Emenda · Worker Mobile Experience</h3>
      <p>The fixed mobile direction contains the real application screens and states used as the UI source of truth.</p>
      <div style="margin-top:24px"><a class="btn btn-p btn-lg" style="background:#fff;color:var(--emerald-deep)" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View Product Design ↗</a></div>
    </div>
    <div class="design-card reveal">
      <h3>What you can inspect in Figma</h3>
      <div class="screen-list">
        <div><b>Auth & onboarding</b><span>Language · OTP · PIN · recovery</span></div>
        <div><b>EMENDA ID</b><span>Identity · verification · QR · sharing</span></div>
        <div><b>Worker Home</b><span>Progress · readiness · employer state</span></div>
        <div><b>Career & preparation</b><span>CV · skills · Japan readiness</span></div>
        <div><b>Daily Reports</b><span>General · caregiver · warehouse · food service</span></div>
        <div><b>Chat & knowledge</b><span>Communication · Q&A · support</span></div>
        <div><b>Emenda Assistant</b><span>Conversation · voice · source · attachment</span></div>
      </div>
    </div>
  </div>
  <div class="external-note"><div>${ic('eye')}</div><div><b>Design rule for this microsite</b><span>When a presentation reader wants to inspect the interface itself, send them to Figma rather than showing a second, potentially inconsistent recreation of the product UI.</span></div></div>
</div></section>

<section class="sec tight"><div class="wrap"><div class="cta-band">
  <h2 style="font-size:clamp(24px,3vw,34px)">Explore the product in the right place.</h2>
  <p>Use the live Emenda site for the demo experience, or open Figma when you want to inspect the fixed mobile design in detail.</p>
  <div class="hero-cta"><a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">Open Live Demo ↗</a><a class="btn btn-s btn-lg" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View Product Design ↗</a></div>
</div></div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Capability map','Peta capability','機能マップ')}</span>
  <h2>${L('What the platform owns versus what remains configurable.','Apa yang menjadi fondasi platform dan apa yang bisa dikonfigurasi.','プラットフォーム共通部分と設定可能部分。')}</h2>
  <div class="cap-table-wrap reveal"><table class="cap-table">
    <thead><tr><th>${L('Layer','Layer','レイヤー')}</th><th>${L('Core responsibility','Tanggung jawab inti','コア責任')}</th><th>${L('Examples','Contoh','例')}</th><th>${L('Nature','Sifat','性質')}</th></tr></thead>
    <tbody>
      <tr><td>${L('Identity','Identity','ID')}</td><td>${L('Keep the worker as a durable subject separate from a time-bound employment relationship.','Menjaga worker sebagai subjek durable, terpisah dari hubungan kerja yang memiliki periode.','労働者IDを雇用関係とは分離し、継続性を持たせます。')}</td><td>EMENDA ID · profile · verification · QR/share</td><td>${statusBadge('core')}</td></tr>
      <tr><td>${L('Operations','Operasional','業務')}</td><td>${L('Capture structured daily work and make status visible across roles.','Mencatat pekerjaan harian secara terstruktur dan membuat status terlihat lintas role.','日々の業務を構造化し、役割間で状態を共有します。')}</td><td>Daily reports · templates · verification</td><td>${statusBadge('available')}</td></tr>
      <tr><td>${L('Follow-up','Tindak lanjut','フォローアップ')}</td><td>${L('Connect ownership, communication, decision, action, resolution, and evidence.','Menghubungkan ownership, komunikasi, keputusan, action, resolution, dan evidence.','担当・コミュニケーション・判断・対応・解決・証跡を接続します。')}</td><td>Issue thread · status · history</td><td>${statusBadge('core')}</td></tr>
      <tr><td>${L('Knowledge & AI','Knowledge & AI','ナレッジ・AI')}</td><td>${L('Help users discover, understand, act, and follow through using relevant knowledge.','Membantu user discover, understand, act, dan follow-through menggunakan knowledge yang relevan.','適切なナレッジで発見・理解・行動・成果まで支援します。')}</td><td>RAG · Assistant · source detail · permission gate</td><td>${statusBadge('mvp')}</td></tr>
      <tr><td>${L('Governance','Governance','ガバナンス')}</td><td>${L('Control roles, organization boundaries, content, permissions, and auditable history.','Mengontrol role, batas organisasi, content, permission, dan audit history.','権限・組織境界・コンテンツ・監査履歴を管理します。')}</td><td>Company Admin · Super Admin · governance</td><td>${statusBadge('mvp')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Product integrity rules','Aturan integritas produk','製品整合性ルール')}</span>
  <h2>${L('Some rules should stay true even when modules evolve.','Ada aturan yang harus tetap benar walaupun modul berkembang.','モジュールが進化しても維持する原則があります。')}</h2>
  <div class="deep-grid">
    ${[
      ['01',L('Worker-owned continuity','Kontinuitas milik worker','労働者主体の継続性'),L('Identity and portable professional history do not disappear simply because an employer relation changes.','Identity dan professional history yang portable tidak hilang hanya karena hubungan employer berubah.','雇用先が変わってもIDと職歴の継続性を保ちます。')],
      ['02',L('Original content stays intact','Konten original tetap utuh','原文を保持'),L('Translation, transcription, and AI summaries are layers; they do not silently replace the original record.','Translation, transcription, dan AI summary adalah layer tambahan; tidak mengganti original record diam-diam.','翻訳・文字起こし・AI要約は追加レイヤーであり、原文を置き換えません。')],
      ['03',L('No dead-end submission','Tidak berhenti di submit','提出で終わらない'),L('A report or request should continue to ownership, status, action, resolution, and evidence where the workflow requires it.','Laporan atau request harus berlanjut ke ownership, status, action, resolution, dan evidence bila workflow membutuhkannya.','報告・依頼を担当、状態、対応、解決、証跡までつなげます。')],
      ['04',L('Consent before sensitive action','Consent sebelum action sensitif','機微な操作は同意後'),L('AI-assisted capabilities such as location, call, email, SMS, calendar, and contacts require explicit permission.','Capability AI seperti location, call, email, SMS, calendar, dan contacts memerlukan explicit permission.','位置情報・通話・メール・SMS・カレンダー・連絡先は明示同意を必要とします。')],
      ['05',L('One assistant identity','Satu identity assistant','一つのアシスタント'),L('Users interact with Emenda Assistant, not a collection of exposed internal specialist agents.','User berinteraksi dengan Emenda Assistant, bukan kumpulan specialist agent internal.','ユーザー向けはEmenda Assistant一つに統一します。')],
      ['06',L('Honest maturity labels','Label maturity yang jujur','成熟度を正直に表示'),L('Available, MVP/in-progress, and planned capabilities should be distinguished rather than presented as equally complete.','Capability Available, MVP/in-progress, dan planned harus dibedakan, bukan ditampilkan seolah sama-sama selesai.','利用可能・MVP/開発中・計画中を明確に分けます。')]
    ].map(([n,t,p])=>`<div class="deep-card"><div class="num">${n}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>
<section class="sec tinted" id="product-entities"><div class="wrap">
  <span class="eyebrow">${L('Core product entities','Entity inti produk','コアentity')}</span>
  <h2>${L('The product is organized around durable entities, not isolated screens.','Produk disusun berdasarkan entity yang durable, bukan screen yang terpisah-pisah.','screen単位ではなくdurable entityを中心に構成。')}</h2>
  <div class="data-strip">
    <div class="data-box"><b>Worker / EMENDA ID</b><span>${L('Durable identity that can exist before, during, and after an employment connection.','Identity durable yang dapat ada sebelum, selama, dan setelah employment connection.','雇用接続前・中・後も継続するidentity。')}</span></div>
    <div class="data-box"><b>${L('Organization relationship','Hubungan organisasi','組織relationship')}</b><span>${L('Time-bound connection that determines operational visibility and responsibility.','Connection berbatas waktu yang menentukan operational visibility dan responsibility.','期間限定connectionでoperational visibility・responsibilityを決定。')}</span></div>
    <div class="data-box"><b>${L('Operational record','Operational record','Operational record')}</b><span>${L('Reports, communication, follow-up, verification, decisions, timestamps, and evidence.','Report, communication, follow-up, verification, decision, timestamp, dan evidence.','report、communication、follow-up、verification、decision、timestamp、evidence。')}</span></div>
    <div class="data-box"><b>${L('Consent & permission','Consent & permission','Consent・permission')}</b><span>${L('Durable record of what can be viewed or acted on, by whom, for what purpose.','Record durable tentang apa yang dapat dilihat atau dilakukan, oleh siapa, untuk purpose apa.','誰が何の目的で閲覧・操作できるかを記録。')}</span></div>
  </div>
</div></section>
<section class="sec" id="product-state"><div class="wrap">
  <span class="eyebrow">${L('Cross-product state model','Model state lintas produk','横断state model')}</span>
  <h2>${L('Important actions should have explicit state, not ambiguous UI.','Action penting harus punya state eksplisit, bukan UI yang ambigu.','重要actionは曖昧なUIではなく明示stateを持つ。')}</h2>
  <div class="spec-table-wrap"><table class="spec-table"><thead><tr><th>${L('Object','Objek','Object')}</th><th>${L('Typical states','State umum','主なstate')}</th><th>${L('Why state matters','Mengapa state penting','stateの意味')}</th><th>${L('Who sees it','Siapa yang melihat','閲覧者')}</th></tr></thead><tbody>
    <tr><td>${L('Identity verification','Verifikasi identity','Identity verification')}</td><td>unverified · pending · verified · needs review · failed</td><td>${L('Prevents verification from being treated as a yes/no decoration.','Mencegah verification diperlakukan sekadar dekorasi yes/no.','verificationを単純yes/no表示にしない。')}</td><td>Worker · permitted admin</td></tr>
    <tr><td>${L('Employment connection','Employment connection','Employment connection')}</td><td>requested · accepted · active · ended · reconnectable</td><td>${L('Separates durable identity from employer relationship.','Memisahkan durable identity dari employer relationship.','durable identityとemployer relationshipを分離。')}</td><td>Worker · Organization</td></tr>
    <tr><td>${L('Daily report','Daily report','Daily report')}</td><td>draft · review · submitting · submitted · verified · failed</td><td>${L('Makes submission and manager verification visible to both sides.','Membuat submission dan manager verification terlihat oleh kedua sisi.','submission・manager verificationを双方に可視化。')}</td><td>Worker · Manager</td></tr>
    <tr><td>${L('Follow-up','Follow-up','Follow-up')}</td><td>open · owned · waiting · in progress · resolved · closed</td><td>${L('Prevents issues from disappearing after the initial report/message.','Mencegah issue hilang setelah report/message awal.','初回report/message後にissueが消えない。')}</td><td>Relevant roles</td></tr>
    <tr><td>${L('AI action','AI action','AI action')}</td><td>proposed · permission required · approved · executing · success · failed</td><td>${L('Sensitive actions never look completed before permission and execution succeed.','Action sensitif tidak terlihat selesai sebelum permission dan execution berhasil.','permission・execution成功前に完了扱いしない。')}</td><td>User · audit trail</td></tr>
  </tbody></table></div>
</div></section>
<section class="sec tinted" id="product-boundaries"><div class="wrap">
  <span class="eyebrow">${L('Product boundaries','Batas produk','Product boundary')}</span>
  <h2>${L('What should remain stable while features evolve.','Apa yang harus tetap stabil saat feature berkembang.','featureが進化しても維持するもの。')}</h2>
  <div class="decision-band">
    <div class="decision-box good"><h3>${L('Stable core','Core yang stabil','Stable core')}</h3><p>${L('Worker-owned identity, explicit employment relationship, original-language integrity, role/purpose access, follow-up to outcome, evidence/history, and one user-facing Assistant identity.','Worker-owned identity, explicit employment relationship, original-language integrity, role/purpose access, follow-up sampai outcome, evidence/history, dan satu user-facing Assistant identity.','worker-owned identity、employment relationship、原文保持、role/purpose access、outcome follow-up、evidence/history、single Assistant。')}</p></div>
    <div class="decision-box caution"><h3>${L('Configurable / evidence-dependent','Configurable / bergantung evidence','Configurable / evidence-dependent')}</h3><p>${L('Industry templates, native manager mobile need, advanced health/life data, community, score/coin, additional integrations, and automation depth should expand only when user, legal, and business evidence supports them.','Industry template, kebutuhan native manager mobile, advanced health/life data, community, score/coin, additional integration, dan automation depth berkembang hanya bila didukung user, legal, dan business evidence.','industry template、manager mobile、health/life data、community、score/coin、integration、automationはevidenceに基づき拡張。')}</p></div>
  </div>
  ${sourcePanel('The UX research baseline explicitly separates architecture directions and business hypotheses from validated user needs.','Baseline UX research secara eksplisit memisahkan architecture direction dan business hypothesis dari validated user need.','UX research baselineはarchitecture direction・business hypothesisとvalidated user needを明確に分離。')}
</div></section>`;
