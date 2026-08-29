/* dev/testing  —  PAGES.devTesting
   Every command that proves something, what it covers, and what none of them cover. */
PAGES.devTesting=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · verification','Internal · verifikasi','社内 · 検証')}</span>
  <h1>${L('What is actually checked, and what is not.','Apa yang benar-benar diperiksa, dan apa yang tidak.','何が実際に検証され、何が検証されていないか。')}</h1>
  <p>${L('235 browser tests run against the production build, plus a separate set of checks for this portal. Together they cover reachability, chrome rules and language integrity — they do not cover business correctness, because there is no backend to be correct about.','235 test browser dijalankan terhadap build produksi, ditambah rangkaian pemeriksaan terpisah untuk portal ini. Bersama-sama mereka mencakup keterjangkauan, aturan chrome, dan integritas bahasa — tidak mencakup kebenaran bisnis, karena tidak ada backend yang bisa benar atau salah.','本番ビルドに対して235のブラウザテストを実行し、本ポータル用の検証も別途ある。到達性、クローム規則、言語の整合は網羅するが、業務ロジックの正しさは対象外である。検証対象となるバックエンドが存在しないため。')}</p>
  <div class="dev-meta">
    <span>235 ${L('tests','test','テスト')}</span>
    <span>8 ${L('spec files','file spec','スペックファイル')}</span>
    <span>1 ${L('browser','browser','ブラウザ')} · chromium</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Application','Aplikasi','アプリ')}</span>
  <h2>${L('Where the 235 tests go.','Ke mana 235 test itu tertuju.','235テストの内訳。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Spec file','File spec','スペック')}</th><th>${L('Tests','Test','件数')}</th><th>${L('What it proves','Yang dibuktikan','保証する内容')}</th>
    </tr></thead>
    <tbody>
      <tr><td><code>routes.spec.ts</code></td><td>183</td><td>${L('Every route renders, Figma state variants resolve, and the mobile chrome rules hold: hubs keep the bottom nav, sub-pages drop it, auth screens render single-column.','Setiap route ter-render, varian state Figma terselesaikan, dan aturan chrome mobile berlaku: hub mempertahankan bottom nav, sub-halaman melepasnya, layar auth satu kolom.','全ルートが描画され、Figmaの状態バリアントが解決し、モバイルのクローム規則が守られること。ハブは下部ナビを保持、下層は外し、認証画面は単一カラム。')}</td></tr>
      <tr><td><code>landing-departure.spec.ts</code></td><td>11</td><td>${L('The documented departures from the audited landing implementation stay deliberate rather than drifting back.','Penyimpangan terdokumentasi dari implementasi landing yang diaudit tetap disengaja, bukan bergeser kembali.','監査済みランディング実装からの意図的な逸脱が、そのまま維持されていること。')}</td></tr>
      <tr><td><code>marketing-site.spec.ts</code></td><td>10</td><td>${L('The nine public marketing routes and their shared chrome.','Sembilan route marketing publik dan chrome bersamanya.','9つの公開マーケティングルートと共通クローム。')}</td></tr>
      <tr><td><code>i18n.spec.ts</code></td><td>7</td><td>${L('Language switches without reload, persists across refresh, and leaves route and state where they were.','Ganti bahasa tanpa reload, bertahan setelah refresh, dan tidak memindahkan route maupun state.','リロードなしで言語が切り替わり、再読み込み後も保持され、ルートと状態が維持されること。')}</td></tr>
      <tr><td><code>landing.spec.ts</code></td><td>7</td><td>${L('The landing page itself: sections, entry points and calls to action.','Halaman landing itu sendiri: section, entry point, dan call to action.','ランディング本体：セクション、入口、CTA。')}</td></tr>
      <tr><td><code>caregiver-loop.spec.ts</code></td><td>6</td><td>${L('The cross-role caregiving loop, from a worker report through to the manager view of it.','Loop caregiving lintas role, dari laporan pekerja sampai tampilannya di sisi manajer.','介護の役割横断ループ。労働者の日報から管理者側の表示まで。')}</td></tr>
      <tr><td><code>auth-flow.spec.ts</code></td><td>6</td><td>${L('Splash through language, login, register, OTP and PIN, including the session states.','Splash sampai bahasa, login, register, OTP, dan PIN, termasuk state sesi.','スプラッシュから言語・ログイン・登録・OTP・PIN、セッション状態まで。')}</td></tr>
      <tr><td><code>canonical-mobile.spec.ts</code></td><td>5</td><td>${L('That mobile follows the canonical mobile mocks rather than a shrunken desktop layout.','Bahwa mobile mengikuti mock mobile kanonik, bukan layout desktop yang dikecilkan.','モバイルがデスクトップの縮小版ではなく、正典モバイルのモックに従っていること。')}</td></tr>
    </tbody>
  </table></div>
  <div class="cmd">
