/* architecture  —  PAGES.platformArchitecture
   Merged from 2 original layers (lines 1780, 2354). */
PAGES.platformArchitecture=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Platform / Architecture</span>
  <h1>Application, API, data, and infrastructure — connected as one delivery stack.</h1>
  <p>Emenda separates the client experience, backend application logic, data services, AI/knowledge capabilities, and hosting layer so each part can evolve without breaking the worker-centered operating model.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">System architecture</span>
  <h2>How the current product stack fits together.</h2>
  <p class="lede">The exact integration contracts can evolve, but the current implementation direction can be explained through five technical zones: client, application/API, data, AI/knowledge, and infrastructure.</p>
  <div class="arch-flow reveal">
    <div class="arch-box"><b>Users & Roles</b><span>Worker mobile · Manager · Company Admin · Super Admin<br><br>Bahasa Indonesia · English · 日本語</span></div>
    <div class="arch-arrow">→</div>
    <div class="arch-box"><b>Frontend Client</b><span>React 19.2 · TypeScript 6.0 · Vite 8.2 · Tailwind CSS 4.3<br><br>Responsive web / PWA-first experience</span></div>
    <div class="arch-arrow">→</div>
    <div class="arch-box"><b>Backend / API</b><span>Node.js<br><br>Application logic · role-aware workflows · validation · service orchestration</span></div>
    <div class="arch-arrow">→</div>
    <div class="arch-box"><b>Data & Infrastructure</b><span>Supabase database<br>VPS Hostinger<br><br>Operational records · deployment runtime</span></div>
  </div>
  <div class="external-note"><div>${ic('bolt')}</div><div><b>AI & knowledge are application capabilities, not a separate user-facing product.</b><span>Emenda Assistant sits across the workflow. Retrieval/knowledge, contextual reasoning, permission-aware actions, and follow-up logic connect back into the same application and data boundaries.</span></div></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Frontend stack</span>
  <h2>Current FE technology stack.</h2>
  <p class="lede">This is the stack currently used for the Emenda frontend implementation.</p>
  <div class="stack-wrap reveal"><table class="stack-table">
    <thead><tr><th>Category</th><th>Technology</th><th>Version / Purpose</th></tr></thead>
    <tbody>
      <tr><td>Build tool</td><td>Vite</td><td>8.2 · development server and production bundling</td></tr>
      <tr><td>Framework</td><td>React</td><td>19.2 · component-based application UI</td></tr>
      <tr><td>Language</td><td>TypeScript</td><td>6.0 · typed application code and safer contracts</td></tr>
      <tr><td>Styling</td><td>Tailwind CSS <code>@theme</code></td><td>4.3 · design tokens, utility styling, responsive UI</td></tr>
      <tr><td>Routing</td><td>react-router-dom</td><td>7.18 · application navigation and route structure</td></tr>
      <tr><td>Icons</td><td>lucide-react</td><td>1.31 · semantic interface iconography</td></tr>
      <tr><td>Charts</td><td>recharts</td><td>3.10 · dashboard and data visualization</td></tr>
      <tr><td>Notifications</td><td>sonner</td><td>2.0 · toast and feedback messages</td></tr>
      <tr><td>Linter</td><td>oxlint</td><td>1.75 · static code quality checks</td></tr>
      <tr><td>E2E testing</td><td>Playwright</td><td>1.62 · end-to-end browser test coverage</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Backend, database & hosting</span>
  <h2>The supporting application infrastructure.</h2>
  <div class="grid g3" style="margin-top:30px">
    <div class="card reveal">${ic('layers')}<span class="cn">BACKEND</span><h3>Node.js</h3><p>Runs backend application logic and API/service orchestration behind the client applications. The backend owns server-side workflow rules rather than trusting the frontend alone.</p><div style="margin-top:12px"><span class="tech-badge">API</span><span class="tech-badge">Business logic</span><span class="tech-badge">Validation</span></div></div>
    <div class="card reveal">${ic('database')}<span class="cn">DATABASE</span><h3>Supabase</h3><p>Used as the current database platform for persisted Emenda application data. Access from each role must follow the product's permission and organizational-boundary rules.</p><div style="margin-top:12px"><span class="tech-badge">Application data</span><span class="tech-badge">Persistent records</span></div></div>
    <div class="card reveal">${ic('building')}<span class="cn">INFRASTRUCTURE</span><h3>Hostinger VPS</h3><p>Provides the VPS hosting environment for deployed Emenda services. Deployment, runtime process management, networking, backups, and monitoring belong to this infrastructure layer.</p><div style="margin-top:12px"><span class="tech-badge">VPS</span><span class="tech-badge">Deployment</span><span class="tech-badge">Runtime</span></div></div>
  </div>
  <p class="source-note">Backend, Supabase, and Hostinger are shown at the level currently confirmed for this microsite. Exact Node.js version, server topology, backup policy, CI/CD vendor, and production SLA should only be added when formally confirmed.</p>
