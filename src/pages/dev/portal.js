/* dev/portal  —  PAGES.devPortal
   How the portal itself is built, and the rules for changing it. */
PAGES.devPortal=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · portal','Internal · portal','社内 · ポータル')}</span>
  <h1>${L('How this portal is built.','Cara portal ini dibangun.','本ポータルの構成。')}</h1>
  <p>${L('One self-contained HTML file with no runtime dependency, assembled from source files by a build step that only concatenates. It opens over file://, so it can be sent as a single attachment and still work.','Satu berkas HTML mandiri tanpa dependency runtime, dirakit dari berkas source oleh langkah build yang hanya menggabungkan. Bisa dibuka lewat file://, jadi dapat dikirim sebagai satu lampiran dan tetap berfungsi.','ランタイム依存のない自己完結型のHTML1枚。ビルドは連結のみを行う。file:// で開けるため、単一の添付として送っても動作する。')}</p>
  <div class="dev-meta">
    <span>0 ${L('dependencies','dependency','依存')}</span>
    <span>27 ${L('client pages','halaman client','顧客向けページ')}</span>
    <span>3 ${L('languages','bahasa','言語')}</span>
    <span class="mono">hash router</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Working on it','Cara mengerjakannya','編集手順')}</span>
  <h2>${L('Edit src/. Never edit index.html.','Edit src/. Jangan pernah edit index.html.','編集するのは src/。index.html は編集しない。')}</h2>
  <p class="lede">${L('index.html is a build output. Anything typed into it is lost on the next build.','index.html adalah hasil build. Apa pun yang diketik di sana hilang pada build berikutnya.','index.html はビルド生成物であり、直接書いた内容は次のビルドで失われる。')}</p>
  <div class="cmd">