npx playwright test                       <span class="c"># ${L('all 235','semua 235','全235件')}</span>
npx playwright test e2e/i18n.spec.ts      <span class="c"># ${L('one file','satu file','1ファイル')}</span>
npx playwright test --list                <span class="c"># ${L('enumerate without running','daftar tanpa menjalankan','実行せず一覧表示')}</span>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('This portal','Portal ini','本ポータル')}</span>
  <h2>${L('Two checks guard the deck itself.','Dua pemeriksaan menjaga deck ini sendiri.','本ポータルは2つの検証で守られている。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">check.mjs</div>
      <h3>${L('Does every page still render?','Apakah setiap halaman masih ter-render?','全ページが描画されるか')}</h3>
      <p>${L('Walks every route, reports render failures, JS errors, the tab and accordion behaviours, the language switch, and any page that no navigation links to.','Menelusuri setiap route, melaporkan kegagalan render, error JS, perilaku tab dan akordeon, pergantian bahasa, dan halaman yang tidak ditautkan navigasi mana pun.','全ルートを巡回し、描画失敗、JSエラー、タブ・アコーディオンの動作、言語切替、どこからもリンクされていないページを報告する。')}</p>
      <span class="path">node _build/check.mjs</span>
    </div>
    <div class="dev-card">
      <div class="code">verify.mjs</div>
      <h3>${L('Did a refactor change the output?','Apakah refactor mengubah keluaran?','リファクタで出力が変わっていないか')}</h3>
      <p>${L('Renders every route in all three languages on two builds and compares the markup character by character. It is how the split into source files was proven to change structure only.','Merender setiap route dalam tiga bahasa pada dua build lalu membandingkan markup-nya karakter per karakter. Dengan inilah pemecahan ke file source dibuktikan hanya mengubah struktur.','2つのビルドで全ルートを3言語描画し、マークアップを文字単位で比較する。ソース分割が構造のみの変更であることは、これで証明した。')}</p>
      <span class="path">node _build/verify.mjs</span>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Limits','Batasan','限界')}</span>
  <h2>${L('What a green test run does not mean.','Apa yang tidak berarti dari test yang semuanya hijau.','テストが全て通っても、意味しないこと。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">${L('Not covered','Tidak tercakup','対象外')}</div>
      <h3>${L('Business correctness','Kebenaran bisnis','業務ロジックの正しさ')}</h3>
      <p>${L('Nothing is computed against real records. Screens render mock data, so a passing suite says the interface holds together — not that any rule, permission or calculation is right.','Tidak ada yang dihitung terhadap data nyata. Layar merender mock data, jadi suite yang lulus berarti antarmukanya utuh — bukan bahwa aturan, permission, atau perhitungannya benar.','実データに対する計算は一切ない。画面はモックを描画するため、テスト通過はUIが破綻していないことのみを示す。ルール・権限・計算の正しさは示さない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Not covered','Tidak tercakup','対象外')}</div>
      <h3>${L('Authentication and access control','Autentikasi dan kontrol akses','認証とアクセス制御')}</h3>
      <p>${L('The login forms navigate without verifying anyone, so role separation is a rendering convention here, not an enforced boundary.','Form login berpindah halaman tanpa memverifikasi siapa pun, jadi pemisahan role di sini adalah konvensi rendering, bukan batas yang ditegakkan.','ログインフォームは検証せず遷移するだけであり、役割分離は描画上の約束であって、強制された境界ではない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Not covered','Tidak tercakup','対象外')}</div>
      <h3>${L('Visual fidelity to Figma','Kesetiaan visual ke Figma','Figmaとの視覚的一致')}</h3>
      <p>${L('No screenshot comparison runs. Visual parity is asserted by review and recorded in the parity matrix, not proven by a test.','Tidak ada perbandingan screenshot. Paritas visual dinyatakan lewat review dan dicatat di parity matrix, bukan dibuktikan oleh test.','スクリーンショット比較は行っていない。視覚的整合はレビューで判断しパリティ表に記録するもので、テストによる証明ではない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Not covered','Tidak tercakup','対象外')}</div>
      <h3>${L('Browsers other than Chromium','Browser selain Chromium','Chromium以外のブラウザ')}</h3>
      <p>${L('The suite runs a single project. Safari and Firefox behaviour is untested, which matters most for the mobile worker surface.','Suite ini menjalankan satu project. Perilaku Safari dan Firefox belum diuji, dan itu paling berpengaruh pada permukaan worker mobile.','単一プロジェクトのみ実行。SafariとFirefoxの挙動は未検証であり、これはworkerモバイル面で最も影響が大きい。')}</p>
    </div>
  </div>
  ${backTo('#/dev', L('Back to internal overview','Kembali ke ikhtisar internal','内部概要へ戻る'))}
</div></section>`;
