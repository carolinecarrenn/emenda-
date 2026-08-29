/* for-workers  —  PAGES.solutionsWorker
   Merged from 2 original layers (lines 1653, 2179). */
PAGES.solutionsWorker=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Solutions / For Workers</span>
  <h1>A calm mobile companion for work and life in Japan.</h1>
  <p>For workers, Emenda should feel clear, supportive, and trustworthy. The experience is intentionally mobile-first and centers around identity, daily tasks, communication, support, and clear status visibility.</p>
</div></section>

<section class="sec"><div class="wrap">
  <div class="feature">
    <div class="fcopy"><span class="eyebrow">Experience overview</span><h2>Built from the fixed mobile direction.</h2><p class="lede">The worker surface follows the Emenda mobile language: calm cards, clear status, lightweight iconography, and a structure that stays understandable even for users who are navigating work and life in a new country.</p><ul class="rlist" style="margin-top:20px">${['Onboarding and consent explained in plain language','EMENDA ID and profile owned by the worker','Daily reports and communication in one mobile flow','Knowledge and AI support available in context','Visible follow-up and outcome instead of uncertainty'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
    <div class="fvisual" style="background:var(--emerald-tint);min-height:560px;padding:34px"><div class="design-card" style="width:100%"><span class="eyebrow">Worker mobile source</span><h3>The complete fixed Worker journey lives in Figma.</h3><p>Use it to inspect actual screens, error states, empty states, offline states, loading states, and role-specific details.</p><div style="margin-top:20px"><a class="btn btn-p" href="https://www.figma.com/design/IZZYiAlNAdYAAcX2z5AtOm/full-emenda?t=9xQLU58yz168Rhp8-0" target="_blank" rel="noopener">View Product Design ↗</a></div></div></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Worker journey</span>
  <h2>What the worker can do, step by step.</h2>
  <div class="grid g3" style="margin-top:34px">
    ${[['Onboarding & language','Choose language, understand consent, and set up the initial app context.'],['EMENDA ID & profile','Keep identity, personal details, and worker-owned continuity in one place.'],['Home & progress','See profile completion, readiness, notices, and next actions clearly.'],['Daily reports','Submit daily records with structured fields and optional free-text notes.'],['Communication','Ask questions, report issues, or consult in a multilingual thread.'],['Support & knowledge','Find procedures, guidebooks, and contextual answers without switching systems.'],['Assistant','Use one AI assistant to discover, understand, act, and follow up.'],['Notifications','Track what needs attention without losing message or report context.'],['Status & history','See what has been verified, resolved, or still needs action.']].map(([t,p],i)=>`<div class="card reveal"><span class="cn">0${i+1}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Worker design principles</span>
  <h2>What the worker experience must protect.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><h3>Clarity and safety</h3><ul class="rlist" style="margin-top:14px">${['No overloaded screens or noisy dashboards','Plain-language visibility about who can see what','Translation as a support layer; original content remains preserved','Clear distinction between report, question, and consultation','No silent action by AI without user consent'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
    <div class="card reveal"><h3>Worker-owned continuity</h3><ul class="rlist" style="margin-top:14px">${['Identity remains with the worker even if employment changes','Professional history is intended to remain portable','Private areas and permitted employer-visible areas must stay distinct','The system should reduce uncertainty, not create more paperwork','The worker sees outcomes and status, not only submission confirmations'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
  </div>
</div></section>

<section class="sec tight"><div class="wrap"><div class="cta-band"><h2 style="font-size:clamp(24px,3vw,34px)">Want to see the worker journey in context?</h2><p>Open the lifecycle, modules, or assistant pages to see how the worker experience connects to the larger ecosystem.</p><div class="hero-cta"><a class="btn btn-p btn-lg" href="#/follow-up-lifecycle" data-nav>See the lifecycle</a><a class="btn btn-s btn-lg" href="#/emenda-assistant" data-nav>See the assistant</a></div></div></div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Complete worker capability catalog','Katalog capability worker lengkap','労働者向け機能一覧')}</span>
  <h2>${L('From first access to a durable work history.','Dari akses pertama sampai work history yang durable.','初回アクセスから継続する就労履歴まで。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Area','Area','領域')}</th><th>${L('What the worker can do','Yang dapat dilakukan worker','できること')}</th><th>${L('Important states','State penting','重要状態')}</th></tr></thead><tbody>
    <tr><td>Auth & Account</td><td>${L('Language selection, login/register, OTP, PIN, recovery, logout, offline handling.','Pilih bahasa, login/register, OTP, PIN, recovery, logout, offline handling.','言語選択、ログイン/登録、OTP、PIN、復旧、ログアウト、オフライン。')}</td><td>loading · invalid · expired · offline · recovery</td></tr>
    <tr><td>EMENDA ID</td><td>${L('Create and verify identity, inspect status, show QR, share selected identity details.','Membuat dan verify identity, melihat status, menampilkan QR, share detail terpilih.','ID作成・本人確認・状態確認・QR・選択共有。')}</td><td>pending · verified · needs review · failed</td></tr>
    <tr><td>Home</td><td>${L('See profile completeness, readiness, employer connection, shortcuts, notifications, and next actions.','Melihat profile completeness, readiness, employer connection, shortcut, notification, dan next action.','プロフィール完成度、準備状況、雇用接続、通知、次の対応。')}</td><td>new · incomplete · connected · access ended · offline</td></tr>
    <tr><td>Career & CV</td><td>${L('Maintain experience, education, skills, languages, qualifications, and portable professional context.','Mengelola pengalaman, pendidikan, skill, bahasa, qualification, dan professional context yang portable.','職歴、学歴、スキル、言語、資格、携行可能な職業情報。')}</td><td>add · edit · delete · verified/locked · unsaved</td></tr>
    <tr><td>Japan Readiness</td><td>${L('Track preparation tasks, important dates, documents, status, and practical setup.','Melacak preparation task, important date, document, status, dan practical setup.','準備タスク、重要日、書類、各種手続き状況。')}</td><td>pending · done · failed · reminder · offline</td></tr>
    <tr><td>Daily Reports</td><td>${L('Create, review, submit, keep offline drafts, and see manager verification.','Membuat, review, submit, menyimpan offline draft, dan melihat verifikasi manager.','作成、確認、提出、オフライン下書き、管理者確認。')}</td><td>draft · review · submitting · submitted · verified · failed</td></tr>
    <tr><td>Knowledge & Support</td><td>${L('Search knowledge, read articles, ask questions, and contact support without exposing secrets.','Search knowledge, membaca artikel, bertanya, dan contact support tanpa membocorkan secret.','ナレッジ検索、記事、質問、サポート。')}</td><td>searching · results · no result · offline · support submitted</td></tr>
    <tr><td>Assistant</td><td>${L('Text/voice conversation, attachments, sources, action guidance, permissions, and outcome follow-up.','Percakapan text/voice, attachment, source, action guidance, permission, dan outcome follow-up.','テキスト/音声、添付、ソース、行動支援、許可、成果フォロー。')}</td><td>thinking · voice review · source detail · send failed · offline</td></tr>
  </tbody></table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Life-cycle context','Konteks life-cycle','生活・就労ライフサイクル')}</span>
  <h2>${L('The assistant can support the worker before arrival and after settling in Japan.','Assistant dapat mendukung worker sebelum datang dan setelah tinggal di Jepang.','来日前から日本での生活定着後まで支援します。')}</h2>
  <div class="flow-rail">
    <div><span class="n">01–02</span><b>${L('Dream & planning','Dream & planning','希望・計画')}</b><p>${L('Goals, route options, feasibility, cost, language, visa, finance.','Goal, pilihan route, feasibility, cost, bahasa, visa, finance.','目標、ルート、実現性、費用、言語、在留、資金。')}</p></div>
    <div><span class="n">03–04</span><b>${L('Preparing & arrival','Persiapan & arrival','準備・到着')}</b><p>${L('Documents, applications, housing, immediate obligations, and arrival priorities.','Dokumen, application, housing, immediate obligation, dan prioritas setelah tiba.','書類、申請、住居、到着直後の優先事項。')}</p></div>
    <div><span class="n">05–06</span><b>${L('First 30 days & daily life','30 hari pertama & daily life','最初の30日・生活')}</b><p>${L('Registration, insurance, bank, phone, utilities, transport, health, food, and local procedures.','Registrasi, insurance, bank, phone, utility, transport, health, food, dan prosedur lokal.','登録、保険、銀行、携帯、公共サービス、交通、医療、生活手続き。')}</p></div>
    <div><span class="n">07–08</span><b>${L('Work & long-term','Work & long-term','仕事・長期生活')}</b><p>${L('Boss/HR communication, administration, career, renewal, family, moves, and future planning.','Komunikasi boss/HR, administrasi, career, renewal, family, pindah, dan future planning.','上司/HRとの連絡、行政、キャリア、更新、家族、転居、将来計画。')}</p></div>
  </div>
</div></section>`;
