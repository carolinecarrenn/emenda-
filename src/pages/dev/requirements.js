/* dev/requirements  —  PAGES.devRequirements
   Digest of Emenda Stage 1 DRD v2.0: screens, principles, components, open questions. */
PAGES.devRequirements=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · specification','Internal · spesifikasi','社内 · 仕様')}</span>
  <h1>${L('Stage 1, as the specification actually defines it.','Stage 1, sebagaimana didefinisikan spesifikasinya.','仕様書が定めるStage 1の実像。')}</h1>
  <p>${L('The Design Requirement Document v2.0 governs the Figma design phase and nothing else — no APIs, no schemas, no backend. It traces every requirement back to the business PRD, and it is deliberately far smaller than what has since been built.','Design Requirement Document v2.0 hanya mengatur fase desain Figma — tanpa API, skema, maupun backend. Setiap requirement dirujuk kembali ke PRD bisnis, dan cakupannya sengaja jauh lebih kecil daripada yang sudah dibangun sekarang.','Design Requirement Document v2.0 はFigma設計フェーズのみを規定する。API・スキーマ・バックエンドは含まない。全要件を事業PRDに遡って参照し、その範囲は現在の実装より意図的にはるかに小さい。')}</p>
  <div class="dev-meta">
    <span>v2.0</span>
    <span>9 ${L('screens','layar','画面')}</span>
    <span>8 ${L('flows','flow','フロー')}</span>
    <span>13 ${L('open questions','open question','未決事項')}</span>
    <span class="tag warn">${L('Caregiving only','Hanya caregiving','介護のみ')}</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Read this first','Baca ini dulu','最初に読むこと')}</span>
  <h2>${L('Every statement declares what kind of statement it is.','Setiap pernyataan menyatakan jenis pernyataannya sendiri.','各記述は、自らが何種類の記述かを明示している。')}</h2>
  <p class="lede">${L('This is the most useful convention in the document. Before acting on any line, check which of the four it is — only the first kind is binding.','Ini konvensi paling berguna di dokumen tersebut. Sebelum menindaklanjuti satu baris pun, periksa termasuk yang mana dari empat jenis ini — hanya jenis pertama yang mengikat.','これは本文書で最も有用な規約である。どの記述に従う前にも、4種のいずれかを確認すること。拘束力を持つのは第一のもののみ。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('Kind','Jenis','種別')}</th><th>${L('Means','Artinya','意味')}</th><th>${L('Binding','Mengikat','拘束力')}</th></tr></thead>
    <tbody>
      <tr><td>${L('Cited statement','Pernyataan dengan sitasi','出典付き記述')}</td><td>${L('A requirement traced to the PRD or to the Figma handoff source.','Requirement yang dirujuk ke PRD atau ke sumber handoff Figma.','PRDまたはFigmaハンドオフ原典に遡る要件。')}</td><td><span class="tag ok">${L('Yes','Ya','あり')}</span></td></tr>
      <tr><td><code>[DR]</code></td><td>${L('A design decision proposed because the PRD is silent. A reviewer may replace it, but some resolution must be implemented and recorded.','Keputusan desain yang diusulkan karena PRD tidak mengatur. Reviewer boleh menggantinya, tapi harus ada resolusi yang diimplementasikan dan dicatat.','PRDが沈黙しているため設計側が提案した判断。差し替え可だが、何らかの解決を実装し記録する必要がある。')}</td><td><span class="tag info">${L('Replaceable','Bisa diganti','差替可')}</span></td></tr>
      <tr><td><code>[ASSUMPTION]</code></td><td>${L('A value the PRD marks provisional. Designed as stated, and must be revisited when the PRD closes it.','Nilai yang ditandai sementara oleh PRD. Didesain sebagaimana tertulis, dan harus ditinjau ulang ketika PRD menutupnya.','PRDが暫定としている値。記載どおり設計し、PRDが確定した時点で見直す。')}</td><td><span class="tag warn">${L('Provisional','Sementara','暫定')}</span></td></tr>
      <tr><td><code>[OPEN]</code></td><td>${L('A question the PRD leaves undecided. The design must not silently resolve it; where the outcome changes the UI, both variants are designed.','Pertanyaan yang dibiarkan terbuka oleh PRD. Desain tidak boleh menutupnya diam-diam; bila hasilnya mengubah UI, kedua varian didesain.','PRDが未決としている論点。設計側が黙って決めてはならず、UIが変わる場合は両案を設計する。')}</td><td><span class="tag stop">${L('Undecided','Belum diputuskan','未決')}</span></td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Screen inventory','Inventaris layar','画面一覧')}</span>
  <h2>${L('A closed set. No other screens exist.','Set tertutup. Tidak ada layar lain.','閉じた集合。これ以外の画面は存在しない。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>ID</th><th>${L('Screen','Layar','画面')}</th><th>${L('Purpose','Tujuan','目的')}</th></tr></thead>
    <tbody>
      <tr><td>W-01</td><td>Login</td><td>${L('Worker authentication. Invite code plus PIN, provisionally.','Autentikasi pekerja. Kode undangan plus PIN, bersifat sementara.','労働者認証。暫定として招待コード＋PIN。')}</td></tr>
      <tr><td>W-02</td><td>Language Select</td><td>${L('Sets preferred_language, which then renders every string on the worker device.','Menetapkan preferred_language, yang lalu merender setiap teks di perangkat pekerja.','preferred_language を設定し、以後の全文言がその言語で描画される。')}</td></tr>
      <tr><td>W-03</td><td>Onboarding / Consent</td><td>${L('Visibility disclosure, record ownership, consent. Gates access to everything after it.','Pengungkapan visibilitas, kepemilikan catatan, persetujuan. Menjadi gerbang ke semua setelahnya.','可視範囲の開示、記録の所有権、同意。以降のすべてへの入口を制御する。')}</td></tr>
      <tr><td>W-04</td><td>Chat <span class="tag info">core</span></td><td>${L('The root screen after onboarding. Messages carry a required intent tag and a source-language identity.','Layar utama setelah onboarding. Pesan membawa intent tag wajib dan identitas bahasa sumber.','オンボーディング後のルート画面。メッセージには必須のintent tagと原言語の識別が付く。')}</td></tr>
      <tr><td>W-04a</td><td>Translation Preview</td><td>${L('A drawer over chat, not a separate screen. The worker sees the translation before it is sent.','Drawer di atas chat, bukan layar terpisah. Pekerja melihat terjemahannya sebelum terkirim.','チャット上のドロワーであり独立画面ではない。送信前に翻訳を本人が確認する。')}</td></tr>
      <tr><td>W-05</td><td>Daily Report</td><td>${L('Subject and condition are required; meal and free text are optional. Free text is written in the mother tongue.','Subjek dan kondisi wajib; makan dan teks bebas opsional. Teks bebas ditulis dalam bahasa ibu.','対象者と状態は必須、食事と自由記述は任意。自由記述は母語で書く。')}</td></tr>
      <tr><td>W-05a</td><td>Sent Confirmation</td><td>${L('A toast over the report screen.','Toast di atas layar laporan.','日報画面上のトースト。')}</td></tr>
      <tr><td>W-06</td><td>Settings</td><td>${L('Language change re-renders immediately and never alters the originals the worker wrote.','Ganti bahasa langsung merender ulang dan tidak pernah mengubah teks asli yang ditulis pekerja.','言語変更は即座に再描画され、労働者が書いた原文は決して変更されない。')}</td></tr>
      <tr><td>A-01 … A-04a</td><td>${L('Company Admin web','Web Company Admin','企業管理Web')}</td><td>${L('Login, organization onboarding, messages with a KPI strip, report list, and a report detail drawer holding the unified per-worker timeline.','Login, onboarding organisasi, pesan dengan KPI strip, daftar laporan, dan drawer detail laporan berisi timeline terpadu per pekerja.','ログイン、組織オンボーディング、KPIストリップ付きメッセージ、日報一覧、労働者単位の統合タイムラインを持つ詳細ドロワー。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('Admin screens cover single-organization scope (Company Admin): no organization switcher, no user management beyond issuing invitations, no settings tab. Super Admin governance operates at the platform layer.','Layar admin mencakup lingkup organisasi tunggal (Company Admin): tanpa pengalih organisasi, tanpa manajemen pengguna selain menerbitkan undangan, tanpa tab pengaturan. Tata kelola Super Admin beroperasi di layer platform.','管理画面は単一組織スコープ（Company Admin）を対象とし、組織切替なし、招待発行以外のユーザー管理なし、設定タブなし。Super Adminはプラットフォーム層で統括。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Load-bearing decisions','Keputusan penopang','根幹となる決定')}</span>
  <h2>${L('Four rules that cannot be traded away in design.','Empat aturan yang tidak bisa ditawar dalam desain.','設計で妥協できない4つの規約。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">P-1</div>
      <h3>${L('The worker is the subject, never a monitored object','Pekerja adalah subjek, bukan objek yang dipantau','労働者は主体であり、監視対象ではない')}</h3>
      <p>${L('No location, activity-tracking or compliance affordances exist anywhere in the design. Content the worker authored is never typographically subordinated on the worker own screen.','Tidak ada fitur lokasi, pelacakan aktivitas, atau kepatuhan di mana pun dalam desain. Konten yang ditulis pekerja tidak pernah dikecilkan secara tipografi di layarnya sendiri.','位置情報・行動追跡・コンプライアンス的な要素は一切設計に存在しない。労働者が書いた内容は、本人の画面上で書式的に従属させない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">P-2</div>
      <h3>${L('Psychological safety is a functional requirement','Rasa aman psikologis adalah requirement fungsional','心理的安全性は機能要件である')}</h3>
      <p>${L('Permanent visibility of audience and pre-send translation preview are treated as conditions of measurement validity. Those two components may never be collapsed, hidden behind a menu, or restyled per screen.','Visibilitas audiens yang permanen dan pratinjau terjemahan sebelum kirim diperlakukan sebagai syarat validitas pengukuran. Kedua komponen itu tidak boleh diciutkan, disembunyikan di balik menu, atau diberi gaya berbeda per layar.','閲覧範囲の常時表示と送信前の翻訳プレビューは、測定の妥当性条件として扱われる。この2要素は折りたたみ・メニュー内への格納・画面ごとの装飾変更のいずれも禁止。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">P-5</div>
      <h3>${L('Intent tagging is required, with no default selected','Intent tagging wajib, tanpa pilihan default','intent tagは必須、初期選択なし')}</h3>
      <p>${L('It must cost one tap. A pre-selected default is rejected specifically because it would bias the message-type KPI.','Harus cukup satu ketukan. Default yang sudah terpilih ditolak justru karena akan membiaskan KPI jenis pesan.','1タップで済むこと。初期選択を設けないのは、それが種別構成のKPIを歪めるためである。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">P-6</div>
      <h3>${L('A record is not a punishment','Catatan bukan hukuman','記録は罰ではない')}</h3>
      <p>${L('The daily report is a state-sharing channel. Nothing in it may resemble scoring, grading or approval, and no gamification or point mechanics are permitted.','Laporan harian adalah kanal berbagi kondisi. Tidak boleh ada yang menyerupai penilaian, pemeringkatan, atau persetujuan, dan tidak boleh ada gamifikasi maupun mekanik poin.','日報は状態共有の手段である。採点・評価・承認を思わせる要素は禁止。ゲーミフィケーションやポイント機構も認めない。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Components','Komponen','コンポーネント')}</span>
  <h2>${L('Seven components carry the specification.','Tujuh komponen menopang spesifikasi ini.','仕様を支える7つのコンポーネント。')}</h2>
  <p class="lede">${L('One component set serves both surfaces, and each appears identically wherever its function recurs. A pattern used only once counts as a defect unless the design source defines it as unique.','Satu set komponen melayani kedua permukaan, dan masing-masing tampil identik di mana pun fungsinya berulang. Pola yang dipakai sekali saja terhitung cacat, kecuali sumber desain menetapkannya sebagai unik.','1つのコンポーネントセットが両面を担い、機能が再登場する箇所では常に同一の見た目となる。一度しか使われないパターンは、設計原典が固有と定めない限り欠陥とみなす。')}</p>
  <div class="dev-meta">
    <span class="mono">DualBubble</span>
    <span class="mono">VisibilityBanner</span>
    <span class="mono">TranslationPreviewCard</span>
    <span class="mono">IntentTagRow</span>
    <span class="mono">LangChip</span>
    <span class="mono">KPIChip</span>
    <span class="mono">CondChip</span>
  </div>
  ${derived('The KPI strip is the documented exception: it exists on the admin messages screen only. Spacing comes from the token scale exclusively.','KPI strip adalah pengecualian yang terdokumentasi: hanya ada di layar pesan admin. Spacing sepenuhnya mengikuti skala token.','KPIストリップは明記された例外で、管理側メッセージ画面にのみ存在する。余白はトークンスケールのみから取る。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Open questions','Open question','未決事項')}</span>
  <h2>${L('Thirteen questions the specification refuses to answer for the business.','Tiga belas pertanyaan yang sengaja tidak dijawab spesifikasi ini untuk sisi bisnis.','仕様書が事業側に代わって答えることを拒んだ13の問い。')}</h2>
  <p class="lede">${L('Each one is designed around rather than closed. Several are still open in the built product, which is why they are worth reading before promising behaviour to anyone.','Masing-masing didesain melingkupinya, bukan ditutup. Beberapa masih terbuka di produk yang sudah dibangun, dan karena itu perlu dibaca sebelum menjanjikan perilaku apa pun ke siapa pun.','いずれも決着させず、周囲を設計している。実装済み製品でも未決のものがあるため、挙動を誰かに約束する前に読むべきである。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>ID</th><th>${L('Question','Pertanyaan','論点')}</th><th>${L('How the design handles it','Cara desain menanganinya','設計上の扱い')}</th></tr></thead>
    <tbody>
      <tr><td>O-1</td><td>${L('Final authentication method','Metode autentikasi final','最終的な認証方式')}</td><td>${L('Credential inputs isolated as a swappable component group.','Input kredensial diisolasi sebagai grup komponen yang bisa ditukar.','認証入力を差し替え可能なコンポーネント群として分離。')}</td></tr>
      <tr><td>O-2</td><td>${L('PIN digit count','Jumlah digit PIN','PINの桁数')}</td><td>${L('Four digits, assumed.','Empat digit, diasumsikan.','4桁と仮定。')}</td></tr>
      <tr><td>O-5</td><td>${L('Same worker, same-day duplicate report','Laporan ganda dari pekerja yang sama di hari yang sama','同一労働者・同日の重複日報')}</td><td>${L('No blocking UI. Submit is always allowed.','Tanpa UI pemblokir. Submit selalu diizinkan.','ブロックUIなし。送信は常に許可。')}</td></tr>
      <tr><td>O-6</td><td>${L('What happens when translation fails','Apa yang terjadi saat terjemahan gagal','翻訳失敗時の挙動')}</td><td>${L('Both variants designed; sending the original is the recommended resolution.','Kedua varian didesain; mengirim teks asli adalah resolusi yang direkomendasikan.','両案を設計。原文送信を推奨案とする。')}</td></tr>
      <tr><td>O-8</td><td>${L('KPI alert thresholds','Ambang peringatan KPI','KPIアラートの閾値')}</td><td>${L('Alert variant designed; thresholds annotated configurable.','Varian alert didesain; ambangnya diberi anotasi configurable.','アラート表示を設計し、閾値はconfigurableと注記。')}</td></tr>
      <tr><td>O-10</td><td>${L('Push notifications','Notifikasi push','プッシュ通知')}</td><td>${L('No push UI designed at all. In-app unread badges only.','Sama sekali tidak ada UI push. Hanya badge belum dibaca di dalam aplikasi.','プッシュUIは一切設計しない。アプリ内の未読バッジのみ。')}</td></tr>
      <tr><td>O-12</td><td>${L('PIN recovery flow','Alur pemulihan PIN','PIN再設定フロー')}</td><td>${L('A link to a static instruction sheet, and no flow beyond it.','Tautan ke lembar instruksi statis, dan tidak ada alur lain setelahnya.','静的な案内への導線のみ。その先のフローはない。')}</td></tr>
      <tr><td>O-13</td><td>${L('Care only, or care plus construction','Hanya care, atau care plus konstruksi','介護のみか、介護＋建設か')}</td><td>${L('Designed care-only; the report template is structured for substitution.','Didesain khusus care; template laporan disusun agar bisa disubstitusi.','介護のみで設計。日報テンプレートは差し替え可能な構造にする。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('Eight of the thirteen are shown here. O-3, O-4, O-7, O-9 and O-11 concern invite-code expiry, message length, post-submit routing, voice input scope and final consent wording.','Delapan dari tiga belas ditampilkan di sini. O-3, O-4, O-7, O-9, dan O-11 menyangkut kedaluwarsa kode undangan, panjang pesan, routing setelah submit, cakupan input suara, dan redaksi final consent.','13件中8件を掲載。O-3・O-4・O-7・O-9・O-11は、招待コードの有効期限、メッセージ長、送信後の遷移、音声入力の範囲、同意文言の確定に関する。')}
  ${backTo('#/dev/documents', L('Back to the document library','Kembali ke pustaka dokumen','ドキュメント一覧へ戻る'))}
</div></section>`;
