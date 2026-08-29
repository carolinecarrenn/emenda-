/* dev/doc/data-platform  —  PAGES.devDocDataPlatform
   Digest of the Pipeline Cards Matrix and the benefit x data-requirement matrix,
   plus the two management feature reports. */
PAGES.devDocDataPlatform=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · documents','Internal · dokumen','社内 · 文書')} · 02 · 07</span>
  <h1>${L('Data platform and management reporting','Platform data dan pelaporan manajemen','データ基盤と経営報告')}</h1>
  <p>${L('Three documents that answer the same question from different ends: which data does EMENDA need to collect, what benefit does each piece justify, and how much of it does the requirements document actually cover today.','Tiga dokumen yang menjawab pertanyaan yang sama dari ujung berbeda: data apa yang perlu dikumpulkan EMENDA, manfaat apa yang dibenarkan tiap bagiannya, dan seberapa banyak yang benar-benar tercakup dokumen requirement saat ini.','同じ問いに別の端から答える3文書——EMENDAはどのデータを集める必要があり、各データはどの便益を裏づけ、そして要件定義書は現時点でどこまでそれを覆っているのか。')}</p>
  <div class="dev-meta">
    <span>D1–D13</span>
    <span>5 ${L('source layers','lapisan sumber','基盤レイヤー')}</span>
    <span>4 ${L('benefit categories','kategori manfaat','便益区分')}</span>
    <span>PDF + XLSX · 日本語</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('The pipeline','Pipeline','パイプライン')}</span>
  <h2>${L('Raw records become indicators, and indicators become value.','Catatan mentah menjadi indikator, dan indikator menjadi nilai.','生データが指標になり、指標が価値になる。')}</h2>
  <div class="cmd">
<b>[1]</b> ${L('Primary data platform','Basis data primer','一次データ基盤')}          <span class="c">${L('collection and accumulation','pengumpulan dan akumulasi','収集・蓄積')}</span>
    <span class="c">①</span> ${L('Field management','Manajemen lapangan','現場管理')}      <span class="c">${L('daily communication, instructions, reports, rework logs','komunikasi harian, instruksi, laporan, log rework','日常通信・作業指示・日報・手戻りログ')}</span>
    <span class="c">②</span> ${L('Residence and visa','Izin tinggal dan visa','在留・Visa管理')}     <span class="c">${L('tenure, 2027 transition, early departure','masa kerja, transisi 2027, keluar dini','在籍期間・2027年育成就労対応・早期離職')}</span>
    <span class="c">③</span> ${L('Life and condition','Kehidupan dan kondisi','生活・ライフ')}     <span class="c">${L('condition, emotional tone, distress signals','kondisi, nada emosi, sinyal tekanan','コンディション・感情トーン・不調シグナル')}</span>
    <span class="c">④</span> ${L('Support organisations','Lembaga pendukung','門番（支援機関）')}   <span class="c">${L('statutory interview records, human-rights DD evidence','catatan wawancara statutori, bukti HAM due diligence','法定面談記録・人権DD通信エビデンス')}</span>
    <span class="c">⑤</span> ${L('Career history','Riwayat karier','経歴')}         <span class="c">${L('work and skill history bound to the worker ID, pre-departure included','riwayat kerja dan skill terikat ke ID pekerja, termasuk sebelum keberangkatan','Worker_ID紐付けの職歴・スキル、渡航前を含む')}</span>
                            <b>↓</b>
<b>[2]</b> ${L('Data requirements','Kebutuhan data','データ要件')} <b>D1–D13</b>   <span class="c">${L('structuring and quantification','penstrukturan dan kuantifikasi','構造化・指標数値化')}</span>
                            <b>↓</b>
