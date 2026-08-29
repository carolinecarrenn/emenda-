/* deployment  —  PAGES.deployment
   Merged from 1 original layer (line 4027). */
PAGES.deployment=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Platform / Deployment','Platform / Penerapan','プラットフォーム / 導入形態')}</span>
  <h1>${L('How Emenda would be run — and what runs today.','Bagaimana Emenda akan dijalankan — dan apa yang berjalan hari ini.','Emendaをどう運用するか、そして今日何が動いているか。')}</h1>
  <p>${L('The current artifact is a static single-page build with no server component. The models below describe the target operating shape for a paid pilot, stated separately from what exists so the two are not confused.','Artefak saat ini adalah build single-page statis tanpa komponen server. Model di bawah menggambarkan bentuk operasi target untuk pilot berbayar, dinyatakan terpisah dari yang sudah ada agar keduanya tidak tertukar.','現在の成果物はサーバー要素を持たない静的SPAビルドである。以下は有償パイロット向けの目標運用形態であり、既存物と混同しないよう分けて記す。')}</p>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="confid-band">
    <span class="cb-tag">${L('TODAY','HARI INI','現状')}</span>
    <p>${L('What ships right now is a Vite/React/TypeScript build served as static files. No database, no API, no session store, no scheduled job. Everything below is the plan, not the state.','Yang dikirim sekarang adalah build Vite/React/TypeScript yang disajikan sebagai file statis. Tanpa database, tanpa API, tanpa session store, tanpa scheduled job. Semua di bawah ini adalah rencana, bukan keadaan.','現在出荷されているのは静的ファイルとして配信されるVite/React/TypeScriptビルドである。データベース、API、セッションストア、定期ジョブはいずれも存在しない。以下はすべて計画であり現状ではない。')}</p>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Deployment models','Model penerapan','導入形態')}</span>
  <h2>${L('Three shapes, chosen by where the data is allowed to sit.','Tiga bentuk, dipilih berdasarkan di mana data boleh berada.','データをどこに置けるかで選ぶ3つの形。')}</h2>
  <div class="deploy-grid">
    <div class="deploy rec reveal">
      <span class="dtag">${L('Default for pilots','Default untuk pilot','パイロット既定')}</span>
      <h3>${L('Managed cloud','Cloud terkelola','マネージドクラウド')}</h3>
      <p>${L('Single managed environment, Japan region, one tenant per organization on shared infrastructure.','Satu environment terkelola, region Jepang, satu tenant per organisasi di infrastruktur bersama.','日本リージョンの単一マネージド環境。共有基盤上に組織ごとのテナント。')}</p>
      <ul>
        <li>${L('Fastest path to a 90-day PoC — no facility IT work required.','Jalur tercepat ke PoC 90 hari — tidak butuh pekerjaan IT di fasilitas.','90日PoCへの最短経路——施設側のIT作業が不要。')}</li>
        <li>${L('PWA-first client, sized for low-spec phones and slow connections.','Client PWA-first, dirancang untuk ponsel spek rendah dan koneksi lambat.','低スペック端末と低速回線を前提としたPWA優先クライアント。')}</li>
        <li>${L('Tenant isolation enforced at the data-access layer, not by convention.','Isolasi tenant ditegakkan di lapisan data-access, bukan oleh konvensi.','テナント分離は慣習ではなくデータアクセス層で強制。')}</li>
        <li>${L('One shared router, store, i18n and session across desktop and mobile.','Satu router, store, i18n, dan session bersama untuk desktop dan mobile.','デスクトップとモバイルで単一のルーター・ストア・i18n・セッション。')}</li>
      </ul>
      <div class="dfoot">${L('Not yet built: the managed environment itself.','Belum dibangun: environment terkelolanya sendiri.','未構築：マネージド環境そのもの。')}</div>
    </div>
    <div class="deploy reveal">
      <span class="dtag">${L('Data residency','Residensi data','データ所在')}</span>
      <h3>${L('On-premise / private','On-premise / privat','オンプレミス／プライベート')}</h3>
      <p>${L('A dedicated instance inside the organization’s own boundary, for facilities whose policy or client contract forbids shared hosting.','Instance khusus di dalam batas organisasi sendiri, untuk fasilitas yang kebijakan atau kontrak kliennya melarang shared hosting.','共有ホスティングを禁じる方針や取引契約を持つ施設のための、組織境界内の専用インスタンス。')}</p>
      <ul>
        <li>${L('Same application build; the difference is where it runs and who holds the keys.','Build aplikasi sama; bedanya di mana ia berjalan dan siapa memegang kuncinya.','アプリのビルドは同一。違いは実行場所と鍵の保有者。')}</li>
        <li>${L('Suits organizations already running an on-site care or construction system.','Cocok untuk organisasi yang sudah menjalankan sistem care atau konstruksi on-site.','既に現場系システムを自社運用している組織に適合。')}</li>
        <li>${L('Upgrade cadence becomes the operator’s decision, not ours.','Irama upgrade jadi keputusan operator, bukan kami.','アップグレード頻度は当社ではなく運用者の判断となる。')}</li>
      </ul>
      <div class="dfoot">${L('Cost: loses the shared-infrastructure economics that make per-worker pricing work.','Biaya: kehilangan ekonomi infrastruktur bersama yang membuat harga per worker masuk akal.','代償：労働者単価を成立させる共有基盤の経済性を失う。')}</div>
    </div>
    <div class="deploy reveal">
      <span class="dtag">${L('Mixed estate','Estate campuran','混在環境')}</span>
      <h3>${L('Hybrid','Hybrid','ハイブリッド')}</h3>
      <p>${L('Worker-facing surfaces in the managed cloud, organization records held where the organization requires them.','Surface untuk worker di cloud terkelola, record organisasi disimpan di tempat yang diminta organisasi.','労働者向け画面はマネージドクラウド、組織記録は組織が求める場所に保持。')}</p>
      <ul>
        <li>${L('Keeps the worker’s identity portable while an employer keeps its operational data local.','Menjaga identitas worker tetap portabel sementara employer menyimpan data operasionalnya secara lokal.','雇用主が運用データをローカルに保持しつつ、労働者IDの可搬性を維持。')}</li>
        <li>${L('The split follows the ownership rule: the identity is the worker’s, the operational record is the organization’s.','Pemisahannya mengikuti aturan kepemilikan: identitas milik worker, record operasional milik organisasi.','分割は帰属規則に従う——IDは労働者のもの、運用記録は組織のもの。')}</li>
        <li>${L('Most complex to operate; proposed only when a single model cannot satisfy both sides.','Paling kompleks dioperasikan; diusulkan hanya jika satu model tidak bisa memuaskan kedua sisi.','運用は最も複雑。単一形態で双方を満たせない場合にのみ提案。')}</li>
      </ul>
      <div class="dfoot">${L('Requires the connection model in pillar 09 to exist first.','Butuh model koneksi di pilar 09 ada lebih dulu.','先に柱09の接続モデルの実在が必要。')}</div>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Integration surface','Surface integrasi','連携面')}</span>
  <h2>${L('What Emenda would connect to, and the honest status of each.','Apa yang akan disambungkan Emenda, dan status jujur masing-masing.','Emendaが接続する対象と、それぞれの率直な状態。')}</h2>
  <div class="integ-grid">
    ${[
      [L('Machine translation','Machine translation','機械翻訳'),'mock',L('Commercial MT plus a care-domain glossary. The prototype pairs each message with one fixed mock string.','MT komersial plus glosarium domain care. Prototype memasangkan tiap pesan dengan satu string mock tetap.','商用MTと介護ドメイン辞書。プロトタイプは各メッセージに固定モック文字列を1つ対応させる。')],
      [L('Wearables — Apple Health / Google Fit','Wearable — Apple Health / Google Fit','ウェアラブル — Apple Health / Google Fit'),'plan',L('Health Log module M11, release position R3. Design intent in the development plan; no code.','Modul Health Log M11, posisi release R3. Niat desain di rencana pengembangan; belum ada kode.','ヘルスログM11、リリース位置R3。開発計画上の設計意図であり、コードはない。')],
      [L('Credit and support-agency access','Akses lembaga kredit dan pendukung','与信・支援機関アクセス'),'plan',L('External Connections M15, R4. Consent-scoped read, not a data handover.','External Connections M15, R4. Baca ter-scope consent, bukan penyerahan data.','External Connections M15、R4。同意範囲での読取であり、データ引き渡しではない。')],
      [L('Push notification delivery','Pengiriman push notification','プッシュ通知配信'),'none',L('No service worker and no push subscription exist. Unread indicators are in-app only.','Tidak ada service worker dan tidak ada push subscription. Indikator unread hanya in-app.','Service Workerもプッシュ購読も存在しない。未読表示はアプリ内のみ。')],
      [L('Existing facility systems','Sistem fasilitas yang sudah ada','既存の施設システム'),'plan',L('The Stage 1 target is replacing LINE, paper and phone — not integrating with an incumbent HIS or attendance system.','Target Stage 1 adalah menggantikan LINE, kertas, dan telepon — bukan berintegrasi dengan HIS atau sistem absensi incumbent.','Stage 1の狙いはLINE・紙・電話の置き換えであり、既存HISや勤怠システムとの統合ではない。')],
      [L('Data export for the worker','Export data untuk worker','労働者向けデータエクスポート'),'mock',L('Export is an approved feature in module M01 and a designed screen. The file it would produce does not exist yet.','Export adalah fitur approved di modul M01 dan layar yang sudah dirancang. File yang akan dihasilkannya belum ada.','エクスポートはM01のApproved機能であり画面も設計済み。生成されるファイルはまだ存在しない。')]
    ].map(([t,st,d])=>`<div class="integ reveal"><div class="ih"><b>${t}</b><span class="badge ${st}">${st==='live'?L('Integrated','Terintegrasi','連携済'):st==='mock'?L('Mocked','Mock','モック'):st==='plan'?L('Planned','Direncanakan','計画'):L('Not started','Belum dimulai','未着手')}</span></div><p>${d}</p></div>`).join('')}
  </div>
  ${derived('No integration on this page is marked Integrated. That is the accurate state of the prototype, and stating otherwise would be the easiest number on this site to disprove.','Tidak ada integrasi di halaman ini yang ditandai Terintegrasi. Itulah keadaan akurat prototype, dan menyatakan sebaliknya adalah angka paling mudah dibantah di situs ini.','本ページに「連携済」の項目は一つもない。それがプロトタイプの正確な状態であり、そうでないと述べれば本サイトで最も容易に反証される主張になる。')}
</div></section>
${detailedCTA()}`;
