/* home  —  PAGES.home
   Merged from 5 original layers (lines 1154, 2035, 2749, 2765, 4500). */
PAGES.home=()=>`
<section class="hero">
  <div class="wrap"><div class="hero-in">
    <div>
      <span class="hero-badge">● Worker-centered ecosystem · Indonesia ↔ Japan</span>
      <h1>Connecting people, work, and support in one ecosystem.</h1>
      <p class="h-sub">EMENDA connects worker identity, daily work, communication, follow-up, and support in one worker-centered ecosystem — with one contextual AI assistant across the journey.</p>
      <div class="hero-cta">
        <a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">Open Live Demo ↗</a>
        <a href="#/product" class="btn btn-s btn-lg" data-page="product">Explore the product</a>
      </div>
      <div class="hero-trust">
        <div class="ti"><b>3 languages</b>Bahasa Indonesia · English · 日本語</div>
        <div class="ti"><b>4 roles</b>Worker · Manager · Employer · Admin</div>
        <div class="ti"><b>1 journey</b>Identity → work → support → outcome</div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="figma-hero-preview reveal">
        <a class="figma-phone-card hero-main" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener" aria-label="Open Worker Home design in Figma">
          <span class="figma-source-pill">FROM FIGMA</span>
          <img src="${FIGMA_PREVIEW.home}" alt="Emenda Worker Home mobile screen from Figma">
          <div class="fp-label"><b>Worker Home</b><span>Fixed mobile UI ↗</span></div>
        </a>
      </div>
    </div>
  </div></div>
</section>

<section class="sec tight tinted">
  <div class="wrap">
    <div class="stats reveal">
      <div class="stat"><b>09</b><span class="u">Connected pillars</span><span class="d">Identity through evidence & history</span></div>
      <div class="stat"><b>01</b><span class="u">Emenda Assistant</span><span class="d">One contextual AI identity across the journey</span></div>
      <div class="stat"><b>03</b><span class="u">Interface languages</span><span class="d">Bahasa Indonesia · English · 日本語</span></div>
      <div class="stat"><b>End-to-end</b><span class="u">Follow-up lifecycle</span><span class="d">Report → action → resolution → evidence</span></div>
    </div>
  </div>
</section>


<section class="sec figma-preview-section">
  <div class="wrap">
    <span class="eyebrow">Product preview</span>
    <h2>Actual screens from the fixed Worker mobile Figma.</h2>
    <p class="lede">These screenshots are rendered directly from the fixed Figma frames. They are shown without blur, overlay, or recreated mockups; open Figma for the complete states and flows.</p>
    <div class="figma-preview-grid">
      <div class="figma-preview-item reveal">
        <div class="screen-wrap"><img src="${FIGMA_PREVIEW.home}" alt="Worker Home Figma preview"></div>
        <h3>Worker Home</h3>
        <p>Worker-owned identity, employer connection, profile completeness, Japan preparation, records, knowledge, support, and Emenda Coin.</p>
        <a class="figma-link" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View in Figma ↗</a>
      </div>
      <div class="figma-preview-item reveal">
        <div class="screen-wrap"><img src="${FIGMA_PREVIEW.report}" alt="New Daily Report caregiver template Figma preview"></div>
        <h3>New Daily Report</h3>
        <p>Caregiver reporting example with report status, resident condition, meal, care notes, quick notes, and a review-before-submit flow.</p>
        <a class="figma-link" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View report flow ↗</a>
      </div>
      <div class="figma-preview-item reveal">
        <div class="screen-wrap"><img src="${FIGMA_PREVIEW.assistant}" alt="Emenda Assistant conversation Figma preview"></div>
        <h3>Emenda Assistant</h3>
        <p>One contextual assistant surface for conversation, guidance, sources, voice/text input, next actions, and outcome-oriented follow-up.</p>
        <a class="figma-link" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View Assistant design ↗</a>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="eyebrow">The problem</span>
    <h2>Work is connected. The systems are <span class="amberword">not.</span></h2>
    <p class="lede">Communication, reports, and follow-up scatter across chat, paper, and phone calls. Organizations lose visibility; workers lose clarity.</p>
    <div class="grid g3" style="margin-top:34px">
      ${[['Scattered communication','Chats, calls & paper never talk to each other.'],['Reports without follow-up','A submitted report often has no clear next step.'],['Unclear ownership','No one knows who is responsible once an issue is raised.'],['Workers left guessing','No visibility into the status of a request.'],['Fragmented evidence','Proof & decisions scattered — hard to audit.'],['Added barriers','Foreign workers face language & admin hurdles.']]
      .map(([t,p])=>`<div class="card problem reveal"><h3>${t}</h3><p>${p}</p></div>`).join('')}
    </div>
    <div style="margin-top:26px"><a href="#/product" class="btn btn-ghost" data-page="product">See how Emenda solves this →</a></div>
  </div>
</section>

<section class="sec tinted">
  <div class="wrap">
    <span class="eyebrow">Product principles</span>
    <h2>Designed around the worker — without losing operational control.</h2>
    <p class="lede">Emenda is not built as a collection of disconnected features. Identity, work, communication, privacy, and assistance share one consistent product model.</p>
    <div class="principle-grid">
      <div class="principle reveal"><b>Worker-owned identity</b><span>Professional identity and portable history remain centered on the worker.</span></div>
      <div class="principle reveal"><b>Calm worker experience</b><span>Mobile-first flows keep daily actions clear, focused, and easy to complete.</span></div>
      <div class="principle reveal"><b>Structured operations</b><span>Reports, ownership, follow-up, decisions, and evidence remain traceable.</span></div>
      <div class="principle reveal"><b>Privacy by design</b><span>Role, purpose, consent, and data classification control visibility.</span></div>
      <div class="principle reveal"><b>One Emenda Assistant</b><span>One contextual assistant across the lifecycle — not separate AI bots.</span></div>
    </div>
  </div>
</section>

<section class="sec dark">
  <div class="wrap">
    <span class="eyebrow">The lifecycle</span>
    <h2>Every report runs one complete lifecycle.</h2>
    <p class="lede">Not a dead-end form. From the moment something is raised to the evidence stored at the end — one connected thread, with an owner and a status at every step.</p>
    ${spine(true)}
    <div style="margin-top:26px"><a href="#/follow-up-lifecycle" class="btn btn-p" data-nav>Explore the lifecycle →</a></div>
  </div>
</section>

<section class="sec">
  <div class="wrap center">
    <span class="eyebrow">The ecosystem</span>
    <h2>One connected ecosystem for workers and organizations.</h2>
    <p class="lede">Four roles, an AI assistance layer, and shared knowledge — all connected around one operating layer.</p>
  </div>
  <div class="wrap"><div class="eco reveal" id="ecoHome"></div></div>
</section>

<section class="sec tinted">
  <div class="wrap center">
    <span class="eyebrow">Who it's for</span>
    <h2>Built for every role in the workforce.</h2>
  </div>
  <div class="wrap"><div class="grid g4" style="margin-top:34px">
    ${[
      ['Worker','user','Clarity, support & a companion for work and daily life.','#/for-workers'],
      ['Manager','users','Visibility, structured follow-up & decision support.','#/for-managers'],
      ['Employer','building','Operational control, communication & evidence.','#/for-organizations'],
      ['Admin','gear','Governance, configuration & oversight.','#/for-organizations']
    ].map(([t,i,p,url])=>`<a class="card hover clickable reveal" href="${url}" data-nav>${ic(i)}<h3>${t}</h3><p>${p}</p></a>`).join('')}
  </div></div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="eyebrow">One real journey</span>
    <h2>A report should end in an outcome — not in an inbox.</h2>
    <p class="lede">One example of how Emenda connects worker and organization without losing context along the way.</p>
    <div class="story">
      <div class="story-step reveal"><span class="num">01</span><b>Worker reports</b><p>A daily report or issue is submitted from the mobile app.</p></div>
      <div class="story-step reveal"><span class="num">02</span><b>Manager reviews</b><p>The responsible side sees what needs attention and why.</p></div>
      <div class="story-step reveal"><span class="num">03</span><b>Follow-up is owned</b><p>An owner, status, and next action are attached to the same thread.</p></div>
      <div class="story-step reveal"><span class="num">04</span><b>Worker stays informed</b><p>Status and communication remain visible instead of disappearing into another channel.</p></div>
      <div class="story-step reveal"><span class="num">05</span><b>Outcome is recorded</b><p>Resolution, closure, and supporting history stay connected.</p></div>
    </div>
  </div>
</section>

<section class="sec tinted">
  <div class="wrap">
    <div class="ba">
      <div class="col before"><h4>Before Emenda</h4><ul>
        ${['Multiple disconnected tools','Manual, ad-hoc follow-up','Fragmented communication','Unclear responsibility','No shared visibility','Scattered evidence'].map(x=>`<li>${x}</li>`).join('')}
      </ul></div>
      <div class="col after"><h4>With Emenda</h4><ul>
        ${['One connected workflow','Tracked, owned follow-up','Structured communication','Clear ownership','Shared visibility','Auditable history'].map(x=>`<li>${x}</li>`).join('')}
      </ul></div>
    </div>
  </div>
</section>

<section class="sec tight">
  <div class="wrap"><div class="cta-band">
    <h2 style="font-size:clamp(26px,3.4vw,38px)">Work should not disappear between systems.</h2>
    <p>One worker. One journey. One connected ecosystem — connecting people, organizations, communication, action, and support.</p>
    <div class="hero-cta">
      <a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">Open Live Demo ↗</a>
      <a href="#/platform" class="btn btn-s btn-lg" data-page="platform">See the platform</a>
    </div>
  </div></div>
</section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Product proof','Bukti produk','製品の実装状況')}</span>
  <h2>${L('A real implementation behind the story.','Ada implementasi nyata di balik ceritanya.','ストーリーの裏に、実際の実装があります。')}</h2>
  <p class="lede">${L('The current documented frontend snapshot covers a broad route and Figma-state inventory with automated browser validation. These figures describe implementation coverage, not customer adoption.','Snapshot frontend yang terdokumentasi saat ini mencakup inventory route dan state Figma yang luas serta validasi browser otomatis. Angka ini menunjukkan coverage implementasi, bukan jumlah customer.','現在のフロントエンド実装は、多数のルート・Figma状態・ブラウザ自動テストで検証されています。これらは導入社数ではなく実装カバレッジです。')}</p>
  <div class="metric-strip reveal">
    <div><b>158</b><span>${L('Leaf routes registered in the router: worker 71 · manager 47 · public/access 12 · auth 11 · admin 11 · onboarding 6.','Route leaf yang terdaftar di router: worker 71 · manager 47 · public/access 12 · auth 11 · admin 11 · onboarding 6.','ルーターに登録されたリーフ：労働者71・管理者47・公開/アクセス12・認証11・管理11・オンボーディング6。')}</span></div>
    <div><b>~630</b><span>${L('Figma states covered in the documented design-to-frontend inventory.','State Figma dalam inventory desain-ke-frontend terdokumentasi.','デザインからフロントエンドへの対応表で扱うFigma状態。')}</span></div>
    <div><b>235</b><span>${L('Playwright checks across 8 spec files: routes, i18n, landing, auth, canonical mobile, and cross-role flows.','Check Playwright di 8 file spec: route, i18n, landing, auth, canonical mobile, dan cross-role flow.','8スペックファイルのPlaywright検証：ルート、i18n、ランディング、認証、正典モバイル、役割横断フロー。')}</span></div>
    <div><b>3</b><span>${L('Interface languages: Bahasa Indonesia, English, and Japanese.','Bahasa antarmuka: Indonesia, English, dan Japanese.','UI言語：インドネシア語・英語・日本語。')}</span></div>
  </div>
  <p class="status-note">${L('Implementation snapshot should be synchronized with the latest release before external publication.','Snapshot implementasi perlu disinkronkan dengan release terbaru sebelum dipublikasikan secara eksternal.','外部公開前に最新リリースと同期してください。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Who Emenda serves','Siapa yang dilayani Emenda','Emendaの対象')}</span>
  <h2>${L('Three sides of the same workforce relationship.','Tiga sisi dari hubungan workforce yang sama.','同じ労働関係を支える3つの視点。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">01 · WORKER</div><h3>${L('Foreign workers','Worker asing','外国人労働者')}</h3><p>${L('A portable identity, clearer daily work, multilingual communication, support, knowledge, and visible outcomes.','Identity yang portable, pekerjaan harian lebih jelas, komunikasi multilingual, support, knowledge, dan outcome yang terlihat.','携行可能なID、明確な日々の業務、多言語コミュニケーション、支援、ナレッジ、見える成果。')}</p></div>
    <div class="deep-card"><div class="num">02 · OPERATION</div><h3>${L('Managers & receiving companies','Manager & perusahaan penerima','管理者・受入企業')}</h3><p>${L('Daily visibility, report verification, structured communication, issue ownership, follow-up, and evidence.','Visibilitas harian, verifikasi laporan, komunikasi terstruktur, ownership isu, follow-up, dan evidence.','日々の可視化、報告確認、構造化コミュニケーション、担当管理、フォローアップ、証跡。')}</p></div>
    <div class="deep-card"><div class="num">03 · GOVERNANCE</div><h3>${L('Organizations & administrators','Organisasi & administrator','組織・管理者')}</h3><p>${L('Role control, configuration, knowledge, templates, audit history, and scalable operating rules.','Kontrol role, konfigurasi, knowledge, template, audit history, dan aturan operasional yang scalable.','権限、設定、ナレッジ、テンプレート、監査履歴、スケーラブルな運用ルール。')}</p></div>
  </div>
</div></section>

<section class="sec dark"><div class="wrap">
  <span class="eyebrow">${L('Beyond Stage 1','Lebih jauh dari Stage 1','Stage 1の先へ')}</span>
  <h2>${L('The roadmap builds one compounding data and assistance layer.','Roadmap membangun satu layer data dan assistance yang terus bertambah nilainya.','ロードマップは、データと支援の価値を段階的に積み上げます。')}</h2>
  <div class="flow-rail" style="color:var(--ink)">
    <div><span class="n">STAGE 1</span><b>${L('Record & connect','Mencatat & menghubungkan','記録と接続')}</b><p>${L('Multilingual communication and operational records become the entry layer.','Komunikasi multilingual dan operational record menjadi entry layer.','多言語コミュニケーションと現場記録を入口にします。')}</p></div>
    <div><span class="n">STAGE 2</span><b>${L('Context translation','Context translation','文脈翻訳')}</b><p>${L('Go beyond literal translation by using work context, norms, and accumulated operational data.','Lebih dari terjemahan literal dengan memakai konteks kerja, norma, dan data operasional yang terkumpul.','直訳を超え、業務文脈・規範・蓄積データを活用します。')}</p></div>
    <div><span class="n">STAGE 3</span><b>${L('Data enrichment','Pengayaan data','データ拡張')}</b><p>${L('Future physical or condition data can enrich the work record after legal, privacy, and product validation.','Data fisik atau kondisi di masa depan dapat memperkaya work record setelah validasi legal, privacy, dan product.','将来的に身体・コンディションデータを法務・プライバシー・製品検証後に統合します。')}</p></div>
    <div><span class="n">STAGE 4</span><b>${L('Automation & behavior change','Automation & perubahan perilaku','自動化と行動変容')}</b><p>${L('Use accumulated context to automate repeatable operations and improve how work is carried out.','Gunakan context yang terkumpul untuk mengotomasi operasi berulang dan memperbaiki cara kerja.','蓄積した文脈を活用し、反復業務を自動化し現場行動を改善します。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Explore by topic','Jelajahi berdasarkan topik','トピック別に見る')}</span>
  <h2>${L('The homepage summarizes. The detail lives on dedicated pages.','Homepage merangkum. Detailnya ada di halaman khusus.','ホームは概要、詳細は専用ページへ。')}</h2>
  <div class="page-links">
    <a href="#/modules" data-nav class="page-link-card">${ic('layers')}<b>${L('Product modules','Modul produk','製品モジュール')}</b><span>${L('Nine pillars, role mapping, dependencies, and capability scope.','Sembilan pilar, role mapping, dependency, dan capability scope.','9つの柱、役割対応、依存関係、機能範囲。')}</span></a>
    <a href="#/follow-up-lifecycle" data-nav class="page-link-card">${ic('route')}<b>${L('Follow-up lifecycle','Follow-up lifecycle','フォローアップ')}</b><span>${L('Trigger, ownership, status, action, outcome, closure, and evidence.','Trigger, ownership, status, action, outcome, closure, dan evidence.','起点、担当、状態、対応、成果、完了、証跡。')}</span></a>
    <a href="#/architecture" data-nav class="page-link-card">${ic('database')}<b>${L('Technology architecture','Arsitektur teknologi','技術アーキテクチャ')}</b><span>${L('Frontend stack, Node.js, Supabase, Hostinger VPS, AI boundary, and quality gates.','Frontend stack, Node.js, Supabase, Hostinger VPS, AI boundary, dan quality gate.','FEスタック、Node.js、Supabase、Hostinger VPS、AI境界、品質ゲート。')}</span></a>
  </div>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Explore the full story','Jelajahi cerita lengkap','全体を詳しく見る')}</span>
  <h2>${L('The summary is on Home. The evidence and depth live on dedicated pages.','Ringkasannya ada di Home. Evidence dan detailnya ada di halaman khusus.','Homeは概要。evidenceと詳細は専用pageへ。')}</h2>
  <div class="page-links">
    <a href="#/feature-catalog" data-nav class="page-link-card">${ic('layers')}<b>${L('Feature Catalog','Katalog Fitur','機能カタログ')}</b><span>${L('59 approved features, 27 candidates, 15 module groups, releases and maturity.','59 approved feature, 27 candidate, 15 module group, release dan maturity.','59 Approved、27 Candidate、15 module group、release・maturity。')}</span></a>
    <a href="#/implementation" data-nav class="page-link-card">${ic('route')}<b>${L('Implementation','Implementasi','導入')}</b><span>${L('Discovery, fit-gap, configuration, integration, pilot, evaluation, rollout and KPIs.','Discovery, fit-gap, configuration, integration, pilot, evaluation, rollout, dan KPI.','Discovery、fit-gap、configuration、integration、pilot、evaluation、rollout、KPI。')}</span></a>
    <a href="#/market-positioning" data-nav class="page-link-card">${ic('compass')}<b>${L('Market & Positioning','Market & Positioning','Market & Positioning')}</b><span>${L('2027 transition, market layers, business thesis and worker-centered differentiation.','Transisi 2027, market layer, business thesis, dan diferensiasi worker-centered.','2027 transition、market layer、business thesis、worker-centered differentiation。')}</span></a>
  </div>
</div></section>
<section class="sec" id="home-directory"><div class="wrap">
  <span class="eyebrow">${L('Website directory','Direktori website','サイト案内')}</span>
  <h2>${L('A different page for each question a stakeholder may ask.','Setiap pertanyaan stakeholder punya halaman detailnya sendiri.','stakeholderの質問ごとに専用ページを用意。')}</h2>
  <div class="detail-grid">
    <div class="detail-card"><div class="code">PRODUCT</div><h3>${L('What exactly is included?','Apa saja yang benar-benar termasuk?','何が含まれるか')}</h3><p>${L('Use Product, Feature Catalog, Modules, and Follow-up Lifecycle for official scope, maturity, dependencies, and the operating model.','Gunakan Product, Feature Catalog, Modules, dan Follow-up Lifecycle untuk scope resmi, maturity, dependency, dan operating model.','Product、Feature Catalog、Modules、Lifecycleでscope・maturity・dependency・operating modelを確認。')}</p></div>
    <div class="detail-card"><div class="code">USERS</div><h3>${L('How does each role use it?','Bagaimana tiap role menggunakannya?','各roleはどう使うか')}</h3><p>${L('Worker, Manager, and Organization pages explain jobs, workflows, states, privacy boundaries, and success measures separately.','Page Worker, Manager, dan Organization menjelaskan job, workflow, state, privacy boundary, dan success measure secara terpisah.','Worker・Manager・Organization別にjob、workflow、state、privacy、success measureを説明。')}</p></div>
    <div class="detail-card"><div class="code">TECH</div><h3>${L('How is it built and governed?','Bagaimana dibangun dan di-govern?','どう構築・管理するか')}</h3><p>${L('Platform, Assistant, Architecture, Integration & Data, and Security pages describe contracts, stack, data ownership, consent, and failure behavior.','Platform, Assistant, Architecture, Integration & Data, dan Security menjelaskan contract, stack, data ownership, consent, dan failure behavior.','Platform、Assistant、Architecture、Integration、Securityでcontract、stack、data ownership、consent、failureを説明。')}</p></div>
    <div class="detail-card"><div class="code">ADOPTION</div><h3>${L('How would a company adopt it?','Bagaimana perusahaan mengadopsinya?','企業導入はどう進むか')}</h3><p>${L('Implementation explains discovery, pilot evidence, telemetry, evaluation, and rollout rather than assuming a generic SaaS deployment.','Implementation menjelaskan discovery, pilot evidence, telemetry, evaluation, dan rollout, bukan generic SaaS deployment.','Implementationでdiscovery、pilot evidence、telemetry、evaluation、rolloutを説明。')}</p></div>
    <div class="detail-card"><div class="code">BUSINESS</div><h3>${L('Why should this exist as a business?','Mengapa ini layak menjadi bisnis?','なぜ事業になるか')}</h3><p>${L('Company, Business Model, and Market & Positioning cover the Stage 1 entry value, buyer problem, structural timing, scope boundary, and long-term data thesis.','Company, Business Model, dan Market & Positioning membahas Stage 1 entry value, buyer problem, structural timing, scope boundary, dan long-term data thesis.','Company、Business Model、MarketでStage 1 value、buyer problem、timing、scope、data thesisを説明。')}</p></div>
    <div class="detail-card"><div class="code">PROOF</div><h3>${L('Where is the design and running product?','Di mana design dan running product?','designと実動productはどこか')}</h3><p>${L('The fixed Worker mobile Figma remains the visual source of truth; emenda.tech remains the direct demo destination.','Fixed Worker mobile Figma tetap menjadi visual source of truth; emenda.tech tetap menjadi tujuan demo langsung.','確定Worker mobile Figmaがvisual source of truth、emenda.techがdirect demo。')}</p></div>
  </div>
</div></section>

<section class="sec" id="home-evidence"><div class="wrap">
  <span class="eyebrow">${L('Counted, not claimed','Dihitung, bukan diklaim','主張ではなく計数')}</span>
  <h2>${L('The numbers on this site are re-derived from the repository.','Angka di situs ini diturunkan ulang dari repository.','本サイトの数値はリポジトリから再導出している。')}</h2>
  <p class="lede">${L('Routes are counted from the router file, screens and states from the parity matrix, tests from the spec files. Where a documented figure had drifted from the code, the code won and the difference is named on the evidence page.','Route dihitung dari file router, screen dan state dari parity matrix, test dari file spec. Di mana angka dokumentasi sudah menyimpang dari kode, kode yang menang dan selisihnya disebutkan di halaman bukti.','ルートはルーターファイル、画面・状態はパリティ表、テストはスペックファイルから数えた。文書の数値がコードと乖離していた場合はコードを採り、差分は証跡ページに明記した。')}</p>
  <div class="metric-band reveal">
    <div class="m"><b>802</b><span class="u">${L('Screens & states','Screen & state','画面・状態')}</span><span class="d">${L('631 COMPLETE across every role','631 COMPLETE di seluruh role','全役割で631がCOMPLETE')}</span></div>
    <div class="m"><b>158</b><span class="u">${L('Application routes','Route aplikasi','アプリルート')}</span><span class="d">${L('Worker 71 · manager 47 · others 40','Worker 71 · manager 47 · lainnya 40','労働者71・管理者47・その他40')}</span></div>
    <div class="m"><b>235</b><span class="u">${L('Playwright checks','Check Playwright','Playwright検証')}</span><span class="d">${L('Across 8 spec files','Di 8 file spec','8スペックファイル')}</span></div>
    <div class="m"><b>92</b><span class="u">${L('Accepted deviations','Deviasi accepted','許容された逸脱')}</span><span class="d">${L('Each with the rule it was decided under','Masing-masing dengan aturan yang mendasarinya','各々に判断根拠の規則を付す')}</span></div>
    <div class="m"><b>0</b><span class="u">${L('Blocked','Blocked','ブロック')}</span><span class="d">${L('No deviation prevented implementation','Tidak ada deviasi yang menghalangi implementasi','実装を妨げた逸脱はゼロ')}</span></div>
  </div>
  <div style="margin-top:26px"><a href="#/build-evidence" class="btn btn-p" data-nav>${L('Open the full build evidence','Buka bukti implementasi lengkap','実装の証跡を開く')} →</a></div>
</div></section>

<section class="sec tinted" id="home-showcase"><div class="wrap">
  <span class="eyebrow">${L('System showcase','Showcase sistem','システム概観')}</span>
  <h2>${L('Six surfaces, and what is actually behind each one.','Enam surface, dan apa sebenarnya yang ada di belakang masing-masing.','6つの面と、それぞれの背後に実際にあるもの。')}</h2>
  <div class="tabwrap">
    <div class="tabbar">
      ${SHOWCASE.map(([k,t],i)=>`<button class="tabbtn ${i===0?'on':''}" data-tab="${k}">${t}</button>`).join('')}
    </div>
    ${SHOWCASE.map(([k,t,lede,points,meta,rows],i)=>`<div class="tabpane ${i===0?'on':''}" data-tab="${k}">
      <div>
        <h3>${t}</h3>
        <p class="tp-lede">${lede}</p>
        <ul>${points.map(p=>`<li>${p}</li>`).join('')}</ul>
        <div class="tp-meta">${meta.map(m=>`<span>${m}</span>`).join('')}</div>
      </div>
      <div class="tp-visual">
        <div class="tv-head">${L('What the surface carries','Apa yang dibawa surface ini','この面が担うもの')}</div>
        <div class="tp-rows">${rows.map(([label,st])=>`<div class="tp-row"><b>${label}</b><span class="rt ${st==='live'?'':st}">${st==='live'?L('Built','Sudah dibangun','実装済'):st==='gold'?L('Partial','Parsial','部分的'):L('Not built','Belum dibangun','未実装')}</span></div>`).join('')}</div>
      </div>
    </div>`).join('')}
  </div>
</div></section>

<section class="sec" id="home-pillars"><div class="wrap">
  <span class="eyebrow">${L('Nine pillars','Sembilan pilar','9つの柱')}</span>
  <h2>${L('Fifteen module groups, fifty-nine approved features, one page each.','Lima belas kelompok modul, lima puluh sembilan fitur approved, masing-masing satu halaman.','15のモジュール群、59のApproved機能、それぞれに専用ページ。')}</h2>
  <div class="pillar-grid">
    ${PILLARS.slice(0,6).map(p=>`<a class="pillar-card reveal" href="#/pillar/${p.slug}" data-nav>
      <div class="pc-top"><span class="pn">${p.n}</span><span class="pcount">${p.features} ${L('features','fitur','機能')}</span></div>
      <h3>${p.name}</h3><p>${p.lede}</p>
      <span class="pc-go">${L('Open pillar','Buka pilar','柱を開く')} →</span></a>`).join('')}
  </div>
  <div style="margin-top:26px"><a href="#/pillars" class="btn btn-ghost" data-nav>${L('See all nine pillars','Lihat semua sembilan pilar','9つの柱をすべて見る')} →</a></div>
</div></section>

<section class="sec tinted" id="home-objections"><div class="wrap">
  <span class="eyebrow">${L('The questions that come first','Pertanyaan yang muncul lebih dulu','最初に来る問い')}</span>
  <h2>${L('Six objections, answered before they are raised.','Enam keberatan, dijawab sebelum diangkat.','6つの反論に、挙がる前に答える。')}</h2>
  <div class="acc">
    ${[
      [L('“Our workers already use LINE. Why would they move?”','“Worker kami sudah pakai LINE. Kenapa harus pindah?”','「うちの労働者はもうLINEを使っている。なぜ移行するのか」'),
       L('They should not move their private life. Emenda does not compete with the messaging your team uses to talk to family and friends — that stays where it is. What moves is work: the report, the instruction, the issue that needs an owner. The reason to move those is not a better chat app; it is that a message in LINE cannot become a record, and a record on paper cannot answer a question.','Mereka memang tidak perlu memindahkan kehidupan pribadinya. Emenda tidak bersaing dengan messaging yang dipakai tim Anda untuk bicara dengan keluarga dan teman — itu tetap di tempatnya. Yang pindah adalah pekerjaan: laporan, instruksi, isu yang butuh owner. Alasan memindahkannya bukan aplikasi chat yang lebih bagus; melainkan bahwa pesan di LINE tidak bisa menjadi record, dan record di kertas tidak bisa menjawab pertanyaan.','私生活を移す必要はない。Emendaは家族や友人との連絡手段と競合しない——それはそのままでよい。移るのは仕事の方だ。報告、指示、担当者を要する課題。移す理由は、より良いチャットではない。LINEのメッセージは記録になれず、紙の記録は問いに答えられないからである。'),
       L('Stage 1 replaces LINE, paper and the telephone for work. Private messaging is explicitly out of scope.','Stage 1 menggantikan LINE, kertas, dan telepon untuk pekerjaan. Messaging pribadi secara eksplisit di luar scope.','Stage 1は業務におけるLINE・紙・電話を置き換える。私的な連絡は明示的にスコープ外。')],
      [L('“Why should the worker own the identity, and not us?”','“Kenapa identitasnya milik worker, bukan milik kami?”','「なぜIDの主体が当社ではなく労働者本人なのか」'),
       L('Because of what happens when they leave. If the identity belongs to the employer, a worker who transfers arrives at the next job with nothing — and the industry is about to make transfer normal. An identity that survives the relationship is the only version of this product that is still useful in 2028. It also changes the incentive: a worker keeps logging because the record is theirs, not because you told them to.','Karena apa yang terjadi ketika mereka pergi. Kalau identitasnya milik employer, worker yang pindah tiba di pekerjaan berikutnya tanpa apa-apa — dan industri ini sedang menuju kondisi di mana pindah menjadi normal. Identitas yang bertahan melewati relasi adalah satu-satunya versi produk ini yang masih berguna di 2028. Itu juga mengubah insentif: worker terus mencatat karena record-nya miliknya, bukan karena Anda menyuruhnya.','退職時に何が起きるかによる。IDが雇用主のものなら、転籍した労働者は次の職場に何も持たずに着く。そして業界は転籍が当たり前になる方向へ動いている。関係より長く生きるIDだけが、2028年にもなお有用な製品である。動機も変わる——本人が記録を続けるのは、指示されたからではなく、その記録が自分のものだからだ。'),
       L('An employer connection is time-bound. Ending it ends visibility, not the record.','Employer connection berbatas waktu. Mengakhirinya mengakhiri visibilitas, bukan record.','雇用接続は期間限定。終了するのは可視性であって記録ではない。')],
      [L('“Can we see the workers’ health data?”','“Bisakah kami melihat data kesehatan worker?”','「労働者の健康データは閲覧できるか」'),
       L('No, and that is a product decision rather than a setting. Stress-check results are visible to the worker and the occupational physician only; the employer receives anonymous aggregate signal. Life log — housing, family, community, religious accommodation, remittance — is worker-private by default. This boundary is written into the module specification, not offered as a configuration option, because a boundary you can switch off is not a boundary.','Tidak, dan itu keputusan produk, bukan setelan. Hasil stress-check hanya terlihat oleh worker dan dokter perusahaan; employer menerima sinyal agregat anonim. Life log — tempat tinggal, keluarga, komunitas, akomodasi keagamaan, pengiriman uang — bersifat privat bagi worker secara default. Batas ini ditulis di spesifikasi modul, bukan ditawarkan sebagai opsi konfigurasi, karena batas yang bisa dimatikan bukanlah batas.','できない。これは設定ではなく製品判断である。ストレスチェック結果は本人と産業医のみが閲覧し、雇用主には匿名の集計シグナルが渡る。ライフログ（住まい・家族・コミュニティ・宗教配慮・送金）は既定で本人限定。この境界はモジュール仕様に書かれており、設定項目として提供しない。切れる境界は境界ではないからだ。'),
       L('Follows the statutory stress-check boundary. Not configurable.','Mengikuti batas stress-check statutori. Tidak bisa dikonfigurasi.','法定ストレスチェックの境界に準拠。設定不可。')],
      [L('“Is the AI going to rewrite what my workers say?”','“Apakah AI akan menulis ulang apa yang dikatakan worker kami?”','「AIが労働者の発言を書き換えるのか」'),
       L('No. The original is preserved beside every translation, and a preview gate sits before sending so neither side is asked to trust a sentence they cannot inspect. The assistant explains a message; it does not replace it. This is the single design rule the communication pillar is built around, and it is the reason the dual bubble exists rather than a cleaner single-message UI.','Tidak. Teks asli disimpan berdampingan dengan setiap terjemahan, dan preview gate ada sebelum kirim sehingga tidak ada pihak yang diminta memercayai kalimat yang tak bisa ia periksa. Asisten menjelaskan sebuah pesan; ia tidak menggantikannya. Ini satu aturan desain yang menjadi fondasi pilar komunikasi, dan itulah alasan dual bubble ada alih-alih UI satu-pesan yang lebih bersih.','しない。原文はすべての訳文と併存して保持され、送信前にプレビューゲートが入る。検証できない文を信じるよう、どちらの側にも求めない。アシスタントはメッセージを説明するのであって置き換えない。これが通信の柱を貫く唯一の設計規則であり、より簡素な単一メッセージUIではなく二段バブルが存在する理由である。'),
       L('Original retention and translation preview are both approved features in module M03.','Retensi teks asli dan translation preview keduanya fitur approved di modul M03.','原文保持と翻訳プレビューはいずれもM03のApproved機能。')],
      [L('“What is actually built, and what is a picture?”','“Apa yang benar-benar sudah dibangun, dan apa yang masih gambar?”','「実際に作られているものと、絵にすぎないものは何か」'),
       L('802 screens and states are implemented and reachable by clicking, 631 of them signed off against their Figma frame. What does not exist is everything behind them: no backend, no authentication, no real translation engine, no telemetry, no push delivery. The interface is unusually far ahead of the server, which is a real position and a defensible one — but only if it is stated rather than blurred.','802 screen dan state sudah diimplementasikan dan bisa dijangkau dengan klik, 631 di antaranya signed off terhadap frame Figma-nya. Yang tidak ada adalah semua yang di belakangnya: tidak ada backend, tidak ada authentication, tidak ada engine terjemahan nyata, tidak ada telemetri, tidak ada pengiriman push. Interface-nya jauh mendahului server, dan itu posisi nyata yang bisa dipertahankan — tapi hanya kalau dinyatakan, bukan dikaburkan.','802の画面・状態が実装され、クリックで到達でき、うち631がFigmaフレームに対して検証済みである。存在しないのはその背後のすべて——バックエンド、認証、実翻訳エンジン、テレメトリ、プッシュ配信。UIがサーバーを大きく先行しており、それは現実的で擁護可能な立場である。ただし、ぼかさず明言する限りにおいて。'),
       L('The build evidence page lists every gap by name.','Halaman bukti implementasi mendaftar setiap gap dengan namanya.','証跡ページがすべての未実装事項を名指しで列挙している。')],
      [L('“How would we know within 90 days whether this worked?”','“Bagaimana kami tahu dalam 90 hari apakah ini berhasil?”','「90日でこれが機能したかをどう判断するのか」'),
       L('One number, agreed before the pilot starts: the share of messages initiated by the worker. Supporting KPIs — daily report submission rate, messages unread past 24 hours, weekly active workers, paid retention — exist to explain that number, not to replace it if it disappoints. If the north star does not move, the hypothesis is wrong and we would tell you to stop rather than propose a second pilot.','Satu angka, disepakati sebelum pilot dimulai: proporsi pesan yang diinisiasi worker. KPI pendukung — tingkat submit laporan harian, pesan belum dibaca lebih dari 24 jam, worker aktif mingguan, retensi berbayar — ada untuk menjelaskan angka itu, bukan menggantikannya kalau mengecewakan. Kalau north-star-nya tidak bergerak, hipotesisnya salah dan kami akan menyarankan Anda berhenti, bukan mengusulkan pilot kedua.','パイロット開始前に合意する数値が一つ——労働者起点メッセージ比率。補助KPI（日報提出率、24時間超の未読、週次アクティブ労働者、有償継続率）はその数値を説明するために存在し、期待外れのときに差し替えるためではない。北極星が動かなければ仮説は誤りであり、第二次パイロットを提案するのではなく中止を進言する。'),
       L('The metric and the stop condition are both written into the pilot plan.','Metrik dan kondisi berhenti keduanya tertulis dalam rencana pilot.','指標と中止条件はいずれもパイロット計画に明記する。')]
    ].map(([q,a,r],i)=>`<div class="acc-item ${i===0?'open':''}">
      <button class="acc-q"><span class="qn">${String(i+1).padStart(2,'0')}</span><span class="qt">${q}</span><span class="qi"></span></button>
      <div class="acc-a"><p>${a}</p><div class="resp"><b>${L('RULE','ATURAN','規則')}</b><span>${r}</span></div></div>
    </div>`).join('')}
  </div>
</div></section>

<section class="sec" id="home-industries"><div class="wrap">
  <span class="eyebrow">${L('Industries','Industri','業種')}</span>
  <h2>${L('Four verticals, with the honest state of each template.','Empat vertikal, dengan keadaan jujur tiap template-nya.','4業種と、各テンプレートの率直な状態。')}</h2>
  <div class="pillar-grid">
    ${INDUSTRIES.map(x=>`<a class="pillar-card reveal" href="#/industry/${x.slug}" data-nav>
      <div class="pc-top"><span class="pn">${x.n}</span></div>
      <h3>${x.name}</h3><p>${x.lede}</p>
      <span class="pc-go">${L('Open industry','Buka industri','業種を開く')} →</span></a>`).join('')}
  </div>
</div></section>

<section class="sec tight"><div class="wrap"><div class="cta-band">
  <h2 style="font-size:clamp(24px,3vw,34px)">${L('Start with the workflow that breaks first.','Mulai dari workflow yang paling dulu patah.','最初に壊れる業務から始める。')}</h2>
  <p>${L('Sixty minutes on the running product, a written fit-gap list, and a ninety-day pilot plan with the metric agreed in advance.','Enam puluh menit di produk yang berjalan, daftar fit-gap tertulis, dan rencana pilot sembilan puluh hari dengan metrik yang disepakati di depan.','稼働中の製品で60分、書面のフィットギャップ一覧、そして指標を事前合意した90日パイロット計画。')}</p>
  <div class="hero-cta">
    <a class="btn btn-s btn-lg" href="#/roadmap" data-nav>${L('See the phase plan','Lihat rencana fase','フェーズ計画を見る')}</a>
  </div>
</div></div></section>`;
