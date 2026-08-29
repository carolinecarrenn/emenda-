/* ============================================================
   INDUSTRIES
   ============================================================ */
const buildIndustries=()=>[
  {
    slug:'caregiving', n:'01',
    name:L('Caregiving','Perawatan (Kaigo)','介護'),
    lede:L('The showcase vertical — and the only one whose report template is fully built and protected by tests.','Vertikal showcase — dan satu-satunya yang template laporannya sudah dibangun penuh dan dijaga test.','ショーケースとなる業種であり、日報テンプレートが完全実装されテストで保護されている唯一の業種。'),
    body:L('Care work combines human communication, structured reporting, personal responsibility and continuity of a resident’s condition. That is precisely the combination where fragmented systems create risk rather than inconvenience — a note that does not reach the next shift is not an administrative problem. The caregiver daily report is the flow the whole product was proven against.','Kerja perawatan menggabungkan komunikasi manusia, pelaporan terstruktur, tanggung jawab pribadi, dan kontinuitas kondisi seorang residen. Itu persis kombinasi di mana sistem yang terfragmentasi menciptakan risiko, bukan sekadar ketidaknyamanan — catatan yang tidak sampai ke shift berikutnya bukan masalah administratif. Laporan harian caregiver adalah alur yang dipakai membuktikan seluruh produk.','介護は、人的コミュニケーション、構造化された記録、個人の責任、利用者の状態の継続性を同時に伴う。分断されたシステムが不便ではなくリスクを生むのは、まさにこの組み合わせである——次のシフトに届かない申し送りは事務上の問題ではない。介護日報は製品全体を検証した基準フローである。'),
    facts:[
      [L('Template status','Status template','テンプレート状態'),L('Built, store-backed, and reachable end to end.','Sudah dibangun, berbasis store, dan bisa dijangkau end-to-end.','実装済み・ストア接続・端から端まで到達可能。')],
      [L('Test protection','Proteksi test','テスト保護'),L('caregiver-loop.spec.ts, 6 tests. The submit path is deliberately never edited by section work.','caregiver-loop.spec.ts, 6 test. Jalur submit sengaja tidak pernah diedit oleh pekerjaan per-section.','caregiver-loop.spec.ts、6テスト。送信経路はセクション作業で意図的に編集しない。')],
      [L('Report fields','Field laporan','記録項目'),L('Report status, resident condition, meals, care notes, quick notes, review before submit.','Status laporan, kondisi residen, makan, catatan perawatan, quick note, review sebelum submit.','報告状態、利用者の状態、食事、ケア記録、簡易メモ、送信前確認。')],
      [L('Manager loop','Loop manager','管理者ループ'),L('Report list and detail are COMPLETE; the worker sees the verification outcome.','Report list dan detail COMPLETE; worker melihat hasil verifikasinya.','報告一覧と詳細はCOMPLETE。労働者は検証結果を確認できる。')],
      [L('PoC target','Target PoC','PoC対象'),L('One care operator among the two-to-three pilot companies.','Satu operator care di antara dua sampai tiga perusahaan pilot.','2〜3社のパイロットのうち介護事業者1社。')]
    ],
    breaks:[
      L('A shift handover lives in a chat app that nobody audits.','Serah terima shift hidup di aplikasi chat yang tidak diaudit siapa pun.','申し送りは誰も監査しないチャットアプリの中にある。'),
      L('A resident note written in Indonesian is retyped, or lost, before it reaches the record.','Catatan residen yang ditulis dalam Bahasa Indonesia diketik ulang, atau hilang, sebelum sampai ke record.','インドネシア語で書かれた利用者記録は、記録に届く前に再入力されるか失われる。'),
      L('A worker who raises a concern has no way to see whether anyone acted on it.','Worker yang menyampaikan kekhawatiran tidak punya cara melihat apakah ada yang menindaklanjutinya.','懸念を伝えた労働者には、誰かが対応したかを知る手段がない。')
    ]
  },
  {
    slug:'construction', n:'02',
    name:L('Construction & interior fit-out','Konstruksi & interior','建設・内装'),
    lede:L('Distributed sites, safety consequences, and a construction report template that is approved scope but not yet shipped.','Site tersebar, konsekuensi keselamatan, dan template laporan konstruksi yang sudah approved tapi belum dirilis.','分散した現場、安全上の帰結、そしてApprovedでありながら未出荷の建設日報テンプレート。'),
    body:L('Construction moves the same three problems outdoors and adds distance. A crew is spread across sites, the person who noticed the hazard is not the person who can authorise the fix, and the safety record has to survive an inspection months later. The construction report template is an approved feature in module M05 — designed, allocated, and not yet built.','Konstruksi memindahkan tiga masalah yang sama ke luar ruangan dan menambahkan jarak. Kru tersebar di beberapa site, orang yang melihat bahaya bukan orang yang bisa mengotorisasi perbaikan, dan record keselamatan harus bertahan menghadapi inspeksi berbulan-bulan kemudian. Template laporan konstruksi adalah fitur approved di modul M05 — dirancang, dialokasikan, dan belum dibangun.','建設は同じ3つの問題を屋外に移し、距離を加える。作業員は複数現場に分散し、危険に気づいた人物と是正を承認できる人物は別であり、安全記録は数か月後の検査に耐えねばならない。建設日報テンプレートはM05のApproved機能——設計・割当済みで、未実装。'),
    facts:[
      [L('Template status','Status template','テンプレート状態'),L('Approved feature in module M05. Designed, not yet implemented.','Fitur approved di modul M05. Sudah dirancang, belum diimplementasikan.','M05のApproved機能。設計済み、未実装。')],
      [L('What is reusable today','Yang bisa dipakai ulang hari ini','現時点で再利用可能なもの'),L('Identity, chat, follow-up, notifications, documents and the whole worker shell.','Identity, chat, follow-up, notifikasi, dokumen, dan seluruh worker shell.','ID、チャット、フォローアップ、通知、書類、労働者シェル全体。')],
      [L('Domain glossary','Glosarium domain','ドメイン辞書'),L('The translation module grows a per-industry term dictionary; construction is one of three named.','Modul terjemahan menumbuhkan kamus istilah per industri; konstruksi salah satu dari tiga yang disebut.','翻訳モジュールは業種別用語辞書を育てる。建設は指定3業種の一つ。')],
      [L('PoC target','Target PoC','PoC対象'),L('One interior fit-out contractor among the pilot companies.','Satu kontraktor interior di antara perusahaan pilot.','パイロット企業のうち内装工事会社1社。')]
    ],
    breaks:[
      L('A hazard is reported verbally on site and never reaches a written record.','Bahaya dilaporkan secara lisan di lokasi dan tidak pernah sampai ke record tertulis.','危険は現場で口頭報告され、文書記録に到達しない。'),
      L('Instructions cross a language gap at the exact moment precision matters most.','Instruksi melewati jurang bahasa persis pada saat presisi paling dibutuhkan.','指示は、正確さが最も要求される瞬間に言語の断絶を越える。'),
      L('Attendance, incident and instruction records live in three different places.','Record kehadiran, insiden, dan instruksi berada di tiga tempat berbeda.','出面・事故・指示の記録が三か所に散在する。')
    ]
  },
  {
    slug:'manufacturing-food', n:'03',
    name:L('Manufacturing & food','Manufaktur & makanan','製造・食品'),
    lede:L('Shift-based communication, repetitive daily records, and escalation that has to cross a shift boundary.','Komunikasi berbasis shift, record harian berulang, dan eskalasi yang harus melewati batas shift.','シフト制の通信、反復的な日次記録、そしてシフト境界を越えねばならないエスカレーション。'),
    body:L('Manufacturing and food production run on repetition, which makes the daily record cheap to produce and expensive to lose. The operational question is not whether a checklist was completed but whether an exception raised at the end of one shift reached the person responsible on the next. Emenda treats that handover as a follow-up thread with an owner and a status rather than a message in a group chat.','Manufaktur dan produksi makanan berjalan di atas repetisi, yang membuat record harian murah diproduksi dan mahal bila hilang. Pertanyaan operasionalnya bukan apakah checklist selesai, tapi apakah pengecualian yang muncul di akhir satu shift sampai ke orang yang bertanggung jawab di shift berikutnya. Emenda memperlakukan serah terima itu sebagai thread follow-up dengan owner dan status, bukan pesan di grup chat.','製造と食品生産は反復の上に成り立つため、日次記録は作るのが安く、失うのが高い。運用上の問いはチェックリストが完了したかではなく、あるシフト終わりに上がった例外が次のシフトの責任者に届いたかである。Emendaはその引き継ぎを、グループチャットの一メッセージではなく、担当者と状態を持つフォローアップ・スレッドとして扱う。'),
    facts:[
      [L('Template status','Status template','テンプレート状態'),L('General and food-service templates exist as screens; their submissions do not enter the shared reports store.','Template general dan food service ada sebagai layar; submit-nya tidak masuk shared reports store.','一般・飲食テンプレートは画面として存在するが、その送信は共有レポートストアに入らない。')],
      [L('Known limitation','Batasan yang diketahui','既知の制限'),L('A submitted template report has no detail page and does not appear in recent work history. Recorded in the deviation register.','Laporan template yang dikirim tidak punya halaman detail dan tidak muncul di recent work history. Tercatat di register deviasi.','送信済みテンプレート報告は詳細ページを持たず、作業履歴にも現れない。逸脱レジスタに記録済み。')],
      [L('What it needs','Yang dibutuhkan','必要なもの'),L('A generic report shape owned by the data layer, so templates share the caregiver flow’s store.','Bentuk report generik yang dimiliki data layer, agar template berbagi store dengan alur caregiver.','データ層が所有する汎用レポート型。テンプレートが介護フローのストアを共有できるようにする。')],
      [L('PoC target','Target PoC','PoC対象'),L('One food or manufacturing operator among the pilot companies.','Satu operator makanan atau manufaktur di antara perusahaan pilot.','パイロット企業のうち食品または製造事業者1社。')]
    ],
    breaks:[
      L('An exception raised at shift end dissolves in a group chat overnight.','Pengecualian yang muncul di akhir shift larut di grup chat semalaman.','シフト終わりに上がった例外が、一晩でグループチャットに溶ける。'),
      L('The same daily record is written twice — once on paper, once into a system.','Record harian yang sama ditulis dua kali — sekali di kertas, sekali ke sistem.','同じ日次記録が二度書かれる——紙に一度、システムに一度。'),
      L('Nobody can say who owns an open issue once the shift that raised it goes home.','Tidak ada yang bisa menyebut siapa pemilik isu terbuka setelah shift yang mengangkatnya pulang.','それを上げたシフトが帰った時点で、未解決の課題の担当者を誰も言えない。')
    ]
  },
  {
    slug:'logistics', n:'04',
    name:L('Logistics & warehouse','Logistik & gudang','物流・倉庫'),
    lede:L('Distributed teams, exception-driven days, and the warehouse template that exists as a screen but not as a record.','Tim tersebar, hari yang digerakkan pengecualian, dan template gudang yang ada sebagai layar tapi bukan sebagai record.','分散したチーム、例外に駆動される一日、そして画面としては存在するが記録としては存在しない倉庫テンプレート。'),
    body:L('Warehouse work is mostly routine punctuated by exceptions, and the exceptions are the only part worth recording carefully. The value of a connected layer here is narrow and concrete: the exception gets an owner and a status instead of a shout across a floor, and the daily activity behind it accumulates into the worker’s own history rather than into a shift sheet that is discarded.','Kerja gudang sebagian besar rutin yang diselingi pengecualian, dan pengecualian itulah satu-satunya bagian yang layak dicatat dengan hati-hati. Nilai lapisan terhubung di sini sempit dan konkret: pengecualiannya mendapat owner dan status alih-alih teriakan melintasi lantai, dan aktivitas harian di baliknya terakumulasi ke riwayat milik worker sendiri, bukan ke lembar shift yang dibuang.','倉庫作業は大半が定型で、そこに例外が差し込まれる。丁寧に記録する価値があるのは例外の方だけである。ここでの接続層の価値は狭く具体的だ——例外はフロア越しの叫びではなく担当者と状態を得て、その背後の日々の作業は破棄されるシフト表ではなく本人の履歴に蓄積する。'),
    facts:[
      [L('Template status','Status template','テンプレート状態'),L('A warehouse template twin exists in the app; like the other templates it is not store-backed.','Kembaran template gudang ada di aplikasi; seperti template lain, ia tidak berbasis store.','倉庫テンプレートの対応版はアプリ内に存在するが、他と同様ストア未接続。')],
      [L('Best-fit capability','Kapabilitas paling cocok','最も適合する機能'),L('Follow-up with an explicit owner and status — the lifecycle rather than the form.','Follow-up dengan owner dan status eksplisit — siklusnya, bukan formulirnya.','担当者と状態が明示されたフォローアップ——帳票ではなくライフサイクル。')],
      [L('Honest fit','Kecocokan jujur','率直な適合度'),L('The weakest of the four verticals for Stage 1. Listed because the capability generalises, not because a pilot is planned.','Yang paling lemah dari empat vertikal untuk Stage 1. Dicantumkan karena kapabilitasnya menggeneralisasi, bukan karena ada pilot yang direncanakan.','Stage 1では4業種中最も適合が弱い。パイロット予定があるからではなく、機能が一般化するため掲載。')]
    ],
    breaks:[
      L('An exception is handled verbally and leaves no trace of who decided what.','Pengecualian ditangani secara lisan dan tidak meninggalkan jejak siapa memutuskan apa.','例外は口頭で処理され、誰が何を決めたかの痕跡を残さない。'),
      L('Daily activity is recorded for the shift, not for the person who performed it.','Aktivitas harian dicatat untuk shift, bukan untuk orang yang melakukannya.','日々の作業はシフトのために記録され、それを行った本人のためには記録されない。')
    ]
  }
];

let INDUSTRIES = buildIndustries();
