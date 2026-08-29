/* dev/doc/feature-catalog  —  PAGES.devDocFeatureCatalog
   Digest of EMENDA Product Feature Catalog v1.0 r10 — the scope authority. */
PAGES.devDocFeatureCatalog=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · document','Internal · dokumen','社内 · 文書')} · 01_Product_Catalog</span>
  <h1>${L('Product Feature Catalog v1.0 r10','Product Feature Catalog v1.0 r10','Product Feature Catalog v1.0 r10')}</h1>
  <p>${L('The complete inventory of what EMENDA will do, for workers and employers, across every module and every horizon. It answers exactly one question — what features will EMENDA have — and deliberately excludes flows, APIs, databases, UI design and architecture rationale.','Inventaris lengkap apa yang akan dilakukan EMENDA, untuk pekerja dan pemberi kerja, di seluruh modul dan seluruh horizon. Dokumen ini menjawab tepat satu pertanyaan — fitur apa yang akan dimiliki EMENDA — dan secara sengaja tidak memuat flow, API, database, desain UI, maupun rasionale arsitektur.','EMENDAが労働者と雇用者に対して何を提供するのか、全モジュール・全期間にわたる完全な一覧。答える問いは一つだけ——EMENDAはどの機能を持つのか。フロー・API・DB・UI設計・アーキテクチャの根拠は意図的に除外されている。')}</p>
  <div class="dev-meta">
    <span>59 ${L('approved','disetujui','承認')}</span>
    <span>27 ${L('candidates','kandidat','候補')}</span>
    <span>15 ${L('modules','modul','モジュール')}</span>
    <span>40 ${L('pages','halaman','ページ')} · PDF</span>
    <span class="tag warn">${L('Internal','Internal','社内')}</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Standing','Kedudukan','位置づけ')}</span>
  <h2>${L('This document is the scope authority. Nothing else is.','Dokumen ini adalah otoritas scope. Bukan yang lain.','スコープの権威はこの文書にある。他ではない。')}</h2>
  <p class="lede">${L('It is a standalone companion that expands the frozen Master PRD Feature Matrix (F-01…F-35) into a complete inventory through F-nn.m decomposition. It is the bridge between the Master PRD and the functional specification, and the primary feature reference for product, design, engineering, QA and sales.','Dokumen ini adalah pendamping mandiri yang memperluas Master PRD Feature Matrix yang sudah dibekukan (F-01…F-35) menjadi inventaris lengkap lewat dekomposisi F-nn.m. Ia adalah jembatan antara Master PRD dan spesifikasi fungsional, sekaligus rujukan fitur utama bagi product, design, engineering, QA, dan sales.','凍結済みの Master PRD Feature Matrix（F-01〜F-35）を F-nn.m へ分解して完全な一覧にした独立文書。Master PRDと機能仕様の橋渡しであり、プロダクト・デザイン・開発・QA・営業にとっての第一参照である。')}</p>
  <div class="cmd">
