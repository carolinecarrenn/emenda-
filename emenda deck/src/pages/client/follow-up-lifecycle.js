/* follow-up-lifecycle  —  PAGES.followupLifecycle
   Merged from 3 original layers (lines 1562, 2115, 2836). */
PAGES.followupLifecycle=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Product / Follow-up Lifecycle</span>
  <h1>From report to outcome — without losing ownership.</h1>
  <p>The follow-up lifecycle is the signature operating model of Emenda. Every report, request, or issue should move through a visible chain from submission to closure, with the responsible party, status, communication, and supporting evidence kept together.</p>
</div></section>

<section class="sec dark"><div class="wrap">
  <span class="eyebrow">Lifecycle</span>
  <h2>The full end-to-end chain.</h2>
  <p class="lede">This is not a form-ending workflow. It is a living thread that keeps operational context and outcome visible.</p>
  ${spine(true)}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">What each stage means</span>
  <h2>Every step answers a different operational question.</h2>
  <div class="grid g3" style="margin-top:34px">
    ${[
      ['Report','What happened?','A worker or team member raises a report, update, issue, or request from the field.'],
      ['Review','Is it valid and who sees it first?','The receiving side reviews the incoming item, checks context, and confirms the right starting path.'],
      ['Follow-up','Who owns the next step?','An owner and a next action are assigned so the item does not stop at intake.'],
      ['Communication','What clarification is needed?','Questions, updates, and explanations stay on the same thread rather than moving to side channels.'],
      ['Decision','What was approved or decided?','A managerial or organizational decision becomes part of the same operational record.'],
      ['Action','What was actually done?','Execution, task completion, or intervention is recorded with a real status.'],
      ['Resolution','Did it solve the issue?','Outcome confirmation makes the result visible rather than implied.'],
      ['Closure','Can this be signed off?','The case can be formally closed once the outcome is accepted.'],
      ['Evidence & History','What remains after completion?','Conversation, timestamps, attachments, and outcome history remain auditable.']
    ].map(([t,s,p],i)=>`<div class="card reveal"><span class="cn">0${i+1}</span><h3>${t}</h3><p style="font-weight:600;color:var(--ink);margin-bottom:6px">${s}</p><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Why it matters</span>
  <h2>The lifecycle fixes the blind spot after submission.</h2>
  <div class="grid g4" style="margin-top:30px">
    ${[['Ownership','Every item has a responsible side.','user'],['Shared visibility','Workers and organizations both see progress.','eye'],['Traceability','Decision, action, and resolution remain linked.','clip'],['Auditability','History does not disappear into a separate channel.','shield']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
  <div class="ba" style="margin-top:24px">
    <div class="col before"><h4>Without a lifecycle</h4><ul>${['A report is submitted, but no owner is clear.','Updates happen over chat or calls and are not retained.','The worker does not know whether the issue is still open.','The organization cannot prove what action was taken.'].map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="col after"><h4>With Emenda</h4><ul>${['Submission starts a visible thread.','Follow-up is attached to the same operational record.','Status remains visible to the relevant parties.','Closure creates evidence and reusable history.'].map(x=>`<li>${x}</li>`).join('')}</ul></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Example</span>
  <h2>A caregiver daily report can become a complete operational loop.</h2>
  <div class="story">
    <div class="story-step reveal"><span class="num">01</span><b>Daily report submitted</b><p>The caregiver sends a daily report with structured fields and optional free text.</p></div>
    <div class="story-step reveal"><span class="num">02</span><b>Manager reviews and verifies</b><p>The manager reviews the report, confirms understanding, and identifies if any follow-up is needed.</p></div>
    <div class="story-step reveal"><span class="num">03</span><b>Clarification stays on-thread</b><p>If details are needed, they happen inside the same communication trail.</p></div>
    <div class="story-step reveal"><span class="num">04</span><b>Status becomes visible again to worker</b><p>The worker sees whether the report is verified or still needs action.</p></div>
    <div class="story-step reveal"><span class="num">05</span><b>History remains available</b><p>The final state becomes part of the record, not a disappearing conversation.</p></div>
  </div>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('What can start a lifecycle','Apa yang dapat memulai lifecycle','ライフサイクルの起点')}</span>
  <h2>${L('Not every case begins with the same input.','Tidak semua case dimulai dari input yang sama.','すべてのケースが同じ入力から始まるわけではありません。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">REPORT</div><h3>${L('Daily or operational report','Daily / operational report','日報・業務報告')}</h3><p>${L('Structured field activity that may be verified or may create a follow-up item when something requires attention.','Aktivitas lapangan terstruktur yang bisa diverifikasi atau membuat item follow-up bila ada hal yang perlu perhatian.','構造化された現場報告。必要に応じて確認やフォローアップへ進みます。')}</p></div>
    <div class="deep-card"><div class="num">QUESTION</div><h3>${L('Question or clarification','Pertanyaan / klarifikasi','質問・確認')}</h3><p>${L('A worker or manager needs an explanation, context, or a response from the other side.','Worker atau manager membutuhkan penjelasan, context, atau response dari sisi lain.','説明・文脈・相手側の回答が必要な場合。')}</p></div>
    <div class="deep-card"><div class="num">ISSUE</div><h3>${L('Issue or support request','Issue / support request','問題・支援依頼')}</h3><p>${L('Something cannot be solved at the point of entry and needs ownership, escalation, or a documented outcome.','Sesuatu tidak bisa diselesaikan saat entry dan membutuhkan ownership, eskalasi, atau documented outcome.','その場で解決できず、担当・エスカレーション・成果記録が必要な場合。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('State model','Model state','状態モデル')}</span>
  <h2>${L('A useful lifecycle needs more than “open” and “closed”.','Lifecycle yang berguna butuh lebih dari sekadar “open” dan “closed”.','有効なライフサイクルには「未完了／完了」以上の状態が必要です。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('State','State','状態')}</th><th>${L('Meaning','Arti','意味')}</th><th>${L('Who needs visibility','Siapa yang perlu melihat','主な閲覧者')}</th><th>${L('Typical next action','Next action umum','次のアクション')}</th></tr></thead><tbody>
    <tr><td>${L('Submitted','Submitted','提出済み')}</td><td>${L('The input is safely recorded.','Input sudah tercatat dengan aman.','入力が記録済み。')}</td><td>Worker · Manager</td><td>${L('Review','Review','確認')}</td></tr>
    <tr><td>${L('Needs review','Needs review','確認待ち')}</td><td>${L('A responsible side must read or verify it.','Pihak yang bertanggung jawab harus membaca atau memverifikasi.','担当側の確認が必要。')}</td><td>Manager</td><td>${L('Verify / ask','Verifikasi / tanya','承認・追加確認')}</td></tr>
    <tr><td>${L('Follow-up active','Follow-up aktif','対応中')}</td><td>${L('An owner and next action exist.','Owner dan next action sudah ada.','担当者と次の対応が設定済み。')}</td><td>Relevant roles</td><td>${L('Communicate / act','Komunikasi / action','連絡・実行')}</td></tr>
    <tr><td>${L('Waiting / blocked','Menunggu / blocked','待機・ブロック')}</td><td>${L('Progress depends on another person, document, permission, or external event.','Progress bergantung pada orang, dokumen, permission, atau event eksternal.','他者・書類・許可・外部イベント待ち。')}</td><td>Owner · Worker</td><td>${L('Remind / unblock','Reminder / unblock','リマインド・解消')}</td></tr>
    <tr><td>${L('Resolved','Resolved','解決')}</td><td>${L('The intended outcome has been reached.','Outcome yang dimaksud sudah tercapai.','期待する成果に到達。')}</td><td>Worker · Owner</td><td>${L('Confirm outcome','Konfirmasi outcome','成果確認')}</td></tr>
    <tr><td>${L('Closed','Closed','クローズ')}</td><td>${L('The outcome is accepted and the record is retained as history.','Outcome diterima dan record disimpan sebagai history.','成果を確認し履歴として保存。')}</td><td>Authorized roles</td><td>${L('Reference later','Referensi nanti','後から参照')}</td></tr>
  </tbody></table></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Lifecycle data','Data lifecycle','ライフサイクルデータ')}</span>
  <h2>${L('Every important transition should leave enough context to explain what happened.','Setiap transisi penting harus meninggalkan context yang cukup untuk menjelaskan apa yang terjadi.','重要な状態遷移には、後から説明できる文脈を残します。')}</h2>
  <div class="layer-map">
    <div class="layer-map-row"><strong>${L('Identity & scope','Identity & scope','ID・スコープ')}</strong><div class="chips"><span>worker_id</span><span>organization</span><span>role</span><span>relationship</span></div></div>
    <div class="layer-map-row"><strong>${L('Operational state','State operasional','運用状態')}</strong><div class="chips"><span>status</span><span>owner</span><span>priority</span><span>next_action</span></div></div>
    <div class="layer-map-row"><strong>${L('Time & history','Waktu & history','時間・履歴')}</strong><div class="chips"><span>created_at</span><span>updated_at</span><span>verified_at</span><span>closed_at</span></div></div>
    <div class="layer-map-row"><strong>${L('Evidence','Evidence','証跡')}</strong><div class="chips"><span>original content</span><span>translation</span><span>attachments</span><span>decision</span><span>outcome</span></div></div>
  </div>
</div></section>
<section class="sec" id="follow-responsibility"><div class="wrap">
  <span class="eyebrow">${L('Responsibility model','Model responsibility','Responsibility model')}</span><h2>${L('Every transition answers who must do what next.','Setiap transisi menjawab siapa harus melakukan apa berikutnya.','各transitionで次に誰が何をするかを明確化。')}</h2>
  <div class="matrix-grid">
    <div class="mh">${L('Stage','Tahap','Stage')}</div><div class="mh">Worker</div><div class="mh">Manager</div><div class="mh">Organization</div>
    <div class="mr">${L('Report / request','Report / request','Report / request')}</div><div>${L('Create context and submit the original information.','Membuat context dan submit informasi original.','context作成・原情報提出。')}</div><div>${L('Receive in the correct worker/time context.','Menerima dalam context worker/waktu yang benar.','正しいworker/time contextで受領。')}</div><div>${L('Provide templates and role rules.','Menyediakan template dan role rule.','template・role rule提供。')}</div>
    <div class="mr">${L('Review / clarify','Review / clarify','Review / clarify')}</div><div>${L('Answer clarification without losing the original thread.','Menjawab klarifikasi tanpa kehilangan original thread.','original threadを維持して回答。')}</div><div>${L('Verify, ask, prioritize, or escalate.','Verify, ask, prioritize, atau escalate.','verify、ask、prioritize、escalate。')}</div><div>${L('Ensure manager mapping and access are valid.','Memastikan manager mapping dan access valid.','manager mapping・accessを保証。')}</div>
    <div class="mr">${L('Follow-up','Follow-up','Follow-up')}</div><div>${L('See owner, status, and what is expected from the worker.','Melihat owner, status, dan apa yang diharapkan dari worker.','owner、status、worker側actionを確認。')}</div><div>${L('Own or assign next action and maintain status.','Memiliki atau assign next action dan menjaga status.','next actionをown/assignしstatus維持。')}</div><div>${L('Define escalation/governance rules.','Menentukan escalation/governance rule.','escalation/governance rule定義。')}</div>
    <div class="mr">${L('Outcome / closure','Outcome / closure','Outcome / closure')}</div><div>${L('Receive result and confirm when applicable.','Menerima hasil dan konfirmasi bila diperlukan.','結果受領・必要時確認。')}</div><div>${L('Record resolution and evidence.','Mencatat resolution dan evidence.','resolution・evidence記録。')}</div><div>${L('Retain auditable history under policy.','Menyimpan auditable history sesuai policy.','policyに基づきaudit history保持。')}</div>
  </div>
</div></section>
<section class="sec tinted" id="follow-exceptions"><div class="wrap">
  <span class="eyebrow">${L('Exception handling','Penanganan exception','Exception handling')}</span><h2>${L('A lifecycle is only useful if it handles waiting, failure, and ambiguity.','Lifecycle berguna hanya jika menangani waiting, failure, dan ambiguity.','waiting・failure・ambiguityを扱えてこそ有効。')}</h2>
  <div class="edge-list">
    <div class="edge-item"><b>${L('No owner assigned','Belum ada owner','Owner未設定')}</b><p>${L('The item must remain visibly unowned rather than looking in progress.','Item harus terlihat jelas unowned, bukan seolah in progress.','in progressに見せずunownedを明示。')}</p><span class="response">${L('Route to assignment queue','Masuk assignment queue','assignment queueへ')}</span></div>
    <div class="edge-item"><b>${L('Waiting on worker','Menunggu worker','Worker待ち')}</b><p>${L('Show exactly what information/action is missing and keep waiting age visible.','Tampilkan informasi/action apa yang kurang dan usia waiting state.','不足情報/actionとwaiting ageを表示。')}</p><span class="response">${L('Reminder / clarify','Reminder / clarify','Reminder / clarify')}</span></div>
    <div class="edge-item"><b>${L('Waiting external dependency','Menunggu dependency eksternal','外部dependency待ち')}</b><p>${L('Do not close the case; record dependency and expected next checkpoint.','Jangan close case; catat dependency dan expected next checkpoint.','caseをcloseせずdependency・next checkpointを記録。')}</p><span class="response">Blocked</span></div>
    <div class="edge-item"><b>${L('Action failed','Action gagal','Action失敗')}</b><p>${L('Failure reason and attempted action stay attached to the same case.','Failure reason dan attempted action tetap attached ke case yang sama.','failure reason・attempted actionを同一caseに保持。')}</p><span class="response">Retry / alternate / human</span></div>
    <div class="edge-item"><b>${L('Resolved but disputed','Resolved tetapi diperdebatkan','Resolved異議あり')}</b><p>${L('Allow outcome confirmation or reopening rather than forcing closure.','Izinkan outcome confirmation atau reopening, bukan memaksa closure.','outcome confirmation・reopenを許可。')}</p><span class="response">Confirm / reopen</span></div>
  </div>
</div></section>`;
