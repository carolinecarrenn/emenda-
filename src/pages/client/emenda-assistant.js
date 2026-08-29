/* emenda-assistant  —  PAGES.platformAssistant
   Merged from 2 original layers (lines 1752, 2317). */
PAGES.platformAssistant=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Platform / Emenda Assistant</span>
  <h1>One contextual assistant across the journey.</h1>
  <p>Emenda Assistant is not meant to be a separate chatbot product. It is the assistance layer inside Emenda, helping users understand information, navigate the next action, and continue toward an actual outcome.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Assistant model</span>
  <h2>Discover → Understand → Act → Outcome.</h2>
  <div class="grid g4" style="margin-top:34px">${[['Discover','Find relevant information, guidance, and procedures.','compass'],['Understand','Interpret user context, role, and intent.','eye'],['Act','Recommend or initiate the next step with permission.','bolt'],['Outcome','Keep follow-up visible until the user knows what happened.','route']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">What makes it different</span>
  <h2>The conversation should not stop at the answer.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal" style="background:var(--paper2)"><span class="cn">Typical chatbot flow</span><h3>Question → Answer → End</h3><p>The user gets text back, but the operational next step often remains disconnected or manual.</p></div>
    <div class="card reveal" style="background:var(--emerald-tint);border-color:#c9e2d8"><span class="cn" style="color:var(--emerald)">Emenda Assistant flow</span><h3>Question → Context → Guidance → Permission → Action → Follow-up → Outcome</h3><p>Assistance stays connected to the operational journey so the user can keep moving instead of starting over elsewhere.</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Ground rules</span>
  <h2>Human-controlled, multilingual, and permission-aware.</h2>
  <div class="grid g3" style="margin-top:30px">${[['One assistant identity','The system should not expose separate bots for each topic. One assistant spans the lifecycle.'],['Permission-aware actions','Location, call, email, SMS, calendar, and contacts require explicit user permission.'],['Multilingual support','Bahasa Indonesia, English, and Japanese should be supported as interface and assistance contexts.'],['Source-aware answers','When external or guidebook knowledge is used, answer quality should remain grounded in available sources.'],['Context boundaries','Current page context can assist the answer but does not automatically mean durable memory.'],['Operational follow-through','When an action or outcome matters, the assistant should help the user continue the flow rather than ending in advice only.']].map(([t,p])=>`<div class="card reveal"><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('MVP inputs & outputs','Input & output MVP','MVP入出力')}</span>
  <h2>${L('The assistant is designed for more than typed Q&A.','Assistant dirancang lebih dari typed Q&A.','テキストQ&Aだけではありません。')}</h2>
  <div class="cap-table-wrap"><table class="cap-table"><thead><tr><th>${L('Capability','Capability','機能')}</th><th>${L('Behavior','Behavior','動作')}</th><th>${L('Trust requirement','Syarat trust','信頼要件')}</th></tr></thead><tbody>
    <tr><td>${L('Text chat','Text chat','テキスト')}</td><td>${L('Free-form situations, follow-up questions, and conversational planning.','Situasi free-form, follow-up question, dan conversational planning.','自由入力、追加質問、会話型計画。')}</td><td>${L('Preserve context boundaries.','Menjaga context boundary.','文脈境界を保持。')}</td></tr>
    <tr><td>${L('Voice input','Voice input','音声入力')}</td><td>${L('Transcribe and show a review step before the content is treated as final input.','Transcribe dan tampilkan review step sebelum content dianggap final input.','文字起こし後に確認ステップ。')}</td><td>${L('Microphone permission + editable transcript.','Microphone permission + transcript yang bisa diedit.','マイク許可＋編集可能な文字起こし。')}</td></tr>
    <tr><td>${L('Attachments','Attachment','添付')}</td><td>${L('Use image/document/text/location context only when the user intentionally adds it.','Menggunakan context image/document/text/location hanya ketika user sengaja menambahkannya.','ユーザーが明示的に追加した画像・文書・テキスト・位置情報のみ利用。')}</td><td>${L('Permission and scope are explicit.','Permission dan scope eksplisit.','許可と範囲を明示。')}</td></tr>
    <tr><td>${L('Sources','Source','ソース')}</td><td>${L('Show source detail and freshness for sourced/current guidance where relevant.','Menampilkan source detail dan freshness untuk guidance yang bersumber/current.','必要に応じてソース詳細と更新性を表示。')}</td><td>${L('Official national sources first in the PRD evidence policy.','Official national source diprioritaskan dalam evidence policy PRD.','PRDでは公的な国レベル情報を優先。')}</td></tr>
    <tr><td>${L('Action planning','Action planning','行動計画')}</td><td>${L('Turn the situation into concrete next steps and keep an outcome link.','Mengubah situasi menjadi next step konkret dan menjaga link ke outcome.','状況を具体的な次の行動へ変換し、成果に接続。')}</td><td>${L('High-impact actions require consent.','Action berdampak tinggi membutuhkan consent.','影響の大きい操作は同意必須。')}</td></tr>
  </tbody></table></div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Runtime boundary','Runtime boundary','ランタイム境界')}</span>
  <h2>${L('One user-facing Emenda Assistant; internal development agents stay internal.','Satu Emenda Assistant yang user-facing; agent development internal tetap internal.','ユーザー向けはEmenda Assistantのみ。内部開発エージェントは外部に出しません。')}</h2>
  <div class="layer-map">
    <div class="layer-map-row"><strong>${L('Browser / app','Browser / app','ブラウザ / アプリ')}</strong><div class="chips"><span>Worker UI</span><span>Manager UI</span><span>text</span><span>voice</span></div></div>
    <div class="layer-map-row"><strong>${L('Application boundary','Application boundary','アプリ境界')}</strong><div class="chips"><span>authenticated API</span><span>role context</span><span>consent</span></div></div>
    <div class="layer-map-row"><strong>EMENDA ASSISTANT</strong><div class="chips"><span>profile</span><span>knowledge</span><span>memory</span><span>files</span><span>tools</span><span>permissions</span></div></div>
    <div class="layer-map-row"><strong>${L('Internal operations','Operasi internal','内部運用')}</strong><div class="chips"><span>development</span><span>maintenance</span><span>monitoring</span><span>verification</span></div></div>
  </div>
  <div class="callout"><b>${L('Isolation rule','Aturan isolation','分離ルール')}</b><p>${L('User requests should not be routed through exposed internal specialist identities. Assistant memory, task state, files, and permissions remain scoped to the Emenda user-facing runtime and its workspace/user boundaries.','User request tidak diarahkan melalui identity specialist internal yang exposed. Memory assistant, task state, file, dan permission tetap scoped ke runtime Emenda user-facing serta batas workspace/user.','ユーザー要求を内部スペシャリストへ公開ルーティングせず、メモリ・タスク・ファイル・権限をEmendaのワークスペース/ユーザー境界に分離します。')}</p></div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Outcome learning','Outcome learning','成果学習')}</span>
  <h2>${L('Advice becomes more useful when the system knows what happened next.','Advice lebih berguna ketika sistem tahu apa yang terjadi setelahnya.','その後の結果を把握できると支援品質を改善できます。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">RESOLVED</div><h3>${L('Solved','Selesai','解決')}</h3><p>${L('The recommendation or action reached the intended outcome.','Recommendation atau action mencapai outcome yang dimaksud.','推奨・対応が期待成果に到達。')}</p></div>
    <div class="deep-card"><div class="num">STILL WORKING</div><h3>${L('Not finished yet','Belum selesai','継続中')}</h3><p>${L('The user is still progressing and may need the next dependency, reminder, or human help.','User masih progress dan mungkin membutuhkan dependency berikutnya, reminder, atau bantuan manusia.','まだ進行中で、次の依存事項・リマインド・人の支援が必要。')}</p></div>
    <div class="deep-card"><div class="num">FAILED</div><h3>${L('Did not work','Tidak berhasil','失敗')}</h3><p>${L('Failure reason can be attached to the originating recommendation so the product can learn from real resolution, not just clicks.','Failure reason dapat dihubungkan ke recommendation asal agar product belajar dari resolution nyata, bukan hanya click.','失敗理由を元の推奨に紐づけ、クリックではなく実際の解決から学びます。')}</p></div>
  </div>
</div></section>`;
