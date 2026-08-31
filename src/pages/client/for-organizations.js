/* for-organizations  —  PAGES.solutionsOrg
   Merged from 2 original layers (lines 1720, 2237). */
PAGES.solutionsOrg=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">Solutions / For Organizations</span>
  <h1>Control, governance, and evidence across the workforce journey.</h1>
  <p>Organizations need more than message exchange. They need a coherent operating layer that supports role-based visibility, structured records, governance, and scalable workflows across teams.</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Where organizations fit</span>
  <h2>Emenda supports both field operations and support structures.</h2>
  <div class="grid g3" style="margin-top:34px">
    ${[['Receiving companies','Improve operational clarity for multilingual workforces and reduce fragmentation across chat, paper, and phone.'],['Self-support transition','Support organizations moving away from heavy external support outsourcing with more internal operational visibility.'],['Governance and oversight','Keep role control, auditability, and evidence structured as workflows scale.']].map(([t,p])=>`<div class="card reveal"><h3>${t}</h3><p>${p}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">Organization capabilities</span>
  <h2>What organizations need beyond daily messaging.</h2>
  <div class="grid g4" style="margin-top:30px">${[['Roles & permissions','Control who can see, review, or manage what.','lock'],['Operational evidence','Retain records that support accountability and review.','shield'],['Configuration','Adapt content, procedures, and workflows by organization and use case.','gear'],['History','Keep a durable trail of reports, communication, and outcomes.','clip']].map(([t,p,i])=>`<div class="card reveal">${ic(i)}<h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">Implementation posture</span>
  <h2>Adopt the operating layer in stages.</h2>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><h3>Start with a high-friction workflow</h3><p>For example: multilingual daily reports, structured communication, or the worker support process where visibility breaks down most today.</p></div>
    <div class="card reveal"><h3>Then expand deliberately</h3><p>Add more modules, AI assistance, and organization controls as process fit and internal ownership become clear.</p></div>
  </div>
  <p class="source-note">Business model, pricing, and rollout specifics should still be validated per segment and proposal. This page focuses on the operational value the organization receives.</p>
</div></section>
<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Organization operating model','Model operasional organisasi','組織運用モデル')}</span>
  <h2>${L('Governance must scale without turning the worker into an opaque managed object.','Governance harus scalable tanpa menjadikan worker sekadar managed object yang opaque.','ガバナンスを拡張しながら、労働者を不透明な管理対象にしない設計。')}</h2>
  <div class="deep-grid">
    <div class="deep-card"><div class="num">ACCESS</div><h3>${L('Role & permission model','Model role & permission','権限モデル')}</h3><p>${L('Define who can view, verify, configure, administer, or audit each category of information.','Menentukan siapa yang boleh melihat, verify, configure, administer, atau audit setiap kategori informasi.','誰が閲覧・承認・設定・管理・監査できるかを定義。')}</p></div>
    <div class="deep-card"><div class="num">CONFIG</div><h3>${L('Templates & organization rules','Template & aturan organisasi','テンプレート・組織ルール')}</h3><p>${L('Adapt report templates, knowledge, workflows, and organization settings without changing the core identity model.','Menyesuaikan report template, knowledge, workflow, dan setting organisasi tanpa mengubah core identity model.','IDモデルを変えずに報告テンプレート・ナレッジ・ワークフローを設定。')}</p></div>
    <div class="deep-card"><div class="num">GOVERN</div><h3>${L('Company Admin & Super Admin','Company Admin & Super Admin','企業管理者・全体管理者')}</h3><p>${L('Company Admin manages company operations, users, and templates; Super Admin provides platform governance, system configuration, and multi-tenant oversight.','Company Admin mengelola operasional perusahaan, user, dan template; Super Admin mengontrol tata kelola platform, konfigurasi sistem, dan pengawasan multi-tenant.','Company Adminは自社運用・ユーザー・テンプレートを管理し、Super Adminはプラットフォームガバナンス・システム設定・全体を統括します。')}</p></div>
    <div class="deep-card"><div class="num">AUDIT</div><h3>${L('Evidence & history','Evidence & history','証跡・履歴')}</h3><p>${L('Retain timestamps, verification, decisions, status transitions, and supporting evidence.','Menyimpan timestamp, verification, decision, state transition, dan supporting evidence.','時刻、承認、判断、状態遷移、証跡を保持。')}</p></div>
    <div class="deep-card"><div class="num">PRIVACY</div><h3>${L('Worker-private boundaries','Batas worker-private','労働者プライベート境界')}</h3><p>${L('Organization access is not automatic access to every worker data category; purpose and permission still matter.','Akses organisasi bukan berarti akses otomatis ke semua kategori data worker; purpose dan permission tetap berlaku.','組織だから全データを閲覧できるわけではなく、目的・権限を適用します。')}</p></div>
    <div class="deep-card"><div class="num">SCALE</div><h3>${L('Pilot → repeatable rollout','Pilot → rollout berulang','PoC→再現可能な展開')}</h3><p>${L('Start with one high-friction workflow, validate operational fit, then expand modules and integrations deliberately.','Mulai dari satu workflow dengan friction tinggi, validasi operational fit, lalu perluas modul dan integration secara bertahap.','課題の大きい1ワークフローから始め、適合を検証して段階的に拡張。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Implementation path','Jalur implementasi','導入プロセス')}</span>
  <h2>${L('A seven-step path from current-state mapping to rollout.','Tujuh langkah dari pemetaan kondisi saat ini sampai rollout.','現状把握から展開まで7ステップ。')}</h2>
  <div class="flow-rail">
    <div><span class="n">01–02</span><b>${L('Discovery & fit-gap','Discovery & fit-gap','現状・ギャップ分析')}</b><p>${L('Map current chat, paper, reporting, ownership, and support processes.','Petakan chat, paper, reporting, ownership, dan support process saat ini.','現行チャット、紙、報告、担当、支援プロセスを整理。')}</p></div>
    <div><span class="n">03–04</span><b>${L('Configure & connect','Configure & connect','設定・連携')}</b><p>${L('Set roles, templates, knowledge, workflow rules, and required integration boundaries.','Set role, template, knowledge, workflow rule, dan integration boundary yang dibutuhkan.','権限、テンプレート、ナレッジ、連携境界を設定。')}</p></div>
    <div><span class="n">05–06</span><b>${L('Pilot & evaluate','Pilot & evaluate','PoC・評価')}</b><p>${L('Run a controlled workflow and measure usage, completion, follow-up quality, and operational friction.','Jalankan workflow terkontrol dan ukur usage, completion, follow-up quality, dan operational friction.','利用、完了、フォロー品質、運用負荷を評価。')}</p></div>
    <div><span class="n">07</span><b>${L('Rollout','Rollout','展開')}</b><p>${L('Expand only after the organization has clear ownership, support, and governance.','Perluas setelah organisasi memiliki ownership, support, dan governance yang jelas.','責任・支援・ガバナンスが明確になった後に展開。')}</p></div>
  </div>
</div></section>`;