</div></section>

<section class="sec dark"><div class="wrap">
  <span class="eyebrow">Application layers</span>
  <h2>Four product layers sit on top of the delivery stack.</h2>
  <div class="layers">
    ${[['l1','Experience Layer','Role-specific surfaces',['Worker Mobile','Manager Web','Company Admin Console','Super Admin Console']],['l2','AI & Knowledge Layer','Contextual assistance',['Emenda Assistant','Knowledge retrieval','Source-aware answer','Permission-aware action','Outcome follow-up']],['l3','Application Layer','Core business capabilities',['Identity','Career / readiness','Daily reports','Communication','Follow-up','Notifications','Evidence / history']],['l4','Platform Foundation','Shared rules and services',['Authentication','Roles & permissions','Localization','Audit trail','Data boundaries','API / integration']]].map(([c,n,s,items])=>`<div class="layer ${c} reveal"><div class="ln">${n}<span>${s}</span></div><div class="items">${items.map(x=>`<span class="p">${x}</span>`).join('')}</div></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Data & access model</span>
  <h2>The person is durable; employment access is contextual.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><h3>Worker-owned identity</h3><p>The worker identity is designed as a durable record. An employer relationship is a separate, time-bound connection, so changing employers does not require recreating the person from zero.</p></div>
    <div class="card reveal"><h3>Organization-aware access</h3><p>Manager and Company Admin access should follow role and organization context. Private worker information must not become visible simply because the UI has a route to it.</p></div>
    <div class="card reveal"><h3>Original content integrity</h3><p>Translation, transcription, summarization, and AI assistance are additive layers. Original messages and reports remain the source record rather than being silently overwritten.</p></div>
    <div class="card reveal"><h3>Audit-friendly transitions</h3><p>Verification, follow-up, decisions, actions, and resolution states should leave timestamps and history so the operational lifecycle is explainable later.</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">AI / knowledge request path</span>
  <h2>How Emenda Assistant connects to the same architecture.</h2>
  <div class="spine" style="margin-top:16px">${[['01','User interaction','A question, voice input, attachment, or contextual request enters from the active product surface.'],['02','Role & context','The application identifies language, role, current workflow, and the minimum context required.'],['03','Knowledge retrieval','Relevant internal or guidebook knowledge is retrieved for grounded assistance.'],['04','Assistant response','The AI layer produces an explanation, source-aware guidance, or proposed next action.'],['05','Permission gate','Actions involving sensitive capabilities require explicit user approval before execution.'],['06','Application action','Approved actions return to the Node.js application/API and the relevant Emenda workflow.'],['07','Outcome & history','The result and follow-up remain visible in the product rather than ending as a standalone chat answer.']].map(([n,t,p])=>`<div class="node"><span class="sn">${n}</span><b>${t}</b><span>${p}</span></div>`).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Engineering quality</span>
  <h2>Build quality is part of the architecture.</h2>
  <div class="grid g4" style="margin-top:30px">
    <div class="card reveal"><h3>Type safety</h3><p>TypeScript helps keep route, state, and component contracts explicit as the product grows.</p></div>
    <div class="card reveal"><h3>Static checks</h3><p>oxlint is part of the development gate for catching code-quality issues before deployment.</p></div>
    <div class="card reveal"><h3>E2E validation</h3><p>Playwright covers real application flows in the browser, including cross-role journeys such as worker report → manager verification.</p></div>
    <div class="card reveal"><h3>Production build</h3><p>Vite compiles and bundles the frontend for production delivery after type, lint, and test checks.</p></div>
  </div>
</div></section>

<section class="sec tight"><div class="wrap"><div class="cta-band">
  <h2 style="font-size:clamp(24px,3vw,34px)">Need the visual UI or the running product?</h2>
  <p>Open Figma for the fixed mobile product design, or emenda.tech for the live demo experience.</p>
  <div class="hero-cta"><a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">Open Live Demo ↗</a><a class="btn btn-s btn-lg" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View Product Design ↗</a></div>
</div></div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Deployment topology','Topologi deployment','デプロイトポロジー')}</span>
  <h2>${L('Confirmed components and the boundaries between them.','Komponen yang sudah dikonfirmasi dan boundary di antaranya.','確認済みコンポーネントと境界。')}</h2>
  <div class="flow-rail">
    <div><span class="n">CLIENT</span><b>React + TypeScript</b><p>${L('Vite-built responsive frontend, React Router navigation, Tailwind styling, Lucide icons, Recharts, Sonner.','Frontend responsive dengan Vite, React Router, Tailwind, Lucide, Recharts, Sonner.','Vite、React Router、Tailwind、Lucide、Recharts、Sonner。')}</p></div>
    <div><span class="n">API</span><b>Node.js</b><p>${L('Server-side workflow logic, validation, orchestration, and private service boundaries.','Workflow logic server-side, validation, orchestration, dan private service boundary.','サーバー側ロジック、検証、オーケストレーション、非公開サービス境界。')}</p></div>
    <div><span class="n">DATA</span><b>Supabase</b><p>${L('Persistent application data with permission and organization-boundary requirements.','Persistent application data dengan requirement permission dan organization boundary.','権限・組織境界を前提とする永続データ。')}</p></div>
    <div><span class="n">HOSTING</span><b>Hostinger VPS</b><p>${L('Deployment/runtime environment for Emenda services.','Environment deployment/runtime untuk service Emenda.','Emendaサービスのデプロイ・実行環境。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Confirmed vs. to be confirmed','Confirmed vs. belum dikonfirmasi','確認済み / 要確認')}</span>
  <h2>${L('Technical detail should be explicit about what is known.','Detail teknis harus jelas mana yang sudah diketahui.','技術情報は確認済み範囲を明確にします。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Area','Area','領域')}</th><th>${L('Current statement','Pernyataan saat ini','現時点')}</th><th>${L('Status','Status','状態')}</th></tr></thead><tbody>
    <tr><td>${L('Frontend framework','Frontend framework','フロントエンド')}</td><td>Vite 8.2 · React 19.2 · TypeScript 6.0 · Tailwind CSS 4.3 · react-router-dom 7.18</td><td>${statusBadge('available')}</td></tr>
    <tr><td>${L('UI libraries','Library UI','UIライブラリ')}</td><td>lucide-react 1.31 · recharts 3.10 · sonner 2.0</td><td>${statusBadge('available')}</td></tr>
    <tr><td>${L('Quality','Quality','品質')}</td><td>oxlint 1.75 · Playwright 1.62 · TypeScript build gate</td><td>${statusBadge('available')}</td></tr>
    <tr><td>${L('Backend','Backend','バックエンド')}</td><td>Node.js</td><td>${statusBadge('core')}</td></tr>
    <tr><td>${L('Database','Database','データベース')}</td><td>Supabase</td><td>${statusBadge('core')}</td></tr>
    <tr><td>${L('Hosting','Hosting','ホスティング')}</td><td>Hostinger VPS</td><td>${statusBadge('core')}</td></tr>
    <tr><td>${L('Exact backend version/framework','Versi/framework backend spesifik','バックエンド詳細バージョン')}</td><td>${L('Not confirmed in the provided technical stack.','Belum dikonfirmasi dari stack teknis yang diberikan.','提供情報では未確認。')}</td><td>${statusBadge('planned')}</td></tr>
    <tr><td>${L('CI/CD, backup, monitoring, SLA','CI/CD, backup, monitoring, SLA','CI/CD・バックアップ・監視・SLA')}</td><td>${L('Add only after the deployment standard is formally confirmed.','Tambahkan hanya setelah standard deployment dikonfirmasi formal.','正式な運用基準確定後に記載。')}</td><td>${statusBadge('planned')}</td></tr>
  </tbody></table></div>
</div></section>`;
