/* dev/parity  —  PAGES.devParity
   How Figma maps to the frontend, and what the parity matrix does and does not prove. */
PAGES.devParity=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · design parity','Internal · paritas desain','社内 · デザイン整合')}</span>
  <h1>${L('Figma decides. The route list does not.','Figma yang menentukan. Daftar route tidak.','決めるのはFigmaであり、ルート一覧ではない。')}</h1>
  <p>${L('Coverage is derived from the design file section by section, never from the routes that happen to exist. That rule was adopted after a route-level inventory missed a real screen: the unified sign-in shipped with no Create Account entry point even though Figma defines that flow.','Cakupan diturunkan dari file desain per section, bukan dari route yang kebetulan ada. Aturan ini diadopsi setelah inventory berbasis route melewatkan satu layar nyata: sign in terpadu rilis tanpa entry point Create Account padahal Figma mendefinisikan flow itu.','カバレッジはルート一覧ではなく、デザインファイルのセクション単位から導出する。この規約は、ルート起点の棚卸しが実在する画面を見落としたために採用された。Figmaに定義があるにもかかわらず、統合サインインにCreate Accountの入口がないまま実装された。')}</p>
  <div class="dev-meta">
    <span class="mono">full-emenda</span>
    <span class="mono">IZZYiAlNAdYAAcX2z5AtOm</span>
    <span>10 ${L('sections','section','セクション')}</span>
    <span>41 ${L('tables','tabel','表')}</span>
  </div>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="cta-band" style="text-align:left">
    <span class="eyebrow">${L('One source, no exceptions','Satu sumber, tanpa pengecualian','唯一の原典、例外なし')}</span>
    <h2 style="font-size:clamp(22px,2.6vw,30px)">${L('There is exactly one design source: the full-emenda file in Figma.','Sumber desainnya tepat satu: file full-emenda di Figma.','デザインの原典はただ一つ、Figmaの full-emenda ファイルである。')}</h2>
    <p>${L('Any other design artefact is a copy, and a copy is never citable. The .fig and .make exports filed under the document library are offline snapshots taken at a moment in time — do not design from them, do not measure from them, and do not treat a difference between them and the live file as a finding.','Artefak desain lain apa pun adalah salinan, dan salinan tidak pernah bisa dikutip. Ekspor .fig dan .make yang tersimpan di pustaka dokumen adalah snapshot luring pada satu titik waktu — jangan mendesain darinya, jangan mengukur darinya, dan jangan menganggap perbedaannya dengan file live sebagai temuan.','それ以外のデザイン成果物はすべて複製であり、複製は引用元になり得ない。ドキュメントライブラリにある .fig と .make はある時点のオフライン写しにすぎない。そこから設計せず、そこから計測せず、live ファイルとの差分を指摘事項として扱わないこと。')}</p>
    <div class="hero-cta">
      <a class="btn btn-p btn-lg" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?node-id=0-1" target="_blank" rel="noopener">${L('Open the design source ↗','Buka sumber desain ↗','デザイン原典を開く ↗')}</a>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('The canonical-source rule','Aturan sumber kanonik','正典ルール')}</span>
  <h2>${L('Mobile defines the product. Desktop defines its presentation.','Mobile mendefinisikan produk. Desktop mendefinisikan penyajiannya.','モバイルが製品を定義し、デスクトップは見せ方を定義する。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">01</div>
      <h3>${L('Worker mobile is the source of truth','Worker mobile adalah sumber kebenaran','Worker mobileが正典')}</h3>
      <p>${L('Flow, screen and state coverage, journey order, action hierarchy and navigation intent all come from the mobile pages. Desktop governs desktop presentation only.','Flow, cakupan layar dan state, urutan journey, hierarki aksi, dan maksud navigasi semuanya berasal dari halaman mobile. Desktop hanya mengatur penyajian desktop.','フロー、画面・状態のカバレッジ、ジャーニー順序、アクション階層、ナビゲーションの意図はすべてモバイルに由来する。デスクトップは表示のみを規定する。')}</p>
      <span class="path">mobile W-xx · desktop WD-xx</span>
    </div>
    <div class="dev-card">
      <div class="code">02</div>
      <h3>${L('A mobile capability must exist on desktop too','Kemampuan di mobile harus ada juga di desktop','モバイルの機能はデスクトップにも必ず存在する')}</h3>
      <p>${L('It is adapted to the desktop design system and recorded as such — never marked BLOCKED for the absence of a desktop mock.','Kemampuan itu diadaptasi ke design system desktop dan dicatat demikian — tidak pernah ditandai BLOCKED hanya karena mock desktopnya tidak ada.','デスクトップのデザインシステムに適合させ、その旨を記録する。デスクトップのモックがないことを理由にBLOCKEDとはしない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">03</div>
      <h3>${L('Never scale between viewports','Jangan pernah menskalakan antar viewport','ビューポート間で拡縮しない')}</h3>
      <p>${L('Hubs keep the bottom navigation, sub-pages drop the chrome, mobile uses bottom sheets. One shared router, store, i18n and session underneath.','Hub mempertahankan bottom navigation, sub-halaman melepas chrome, mobile memakai bottom sheet. Di bawahnya satu router, store, i18n, dan session yang sama.','ハブは下部ナビを保持し、下層ページはクロームを外し、モバイルはボトムシートを使う。土台のルーター・ストア・i18n・セッションは共通。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">04</div>
      <h3>${L('Reachable by clicking, or it does not count','Terjangkau dengan klik, atau tidak dihitung','クリックで到達できなければ、カバレッジに数えない')}</h3>
      <p>${L('Typing a URL does not make a screen covered. Non-interactive Figma state variants map to ?state=<name>; interactive states use real UI against the mock stores.','Mengetik URL tidak membuat sebuah layar terhitung. Varian state Figma yang non-interaktif dipetakan ke ?state=<name>; state interaktif memakai UI nyata di atas mock store.','URLを直接入力しても到達済みとは見なさない。非対話的なFigmaの状態バリアントは ?state=<name> に対応させ、対話的な状態はモックストア上の実UIで表現する。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('What the matrix records','Yang dicatat matrix','パリティ表の記録内容')}</span>
  <h2>${L('A row is not complete because a route renders.','Sebuah baris tidak selesai hanya karena route-nya ter-render.','ルートが描画されるだけでは、その行は完了ではない。')}</h2>
  <p class="lede">${L('Each row carries twelve columns, and COMPLETE requires every one of them to hold — flow and visual, on both viewports, in all three languages.','Setiap baris punya dua belas kolom, dan COMPLETE menuntut semuanya terpenuhi — flow dan visual, di kedua viewport, dalam tiga bahasa.','各行は12列を持ち、COMPLETEはそのすべてを満たすことを要求する。フローと見た目、両ビューポート、3言語すべて。')}</p>
  <div class="cmd">
Section | Figma Node | Screen/State | FE Route |
Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual |
<b>ID</b> | <b>EN</b> | <b>JA</b> | Status
  </div>
  ${derived('Status values are COMPLETE, PARTIAL, NOT IMPLEMENTED and BLOCKED, with a documented reason required for BLOCKED. A deviation register at the end of the file records every place the implementation knowingly departs from the mock.','Nilai status: COMPLETE, PARTIAL, NOT IMPLEMENTED, dan BLOCKED, dengan alasan wajib untuk BLOCKED. Deviation register di akhir file mencatat setiap tempat implementasi sengaja menyimpang dari mock.','ステータスは COMPLETE / PARTIAL / NOT IMPLEMENTED / BLOCKED。BLOCKEDには理由の記載が必須。ファイル末尾のdeviation registerに、実装がモックから意図的に外れた箇所をすべて記録する。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Open discrepancy','Ketidaksesuaian terbuka','未解消の不一致')}</span>
  <h2>${L('Three different totals are in circulation for the same thing.','Tiga angka total berbeda beredar untuk hal yang sama.','同じ対象に、3つの異なる総数が流通している。')}</h2>
  <p class="lede">${L('None of them is obviously wrong, and none of them agrees with the others. Until this is reconciled, quote the source alongside the number — and prefer a count taken from the matrix itself.','Tidak ada yang jelas salah, dan tidak ada yang cocok satu sama lain. Sampai ini direkonsiliasi, sebutkan sumbernya bersama angkanya — dan utamakan hitungan yang diambil langsung dari matrix.','どれも明白な誤りではなく、そして互いに一致していない。整合が取れるまでは、数値と出典を必ず併記し、可能な限りパリティ表から直接数えた値を使うこと。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Source','Sumber','出典')}</th><th>${L('States','State','状態数')}</th>
      <th>${L('Says','Menyatakan','記載')}</th><th>${L('Standing','Status','扱い')}</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><code>figma-parity-plan.md</code></td><td>716</td>
        <td>${L('0 PARTIAL, 0 NOT IMPLEMENTED','0 PARTIAL, 0 NOT IMPLEMENTED','PARTIAL 0、NOT IMPLEMENTED 0')}</td>
        <td><span class="tag stop">${L('Stale','Usang','古い')}</span></td>
      </tr>
      <tr>
        <td>${L('This portal, client side','Portal ini, sisi client','本ポータル（顧客向け）')}</td><td>802</td>
        <td>${L('631 COMPLETE','631 COMPLETE','COMPLETE 631')}</td>
        <td><span class="tag warn">${L('Unreconciled','Belum direkonsiliasi','未整合')}</span></td>
      </tr>
      <tr>
        <td><code>parity-matrix.md</code></td><td>847 ${L('table rows','baris tabel','表の行')}</td>
        <td>${L('651 COMPLETE, 130 PARTIAL, 2 BLOCKED as raw token counts','651 COMPLETE, 130 PARTIAL, 2 BLOCKED sebagai hitungan token mentah','素のトークン数で COMPLETE 651、PARTIAL 130、BLOCKED 2')}</td>
        <td><span class="tag ok">${L('Closest to source','Paling dekat ke sumber','最も原典に近い')}</span></td>
      </tr>
    </tbody>
  </table></div>
  ${derived('Counted directly from the files. The matrix figures are raw token counts across 41 tables whose column layouts differ, so they are an upper bound rather than a settled total — which is precisely the reconciliation still owed.','Dihitung langsung dari berkasnya. Angka matrix adalah hitungan token mentah di 41 tabel dengan susunan kolom berbeda, jadi merupakan batas atas, bukan total final — dan justru itulah rekonsiliasi yang masih tertunggak.','ファイルから直接計数した値。パリティ表の数値は列構成の異なる41表にまたがる素のトークン数であり、確定総数ではなく上限値。この整合作業自体が未了である。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Language contract','Kontrak bahasa','言語の契約')}</span>
  <h2>${L('A screen is not done until it exists in all three languages.','Sebuah layar belum selesai sampai ada dalam tiga bahasa.','3言語すべてで存在するまで、画面は完了ではない。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">${L('Required','Wajib','必須')}</div>
      <h3>${L('Every route carries ID, EN and JA','Setiap route memuat ID, EN, dan JA','全ルートがID・EN・JAを持つ')}</h3>
      <p>${L('No hardcoded system text. Switching language must not reload, and must not reset the route, state, drafts or stores. Persisted in localStorage as emenda-language.','Tanpa teks sistem hardcoded. Ganti bahasa tidak boleh reload, dan tidak boleh mereset route, state, draft, maupun store. Disimpan di localStorage sebagai emenda-language.','システム文言のハードコード禁止。言語切替でリロードしてはならず、ルート・状態・下書き・ストアもリセットしてはならない。localStorage の emenda-language に保存。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Never translated','Tidak pernah diterjemahkan','翻訳しない')}</div>
      <h3>${L('Official Japanese terms stay as they are','Istilah resmi Jepang tetap apa adanya','日本の公式用語はそのまま')}</h3>
      <p>${L('User-generated content, proper nouns, EMENDA IDs and official Japanese terms are never auto-translated. A worker has to be able to say the form name at the counter.','Konten buatan pengguna, nama diri, EMENDA ID, dan istilah resmi Jepang tidak pernah diterjemahkan otomatis. Pekerja harus bisa menyebut nama formulirnya di loket.','ユーザー生成コンテンツ、固有名詞、EMENDA ID、日本の公式用語は自動翻訳しない。労働者が窓口でその書類名を口に出せる必要があるため。')}</p>
      <span class="path">転入届 · 住民票</span>
    </div>
  </div>
  ${backTo('#/dev', L('Back to internal overview','Kembali ke ikhtisar internal','内部概要へ戻る'))}
</div></section>`;
