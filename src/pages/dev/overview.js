/* dev  —  PAGES.devOverview
   Entry point of the internal side: what exists, where it lives, how to run it. */
PAGES.devOverview=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · overview','Internal · ikhtisar','社内 · 概要')}</span>
  <h1>${L('Everything EMENDA, in one place.','Semua tentang EMENDA, dalam satu tempat.','EMENDAのすべてを、一箇所に。')}</h1>
  <p>${L('EMENDA is spread across two repositories, a Figma file, a document library, and a running demo. This side of the portal says what each one is, which questions it answers, and how to open it — so nobody has to reconstruct that map again.','EMENDA tersebar di dua repository, satu file Figma, satu pustaka dokumen, dan demo yang berjalan. Sisi portal ini menjelaskan apa isi masing-masing, pertanyaan apa yang dijawabnya, dan cara membukanya — supaya peta ini tidak perlu disusun ulang lagi.','EMENDAは2つのリポジトリ、Figmaファイル、ドキュメント群、稼働中のデモに分散している。この内部ページでは、それぞれが何であり、どの問いに答え、どう開くのかを示す。')}</p>
  <div class="dev-meta">
    <span>158 ${L('routes','route','ルート')}</span>
    <span>235 ${L('Playwright checks','check Playwright','Playwright検証')}</span>
    <span>20 ${L('source documents','dokumen sumber','ソース文書')}</span>
    <span>3 ${L('languages','bahasa','言語')}</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('The artifacts','Artefak','成果物')}</span>
  <h2>${L('Five places hold the product. Each answers a different question.','Produk ini tersimpan di lima tempat. Masing-masing menjawab pertanyaan berbeda.','製品は5つの場所にある。それぞれ答える問いが異なる。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Artifact','Artefak','成果物')}</th>
      <th>${L('Answers','Menjawab','答える問い')}</th>
      <th>${L('Location','Lokasi','場所')}</th>
      <th>${L('Open it','Membukanya','開き方')}</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>${L('Frontend application','Aplikasi frontend','フロントエンド')}</td>
        <td>${L('What has actually been built, screen by screen.','Apa yang benar-benar sudah dibangun, layar demi layar.','実際に構築済みの画面。')}</td>
        <td><code>/src</code> ${L('at the repository root','di root repository','リポジトリ直下')}</td>
        <td><code>npm run dev</code></td>
      </tr>
      <tr>
        <td>${L('Document library','Pustaka dokumen','ドキュメント')}</td>
        <td>${L('What was agreed: requirements, catalog, business case.','Apa yang disepakati: requirement, katalog, business case.','合意事項：要件・カタログ・事業計画。')}</td>
        <td><code>/docs/doc/doc</code></td>
        <td><a href="#/dev/documents" data-nav>${L('Document library','Pustaka dokumen','ドキュメント一覧')} →</a></td>
      </tr>
      <tr>
        <td>${L('Design source','Sumber desain','デザイン原典')}</td>
        <td>${L('How every screen is supposed to look and flow. The only design source — every other design file is a copy.','Bagaimana tiap layar seharusnya tampil dan mengalir. Satu-satunya sumber desain — berkas desain lain semuanya salinan.','各画面の見た目と遷移。デザインの原典はこれ一つで、他のデザインファイルはすべて複製である。')}</td>
        <td>Figma · <span class="mono">full-emenda</span></td>
        <td><a href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?node-id=0-1" target="_blank" rel="noopener">Figma ↗</a></td>
      </tr>
      <tr>
        <td>${L('This portal','Portal ini','本ポータル')}</td>
        <td>${L('How the product is explained, to clients and to the team.','Bagaimana produk dijelaskan, ke client maupun ke tim.','製品の説明方法（顧客・社内向け）。')}</td>
        <td><code>/emenda deck</code></td>
        <td><a href="#/dev/portal" data-nav>${L('How it is built','Cara dibangunnya','構成を見る')} →</a></td>
      </tr>
      <tr>
        <td>${L('Earlier prototype','Prototipe awal','初期プロトタイプ')}</td>
        <td>${L('A separate three-product experiment: worker, employer, AI.','Eksperimen tiga produk terpisah: worker, employer, AI.','worker・employer・AIの3製品を試した別実装。')}</td>
        <td><code>/emenda front-end</code> <span class="tag warn">${L('own git repo','repo git sendiri','別リポジトリ')}</span></td>
        <td><code>cd app && npm run dev</code></td>
      </tr>
    </tbody>
  </table></div>
  ${derived('Locations are relative to the repository root. The earlier prototype carries its own .git directory and is not a submodule of this repository.','Lokasi relatif terhadap root repository. Prototipe awal punya direktori .git sendiri dan bukan submodule dari repository ini.','パスはリポジトリ直下からの相対。初期プロトタイプは独自の .git を持ち、サブモジュールではない。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Where to go next','Selanjutnya ke mana','次に見る')}</span>
  <h2>${L('Each question has its own page.','Setiap pertanyaan punya halamannya sendiri.','問いごとに専用ページがある。')}</h2>
  <div class="dev-grid">
    <a class="dev-card" href="#/dev/documents" data-nav>
      <div class="code">Documents</div>
      <h3>${L('Document library','Pustaka dokumen','ドキュメント一覧')}</h3>
      <p>${L('Every source document by category, version, language and audience — with what each one decides.','Setiap dokumen sumber menurut kategori, versi, bahasa, dan audiens — beserta apa yang diputuskan di dalamnya.','カテゴリ・版・言語・読者別の全ソース文書と、そこで決まった事項。')}</p>
      <span class="path">docs/doc/doc/**</span>
    </a>
    <a class="dev-card" href="#/dev/requirements" data-nav>
      <div class="code">Spec</div>
      <h3>${L('Requirements & spec','Requirement & spesifikasi','要件と仕様')}</h3>
      <p>${L('Stage 1 screen IDs, design principles, component contracts, and the open questions nobody has closed yet.','Screen ID Stage 1, prinsip desain, kontrak komponen, dan open question yang belum ditutup.','Stage 1の画面ID、設計原則、コンポーネント契約、未解決の論点。')}</p>
      <span class="path">Emenda_Stage1_DRD_v2.0.md</span>
    </a>
    <a class="dev-card" href="#/dev/frontend" data-nav>
      <div class="code">Build</div>
      <h3>${L('Frontend implementation','Implementasi frontend','フロントエンド実装')}</h3>
      <p>${L('Stack, route tree, folder conventions, i18n contract, and where the mock data lives.','Stack, pohon route, konvensi folder, kontrak i18n, dan letak mock data.','スタック、ルート構成、フォルダ規約、i18n契約、モックデータの所在。')}</p>
      <span class="path">src/app/router.tsx</span>
    </a>
    <a class="dev-card" href="#/dev/parity" data-nav>
      <div class="code">Design</div>
      <h3>${L('Design parity','Paritas desain','デザイン整合')}</h3>
      <p>${L('The canonical-source rule, how Figma nodes map to routes, and what the parity matrix records.','Aturan sumber kanonik, pemetaan node Figma ke route, dan apa yang dicatat parity matrix.','正典ルール、Figmaノードとルートの対応、パリティ表の記録内容。')}</p>
      <span class="path">docs/parity-matrix.md</span>
    </a>
    <a class="dev-card" href="#/dev/testing" data-nav>
      <div class="code">Verify</div>
      <h3>${L('Testing & checks','Testing & pemeriksaan','テストと検証')}</h3>
      <p>${L('Every command that proves something, what each one covers, and what none of them can prove.','Setiap perintah yang membuktikan sesuatu, cakupannya, dan apa yang tidak bisa dibuktikan.','各コマンドが何を保証し、何を保証しないか。')}</p>
      <span class="path">e2e/*.spec.ts</span>
    </a>
    <a class="dev-card" href="#/dev/portal" data-nav>
      <div class="code">Portal</div>
      <h3>${L('How this portal is built','Cara portal ini dibangun','本ポータルの構成')}</h3>
      <p>${L('Source layout, build step, the language rule, and how to add a page without breaking the rest.','Struktur source, langkah build, aturan bahasa, dan cara menambah halaman tanpa merusak yang lain.','ソース構成、ビルド手順、言語ルール、ページ追加の方法。')}</p>
      <span class="path">emenda deck/src</span>
    </a>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Read this before quoting scope','Baca ini sebelum mengutip scope','スコープを引用する前に')}</span>
  <h2>${L('The specification and the build describe different products.','Spesifikasi dan hasil build menggambarkan produk yang berbeda.','仕様書と実装は、別の製品を指している。')}</h2>
  <p class="lede">${L('This is the single most important thing to know before using any number from this portal. It is not a defect — but it means a figure is only meaningful next to the source it came from.','Ini hal terpenting yang harus diketahui sebelum memakai angka mana pun dari portal ini. Bukan cacat — tapi artinya sebuah angka hanya bermakna bersama sumbernya.','本ポータルの数値を使う前に、まずこれを理解する必要がある。欠陥ではないが、数値は出典と併記して初めて意味を持つ。')}</p>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">Stage 1 DRD v2.0</div>
      <h3>${L('A deliberately small MVP','MVP yang sengaja kecil','意図的に小さいMVP')}</h3>
      <p>${L('Nine worker and admin screens in total (W-01 to W-06, A-01 to A-04a), caregiving only, explicitly not a polished integrated platform. The screen set is described as a closed set: no other screens exist.','Total sembilan layar worker dan admin (W-01 sampai W-06, A-01 sampai A-04a), khusus caregiving, dan secara eksplisit bukan platform terintegrasi yang dipoles. Set layarnya disebut tertutup: tidak ada layar lain.','worker・admin合わせて9画面（W-01〜W-06、A-01〜A-04a）、介護のみ。「磨き込んだ統合プラットフォーム」は明確に対象外。画面集合は閉じている。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">Frontend</div>
      <h3>${L('A full multi-role platform','Platform multi-role penuh','多役割の本格プラットフォーム')}</h3>
      <p>${L('158 routes across worker, manager, admin, marketing, auth and onboarding — far beyond the Stage 1 screen set, and built from a later and much larger Figma file.','158 route mencakup worker, manager, admin, marketing, auth, dan onboarding — jauh melampaui set layar Stage 1, dan dibangun dari file Figma yang lebih baru dan jauh lebih besar.','worker・manager・admin・marketing・認証・オンボーディングで158ルート。Stage 1の画面集合をはるかに超え、より新しく大きいFigmaから構築されている。')}</p>
    </div>
  </div>
  ${derived('Neither source is wrong; they were written at different times for different purposes. When quoting scope, always name which one you are quoting.','Tidak ada sumber yang salah; keduanya ditulis pada waktu dan untuk tujuan berbeda. Saat mengutip scope, selalu sebutkan sumber mana yang dikutip.','どちらも誤りではなく、時期も目的も異なる。スコープを引用する際は、必ず出典を明示すること。')}
</div></section>`;
