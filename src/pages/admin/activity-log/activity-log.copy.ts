import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for Figma page 06 · Company Admin Experience (1182:5690):
 *   AD-08  Activity Log — Audit      (1225:345)
 *   AD-08B Activity Detail States    (1226:1144)
 *   AD-08C Activity Audit Flow       (1226:3880)
 *   AD-08D Activity Detailed States  (1239:669)
 *
 * EN strings are the Figma text verbatim; ID / JA are faithful translations.
 * DATA never passes through this file — person names, team names, report IDs
 * (RPT-xxxx), audit request IDs (ACT-xxxxx), dates, clock times, time zones
 * and counts all stay raw in activity-log.mock.ts and are interpolated into
 * the {placeholders} below.
 *
 * Governance (Figma AD-SCOPE board + the AD-08C flow rule): the audit trail is
 * append-only and company-scoped — no string here offers edit, delete, hide,
 * or any cross-company reach.
 */

export interface FlowDetailCopy {
  label: string;
  value: string;
}

export interface FlowStepCopy {
  title: string;
  subtitle: string;
  details: [FlowDetailCopy, FlowDetailCopy, FlowDetailCopy];
}

export interface ActivityLogCopy {
  /** AD-08 intro row (1225:621). */
  intro: {
    title: string;
    subtitle: string;
    exportLog: string;
    viewDetails: string;
  };
  /** AD-08 filter bar (1225:628 – 1225:640). */
  filters: {
    searchPlaceholder: string;
    all: string;
    people: string;
    reports: string;
    rewards: string;
    settings: string;
  };
  /** AD-08 "Company activity log" card (1225:641). */
  table: {
    title: string;
    /** "Auditable changes inside {org}" */
    subtitle: string;
    columns: {
      action: string;
      actor: string;
      target: string;
      when: string;
    };
    /** Prefix on every "When" cell — "Today 20:12". */
    today: string;
    /** Accessible name of a clickable audit row. */
    openDetail: string;
    exportCsv: string;
    filterByDate: string;
    viewDetails: string;
  };
  /** Action names drawn in the AD-08 "Action" column. */
  actions: {
    managerAssigned: string;
    employeeAccountActivated: string;
    reportReassigned: string;
    rewardRuleUpdated: string;
    companyProfileEdited: string;
    reminderSentToMissingEmployees: string;
  };
  actors: {
    system: string;
  };
  targets: {
    /** "Manager · {team}" */
    managerTeam: string;
    companyRewardPolicy: string;
    /** "{count} employees" */
    employeeCount: string;
  };
  /** AD-08B Activity Detail States (1226:1144). */
  detail: {
    eyebrow: string;
    frameTitle: string;
    frameSubtitle: string;
    title: string;
    labels: {
      actor: string;
      time: string;
      target: string;
      source: string;
      requestId: string;
    };
    /** The actor line reads "{name} · Company Admin". */
    companyAdmin: string;
    change: {
      title: string;
      before: string;
      after: string;
      reason: string;
    };
    fields: {
      owner: string;
      accountStatus: string;
      teamManager: string;
      rewardRule: string;
      companyProfile: string;
      reminderRecipients: string;
    };
    values: {
      unassigned: string;
    };
    reasons: {
      coverageReassignment: string;
    };
    sources: {
      uiAction: string;
      systemEvent: string;
      reportsOversight: string;
    };
    close: string;
    /** AD-08C step 3 — "Open employee/report/policy". */
    open: {
      employee: string;
      report: string;
      policy: string;
    };
  };
  /** AD-08D "No results" note (1239:694), applied to the live table. */
  noResults: {
    title: string;
    body: string;
    resetFilters: string;
  };
  /** AD-08C Activity Audit Flow (1226:3880). */
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: [
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
      FlowStepCopy,
    ];
    rule: string;
  };
  /** AD-08D Activity Detailed States (1239:669). */
  advanced: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: {
      pill: string;
      title: string;
      subtitle: string;
      dateRange: string;
      actor: string;
      managerRole: string;
      category: string;
      target: string;
      targetKinds: string;
      resetFilters: string;
      applyFilters: string;
      footnote: string;
    };
    event: {
      pill: string;
      title: string;
      subtitle: string;
      action: string;
      actorTime: string;
      beforeAfter: string;
      reason: string;
      sourceRequestId: string;
      footnote: string;
    };
    export: {
      pill: string;
      title: string;
      subtitle: string;
      scope: string;
      companyOnly: string;
      range: string;
      currentFilteredResults: string;
      /** "{count} events" */
      eventsCount: string;
      format: string;
      formatValue: string;
      columns: string;
      columnsValue: string;
      privacyTitle: string;
      privacyBody: string;
      cancel: string;
      exportCsv: string;
      footnote: string;
    };
  };
}