<b>[3]</b> ${L('Integrated benefits','Manfaat terintegrasi','統合的便益')}           <span class="c">${L('the value returned','nilai yang dikembalikan','還元される本質的価値')}</span>
    <span class="c">1)</span> ${L('Productivity','Produktivitas','生産性向上')}   <span class="c">2)</span> ${L('Cost reduction','Pengurangan biaya','コスト縮減')}
    <span class="c">3)</span> ${L('Growth opportunity','Peluang pertumbuhan','成長機会')}   <span class="c">4)</span> ${L('Compliance and ESG','Kepatuhan dan ESG','制度・ESG対応')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">D1–D13</span>
  <h2>${L('Thirteen measurements, each tied to a benefit it has to prove.','Tiga belas pengukuran, masing-masing terikat pada manfaat yang harus dibuktikannya.','13の計測指標。それぞれが証明すべき便益に紐づく。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>ID</th><th>${L('Measurement','Pengukuran','データ要件')}</th>
      <th>${L('What it detects','Yang dideteksi','検知するもの')}</th><th>${L('In v1.2','Di v1.2','v1.2での扱い')}</th>
    </tr></thead>
    <tbody>
      <tr><td>D1</td><td>${L('Mother-tongue initiation volume','Volume inisiasi bahasa ibu','母語発信・確認の器の利用数')}</td><td>${L('Active raising of questions and difficulties','Pengangkatan aktif pertanyaan dan kesulitan','疑問・困りごとの能動的発信')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D2</td><td>${L('Comprehension-gap correction rate','Tingkat koreksi kesenjangan pemahaman','認知乖離修正率')}</td><td>${L('Divergence between instruction and understanding','Perbedaan antara instruksi dan pemahaman','指示と理解のズレ')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D3</td><td>${L('Emotional tone and sentiment','Nada emosi dan sentimen','感情トーン・センチメント')}</td><td>${L('Early signals of psychological strain','Sinyal awal tekanan psikologis','心理的安全性の推移・不調の初期シグナル')}</td><td><span class="tag warn">${L('Partial','Sebagian','一部記載')}</span></td></tr>
      <tr><td>D4</td><td>${L('Worker-initiated message ratio','Rasio pesan yang dimulai pekerja','労働者起点メッセージ比率')}</td><td>${L('Whether bidirectional design is actually implemented','Apakah desain dua arah benar-benar terimplementasi','双方向設計が実装されているか')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D5</td><td>${L('Manager response time and unread dwell','Waktu respons manajer dan lama belum dibaca','管理者応答速度・未読滞留時間')}</td><td>${L('Neglect and slow handling on the manager side','Pengabaian dan penanganan lambat di sisi manajer','放置状態・対応の遅さ')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D6</td><td>${L('Template message ratio','Rasio pesan template','定型メッセージ利用比率')}</td><td>${L('How far communication has become routinised','Seberapa jauh komunikasi menjadi rutin','やり取りの定型化の度合い')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D7</td><td>${L('Rework time saved','Waktu rework yang dihemat','手戻り時間・二度手間削減')}</td><td>${L('Prevented redo of work instructions','Pengulangan instruksi kerja yang dicegah','業務指示のやり直し防止')}</td><td><span class="tag warn">${L('Partial','Sebagian','一部記載')}</span></td></tr>
      <tr><td>D8</td><td>${L('Tenure and early-departure rate','Masa kerja dan tingkat keluar dini','勤続年数・早期離職発生率')}</td><td>${L('Whether retention actually moves','Apakah retensi benar-benar bergerak','リテンションの実効性')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D9 ★</td><td>${L('Transfer and departure risk alert','Peringatan risiko pindah dan keluar','転籍・離職危険度アラート')}</td><td>${L('Outflow risk ahead of the 2027 transition','Risiko keluar menjelang transisi 2027','2027年移行を見据えた流出リスクの事前察知')}</td><td><span class="tag stop">${L('Needs building','Perlu dibangun','追加推奨')}</span></td></tr>
      <tr><td>D10</td><td>${L('Portable career and skill log','Log karier dan skill portabel','ポータブル職歴・スキルログ')}</td><td>${L('Accumulated evidence bound to the worker ID','Bukti terkumpul yang terikat ke ID pekerja','Worker_IDに蓄積される実務・スキル実績')}</td><td><span class="tag ok">${L('Covered','Tercakup','記載あり')}</span></td></tr>
      <tr><td>D11 ★</td><td>${L('Auto-generated FAQ and OJT knowledge','FAQ dan pengetahuan OJT hasil generasi otomatis','現場特化FAQ/OJTナレッジ生成数')}</td><td>${L('Multilingual manuals produced from conversation logs','Manual multibahasa yang dihasilkan dari log percakapan','会話ログから自動生成される多言語マニュアル')}</td><td><span class="tag stop">${L('Needs building','Perlu dibangun','追加推奨')}</span></td></tr>
      <tr><td>D12 ★</td><td>${L('Human-rights due-diligence evidence','Bukti uji tuntas hak asasi manusia','人権DD・双方向通信エビデンス')}</td><td>${L('Conformance reports for prime contractors and municipalities','Laporan kesesuaian untuk kontraktor utama dan pemerintah daerah','元請け・自治体へ提出する適合レポート')}</td><td><span class="tag stop">${L('Needs building','Perlu dibangun','追加推奨')}</span></td></tr>
      <tr><td>D13 ★</td><td>${L('Statutory interview and support-history export','Ekspor wawancara statutori dan riwayat dukungan','法定面談・支援履歴自動出力')}</td><td>${L('Audit-submission logs for support and supervising bodies','Log untuk diserahkan ke lembaga pendukung dan pengawas saat audit','登録支援機関・監理機関向けの監査提出用ログ')}</td><td><span class="tag stop">${L('Needs building','Perlu dibangun','追加推奨')}</span></td></tr>
    </tbody>
  </table></div>
  ${derived('The four marked with a star are the ones the matrix flags as not yet in the requirements document. They are also the four that carry the compliance and growth benefits — which is the gap this matrix exists to expose.','Empat yang ditandai bintang adalah yang oleh matriks ini ditandai belum ada di dokumen requirement. Keempatnya juga yang memikul manfaat kepatuhan dan pertumbuhan — dan justru itulah celah yang hendak ditunjukkan matriks ini.','★の4つは、要件定義書に未記載として本表が指摘しているもの。同時に、制度対応と成長機会の便益を担う4つでもある。この表はまさにその欠落を可視化するために存在する。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('The gap','Celah','ギャップ')}</span>
  <h2>${L('Benefits promised to executives are the least covered.','Manfaat yang dijanjikan ke eksekutif justru paling sedikit tercakup.','経営層に約束された便益が、最も手薄である。')}</h2>
  <p class="lede">${L('The matrix crosses four benefit categories against three stakeholders — worker, field manager, executive — and marks each cell against the requirements document. The pattern is consistent: what the worker and the field manager get is written down; what the executive is promised often is not.','Matriks ini menyilangkan empat kategori manfaat dengan tiga pemangku kepentingan — pekerja, manajer lapangan, eksekutif — dan menandai tiap sel terhadap dokumen requirement. Polanya konsisten: apa yang didapat pekerja dan manajer lapangan tertulis; apa yang dijanjikan ke eksekutif sering tidak.','4つの便益区分×3ステークホルダー（労働者・現場管理者・経営者）を交差させ、各セルを要件定義書と照合している。傾向は一貫している——労働者と現場管理者が得るものは記載され、経営者に約束されたものはしばしば記載がない。')}</p>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">${L('Worker','Pekerja','労働者')}</div>
      <h3><span class="tag ok">${L('Mostly covered','Sebagian besar tercakup','概ね記載あり')}</span></h3>
      <p>${L('Productivity through mother-tongue initiation and comprehension-gap correction, and growth through the portable skill log, are all written into the requirements.','Produktivitas lewat inisiasi bahasa ibu dan koreksi kesenjangan pemahaman, serta pertumbuhan lewat log skill portabel, semuanya tertulis di requirement.','母語発信と認知乖離修正による生産性、ポータブルスキルログによる成長機会——いずれも要件に記載がある。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Field manager','Manajer lapangan','現場管理者')}</div>
      <h3><span class="tag warn">${L('Partially covered','Tercakup sebagian','一部記載')}</span></h3>
      <p>${L('Response speed, template ratio and rework reduction are there in part. The FAQ and OJT generation that would cut training effort is flagged as needing to be built.','Kecepatan respons, rasio template, dan pengurangan rework ada sebagian. Generasi FAQ dan OJT yang akan memangkas beban pelatihan ditandai perlu dibangun.','応答速度・定型比率・手戻り削減は一部記載。教育工数を削減するFAQ/OJT自動生成は追加推奨とされている。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Executive','Eksekutif','経営者')}</div>
      <h3><span class="tag stop">${L('Largely missing','Sebagian besar hilang','記載なし・要機能補強')}</span></h3>
      <p>${L('Rework-driven cost reduction is marked as absent from the requirements outright. Transfer-risk alerting, OJT knowledge generation and the human-rights due-diligence report — the three that justify premium, priority-awarded contracts from prime contractors and municipalities — are all marked as needing reinforcement.','Pengurangan biaya lewat rework ditandai sama sekali tidak ada di requirement. Peringatan risiko pindah, generasi pengetahuan OJT, dan laporan uji tuntas HAM — tiga hal yang membenarkan kontrak bernilai tinggi dan prioritas dari kontraktor utama dan pemerintah daerah — semuanya ditandai perlu diperkuat.','手戻り起因のコスト縮減は要件に記載なしと明記。転籍リスクアラート、OJTナレッジ生成、人権DDレポート——元請け・自治体からの高単価案件の優先受注を支える3つ——はいずれも要機能補強とされている。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">07_Management_Reports</span>
  <h2>${L('The same 59 features, as a reporting tracker.','59 fitur yang sama, sebagai tracker pelaporan.','同じ59機能を、報告用トラッカーにしたもの。')}</h2>
  <p class="lede">${L('Two spreadsheets, Indonesian and Japanese, carrying the full approved feature list with progress columns added beside the catalog definitions. Every feature currently reads as not yet reported.','Dua spreadsheet, Indonesia dan Jepang, memuat daftar lengkap fitur yang disetujui dengan kolom progres ditambahkan di sebelah definisi katalog. Setiap fitur saat ini terbaca belum dilaporkan.','インドネシア語版と日本語版のスプレッドシート2点。承認機能の全リストに、カタログ定義の隣へ進捗欄を追加した構成。現時点では全機能が未報告のまま。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('Sheet','Sheet','シート')}</th><th>${L('Contents','Isi','内容')}</th></tr></thead>
    <tbody>
      <tr><td>${L('Executive summary','Ringkasan eksekutif','要約')}</td><td>${L('59 approved, 27 candidates, 34 in MVP R1, the per-module counts, four key messages, and five decision or risk points.','59 disetujui, 27 kandidat, 34 di MVP R1, jumlah per modul, empat pesan kunci, dan lima titik keputusan atau risiko.','承認59・候補27・MVP R1で34、モジュール別件数、キーメッセージ4点、意思決定/リスク5点。')}</td></tr>
      <tr><td>${L('Approved features','Fitur disetujui','承認機能')}</td><td>${L('All 59 with 22 columns — blue for catalog definitions, green to be filled in as reporting progresses: report status, evidence, blocker, next action, owner, target date.','Seluruh 59 dengan 22 kolom — biru untuk definisi katalog, hijau untuk diisi seiring pelaporan berjalan: status laporan, bukti, blocker, aksi berikutnya, pemilik, tanggal target.','全59件を22列で管理。青はカタログ定義、緑は報告進行に応じて記入——報告状況・エビデンス・ブロッカー・次アクション・担当・目標日。')}</td></tr>
      <tr><td>${L('Benefit matrix','Matriks manfaat','便益マトリクス')}</td><td>${L('The D1–D13 coverage grid above, with a legend separating core proving indicators from supporting ones.','Grid cakupan D1–D13 di atas, dengan legenda yang memisahkan indikator pembukti inti dari indikator pendukung.','上記のD1〜D13カバレッジ表。核となる主要指標と補足指標を凡例で区別している。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('The Indonesian edition names the risks plainly in its own summary: avoid scope creep beyond the 34 R1 features, keep originals non-destructively stored, treat visibility and consent as conditions rather than features, and read the scale competitor as a risk while reading the credit-layer player as risk, partner and exit at once.','Edisi Indonesia menyebut risikonya terus terang di ringkasannya sendiri: hindari scope creep di luar 34 fitur R1, simpan teks asli secara non-destruktif, perlakukan visibilitas dan consent sebagai syarat bukan fitur, dan baca kompetitor berskala sebagai risiko sementara pemain lapisan kredit sekaligus risiko, mitra, dan exit.','インドネシア語版は要約でリスクを率直に挙げている——R1の34機能を超えるスコープクリープの回避、原文の非破壊保持、可視性と同意を機能ではなく条件として扱うこと、そして規模の競合はリスク、与信層のプレイヤーはリスク・パートナー・Exitのいずれでもあると読むこと。')}
  ${backTo('#/dev/documents', L('Back to the document library','Kembali ke pustaka dokumen','ドキュメント一覧へ戻る'))}
</div></section>`;
