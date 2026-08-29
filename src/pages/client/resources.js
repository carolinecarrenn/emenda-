/* resources  —  PAGES.resources
   Merged from 2 original layers (lines 1907, 2407). */
PAGES.resources=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Resources</span>
  <h1>Where we are, and where we're going.</h1>
  <p>Progress, roadmap, implementation approach, and answers to common questions.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Progress</span>
  <h2>Real progress, honestly labelled.</h2>
  <div class="grid g3" style="margin-top:30px">
    <div class="card reveal"><h3 style="color:var(--emerald)">Done ✓</h3><ul class="rlist" style="margin-top:12px">${['UX / Figma','Worker app (core flows)','Daily report loop'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul><span class="st-tag a" style="display:inline-block;margin-top:12px">Current product evidence</span></div>
    <div class="card reveal" style="background:var(--amber-tint);border-color:#ecd9b3"><h3 style="color:var(--amber)">In progress ◐</h3><ul class="rlist" style="margin-top:12px">${['Manager app','AI Assistant','Knowledge / RAG'].map(x=>`<li><span class="ck" style="background:var(--amber-tint);color:var(--amber)">◐</span>${x}</li>`).join('')}</ul><span class="st-tag m" style="display:inline-block;margin-top:12px">Sync with latest release notes</span></div>
    <div class="card reveal"><h3 style="color:var(--ink-faint)">Next ○</h3><ul class="rlist" style="margin-top:12px">${['Admin console','Backend / API hardening','QA · Integration · Pilot'].map(x=>`<li><span class="ck" style="background:var(--paper2);color:var(--ink-faint)">○</span>${x}</li>`).join('')}</ul><span class="st-tag m" style="display:inline-block;margin-top:12px">Sync with latest release notes</span></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Roadmap</span>
  <h2>From MVP to a connected ecosystem.</h2>
  <div class="timeline">
    ${[['1','MVP','Core worker & report flows','fill'],['2','Pilot','With early organizations',''],['3','Integration','Connect existing systems',''],['4','AI Actions','Consent-based actions',''],['5','Ecosystem','Partner & platform expansion','']]
    .map(([n,t,s,f])=>`<div class="tstage ${f}"><div class="dot">${n}</div><b>${t}</b><span>${s}</span></div>`).join('')}
  </div>
  <p class="source-note">Roadmap sequencing is directional. Dates should be inserted from the approved delivery plan before external use.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Implementation</span>
  <h2>A guided path from discovery to rollout.</h2>
  <div class="grid g4" style="margin-top:30px">
    ${[['01','Discovery'],['02','Fit-gap'],['03','Configuration'],['04','Integration'],['05','Pilot'],['06','Evaluation'],['07','Rollout']].map(([n,t])=>`<div class="card reveal"><span class="cn">${n}</span><h3 style="font-size:16px">${t}</h3></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">FAQ</span>
  <h2 style="text-align:center;margin:0 auto">Common questions.</h2>
  <div class="faq">
    ${[['Is Emenda just an HR app or a chatbot?','No. Emenda is a connected ecosystem linking workers, managers, employers, and organizations across communication, reports, follow-up, and AI assistance — one operating layer, not a single-purpose tool.'],
       ['What languages are supported?','Bahasa Indonesia, English, and Japanese, with cross-language communication and AI assistance in each.'],
       ['Does the AI take actions on its own?','No. Sensitive actions (location, call, email, SMS, calendar, contacts) always ask for explicit user permission first.'],
       ['Is it production-ready today?','Parts are further along than others. We label capabilities honestly as Available, MVP/In development, or Planned — nothing is overstated.'],
       ['How does pricing work?','A B2B / B2B2C subscription, scaling with active workers and modules. Pricing is subject to validation.']]
    .map(([q,a])=>`<div class="faq-item"><button class="faq-q">${q}<span class="pm">+</span></button><div class="faq-a">${a}</div></div>`).join('')}
  </div>
</div></section>
<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Implementation snapshot','Snapshot implementasi','実装スナップショット')}</span>
  <h2>${L('A clearer engineering status view for internal and technical audiences.','Status engineering yang lebih jelas untuk audience internal dan teknis.','社内・技術向けに実装状況を明確化。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Area','Area','領域')}</th><th>${L('Documented snapshot','Snapshot terdokumentasi','記録済みスナップショット')}</th><th>${L('What it means','Artinya','意味')}</th></tr></thead><tbody>
    <tr><td>${L('Application routes','Route aplikasi','アプリルート')}</td><td>158</td><td>${L('Recounted from the router: worker 71 · manager 47 · public/access 12 · auth 11 · admin 11 · onboarding 6.','Dihitung ulang dari router: worker 71 · manager 47 · public/access 12 · auth 11 · admin 11 · onboarding 6.','ルーターから再集計：労働者71・管理者47・公開/アクセス12・認証11・管理11・オンボーディング6。')}</td></tr>
    <tr><td>${L('Figma state coverage','Coverage state Figma','Figma状態')}</td><td>~630</td><td>${L('Design states mapped across implementation waves; use the fixed mobile Figma as visual source of truth.','Design state dipetakan lintas implementation wave; gunakan mobile Figma fixed sebagai visual source of truth.','実装waveでマッピング。確定モバイルFigmaをUI正本とします。')}</td></tr>
    <tr><td>${L('Playwright checks','Check Playwright','Playwright')}</td><td>235</td><td>${L('8 spec files including routes, i18n, landing, auth, canonical mobile, and cross-role flows.','8 file spec termasuk route, i18n, landing, auth, canonical mobile, dan cross-role flow.','8スペックファイル。ルート、i18n、ランディング、認証、正典モバイル、役割横断フローを含む。')}</td></tr>
    <tr><td>${L('Build quality','Build quality','ビルド品質')}</td><td>tsc · oxlint · Vite build</td><td>${L('Documented as clean/successful in the implementation snapshot; resync before external release.','Terdokumentasi clean/success pada snapshot implementasi; sync ulang sebelum external release.','スナップショットでは成功。外部公開前に再確認。')}</td></tr>
  </tbody></table></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Strategic roadmap','Roadmap strategis','戦略ロードマップ')}</span>
  <h2>${L('Stage 1 is the entry point, not the final destination.','Stage 1 adalah entry point, bukan tujuan akhir.','Stage 1は入口であり最終地点ではありません。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">STAGE 1</div><h3>${L('Communication + operational records','Komunikasi + operational record','コミュニケーション＋業務記録')}</h3><p>${L('Digitize daily work and create the first structured, multilingual operating layer.','Digitalisasi daily work dan membangun operating layer multilingual terstruktur pertama.','日々の業務をデジタル化し、多言語の構造化運用基盤を作ります。')}</p></div>
    <div class="deep-card"><div class="num">STAGE 2</div><h3>${L('Context translation','Context translation','文脈翻訳')}</h3><p>${L('Use accumulated operational context to support meaning, norms, and communication beyond literal translation.','Memakai context operasional yang terkumpul untuk mendukung meaning, norm, dan komunikasi di luar literal translation.','蓄積業務文脈で直訳を超えた意味・規範・コミュニケーションを支援。')}</p></div>
    <div class="deep-card"><div class="num">STAGE 3</div><h3>${L('Data enrichment','Pengayaan data','データ拡張')}</h3><p>${L('Potentially connect physical/condition data after privacy, legal, and product validation.','Berpotensi menghubungkan physical/condition data setelah validasi privacy, legal, dan product.','プライバシー・法務・製品検証後に身体・コンディションデータを統合。')}</p></div>
    <div class="deep-card"><div class="num">STAGE 4</div><h3>${L('Automation & behavior change','Automation & perubahan perilaku','自動化・行動変容')}</h3><p>${L('Use accumulated data and context to automate repeatable processes and change how work is carried out.','Memakai data dan context yang terkumpul untuk mengotomasi proses berulang dan mengubah cara kerja.','蓄積データで反復業務を自動化し、現場行動を変えます。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Design & product resources','Resource desain & produk','デザイン・製品リソース')}</span>
  <h2>${L('Use the right source depending on what you want to inspect.','Gunakan source yang tepat sesuai hal yang ingin dicek.','確認したい内容に応じて正しいソースへ。')}</h2>
  <div class="page-links">
    <a class="page-link-card" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">${ic('eye')}<b>Figma · Full Emenda</b><span>${L('Fixed Worker mobile screens, states, flows, and visual decisions.','Screen mobile Worker yang fixed, state, flow, dan keputusan visual.','確定Workerモバイル画面、状態、フロー、UI判断。')}</span></a>
    <a class="page-link-card" href="https://emenda.tech" target="_blank" rel="noopener">${ic('bolt')}<b>emenda.tech</b><span>${L('Running product destination. No form required.','Tujuan produk yang berjalan. Tanpa formulir tambahan.','稼働中の製品。フォームは不要。')}</span></a>
    <a class="page-link-card" href="#/architecture" data-nav>${ic('layers')}<b>${L('Architecture page','Halaman arsitektur','アーキテクチャページ')}</b><span>${L('Technology stack, application layers, backend/database/hosting, quality, and boundaries.','Technology stack, application layer, backend/database/hosting, quality, dan boundary.','技術スタック、アプリ層、BE/DB/hosting、品質、境界。')}</span></a>
  </div>
</div></section>`;