export const ACTIVITY_LOG_COPY = defineSectionCopy<ActivityLogCopy>({
  en: {
    intro: {
      title: "Review who changed what and when",
      subtitle: "Company workspace audit trail",
      exportLog: "Export log",
      viewDetails: "View details",
    },
    filters: {
      searchPlaceholder: "Search actor, target, or action",
      all: "All actions",
      people: "People",
      reports: "Reports",
      rewards: "Rewards",
      settings: "Settings",
    },
    table: {
      title: "Company activity log",
      subtitle: "Auditable changes inside {org}",
      columns: {
        action: "Action",
        actor: "Actor",
        target: "Target",
        when: "When",
      },
      today: "Today",
      openDetail: "Open activity detail",
      exportCsv: "Export CSV",
      filterByDate: "Filter by date",
      viewDetails: "View details",
    },
    actions: {
      managerAssigned: "Manager assigned",
      employeeAccountActivated: "Employee account activated",
      reportReassigned: "Report reassigned",
      rewardRuleUpdated: "Reward rule updated",
      companyProfileEdited: "Company profile edited",
      reminderSentToMissingEmployees: "Reminder sent to missing employees",
    },
    actors: { system: "System" },
    targets: {
      managerTeam: "Manager · {team}",
      companyRewardPolicy: "Company reward policy",
      employeeCount: "{count} employees",
    },
    detail: {
      eyebrow: "INTERACTION STATES",
      frameTitle: "Activity detail",
      frameSubtitle: "Inspect one change without leaving the audit trail.",
      title: "Activity detail",
      labels: {
        actor: "Actor",
        time: "Time",
        target: "Target",
        source: "Source",
        requestId: "Request ID",
      },
      companyAdmin: "Company Admin",
      change: {
        title: "Change",
        before: "Before",
        after: "After",
        reason: "Reason",
      },
      fields: {
        owner: "Owner",
        accountStatus: "Account status",
        teamManager: "Team manager",
        rewardRule: "Reward rule",
        companyProfile: "Company profile",
        reminderRecipients: "Reminder recipients",
      },
      values: { unassigned: "Unassigned" },
      reasons: { coverageReassignment: "Coverage reassignment" },
      sources: {
        uiAction: "UI action",
        systemEvent: "System event",
        reportsOversight: "Reports Oversight",
      },
      close: "Close",
      open: {
        employee: "Open employee",
        report: "Open report",
        policy: "Open policy",
      },
    },
    noResults: {
      title: "No results",
      body: "Keep every selected filter visible and offer reset; do not hide the query.",
      resetFilters: "Reset filters",
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Audit trail: filter → inspect → trace source",
      subtitle:
        "Activity Log is append-only visibility for company-scoped actions.",
      steps: [
        {
          title: "Open activity log",
          subtitle: "See chronological company actions",
          details: [
            { label: "Columns", value: "Action / actor / target / time" },
            {
              label: "Categories",
              value: "People / reports / rewards / settings",
            },
            { label: "Scope", value: "This company only" },
          ],
        },
        {
          title: "Filter / search",
          subtitle: "Narrow the audit trail",
          details: [
            { label: "Date", value: "Range filter" },
            { label: "Actor", value: "Admin / manager / system" },
            { label: "Target", value: "Employee / report / policy" },
          ],
        },
        {
          title: "Open event detail",
          subtitle: "Inspect exact change",
          details: [
            { label: "Before / after", value: "Old value → new value" },
            { label: "Reason", value: "When the action required one" },
            { label: "Related object", value: "Open employee/report/policy" },
          ],
        },
        {
          title: "Trace request",
          subtitle: "Use technical reference when needed",
          details: [
            { label: "Request ID", value: "Visible to support/dev" },
            { label: "Source", value: "UI action / system event" },
            { label: "No mutation", value: "Audit detail is read-only" },
          ],
        },
        {
          title: "Export",
          subtitle: "Download filtered company audit",
          details: [
            { label: "Format", value: "CSV" },
            { label: "Respect filters", value: "Only current filtered result" },
            { label: "Privacy", value: "No cross-company records" },
          ],
        },
      ],
      rule: "Company Admin can inspect and export their company audit but cannot alter, delete, or hide audit events.",
    },
    advanced: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Activity Log — advanced filter, event trace, export",
      subtitle:
        "Audit is read-only and sufficiently detailed for support, review, and operational investigation.",
      filters: {
        pill: "FILTER",
        title: "Advanced activity filters",
        subtitle: "Narrow the append-only audit trail",
        dateRange: "Date range",
        actor: "Actor",
        managerRole: "Manager",
        category: "Category",
        target: "Target",
        targetKinds: "employee / team / policy",
        resetFilters: "Reset filters",
        applyFilters: "Apply filters",
        footnote:
          "Filters are retained when opening and closing an event detail.",
      },
      event: {
        pill: "EVENT DETAIL",
        title: "Audit event detail",
        subtitle: "Before/after, reason, source, request ID",
        action: "Action",
        actorTime: "Actor / time",
        beforeAfter: "Before → after",
        reason: "Reason",
        sourceRequestId: "Source / Request ID",
        footnote:
          "Audit detail is read-only; no edit/delete/hide action exists.",
      },
      export: {
        pill: "EXPORT",
        title: "Export audit log",
        subtitle: "Export exactly the filtered company data",
        scope: "Scope",
        companyOnly: "company only",
        range: "Range",
        currentFilteredResults: "Current filtered results",
        eventsCount: "{count} events",
        format: "Format",
        formatValue: "CSV · UTF-8",
        columns: "Columns",
        columnsValue:
          "Timestamp, actor, action, target, before/after, reason, request ID",
        privacyTitle: "Privacy boundary",
        privacyBody:
          "Cross-company and platform events are excluded even if identifiers are known.",
        cancel: "Cancel",
        exportCsv: "Export CSV",
        footnote: "Export action itself is auditable if required by policy.",
      },
    },
  },

  id: {
    intro: {
      title: "Tinjau siapa mengubah apa dan kapan",
      subtitle: "Jejak audit ruang kerja perusahaan",
      exportLog: "Ekspor log",
      viewDetails: "Lihat detail",
    },
    filters: {
      searchPlaceholder: "Cari pelaku, objek, atau tindakan",
      all: "Semua tindakan",
      people: "Orang",
      reports: "Laporan",
      rewards: "Hadiah",
      settings: "Pengaturan",
    },
    table: {
      title: "Log aktivitas perusahaan",
      subtitle: "Perubahan yang dapat diaudit di {org}",
      columns: {
        action: "Tindakan",
        actor: "Pelaku",
        target: "Objek",
        when: "Waktu",
      },
      today: "Hari ini",
      openDetail: "Buka detail aktivitas",
      exportCsv: "Ekspor CSV",
      filterByDate: "Filter menurut tanggal",
      viewDetails: "Lihat detail",
    },
    actions: {
      managerAssigned: "Manajer ditugaskan",
      employeeAccountActivated: "Akun karyawan diaktifkan",
      reportReassigned: "Laporan dialihkan",
      rewardRuleUpdated: "Aturan hadiah diperbarui",
      companyProfileEdited: "Profil perusahaan diubah",
      reminderSentToMissingEmployees:
        "Pengingat dikirim ke karyawan yang belum melapor",
    },
    actors: { system: "Sistem" },
    targets: {
      managerTeam: "Manajer · {team}",
      companyRewardPolicy: "Kebijakan hadiah perusahaan",
      employeeCount: "{count} karyawan",
    },
    detail: {
      eyebrow: "STATUS INTERAKSI",
      frameTitle: "Detail aktivitas",
      frameSubtitle: "Periksa satu perubahan tanpa meninggalkan jejak audit.",
      title: "Detail aktivitas",
      labels: {
        actor: "Pelaku",
        time: "Waktu",
        target: "Objek",
        source: "Sumber",
        requestId: "ID Permintaan",
      },
      companyAdmin: "Admin Perusahaan",
      change: {
        title: "Perubahan",
        before: "Sebelum",
        after: "Sesudah",
        reason: "Alasan",
      },
      fields: {
        owner: "Pemilik",
        accountStatus: "Status akun",
        teamManager: "Manajer tim",
        rewardRule: "Aturan hadiah",
        companyProfile: "Profil perusahaan",
        reminderRecipients: "Penerima pengingat",
      },
      values: { unassigned: "Belum ditugaskan" },
      reasons: { coverageReassignment: "Pengalihan cakupan" },
      sources: {
        uiAction: "Aksi UI",
        systemEvent: "Peristiwa sistem",
        reportsOversight: "Pengawasan Laporan",
      },
      close: "Tutup",
      open: {
        employee: "Buka karyawan",
        report: "Buka laporan",
        policy: "Buka kebijakan",
      },
    },
    noResults: {
      title: "Tidak ada hasil",
      body: "Tetap tampilkan setiap filter yang dipilih dan sediakan atur ulang; jangan sembunyikan kuerinya.",
      resetFilters: "Atur ulang filter",
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Jejak audit: filter → periksa → telusuri sumber",
      subtitle:
        "Log Aktivitas adalah visibilitas append-only untuk tindakan dalam lingkup perusahaan.",
      steps: [
        {
          title: "Buka log aktivitas",
          subtitle: "Lihat tindakan perusahaan secara kronologis",
          details: [
            { label: "Kolom", value: "Tindakan / pelaku / objek / waktu" },
            {
              label: "Kategori",
              value: "Orang / laporan / hadiah / pengaturan",
            },
            { label: "Cakupan", value: "Hanya perusahaan ini" },
          ],
        },
        {
          title: "Filter / cari",
          subtitle: "Persempit jejak audit",
          details: [
            { label: "Tanggal", value: "Filter rentang" },
            { label: "Pelaku", value: "Admin / manajer / sistem" },
            { label: "Objek", value: "Karyawan / laporan / kebijakan" },
          ],
        },
        {
          title: "Buka detail peristiwa",
          subtitle: "Periksa perubahan persisnya",
          details: [
            {
              label: "Sebelum / sesudah",
              value: "Nilai lama → nilai baru",
            },
            { label: "Alasan", value: "Bila tindakan memerlukannya" },
            {
              label: "Objek terkait",
              value: "Buka karyawan/laporan/kebijakan",
            },
          ],
        },
        {
          title: "Telusuri permintaan",
          subtitle: "Gunakan referensi teknis bila diperlukan",
          details: [
            { label: "ID Permintaan", value: "Terlihat oleh support/dev" },
            { label: "Sumber", value: "Aksi UI / peristiwa sistem" },
            { label: "Tanpa mutasi", value: "Detail audit hanya-baca" },
          ],
        },
        {
          title: "Ekspor",
          subtitle: "Unduh audit perusahaan yang terfilter",
          details: [
            { label: "Format", value: "CSV" },
            { label: "Hormati filter", value: "Hanya hasil terfilter saat ini" },
            { label: "Privasi", value: "Tanpa catatan lintas perusahaan" },
          ],
        },
      ],
      rule: "Admin Perusahaan dapat memeriksa dan mengekspor audit perusahaannya, tetapi tidak dapat mengubah, menghapus, atau menyembunyikan peristiwa audit.",
    },
    advanced: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Log Aktivitas — filter lanjutan, telusur peristiwa, ekspor",
      subtitle:
        "Audit bersifat hanya-baca dan cukup rinci untuk support, tinjauan, dan investigasi operasional.",
      filters: {
        pill: "FILTER",
        title: "Filter aktivitas lanjutan",
        subtitle: "Persempit jejak audit append-only",
        dateRange: "Rentang tanggal",
        actor: "Pelaku",
        managerRole: "Manajer",
        category: "Kategori",
        target: "Objek",
        targetKinds: "karyawan / tim / kebijakan",
        resetFilters: "Atur ulang filter",
        applyFilters: "Terapkan filter",
        footnote:
          "Filter dipertahankan saat membuka dan menutup detail peristiwa.",
      },
      event: {
        pill: "DETAIL PERISTIWA",
        title: "Detail peristiwa audit",
        subtitle: "Sebelum/sesudah, alasan, sumber, ID permintaan",
        action: "Tindakan",
        actorTime: "Pelaku / waktu",
        beforeAfter: "Sebelum → sesudah",
        reason: "Alasan",
        sourceRequestId: "Sumber / ID Permintaan",
        footnote:
          "Detail audit hanya-baca; tidak ada aksi ubah/hapus/sembunyikan.",
      },
      export: {
        pill: "EKSPOR",
        title: "Ekspor log audit",
        subtitle: "Ekspor persis data perusahaan yang terfilter",
        scope: "Cakupan",
        companyOnly: "hanya perusahaan",
        range: "Rentang",
        currentFilteredResults: "Hasil terfilter saat ini",
        eventsCount: "{count} peristiwa",
        format: "Format",
        formatValue: "CSV · UTF-8",
        columns: "Kolom",
        columnsValue:
          "Stempel waktu, pelaku, tindakan, objek, sebelum/sesudah, alasan, ID permintaan",
        privacyTitle: "Batas privasi",
        privacyBody:
          "Peristiwa lintas perusahaan dan platform dikecualikan meskipun pengenalnya diketahui.",
        cancel: "Batal",
        exportCsv: "Ekspor CSV",
        footnote:
          "Aksi ekspor itu sendiri dapat diaudit bila kebijakan mengharuskannya.",
      },
    },
  },

  ja: {
    intro: {
      title: "誰が何をいつ変更したかを確認",
      subtitle: "会社ワークスペースの監査証跡",
      exportLog: "ログを書き出す",
      viewDetails: "詳細を表示",
    },
    filters: {
      searchPlaceholder: "実行者・対象・操作を検索",
      all: "すべての操作",
      people: "メンバー",
      reports: "レポート",
      rewards: "リワード",
      settings: "設定",
    },
    table: {
      title: "会社アクティビティログ",
      subtitle: "{org} 内の監査可能な変更",
      columns: {
        action: "操作",
        actor: "実行者",
        target: "対象",
        when: "日時",
      },
      today: "今日",
      openDetail: "アクティビティの詳細を開く",
      exportCsv: "CSVを書き出す",
      filterByDate: "日付で絞り込む",
      viewDetails: "詳細を表示",
    },
    actions: {
      managerAssigned: "マネージャーを割り当て",
      employeeAccountActivated: "従業員アカウントを有効化",
      reportReassigned: "レポートを再割り当て",
      rewardRuleUpdated: "リワードルールを更新",
      companyProfileEdited: "会社プロフィールを編集",
      reminderSentToMissingEmployees: "未提出の従業員にリマインダーを送信",
    },
    actors: { system: "システム" },
    targets: {
      managerTeam: "マネージャー · {team}",
      companyRewardPolicy: "会社のリワードポリシー",
      employeeCount: "従業員{count}名",
    },
    detail: {
      eyebrow: "インタラクション状態",
      frameTitle: "アクティビティ詳細",
      frameSubtitle: "監査証跡から離れずに変更を1件確認できます。",
      title: "アクティビティ詳細",
      labels: {
        actor: "実行者",
        time: "日時",
        target: "対象",
        source: "ソース",
        requestId: "リクエストID",
      },
      companyAdmin: "会社管理者",
      change: {
        title: "変更内容",
        before: "変更前",
        after: "変更後",
        reason: "理由",
      },
      fields: {
        owner: "担当",
        accountStatus: "アカウント状態",
        teamManager: "チームマネージャー",
        rewardRule: "リワードルール",
        companyProfile: "会社プロフィール",
        reminderRecipients: "リマインダー送信先",
      },
      values: { unassigned: "未割り当て" },
      reasons: { coverageReassignment: "担当範囲の再割り当て" },
      sources: {
        uiAction: "UI操作",
        systemEvent: "システムイベント",
        reportsOversight: "レポート監督",
      },
      close: "閉じる",
      open: {
        employee: "従業員を開く",
        report: "レポートを開く",
        policy: "ポリシーを開く",
      },
    },
    noResults: {
      title: "該当なし",
      body: "選択中のフィルターはすべて表示したままリセットを提供し、検索条件を隠さないこと。",
      resetFilters: "フィルターをリセット",
    },
    flow: {
      eyebrow: "エンドツーエンドのフロー",
      title: "監査証跡：絞り込み → 確認 → 発生元の追跡",
      subtitle: "アクティビティログは会社範囲の操作を追記専用で可視化します。",
      steps: [
        {
          title: "アクティビティログを開く",
          subtitle: "会社の操作を時系列で確認",
          details: [
            { label: "列", value: "操作 / 実行者 / 対象 / 時刻" },
            {
              label: "カテゴリ",
              value: "メンバー / レポート / リワード / 設定",
            },
            { label: "範囲", value: "この会社のみ" },
          ],
        },
        {
          title: "絞り込み / 検索",
          subtitle: "監査証跡を絞り込む",
          details: [
            { label: "日付", value: "期間フィルター" },
            { label: "実行者", value: "管理者 / マネージャー / システム" },
            { label: "対象", value: "従業員 / レポート / ポリシー" },
          ],
        },
        {
          title: "イベント詳細を開く",
          subtitle: "変更内容を正確に確認",
          details: [
            { label: "変更前 / 変更後", value: "旧値 → 新値" },
            { label: "理由", value: "操作に理由が必要な場合" },
            {
              label: "関連オブジェクト",
              value: "従業員／レポート／ポリシーを開く",
            },
          ],
        },
        {
          title: "リクエストを追跡",
          subtitle: "必要に応じて技術的な参照を利用",
          details: [
            { label: "リクエストID", value: "サポート／開発者に表示" },
            { label: "ソース", value: "UI操作 / システムイベント" },
            { label: "変更不可", value: "監査詳細は読み取り専用" },
          ],
        },
        {
          title: "エクスポート",
          subtitle: "絞り込んだ会社監査をダウンロード",
          details: [
            { label: "形式", value: "CSV" },
            { label: "フィルターを反映", value: "現在の絞り込み結果のみ" },
            { label: "プライバシー", value: "他社の記録は含まない" },
          ],
        },
      ],
      rule: "会社管理者は自社の監査を確認・書き出しできますが、監査イベントを変更・削除・非表示にすることはできません。",
    },
    advanced: {
      eyebrow: "具体的な運用状態",
      title: "アクティビティログ — 高度な絞り込み・イベント追跡・書き出し",
      subtitle:
        "監査は読み取り専用で、サポート・レビュー・運用調査に十分な詳細を備えています。",
      filters: {
        pill: "フィルター",
        title: "高度なアクティビティフィルター",
        subtitle: "追記専用の監査証跡を絞り込む",
        dateRange: "期間",
        actor: "実行者",
        managerRole: "マネージャー",
        category: "カテゴリ",
        target: "対象",
        targetKinds: "従業員 / チーム / ポリシー",
        resetFilters: "フィルターをリセット",
        applyFilters: "フィルターを適用",
        footnote: "イベント詳細を開閉してもフィルターは保持されます。",
      },
      event: {
        pill: "イベント詳細",
        title: "監査イベントの詳細",
        subtitle: "変更前後・理由・ソース・リクエストID",
        action: "操作",
        actorTime: "実行者 / 日時",
        beforeAfter: "変更前 → 変更後",
        reason: "理由",
        sourceRequestId: "ソース / リクエストID",
        footnote:
          "監査詳細は読み取り専用で、編集・削除・非表示の操作は存在しません。",
      },
      export: {
        pill: "エクスポート",
        title: "監査ログを書き出す",
        subtitle: "絞り込んだ会社データをそのまま書き出します",
        scope: "スコープ",
        companyOnly: "会社のみ",
        range: "対象範囲",
        currentFilteredResults: "現在の絞り込み結果",
        eventsCount: "{count}件のイベント",
        format: "形式",
        formatValue: "CSV · UTF-8",
        columns: "列",
        columnsValue:
          "タイムスタンプ、実行者、操作、対象、変更前後、理由、リクエストID",
        privacyTitle: "プライバシー境界",
        privacyBody:
          "識別子が判明していても、他社およびプラットフォームのイベントは除外されます。",
        cancel: "キャンセル",
        exportCsv: "CSVを書き出す",
        footnote:
          "ポリシーで求められる場合、書き出し操作自体も監査対象になります。",
      },
    },
  },
});
