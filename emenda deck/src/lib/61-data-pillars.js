/* ============================================================
   PILLAR MODEL
   Nine pillars group the 15 official module groups of the frozen
   Product Feature Catalog v1.0 r10 (59 approved features).
   Feature counts below sum to exactly 59.
   ============================================================ */
const buildPillars = () => [
  {
    n:'01', slug:'identity-access', features:12, rel:'R1',
    name:L('Identity & Access','Identitas & Akses','アイデンティティとアクセス'),
    lede:L(
      'A lifetime EMENDA ID issued to the worker, before an employer exists and after one ends.',
      'EMENDA ID seumur hidup yang diterbitkan atas nama worker — sebelum ada employer, dan setelah hubungan kerja berakhir.',
      '雇用主が存在する前に発行され、雇用終了後も残る、労働者本人のEMENDA ID。'),
    body:L(
      'This is the pillar that makes every other pillar possible. The identity is not a row inside an employer account — it is issued to the person, survives resignation and transfer, and can be reconnected to a new organization without re-entering a history that already exists. Authentication, language choice, employment connection, resignation continuity and data export all live here.',
      'Ini pilar yang membuat pilar lain mungkin ada. Identitas bukan baris di dalam akun employer — ia diterbitkan atas nama orangnya, bertahan melewati resign dan transfer, dan bisa dihubungkan ulang ke organisasi baru tanpa mengetik ulang riwayat yang sudah ada. Authentication, pemilihan bahasa, employment connection, kontinuitas setelah resign, dan export data semuanya di sini.',
      '他のすべての柱を成立させる柱。IDは雇用主アカウント内の一行ではなく、本人に発行され、退職・転籍を越えて存続し、既存の履歴を再入力せずに新しい組織へ再接続できる。認証、言語選択、雇用接続、退職後の継続性、データエクスポートをここに含む。'),
    modules:[
      ['M01', L('Identity & Access','Identitas & Akses','アイデンティティとアクセス'), 12,
        L('Lifetime EMENDA ID, authentication, language, employment connection, resignation continuity, re-connection, export, self-registration.',
          'Lifetime EMENDA ID, authentication, bahasa, employment connection, kontinuitas setelah resign, re-connection, export, self-registration.',
          '生涯EMENDA ID、認証、言語、雇用接続、退職後継続、再接続、エクスポート、自己登録。'), 'R1']
    ],
    built:[
      ['19', L('routes','route','ルート'), L('11 auth · 6 EMENDA ID onboarding · unified sign-in · post-auth routing.','11 auth · 6 onboarding EMENDA ID · unified sign-in · post-auth routing.','認証11・EMENDA IDオンボーディング6・統合サインイン・認証後ルーティング。')],
      ['70', L('screens & states','screen & state','画面・状態'), L('Auth 44 · EMENDA ID & Identity 26 in the parity matrix.','Auth 44 · EMENDA ID & Identity 26 pada parity matrix.','パリティ表でAuth 44・EMENDA ID 26。')],
      ['56', L('signed off','sudah signed off','検証済み'), L('41/44 Auth and 15/26 Identity COMPLETE; the rest await a desktop visual audit.','41/44 Auth dan 15/26 Identity COMPLETE; sisanya menunggu visual audit desktop.','Auth 41/44、Identity 15/26がCOMPLETE。残りはデスクトップ視覚監査待ち。')]
    ],
    boundary:L(
      'The worker owns the identity. An employer connection is time-bound and grants operational visibility only for its duration — it never transfers ownership of the record.',
      'Worker memiliki identitasnya. Employer connection berbatas waktu dan hanya memberi visibilitas operasional selama periode itu — kepemilikan record tidak pernah berpindah.',
      'IDの主体は労働者本人。雇用接続は期間限定で、その間の運用可視性のみを与える。記録の帰属は移転しない。'),
    gap:L(
      'There is no backend and no real authentication. The PIN and OTP screens validate shape, not identity — submitting a correct-looking value calls navigate(). Every access control described here belongs to the backend that has not been built.',
      'Belum ada backend dan belum ada authentication sungguhan. Layar PIN dan OTP memvalidasi bentuk, bukan identitas — mengirim nilai yang benar hanya memanggil navigate(). Semua access control yang dijelaskan di sini adalah milik backend yang belum dibangun.',
      'バックエンドも実認証も存在しない。PIN/OTP画面は形式のみを検証し、正しい値の送信はnavigate()を呼ぶだけ。ここで述べるアクセス制御はすべて未構築のバックエンドの責務。')
  },
  {
    n:'02', slug:'organization-connection', features:3, rel:'R1',
    name:L('Organization & Connection','Organisasi & Koneksi','組織と接続'),
    lede:L(
      'The employer side of the relationship: manager access, organization setup, and invitation.',
      'Sisi employer dari relasi: akses manager, setup organisasi, dan undangan.',
      '関係の雇用主側：管理者アクセス、組織セットアップ、招待。'),
    body:L(
      'A worker joins an organization; an organization does not create a worker. That order is the product decision this pillar encodes. Manager authentication, organization creation and invite issuance exist so an employer can attach itself to an identity that already stands on its own — and detach without erasing it.',
      'Worker bergabung ke organisasi; organisasi tidak membuat worker. Urutan itulah keputusan produk yang dikodekan pilar ini. Manager authentication, pembuatan organisasi, dan penerbitan invite ada agar employer bisa menempel pada identitas yang sudah berdiri sendiri — dan melepas tanpa menghapusnya.',
      '労働者が組織に参加するのであり、組織が労働者を作るのではない。この順序こそがこの柱の製品判断である。管理者認証・組織作成・招待発行は、既に自立したIDに雇用主が接続し、消さずに切断できるために存在する。'),
    modules:[
      ['M02', L('Organization Management','Manajemen Organisasi','組織管理'), 3,
        L('Manager authentication, organization creation, invite issuance and management.',
          'Manager authentication, pembuatan organisasi, penerbitan dan pengelolaan invite.',
          '管理者認証、組織作成、招待の発行と管理。'), 'R1']
    ],
    built:[
      ['12', L('routes','route','ルート'), L('5 manager auth · 3 facility context/switch · 4 worker-side employer connection.','5 manager auth · 3 facility context/switch · 4 employer connection sisi worker.','管理者認証5・施設コンテキスト3・労働者側の雇用接続4。')],
      ['66', L('screens & states','screen & state','画面・状態'), L('Connect Employer 22 · Manager Entry & Recovery 26 · Workspace & Core Ops 18.','Connect Employer 22 · Manager Entry & Recovery 26 · Workspace & Core Ops 18.','雇用主接続22・管理者エントリ26・ワークスペース18。')],
      ['22/22', L('worker side COMPLETE','sisi worker COMPLETE','労働者側COMPLETE'), L('Connect Employer & Consent is fully signed off on both viewports.','Connect Employer & Consent sudah signed off penuh di kedua viewport.','雇用主接続と同意は両ビューポートで完全に検証済み。')]
    ],
    boundary:L(
      'Connection is consented, scoped and reversible. Ending a connection ends visibility, not the record.',
      'Koneksi bersifat consented, ter-scope, dan reversible. Mengakhiri koneksi mengakhiri visibilitas, bukan record-nya.',
      '接続は同意に基づき、範囲が限定され、取り消し可能。接続終了は可視性の終了であり、記録の終了ではない。'),
    gap:L(
      'Manager desktop frames for this section still carry needs-audit on the visual column; the flow is reachable, the pixel sign-off is not finished.',
      'Frame manager desktop untuk section ini masih needs-audit pada kolom visual; flow-nya sudah bisa dijangkau, sign-off pixel-nya belum selesai.',
      'このセクションの管理者デスクトップフレームは視覚列がneeds-auditのまま。フローは到達可能だが、ピクセル検証は未完了。')
  },
  {
    n:'03', slug:'communication-translation', features:14, rel:'R1',
    name:L('Communication & Translation','Komunikasi & Terjemahan','コミュニケーションと翻訳'),
    lede:L(
      'Two-way translated messaging where the original is never thrown away.',
      'Messaging dua arah dengan terjemahan, di mana teks asli tidak pernah dibuang.',
      '原文を捨てない双方向翻訳メッセージング。'),
    body:L(
      'The core hypothesis of the MVP lives here: worker-initiated, two-way translated communication reduces the breakdowns that precede attrition. The design rule is the dual bubble — translation and original shown together, with a preview before sending, so neither side is asked to trust a translation they cannot inspect. Intent tags (report / question / consultation) and a permanent visibility banner make the audience of a message explicit before it is written.',
      'Hipotesis inti MVP ada di sini: komunikasi dua arah yang diinisiasi worker mengurangi keterputusan yang mendahului attrition. Aturan desainnya adalah dual bubble — terjemahan dan teks asli ditampilkan bersama, dengan preview sebelum kirim, sehingga tidak ada pihak yang diminta memercayai terjemahan yang tak bisa ia periksa. Intent tag (laporan / pertanyaan / konsultasi) dan banner visibilitas permanen membuat audiens sebuah pesan jelas sebelum pesan itu ditulis.',
      'MVPの中核仮説はここにある。労働者起点の双方向翻訳通信が、離職に先行する断絶を減らす。設計原則は二段バブル——訳文と原文を併存させ、送信前にプレビューする。検証できない翻訳を信じるよう求めない。種別タグ（報告／質問／相談）と常設の可視範囲バナーが、書く前に読み手を明示する。'),
    modules:[
      ['M03', L('Communication','Komunikasi','コミュニケーション'), 10,
        L('Worker messaging, dual bubbles, original retention, translation preview, intent tags, manager reply, receipts, voice input.',
          'Worker messaging, dual bubble, retensi teks asli, translation preview, intent tag, balasan manager, receipt, input suara.',
          '労働者メッセージ、二段バブル、原文保持、翻訳プレビュー、種別タグ、管理者返信、既読、音声入力。'), 'R1'],
      ['M04', L('Translation','Terjemahan','翻訳'), 4,
        L('Commercial MT, care-domain glossary, fourth-language expansion, future context translation.',
          'MT komersial, glosarium domain care, ekspansi bahasa keempat, context translation di masa depan.',
          '商用MT、介護ドメイン辞書、第4言語拡張、将来の文脈翻訳。'), 'R1–R3']
    ],
    built:[
      ['6', L('routes','route','ルート'), L('Worker chat list and thread · manager communication, compose, review, thread.','Chat list dan thread worker · manager communication, compose, review, thread.','労働者チャット一覧とスレッド・管理者の通信、作成、確認、スレッド。')],
      ['34', L('screens & states','screen & state','画面・状態'), L('Worker Chat 22 · Manager Communication 12, including the translation review gate.','Worker Chat 22 · Manager Communication 12, termasuk gate translation review.','労働者チャット22・管理者通信12（翻訳確認ゲートを含む）。')],
      ['0', L('translation engine','engine terjemahan','翻訳エンジン'), L('The prototype pairs a typed message with a fixed mock Japanese string. Real per-message translation needs a service.','Prototype memasangkan pesan yang diketik dengan string Jepang mock tetap. Terjemahan per-pesan yang nyata butuh service.','プロトタイプは入力メッセージに固定のモック日本語を対応させる。実翻訳にはサービスが必要。')]
    ],
    boundary:L(
      'The original message is preserved alongside every translation, and the recipient set is shown before sending — not after.',
      'Pesan asli disimpan berdampingan dengan setiap terjemahan, dan daftar penerima ditampilkan sebelum kirim — bukan sesudah.',
      '原文はすべての訳文と併存して保持され、送信先は送信後ではなく送信前に提示される。'),
    gap:L(
      'chatMock.stubTranslation returns one fixed string. The dual-bubble UI, the preview gate and the retention rule are real; the engine behind them is not.',
      'chatMock.stubTranslation mengembalikan satu string tetap. UI dual-bubble, preview gate, dan aturan retensi nyata; engine di belakangnya belum.',
      'chatMock.stubTranslationは固定文字列を返す。二段バブルUI・プレビューゲート・保持ルールは実装済みだが、その背後のエンジンは未実装。')
  },
  {
    n:'04', slug:'work-records', features:9, rel:'R1–R2',
    name:L('Work Records & Work Log','Catatan Kerja & Work Log','業務記録とワークログ'),
    lede:L(
      'The daily report, and the portable professional history it accumulates into.',
      'Laporan harian, dan riwayat profesional portabel yang terbentuk darinya.',
      '日報と、それが蓄積してできる持ち運び可能な職歴。'),
    body:L(
      'A report is only worth writing if it ends somewhere. This pillar covers the structured daily report, the free-text-plus-preview confirmation flow, the manager report list, the unified worker timeline, and the WORK LOG that turns a year of reports into evidence a worker can carry to the next employer. Career and CV — 108 screens, all signed off — is the largest single area of the implemented app.',
      'Laporan hanya layak ditulis kalau berakhir di suatu tempat. Pilar ini mencakup laporan harian terstruktur, alur konfirmasi free-text-plus-preview, report list manager, timeline worker terpadu, dan WORK LOG yang mengubah setahun laporan menjadi bukti yang bisa dibawa worker ke employer berikutnya. Career & CV — 108 screen, semuanya signed off — adalah area terbesar di aplikasi yang sudah dibangun.',
      '報告は、どこかに着地して初めて書く価値がある。この柱は構造化日報、自由記述＋プレビュー確認フロー、管理者の報告一覧、統合タイムライン、そして一年分の報告を次の雇用主へ持ち出せる証明に変えるWORK LOGを含む。キャリア・CVは108画面すべて検証済みで、実装済みアプリ最大の領域。'),
    modules:[
      ['M05', L('Work Records','Catatan Kerja','業務記録'), 6,
        L('Care daily report, free text + preview, confirmation, manager report list, unified timeline, construction template.',
          'Laporan harian care, free text + preview, konfirmasi, report list manager, timeline terpadu, template konstruksi.',
          '介護日報、自由記述＋プレビュー、確認、管理者報告一覧、統合タイムライン、建設テンプレート。'), 'R1'],
      ['M06', L('Work Log','Work Log','ワークログ'), 3,
        L('Structured professional history, certifications, worker profile view.',
          'Riwayat profesional terstruktur, sertifikasi, tampilan profil worker.',
          '構造化職歴、資格、労働者プロフィール表示。'), 'R2']
    ],
    built:[
      ['215', L('screens & states','screen & state','画面・状態'), L('Career & CV 108 · Logs & Records 64 · Reports 36 · Manager Reports 7.','Career & CV 108 · Logs & Records 64 · Reports 36 · Manager Reports 7.','キャリア・CV 108／記録64／報告36／管理者報告7。')],
      ['108/108', L('Career & CV COMPLETE','Career & CV COMPLETE','キャリア・CV COMPLETE'), L('The only 100% section of its size in the matrix.','Satu-satunya section seukuran itu yang 100% di matrix.','この規模で唯一100%のセクション。')],
      ['6', L('protected e2e tests','test e2e terproteksi','保護されたe2eテスト'), L('caregiver-loop.spec.ts guards the submit path end to end; the store-backed form is deliberately never edited by section work.','caregiver-loop.spec.ts menjaga jalur submit end-to-end; form berbasis store sengaja tidak pernah diedit oleh pekerjaan per-section.','caregiver-loop.spec.tsが送信経路を端から端まで保護。ストア接続フォームはセクション作業で意図的に編集しない。')]
    ],
    boundary:L(
      'The worker’s original input is preserved through review and submission. Nothing is silently rewritten on the way to the manager.',
      'Input asli worker dipertahankan melalui review dan submit. Tidak ada yang ditulis ulang diam-diam dalam perjalanan ke manager.',
      '労働者の原文は確認と送信を通じて保持される。管理者に届く途中で黙って書き換えられることはない。'),
    gap:L(
      'Template submissions (general, warehouse, food service) do not enter the shared reports store, so a submitted template report has no detail page and does not appear in recent work history. Wiring it needs a generic report shape in the data layer.',
      'Submit template (general, warehouse, food service) tidak masuk ke shared reports store, jadi laporan template yang dikirim tidak punya halaman detail dan tidak muncul di recent work history. Menyambungkannya butuh bentuk report generik di data layer.',
      'テンプレート送信（一般・倉庫・飲食）は共有レポートストアに入らないため、詳細ページを持たず作業履歴にも現れない。接続にはデータ層の汎用レポート型が必要。')
  },
  {
    n:'05', slug:'measurement-analytics', features:3, rel:'R2',
    name:L('Measurement & Analytics','Pengukuran & Analitik','計測と分析'),
    lede:L(
      'The instrumentation that lets the core hypothesis be proven or killed.',
      'Instrumentasi yang membuat hipotesis inti bisa dibuktikan atau digugurkan.',
      '中核仮説を証明、または棄却するための計測。'),
    body:L(
      'The MVP is optimised for one thing: making a causal claim measurable. Platform event logging, KPI computation and the manager KPI strip exist to move the north-star metric — the share of messages initiated by the worker — from an assertion into a weekly number. If the metric does not move, the business hypothesis is wrong, and the product should say so.',
      'MVP dioptimalkan untuk satu hal: membuat klaim kausal bisa diukur. Platform event logging, komputasi KPI, dan KPI strip manager ada untuk memindahkan metrik north-star — proporsi pesan yang diinisiasi worker — dari asersi menjadi angka mingguan. Kalau metriknya tidak bergerak, hipotesis bisnisnya salah, dan produk harus mengatakannya.',
      'MVPは一点に最適化されている——因果の主張を測定可能にすること。イベントログ、KPI計算、管理者KPIストリップは、北極星指標（労働者起点メッセージ比率）を主張から週次の数値へ変えるために存在する。指標が動かなければ事業仮説は誤りであり、製品はそう告げるべきである。'),
    modules:[
      ['M07', L('Measurement & Analytics','Pengukuran & Analitik','計測と分析'), 3,
        L('Platform event logging, KPI computation, manager KPI strip.',
          'Platform event logging, komputasi KPI, KPI strip manager.',
          'イベントログ、KPI計算、管理者KPIストリップ。'), 'R2']
    ],
    built:[
      ['5', L('routes','route','ルート'), L('Manager dashboard, analytics, and the per-worker records surfaces.','Manager dashboard, analytics, dan surface records per worker.','管理者ダッシュボード、分析、労働者別記録。')],
      ['16', L('screens & states','screen & state','画面・状態'), L('Analytics & Continuity 14 · Dashboard 2 in the manager matrix.','Analytics & Continuity 14 · Dashboard 2 pada matrix manager.','分析・継続性14・ダッシュボード2。')],
      ['0', L('real telemetry','telemetri nyata','実テレメトリ'), L('Every figure on the dashboard is mock data from src/data/. No event is emitted anywhere.','Setiap angka di dashboard adalah mock data dari src/data/. Tidak ada event yang dikirim ke mana pun.','ダッシュボードの数値はすべてsrc/data/のモック。イベントはどこにも送出されない。')]
    ],
    boundary:L(
      'Analytics is aggregate by construction. A manager sees operational signal, not a worker’s private record.',
      'Analitik bersifat agregat secara desain. Manager melihat sinyal operasional, bukan record privat worker.',
      '分析は構造上、集計値である。管理者が見るのは運用シグナルであり、個人の私的記録ではない。'),
    gap:L(
      'This is the pillar with the widest gap between design and implementation. The screens are real; the measurement is not yet wired to anything that could be trusted in a PoC.',
      'Ini pilar dengan jarak terlebar antara desain dan implementasi. Layarnya nyata; pengukurannya belum tersambung ke apa pun yang bisa dipercaya dalam PoC.',
      '設計と実装の差が最も大きい柱。画面は実在するが、計測はPoCで信頼できる対象にまだ接続されていない。')
  },
  {
    n:'06', slug:'consent-privacy', features:5, rel:'R1–R2',
    name:L('Consent & Privacy','Consent & Privasi','同意とプライバシー'),
    lede:L(
      'Visibility declared before the fact, recorded, and revocable.',
      'Visibilitas dinyatakan di depan, dicatat, dan bisa dicabut.',
      '事前に宣言され、記録され、撤回できる可視性。'),
    body:L(
      'Psychological safety is a functional requirement in the source requirements document, not a value statement. It is implemented as a permanent visibility banner on the communication surfaces, an onboarding disclosure that states who can see what before the worker writes anything, a consent ledger, and purpose-scoped re-consent when the purpose changes. The strongest instance of the rule: stress-check results are visible to the worker and the occupational physician only — the employer receives anonymous aggregate signal.',
      'Keamanan psikologis adalah requirement fungsional dalam dokumen kebutuhan sumber, bukan pernyataan nilai. Ia diimplementasikan sebagai banner visibilitas permanen di surface komunikasi, disclosure onboarding yang menyatakan siapa bisa melihat apa sebelum worker menulis apa pun, consent ledger, dan re-consent ter-scope tujuan ketika tujuannya berubah. Instans terkuat dari aturan ini: hasil stress-check hanya terlihat oleh worker dan dokter perusahaan — employer menerima sinyal agregat anonim.',
      '心理的安全性は価値表明ではなく、要件定義書上の機能要件である。通信画面の常設可視範囲バナー、労働者が書く前に誰が何を見られるかを示すオンボーディング開示、同意台帳、目的変更時の目的限定再同意として実装される。最も強い適用例：ストレスチェック結果は本人と産業医のみが閲覧し、雇用主には匿名の集計シグナルのみが渡る。'),
    modules:[
      ['M08', L('Consent & Privacy','Consent & Privasi','同意とプライバシー'), 5,
        L('Onboarding disclosure, consent recording, visibility banner, consent ledger, purpose-scoped re-consent.',
          'Disclosure onboarding, pencatatan consent, banner visibilitas, consent ledger, re-consent ter-scope tujuan.',
          'オンボーディング開示、同意記録、可視範囲バナー、同意台帳、目的限定再同意。'), 'R1–R2']
    ],
    built:[
      ['86', L('screens & states','screen & state','画面・状態'), L('Consent flows run through Connect Employer 22 and Logs & Records 64 rather than a separate section.','Alur consent berjalan lewat Connect Employer 22 dan Logs & Records 64, bukan section terpisah.','同意フローは独立セクションではなくConnect Employer 22とLogs & Records 64を通る。')],
      ['63/64', L('Logs & Records COMPLETE','Logs & Records COMPLETE','Logs & Records COMPLETE'), L('The health/stress-check consent boundary is implemented as designed.','Batas consent health/stress-check diimplementasikan sesuai desain.','健康・ストレスチェックの同意境界は設計どおり実装。')],
      ['3', L('languages enforced','bahasa dipaksakan','強制される言語'), L('Every consent string exists in ID, EN and JA or the TypeScript build fails.','Setiap string consent ada dalam ID, EN, dan JA atau build TypeScript gagal.','すべての同意文言はID/EN/JAに存在しなければTypeScriptビルドが失敗する。')]
    ],
    boundary:L(
      'Health data never reaches the employer as an individual record. Stress-check is worker plus occupational physician; the employer gets anonymous aggregates.',
      'Data kesehatan tidak pernah sampai ke employer sebagai record individual. Stress-check adalah worker plus dokter perusahaan; employer mendapat agregat anonim.',
      '健康データが個人の記録として雇用主に届くことはない。ストレスチェックは本人と産業医のみ、雇用主は匿名集計のみ。'),
    gap:L(
      'Consent is UI and copy today. There is no server enforcing it — the prototype has no access control at all, so the boundary is a specification, not a guarantee.',
      'Consent hari ini masih UI dan copy. Tidak ada server yang menegakkannya — prototype sama sekali tidak punya access control, jadi batas itu spesifikasi, bukan jaminan.',
      '現時点で同意はUIと文言にすぎない。強制するサーバーは存在せず、プロトタイプにはアクセス制御が一切ない。境界は仕様であって保証ではない。')
  },
  {
    n:'07', slug:'notifications-administration', features:3, rel:'R1–R2',
    name:L('Notifications & Administration','Notifikasi & Administrasi','通知と管理'),
    lede:L(
      'Getting attention to the right person, and the internal console that oversees it.',
      'Mengarahkan perhatian ke orang yang tepat, dan console internal yang mengawasinya.',
      '適切な人に注意を向けること、そしてそれを監督する内部コンソール。'),
    body:L(
      'An unread message over 24 hours is one of the supporting KPIs of the PoC, which makes notification a measurement surface rather than a convenience. Alongside it sits the company admin console — employees, teams, reports oversight, follow-up escalation, rewards, activity log and company settings — the operator view that makes the rest governable.',
      'Pesan belum dibaca lebih dari 24 jam adalah salah satu KPI pendukung PoC, yang menjadikan notifikasi sebagai surface pengukuran, bukan sekadar kenyamanan. Di sampingnya ada console admin perusahaan — employees, teams, reports oversight, follow-up escalation, rewards, activity log, dan company settings — tampilan operator yang membuat sisanya bisa di-govern.',
      '24時間超の未読件数はPoCの補助KPIであり、通知は利便性ではなく計測面である。その隣に企業管理コンソール——従業員、チーム、報告監督、フォローアップ escalation、報奨、操作ログ、企業設定——が並び、残りを統治可能にする。'),
    modules:[
      ['M09', L('Notifications','Notifikasi','通知'), 2,
        L('In-app unread indicators and push notifications.','Indikator unread in-app dan push notification.','アプリ内未読表示とプッシュ通知。'), 'R1–R2'],
      ['M10', L('Administration','Administrasi','管理'), 1,
        L('SuperAdmin internal console.','SuperAdmin internal console.','SuperAdmin内部コンソール。'), 'R1']
    ],
    built:[
      ['12', L('routes','route','ルート'), L('Worker notifications · 11 company admin routes.','Notifikasi worker · 11 route company admin.','労働者通知・企業管理11ルート。')],
      ['87', L('screens & states','screen & state','画面・状態'), L('Notifications 10 (10/10 COMPLETE) · Company Admin 77 across 11 sections.','Notifications 10 (10/10 COMPLETE) · Company Admin 77 di 11 section.','通知10（10/10 COMPLETE）・企業管理77（11セクション）。')],
      ['0', L('push delivery','pengiriman push','プッシュ配信'), L('No service worker, no push subscription, no server to send from.','Tidak ada service worker, tidak ada push subscription, tidak ada server pengirim.','Service Workerもプッシュ購読も送信サーバーも存在しない。')]
    ],
    boundary:L(
      'Admin sees operational and configuration state. The console is not a back door into a worker’s private logs.',
      'Admin melihat state operasional dan konfigurasi. Console bukan pintu belakang ke log privat worker.',
      '管理者が見るのは運用と設定の状態。コンソールは労働者の私的ログへの裏口ではない。'),
    gap:L(
      'Anyone with the URL currently reaches /admin. There is no session, no permission check and nothing to sign into — stated plainly in the testing guide.',
      'Siapa pun dengan URL saat ini bisa mencapai /admin. Tidak ada session, tidak ada permission check, dan tidak ada yang bisa di-sign-in — dinyatakan terang-terangan di testing guide.',
      '現状、URLを知る者は誰でも/adminに到達する。セッションも権限チェックもサインイン先も存在しない——テスト手順書に明記のとおり。')
  },
  {
    n:'08', slug:'health-life-data', features:5, rel:'R3+',
    name:L('Health & Life Data','Data Kesehatan & Kehidupan','健康・生活データ'),
    lede:L(
      'The layers that make an identity worth keeping after the job ends.',
      'Lapisan yang membuat sebuah identitas layak dipertahankan setelah pekerjaan berakhir.',
      '仕事が終わった後もIDを持ち続ける理由となる層。'),
    body:L(
      'WORK LOG proves what someone did. LIFE LOG — housing, family, community, religious accommodation, remittance — and HEALTH LOG — daily condition, wearable integration, the annual stress check — are what make the identity useful to the person rather than to the employer. This is deliberately the most restricted pillar in the product, and the furthest from shipping.',
      'WORK LOG membuktikan apa yang dilakukan seseorang. LIFE LOG — tempat tinggal, keluarga, komunitas, akomodasi keagamaan, pengiriman uang — dan HEALTH LOG — kondisi harian, integrasi wearable, stress check tahunan — adalah yang membuat identitas berguna bagi orangnya, bukan bagi employer. Ini sengaja menjadi pilar paling terbatas dalam produk, dan paling jauh dari rilis.',
      'WORK LOGはその人が何をしたかを証明する。LIFE LOG（住まい・家族・コミュニティ・宗教配慮・送金）とHEALTH LOG（日々の体調・ウェアラブル連携・年1回のストレスチェック）は、雇用主ではなく本人にとってIDを有用にするものである。製品中で意図的に最も制限が強く、リリースから最も遠い柱。'),
    modules:[
      ['M11', L('Health Log','Health Log','ヘルスログ'), 4,
        L('Device health integration, wearable × work insights, stress-check worker and employer surfaces.',
          'Integrasi health device, insight wearable × kerja, surface stress-check untuk worker dan employer.',
          'デバイス健康連携、ウェアラブル×業務インサイト、ストレスチェックの本人・雇用主画面。'), 'R3'],
      ['M12', L('Life Log','Life Log','ライフログ'), 1,
        L('Worker-private life records.','Record kehidupan yang privat bagi worker.','労働者本人限定の生活記録。'), 'R3+']
    ],
    built:[
      ['64', L('screens & states','screen & state','画面・状態'), L('Logs & Records covers work, health, stress-check and life surfaces with their consent flows.','Logs & Records mencakup surface work, health, stress-check, dan life beserta alur consent-nya.','Logs & Recordsは業務・健康・ストレスチェック・生活の各画面と同意フローを含む。')],
      ['63/64', L('COMPLETE','COMPLETE','COMPLETE'), L('Indonesian-language copy throughout, per the Figma source.','Copy berbahasa Indonesia di seluruhnya, sesuai sumber Figma.','Figma原典に従い全編インドネシア語コピー。')],
      ['R3+', L('release position','posisi release','リリース位置'), L('Roadmap and vision, not MVP scope. Presented as such on the Feature Catalog.','Roadmap dan vision, bukan scope MVP. Ditampilkan sebagaimana adanya di Feature Catalog.','MVPスコープではなくロードマップ／ビジョン。機能カタログでもそう提示。')]
    ],
    boundary:L(
      'Life data is worker-private by default. Health data follows the statutory stress-check boundary: worker and occupational physician only.',
      'Data kehidupan bersifat privat bagi worker secara default. Data kesehatan mengikuti batas stress-check statutori: hanya worker dan dokter perusahaan.',
      '生活データは既定で本人限定。健康データは法定ストレスチェックの境界に従い、本人と産業医のみ。'),
    gap:L(
      'No device integration exists. Apple Health and Google Fit are design intent in the development plan, with no code behind them.',
      'Belum ada integrasi device. Apple Health dan Google Fit masih niat desain dalam rencana pengembangan, tanpa kode di belakangnya.',
      'デバイス連携は存在しない。Apple Health / Google Fitは開発計画上の設計意図であり、実装コードはない。')
  },
  {
    n:'09', slug:'value-external-layer', features:5, rel:'R4',
    name:L('Value & External Layer','Lapisan Nilai & Eksternal','価値・外部接続層'),
    lede:L(
      'Score, coin, and connection to outside systems — connection, never transfer.',
      'Score, coin, dan koneksi ke sistem luar — koneksi, bukan transfer.',
      'スコア、コイン、外部システムへの接続——接続であって移転ではない。'),
    body:L(
      'The long-horizon layer. EMENDA SCORE is a worker-controlled reputation derived from the logs; Emenda Coin is the incentive that makes daily logging rational for the person, constrained by incentive law; External Connections is how a credit provider or a support agency reads consented data without the data leaving the worker. The governing rule from the source documents is blunt: the point of origin and the custody stay with Emenda and the worker. Data is connected to, not handed over.',
      'Lapisan horizon panjang. EMENDA SCORE adalah reputasi yang dikontrol worker dan diturunkan dari log; Emenda Coin adalah insentif yang membuat logging harian masuk akal bagi orangnya, dibatasi hukum insentif; External Connections adalah cara penyedia kredit atau lembaga pendukung membaca data yang di-consent tanpa data itu meninggalkan worker. Aturan pengaturnya dari dokumen sumber tegas: titik asal dan kustodi tetap pada Emenda dan worker. Data disambungkan, bukan diserahkan.',
      '長期の層。EMENDA SCOREはログから導かれる本人管理のレピュテーション。Emenda Coinは日々の記録を本人にとって合理的にするインセンティブで、景品表示・利益供与の制約下にある。External Connectionsは、与信提供者や支援機関が同意されたデータを、データを本人の手から離さずに読む方法である。原典の統治規則は明快——発生点と保持はEmendaと本人が握る。データは接続するのであって、引き渡すのではない。'),
    modules:[
      ['M13', L('EMENDA Score','EMENDA Score','EMENDAスコア'), 2,
        L('Worker-controlled score and reputation concepts.','Konsep score dan reputasi yang dikontrol worker.','本人管理のスコアとレピュテーション概念。'), 'R4'],
      ['M14', L('EMENDA Coin','EMENDA Coin','EMENDAコイン'), 1,
        L('Future value-circulation layer with incentive-law constraints.','Lapisan sirkulasi nilai masa depan dengan constraint hukum insentif.','景品・利益供与法制の制約下にある将来の価値循環層。'), 'R4'],
      ['M15', L('External Connections','Koneksi Eksternal','外部接続'), 2,
        L('Credit-layer connection and backward data import. Connection, not transfer.','Koneksi ke lapisan kredit dan import data mundur. Koneksi, bukan transfer.','与信層への接続と過去データの取り込み。接続であって移転ではない。'), 'R4']
    ],
    built:[
      ['8', L('routes','route','ルート'), L('Coin overview, check-in, history, earn, use, rewards, redeem, rules.','Coin overview, check-in, history, earn, use, rewards, redeem, rules.','コインの概要、チェックイン、履歴、獲得、利用、報酬、交換、規則。')],
      ['24/24', L('Emenda Coin COMPLETE','Emenda Coin COMPLETE','Emenda Coin COMPLETE'), L('Fully signed off on both viewports as an interface.','Signed off penuh di kedua viewport sebagai interface.','インターフェースとして両ビューポートで完全検証済み。')],
      ['R4', L('release position','posisi release','リリース位置'), L('Score, coin economics and external connections are vision scope. The screens exist; the economics do not.','Score, ekonomi coin, dan koneksi eksternal adalah scope vision. Layarnya ada; ekonominya belum.','スコア、コイン経済、外部接続はビジョン領域。画面は存在するが経済は存在しない。')]
    ],
    boundary:L(
      'Emenda does not monetise the individual. Revenue is B2B; the worker’s side of the value is the coin, the credit access and the next job.',
      'Emenda tidak memonetisasi individu. Pendapatan bersifat B2B; nilai di sisi worker adalah coin, akses kredit, dan pekerjaan berikutnya.',
      'Emendaは個人からマネタイズしない。収益はB2B。本人側の価値はコイン、与信アクセス、次の仕事である。'),
    gap:L(
      'The coin interface is complete and the economy behind it is not designed. W-60Q insufficient balance is only reachable by redeeming a 100-coin reward twelve times — a mock, not a ledger.',
      'Interface coin sudah lengkap dan ekonomi di belakangnya belum dirancang. W-60Q insufficient balance hanya bisa dicapai dengan menukar reward 100 coin dua belas kali — mock, bukan ledger.',
      'コインUIは完成し、その背後の経済は未設計。W-60Q残高不足は100コイン報酬を12回交換して初めて到達する——台帳ではなくモックである。')
  }
];

/* L() resolves against CURRENT_LANG at call time, so these tables have to be
   rebuilt whenever the language changes — otherwise a switch made without a
   reload would leave pillar and industry names frozen in the load language.
   rebuildV16Data() below is called from render(). */
let PILLARS = buildPillars();
