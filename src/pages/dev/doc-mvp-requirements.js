/* dev/doc/mvp-requirements  —  PAGES.devDocMvpRequirements
   Digest of Emenda_MVP_要件定義書 v1.2 — the Stage 1 business requirements. */
PAGES.devDocMvpRequirements=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · document','Internal · dokumen','社内 · 文書')} · 02_Requirements</span>
  <h1>MVP 要件定義書 v1.2</h1>
  <p>${L('The business requirements behind Stage 1. It opens with the line it calls the most important in the document — the separation between the endgame and what is being built now — and then spends the rest of its length defending that line against scope creep.','Requirement bisnis di balik Stage 1. Dokumen ini dibuka dengan baris yang disebutnya paling penting — pemisahan antara tujuan akhir dan apa yang dibangun sekarang — lalu menghabiskan sisa isinya mempertahankan garis itu dari scope creep.','Stage 1の事業要件。冒頭で「本書で最も重要な線引き」——最終形と今作るものの分離——を置き、以降はその線をスコープクリープから守ることに費やされる。')}</p>
  <div class="dev-meta">
    <span>v1.2</span>
    <span>11 ${L('chapters','bab','章')}</span>
    <span>DOCX · 日本語</span>
    <span class="tag ok">${L('Markdown conversion exists','Ada konversi markdown','Markdown変換あり')}</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('The line','Garis pemisah','線引き')}</span>
  <h2>${L('The endgame is an infrastructure. The MVP is a measuring instrument.','Tujuan akhirnya adalah infrastruktur. MVP-nya adalah alat ukur.','最終形はインフラであり、MVPは測定器である。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">${L('Endgame','Tujuan akhir','最終形')}</div>
      <h3>${L('One data model under communication, records and operations','Satu model data di bawah komunikasi, catatan, dan operasi','通信・記録・運用を一つのデータモデルに束ねる')}</h3>
      <p>${L('Today an operator needs LINE WORKS for communication and Kaminashi or paper for records, run separately. The endgame replaces that pair with a single base, with foreign workers in Japanese workplaces as the first implementation ground.','Hari ini sebuah operator butuh LINE WORKS untuk komunikasi dan Kaminashi atau kertas untuk catatan, dijalankan terpisah. Tujuan akhirnya mengganti pasangan itu dengan satu basis, dengan pekerja asing di tempat kerja Jepang sebagai lahan implementasi pertama.','現在は通信にLINE WORKS、記録にKaminashiまたは紙を別々に運用する必要がある。最終形はこの二つを単一基盤に統合置換する。最初の実装現場は日本の職場における外国人労働者。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('MVP','MVP','MVP')}</div>
      <h3>${L('Only the minimum surface that makes the core hypothesis measurable','Hanya permukaan minimum yang membuat hipotesis inti bisa diukur','中核仮説を測れる最小面のみ')}</h3>
      <p>${L('Feature parity is explicitly not attempted. Translation, records and communication already exist in the incumbents, so no resources go into matching them.','Paritas fitur secara eksplisit tidak dikejar. Terjemahan, catatan, dan komunikasi sudah ada pada pemain lama, jadi tidak ada sumber daya yang dipakai untuk menyamainya.','機能パリティは明確に取らない。翻訳・記録・通信は既存プレイヤーに存在するため、並ぶことに資源を割かない。')}</p>
    </div>
  </div>
  <div class="cmd" style="margin-top:28px">
<span class="c"># ${L('the core hypothesis, stated as one causal chain','hipotesis inti, sebagai satu rantai kausal','中核仮説（因果の連鎖）')}</span>
${L('worker-subject bidirectional translated communication','komunikasi terjemahan dua arah berbasis pekerja','労働者主体の双方向翻訳通信')}
  <b>+</b> ${L('minimal structured records','catatan terstruktur minimal','最小の構造化記録')}
  <b>→</b> ${L('less communication breakdown','lebih sedikit komunikasi yang putus','通信断絶の低減')}
  <b>→</b> ${L('retention signal','sinyal retensi','定着シグナル')}
  </div>
  ${derived('The document is explicit that this is a hypothesis to be measured, not an established fact. If it collapses, the business thesis collapses with it.','Dokumen ini eksplisit bahwa ini hipotesis yang harus diukur, bukan fakta yang sudah mapan. Jika runtuh, tesis bisnisnya runtuh bersamanya.','これは確証された事実ではなく測定対象の仮説であると明記されている。仮説が崩れれば事業仮説も崩れる。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Scope','Scope','スコープ')}</span>
  <h2>${L('What is in, and what is refused.','Apa yang masuk, dan apa yang ditolak.','何が入り、何が拒まれるか。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('In scope','Dalam scope','対象')}</th><th>${L('Out of scope','Di luar scope','対象外')}</th><th>${L('Reason given','Alasan yang dinyatakan','理由')}</th></tr></thead>
    <tbody>
      <tr><td>${L('Bidirectional messaging, worker may initiate; originals always retained','Pesan dua arah, pekerja boleh memulai; teks asli selalu dipertahankan','双方向メッセージング（労働者からも起点可）、原文常時保持')}</td><td>${L('Private worker-to-worker chat','Chat privat antar pekerja','労働者同士の私的チャット')}</td><td>${L('LINE and WhatsApp already own private messaging; entering it would read as surveillance and cost more trust than it gains.','LINE dan WhatsApp sudah menguasai pesan privat; memasukinya akan terbaca sebagai pengawasan dan biayanya lebih besar dari manfaatnya.','私的通信はLINE・WhatsAppが既に支配。踏み込めば監視と受け取られ、得より損が大きい。')}</td></tr>
      <tr><td>${L('ja / en / id translation, wrapping a commercial MT API','Terjemahan ja / en / id, membungkus API MT komersial','日・英・インドネシア語の翻訳（商用MT APIのラップ）')}</td><td>${L('An in-house translation engine','Mesin terjemahan sendiri','自前翻訳エンジン')}</td><td>${L('Parity is enough here. Differentiation is postponed to the Stage 2 context engine.','Paritas sudah cukup di sini. Diferensiasi ditunda ke context engine Stage 2.','ここはパリティで十分。差別化はStage 2の文脈翻訳エンジンで取る。')}</td></tr>
      <tr><td>${L('One daily-report template plus free text','Satu template laporan harian plus teks bebas','1テンプレート＋自由記述の最小日報')}</td><td>${L('Inspections, forms, approvals, dashboards','Inspeksi, formulir, persetujuan, dashboard','点検・帳票・承認・ダッシュボード')}</td><td>${L('That is Kaminashi territory, deferred to a later phase.','Itu wilayah Kaminashi, ditunda ke fase berikutnya.','Kaminashi領域。後続フェーズへ。')}</td></tr>
      <tr><td>${L('Mobile for workers, simple web for managers','Mobile untuk pekerja, web sederhana untuk manajer','労働者はモバイル、管理者は簡易web')}</td><td>${L('A polished integrated-platform UX','UX platform terintegrasi yang dipoles','磨き込んだ統合プラットフォームUX')}</td><td>${L('PoC grade is acceptable, stated in exactly those words.','Kelas PoC dapat diterima, dinyatakan persis dengan kata-kata itu.','PoCグレードで可、と明記されている。')}</td></tr>
      <tr><td>${L('Event logging for the KPIs','Logging event untuk KPI','KPI計測のイベントログ')}</td><td>${L('ML auto-classification of message types','Klasifikasi otomatis jenis pesan berbasis ML','メッセージの定型・非定型の自動分類')}</td><td>${L('Deferred, but the manager-load risk it was meant to solve is kept under measurement instead.','Ditunda, tapi risiko beban manajer yang hendak diatasinya tetap diukur sebagai gantinya.','ロードマップへ退避。ただし解こうとした管理者負荷は計測対象として監視を続ける。')}</td></tr>
      <tr><td>${L('The two psychological-safety minimums','Dua syarat minimum rasa aman psikologis','心理的安全性の最小要件2点')}</td><td>${L('One industry only, care recommended','Satu industri saja, caregiving direkomendasikan','1業種のみ、介護を推奨')}</td><td>${L('Visibility disclosure and pre-send preview are in scope not as polish but as conditions for the core KPI to mean anything.','Pengungkapan visibilitas dan pratinjau sebelum kirim masuk scope bukan sebagai pemanis, melainkan sebagai syarat agar KPI inti bermakna.','可視範囲の明示と送信前プレビューは磨き込みではなく、中核KPIが成立するための条件としてIn Scope。')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Data model','Model data','データモデル')}</span>
  <h2>${L('Five entities, and one key that carries the whole thesis.','Lima entitas, dan satu kunci yang memikul seluruh tesisnya.','5エンティティと、論全体を支える1つのキー。')}</h2>
  <div class="cmd">
Organization  <span class="c">id · name · industry</span>
User          <span class="c">id · org_id · role(worker/manager) · preferred_language</span>
Message       <span class="c">thread_id · body · source_language · translated_body</span>
              <span class="c">message_kind(template/free) · intent_tag(report/question/consult)</span>
WorkRecord    <span class="c">template_id · structured_fields(JSON) · free_text · source_language</span>
EventLog      <span class="c">user_id · event_type · payload</span>

<span class="c"># ${L('the unification key','kunci penyatuan','統一キー')}</span>
<b>user_id</b> <span class="c">— ${L('never subordinate to org_id','tidak pernah tunduk pada org_id','org_idに従属させない')}</span>
  </div>
  <div class="dev-grid" style="margin-top:28px">
    <div class="dev-card">
      <div class="code">F1</div>
      <h3>${L('Forward unification — built in the MVP','Penyatuan ke depan — dibangun di MVP','前方統一——MVPで実装')}</h3>
      <p>${L('Communication and work records are bound to the same schema and the same worker ID from the moment they occur, so no later integration work exists. The structural flaw in the incumbent stack is precisely that message logs and work records live in different systems under different ID schemes and cannot be reconciled per worker.','Komunikasi dan catatan kerja diikat ke skema dan ID pekerja yang sama sejak saat terjadinya, sehingga tidak ada pekerjaan integrasi belakangan. Cacat struktural pada stack lama justru bahwa log pesan dan catatan kerja berada di sistem berbeda dengan skema ID berbeda dan tidak bisa dicocokkan per pekerja.','通信と業務記録を、発生時点から同一スキーマ・同一労働者IDに紐づける。ゆえに事後の統合作業が存在しない。既存スタックの構造的欠陥は、通信ログと業務記録が別システム・別ID体系にあり労働者単位で突合できない点にある。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Acceptance test','Uji penerimaan','受け入れ基準')}</div>
      <h3>${L('One worker, one query, one timeline','Satu pekerja, satu query, satu timeline','労働者1名・単一クエリ・単一の時系列')}</h3>
      <p>${L('Data unification counts as implemented only when, for any single worker, the communication history and the work records can be retrieved and exported as one chronological result from a single query. That is the whole verification condition.','Penyatuan data terhitung terimplementasi hanya ketika, untuk satu pekerja mana pun, riwayat komunikasi dan catatan kerja bisa diambil dan diekspor sebagai satu hasil kronologis dari satu query. Itu seluruh syarat verifikasinya.','任意の労働者1名について、通信履歴と業務記録を単一クエリで時系列に統合取得・エクスポートできること。これが「データ統一が実装された」ことの唯一の検証条件である。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Chapter 10','Bab 10','第10章')}</span>
  <h2>${L('The chapter that admits the product looks like surveillance.','Bab yang mengakui bahwa produk ini terlihat seperti pengawasan.','製品が監視ツールと見分けがつかないことを認めた章。')}</h2>
  <p class="lede">${L('It states plainly that the MVP feature set is externally indistinguishable from a tool for managers to control workers, and that declaring the worker the subject of the data model does not by itself implement anything. Four mechanisms are offered instead.','Bab ini menyatakan terus terang bahwa set fitur MVP secara luar tidak bisa dibedakan dari alat manajer mengendalikan pekerja, dan bahwa mendeklarasikan pekerja sebagai subjek model data tidak dengan sendirinya mengimplementasikan apa pun. Empat mekanisme ditawarkan sebagai gantinya.','MVPの機能群は外形上「管理者が労働者を管理するツール」と区別がつかず、データモデルの主体定義だけでは労働者主体は実装されない、と明記する。代わりに4つの仕組みを置く。')}</p>
  <div class="dev-grid">
    <div class="dev-card"><div class="code">01</div><h3>${L('Portable career asset','Aset karier portabel','ポータブル職歴資産')}</h3><p>${L('Records belong to an org-independent worker ID and survive a job change. Falsifying them damages the worker\\u2019s own asset, so honesty follows from self-interest rather than external monitoring.','Catatan milik ID pekerja yang tidak tergantung organisasi dan bertahan melewati pindah kerja. Memalsukannya merusak aset pekerja itu sendiri, jadi kejujuran lahir dari kepentingan sendiri, bukan pengawasan eksternal.','記録は組織非従属の労働者IDに帰属し、転職後も持続する。虚偽記載は自分の資産を毀損するため、正直性は外部監視ではなく自己利益から導かれる。')}</p></div>
    <div class="dev-card"><div class="code">02</div><h3>${L('The right to speak in one\\u2019s own language','Hak berbicara dalam bahasa sendiri','母語での発信権')}</h3><p>${L('The most immediate benefit: the cost of not being able to ask — wrong execution, being scolded, isolation — is removed from day one.','Manfaat paling langsung: biaya karena tidak bisa bertanya — salah kerja, dimarahi, terisolasi — hilang sejak hari pertama.','最も即効性のある実利。「質問できないこと」のコスト——誤実行・叱責・孤立——を導入初日に解消する。')}</p></div>
    <div class="dev-card"><div class="code">03</div><h3>${L('Records separated from punishment','Catatan dipisahkan dari hukuman','記録と懲罰の分離')}</h3><p>${L('A report wired to appraisal structurally induces false reporting. Honesty is secured by removing the motive to lie from the design, not by relying on goodwill.','Laporan yang terhubung ke penilaian secara struktural memicu laporan palsu. Kejujuran dijamin dengan menghapus motif berbohong dari desain, bukan dengan mengandalkan niat baik.','査定に直結する日報は虚偽報告を構造的に誘発する。嘘を書かないは善意ではなく、動機を製品設計から除去して担保する。')}</p></div>
    <div class="dev-card"><div class="code">04</div><h3><span class="tag stop">${L('Rejected','Ditolak','不採用')}</span> ${L('Points and rewards','Poin dan imbalan','ポイント・報酬')}</h3><p>${L('Extrinsic motivation is refused outright: it contaminates the motive for recording and destroys the data\\u2019s value as Stage 2 training material.','Motivasi ekstrinsik ditolak sepenuhnya: ia mencemari motif pencatatan dan menghancurkan nilai data sebagai bahan latih Stage 2.','外発的動機付けは採用しない。記録の動機を汚染し、Stage 2の学習素材としてのデータ価値を毀損するため。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Open items','Item terbuka','未決')}</span>
  <h2>${L('Five things the document refuses to settle.','Lima hal yang dokumen ini tolak untuk putuskan.','本書が決着させない5点。')}</h2>
  <div class="dev-meta">
    <span>${L('Care only, or care and construction in parallel','Hanya care, atau care dan konstruksi paralel','介護1本か、介護＋建設の同時検証か')}</span>
    <span>${L('Authentication method','Metode autentikasi','認証方式')}</span>
    <span>${L('Report template first, or free text first','Template laporan dulu, atau teks bebas dulu','日報テンプレ先行か、自由記述先行か')}</span>
    <span>${L('Kaminashi quote, needed to sharpen the price comparison','Kutipan harga Kaminashi, dibutuhkan untuk mempertajam perbandingan harga','価格対比の精緻化に必要なKaminashi見積もり額')}</span>
    <span>${L('API integration feasibility and cost','Kelayakan dan biaya integrasi API','API連携の技術的実現性とコスト')}</span>
  </div>
  ${derived('Price is positioned at 5,000 yen per person per month, framed not as a replacement for one tool but as the integrated price of a stack — LINE WORKS at 540 yen per person plus Kaminashi setup and monthly per-ID fees.','Harga diposisikan 5.000 yen per orang per bulan, dibingkai bukan sebagai pengganti satu alat melainkan harga terintegrasi sebuah stack — LINE WORKS 540 yen per orang plus biaya awal Kaminashi dan biaya bulanan per ID.','価格は1人あたり月5,000円。単一ツールの代替ではなく、LINE WORKS 540円/人＋Kaminashiの初期費用と月額/IDというスタックの統合価格として位置づけられている。')}
  ${backTo('#/dev/documents', L('Back to the document library','Kembali ke pustaka dokumen','ドキュメント一覧へ戻る'))}
</div></section>`;
