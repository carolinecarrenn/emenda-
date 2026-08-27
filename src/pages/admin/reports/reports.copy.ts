import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Reports Oversight area.
 *
 * Figma frames (file IZZYiAlNAdYAAcX2z5AtOm, page 06 · Company Admin
 * Experience, 1182:5690):
 *   AD-04  Reports Oversight — Queue        1223:1317  → base screen
 *   AD-04B Report Detail & Actions          1226:96    → ?state=detail
 *   AD-04C Report Resolution Flow           1226:2775  → ?state=flow
 *   AD-04D Report Detailed States           1239:353   → ?state=assign-owner
 *                                                        ?state=request-evidence
 *                                                        ?state=outcome
 *
 * EN is Figma-verbatim; ID/JA are faithful translations. `{token}` slots are
 * filled with raw record data from reports.mock.ts.
 */

interface FlowDetailCopy {
  label: string;
  value: string;
}

interface FlowStepCopy {
  title: string;
  subtitle: string;
  details: readonly [FlowDetailCopy, FlowDetailCopy, FlowDetailCopy];
}

export interface AdminreportsCopy {
  /** AD-04 screen intro row (1223:1593). */
  intro: {
    title: string;
    subtitle: string;
    exportQueue: string;
    openReport: string;
  };
  /** AD-04 filter bar (1223:1600). */
  filters: {
    groupLabel: string;
    searchLabel: string;
    searchPlaceholder: string;
    allStatus: string;
    open: string;
    needFollowUp: string;
    resolved: string;
    highPriority: string;
  };
  /** AD-04 "Report queue" table (1223:1613). */
  queue: {
    title: string;
    subtitle: string;
    columns: {
      report: string;
      reporter: string;
      type: string;
      priority: string;
      owner: string;
      sla: string;
    };
    /** Em dash drawn for a report with no owner. */
    noOwner: string;
    open: string;
    /** "Open {id}" — accessible name for the per-row button. */
    openReport: string;
    sla: {
      /** "Overdue {days}d" */
      overdueDays: string;
      /** "{hours}h left" */
      hoursLeft: string;
      /** "{days}d left" */
      daysLeft: string;
      resolved: string;
    };
  };
  /** Priority pill labels shared by the queue, distribution and detail. */
  priority: {
    high: string;
    medium: string;
    low: string;
  };
  /** AD-04 stat pair (1223:1664 / 1223:1670). */
  stats: {
    openLabel: string;
    /** "{count} need follow-up" */
    openCaption: string;
    resolvedLabel: string;
    resolvedCaption: string;
  };
  /** AD-04 "Priority distribution" (1223:1676). */
  distribution: {
    title: string;
    subtitle: string;
    /** "{count} open" */
    openCount: string;
  };
  /** AD-04 "Selected report" (1223:1688). */
  selected: {
    title: string;
    /** "{id} quick summary" */
    subtitle: string;
    issue: string;
    reporter: string;
    owner: string;
    nextAction: string;
    unassigned: string;
    nextActionValue: string;
    openDetail: string;
    assignOwner: string;
  };
  /** Navigation between the queue and the AD-04B/C/D state boards. */
  boards: {
    back: string;
    lifecycle: string;
  };
  /** AD-04B Report Detail & Actions (1226:96). */
  detail: {
    eyebrow: string;
    title: string;
    description: string;
    /** "{id} · {issue}" */
    heading: string;
    needFollowUp: string;
    /** "Reporter: {name} · {team}" */
    reporterLine: string;
    summary: string;
    owner: string;
    created: string;
    sla: string;
    evidence: string;
    unassigned: string;
    /** "{date} · {time}" */
    createdValue: string;
    /** "{hours} hours remaining" */
    slaValue: string;
    /** "{attachments} attachments · {conversations} conversation reference" */
    evidenceValue: string;
    history: {
      title: string;
      created: string;
      managerNotified: string;
      evidenceAdded: string;
    };
    assignOwner: string;
    requestEvidence: string;
    markResolved: string;
  };
  /** AD-04C Report Resolution Flow (1226:2775). */
  flow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly [
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
    ];
    rule: string;
  };
  /** AD-04D board heading (1239:354 – 1239:356). */
  states: {
    eyebrow: string;
    title: string;
    description: string;
    cancel: string;
  };
  /** AD-04D "Assign report owner" (1239:357). */
  assign: {
    pill: string;
    title: string;
    subtitle: string;
    report: string;
    /** "{id} · {issue} · {priority}" */
    reportValue: string;
    currentOwner: string;
    unassigned: string;
    newOwner: string;
    sla: string;
    /** "{hours} hours remaining · unchanged by assignment" */
    slaValue: string;
    noteTitle: string;
    noteBody: string;
    submit: string;
    footnote: string;
  };
  /** AD-04D "Request evidence" (1239:382). */
  evidence: {
    pill: string;
    title: string;
    subtitle: string;
    requestTo: string;
    /** "Reporter · {name}" */
    requestToValue: string;
    evidenceNeeded: string;
    dueBy: string;
    message: string;
    submit: string;
    noteTitle: string;
    noteBody: string;
    footnote: string;
  };
  /** AD-04D "Resolve / reopen report" (1239:407). */
  outcome: {
    pill: string;
    title: string;
    subtitle: string;
    outcome: string;
    outcomeValue: string;
    summary: string;
    evidence: string;
    /** "{count} attachments · manager confirmation" */
    evidenceValue: string;
    reporterFollowUp: string;
    reporterFollowUpValue: string;
    keepOpen: string;
    submit: string;
    noteTitle: string;
    noteBody: string;
    footnote: string;
  };
}

