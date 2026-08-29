/* dev/frontend  —  PAGES.devFrontend
   The React application: stack, route tree, folder conventions, i18n, mock data. */
PAGES.devFrontend=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · build','Internal · build','社内 · 実装')}</span>
  <h1>${L('The frontend, as it actually stands.','Frontend, apa adanya.','フロントエンドの現状。')}</h1>
  <p>${L('A single-page React application with no backend. Every screen renders from mock data, and every figure below is counted from the repository rather than carried over from a document.','Aplikasi React satu halaman tanpa backend. Setiap layar dirender dari mock data, dan setiap angka di bawah dihitung dari repository, bukan disalin dari dokumen.','バックエンドを持たない単一ページのReactアプリ。全画面がモックデータから描画され、以下の数値は文書からの転記ではなくリポジトリから計数している。')}</p>
  <div class="dev-meta">
    <span>158 ${L('leaf routes','route leaf','リーフルート')}</span>
    <span>990 <span class="mono">.tsx</span></span>
    <span>3 ${L('languages','bahasa','言語')}</span>
    <span>0 ${L('network calls','panggilan jaringan','ネットワーク通信')}</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Running it','Menjalankan','起動')}</span>
  <h2>${L('Four commands cover the whole loop.','Empat perintah mencakup seluruh siklus.','4つのコマンドで一巡する。')}</h2>
  <div class="cmd">
<span class="c"># ${L('development server','server pengembangan','開発サーバー')}</span>
npm install
npm run dev            <span class="c">→ http://localhost:5173</span>

<span class="c"># ${L('production build, which is what the tests run against','build produksi, yang diuji oleh test','テスト対象となる本番ビルド')}</span>
npm run build          <span class="c">→ tsc -b, ${L('then','lalu','その後')} vite build</span>
npm run preview        <span class="c">→ http://localhost:4173</span>

