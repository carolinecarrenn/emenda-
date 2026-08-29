/* integration-data  —  PAGES.integrationData
   Merged from 1 original layer (line 2551). */
PAGES.integrationData=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Platform / Integration & Data','Platform / Integrasi & Data','プラットフォーム / 連携・データ')}</span>
  <h1>${L('Connect systems without giving away the source of truth.','Hubungkan sistem tanpa melepaskan source of truth.','ソース・オブ・トゥルースを手放さずに外部と接続。')}</h1>
  <p>${L('Emenda’s strategic direction is connection, not uncontrolled data transfer. Worker-originated operational data remains governed inside the platform while selected external services can connect through explicit scopes and permissions.','Arah strategis Emenda adalah connection, bukan transfer data tanpa kontrol. Data operasional yang berasal dari worker tetap governed di dalam platform sementara service eksternal terpilih dapat terhubung melalui scope dan permission eksplisit.','Emendaの方針は無制限なデータ移転ではなく接続です。労働者起点の業務データを基盤内で管理し、外部serviceは明示scope・permissionで接続します。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Connection model','Model koneksi','接続モデル')}</span>
  <h2>${L('Emenda remains the data-generation and context layer.','Emenda tetap menjadi layer pembentukan data dan context.','Emendaはデータ発生点と文脈レイヤーを維持します。')}</h2>
  <div class="integration-map">
    <div class="integration-node"><h3>${L('Field & worker inputs','Input lapangan & worker','現場・労働者入力')}</h3><p>${L('Identity, communication, daily reports, professional history, consent events, and outcome history.','Identity, communication, daily report, professional history, consent event, dan outcome history.','ID、communication、日報、professional history、consent、outcome history。')}</p></div>
    <div class="integration-arrow">→</div>
    <div class="integration-node core"><h3>EMENDA</h3><p>${L('Primary operating data, role/purpose controls, original-language integrity, lifecycle state, and evidence.','Primary operating data, kontrol role/purpose, original-language integrity, lifecycle state, dan evidence.','一次業務データ、role/purpose制御、原文保持、lifecycle state、evidence。')}</p></div>
    <div class="integration-arrow">↔</div>
    <div class="integration-node"><h3>${L('External / adjacent services','Service eksternal / adjacent','外部・隣接service')}</h3><p>${L('Existing enterprise systems today; future credit, housing, communications, residency, and other adjacent connections only where product/legal scope is validated.','Existing enterprise system saat ini; future credit, housing, communication, residency, dan adjacent connection lain hanya bila product/legal scope tervalidasi.','既存enterprise system、将来のcredit、housing、communication、residency等はproduct/legal scope検証後に接続。')}</p></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Integration principles','Prinsip integrasi','連携原則')}</span>
  <h2>${L('What must remain true as connectivity grows.','Hal yang harus tetap benar ketika connectivity berkembang.','接続が増えても維持する原則。')}</h2>
  <div class="deep-grid">
    ${[
      ['01',L('Connection, not uncontrolled transfer','Connection, bukan uncontrolled transfer','接続であり無制限移転ではない'),L('External services should receive only the minimum approved scope required for the user’s purpose.','Service eksternal menerima minimum approved scope yang diperlukan untuk purpose user.','外部serviceには目的に必要な最小approved scopeのみ。')],
      ['02',L('Consent is a durable record','Consent menjadi record durable','同意を記録資産に'),L('Permission decisions must be recordable and later reviewable, not a one-time modal with no history.','Keputusan permission harus tercatat dan bisa direview kemudian, bukan modal sekali lewat tanpa history.','permission判断を履歴として保持し、後から確認可能に。')],
      ['03',L('Original source remains intact','Original source tetap utuh','原文保持'),L('Translation, enrichment, and AI layers do not silently rewrite the worker’s original record.','Translation, enrichment, dan AI layer tidak mengganti original record worker secara diam-diam.','翻訳・enrichment・AIは原文を上書きしません。')],
      ['04',L('Integrations do not become product core','Integrasi tidak menjadi core logic','個別連携をcore化しない'),L('External adapters remain behind a clear API/integration boundary so the product model stays stable.','Adapter eksternal tetap di balik API/integration boundary agar product model stabil.','外部adapterを明確なAPI boundaryに置き、product modelを安定させます。')]
    ].map(([n,t,p])=>`<div class="deep-card wide"><div class="num">${n}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Current vs future connections','Koneksi saat ini vs masa depan','現在・将来の接続')}</span>
  <h2>${L('Do not confuse strategic adjacency with a shipped integration.','Jangan samakan strategic adjacency dengan integrasi yang sudah shipped.','戦略的隣接領域と実装済みintegrationを混同しません。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Connection area','Area koneksi','接続領域')}</th><th>${L('Why it matters','Mengapa penting','意義')}</th><th>${L('Current statement','Pernyataan saat ini','現状')}</th></tr></thead><tbody>
    <tr><td>${L('Existing organization systems','Existing system organisasi','既存組織system')}</td><td>${L('Reduce duplicate entry and keep Emenda inside the existing operating environment.','Mengurangi duplicate entry dan menempatkan Emenda di existing operating environment.','重複入力を減らし既存運用環境に接続。')}</td><td>${statusBadge('mvp')}</td></tr>
    <tr><td>${L('Credit / financial inclusion','Credit / financial inclusion','信用・金融包摂')}</td><td>${L('Worker-originated primary work records may reduce the information gap in adjacent services.','Primary work record yang berasal dari worker berpotensi mengurangi information gap di adjacent service.','労働者起点の就労一次データが隣接serviceの情報空白を補完する可能性。')}</td><td>${statusBadge('planned')}</td></tr>
    <tr><td>${L('Housing / communications / residency','Housing / communication / residency','住居・通信・在留')}</td><td>${L('Potential future service connections around the worker journey.','Potential future service connection di sekitar worker journey.','worker journey周辺の将来service接続。')}</td><td>${statusBadge('planned')}</td></tr>
    <tr><td>${L('Wearable / physical data','Wearable / physical data','wearable・身体data')}</td><td>${L('Stage 3 enrichment only after privacy, legal, and product validation.','Stage 3 enrichment hanya setelah validasi privacy, legal, dan product.','privacy・legal・product検証後のStage 3。')}</td><td>${statusBadge('planned')}</td></tr>
  </tbody></table></div>
</div></section>`;