export const ADMINREPORTS_COPY = defineSectionCopy<AdminreportsCopy>({
  en: {
    intro: {
      title: "Track company reports from intake to close",
      subtitle: "Prioritize by status, owner, and SLA",
      exportQueue: "Export queue",
      openReport: "Open report",
    },
    filters: {
      groupLabel: "Filter reports by status",
      searchLabel: "Search reports",
      searchPlaceholder: "Search report ID, employee, keyword",
      allStatus: "All status",
      open: "Open",
      needFollowUp: "Need follow-up",
      resolved: "Resolved",
      highPriority: "High priority",
    },
    queue: {
      title: "Report queue",
      subtitle: "Company-wide reports and resolution tracking",
      columns: {
        report: "Report",
        reporter: "Reporter",
        type: "Type",
        priority: "Priority",
        owner: "Owner",
        sla: "SLA",
      },
      noOwner: "—",
      open: "Open",
      openReport: "Open {id}",
      sla: {
        overdueDays: "Overdue {days}d",
        hoursLeft: "{hours}h left",
        daysLeft: "{days}d left",
        resolved: "Resolved",
      },
    },
    priority: { high: "High", medium: "Medium", low: "Low" },
    stats: {
      openLabel: "Open",
      openCaption: "{count} need follow-up",
      resolvedLabel: "Resolved",
      resolvedCaption: "this month",
    },
    distribution: {
      title: "Priority distribution",
      subtitle: "Current open report mix",
      openCount: "{count} open",
    },
    selected: {
      title: "Selected report",
      subtitle: "{id} quick summary",
      issue: "Issue",
      reporter: "Reporter",
      owner: "Owner",
      nextAction: "Next action",
      unassigned: "Unassigned",
      nextActionValue: "Assign manager and start follow-up",
      openDetail: "Open detail",
      assignOwner: "Assign owner",
    },
    boards: {
      back: "Back to report queue",
      lifecycle: "Report lifecycle",
    },
    detail: {
      eyebrow: "INTERACTION STATES",
      title: "Report detail",
      description:
        "Company Admin can inspect context, assign ownership, and close with evidence.",
      heading: "{id} · {issue}",
      needFollowUp: "Need follow-up",
      reporterLine: "Reporter: {name} · {team}",
      summary: "Summary",
      owner: "Owner",
      created: "Created",
      sla: "SLA",
      evidence: "Evidence",
      unassigned: "Unassigned",
      createdValue: "{date} · {time}",
      slaValue: "{hours} hours remaining",
      evidenceValue:
        "{attachments} attachments · {conversations} conversation reference",
      history: {
        title: "Resolution history",
        created: "Report created",
        managerNotified: "Manager notification sent",
        evidenceAdded: "Reporter added evidence",
      },
      assignOwner: "Assign owner",
      requestEvidence: "Request evidence",
      markResolved: "Mark resolved",
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Report lifecycle: intake → owner → evidence → outcome",
      description:
        "Admin oversees the company lifecycle without silently changing report state.",
      steps: [
        {
          title: "Report enters queue",
          subtitle: "New report is visible",
          details: [
            { label: "Status", value: "New / Open" },
            { label: "Priority", value: "Low / Medium / High" },
            { label: "Context", value: "Reporter, team, manager, SLA" },
          ],
        },
        {
          title: "Open report detail",
          subtitle: "Inspect facts before acting",
          details: [
            { label: "Review", value: "Issue + history + evidence" },
            { label: "Privacy", value: "Only company-authorized data" },
            {
              label: "Decision",
              value: "Assign, request evidence, or follow up",
            },
          ],
        },
        {
          title: "Assign owner",
          subtitle: "Make responsibility explicit",
          details: [
            { label: "Owner", value: "Manager / responsible operator" },
            { label: "Due/SLA", value: "Keep existing SLA visible" },
            { label: "Audit", value: "Record previous → new owner" },
          ],
        },
        {
          title: "Follow-up & evidence",
          subtitle: "Collect what is needed",
          details: [
            { label: "Request evidence", value: "Creates next action" },
            { label: "Responses", value: "Append to report history" },
            { label: "No progress", value: "Escalate through AD-05" },
          ],
        },
        {
          title: "Outcome & resolution",
          subtitle: "Close only with explicit outcome",
          details: [
            {
              label: "Outcome",
              value: "Resolved / Not resolved / Need help",
            },
            { label: "Evidence", value: "Required when configured" },
            { label: "Reopen", value: "If outcome changes or issue returns" },
          ],
        },
      ],
      rule: "Report status, outcome, helpfulness, and task state remain independent; closing requires an explicit outcome.",
    },
    states: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Reports — owner, evidence, explicit outcome, reopen",
      description:
        "The complete resolution path now includes all inputs and consequences required to safely close a report.",
      cancel: "Cancel",
    },
    assign: {
      pill: "ASSIGN OWNER",
      title: "Assign report owner",
      subtitle: "Make responsibility explicit",
      report: "Report",
      reportValue: "{id} · {issue} · {priority}",
      currentOwner: "Current owner",
      unassigned: "Unassigned",
      newOwner: "New owner *",
      sla: "SLA",
      slaValue: "{hours} hours remaining · unchanged by assignment",
      noteTitle: "Impact",
      noteBody:
        "Owner change updates report detail, follow-up board, dashboard attention queue, and audit.",
      submit: "Assign owner",
      footnote: "If assignment fails, preserve selected owner and show retry.",
    },
    evidence: {
      pill: "EVIDENCE",
      title: "Request evidence",
      subtitle: "Create a concrete next action",
      requestTo: "Request to *",
      requestToValue: "Reporter · {name}",
      evidenceNeeded: "Evidence needed *",
      dueBy: "Due by",
      message: "Message",
      submit: "Send request",
      noteTitle: "After send",
      noteBody:
        "Report remains open; next action is visible and response will append to report history.",
      footnote: "Evidence request never silently marks the report resolved.",
    },
    outcome: {
      pill: "OUTCOME",
      title: "Resolve / reopen report",
      subtitle: "Closure requires explicit outcome and configured evidence",
      outcome: "Outcome *",
      outcomeValue: "Resolved / Not resolved / Need help",
      summary: "Resolution summary *",
      evidence: "Evidence *",
      evidenceValue: "{count} attachments · manager confirmation",
      reporterFollowUp: "Reporter follow-up",
      reporterFollowUpValue: "Notify reporter after closure · enabled",
      keepOpen: "Keep open",
      submit: "Mark resolved",
      noteTitle: "Reopen path",
      noteBody:
        "If issue returns or outcome changes, reopen creates a new state transition while preserving the prior outcome.",
      footnote:
        "Status, outcome, helpfulness, and task state remain independent.",
    },
  },

  id: {
    intro: {
      title: "Lacak laporan perusahaan dari masuk hingga selesai",
      subtitle: "Prioritaskan berdasarkan status, penanggung jawab, dan SLA",
      exportQueue: "Ekspor antrean",
      openReport: "Buka laporan",
    },
    filters: {
      groupLabel: "Saring laporan berdasarkan status",
      searchLabel: "Cari laporan",
      searchPlaceholder: "Cari ID laporan, karyawan, kata kunci",
      allStatus: "Semua status",
      open: "Terbuka",
      needFollowUp: "Perlu tindak lanjut",
      resolved: "Selesai",
      highPriority: "Prioritas tinggi",
    },
    queue: {
      title: "Antrean laporan",
      subtitle: "Laporan seluruh perusahaan dan pelacakan penyelesaian",
      columns: {
        report: "Laporan",
        reporter: "Pelapor",
        type: "Jenis",
        priority: "Prioritas",
        owner: "Penanggung jawab",
        sla: "SLA",
      },
      noOwner: "—",
      open: "Buka",
      openReport: "Buka {id}",
      sla: {
        overdueDays: "Telat {days}h",
        hoursLeft: "Sisa {hours}j",
        daysLeft: "Sisa {days}h",
        resolved: "Selesai",
      },
    },
    priority: { high: "Tinggi", medium: "Sedang", low: "Rendah" },
    stats: {
      openLabel: "Terbuka",
      openCaption: "{count} perlu tindak lanjut",
      resolvedLabel: "Selesai",
      resolvedCaption: "bulan ini",
    },
    distribution: {
      title: "Distribusi prioritas",
      subtitle: "Komposisi laporan terbuka saat ini",
      openCount: "{count} terbuka",
    },
    selected: {
      title: "Laporan terpilih",
      subtitle: "Ringkasan singkat {id}",
      issue: "Masalah",
      reporter: "Pelapor",
      owner: "Penanggung jawab",
      nextAction: "Tindakan berikutnya",
      unassigned: "Belum ditugaskan",
      nextActionValue: "Tugaskan manajer dan mulai tindak lanjut",
      openDetail: "Buka detail",
      assignOwner: "Tetapkan penanggung jawab",
    },
    boards: {
      back: "Kembali ke antrean laporan",
      lifecycle: "Siklus hidup laporan",
    },
    detail: {
      eyebrow: "STATUS INTERAKSI",
      title: "Detail laporan",
      description:
        "Admin Perusahaan dapat memeriksa konteks, menetapkan kepemilikan, dan menutup dengan bukti.",
      heading: "{id} · {issue}",
      needFollowUp: "Perlu tindak lanjut",
      reporterLine: "Pelapor: {name} · {team}",
      summary: "Ringkasan",
      owner: "Penanggung jawab",
      created: "Dibuat",
      sla: "SLA",
      evidence: "Bukti",
      unassigned: "Belum ditugaskan",
      createdValue: "{date} · {time}",
      slaValue: "Sisa {hours} jam",
      evidenceValue:
        "{attachments} lampiran · {conversations} referensi percakapan",
      history: {
        title: "Riwayat penyelesaian",
        created: "Laporan dibuat",
        managerNotified: "Notifikasi manajer terkirim",
        evidenceAdded: "Pelapor menambahkan bukti",
      },
      assignOwner: "Tetapkan penanggung jawab",
      requestEvidence: "Minta bukti",
      markResolved: "Tandai selesai",
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Siklus hidup laporan: masuk → penanggung jawab → bukti → hasil",
      description:
        "Admin mengawasi siklus hidup perusahaan tanpa diam-diam mengubah status laporan.",
      steps: [
        {
          title: "Laporan masuk antrean",
          subtitle: "Laporan baru terlihat",
          details: [
            { label: "Status", value: "Baru / Terbuka" },
            { label: "Prioritas", value: "Rendah / Sedang / Tinggi" },
            { label: "Konteks", value: "Pelapor, tim, manajer, SLA" },
          ],
        },
        {
          title: "Buka detail laporan",
          subtitle: "Periksa fakta sebelum bertindak",
          details: [
            { label: "Tinjau", value: "Masalah + riwayat + bukti" },
            { label: "Privasi", value: "Hanya data yang diizinkan perusahaan" },
            {
              label: "Keputusan",
              value: "Tugaskan, minta bukti, atau tindak lanjuti",
            },
          ],
        },
        {
          title: "Tetapkan penanggung jawab",
          subtitle: "Perjelas tanggung jawab",
          details: [
            {
              label: "Penanggung jawab",
              value: "Manajer / operator yang bertanggung jawab",
            },
            { label: "Tenggat/SLA", value: "Tetap tampilkan SLA yang ada" },
            {
              label: "Audit",
              value: "Catat penanggung jawab lama → baru",
            },
          ],
        },
        {
          title: "Tindak lanjut & bukti",
          subtitle: "Kumpulkan yang dibutuhkan",
          details: [
            { label: "Minta bukti", value: "Membuat tindakan berikutnya" },
            { label: "Tanggapan", value: "Ditambahkan ke riwayat laporan" },
            { label: "Tidak ada kemajuan", value: "Eskalasi melalui AD-05" },
          ],
        },
        {
          title: "Hasil & penyelesaian",
          subtitle: "Tutup hanya dengan hasil yang eksplisit",
          details: [
            {
              label: "Hasil",
              value: "Selesai / Belum selesai / Butuh bantuan",
            },
            { label: "Bukti", value: "Wajib bila dikonfigurasi" },
            {
              label: "Buka kembali",
              value: "Jika hasil berubah atau masalah kembali",
            },
          ],
        },
      ],
      rule: "Status laporan, hasil, kebermanfaatan, dan status tugas tetap independen; penutupan memerlukan hasil yang eksplisit.",
    },
    states: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Laporan — penanggung jawab, bukti, hasil eksplisit, buka kembali",
      description:
        "Jalur penyelesaian lengkap kini mencakup semua masukan dan konsekuensi yang diperlukan untuk menutup laporan dengan aman.",
      cancel: "Batal",
    },
    assign: {
      pill: "TETAPKAN PENANGGUNG JAWAB",
      title: "Tetapkan penanggung jawab laporan",
      subtitle: "Perjelas tanggung jawab",
      report: "Laporan",
      reportValue: "{id} · {issue} · {priority}",
      currentOwner: "Penanggung jawab saat ini",
      unassigned: "Belum ditugaskan",
      newOwner: "Penanggung jawab baru *",
      sla: "SLA",
      slaValue: "Sisa {hours} jam · tidak berubah oleh penugasan",
      noteTitle: "Dampak",
      noteBody:
        "Perubahan penanggung jawab memperbarui detail laporan, papan tindak lanjut, antrean perhatian dasbor, dan audit.",
      submit: "Tetapkan penanggung jawab",
      footnote:
        "Jika penugasan gagal, pertahankan penanggung jawab yang dipilih dan tampilkan opsi coba lagi.",
    },
    evidence: {
      pill: "BUKTI",
      title: "Minta bukti",
      subtitle: "Buat tindakan berikutnya yang konkret",
      requestTo: "Minta kepada *",
      requestToValue: "Pelapor · {name}",
      evidenceNeeded: "Bukti yang dibutuhkan *",
      dueBy: "Tenggat",
      message: "Pesan",
      submit: "Kirim permintaan",
      noteTitle: "Setelah dikirim",
      noteBody:
        "Laporan tetap terbuka; tindakan berikutnya terlihat dan tanggapan akan ditambahkan ke riwayat laporan.",
      footnote:
        "Permintaan bukti tidak pernah diam-diam menandai laporan sebagai selesai.",
    },
    outcome: {
      pill: "HASIL",
      title: "Selesaikan / buka kembali laporan",
      subtitle:
        "Penutupan memerlukan hasil eksplisit dan bukti sesuai konfigurasi",
      outcome: "Hasil *",
      outcomeValue: "Selesai / Belum selesai / Butuh bantuan",
      summary: "Ringkasan penyelesaian *",
      evidence: "Bukti *",
      evidenceValue: "{count} lampiran · konfirmasi manajer",
      reporterFollowUp: "Tindak lanjut pelapor",
      reporterFollowUpValue: "Beri tahu pelapor setelah penutupan · aktif",
      keepOpen: "Biarkan terbuka",
      submit: "Tandai selesai",
      noteTitle: "Jalur buka kembali",
      noteBody:
        "Jika masalah kembali atau hasil berubah, buka kembali akan membuat transisi status baru sambil mempertahankan hasil sebelumnya.",
      footnote:
        "Status, hasil, kebermanfaatan, dan status tugas tetap independen.",
    },
  },

  ja: {
    intro: {
      title: "会社の報告を受付から完了まで追跡",
      subtitle: "ステータス・担当者・SLA で優先順位を決める",
      exportQueue: "キューを書き出す",
      openReport: "レポートを開く",
    },
    filters: {
      groupLabel: "ステータスでレポートを絞り込む",
      searchLabel: "レポートを検索",
      searchPlaceholder: "レポートID・従業員・キーワードを検索",
      allStatus: "すべてのステータス",
      open: "未対応",
      needFollowUp: "要フォローアップ",
      resolved: "解決済み",
      highPriority: "高優先度",
    },
    queue: {
      title: "レポートキュー",
      subtitle: "全社のレポートと解決状況の追跡",
      columns: {
        report: "レポート",
        reporter: "報告者",
        type: "種別",
        priority: "優先度",
        owner: "担当者",
        sla: "SLA",
      },
      noOwner: "—",
      open: "開く",
      openReport: "{id} を開く",
      sla: {
        overdueDays: "{days}日超過",
        hoursLeft: "残り{hours}時間",
        daysLeft: "残り{days}日",
        resolved: "解決済み",
      },
    },
    priority: { high: "高", medium: "中", low: "低" },
    stats: {
      openLabel: "未対応",
      openCaption: "{count}件が要フォローアップ",
      resolvedLabel: "解決済み",
      resolvedCaption: "今月",
    },
    distribution: {
      title: "優先度の内訳",
      subtitle: "現在の未対応レポートの構成",
      openCount: "未対応{count}件",
    },
    selected: {
      title: "選択中のレポート",
      subtitle: "{id} のクイックサマリー",
      issue: "問題",
      reporter: "報告者",
      owner: "担当者",
      nextAction: "次のアクション",
      unassigned: "未割り当て",
      nextActionValue: "マネージャーを割り当ててフォローアップを開始",
      openDetail: "詳細を開く",
      assignOwner: "担当者を割り当てる",
    },
    boards: {
      back: "レポートキューに戻る",
      lifecycle: "レポートのライフサイクル",
    },
    detail: {
      eyebrow: "インタラクション状態",
      title: "レポート詳細",
      description:
        "会社管理者は背景を確認し、担当を割り当て、証拠とともにクローズできます。",
      heading: "{id} · {issue}",
      needFollowUp: "要フォローアップ",
      reporterLine: "報告者: {name} · {team}",
      summary: "概要",
      owner: "担当者",
      created: "作成日時",
      sla: "SLA",
      evidence: "証拠",
      unassigned: "未割り当て",
      createdValue: "{date} · {time}",
      slaValue: "残り{hours}時間",
      evidenceValue: "添付{attachments}件 · 会話参照{conversations}件",
      history: {
        title: "解決履歴",
        created: "レポート作成",
        managerNotified: "マネージャーへ通知送信",
        evidenceAdded: "報告者が証拠を追加",
      },
      assignOwner: "担当者を割り当てる",
      requestEvidence: "証拠を依頼",
      markResolved: "解決済みにする",
    },
    flow: {
      eyebrow: "エンドツーエンドの流れ",
      title: "レポートのライフサイクル: 受付 → 担当者 → 証拠 → 結果",
      description:
        "管理者はレポートの状態を黙って変更することなく、全社のライフサイクルを監督します。",
      steps: [
        {
          title: "レポートがキューに入る",
          subtitle: "新しいレポートが表示される",
          details: [
            { label: "ステータス", value: "新規 / 未対応" },
            { label: "優先度", value: "低 / 中 / 高" },
            { label: "背景", value: "報告者・チーム・マネージャー・SLA" },
          ],
        },
        {
          title: "レポート詳細を開く",
          subtitle: "行動する前に事実を確認",
          details: [
            { label: "確認", value: "問題 + 履歴 + 証拠" },
            { label: "プライバシー", value: "会社が許可したデータのみ" },
            {
              label: "判断",
              value: "割り当て・証拠依頼・フォローアップ",
            },
          ],
        },
        {
          title: "担当者を割り当てる",
          subtitle: "責任を明確にする",
          details: [
            { label: "担当者", value: "マネージャー / 責任担当者" },
            { label: "期限/SLA", value: "既存の SLA を表示したままにする" },
            { label: "監査", value: "旧担当者 → 新担当者を記録" },
          ],
        },
        {
          title: "フォローアップと証拠",
          subtitle: "必要なものを集める",
          details: [
            { label: "証拠を依頼", value: "次のアクションを作成" },
            { label: "回答", value: "レポート履歴に追記" },
            { label: "進展なし", value: "AD-05 でエスカレーション" },
          ],
        },
        {
          title: "結果と解決",
          subtitle: "明示的な結果がある場合のみクローズ",
          details: [
            { label: "結果", value: "解決済み / 未解決 / 要支援" },
            { label: "証拠", value: "設定されている場合は必須" },
            { label: "再オープン", value: "結果が変わる、または問題が再発した場合" },
          ],
        },
      ],
      rule: "レポートのステータス・結果・有用性・タスク状態は互いに独立しており、クローズには明示的な結果が必要です。",
    },
    states: {
      eyebrow: "具体的な運用状態",
      title: "レポート — 担当者・証拠・明示的な結果・再オープン",
      description:
        "完全な解決パスには、レポートを安全にクローズするために必要なすべての入力と影響が含まれます。",
      cancel: "キャンセル",
    },
    assign: {
      pill: "担当者の割り当て",
      title: "レポート担当者を割り当てる",
      subtitle: "責任を明確にする",
      report: "レポート",
      reportValue: "{id} · {issue} · {priority}",
      currentOwner: "現在の担当者",
      unassigned: "未割り当て",
      newOwner: "新しい担当者 *",
      sla: "SLA",
      slaValue: "残り{hours}時間 · 割り当てによって変わりません",
      noteTitle: "影響",
      noteBody:
        "担当者の変更は、レポート詳細・フォローアップボード・ダッシュボードの要対応キュー・監査に反映されます。",
      submit: "担当者を割り当てる",
      footnote:
        "割り当てに失敗した場合は、選択した担当者を保持して再試行を表示します。",
    },
    evidence: {
      pill: "証拠",
      title: "証拠を依頼",
      subtitle: "具体的な次のアクションを作成",
      requestTo: "依頼先 *",
      requestToValue: "報告者 · {name}",
      evidenceNeeded: "必要な証拠 *",
      dueBy: "期限",
      message: "メッセージ",
      submit: "依頼を送信",
      noteTitle: "送信後",
      noteBody:
        "レポートは未対応のままです。次のアクションが表示され、回答はレポート履歴に追記されます。",
      footnote: "証拠の依頼がレポートを黙って解決済みにすることはありません。",
    },
    outcome: {
      pill: "結果",
      title: "レポートの解決 / 再オープン",
      subtitle: "クローズには明示的な結果と設定された証拠が必要です",
      outcome: "結果 *",
      outcomeValue: "解決済み / 未解決 / 要支援",
      summary: "解決サマリー *",
      evidence: "証拠 *",
      evidenceValue: "添付{count}件 · マネージャーの確認",
      reporterFollowUp: "報告者へのフォローアップ",
      reporterFollowUpValue: "クローズ後に報告者へ通知 · 有効",
      keepOpen: "未対応のままにする",
      submit: "解決済みにする",
      noteTitle: "再オープンの経路",
      noteBody:
        "問題が再発したり結果が変わったりした場合、再オープンは以前の結果を保持したまま新しい状態遷移を作成します。",
      footnote: "ステータス・結果・有用性・タスク状態は互いに独立しています。",
    },
  },
});
