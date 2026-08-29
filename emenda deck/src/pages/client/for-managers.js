/* for-managers  —  PAGES.solutionsManager
   Merged from 2 original layers (lines 1686, 2208). */
PAGES.solutionsManager=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Solutions / For Managers</span>
  <h1>Operational visibility, structured follow-up, and clearer decisions.</h1>
  <p>For managers, Emenda is about seeing what needs action, understanding worker context, and keeping follow-up structured rather than scattered across multiple channels.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Core value</span>
  <h2>Managers need to know what happened, what matters, and what happens next.</h2>
  <div class="grid g4" style="margin-top:34px">${[['Dashboard visibility','Priority items, exceptions, and daily operational awareness.','compass'],['Report review','Read and verify incoming daily reports or field updates.','report'],['Structured follow-up','Attach owner, status, and next action to the same thread.','route'],['Communication context','Keep questions and clarifications connected to the report or case.','chat']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Manager workflow</span>
  <h2>How the manager experience operates.</h2>
  <div class="story">
    <div class="story-step reveal"><span class="num">01</span><b>See the latest operational picture</b><p>Reports, missing updates, and items needing attention are visible from the dashboard or list views.</p></div>
    <div class="story-step reveal"><span class="num">02</span><b>Open report or thread context</b><p>The manager can review the content, worker, timing, and surrounding operational history.</p></div>
    <div class="story-step reveal"><span class="num">03</span><b>Communicate or verify</b><p>If clarification is needed, the conversation remains connected. If the report is complete, it can move to a verified state.</p></div>
    <div class="story-step reveal"><span class="num">04</span><b>Track follow-up to outcome</b><p>Status and owner remain visible so the item does not disappear after first review.</p></div>
    <div class="story-step reveal"><span class="num">05</span><b>Leave an auditable history</b><p>Verification, decisions, and operational evidence remain connected for future reference.</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Why managers benefit</span>
  <h2>Less ambiguity, more operational discipline.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><h3>Typical manager pain points</h3><ul class="rlist" style="margin-top:14px">${['Communication happens across chat, paper, and calls.','Follow-up is remembered by people rather than tracked by the system.','Verification loops are manual and hard to prove later.','Worker questions and daily reports are separated from the operational record.'].map(x=>`<li><span class="ck">!</span>${x}</li>`).join('')}</ul></div>
    <div class="card reveal"><h3>What Emenda changes</h3><ul class="rlist" style="margin-top:14px">${['Reports and related communication stay linked.','Verification status becomes visible back to the worker.','Managers can focus on cases that need action instead of searching across channels.','Outcome and evidence remain stored in one place.'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
  </div>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Manager workspace','Workspace manager','管理者ワークスペース')}</span>
  <h2>${L('A manager should see priority, context, responsibility, and progress — not just a list of submissions.','Manager harus melihat priority, context, responsibility, dan progress — bukan hanya daftar submission.','管理者には提出一覧ではなく、優先度・文脈・責任・進捗が必要です。')}</h2>
  <div class="deep-grid">
    ${[
      ['01',L('Dashboard & priorities','Dashboard & priority','ダッシュボード・優先事項'),L('Reports, missing reports, unread items, residents/workers, and items that need follow-up.','Report, missing report, unread item, resident/worker, dan item yang butuh follow-up.','報告、未提出、未読、労働者、要フォロー項目。')],
      ['02',L('Report review','Review report','報告確認'),L('Open structured report content, understand the worker context, verify it, or request clarification.','Membuka structured report, memahami worker context, verify, atau meminta klarifikasi.','構造化報告を確認し、承認または追加確認。')],
      ['03',L('Follow-up ownership','Ownership follow-up','担当管理'),L('Create a next action, assign responsibility, preserve status, and prevent an issue from disappearing.','Membuat next action, menetapkan responsibility, menjaga status, dan mencegah issue menghilang.','次の対応、担当、状態を管理し、課題を消失させません。')],
      ['04',L('Communication','Komunikasi','コミュニケーション'),L('Keep questions and operational clarification attached to the case instead of switching to an untracked channel.','Menjaga pertanyaan dan klarifikasi operasional tetap attached ke case.','質問・確認を同じケース内に保持します。')],
      ['05',L('Verification feedback loop','Loop verifikasi','確認フィードバック'),L('When a manager verifies a daily report, the worker can see the verified status again in their own surface.','Saat manager verify daily report, worker dapat melihat status verified kembali di surface mereka.','管理者の承認状態を労働者側にも返します。')],
      ['06',L('History & evidence','History & evidence','履歴・証跡'),L('Operational decisions and completed actions remain explainable later.','Decision operasional dan action yang selesai tetap bisa dijelaskan kemudian.','判断・対応を後から説明できる履歴として保持します。')]
    ].map(([n,t,p])=>`<div class="deep-card"><div class="num">${n}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Cross-role loop','Loop lintas role','役割横断ループ')}</span>
  <h2>${L('One example: daily report verification.','Satu contoh: verifikasi daily report.','例：日報確認。')}</h2>
  <div class="flow-rail">
    <div><span class="n">01</span><b>${L('Worker submits','Worker submit','労働者が提出')}</b><p>${L('A general or industry template is reviewed before submission.','Template general atau industry direview sebelum submit.','一般または業界テンプレートを確認して提出。')}</p></div>
    <div><span class="n">02</span><b>${L('Manager receives','Manager menerima','管理者が受領')}</b><p>${L('The report appears in manager context with the right worker and date.','Report muncul di context manager dengan worker dan tanggal yang sesuai.','労働者・日付とともに管理者側へ表示。')}</p></div>
    <div><span class="n">03</span><b>${L('Manager verifies','Manager verify','管理者が承認')}</b><p>${L('Verification is a state change, not a separate disconnected message.','Verification adalah state change, bukan message terpisah.','承認は別メッセージではなく状態変更です。')}</p></div>
    <div><span class="n">04</span><b>${L('Worker sees verified','Worker melihat verified','労働者に反映')}</b><p>${L('The status returns to the worker report history.','Status kembali ke history report worker.','承認状態が労働者の履歴に戻ります。')}</p></div>
  </div>
</div></section>`;
