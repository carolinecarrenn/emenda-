/* implementation  —  PAGES.implementation
   Merged from 1 original layer (line 2594). */
PAGES.implementation=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Resources / Implementation','Resources / Implementasi','リソース / 導入')}</span>
  <h1>${L('From current-state mapping to a repeatable rollout.','Dari pemetaan kondisi saat ini sampai rollout yang repeatable.','現状把握から再現可能なrolloutまで。')}</h1>
  <p>${L('Implementation should begin with a real workflow, not a generic software rollout. Emenda’s research plan measures the trigger, channel, handoff, time, exception, ownership, and outcome before deciding what to automate or replace.','Implementasi dimulai dari workflow nyata, bukan generic software rollout. Research plan Emenda mengukur trigger, channel, handoff, waktu, exception, ownership, dan outcome sebelum memutuskan apa yang diotomasi atau diganti.','導入はgenericなsoftware rolloutではなく実際のworkflowから始めます。trigger、channel、handoff、時間、exception、ownership、outcomeを測定してから置換・自動化を判断します。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Seven-step implementation','Tujuh langkah implementasi','7ステップ導入')}</span>
  <h2>${L('A controlled path from evidence to scale.','Jalur terkontrol dari evidence sampai scale.','evidenceからscaleまで段階的に。')}</h2>
  ${[
    ['01',L('Discovery','Discovery','Discovery'),L('Observe the current workflow: chat, paper, calls, spreadsheets, SOPs, and real handoffs.','Observasi current workflow: chat, paper, call, spreadsheet, SOP, dan handoff nyata.','chat・紙・電話・spreadsheet・SOP・handoffの現状観察。'),L('Output: current-state map, actors, pain points, measurable baseline.','Output: current-state map, actor, pain point, measurable baseline.','Output：current-state map、actor、pain point、baseline。')],
    ['02',L('Fit-gap','Fit-gap','Fit-gap'),L('Map current tasks to Emenda capabilities and identify what must remain outside scope.','Petakan task saat ini ke capability Emenda dan tentukan apa yang tetap di luar scope.','現行taskをEmenda capabilityへmappingし、scope外を明確化。'),L('Output: MVP scope, exceptions, integration needs, privacy constraints.','Output: MVP scope, exception, integration need, privacy constraint.','Output：MVP scope、exception、integration、privacy。')],
    ['03',L('Configuration','Configuration','Configuration'),L('Configure roles, report templates, languages, organization settings, knowledge, and permissions.','Konfigurasi role, report template, bahasa, organization setting, knowledge, dan permission.','role、report template、言語、組織設定、knowledge、permissionを設定。'),L('Output: pilot-ready organization and workflow.','Output: organisasi dan workflow siap pilot.','Output：pilot-ready環境。')],
    ['04',L('Integration','Integration','Integration'),L('Connect only the existing systems needed to avoid duplicate work in the pilot.','Hubungkan hanya existing system yang dibutuhkan untuk mencegah duplicate work di pilot.','pilotで必要な既存systemのみ接続。'),L('Output: tested data boundary and fallback procedure.','Output: data boundary dan fallback procedure yang teruji.','Output：tested data boundary、fallback。')],
    ['05',L('Pilot','Pilot','Pilot'),L('Run one high-friction workflow with a controlled user group and instrument events from day one.','Jalankan satu workflow dengan friction tinggi pada kelompok user terkontrol dan instrument event sejak hari pertama.','frictionの高い1workflowを限定userで実施し、初日からevent計測。'),L('Output: usage, completion, response, misunderstanding, follow-up, and outcome data.','Output: data usage, completion, response, misunderstanding, follow-up, dan outcome.','Output：usage、completion、response、misunderstanding、follow-up、outcome。')],
    ['06',L('Evaluation','Evaluation','Evaluation'),L('Compare the pilot with baseline and determine what changed operationally, not only what users said they liked.','Bandingkan pilot dengan baseline dan tentukan perubahan operasional, bukan hanya apa yang user bilang mereka suka.','baselineと比較し、好みではなく運用変化を評価。'),L('Output: continue / revise / stop decisions per workflow.','Output: keputusan continue / revise / stop per workflow.','Output：workflowごとのcontinue/revise/stop。')],
    ['07',L('Rollout','Rollout','Rollout'),L('Expand sites, roles, modules, and integrations only after ownership, support, and governance are proven.','Perluas site, role, module, dan integration setelah ownership, support, dan governance terbukti.','ownership・support・governance確認後にsite/role/module/integration拡張。'),L('Output: repeatable operating model and deployment standard.','Output: operating model dan deployment standard yang repeatable.','Output：repeatable operating model、deployment standard。')]
  ].map(([n,t,p,o])=>`<div class="step-detail"><div class="sdn">${n}</div><div><h3>${t}</h3><p>${p}</p></div><div><p><strong style="color:var(--ink)">${o}</strong></p></div></div>`).join('')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Pilot evidence','Evidence pilot','Pilot evidence')}</span>
  <h2>${L('Measure behavior, not feature preference.','Ukur behavior, bukan sekadar feature preference.','feature preferenceではなくbehaviorを測定。')}</h2>
  <div class="kpi-grid">
    ${[
      ['WORKER',L('Report completion','Report completion','Report completion'),L('Can the worker submit today’s report without assistance and understand who will read it?','Apakah worker dapat submit today’s report tanpa bantuan dan paham siapa yang membacanya?','workerが支援なしで日報を提出し閲覧者を理解できるか。')],
      ['WORKER',L('Clarification confidence','Clarification confidence','Clarification confidence'),L('Can the worker state that they do not understand and read original vs translation correctly?','Apakah worker dapat menyatakan tidak paham dan membaca original vs translation dengan benar?','不明点を伝えoriginal/translationを正しく理解できるか。')],
      ['MANAGER',L('Time to first action','Time to first action','Time to first action'),L('Can a manager identify who needs attention without long exploration?','Apakah manager dapat menemukan siapa yang butuh perhatian tanpa eksplorasi panjang?','管理者が要対応者を迅速に特定できるか。')],
      ['MANAGER',L('Close follow-up','Close follow-up','Close follow-up'),L('Can a manager close a follow-up and explain what was recorded?','Apakah manager dapat close follow-up dan menjelaskan apa yang tercatat?','follow-upをcloseし記録内容を説明できるか。')],
      ['ORG',L('Manual aggregation effort','Manual aggregation effort','Manual aggregation effort'),L('How many hours per month are spent aggregating worker communication/reporting today?','Berapa jam per bulan yang dihabiskan untuk agregasi komunikasi/reporting worker saat ini?','現在worker communication/reporting集計に月何時間かかるか。')],
      ['SYSTEM',L('Outcome traceability','Outcome traceability','Outcome traceability'),L('Can the team reconstruct the issue, owner, action, and outcome without opening another channel?','Apakah tim dapat reconstruct issue, owner, action, dan outcome tanpa membuka channel lain?','別channelを開かずissue・owner・action・outcomeを再構築できるか。')]
    ].map(([k,t,p])=>`<div class="kpi-card"><span class="kpi">${k}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>
${detailedCTA()}`;
