/* industries  —  PAGES.industries
   Merged from 2 original layers (lines 1436, 2264). */
PAGES.industries=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Industries</span>
  <h1>One operating layer, adapted to real work contexts.</h1>
  <p>Emenda keeps the core worker journey consistent while report templates, operational context, and support knowledge can adapt by industry.</p>
</div></section>
<section class="sec"><div class="wrap">
  <span class="eyebrow">Initial showcase</span>
  <h2>Caregiving makes the connected loop tangible.</h2>
  <div class="focus-band">
    <div class="focus-main reveal"><span class="cn" style="color:#91CDBA">CARE WORKFLOW EXAMPLE</span><h3>Worker report → manager verification → worker sees the outcome.</h3><p>A caregiver records the day from mobile, the manager reviews and verifies it, and the status returns to the worker in the same connected workflow.</p><div class="pills"><span class="pill">Daily report</span><span class="pill">Resident note</span><span class="pill">Verification</span><span class="pill">Follow-up</span><span class="pill">History</span></div></div>
    <div class="focus-side"><div class="card reveal"><h3>Why this matters</h3><p>Care work combines human communication, structured reporting, responsibility, and continuity — exactly where fragmented systems create risk.</p></div><div class="card reveal"><h3>What stays reusable</h3><p>Identity, communication, ownership, follow-up, AI assistance, permissions, and evidence remain common platform capabilities.</p></div></div>
  </div>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Adaptable verticals</span><h2>Industry context changes. The connected lifecycle does not.</h2>
  <div class="grid g4" style="margin-top:30px">
    ${[['Construction','Safety, attendance, field issues & multilingual coordination'],['Manufacturing','Shift communication, daily records & issue escalation'],['Food / F&B','Operational checklists, communication & worker support'],['Logistics','Daily activity, exceptions, follow-up & distributed teams']].map(([t,p])=>`<div class="card reveal"><h3>${t}</h3><p>${p}</p><span class="st-tag p" style="display:inline-block;margin-top:12px">Adaptable / validate scope</span></div>`).join('')}
  </div>
  <p class="source-note">Industry examples describe how the platform can be configured; they do not imply all vertical templates are shipping in the current MVP.</p>
</div></section>
<section class="sec tight"><div class="wrap"><div class="cta-band"><h2 style="font-size:clamp(24px,3vw,34px)">Map Emenda to your operation.</h2><p>Start with the workflow you already run today, then identify where communication, reporting, and follow-up break apart.</p><div class="hero-cta"><a class="btn btn-p btn-lg" href="https://emenda.tech" target="_blank" rel="noopener">Open Live Demo ↗</a></div></div></div></section>
<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Caregiving workflow detail','Detail workflow caregiving','介護ワークフロー詳細')}</span>
  <h2>${L('Why caregiving is a strong first showcase.','Mengapa caregiving menjadi showcase awal yang kuat.','なぜ介護が初期ショーケースに適しているか。')}</h2>
  <div class="deep-grid">
    <div class="deep-card wide"><div class="num">FIELD INPUT</div><h3>${L('Structured but human daily reporting','Daily report terstruktur tetapi tetap manusiawi','構造化と人間的記録の両立')}</h3><p>${L('The worker records daily activities and observations through a template that can preserve free-text context where necessary.','Worker mencatat aktivitas dan observasi harian melalui template yang tetap dapat menyimpan free-text context bila perlu.','テンプレートで日々の活動・観察を記録し、必要な自由記述も保持します。')}</p></div>
    <div class="deep-card wide"><div class="num">MANAGER LOOP</div><h3>${L('Verification without losing context','Verifikasi tanpa kehilangan context','文脈を失わない確認')}</h3><p>${L('A manager reviews the report, can clarify, and then verifies it; the verification state returns to the worker.','Manager review report, dapat melakukan klarifikasi, lalu verify; state verification kembali ke worker.','管理者が確認・追加確認・承認し、その状態を労働者へ返します。')}</p></div>
    <div class="deep-card wide"><div class="num">FOLLOW-UP</div><h3>${L('Exceptions become owned work','Exception menjadi pekerjaan dengan owner','例外を担当付き業務へ')}</h3><p>${L('If an observation needs action, it should become an owned follow-up rather than remaining hidden inside a daily note.','Jika observation membutuhkan action, ia menjadi owned follow-up, bukan tersembunyi di dalam daily note.','対応が必要な観察事項を、日報内に埋もれさせず担当付きフォローにします。')}</p></div>
    <div class="deep-card wide"><div class="num">EVIDENCE</div><h3>${L('The loop becomes history','Loop menjadi history','ループを履歴化')}</h3><p>${L('Report, verification, clarification, decision, and final outcome can stay linked for later operational review.','Report, verification, clarification, decision, dan final outcome tetap terhubung untuk review operasional di kemudian hari.','報告・確認・判断・成果を同じ履歴として残します。')}</p></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Template strategy','Strategi template','テンプレート戦略')}</span>
  <h2>${L('The core platform stays stable while field templates can change.','Core platform tetap stabil sementara template lapangan dapat berubah.','コアは共通、現場テンプレートは業界別に変更可能。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Context','Konteks','業界')}</th><th>${L('Template focus','Fokus template','テンプレート例')}</th><th>${L('Shared platform capabilities','Capability platform yang sama','共通プラットフォーム')}</th><th>${L('Scope note','Catatan scope','スコープ')}</th></tr></thead><tbody>
    <tr><td>${L('Caregiving','Caregiving','介護')}</td><td>${L('Daily work, resident notes, review, verification.','Daily work, resident note, review, verification.','日報、利用者メモ、確認、承認。')}</td><td rowspan="4">${L('Identity · multilingual communication · ownership · follow-up · knowledge · assistant · permissions · evidence','Identity · komunikasi multilingual · ownership · follow-up · knowledge · assistant · permission · evidence','ID・多言語・担当・フォロー・ナレッジ・AI・権限・証跡')}</td><td>${statusBadge('available')}</td></tr>
    <tr><td>${L('Warehouse','Warehouse','倉庫')}</td><td>${L('Activity, shift notes, exceptions, stock/operational observations.','Activity, shift note, exception, stock/operational observation.','作業、シフト、例外、在庫・業務観察。')}</td><td>${statusBadge('mvp')}</td></tr>
    <tr><td>${L('Food service','Food service','飲食')}</td><td>${L('Daily activities, service notes, exceptions, follow-up.','Daily activity, service note, exception, follow-up.','日々の業務、サービスメモ、例外、フォロー。')}</td><td>${statusBadge('mvp')}</td></tr>
    <tr><td>${L('Construction / others','Construction / lainnya','建設・その他')}</td><td>${L('Future configuration around safety, attendance, field coordination, or sector-specific records.','Konfigurasi future untuk safety, attendance, field coordination, atau sector-specific record.','安全、勤怠、現場連携、業界別記録への将来展開。')}</td><td>${statusBadge('planned')}</td></tr>
  </tbody></table></div>
</div></section>`;
