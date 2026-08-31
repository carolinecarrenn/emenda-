/* security-privacy  —  PAGES.platformSecurity
   Merged from 2 original layers (lines 1877, 2383). */
PAGES.platformSecurity=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Platform / Security & Privacy</span>
  <h1>Trust by design, not as an afterthought.</h1>
  <p>Emenda handles communication, identity, and follow-up across workers and organizations. That means privacy boundaries, consent, traceability, and clear access rules are core product requirements, not optional add-ons.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Core safeguards</span>
  <h2>What the platform must protect.</h2>
  <div class="grid g4" style="margin-top:34px">${[['Role-based access','Only the right people should see the right data for the right purpose.','lock'],['Consent before action','Sensitive AI-assisted actions require explicit user permission.','check'],['Auditability','Actions, status changes, and key events should be traceable.','clip'],['Organizational separation','One organization should not implicitly see another organization’s data.','building'],['Worker-owned continuity','Employment changes should not delete the worker-owned identity history.','user'],['Original-content integrity','Translations and summaries do not replace the original content.','globe'],['AI minimum-context rule','The assistant only uses relevant, permission-aware context.','bolt'],['Privacy boundary clarity','The system should clearly communicate what is visible to whom.','eye']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Data boundary examples</span>
  <h2>Not all information is equal.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><h3>Worker-private or tightly restricted</h3><ul class="rlist" style="margin-top:14px">${['Private life/health logs','Emergency contacts','Sensitive personal context','Any future protected categories that require explicit consent and strict separation'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
    <div class="card reveal"><h3>Employer-permitted operational information</h3><ul class="rlist" style="margin-top:14px">${['Employment connection status','Daily reports and work-related communication','Follow-up and operational status','Permitted professional evidence','Role-relevant history required for operations'].map(x=>`<li><span class="ck">✓</span>${x}</li>`).join('')}</ul></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Content integrity</span>
  <h2>Translation and AI are support layers, not silent rewrites.</h2>
  <div class="grid g3" style="margin-top:30px">${[['Original + translation together','When translation is relevant, both layers remain available for reference.'],['Important send review','For important outbound translated messages, the sender should be able to review before commit.'],['Failure preservation','If translation or sending fails, the original draft should be retained and retryable.']].map(([t,p])=>`<div class="card reveal"><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
  <p class="form-note" style="margin-top:14px">This page describes the intended operating rules and trust model. Any external certification, legal review outcome, or formal compliance claim should only be added once validated.</p>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Permission model','Model permission','権限モデル')}</span>
  <h2>${L('Access is defined by role, relationship, purpose, and consent.','Akses ditentukan oleh role, relationship, purpose, dan consent.','アクセスは役割・関係・目的・同意で決まります。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Data / action','Data / action','データ / 操作')}</th><th>Worker</th><th>Manager / Company Admin</th><th>${L('Rule','Aturan','ルール')}</th></tr></thead><tbody>
    <tr><td>${L('Worker identity','Worker identity','労働者ID')}</td><td>${L('Own / manage','Memiliki / mengelola','保有・管理')}</td><td>${L('Permitted fields only','Hanya field yang diizinkan','許可項目のみ')}</td><td>${L('Employment does not imply ownership of the person record.','Employment tidak berarti organisasi memiliki person record.','雇用関係は本人IDの所有を意味しません。')}</td></tr>
    <tr><td>${L('Work reports','Work report','業務報告')}</td><td>${L('Create / view own','Membuat / melihat milik sendiri','作成・本人分閲覧')}</td><td>${L('Review / verify in scope','Review / verify sesuai scope','範囲内で確認・承認')}</td><td>${L('Operational relationship determines visibility.','Operational relationship menentukan visibility.','業務関係で閲覧範囲を決定。')}</td></tr>
    <tr><td>${L('Private/sensitive context','Context privat/sensitif','機微・プライベート情報')}</td><td>${L('Controlled by user/policy','Dikontrol user/policy','本人・ポリシーで制御')}</td><td>${L('Not automatically visible','Tidak otomatis terlihat','自動表示しない')}</td><td>${L('Purpose limitation and explicit controls.','Purpose limitation dan explicit control.','目的限定・明示制御。')}</td></tr>
    <tr><td>${L('AI action: location/call/email/SMS/calendar/contacts','AI action: location/call/email/SMS/calendar/contacts','AI操作：位置/通話/メール/SMS/カレンダー/連絡先')}</td><td>${L('Explicit permission','Explicit permission','明示許可')}</td><td>—</td><td>${L('No silent sensitive action.','Tidak ada action sensitif diam-diam.','機微操作を無断実行しない。')}</td></tr>
  </tbody></table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('AI trust controls','Kontrol trust AI','AI信頼制御')}</span>
  <h2>${L('Grounding, isolation, and safe failure are part of product safety.','Grounding, isolation, dan safe failure adalah bagian dari product safety.','根拠、分離、安全な失敗を製品安全に含めます。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">GROUNDING</div><h3>${L('Evidence-aware answers','Answer berbasis evidence','根拠付き回答')}</h3><p>${L('Sourced/current answers should retain evidence metadata and freshness where the task requires it.','Answer sourced/current mempertahankan evidence metadata dan freshness ketika task membutuhkannya.','必要な回答には証拠メタデータ・更新性を保持。')}</p></div>
    <div class="deep-card"><div class="num">ISOLATION</div><h3>${L('Memory boundaries','Batas memory','メモリ境界')}</h3><p>${L('Memory is isolated at least by workspace, agent, and user/session so one user cannot retrieve another user’s memory.','Memory diisolasi setidaknya berdasarkan workspace, agent, dan user/session agar user A tidak mengambil memory user B.','workspace・agent・user/session単位で分離し、他ユーザーの記憶を取得できないようにします。')}</p></div>
    <div class="deep-card"><div class="num">DEGRADED MODE</div><h3>${L('Safe failure','Safe failure','安全な縮退')}</h3><p>${L('Tool/runtime failure should produce a clear degraded response rather than pretending an action succeeded.','Tool/runtime failure menghasilkan degraded response yang jelas, bukan berpura-pura action berhasil.','ツール障害時に成功を装わず、状態を明示します。')}</p></div>
  </div>
</div></section>`;
