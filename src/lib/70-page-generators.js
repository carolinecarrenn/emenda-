/* ---------- pillar detail ---------- */
const pillarPage=(p)=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Pillar','Pilar','柱')} ${p.n} · ${p.rel}</span>
  <h1>${p.name}</h1>
  <p>${p.lede}</p>
  ${anchorBar([['#/pillars',L('All nine pillars','Semua sembilan pilar','9つの柱すべて')],['#/feature-catalog',L('Feature Catalog','Katalog Fitur','機能カタログ')],['#/build-evidence',L('Build evidence','Bukti implementasi','実装の証跡')]])}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('What this pillar is','Apa pilar ini','この柱とは')}</span>
  <h2>${L('The product decision behind it.','Keputusan produk di baliknya.','その背後にある製品判断。')}</h2>
  <p class="lede">${p.body}</p>
  <div class="metric-band reveal" style="grid-template-columns:repeat(3,1fr)">
    ${p.built.map(([v,u,d])=>`<div class="m"><b>${v}</b><span class="u">${u}</span><span class="d">${d}</span></div>`).join('')}
  </div>
  ${derived('Route counts re-derived from src/app/router.tsx; screen and state counts from docs/parity-matrix.md.','Jumlah route diturunkan ulang dari src/app/router.tsx; jumlah screen dan state dari docs/parity-matrix.md.','ルート数はsrc/app/router.tsx、画面・状態数はdocs/parity-matrix.mdから再導出。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Module groups','Kelompok modul','モジュール群')}</span>
  <h2>${L('Which catalog modules sit inside this pillar.','Modul katalog mana yang ada di dalam pilar ini.','この柱に含まれるカタログモジュール。')}</h2>
  <div class="mod-table">
    <div class="mod-head"><span>${L('Code','Kode','コード')}</span><span>${L('Module','Modul','モジュール')}</span><span>${L('What it covers','Cakupan','内容')}</span><span>${L('Features','Fitur','機能')}</span><span>${L('Release','Release','リリース')}</span></div>
    ${p.modules.map(([c,n2,cnt,d,r])=>`<div class="mod-line"><span class="mc">${c}</span><span class="mname">${n2}</span><span class="mdesc">${d}</span><span class="mcount">${cnt}</span>${relTag(r)}</div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="ba">
    <div class="col after"><h4>${L('The boundary this pillar holds','Batas yang dijaga pilar ini','この柱が守る境界')}</h4>
      <p style="font-size:15px;line-height:1.65;color:var(--ink)">${p.boundary}</p></div>
    <div class="col before"><h4>${L('What is not built','Yang belum dibangun','未実装のもの')}</h4>
      <p style="font-size:15px;line-height:1.65;color:var(--ink)">${p.gap}</p></div>
  </div>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="pillar-grid">
    ${PILLARS.filter(x=>x.slug!==p.slug).slice(0,3).map(x=>`<a class="pillar-card" href="#/pillar/${x.slug}" data-nav>
      <div class="pc-top"><span class="pn">${x.n}</span><span class="pcount">${x.features} ${L('features','fitur','機能')}</span></div>
      <h3>${x.name}</h3><p>${x.lede}</p><span class="pc-go">${L('Open pillar','Buka pilar','柱を開く')} →</span></a>`).join('')}
  </div>
  ${backTo('#/pillars',L('Back to all pillars','Kembali ke semua pilar','柱の一覧へ戻る'))}
</div></section>`;

/* look the pillar up by slug at render time, never close over the object */
PILLARS.forEach(({slug})=>{
  PAGES['pillar_'+slug]=()=>pillarPage(PILLARS.find(x=>x.slug===slug));
});

const industryPage=(x)=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Industries','Industri','業種')} · ${x.n}</span>
  <h1>${x.name}</h1>
  <p>${x.lede}</p>
  ${anchorBar([['#/industries',L('All industries','Semua industri','全業種')],['#/pillars',L('Product pillars','Pilar produk','製品の柱')]])}
</div></section>

<section class="sec"><div class="wrap">
  <div class="ind-split">
    <div>
      <span class="eyebrow">${L('Why this vertical','Mengapa vertikal ini','この業種を選ぶ理由')}</span>
      <h2 style="margin-top:16px">${L('What the work actually looks like.','Seperti apa sebenarnya pekerjaannya.','その仕事の実態。')}</h2>
      <p class="lede">${x.body}</p>
      <ul class="plist">
        ${x.breaks.map((b,i)=>`<li><span class="pi">${String(i+1).padStart(2,'0')}</span><span>${b}</span></li>`).join('')}
      </ul>
    </div>
    <div class="ind-facts reveal">
      ${x.facts.map(([k,v])=>`<div class="f"><b>${k}</b><span>${v}</span></div>`).join('')}
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('What stays the same','Yang tetap sama','変わらないもの')}</span>
  <h2>${L('Industry context changes. The connected lifecycle does not.','Konteks industri berubah. Siklus terhubungnya tidak.','業種の文脈は変わる。接続されたライフサイクルは変わらない。')}</h2>
  <p class="lede">${L('Identity, communication, follow-up, consent and evidence are shared across every vertical. What changes per industry is the report template, the operational vocabulary and the support knowledge — not the model underneath.','Identity, komunikasi, follow-up, consent, dan evidence dipakai bersama lintas vertikal. Yang berubah per industri adalah template laporan, kosakata operasional, dan knowledge dukungan — bukan model di bawahnya.','ID、通信、フォローアップ、同意、証跡はすべての業種で共通する。業種ごとに変わるのは日報テンプレート、業務語彙、支援ナレッジであり、その下のモデルではない。')}</p>
  ${spine(false)}
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="pillar-grid">
    ${INDUSTRIES.filter(y=>y.slug!==x.slug).map(y=>`<a class="pillar-card" href="#/industry/${y.slug}" data-nav>
      <div class="pc-top"><span class="pn">${y.n}</span></div><h3>${y.name}</h3><p>${y.lede}</p>
      <span class="pc-go">${L('Open industry','Buka industri','業種を開く')} →</span></a>`).join('')}
  </div>
  ${backTo('#/industries',L('Back to industries','Kembali ke industri','業種一覧へ戻る'))}
</div></section>`;

INDUSTRIES.forEach(({slug})=>{
  PAGES['industry_'+slug]=()=>industryPage(INDUSTRIES.find(x=>x.slug===slug));
});

/* One rebuild before each render keeps the language-dependent tables in step
   with CURRENT_LANG. The arrays are small; this costs nothing per navigation. */
function rebuildV16Data(){
  PILLARS = buildPillars();
  INDUSTRIES = buildIndustries();
  SHOWCASE = buildShowcase();
}
const _renderV16Base = render;
render = function(){ rebuildV16Data(); return _renderV16Base.apply(this, arguments); };
