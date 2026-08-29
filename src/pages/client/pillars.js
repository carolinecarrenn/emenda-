/* pillars  —  PAGES.pillars
   Merged from 1 original layer (line 3815). */
PAGES.pillars=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Product / Pillars','Produk / Pilar','製品 / 柱')}</span>
  <h1>${L('Nine pillars, fifteen module groups, fifty-nine approved features.','Sembilan pilar, lima belas kelompok modul, lima puluh sembilan fitur approved.','9つの柱、15のモジュール群、59のApproved機能。')}</h1>
  <p>${L('The nine pillars are how the frozen Product Feature Catalog v1.0 r10 is read in practice. Each pillar carries its own module groups, its own release position, its own privacy boundary — and its own honest account of what is not built yet.','Sembilan pilar adalah cara membaca Product Feature Catalog v1.0 r10 yang sudah dibekukan dalam praktik. Tiap pilar membawa kelompok modulnya sendiri, posisi release-nya, batas privasinya — dan catatan jujurnya tentang apa yang belum dibangun.','9つの柱は、凍結済みProduct Feature Catalog v1.0 r10を実務でどう読むかを示す。各柱は固有のモジュール群、リリース位置、プライバシー境界、そして未実装事項の率直な記述を持つ。')}</p>
  ${anchorBar([['#/feature-catalog',L('Feature Catalog','Katalog Fitur','機能カタログ')],['#/build-evidence',L('Build evidence','Bukti implementasi','実装の証跡')],['#/modules',L('Module & role map','Peta modul & role','モジュール・役割図')]])}
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="metric-band reveal">
    <div class="m"><b>09</b><span class="u">${L('Pillars','Pilar','柱')}</span><span class="d">${L('Grouping used across this site','Pengelompokan yang dipakai di situs ini','本サイト共通の分類')}</span></div>
    <div class="m"><b>15</b><span class="u">${L('Module groups','Kelompok modul','モジュール群')}</span><span class="d">${L('Official catalog inventory','Inventory katalog resmi','公式カタログ一覧')}</span></div>
    <div class="m"><b>59</b><span class="u">${L('Approved features','Fitur approved','Approved機能')}</span><span class="d">${L('Catalog v1.0 r10 baseline','Baseline katalog v1.0 r10','カタログv1.0 r10基準')}</span></div>
    <div class="m"><b>27</b><span class="u">${L('Candidates','Kandidat','候補')}</span><span class="d">${L('Not approved scope until ruled','Bukan scope sampai diputuskan','判断まではスコープ外')}</span></div>
    <div class="m"><b>34</b><span class="u">${L('Allocated to R1','Dialokasikan ke R1','R1割当')}</span><span class="d">${L('The operational entry layer','Entry layer operasional','運用入口の層')}</span></div>
  </div>
  ${derived('Feature counts across the nine pillars below sum to exactly 59 — the catalog baseline, not a rounded marketing figure.','Jumlah fitur di sembilan pilar berikut berjumlah persis 59 — baseline katalog, bukan angka marketing yang dibulatkan.','以下9柱の機能数の合計は正確に59——丸めた広告数値ではなくカタログ基準値。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Drill down','Telusuri','詳細')}</span>
  <h2>${L('Every pillar has its own page, its own numbers, and its own stated gap.','Setiap pilar punya halaman, angka, dan gap yang dinyatakan sendiri.','各柱は固有のページ、固有の数値、そして明示された未実装事項を持つ。')}</h2>
  <div class="pillar-grid">
    ${PILLARS.map(p=>`<a class="pillar-card reveal" href="#/pillar/${p.slug}" data-nav>
      <div class="pc-top"><span class="pn">${p.n}</span><span class="pcount">${p.features} ${L('features','fitur','機能')}</span></div>
      <h3>${p.name}</h3>
      <p>${p.lede}</p>
      <div class="pc-mods">${p.modules.map(m=>`<span>${m[0]}</span>`).join('')}<span>${p.rel}</span></div>
      <span class="pc-go">${L('Open pillar','Buka pilar','柱を開く')} →</span>
    </a>`).join('')}
  </div>
</div></section>
${detailedCTA()}`;
