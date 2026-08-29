/* dev/documents  —  PAGES.devDocuments
   Inventory of the source document library: what exists, in what language, for whom. */
PAGES.devDocuments=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · documents','Internal · dokumen','社内 · ドキュメント')}</span>
  <h1>${L('Twenty source documents, in three languages.','Dua puluh dokumen sumber, dalam tiga bahasa.','3言語にまたがる20のソース文書。')}</h1>
  <p>${L('These are the documents the product was agreed from — requirements, the feature catalog, the business case, competitor work and management reporting. Most are PDF, PowerPoint or Excel and cannot be opened from a browser, so this page says what each one is and where to find it.','Ini dokumen yang menjadi dasar kesepakatan produk — requirement, katalog fitur, business case, analisis kompetitor, dan pelaporan manajemen. Sebagian besar PDF, PowerPoint, atau Excel dan tidak bisa dibuka dari browser, jadi halaman ini menjelaskan isi dan lokasinya.','製品はこれらの文書で合意されている。要件、機能カタログ、事業計画、競合分析、経営報告。多くはPDF・PowerPoint・Excelでブラウザから開けないため、本ページで各文書の内容と所在を示す。')}</p>
  <div class="dev-meta">
    <span>20 ${L('source documents','dokumen sumber','ソース文書')}</span>
    <span>6 ${L('markdown conversions','konversi markdown','Markdown変換')}</span>
    <span class="mono">docs/doc/doc</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Active baseline','Baseline aktif','現行ベースライン')}</span>
  <h2>${L('The catalog decides scope. Nothing else does.','Katalog yang menentukan scope. Bukan yang lain.','スコープを決めるのはカタログであり、他ではない。')}</h2>
  <p class="lede">${L('Where documents disagree about how many features exist or what stage they are at, the newest Product Feature Catalog wins. Everything else is context around it.','Ketika dokumen berbeda soal berapa banyak fitur yang ada atau di tahap apa, Product Feature Catalog terbaru yang menang. Sisanya adalah konteks di sekitarnya.','機能数や段階について文書間で食い違う場合は、最新のProduct Feature Catalogを優先する。他はその周辺文脈である。')}</p>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">v1.0 r10</div>
      <h3>${L('59 approved features','59 fitur disetujui','承認機能 59')}</h3>
      <p>${L('58 features counted across the release buckets, plus F-26.1 held pending open question OQ-8 — which is where the 59 comes from.','58 fitur terhitung di seluruh release bucket, ditambah F-26.1 yang tertahan menunggu open question OQ-8 — dari situlah angka 59 berasal.','リリースバケットで計上される58件に、OQ-8の決着待ちであるF-26.1を加えて59となる。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Candidates','Kandidat','候補')}</div>
      <h3>${L('27 candidate features','27 fitur kandidat','候補機能 27')}</h3>
      <p>${L('Not approved, not scheduled, and not to be presented as scope. They exist so the approved set has a visible boundary.','Belum disetujui, belum dijadwalkan, dan tidak boleh dipresentasikan sebagai scope. Keberadaannya membuat batas dari set yang disetujui terlihat jelas.','未承認・未計画であり、スコープとして提示してはならない。承認済み集合の境界を可視化するために存在する。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">01 · 02 · ${L('Product & requirements','Produk & requirement','製品と要件')}</span>
  <h2>${L('What the product is supposed to be.','Produk ini seharusnya seperti apa.','製品が何であるべきか。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Document','Dokumen','文書')}</th><th>${L('Format','Format','形式')}</th>
      <th>${L('Language','Bahasa','言語')}</th><th>${L('What it holds','Isinya','内容')}</th>
      <th>${L('In this portal','Di portal ini','本ポータル')}</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>EMENDA_Product_Feature_Catalog_v1.0_r10</td><td>PDF · 1.4 MB</td><td>EN</td>
        <td>${L('The frozen baseline: 59 approved features, 27 candidates, 15 module groups, release buckets and maturity.','Baseline yang dibekukan: 59 fitur disetujui, 27 kandidat, 15 module group, release bucket, dan maturity.','凍結ベースライン：承認59、候補27、15モジュール群、リリース区分、成熟度。')}</td>
        <td><a href="#/dev/doc/feature-catalog" data-nav><span class="tag ok">${L('Read the digest →','Baca ringkasannya →','要約を読む →')}</span></a></td>
      </tr>
      <tr>
        <td>Emenda_Stage1_DRD_v2.0 <span class="mono">+ _JA</span></td><td>Markdown · 53 / 72 KB</td><td>EN · 日本語</td>
        <td>${L('Governs the Figma design phase: screen IDs, design principles, component contracts, tokens, acceptance criteria, and 13 open questions.','Mengatur fase desain Figma: screen ID, prinsip desain, kontrak komponen, token, kriteria penerimaan, dan 13 open question.','Figma設計フェーズを規定：画面ID、設計原則、コンポーネント契約、トークン、受入基準、13の未決事項。')}</td>
        <td><span class="tag ok"><a href="#/dev/requirements" data-nav>${L('Read','Dibaca','読込済')}</a></span></td>
      </tr>
      <tr>
        <td>Emenda_MVP_要件定義書_v1-2</td><td>DOCX · 29 KB</td><td>日本語</td>
        <td>${L('The Stage 1 business requirements: the core hypothesis, the scope line, the five-entity data model, seven KPIs, and the worker-incentive chapter.','Requirement bisnis Stage 1: hipotesis inti, garis scope, model data lima entitas, tujuh KPI, dan bab insentif pekerja.','Stage 1の事業要件。中核仮説、スコープの線引き、5エンティティのデータモデル、7つのKPI、労働者インセンティブの章。')}</td>
        <td><a href="#/dev/doc/mvp-requirements" data-nav><span class="tag ok">${L('Read the digest →','Baca ringkasannya →','要約を読む →')}</span></a></td>
      </tr>
      <tr>
        <td>Emenda_AI_Agent_PRD_MVP_v1.6</td><td>PDF · 1.9 MB</td><td>ID · EN</td>
        <td>${L('A separate product: the coaching agent for foreigners before and during life in Japan, with its own isolation architecture.','Produk terpisah: agent pendamping untuk orang asing sebelum dan selama tinggal di Jepang, dengan arsitektur isolasinya sendiri.','別製品——来日前・滞在中の外国人に伴走するコーチングAI。独自の分離アーキテクチャを持つ。')}</td>
        <td><a href="#/dev/doc/ai-agent" data-nav><span class="tag ok">${L('Read the digest →','Baca ringkasannya →','要約を読む →')}</span></a></td>
      </tr>
      <tr>
        <td>Emenda_Pipeline_Cards_Matrix</td><td>PDF · 384 KB</td><td>日本語</td>
        <td>${L('The three-layer data pipeline: five source layers, the D1–D13 measurements, and the four benefit categories they justify.','Pipeline data tiga lapis: lima lapisan sumber, pengukuran D1–D13, dan empat kategori manfaat yang dibenarkannya.','3層構造のデータパイプライン——5つの基盤レイヤー、D1〜D13の計測指標、それが裏づける4つの便益区分。')}</td>
        <td><a href="#/dev/doc/data-platform" data-nav><span class="tag ok">${L('Read the digest →','Baca ringkasannya →','要約を読む →')}</span></a></td>
      </tr>
      <tr>
        <td>prd emenda 1</td><td>PDF · 7.1 MB</td><td>—</td>
        <td>${L('The largest file in the library and the business source the DRD cites throughout — but it holds no extractable text at all.','Berkas terbesar di pustaka ini dan sumber bisnis yang dirujuk DRD di sepanjang isinya — tapi sama sekali tidak memuat teks yang bisa diekstrak.','本ライブラリ最大のファイルで、DRDが全体を通じて参照する事業側の原典。しかし抽出可能なテキストが一切ない。')}</td>
        <td><span class="tag stop">${L('Image-only','Hanya citra','画像のみ')}</span></td>
      </tr>
      <tr>
        <td>Emenda_事業説明資料_吉川様向け_202608</td><td>PDF · 368 KB</td><td>日本語</td>
        <td>${L('A business briefing prepared for a named recipient, August 2026. Slides are largely images; the product development plan derived from it is the readable version.','Materi penjelasan bisnis untuk penerima tertentu, Agustus 2026. Slide-nya sebagian besar citra; rencana pengembangan produk yang diturunkan darinya adalah versi yang terbaca.','特定の宛先向けの事業説明資料、2026年8月。スライドは大半が画像。読める形は、これを基にしたプロダクト開発プランの方。')}</td>
        <td><span class="tag warn">${L('Mostly images','Sebagian besar citra','大半が画像')}</span></td>
      </tr>
      <tr>
        <td>EMD構造図</td><td>PDF · 1.3 MB</td><td>日本語</td>
        <td>${L('A structural diagram filed with the product catalog. Five pages, effectively a picture.','Diagram struktur yang disimpan bersama katalog produk. Lima halaman, praktis berupa gambar.','製品カタログと同じ場所に置かれた構造図。5ページ、実質的に図版。')}</td>
        <td><span class="tag stop">${L('Image-only','Hanya citra','画像のみ')}</span></td>
      </tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">03 · 04 · 07 · ${L('Business & reporting','Bisnis & pelaporan','事業と報告')}</span>
  <h2>${L('Why it should exist, and how it is reported upward.','Mengapa ini layak ada, dan bagaimana dilaporkan ke atas.','なぜ事業として成立し、どう上位に報告されるか。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Document','Dokumen','文書')}</th><th>${L('Format','Format','形式')}</th>
      <th>${L('Language','Bahasa','言語')}</th><th>${L('Audience','Audiens','読者')}</th>
    </tr></thead>
    <tbody>
      <tr><td>Emenda 事業構造と差別化</td><td>PPTX · 432 KB</td><td>日本語</td><td><a href="#/dev/doc/business" data-nav>${L('Business structure and differentiation →','Struktur bisnis dan diferensiasi →','事業構造と差別化 →')}</a></td></tr>
      <tr><td>Emenda_事業計画_外部説明用_202607</td><td>PPTX · 273 KB</td><td>日本語</td><td><a href="#/dev/doc/business" data-nav>${L('Business plan, cleared for external explanation →','Rencana bisnis, boleh untuk penjelasan eksternal →','事業計画、外部説明用 →')}</a></td></tr>
      <tr><td>Emenda競合分析_社内共有用_2026-07</td><td>PDF · 475 KB</td><td>日本語</td><td><a href="#/dev/doc/competition" data-nav>${L('16 competitor profiles, internal only →','16 profil kompetitor, khusus internal →','競合16社プロファイル、社内限り →')}</a></td></tr>
      <tr><td>Laporan_Fitur_EMENDA</td><td>XLSX · 41 KB</td><td>Indonesia</td><td><a href="#/dev/doc/data-platform" data-nav>${L('All 59 features as a reporting tracker →','Seluruh 59 fitur sebagai tracker pelaporan →','59機能の報告用トラッカー →')}</a></td></tr>
      <tr><td>EMENDA_機能報告書_日本語版</td><td>XLSX · 36 KB</td><td>日本語</td><td>${L('The same feature report, Japanese edition.','Laporan fitur yang sama, edisi Jepang.','同じ機能報告書の日本語版。')}</td></tr>
      <tr><td>005_統合的便益_データ要件_マトリクス星取表</td><td>XLSX · 20 KB</td><td>日本語</td><td><a href="#/dev/doc/data-platform" data-nav>${L('Benefit × data-requirement coverage, with the gaps →','Cakupan manfaat × kebutuhan data, beserta celahnya →','便益×データ要件のカバレッジと欠落 →')}</a></td></tr>
    </tbody>
  </table></div>
  ${derived('Two of these are explicitly scoped: the competitor analysis is internal only, and the business plan is cleared for external explanation. Check the marking before reusing a slide.','Dua di antaranya punya batasan eksplisit: analisis kompetitor khusus internal, dan rencana bisnis boleh dipakai untuk penjelasan eksternal. Periksa penandaannya sebelum memakai ulang sebuah slide.','2件は用途が明記されている。競合分析は社内限定、事業計画は外部説明可。スライドを再利用する前に必ず表記を確認すること。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">05 · 06 · 90 · ${L('Design, walkthrough & conversions','Desain, walkthrough & konversi','デザイン・ウォークスルー・変換')}</span>
  <h2>${L('How it looks, how it demos, and what is searchable.','Bagaimana tampilannya, bagaimana didemokan, dan apa yang bisa dicari.','見た目、デモ、検索可能な形式。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Document','Dokumen','文書')}</th><th>${L('Format','Format','形式')}</th><th>${L('Note','Catatan','備考')}</th>
    </tr></thead>
    <tbody>
      <tr><td>emenda.fig</td><td>FIG · 716 KB</td><td><span class="tag stop">${L('Copy','Salinan','複製')}</span> ${L('An offline snapshot, not the source. Never design or measure from it.','Snapshot luring, bukan sumber. Jangan mendesain atau mengukur darinya.','オフラインの写しであり原典ではない。ここから設計・計測をしないこと。')}</td></tr>
      <tr><td>emenda.make</td><td>MAKE · 899 KB</td><td><span class="tag stop">${L('Copy','Salinan','複製')}</span> ${L('Figma Make export. Same rule applies.','Ekspor Figma Make. Aturan yang sama berlaku.','Figma Makeのエクスポート。同じ規約が適用される。')}</td></tr>
      <tr><td>emenda_screen_flow_figma</td><td>HTML + MD · 18 KB</td><td>${L('Screen flow and Figma handoff — the design-side source the DRD defers to on visual matters.','Screen flow dan handoff Figma — sumber sisi desain yang dirujuk DRD untuk hal visual.','画面遷移とFigmaハンドオフ。視覚面についてDRDが委ねる設計側の原典。')}</td></tr>
      <tr><td>Emenda_Walkthrough</td><td>HTML · 71 KB</td><td>${L('Walkthrough deck, openable directly in a browser.','Materi walkthrough, bisa dibuka langsung di browser.','ウォークスルー資料。ブラウザで直接開ける。')}</td></tr>
      <tr><td>emenda_mvp_prototype</td><td>HTML · 45 KB</td><td>${L('Standalone MVP prototype page.','Halaman prototipe MVP yang berdiri sendiri.','単体で動作するMVPプロトタイプ。')}</td></tr>
      <tr><td>90_Markdown_Conversions</td><td>MD · 6 ${L('files','berkas','ファイル')}</td><td>${L('Converted copies kept apart from their sources, so search and diff work. Conversions are never the citable source.','Salinan hasil konversi disimpan terpisah dari sumbernya, agar pencarian dan diff berfungsi. Konversi tidak pernah menjadi sumber yang dikutip.','検索と差分のため、変換版は原典と分けて保管する。引用元は常に原典であり、変換版ではない。')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Library rules','Aturan pustaka','運用ルール')}</span>
  <h2>${L('Four rules keep the library usable.','Empat aturan menjaga pustaka ini tetap berguna.','4つの規約でライブラリの実用性を保つ。')}</h2>
  <div class="dev-grid">
    <div class="dev-card"><div class="code">01</div><h3>${L('File by category, not by date received','Simpan menurut kategori, bukan tanggal diterima','受領日ではなくカテゴリで整理')}</h3><p>${L('Each document belongs to exactly one numbered folder.','Setiap dokumen milik tepat satu folder bernomor.','各文書は番号付きフォルダのいずれか1つに属する。')}</p></div>
    <div class="dev-card"><div class="code">02</div><h3>${L('No renders, previews or check files in doc/','Tanpa hasil render, preview, atau berkas pemeriksaan di doc/','doc/ にレンダリング・プレビュー・検査ファイルを置かない')}</h3><p>${L('The folder holds sources. Anything generated lives elsewhere.','Folder ini menyimpan sumber. Apa pun yang dihasilkan disimpan di tempat lain.','このフォルダは原典のみ。生成物は別の場所に置く。')}</p></div>
    <div class="dev-card"><div class="code">03</div><h3>${L('Conversions stay in 90_Markdown_Conversions','Konversi tetap di 90_Markdown_Conversions','変換版は 90_Markdown_Conversions に置く')}</h3><p>${L('Never beside the source, so nobody cites the conversion by accident.','Tidak berdampingan dengan sumbernya, supaya konversi tidak terkutip tanpa sengaja.','原典と並べない。誤って変換版を引用しないため。')}</p></div>
    <div class="dev-card"><div class="code">04</div><h3>${L('Revision number or date in the filename','Nomor revisi atau tanggal di nama berkas','ファイル名に版番号または日付を入れる')}</h3><p>${L('Required for any document that changes, so a stale copy is visible at a glance.','Wajib untuk dokumen yang berubah, supaya salinan usang langsung terlihat.','変更される文書には必須。古い版が一目で分かるようにするため。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Known problem','Masalah yang diketahui','既知の問題')}</span>
  <h2>${L('The most-cited document cannot be read by anything.','Dokumen yang paling banyak dirujuk justru tidak bisa dibaca apa pun.','最も多く引用される文書が、何によっても読めない。')}</h2>
  <p class="lede">${L('prd emenda 1.pdf is 7.1 MB across 38 pages and contains zero extractable text — it is a scan or an export of images. The DRD traces every one of its requirements back to this document, and the feature catalog is positioned as an expansion of its feature matrix, so it is the most load-bearing file in the library and the only one no tool can search.','prd emenda 1.pdf berukuran 7,1 MB di 38 halaman dan tidak memuat satu pun teks yang bisa diekstrak — ia hasil pindai atau ekspor citra. DRD merujuk setiap requirement-nya kembali ke dokumen ini, dan feature catalog diposisikan sebagai perluasan feature matrix-nya, jadi inilah berkas paling menopang di pustaka ini sekaligus satu-satunya yang tidak bisa dicari alat apa pun.','prd emenda 1.pdf は38ページ7.1MBで、抽出可能なテキストが皆無——スキャンまたは画像出力である。DRDは全要件をこの文書に遡って参照し、機能カタログはそのFeature Matrixの拡張として位置づけられている。つまり本ライブラリで最も重い文書でありながら、いかなるツールでも検索できない唯一の文書でもある。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('File','Berkas','ファイル')}</th><th>${L('Pages','Halaman','ページ')}</th><th>${L('Extractable text','Teks yang bisa diekstrak','抽出テキスト')}</th><th>${L('Consequence','Konsekuensi','影響')}</th></tr></thead>
    <tbody>
      <tr><td>prd emenda 1.pdf</td><td>38</td><td><span class="tag stop">0</span></td><td>${L('Cannot be searched, quoted or diffed. Every citation of it has to be checked by eye.','Tidak bisa dicari, dikutip, atau dibandingkan. Setiap kutipannya harus diperiksa dengan mata.','検索・引用・差分比較ができない。この文書への引用はすべて目視で確認するほかない。')}</td></tr>
      <tr><td>EMD構造図.pdf</td><td>5</td><td><span class="tag stop">~100 ${L('chars','karakter','文字')}</span></td><td>${L('Effectively a picture. Fine for a diagram, but it cannot be indexed.','Praktis berupa gambar. Wajar untuk diagram, tapi tidak bisa diindeks.','実質的に図版。図としては問題ないが、索引化はできない。')}</td></tr>
      <tr><td>Emenda_事業説明資料</td><td>7</td><td><span class="tag warn">~2,300 ${L('chars','karakter','文字')}</span></td><td>${L('Thin for seven slides — most content is set as images.','Tipis untuk tujuh slide — sebagian besar isinya dipasang sebagai citra.','7スライドにしては薄い。内容の大半が画像として配置されている。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('Everything else in the library extracts cleanly: the feature catalog yields 65,000 characters across 40 pages and the AI agent PRD 119,000 across 73.','Sisanya di pustaka ini terekstrak bersih: feature catalog menghasilkan 65.000 karakter di 40 halaman dan AI agent PRD 119.000 di 73 halaman.','他はすべて問題なく抽出できる。機能カタログは40ページで約65,000字、AIエージェントPRDは73ページで約119,000字。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Known problem','Masalah yang diketahui','既知の問題')}</span>
  <h2>${L('Twelve filenames are corrupted on disk.','Dua belas nama berkas rusak di disk.','12件のファイル名がディスク上で壊れている。')}</h2>
  <p class="lede">${L('Every Japanese filename was written with the wrong encoding when the archive was extracted, so the real names no longer appear. This page shows the recovered names; the folder does not.','Setiap nama berkas berbahasa Jepang tertulis dengan encoding salah saat arsipnya diekstrak, sehingga nama aslinya tidak lagi muncul. Halaman ini menampilkan nama yang sudah dipulihkan; foldernya tidak.','アーカイブ展開時に誤ったエンコーディングで書き込まれたため、日本語ファイル名が本来の表記で表示されない。本ページは復元後の名称を示すが、フォルダ上は壊れたままである。')}</p>
  <div class="cmd">
<span class="c"># ${L('on disk','di disk','ディスク上')}</span>
Emenda_MVP_ΦªüΣ╗╢σ«Üτ╛⌐µ¢╕_v1-2.docx

<span class="c"># ${L('actual name','nama sebenarnya','本来の名称')}</span>
<b>Emenda_MVP_要件定義書_v1-2.docx</b>
  </div>
  ${derived('Recovered by re-reading each name as UTF-8. The files themselves are intact — only the names are affected — but they cannot be searched by their Japanese titles until they are renamed.','Dipulihkan dengan membaca ulang tiap nama sebagai UTF-8. Isi berkasnya utuh — hanya namanya yang terdampak — tapi tidak bisa dicari lewat judul Jepangnya sampai diganti nama.','各名称をUTF-8として読み直して復元した。ファイル本体は無傷で影響は名称のみだが、改名するまで日本語名では検索できない。')}
  ${backTo('#/dev', L('Back to internal overview','Kembali ke ikhtisar internal','内部概要へ戻る'))}
</div></section>`;