node _build/serve.mjs      <span class="c"># → http://localhost:4180</span>
node _build/build.mjs      <span class="c"># src/ → index.html</span>
node _build/check.mjs      <span class="c"># ${L('every route renders, no JS errors','setiap route ter-render, tanpa error JS','全ルート描画・JSエラーなし')}</span>
node _build/verify.mjs     <span class="c"># ${L('compare output against a baseline build','bandingkan keluaran dengan build baseline','基準ビルドと出力を比較')}</span>
  </div>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('Path','Path','パス')}</th><th>${L('Holds','Berisi','内容')}</th></tr></thead>
    <tbody>
      <tr><td><code>src/manifest.json</code></td><td>${L('The concatenation order. The only place that decides what ends up in the build, and in what sequence.','Urutan penggabungan. Satu-satunya tempat yang menentukan apa yang masuk ke build dan dalam urutan apa.','連結順序。ビルドに何が、どの順で入るかを決める唯一の場所。')}</td></tr>
      <tr><td><code>src/shell/</code></td><td>${L('Static HTML: head, both navigations, mobile menu, footer.','HTML statis: head, kedua navigasi, mobile menu, footer.','静的HTML：head、2つのナビゲーション、モバイルメニュー、フッター。')}</td></tr>
      <tr><td><code>src/styles/</code></td><td>${L('CSS in cascade order, from design tokens through to page-specific rules.','CSS berurutan sesuai cascade, dari design token sampai aturan khusus halaman.','カスケード順のCSS。デザイントークンからページ固有の規則まで。')}</td></tr>
      <tr><td><code>src/lib/</code></td><td>${L('Icons, shared fragments, language, router, portal mode, data tables and helpers.','Ikon, fragmen bersama, bahasa, router, mode portal, tabel data, dan helper.','アイコン、共通フラグメント、言語、ルーター、ポータルモード、データ、ヘルパー。')}</td></tr>
      <tr><td><code>src/pages/client/</code></td><td>${L('One file per client-facing page.','Satu berkas per halaman yang menghadap client.','顧客向けページごとに1ファイル。')}</td></tr>
      <tr><td><code>src/pages/dev/</code></td><td>${L('One file per internal page — including this one.','Satu berkas per halaman internal — termasuk halaman ini.','内部ページごとに1ファイル。本ページを含む。')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Adding a page','Menambah halaman','ページ追加')}</span>
  <h2>${L('Four steps, in this order.','Empat langkah, dalam urutan ini.','この順で4手順。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">01</div>
      <h3>${L('Write the page file','Tulis berkas halamannya','ページファイルを書く')}</h3>
      <p>${L('A single assignment to the PAGES object returning a template string. Nothing else belongs in the file.','Satu penugasan ke objek PAGES yang mengembalikan template string. Tidak ada hal lain di berkas itu.','PAGESオブジェクトへの代入1つ。テンプレート文字列を返す。それ以外は書かない。')}</p>
      <span class="path">src/pages/dev/&lt;route&gt;.js</span>
    </div>
    <div class="dev-card">
      <div class="code">02</div>
      <h3>${L('Register the route','Daftarkan route-nya','ルートを登録する')}</h3>
      <p>${L('Map the hash route to the page key, and give it a navigation family so the header highlights correctly.','Petakan route hash ke key halaman, dan beri nav family supaya header menyorot dengan benar.','ハッシュルートとページキーを対応付け、ヘッダーが正しく強調されるようnavファミリーを指定する。')}</p>
      <span class="path">src/lib/80-routes.js</span>
    </div>
    <div class="dev-card">
      <div class="code">03</div>
      <h3>${L('Add it to the manifest','Tambahkan ke manifest','マニフェストに追加する')}</h3>
      <p>${L('Pages are safe anywhere after 20-pages-init.js, because a page file only assigns. Library files that run work on load must follow whatever they depend on.','Halaman aman diletakkan di mana pun setelah 20-pages-init.js, karena berkas halaman hanya menugaskan. Berkas library yang bekerja saat load harus berada setelah apa pun yang dipakainya.','ページファイルは代入のみのため、20-pages-init.js より後ならどこでもよい。ロード時に処理を行うライブラリは、依存先より後に置く必要がある。')}</p>
      <span class="path">src/manifest.json</span>
    </div>
    <div class="dev-card">
      <div class="code">04</div>
      <h3>${L('Link it','Tautkan','リンクする')}</h3>
      <p>${L('A page nobody links to is reported as unlinked by check.mjs. Add it to both the header navigation and the mobile menu.','Halaman yang tidak ditautkan siapa pun dilaporkan sebagai unlinked oleh check.mjs. Tambahkan ke navigasi header dan mobile menu.','どこからもリンクされないページは check.mjs が unlinked として報告する。ヘッダーとモバイルメニューの両方に追加する。')}</p>
      <span class="path">src/shell/10-nav.html · 20-mobile-menu.html</span>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Language rule','Aturan bahasa','言語ルール')}</span>
  <h2>${L('New copy goes through L(). Always.','Teks baru harus lewat L(). Selalu.','新規コピーは必ず L() を通す。')}</h2>
  <p class="lede">${L('L(en, id, ja) resolves at render time, which is what lets the language switch work without a reload.','L(en, id, ja) diselesaikan saat render, dan itulah yang membuat pergantian bahasa bekerja tanpa reload.','L(en, id, ja) は描画時に解決される。これによりリロードなしの言語切替が成立する。')}</p>
  <div class="cmd">
\${L('Report', 'Laporan', '報告')}
  </div>
  <div class="dev-grid" style="margin-top:26px">
    <div class="dev-card">
      <div class="code"><span class="tag warn">${L('Legacy','Warisan','旧方式')}</span></div>
      <h3>${L('A second mechanism still exists','Masih ada mekanisme kedua','第二の仕組みが残っている')}</h3>
      <p>${L('applyLanguage() walks the DOM and translates text that matches a dictionary entry exactly. It only supports older hardcoded English content, and anything absent from the dictionary silently stays English.','applyLanguage() menelusuri DOM dan menerjemahkan teks yang cocok persis dengan entri kamus. Ini hanya menopang konten lama yang hardcoded English, dan apa pun yang tidak ada di kamus diam-diam tetap English.','applyLanguage() はDOMを走査し、辞書と完全一致するテキストのみを置換する。旧来のハードコード英語を支えるだけで、辞書にない文言は黙って英語のまま残る。')}</p>
      <span class="path">src/lib/40-i18n-engine.js</span>
    </div>
    <div class="dev-card">
      <div class="code"><span class="tag ok">${L('Rule','Aturan','規約')}</span></div>
      <h3>${L('Do not add anything that relies on it','Jangan menambah apa pun yang bergantung padanya','これに依存する追加はしない')}</h3>
      <p>${L('Dictionary-based translation fails silently, which is the worst failure mode for a portal that is read in three languages. Every dev page on this side uses L() directly.','Terjemahan berbasis kamus gagal secara diam-diam, dan itu mode kegagalan terburuk untuk portal yang dibaca dalam tiga bahasa. Setiap halaman dev di sisi ini memakai L() langsung.','辞書方式は無言で失敗する。3言語で読まれるポータルにとって最悪の失敗様式である。内部側の各ページはすべて L() を直接使っている。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Modes','Mode','モード')}</span>
  <h2>${L('Client and dev share one build.','Client dan dev berbagi satu build.','顧客向けと内部向けは同一ビルドを共有する。')}</h2>
  <p class="lede">${L('Mode decides which navigation is mounted and which chrome the page carries. It never hides a route — any link stays shareable, and opening a dev route switches the portal into dev mode on its own.','Mode menentukan navigasi mana yang dipasang dan chrome apa yang dibawa halaman. Mode tidak pernah menyembunyikan route — setiap tautan tetap bisa dibagikan, dan membuka route dev otomatis memindahkan portal ke mode dev.','モードは、どのナビゲーションを表示し、どのクロームを付けるかを決めるだけで、ルートを隠すことはない。リンクは常に共有可能で、devルートを開けば自動的にdevモードへ切り替わる。')}</p>
  <div class="dev-meta">
    <span class="mono">localStorage · emenda_mode</span>
    <span class="mono">body.mode-client</span>
    <span class="mono">body.mode-dev</span>
    <span class="mono">#/dev/*</span>
  </div>
  ${derived('Because mode is presentation and not access control, nothing on the internal side should be treated as protected. Anyone with the file has every page.','Karena mode adalah penyajian dan bukan kontrol akses, tidak ada di sisi internal yang boleh dianggap terlindungi. Siapa pun yang punya berkasnya punya seluruh halaman.','モードは表示上の区分でありアクセス制御ではない。内部側の内容を保護されたものとして扱ってはならない。ファイルを持つ者は全ページを持つ。')}
  ${backTo('#/dev', L('Back to internal overview','Kembali ke ikhtisar internal','内部概要へ戻る'))}
</div></section>`;
