/* ============================================================ SHARED FRAGMENTS ============================================================ */
const LIFECYCLE=[['01','Report','Raised from the field'],['02','Review','Checked by owner'],['03','Follow-up','Action assigned'],['04','Communication','Two-way, in context'],['05','Decision','Approved & logged'],['06','Action','Executed'],['07','Resolution','Confirmed outcome'],['08','Closure','Signed off'],['09','Evidence & History','Stored & auditable']];
const spine=(dark)=>`<div class="spine">${LIFECYCLE.map(([n,t,s])=>`<div class="node"><span class="sn">${n}</span><b>${t}</b><span>${s}</span></div>`).join('')}</div>`;

const laptopMock=()=>`<div class="mock-laptop"><div class="lid"><div class="scr">
  <div class="mui-bar"><span class="d"></span><span class="d"></span><span class="t">Emenda · Manager Dashboard</span></div>
  <div class="mui-body">
    <div class="mui-kpis">
      <div class="mui-kpi"><b>128</b><span>Reports today</span></div>
      <div class="mui-kpi"><b>7</b><span>Need follow-up</span></div>
      <div class="mui-kpi"><b>98%</b><span>Verified</span></div>
    </div>
    <div class="mui-row"><span class="ic"></span><span class="ln"></span><span class="mui-tag">Follow-up</span></div>
    <div class="mui-row"><span class="ic"></span><span class="ln s"></span><span class="mui-tag">Resolved</span></div>
    <div class="mui-row"><span class="ic"></span><span class="ln"></span><span class="mui-tag amber">Review</span></div>
  </div></div><div class="base"></div></div></div>`;
const phoneMock=()=>`<div class="mock-phone"><div class="body"><div class="scr">
  <div class="mui-phone-hd"><b>Emenda Assistant</b><span>Context-aware · multilingual</span></div>
  <div class="mui-chat">
    <div class="mui-bubble">Ada masalah dengan izin tinggal saya. Bagaimana?</div>
    <div class="mui-bubble me">Saya bantu. Ini langkahnya, dan saya bisa buatkan laporan ke manajer Anda.</div>
    <div class="mui-bubble">Ya, tolong buatkan.</div>
    <div class="mui-bubble me">Laporan dibuat ✓ Manajer diberi tahu.</div>
  </div></div></div></div>`;

const appNav=(active='Home')=>`<div class="app-nav">${['Home','Reports','ID','Assistant','Profile'].map(x=>`<span class="${x===active?'on':''}"><b></b>${x}</span>`).join('')}</div>`;
const phoneShell=(inner,active='Home',side='')=>`<div class="app-phone ${side}"><div class="app-screen"><div class="app-status"><span>9:41</span><span>● ● ●</span></div>${inner}${appNav(active)}</div></div>`;
const workerHomeMock=(side='')=>phoneShell(`<div class="app-header"><div class="app-brand">EMENDA</div><div class="app-avatar">AR</div></div><div class="app-content"><div class="app-title">Good morning, Ari.</div><div class="app-sub">Your work, identity, and Japan readiness — in one place.</div><div class="app-card soft"><div class="app-card-row"><div class="app-ic"><svg viewBox="0 0 24 24">${I.user}</svg></div><div><b>Profile completeness · 80%</b><small>One step left to complete your worker profile.</small></div></div><div class="app-progress"><i style="width:80%"></i></div></div><div class="app-card"><div class="app-card-row"><div class="app-ic"><svg viewBox="0 0 24 24">${I.report}</svg></div><div><b>Today’s Daily Report</b><small>No report submitted yet.</small><span class="app-chip gold">Action needed</span></div></div></div><div class="app-card"><div class="app-card-row"><div class="app-ic"><svg viewBox="0 0 24 24">${I.flag}</svg></div><div><b>Japan readiness</b><small>6 of 8 preparation tasks complete.</small></div></div><div class="app-progress"><i style="width:75%"></i></div></div><div class="app-btn">Open today’s tasks</div></div>`,'Home',side);
const reportMock=(side='')=>phoneShell(`<div class="app-header"><div class="app-brand">Daily Report</div><div class="app-avatar">AR</div></div><div class="app-content"><div class="app-title">Today’s work</div><div class="app-sub">Keep your report clear, structured, and reviewable.</div><div class="app-card"><b>Work summary</b><small>Morning care, meal support, mobility assistance.</small></div><div class="app-card"><b>Resident note</b><small>Tanaka-san ate well and completed scheduled mobility support.</small><span class="app-chip">Draft saved</span></div><div class="app-card gold"><b>Review before submit</b><small>Your original input is preserved. You can edit before sending.</small></div><div class="app-btn">Review & submit</div></div>`,'Reports',side);
const assistantMock=(side='')=>phoneShell(`<div class="app-header"><div class="app-brand">Emenda Assistant</div><div class="app-avatar">AI</div></div><div class="app-content"><div class="app-title">Ask Emenda</div><div class="app-sub">One assistant across work and life — with context only when relevant.</div><div class="app-chat"><div class="app-bubble">会社から届いたこの連絡はどういう意味ですか？</div><div class="app-bubble me">Saya jelaskan dalam Bahasa Indonesia. Pesan ini meminta kamu mengonfirmasi jadwal kerja besok.</div><div class="app-source">Source · original company message preserved</div></div></div><div class="app-compose"><span>Ask Emenda...</span><span class="send"></span></div>`,'Assistant',side);
const idMock=(side='')=>phoneShell(`<div class="app-header"><div class="app-brand">My EMENDA ID</div><div class="app-avatar">AR</div></div><div class="app-content"><div class="app-title">Your identity stays with you.</div><div class="app-sub">Portable professional identity across employers, with controlled sharing.</div><div class="app-card soft" style="text-align:center;padding:18px 10px"><div class="app-avatar" style="width:42px;height:42px;margin:0 auto 8px;font-size:10px">AR</div><b style="font-size:10px">Ari Rahman</b><small>EMENDA ID · Verified profile</small><span class="app-chip">Worker-owned</span></div><div class="app-card"><b>Share selected details</b><small>Only permitted identity and professional fields are included.</small></div><div class="app-btn">Show QR</div></div>`,'ID',side);