Product Constitution <span class="c">→</span> Master PRD <span class="c">→</span> BRD <span class="c">→</span> FRS <span class="c">→</span> TDS
  </div>
  <div class="dev-grid" style="margin-top:26px">
    <div class="dev-card">
      <div class="code">${L('Sales discipline','Disiplin sales','販売規律')}</div>
      <h3>${L('Only approved features are sellable','Hanya fitur yang disetujui yang boleh dijual','販売してよいのは承認済み機能のみ')}</h3>
      <p>${L('Items marked Vision are not sellable at all. A candidate is never approved scope no matter how detailed its entry looks — only a Product Owner ruling moves it into the approved set.','Item bertanda Vision sama sekali tidak boleh dijual. Sebuah kandidat tidak pernah menjadi scope yang disetujui sedetail apa pun entrinya — hanya keputusan Product Owner yang memindahkannya ke set yang disetujui.','Vision表記の項目は一切販売不可。候補機能はどれほど詳細に記述されていても承認スコープではない。承認集合へ移すのはプロダクトオーナーの裁定のみ。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Why 59','Mengapa 59','なぜ59か')}</div>
      <h3>${L('58 counted in release buckets, plus one held','58 terhitung di release bucket, plus satu yang ditahan','リリース区分の58＋保留1')}</h3>
      <p>${L('F-26.1 stays uncounted until the OQ-8 ruling, which is why the release table reads 58 + 1 pending = 59. Revision r10 exists only to make that reconciliation visible in the table itself.','F-26.1 tetap tidak terhitung sampai keputusan OQ-8, itulah sebabnya tabel rilis membaca 58 + 1 pending = 59. Revisi r10 ada semata-mata agar rekonsiliasi itu terlihat langsung di tabelnya.','F-26.1はOQ-8の裁定まで計上されないため、リリース表は「58＋保留1＝59」と読む。r10改訂はこの整合を表上で可視化するためだけに存在する。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Fifteen modules','Lima belas modul','15モジュール')}</span>
  <h2>${L('The whole product, module by module.','Keseluruhan produk, modul demi modul.','製品全体をモジュール単位で。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Module','Modul','モジュール')}</th><th>${L('Approved','Disetujui','承認')}</th>
      <th>${L('Cand.','Kand.','候補')}</th><th>${L('Release','Rilis','リリース')}</th>
      <th>${L('Status','Status','状態')}</th><th>${L('What it covers','Cakupan','内容')}</th>
    </tr></thead>
    <tbody>
      <tr><td>Identity &amp; Access</td><td>12</td><td>2</td><td>R1–R3+</td><td>MVP → Vision</td><td>${L('The lifetime EMENDA ID: how a worker gets an identity, logs in, and keeps it across every employer, resignation and return home.','EMENDA ID seumur hidup: bagaimana pekerja memperoleh identitas, masuk, dan mempertahankannya melintasi setiap pemberi kerja, pengunduran diri, dan kepulangan.','生涯のEMENDA ID。取得・ログイン・そして雇用主の変更、退職、帰国をまたいで保持し続ける仕組み。')}</td></tr>
      <tr><td>Organization Management</td><td>3</td><td>2</td><td>R1</td><td>MVP</td><td>${L('How a facility creates its account, connects workers and manages invitations.','Bagaimana fasilitas membuat akun, menghubungkan pekerja, dan mengelola undangan.','事業所がアカウントを作り、労働者を接続し、招待を管理する仕組み。')}</td></tr>
      <tr><td>Communication</td><td>10</td><td>4</td><td>R1</td><td>MVP</td><td>${L('The core loop: workers and managers converse across languages, each in their own, with originals always preserved.','Loop inti: pekerja dan manajer bercakap lintas bahasa, masing-masing dalam bahasanya, dengan teks asli selalu dipertahankan.','中核ループ。労働者と管理者がそれぞれの言語で会話し、原文は常に保持される。')}</td></tr>
      <tr><td>Translation</td><td>4</td><td>1</td><td>R1–R3</td><td>MVP → Roadmap</td><td>${L('The language engine beneath communication: commercial machine translation today, context-aware translation tomorrow.','Mesin bahasa di bawah komunikasi: mesin terjemahan komersial hari ini, terjemahan sadar konteks nanti.','通信の下層にある言語エンジン。現在は商用機械翻訳、将来は文脈翻訳。')}</td></tr>
      <tr><td>Work Records</td><td>6</td><td>2</td><td>R1–R2</td><td>MVP → Roadmap</td><td>${L('Structured daily reports and the unified per-worker timeline where communication and records become one history.','Laporan harian terstruktur dan timeline terpadu per pekerja, tempat komunikasi dan catatan menjadi satu riwayat.','構造化された日報と、通信と記録が一つの履歴になる労働者単位の統合タイムライン。')}</td></tr>
      <tr><td>Work Log</td><td>3</td><td>2</td><td>R2–R3</td><td>Roadmap</td><td>${L('That history matured into the worker\\u2019s portable professional asset: roles, achievements, certifications.','Riwayat itu matang menjadi aset profesional pekerja yang portabel: peran, pencapaian, sertifikasi.','その履歴が、労働者の持ち運べる職業資産へと成熟したもの。役割・実績・資格。')}</td></tr>
      <tr><td>Measurement &amp; Analytics</td><td>3</td><td>1</td><td>R1</td><td>MVP</td><td>${L('The event stream and KPIs that make the product\\u2019s promises measurable.','Aliran event dan KPI yang membuat janji produk bisa diukur.','製品の約束を測定可能にするイベントストリームとKPI。')}</td></tr>
      <tr><td>Consent &amp; Privacy</td><td>5</td><td>1</td><td>R1–R2</td><td>MVP → Roadmap</td><td>${L('Visibility disclosure, consent capture, and the consent ledger that governs every future use of worker data.','Pengungkapan visibilitas, perekaman consent, dan consent ledger yang mengatur setiap penggunaan data pekerja di masa depan.','可視範囲の開示、同意の取得、そして労働者データの将来利用すべてを規律する同意台帳。')}</td></tr>
      <tr><td>Notifications</td><td>2</td><td>1</td><td>R1–R2</td><td>MVP → Roadmap</td><td>${L('How users learn something needs their attention. Push remains a pending decision.','Bagaimana pengguna tahu ada yang perlu perhatiannya. Push masih menjadi keputusan tertunda.','注意が必要なことをどう知らせるか。プッシュ通知は未決のまま。')}</td></tr>
      <tr><td>Administration</td><td>1</td><td>2</td><td>R1±</td><td>MVP-adjacent</td><td>${L('EMENDA\\u2019s own operational tools — the SuperAdmin internal console.','Perkakas operasional EMENDA sendiri — konsol internal SuperAdmin.','EMENDA自身の運用ツール。SuperAdmin内部コンソール。')}</td></tr>
      <tr><td>Health Log</td><td>4</td><td>1</td><td>R3</td><td>Roadmap</td><td>${L('Worker-owned health data and the statutory stress-check rail, tied to the April 2028 mandate.','Data kesehatan milik pekerja dan jalur stress-check statutori, terkait mandat April 2028.','労働者所有の健康データと、2028年4月の義務化に紐づく法定ストレスチェックの経路。')}</td></tr>
      <tr><td>Life Log</td><td>1</td><td>2</td><td>R3+</td><td>Vision</td><td>${L('The worker-private record of life beyond work.','Catatan privat pekerja tentang kehidupan di luar pekerjaan.','仕事の外側の生活に関する、労働者本人だけの記録。')}</td></tr>
      <tr><td>EMENDA Score</td><td>2</td><td>1</td><td>R4</td><td>Vision</td><td>${L('A possible future interpretation layer over accumulated history — worker-controlled and worker-disclosed.','Kemungkinan lapisan interpretasi di masa depan atas riwayat yang terkumpul — dikendalikan dan dibuka oleh pekerja sendiri.','蓄積された履歴の上に置かれうる将来の解釈層。制御も開示も労働者本人が行う。')}</td></tr>
      <tr><td>EMENDA Coin</td><td>1</td><td>2</td><td>R4</td><td>Vision</td><td>${L('A possible future value-circulation layer, barred absolutely from rewarding record creation.','Kemungkinan lapisan sirkulasi nilai di masa depan, dilarang mutlak memberi imbalan atas pembuatan catatan.','将来ありうる価値循環層。記録作成への報酬付与は絶対禁止。')}</td></tr>
      <tr><td>External Connections</td><td>2</td><td>3</td><td>R2–R4</td><td>Roadmap → Vision</td><td>${L('Consented connections of worker data to credit and services: connection, never transfer.','Koneksi data pekerja ke kredit dan layanan atas dasar consent: menghubungkan, bukan menyerahkan.','同意に基づく信用・サービスへの接続。接続であって譲渡ではない。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('Approved counts sum to exactly 59 and candidate counts to exactly 27. Both are stated in the catalog and verified against the per-module table.','Jumlah yang disetujui berjumlah tepat 59 dan kandidat tepat 27. Keduanya dinyatakan di katalog dan diverifikasi terhadap tabel per modul.','承認は合計ちょうど59、候補はちょうど27。いずれもカタログに明記され、モジュール別表と照合済み。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Release view','Tampilan rilis','リリース区分')}</span>
  <h2>${L('Thirty-four features ship in R1. Everything else is later.','Tiga puluh empat fitur rilis di R1. Sisanya belakangan.','R1で出るのは34機能。それ以外はすべて後段。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Release','Rilis','リリース')}</th><th>${L('Status','Status','状態')}</th>
      <th>${L('Count','Jumlah','件数')}</th><th>${L('Notes','Catatan','備考')}</th>
    </tr></thead>
    <tbody>
      <tr><td>R1</td><td><span class="tag ok">MVP</span></td><td>34</td><td>${L('The buildable set. Includes F-11.1, F-15.1 and F-17.1 in sprint S4, and F-12.1 pending the OQ-5 ruling.','Set yang dibangun. Termasuk F-11.1, F-15.1, dan F-17.1 di sprint S4, serta F-12.1 yang menunggu keputusan OQ-5.','構築対象。F-11.1・F-15.1・F-17.1はS4、F-12.1はOQ-5の裁定待ち。')}</td></tr>
      <tr><td>R2</td><td><span class="tag info">Roadmap</span></td><td>10 (+1)</td><td>${L('Employment connection, resignation continuity, re-connection, data export, construction template. F-26.1 is the pending one.','Employment connection, resignation continuity, re-connection, data export, template konstruksi. F-26.1 adalah yang tertunda.','雇用接続、退職後の継続、再接続、データエクスポート、建設テンプレート。保留はF-26.1。')}</td></tr>
      <tr><td>R3</td><td><span class="tag info">Roadmap</span></td><td>8</td><td>${L('Context translation engine, health-log integration, the stress-check rail.','Context translation engine, integrasi health log, jalur stress-check.','文脈翻訳エンジン、ヘルスログ連携、ストレスチェック経路。')}</td></tr>
      <tr><td>R3+ / R4</td><td><span class="tag stop">Vision</span></td><td>6</td><td>${L('Pre-arrival ID, Life Log, Score, Coin, credit-layer connection. Not sellable.','ID sebelum kedatangan, Life Log, Score, Coin, koneksi lapisan kredit. Tidak boleh dijual.','来日前ID、ライフログ、スコア、コイン、信用層接続。販売不可。')}</td></tr>
      <tr><td><b>${L('Total','Total','合計')}</b></td><td>—</td><td><b>58 + 1 = 59</b></td><td>${L('F-26.1 is counted once its OQ-8 ruling lands; F-35.1 is counted once, under R3–R4.','F-26.1 dihitung begitu keputusan OQ-8 turun; F-35.1 dihitung sekali, di bawah R3–R4.','F-26.1はOQ-8の裁定後に計上。F-35.1はR3〜R4で一度だけ計上。')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('How to read an entry','Cara membaca satu entri','エントリの読み方')}</span>
  <h2>${L('Seventeen attributes per approved feature.','Tujuh belas atribut per fitur yang disetujui.','承認機能1件につき17属性。')}</h2>
  <p class="lede">${L('Four of them decide whether you can act on it today: Priority, Release, Status, and Screens. The rest explain why it exists and what constrains it.','Empat di antaranya menentukan apakah kamu bisa menindaklanjutinya hari ini: Priority, Release, Status, dan Screens. Sisanya menjelaskan mengapa fitur itu ada dan apa yang membatasinya.','今日それに着手できるかを決めるのは4つ——Priority、Release、Status、Screens。残りは存在理由と制約を説明する。')}</p>
  <div class="dev-meta">
    <span class="mono">ID · Name · Module · Category</span>
    <span class="mono">Description · Purpose · Value · Actors</span>
    <span class="mono">Rules · Deps</span>
    <span class="mono">Priority · Release · Status</span>
    <span class="mono">Source · Screens · FRS · Notes</span>
  </div>
  <div class="dev-grid" style="margin-top:28px">
    <div class="dev-card">
      <div class="code">${L('Registers','Register','登録簿')}</div>
      <h3>${L('Twelve business rules, seven decisions, fourteen open questions','Dua belas aturan bisnis, tujuh keputusan, empat belas open question','12の業務ルール、7つの決定、14の未決事項')}</h3>
      <p>${L('BR-01 to BR-12, D-1 to D-7, and OQ-1 to OQ-16 are referenced throughout the entries. An entry citing an open OQ is not settled scope, whatever its release column says.','BR-01 sampai BR-12, D-1 sampai D-7, dan OQ-1 sampai OQ-16 dirujuk di seluruh entri. Entri yang mengutip OQ yang masih terbuka bukan scope final, apa pun isi kolom rilisnya.','BR-01〜BR-12、D-1〜D-7、OQ-1〜OQ-16が各エントリから参照される。未決のOQを引くエントリは、リリース列が何であれ確定スコープではない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Candidates','Kandidat','候補')}</div>
      <h3>${L('C-&lt;MOD&gt;-n, and no parent by design','C-&lt;MOD&gt;-n, dan tanpa induk secara sengaja','C-&lt;MOD&gt;-n。設計上、親を持たない')}</h3>
      <p>${L('Candidates carry no F-parent on purpose, and only four status values are permitted: Candidate, Under Review, Deferred, Rejected. Two were added in r9 from a traceability audit — voice as a communication medium, and association communication.','Kandidat sengaja tidak punya induk F, dan hanya empat nilai status yang diizinkan: Candidate, Under Review, Deferred, Rejected. Dua ditambahkan di r9 dari audit ketertelusuran — suara sebagai medium komunikasi, dan komunikasi asosiasi.','候補は意図的にF親を持たず、状態値は Candidate / Under Review / Deferred / Rejected の4つのみ。r9でトレーサビリティ監査から2件追加——通信手段としての音声と、協会とのやりとり。')}</p>
    </div>
  </div>
  ${backTo('#/dev/documents', L('Back to the document library','Kembali ke pustaka dokumen','ドキュメント一覧へ戻る'))}
</div></section>`;
