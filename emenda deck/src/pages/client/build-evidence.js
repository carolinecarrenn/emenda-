/* build-evidence  —  PAGES.buildEvidence
   Merged from 1 original layer (line 3912). */
PAGES.buildEvidence=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Resources / Build evidence','Sumber Daya / Bukti implementasi','リソース / 実装の証跡')}</span>
  <h1>${L('Numbers counted from the repository, not written for a slide.','Angka yang dihitung dari repository, bukan ditulis untuk slide.','スライド用に書かれた数値ではなく、リポジトリから数えた数値。')}</h1>
  <p>${L('Every figure below was re-derived while this page was written: routes from src/app/router.tsx, screens and states from docs/parity-matrix.md, tests from e2e/. Where a documented figure had drifted from the code, the code won and the difference is named.','Setiap angka di bawah diturunkan ulang saat halaman ini ditulis: route dari src/app/router.tsx, screen dan state dari docs/parity-matrix.md, test dari e2e/. Di mana angka dokumentasi sudah menyimpang dari kode, kode yang menang dan selisihnya disebutkan.','以下の数値はこのページ作成時にすべて再導出した。ルートはsrc/app/router.tsx、画面・状態はdocs/parity-matrix.md、テストはe2e/から。文書の数値がコードと乖離していた場合はコードを採り、差分を明記する。')}</p>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="metric-band reveal">
    <div class="m"><b>802</b><span class="u">${L('Screens & states','Screen & state','画面・状態')}</span><span class="d">${L('Rows in the parity matrix across every role','Baris di parity matrix untuk seluruh role','全役割のパリティ表行数')}</span></div>
    <div class="m"><b>158</b><span class="u">${L('Application routes','Route aplikasi','アプリルート')}</span><span class="d">${L('Leaf routes registered in the router','Route leaf yang terdaftar di router','ルーターに登録されたリーフ')}</span></div>
    <div class="m"><b>235</b><span class="u">${L('Playwright checks','Check Playwright','Playwright検証')}</span><span class="d">${L('8 spec files, parameterised over routes','8 file spec, diparameterisasi atas route','8スペック、ルートで展開')}</span></div>
    <div class="m"><b>1,142</b><span class="u">${L('Source files','File sumber','ソースファイル')}</span><span class="d">${L('990 .tsx and 152 .ts under src/','990 .tsx dan 152 .ts di bawah src/','src/配下 .tsx 990・.ts 152')}</span></div>
    <div class="m"><b>03</b><span class="u">${L('Languages, enforced','Bahasa, dipaksakan','言語（強制）')}</span><span class="d">${L('A missing ID/EN/JA key fails tsc','Key ID/EN/JA yang hilang menggagalkan tsc','ID/EN/JA欠落はtscで失敗')}</span></div>
  </div>
  <div class="confid-band">
    <span class="cb-tag">${L('CORRECTION','KOREKSI','訂正')}</span>
    <p>${L('Earlier material on this site quoted 139 application routes and 188 Playwright checks. Recounting the router gives 158 leaf routes, and the testing guide records 235 tests. The higher figures are the current ones; the lower ones were a stale inventory and are no longer used.','Materi sebelumnya di situs ini menyebut 139 route aplikasi dan 188 check Playwright. Menghitung ulang router menghasilkan 158 route leaf, dan testing guide mencatat 235 test. Angka yang lebih tinggi adalah yang berlaku; yang lebih rendah adalah inventory usang dan tidak dipakai lagi.','本サイトの旧記述はルート139・Playwright 188としていた。ルーターを数え直すとリーフ158、テスト手順書は235件を記録する。高い方が現行値であり、低い方は古い棚卸しで、以後使用しない。')}</p>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Route inventory','Inventory route','ルート一覧')}</span>
  <h2>${L('Where the 158 routes actually are.','Di mana sebenarnya 158 route itu berada.','158ルートは実際にどこにあるか。')}</h2>
  <div class="evi-table">
    <div class="evi-row head"><span>${L('Area','Area','領域')}</span><span>${L('Routes','Route','ルート')}</span><span>${L('Screens','Screen','画面')}</span><span>${L('Share','Porsi','比率')}</span><span>${L('Note','Catatan','備考')}</span></div>
    ${[
      [L('Worker','Worker','労働者'),71,578,'45%',L('70 nested routes plus the index; 16 Figma sections.','70 route bersarang plus index; 16 section Figma.','ネスト70＋index。Figma16セクション。')],
      [L('Manager','Manager','管理者'),47,'—','30%',L('11 top-level plus 35 nested plus the dashboard index.','11 top-level plus 35 bersarang plus index dashboard.','トップ11＋ネスト35＋ダッシュボードindex。')],
      [L('Public & access','Publik & akses','公開・アクセス'),12,'—','8%',L('Marketing shell, unified sign-in, post-auth routing.','Marketing shell, unified sign-in, post-auth routing.','マーケティング、統合サインイン、認証後ルーティング。')],
      [L('Auth','Auth','認証'),11,44,'7%',L('Splash through logout, the canonical mobile funnel.','Splash sampai logout, funnel mobile kanonik.','Splashからlogoutまでの正典モバイル導線。')],
      [L('Company admin','Company admin','企業管理'),11,77,'7%',L('Eleven sections from access to empty states.','Sebelas section dari access sampai empty state.','アクセスから空状態まで11セクション。')],
      [L('Onboarding / EMENDA ID','Onboarding / EMENDA ID','オンボーディング / EMENDA ID'),6,26,'4%',L('Ready, details, reference, review, verification, my ID.','Ready, details, reference, review, verification, my ID.','準備・詳細・照会・確認・検証・マイID。')]
    ].map(([a,r,s,p,n2])=>`<div class="evi-row"><b>${a}</b><span class="num">${r}</span><span class="num">${s}</span><span class="num">${p}</span><span class="note">${n2}</span></div>`).join('')}
    <div class="evi-row total"><b>${L('Total','Total','合計')}</b><span class="num">158</span><span class="num">802</span><span class="num">100%</span><span class="note">${L('Two shell routes excluded; two index routes counted.','Dua route shell dikecualikan; dua route index dihitung.','シェル2件を除外、index 2件を計上。')}</span></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Worker coverage','Cakupan worker','労働者側の網羅')}</span>
  <h2>${L('Sixteen sections, screen by screen.','Enam belas section, layar demi layar.','16セクションを画面単位で。')}</h2>
  <p class="lede">${L('A row counts as COMPLETE only when the capability exists on both viewports, is reachable by clicking rather than by typing a URL, carries ID/EN/JA copy, and both visual columns have been signed off by a screenshot audit.','Sebuah baris dihitung COMPLETE hanya jika kapabilitasnya ada di kedua viewport, dapat dijangkau dengan klik dan bukan dengan mengetik URL, membawa copy ID/EN/JA, dan kedua kolom visual sudah signed off lewat audit screenshot.','行がCOMPLETEとなるのは、両ビューポートに機能が存在し、URL入力ではなくクリックで到達でき、ID/EN/JAのコピーを備え、視覚2列がスクリーンショット監査で承認された場合のみ。')}</p>
  <div class="evi-table">
    <div class="evi-row head"><span>${L('Figma section','Section Figma','Figmaセクション')}</span><span>${L('Complete','Complete','完了')}</span><span>${L('Total','Total','合計')}</span><span>${L('Rate','Rasio','達成率')}</span><span>${L('Status','Status','状態')}</span></div>
    ${WORKER_SECTIONS.map(([n2,c,t])=>{
      const pct=Math.round(c/t*100);
      const st=pct===100?L('Signed off','Signed off','検証済み'):(pct>=80?L('Visual audit pending','Menunggu visual audit','視覚監査待ち'):L('Audit wave not landed','Gelombang audit belum turun','監査未実施'));
      return `<div class="evi-row"><b>${n2}</b><span class="num">${c}</span><span class="num">${t}</span><span class="num">${pct}%</span><span class="note">${st}</span></div>`;
    }).join('')}
    <div class="evi-row total"><b>${L('Worker total','Total worker','労働者合計')}</b><span class="num">526</span><span class="num">578</span><span class="num">91%</span><span class="note">${L('43 ACCEPTED · 9 PARTIAL','43 ACCEPTED · 9 PARTIAL','ACCEPTED 43・PARTIAL 9')}</span></div>
  </div>
  ${derived('Manager, Landing and Admin add 224 further rows: 105 COMPLETE and 119 still marked needs-audit on the desktop visual column.','Manager, Landing, dan Admin menambah 224 baris lagi: 105 COMPLETE dan 119 masih needs-audit pada kolom visual desktop.','管理者・ランディング・管理は追加224行：105がCOMPLETE、119はデスクトップ視覚列がneeds-audit。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Deviation register','Register deviasi','逸脱レジスタ')}</span>
  <h2>${L('Where the implementation departs from Figma — and why it was allowed to.','Di mana implementasi menyimpang dari Figma — dan mengapa itu diizinkan.','実装がFigmaから逸脱した箇所と、それが許された理由。')}</h2>
  <p class="lede">${L('Each audit that could not reproduce a frame literally recorded the reason under a named rule. Reproducing an overlap literally would ship a defect; where a desktop frame contradicts itself and the mobile twin is coherent, mobile decides.','Setiap audit yang tidak bisa mereproduksi frame secara harfiah mencatat alasannya di bawah aturan bernama. Mereproduksi overlap secara harfiah berarti mengirim defect; ketika frame desktop bertentangan dengan dirinya sendiri dan kembaran mobile-nya koheren, mobile yang memutuskan.','フレームを字義どおり再現できなかった監査は、いずれも名前付きの規則の下に理由を記録した。重なりを字義どおり再現すれば欠陥を出荷することになる。デスクトップフレームが自己矛盾し、モバイル対応物が整合している場合はモバイルが決める。')}</p>
  <div class="reg-grid">
    ${[
      ['46',L('Environment state kept as a review URL','State environment disimpan sebagai URL review','環境状態をレビューURLとして保持'),L('Server outcomes, OS permissions and loading states with no honest client trigger.','Server outcome, OS permission, dan loading state tanpa trigger client yang jujur.','正直なクライアント側トリガーが存在しないサーバー結果・OS権限・読込状態。'),'acc'],
      ['20',L('Deliberate app-wide data unification','Unifikasi data app-wide yang disengaja','意図的な全体データ統一'),L('Shared mock identities used instead of names baked into individual frames.','Identitas mock bersama dipakai alih-alih nama yang di-hardcode di frame.','個別フレームに焼き込まれた名前ではなく共有モックIDを使用。'),'acc'],
      ['16',L('Figma has no frame for it','Figma tidak punya frame untuk itu','Figmaに該当フレームなし'),L('The capability exists on the canonical mobile flow but no desktop frame was drawn.','Kapabilitasnya ada di flow mobile kanonik tapi tidak ada frame desktop yang digambar.','正典モバイルには機能があるがデスクトップフレームが描かれていない。'),'acc'],
      ['4',L('Authoring slip reproduced honestly','Slip authoring direproduksi secara jujur','作図ミスを誠実に再現'),L('Labels that overlap their own content were rendered as they were plainly meant to read.','Label yang menimpa kontennya sendiri dirender sebagaimana jelas dimaksudkan.','自らの内容に重なるラベルは、明らかに意図された読み方で描画。'),'acc'],
      ['3',L('Figma contradicts itself between surfaces','Figma bertentangan antar surface','面ごとにFigmaが矛盾'),L('Mobile decides, under the canonical-source rule.','Mobile yang memutuskan, di bawah aturan canonical-source.','正典ソース規則によりモバイルが決定。'),'acc'],
      ['243',L('Reported and fixed','Dilaporkan dan diperbaiki','報告され修正済み'),L('14 shared-shell defects fixed centrally, 9 escalated out of a section’s reach, 220 implementation notes with no visual divergence.','14 defect shared-shell diperbaiki terpusat, 9 dieskalasi keluar jangkauan section, 220 catatan implementasi tanpa divergensi visual.','共有シェル欠陥14件を集中修正、9件をセクション外へエスカレーション、視覚差のない実装注記220件。'),'fix']
    ].map(([n2,t,d,k])=>`<div class="reg-card reveal"><div class="rn">${n2}</div><b>${t}</b><p>${d}</p><span class="tag ${k}">${k==='acc'?'ACCEPTED':'FIXED'}</span></div>`).join('')}
  </div>
  <p class="source-note">${L('BLOCKED: none. No deviation prevented implementation — every Figma-side absence was resolved from the canonical mobile flow or the section’s own pattern language.','BLOCKED: tidak ada. Tidak ada deviasi yang menghalangi implementasi — setiap ketiadaan di sisi Figma diselesaikan dari flow mobile kanonik atau bahasa pola section itu sendiri.','BLOCKEDはゼロ。実装を妨げた逸脱はなく、Figma側の欠落はすべて正典モバイルまたは当該セクションのパターン言語から解決した。')}</p>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Escalated decisions','Keputusan yang dieskalasi','エスカレーションされた判断')}</span>
  <h2>${L('Four calls an audit could not make from inside its own scope.','Empat keputusan yang tidak bisa diambil audit dari dalam scope-nya sendiri.','監査が自らのスコープ内では下せなかった4つの判断。')}</h2>
  ${[
    ['resolved',L('A flaky route was contention, not a defect','Route flaky adalah contention, bukan defect','不安定なルートは競合であって欠陥ではなかった'),
      L('One route per run failed to render an h1 within 5s, and the failing route moved between runs. 38 node processes were live at the time — 16 audit agents each running their own dev server.','Satu route per run gagal merender h1 dalam 5 detik, dan route yang gagal berpindah antar run. Ada 38 proses node saat itu — 16 audit agent, masing-masing menjalankan dev server sendiri.','実行ごとに1ルートが5秒以内にh1を描画できず、失敗するルートは実行ごとに移動した。当時38のnodeプロセスが稼働——16の監査エージェントがそれぞれ自前のdevサーバーを起動していた。'),
      L('Re-run on an idle machine: 235/235 passed. No timeout was raised, no retry was added, playwright.config.ts was never touched.','Dijalankan ulang di mesin idle: 235/235 lulus. Tidak ada timeout dinaikkan, tidak ada retry ditambahkan, playwright.config.ts tidak pernah disentuh.','アイドル環境で再実行し235/235が成功。タイムアウトは上げず、リトライも追加せず、playwright.config.tsは一切変更しなかった。'),
      L('Raising a timeout to turn a red test green hides exactly the class of defect the suite exists to catch.','Menaikkan timeout agar test merah jadi hijau justru menyembunyikan kelas defect yang jadi alasan suite itu ada.','赤いテストを緑にするためにタイムアウトを上げることは、まさにそのスイートが捕えるべき欠陥を隠す行為である。')],
    ['',L('WD-41 Knowledge hub — which desktop frame is canonical','WD-41 Knowledge hub — frame desktop mana yang kanonik','WD-41ナレッジハブ——どのデスクトップフレームが正典か'),
      L('The assigned node was deleted from Figma; a new frame with the same name took the identical canvas slot with a different layout. The running app matches the deleted node to the pixel.','Node yang ditugaskan dihapus dari Figma; frame baru dengan nama sama menempati slot kanvas identik dengan layout berbeda. Aplikasi yang berjalan cocok dengan node yang dihapus itu sampai ke pixel.','割り当てノードがFigmaから削除され、同名の新フレームが同一のキャンバス位置を異なるレイアウトで占めた。稼働中のアプリは削除済みノードとピクセル単位で一致する。'),
      L('Keep the current implementation; treat the new frame as a file-side contradiction, not as the new source of truth.','Pertahankan implementasi saat ini; perlakukan frame baru sebagai kontradiksi di sisi file, bukan sebagai sumber kebenaran baru.','現行実装を維持し、新フレームは新たな正典ではなくファイル側の矛盾として扱う。'),
      L('It contradicts the canonical mobile frame, it breaks the section’s own desktop shell baseline, and the same page carried automated repair artifacts. File damage is more likely than a deliberate redesign.','Ia bertentangan dengan frame mobile kanonik, merusak baseline shell desktop section itu sendiri, dan halaman yang sama membawa artefak perbaikan otomatis. Kerusakan file lebih mungkin daripada redesign yang disengaja.','正典モバイルフレームと矛盾し、当該セクション自身のデスクトップシェル基準を壊し、同じページに自動修復の痕跡があった。意図的な再設計よりファイル破損の可能性が高い。')],
    ['',L('WD-53 Notifications — an 8px column offset','WD-53 Notifications — offset kolom 8px','WD-53通知——8pxの列オフセット'),
      L('Figma places this one content column at x=272 while every other audited desktop frame, and the documented shell baseline, use x=280.','Figma menempatkan satu kolom konten ini di x=272 sementara semua frame desktop lain yang diaudit, dan baseline shell terdokumentasi, memakai x=280.','Figmaはこの1列のみx=272に置くが、監査済みの他のデスクトップフレームと文書化されたシェル基準はすべてx=280である。'),
      L('Keep x=280. Record the 8px difference rather than compensate for it.','Pertahankan x=280. Catat selisih 8px itu alih-alih mengompensasinya.','x=280を維持し、8pxの差は補正せず記録する。'),
      L('Moving one section to match a single outlying frame would make the app inconsistent with itself in order to match a file that is inconsistent with itself.','Memindahkan satu section agar cocok dengan satu frame menyimpang akan membuat aplikasi tidak konsisten dengan dirinya sendiri demi mencocokkan file yang tidak konsisten dengan dirinya sendiri.','単一の外れフレームに合わせて1セクションを動かすことは、自己矛盾したファイルに合わせるためにアプリを自己矛盾させることになる。')],
    ['',L('WD-53 variants — frames that overlap their own content','Varian WD-53 — frame yang menimpa kontennya sendiri','WD-53の各版——自らの内容に重なるフレーム'),
      L('A group label sits inside a notification row; empty-state guidance overlaps the centred title; one variant draws hollow status circles while its own pill reads two unread.','Sebuah label grup berada di dalam baris notifikasi; panduan empty-state menimpa judul yang di-center; satu varian menggambar lingkaran status kosong sementara pill-nya sendiri menyebut dua unread.','グループラベルが通知行の内側に入り、空状態の案内が中央寄せのタイトルに重なり、ある版はピルが未読2件と表示しながら中空の状態円を描いている。'),
      L('Render the frames as they were plainly meant to read — labels above their groups, unread dots on unread rows — following the coherent canonical mobile twin.','Render frame sebagaimana jelas dimaksudkan untuk dibaca — label di atas grup-nya, dot unread di baris unread — mengikuti kembaran mobile kanonik yang koheren.','明らかに意図された読み方で描画する——ラベルはグループの上、未読ドットは未読行に——整合した正典モバイル版に従う。'),
      L('Reproducing an overlap literally would ship a defect.','Mereproduksi overlap secara harfiah berarti mengirim defect.','重なりを字義どおり再現すれば、欠陥を出荷することになる。')]
  ].map(([k,t,found,dec,why])=>`<div class="dec ${k} reveal">
    <h3>${t}</h3>
    <div class="dl">
      <div><b>${L('Found','Ditemukan','所見')}</b><p>${found}</p></div>
      <div><b>${L('Decision','Keputusan','判断')}</b><p>${dec}</p></div>
      <div><b>${L('Why','Alasan','理由')}</b><p>${why}</p></div>
    </div></div>`).join('')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('What this evidence does not cover','Yang tidak dicakup bukti ini','この証跡が示さないこと')}</span>
  <h2>${L('The honest limit of every number on this page.','Batas jujur dari setiap angka di halaman ini.','本ページの全数値に共通する率直な限界。')}</h2>
  <ul class="plist">
    <li><span class="pi">01</span><span><b>${L('There is no backend.','Belum ada backend.','バックエンドは存在しない。')}</b> ${L('Every screen renders from mock data in src/data and each section’s own mock file. Nothing is persisted anywhere.','Setiap layar dirender dari mock data di src/data dan file mock milik tiap section. Tidak ada yang dipersistensikan di mana pun.','各画面はsrc/dataと各セクションのモックから描画される。どこにも永続化されない。')}</span></li>
    <li><span class="pi">02</span><span><b>${L('There is no authentication.','Belum ada authentication.','認証は存在しない。')}</b> ${L('/worker, /manager and /admin open in a clean browser with no session and no stored login. The login screens exist because Figma specifies them.','/worker, /manager, dan /admin terbuka di browser bersih tanpa session dan tanpa login tersimpan. Layar login ada karena Figma menetapkannya.','/worker・/manager・/adminはセッションも保存済みログインもない状態で開く。ログイン画面はFigmaが規定するために存在する。')}</span></li>
    <li><span class="pi">03</span><span><b>${L('Coverage is not correctness.','Cakupan bukan kebenaran.','網羅は正しさではない。')}</b> ${L('A COMPLETE row means the screen matches its Figma frame and is reachable by clicking. It does not mean the underlying capability is production-ready.','Baris COMPLETE berarti layarnya cocok dengan frame Figma-nya dan bisa dijangkau dengan klik. Itu tidak berarti kapabilitas di baliknya siap produksi.','COMPLETEはその画面がFigmaフレームと一致しクリックで到達できることを意味する。背後の機能が本番対応であることは意味しない。')}</span></li>
    <li><span class="pi">04</span><span><b>${L('119 desktop audits are still open.','119 audit desktop masih terbuka.','デスクトップ監査119件が未了。')}</b> ${L('The manager, landing and admin areas are reachable and translated, but their desktop visual column has not been signed off.','Area manager, landing, dan admin sudah bisa dijangkau dan diterjemahkan, tapi kolom visual desktop-nya belum signed off.','管理者・ランディング・管理の各領域は到達可能で翻訳済みだが、デスクトップ視覚列は未承認。')}</span></li>
  </ul>
</div></section>
${detailedCTA()}`;
