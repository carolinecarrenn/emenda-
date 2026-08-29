/* ============================================================ V8 · DEEP CONTENT EXTENSIONS ============================================================ */
const L=(en,id,ja)=>{
  const lang=(typeof CURRENT_LANG!=='undefined'?CURRENT_LANG:'en');
  return lang==='id'?id:(lang==='ja'?ja:en);
};
const statusBadge=(s)=>{
  const map={available:['badge-ok',L('Available','Tersedia','利用可能')],mvp:['badge-mvp',L('MVP / In progress','MVP / Dikerjakan','MVP / 開発中')],planned:['badge-plan',L('Planned','Direncanakan','計画中')],core:['badge-core',L('Core model','Model inti','コアモデル')]};
  const x=map[s]||map.core; return `<span class="${x[0]}">${x[1]}</span>`;
};
const detailedCTA=()=>`<section class="sec tight"><div class="wrap"><div class="cta-band">
  <h2 style="font-size:clamp(24px,3vw,34px)">${L('Continue with the real product assets.','Lanjut ke aset produk yang sebenarnya.','実際の製品アセットへ。')}</h2>
  <p>${L('Use emenda.tech for the running demo and Figma for the fixed product design.','Gunakan emenda.tech untuk demo yang berjalan dan Figma untuk desain produk yang sudah fixed.','動作デモはemenda.tech、確定UIはFigmaで確認できます。')}</p>
  <div class="hero-cta"><a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">${L('Open Live Demo ↗','Buka Live Demo ↗','ライブデモ ↗')}</a><a class="btn btn-s btn-lg" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">${L('View Product Design ↗','Lihat Product Design ↗','製品デザイン ↗')}</a></div>
</div></div></section>`;

/* ============================================================ V15 · EXHAUSTIVE PAGE DEPTH · CORE ============================================================ */
const sourcePanel=(en,id,ja)=>`<div class="source-panel"><b>${L('Internal source basis','Basis sumber internal','内部ソース')}</b><p>${L(en,id,ja)}</p></div>`;