<span class="c"># ${L('checks','pemeriksaan','検証')}</span>
npx tsc -b             <span class="c">→ ${L('types','tipe','型')}</span>
npx oxlint src e2e     <span class="c">→ lint</span>
npx playwright test    <span class="c">→ <b>235</b> ${L('tests in 8 files','test di 8 file','テスト（8ファイル）')}</span>
  </div>
  ${derived('Playwright starts its own preview server, so npm run preview does not need to be running first.','Playwright menjalankan preview server sendiri, jadi npm run preview tidak perlu berjalan lebih dulu.','Playwrightは自前でpreviewサーバーを起動するため、事前に npm run preview を実行する必要はない。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Stack','Stack','技術スタック')}</span>
  <h2>${L('Current versions, straight from package.json.','Versi terkini, langsung dari package.json.','package.json のままの現行バージョン。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Concern','Kebutuhan','用途')}</th><th>${L('Package','Paket','パッケージ')}</th><th>${L('Version','Versi','バージョン')}</th>
    </tr></thead>
    <tbody>
      <tr><td>${L('Build tool','Build tool','ビルド')}</td><td><code>vite</code></td><td>8.2</td></tr>
      <tr><td>${L('Framework','Framework','フレームワーク')}</td><td><code>react</code> · <code>react-dom</code></td><td>19.2</td></tr>
      <tr><td>${L('Language','Bahasa','言語')}</td><td><code>typescript</code></td><td>6.0</td></tr>
      <tr><td>${L('Styling','Styling','スタイル')}</td><td><code>tailwindcss</code></td><td>4.3</td></tr>
      <tr><td>${L('Routing','Routing','ルーティング')}</td><td><code>react-router-dom</code></td><td>7.18</td></tr>
      <tr><td>${L('Icons','Ikon','アイコン')}</td><td><code>lucide-react</code></td><td>1.34</td></tr>
      <tr><td>${L('Charts','Grafik','グラフ')}</td><td><code>recharts</code></td><td>3.10</td></tr>
      <tr><td>${L('Toasts','Notifikasi','通知')}</td><td><code>sonner</code></td><td>2.0</td></tr>
      <tr><td>${L('Lint','Lint','Lint')}</td><td><code>oxlint</code></td><td>1.80</td></tr>
      <tr><td>${L('End-to-end tests','Test end-to-end','E2Eテスト')}</td><td><code>@playwright/test</code></td><td>1.62</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Route tree','Pohon route','ルート構成')}</span>
  <h2>${L('158 leaf routes across six areas.','158 route leaf di enam area.','6領域に158のリーフルート。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr>
      <th>${L('Area','Area','領域')}</th><th>${L('Route base','Basis route','ルート')}</th>
      <th>${L('Routes','Route','ルート数')}</th><th><span class="mono">.tsx</span></th>
      <th>${L('What it covers','Cakupan','内容')}</th>
    </tr></thead>
    <tbody>
      <tr><td>Worker</td><td><code>/worker/*</code></td><td>71</td><td>350</td><td>${L('Profile, career, Japan readiness, reports, assistant, notifications.','Profil, karier, kesiapan Jepang, laporan, assistant, notifikasi.','プロフィール、キャリア、来日準備、日報、アシスタント、通知。')}</td></tr>
      <tr><td>Manager</td><td><code>/manager/*</code></td><td>47</td><td>331</td><td>${L('Dashboard, reports, follow-up, OJT, analytics, audit, communication.','Dashboard, laporan, follow-up, OJT, analitik, audit, komunikasi.','ダッシュボード、日報、フォローアップ、OJT、分析、監査、連絡。')}</td></tr>
      <tr><td>${L('Public & access','Publik & akses','公開・アクセス')}</td><td><code>/</code> · <code>/signin</code></td><td>12</td><td>70</td><td>${L('Marketing site and unified sign-in with post-auth routing.','Situs marketing dan sign in terpadu dengan routing pasca-auth.','マーケティングサイトと認証後ルーティング付きサインイン。')}</td></tr>
      <tr><td>Auth</td><td><code>/auth/*</code></td><td>11</td><td>18</td><td>${L('Splash, language, login, register, OTP, PIN, session states.','Splash, bahasa, login, register, OTP, PIN, state sesi.','スプラッシュ、言語、ログイン、登録、OTP、PIN、セッション状態。')}</td></tr>
      <tr><td>Admin</td><td><code>/admin/*</code></td><td>11</td><td>163</td><td>${L('Employees, teams, reports, rewards, activity log, settings.','Karyawan, tim, laporan, reward, activity log, pengaturan.','従業員、チーム、レポート、報酬、操作ログ、設定。')}</td></tr>
      <tr><td>Onboarding</td><td><code>/onboarding/id/*</code></td><td>6</td><td>10</td><td>${L('EMENDA ID issue, identity details, reference, review, verification.','Penerbitan EMENDA ID, detail identitas, referensi, review, verifikasi.','EMENDA ID発行、本人情報、照会、確認、検証。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('Route counts come from src/app/router.tsx; file counts from the .tsx files under each src/pages area. Public & access combines the marketing pages with the sign-in and post-auth routing screens.','Jumlah route dari src/app/router.tsx; jumlah file dari berkas .tsx di tiap area src/pages. Publik & akses menggabungkan halaman marketing dengan layar sign in dan routing pasca-auth.','ルート数は src/app/router.tsx、ファイル数は src/pages 配下の .tsx から算出。「公開・アクセス」はマーケティングとサインイン・認証後ルーティングを合算。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Conventions','Konvensi','規約')}</span>
  <h2>${L('Four rules explain the folder layout.','Empat aturan menjelaskan struktur foldernya.','4つの規約がフォルダ構成を決めている。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">01 · ${L('Split','Pecah','分割')}</div>
      <h3>${L('One file per section, never one file per page','Satu file per section, bukan satu file per halaman','1画面1ファイルではなく、セクション単位で分割')}</h3>
      <p>${L('Every page is a thin composition file next to a sections/ folder holding its parts. This is why there are 990 components behind 158 routes.','Setiap halaman adalah file komposisi tipis di sebelah folder sections/ yang memuat bagian-bagiannya. Karena itu ada 990 komponen di balik 158 route.','各ページは薄い合成ファイルで、隣の sections/ に構成要素を置く。158ルートに対し990コンポーネントあるのはこのため。')}</p>
      <span class="path">src/pages/&lt;area&gt;/&lt;page&gt;/sections/*.tsx</span>
    </div>
    <div class="dev-card">
      <div class="code">02 · ${L('Mock data','Mock data','モックデータ')}</div>
      <h3>${L('Held beside the section it feeds','Diletakkan di sebelah section yang memakainya','使用するセクションの隣に置く')}</h3>
      <p>${L('Section-local data sits in <section>Mock.ts; data shared across roles sits in src/data. Keeping it out of the components is what makes a later API swap mechanical.','Data khusus section ada di <section>Mock.ts; data lintas role ada di src/data. Memisahkannya dari komponen membuat penggantian ke API nanti jadi mekanis.','セクション固有は <section>Mock.ts、役割横断は src/data。UIから分離しておくことで、後のAPI差し替えが機械的になる。')}</p>
      <span class="path">src/data/reportsStore.tsx · caregiverReport.ts</span>
    </div>
    <div class="dev-card">
      <div class="code">03 · ${L('Language','Bahasa','言語')}</div>
      <h3>${L('Missing translations fail the type check','Translasi yang kurang menggagalkan type check','翻訳漏れは型チェックで失敗する')}</h3>
      <p>${L('Copy flows through defineSectionCopy / useSectionCopy, which requires all three languages per key. A missing translation is a compile error, not a runtime surprise. Runtime fallback is English.','Teks mengalir lewat defineSectionCopy / useSectionCopy, yang mewajibkan tiga bahasa per key. Translasi yang kurang jadi compile error, bukan kejutan saat runtime. Fallback runtime adalah English.','コピーは defineSectionCopy / useSectionCopy を通し、キーごとに3言語を必須とする。翻訳漏れは実行時ではなくコンパイル時に落ちる。実行時フォールバックは英語。')}</p>
      <span class="path">src/i18n/copy.ts · common.ts · terms.ts · format.ts</span>
    </div>
    <div class="dev-card">
      <div class="code">04 · ${L('Viewport','Viewport','ビューポート')}</div>
      <h3>${L('One route, two layouts — never a shrunken desktop','Satu route, dua layout — bukan desktop yang dikecilkan','1ルート2レイアウト。デスクトップの縮小版にはしない')}</h3>
      <p>${L('Desktop and mobile share a route, a store and a session, but each follows its own mocks: hubs keep the bottom nav, sub-pages drop the chrome, mobile uses bottom sheets.','Desktop dan mobile berbagi route, store, dan session, tapi masing-masing mengikuti mock-nya sendiri: hub mempertahankan bottom nav, sub-halaman melepas chrome, mobile memakai bottom sheet.','デスクトップとモバイルはルート・ストア・セッションを共有しつつ、それぞれのモックに従う。ハブは下部ナビを保持し、下層ページはクロームを外し、モバイルはボトムシートを使う。')}</p>
      <span class="path">e2e/canonical-mobile.spec.ts</span>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Boundary','Batasan','境界')}</span>
  <h2>${L('There is no backend and no authentication.','Tidak ada backend dan tidak ada autentikasi.','バックエンドも認証も存在しない。')}</h2>
  <p class="lede">${L('The login forms accept a prefilled value and navigate; they verify nobody. Every credential visible in the app is display data and grants access to nothing. All state is in memory and resets on reload.','Form login menerima nilai yang sudah terisi lalu berpindah halaman; tidak memverifikasi siapa pun. Setiap kredensial yang terlihat di aplikasi adalah data tampilan dan tidak memberi akses ke apa pun. Seluruh state ada di memori dan reset saat halaman dimuat ulang.','ログインフォームは初期値を受け取って遷移するだけで、誰も検証しない。アプリ内に見えるあらゆる認証情報は表示用データであり、何のアクセス権も与えない。状態はすべてメモリ上にあり、再読み込みで初期化される。')}</p>
  <div class="dev-meta">
    <span class="tag stop">${L('No API','Tanpa API','APIなし')}</span>
    <span class="tag stop">${L('No database','Tanpa database','DBなし')}</span>
    <span class="tag stop">${L('No real auth','Tanpa auth nyata','実認証なし')}</span>
    <span class="tag info">${L('In-memory state','State in-memory','メモリ上の状態')}</span>
  </div>
  ${backTo('#/dev', L('Back to internal overview','Kembali ke ikhtisar internal','内部概要へ戻る'))}
</div></section>`;
