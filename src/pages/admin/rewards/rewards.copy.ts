import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Rewards & Coin area:
 *   AD-07  (1223:2737) — Rewards & Coin · Rules (the base screen)
 *   AD-07B (1226:1116) — Reward adjustment · interaction states
 *   AD-07C (1226:3785) — Rewards & Coin lifecycle · end-to-end flow
 *   AD-07D (1239:590)  — Rewards detailed states (rule editor / adjust / ledger)
 *
 * EN is Figma-verbatim; ID and JA are faithful translations. Record data
 * (rule names, employee names, reasons, deltas, transaction ids, references)
 * lives in rewards.mock.ts and stays raw in every language.
 */
export interface AdminrewardsCopy {
  /** AD-07 intro row (1223:3013). */
  intro: {
    title: string;
    subtitle: string;
    exportHistory: string;
    manualAdjustment: string;
  };
  /** AD-07 stat cards (1223:3020 → 3038). */
  stats: {
    labels: Record<
      "coinBalance" | "earnedToday" | "adjustedThisMonth" | "flagged",
      string
    >;
    captions: Record<
      "coinBalance" | "earnedToday" | "adjustedThisMonth" | "flagged",
      string
    >;
  };
  /** "{amount} coin" — wraps a signed coin value from the mock. */
  coinAmount: string;
  /** AD-07 "Earning rules" card (1223:3044). */
  earningRules: {
    title: string;
    subtitle: string;
    status: Record<"enabled" | "manual" | "noReward", string>;
    /** Accessible name of a rule row that opens the rule editor. */
    editRuleAction: string;
  };
  /** AD-07 "Adjustment history" card (1223:3072). */
  history: {
    title: string;
    subtitle: string;
    columns: Record<"employee" | "reason" | "delta" | "by", string>;
    viewPolicy: string;
    /** Accessible name of a history row that opens the transaction. */
    openTransactionAction: string;
  };
  /** AD-07B (1226:1116). */
  adjust: {
    eyebrow: string;
    title: string;
    description: string;
    cardTitle: string;
    labels: Record<
      "employee" | "type" | "amount" | "reason" | "reference",
      string
    >;
    types: Record<"add" | "subtract", string>;
    auditTitle: string;
    auditBody: string;
    cancel: string;
    /** "Confirm {amount} coin" */
    confirm: string;
  };
  /** AD-07C (1226:3785). */
  lifecycle: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      title: string;
      subtitle: string;
      details: { label: string; value: string }[];
    }[];
    flowRule: string;
  };
  /** AD-07D (1239:590). */
  detail: {
    eyebrow: string;
    title: string;
    description: string;
    ruleEdit: {
      pill: string;
      title: string;
      subtitle: string;
      labels: Record<
        "rule" | "rewardAmount" | "eligibility" | "effectiveFrom",
        string
      >;
      /** Suffix after the effective date: "· future events only". */
      futureEventsOnly: string;
      noteTitle: string;
      noteBody: string;
      cancel: string;
      save: string;
      footnote: string;
    };
    adjust: {
      pill: string;
      title: string;
      subtitle: string;
      labels: Record<
        "employee" | "typeAmount" | "reason" | "reference",
        string
      >;
      noteTitle: string;
      noteBody: string;
      cancel: string;
      /** "Confirm {amount} coin" */
      confirm: string;
      footnote: string;
    };
    transaction: {
      pill: string;
      title: string;
      subtitle: string;
      labels: Record<
        "transaction" | "employee" | "beforeAfter" | "actorReason" | "reference",
        string
      >;
      /** Kind of the drawn transaction: "TX-88421 · Manual adjustment". */
      kindManualAdjustment: string;
      openEmployee: string;
      viewAudit: string;
      footnote: string;
    };
  };
}

export const ADMINREWARDS_COPY = defineSectionCopy<AdminrewardsCopy>({
  en: {
    intro: {
      title: "Control earning rules and coin adjustments",
      subtitle: "Company-level rewards only",
      exportHistory: "Export history",
      manualAdjustment: "Manual adjustment",
    },
    stats: {
      labels: {
        coinBalance: "Coin balance",
        earnedToday: "Earned today",
        adjustedThisMonth: "Adjusted this month",
        flagged: "Flagged",
      },
      captions: {
        coinBalance: "current company pool",
        earnedToday: "from daily report",
        adjustedThisMonth: "manual changes",
        flagged: "needs review",
      },
    },
    coinAmount: "{amount} coin",
    earningRules: {
      title: "Earning rules",
      subtitle: "Company rules tied to worker actions",
      status: {
        enabled: "Enabled",
        manual: "Manual",
        noReward: "No reward",
      },
      editRuleAction: "Edit earning rule",
    },
    history: {
      title: "Adjustment history",
      subtitle: "Manual company admin coin changes",
      columns: {
        employee: "Employee",
        reason: "Reason",
        delta: "Delta",
        by: "By",
      },
      viewPolicy: "View policy",
      openTransactionAction: "Transaction detail",
    },
    adjust: {
      eyebrow: "INTERACTION STATES",
      title: "Reward adjustment",
      description: "Manual adjustments require a reason and become auditable.",
      cardTitle: "Manual coin adjustment",
      labels: {
        employee: "Employee",
        type: "Adjustment type",
        amount: "Amount",
        reason: "Reason",
        reference: "Reference",
      },
      types: { add: "Add coin", subtract: "Subtract coin" },
      auditTitle: "Audit requirement",
      auditBody:
        "The adjustment, reason, and Admin identity are stored in Activity Log.",
      cancel: "Cancel",
      confirm: "Confirm {amount} coin",
    },
    lifecycle: {
      eyebrow: "END-TO-END FLOW",
      title: "Rewards: rule → earning → adjustment → ledger",
      description:
        "Company Admin manages company reward rules only; global platform economics stay outside this role.",
      steps: [
        {
          title: "Review earning rules",
          subtitle: "See enabled company incentives",
          details: [
            { label: "Examples", value: "Daily report / profile / OJT" },
            { label: "State", value: "Enabled / manual / no reward" },
            { label: "Scope", value: "Company policy only" },
          ],
        },
        {
          title: "Edit rule",
          subtitle: "Change company earning behavior",
          details: [
            { label: "Value", value: "Coin amount" },
            { label: "Eligibility", value: "Trigger and conditions" },
            { label: "Confirmation", value: "Show affected future events" },
          ],
        },
        {
          title: "Automatic earning",
          subtitle: "System applies eligible reward",
          details: [
            { label: "Source", value: "Named event reference" },
            { label: "Ledger", value: "Employee transaction created" },
            { label: "Audit", value: "System actor is recorded" },
          ],
        },
        {
          title: "Manual adjustment",
          subtitle: "Admin adds or subtracts coin",
          details: [
            { label: "Required", value: "Employee + amount + reason" },
            { label: "Reference", value: "Optional report/OJT reference" },
            { label: "Guardrail", value: "Confirm negative adjustments" },
          ],
        },
        {
          title: "Ledger reflects change",
          subtitle: "All balances reconcile",
          details: [
            { label: "Employee", value: "Balance + transaction history" },
            { label: "Admin", value: "Adjustment history" },
            { label: "Activity log", value: "Actor + reason + before/after" },
          ],
        },
      ],
      flowRule:
        "Never silently edit a historical transaction: corrections create a new adjustment transaction with an audit reason.",
    },
    detail: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Rewards & Coin — rule editor, adjustment, ledger detail",
      description:
        "Coin changes are transaction-based, auditable, and protected against silent historical edits.",
      ruleEdit: {
        pill: "RULE EDIT",
        title: "Edit earning rule",
        subtitle: "Change future company reward behavior",
        labels: {
          rule: "Rule",
          rewardAmount: "Reward amount",
          eligibility: "Eligibility",
          effectiveFrom: "Effective from",
        },
        futureEventsOnly: "future events only",
        noteTitle: "Impact preview",
        noteBody:
          "Existing historical transactions are unchanged. Future eligible events use the new amount.",
        cancel: "Cancel",
        save: "Save rule",
        footnote: "Rule update records before/after values in Activity Log.",
      },
      adjust: {
        pill: "ADJUST",
        title: "Manual coin adjustment",
        subtitle: "Add or subtract coin with required business reason",
        labels: {
          employee: "Employee *",
          typeAmount: "Type / amount *",
          reason: "Reason *",
          reference: "Reference",
        },
        noteTitle: "Negative adjustment",
        noteBody:
          "Subtracting coin requires stronger confirmation and shows current → resulting balance.",
        cancel: "Cancel",
        confirm: "Confirm {amount} coin",
        footnote:
          "Success creates a new ledger transaction; it never edits a previous row.",
      },
      transaction: {
        pill: "LEDGER",
        title: "Transaction detail",
        subtitle: "Explain exactly why a balance changed",
        labels: {
          transaction: "Transaction",
          employee: "Employee",
          beforeAfter: "Before → after",
          actorReason: "Actor / reason",
          reference: "Reference",
        },
        kindManualAdjustment: "Manual adjustment",
        openEmployee: "Open employee",
        viewAudit: "View audit",
        footnote:
          "Correction is done by a new compensating adjustment transaction.",
      },
    },
  },

  id: {
    intro: {
      title: "Kendalikan aturan perolehan dan penyesuaian koin",
      subtitle: "Hanya reward tingkat perusahaan",
      exportHistory: "Ekspor riwayat",
      manualAdjustment: "Penyesuaian manual",
    },
    stats: {
      labels: {
        coinBalance: "Saldo koin",
        earnedToday: "Diperoleh hari ini",
        adjustedThisMonth: "Disesuaikan bulan ini",
        flagged: "Ditandai",
      },
      captions: {
        coinBalance: "kumpulan perusahaan saat ini",
        earnedToday: "dari laporan harian",
        adjustedThisMonth: "perubahan manual",
        flagged: "perlu ditinjau",
      },
    },
    coinAmount: "{amount} koin",
    earningRules: {
      title: "Aturan perolehan",
      subtitle: "Aturan perusahaan yang terkait tindakan pekerja",
      status: {
        enabled: "Aktif",
        manual: "Manual",
        noReward: "Tanpa reward",
      },
      editRuleAction: "Ubah aturan perolehan",
    },
    history: {
      title: "Riwayat penyesuaian",
      subtitle: "Perubahan koin manual oleh admin perusahaan",
      columns: {
        employee: "Karyawan",
        reason: "Alasan",
        delta: "Delta",
        by: "Oleh",
      },
      viewPolicy: "Lihat kebijakan",
      openTransactionAction: "Detail transaksi",
    },
    adjust: {
      eyebrow: "STATUS INTERAKSI",
      title: "Penyesuaian reward",
      description:
        "Penyesuaian manual memerlukan alasan dan dapat diaudit.",
      cardTitle: "Penyesuaian koin manual",
      labels: {
        employee: "Karyawan",
        type: "Jenis penyesuaian",
        amount: "Jumlah",
        reason: "Alasan",
        reference: "Referensi",
      },
      types: { add: "Tambah koin", subtract: "Kurangi koin" },
      auditTitle: "Persyaratan audit",
      auditBody:
        "Penyesuaian, alasan, dan identitas Admin disimpan di Log Aktivitas.",
      cancel: "Batal",
      confirm: "Konfirmasi {amount} koin",
    },
    lifecycle: {
      eyebrow: "ALUR MENYELURUH",
      title: "Reward: aturan → perolehan → penyesuaian → buku besar",
      description:
        "Admin Perusahaan hanya mengelola aturan reward perusahaan; ekonomi platform global berada di luar peran ini.",
      steps: [
        {
          title: "Tinjau aturan perolehan",
          subtitle: "Lihat insentif perusahaan yang aktif",
          details: [
            { label: "Contoh", value: "Laporan harian / profil / OJT" },
            { label: "Status", value: "Aktif / manual / tanpa reward" },
            { label: "Cakupan", value: "Hanya kebijakan perusahaan" },
          ],
        },
        {
          title: "Ubah aturan",
          subtitle: "Ubah perilaku perolehan perusahaan",
          details: [
            { label: "Nilai", value: "Jumlah koin" },
            { label: "Kelayakan", value: "Pemicu dan kondisi" },
            {
              label: "Konfirmasi",
              value: "Tampilkan kejadian mendatang yang terpengaruh",
            },
          ],
        },
        {
          title: "Perolehan otomatis",
          subtitle: "Sistem menerapkan reward yang layak",
          details: [
            { label: "Sumber", value: "Referensi kejadian bernama" },
            { label: "Buku besar", value: "Transaksi karyawan dibuat" },
            { label: "Audit", value: "Aktor sistem dicatat" },
          ],
        },
        {
          title: "Penyesuaian manual",
          subtitle: "Admin menambah atau mengurangi koin",
          details: [
            { label: "Wajib", value: "Karyawan + jumlah + alasan" },
            { label: "Referensi", value: "Referensi laporan/OJT opsional" },
            { label: "Pengaman", value: "Konfirmasi penyesuaian negatif" },
          ],
        },
        {
          title: "Buku besar mencerminkan perubahan",
          subtitle: "Semua saldo direkonsiliasi",
          details: [
            { label: "Karyawan", value: "Saldo + riwayat transaksi" },
            { label: "Admin", value: "Riwayat penyesuaian" },
            {
              label: "Log aktivitas",
              value: "Aktor + alasan + sebelum/sesudah",
            },
          ],
        },
      ],
      flowRule:
        "Jangan pernah mengubah transaksi historis secara diam-diam: koreksi membuat transaksi penyesuaian baru dengan alasan audit.",
    },
    detail: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Reward & Koin — editor aturan, penyesuaian, detail buku besar",
      description:
        "Perubahan koin berbasis transaksi, dapat diaudit, dan terlindung dari perubahan historis diam-diam.",
      ruleEdit: {
        pill: "EDIT ATURAN",
        title: "Ubah aturan perolehan",
        subtitle: "Ubah perilaku reward perusahaan ke depan",
        labels: {
          rule: "Aturan",
          rewardAmount: "Jumlah reward",
          eligibility: "Kelayakan",
          effectiveFrom: "Berlaku mulai",
        },
        futureEventsOnly: "hanya kejadian mendatang",
        noteTitle: "Pratinjau dampak",
        noteBody:
          "Transaksi historis yang ada tidak berubah. Kejadian yang memenuhi syarat ke depan memakai jumlah baru.",
        cancel: "Batal",
        save: "Simpan aturan",
        footnote:
          "Pembaruan aturan mencatat nilai sebelum/sesudah di Log Aktivitas.",
      },
      adjust: {
        pill: "SESUAIKAN",
        title: "Penyesuaian koin manual",
        subtitle: "Tambah atau kurangi koin dengan alasan bisnis yang wajib",
        labels: {
          employee: "Karyawan *",
          typeAmount: "Jenis / jumlah *",
          reason: "Alasan *",
          reference: "Referensi",
        },
        noteTitle: "Penyesuaian negatif",
        noteBody:
          "Mengurangi koin memerlukan konfirmasi lebih kuat dan menampilkan saldo saat ini → saldo hasil.",
        cancel: "Batal",
        confirm: "Konfirmasi {amount} koin",
        footnote:
          "Keberhasilan membuat transaksi buku besar baru; tidak pernah mengubah baris sebelumnya.",
      },
      transaction: {
        pill: "BUKU BESAR",
        title: "Detail transaksi",
        subtitle: "Jelaskan secara tepat mengapa saldo berubah",
        labels: {
          transaction: "Transaksi",
          employee: "Karyawan",
          beforeAfter: "Sebelum → sesudah",
          actorReason: "Aktor / alasan",
          reference: "Referensi",
        },
        kindManualAdjustment: "Penyesuaian manual",
        openEmployee: "Buka karyawan",
        viewAudit: "Lihat audit",
        footnote:
          "Koreksi dilakukan melalui transaksi penyesuaian kompensasi baru.",
      },
    },
  },

  ja: {
    intro: {
      title: "獲得ルールとコイン調整を管理",
      subtitle: "会社レベルの報酬のみ",
      exportHistory: "履歴をエクスポート",
      manualAdjustment: "手動調整",
    },
    stats: {
      labels: {
        coinBalance: "コイン残高",
        earnedToday: "本日の獲得",
        adjustedThisMonth: "今月の調整",
        flagged: "フラグ付き",
      },
      captions: {
        coinBalance: "現在の会社プール",
        earnedToday: "日報から",
        adjustedThisMonth: "手動変更",
        flagged: "要確認",
      },
    },
    coinAmount: "{amount} コイン",
    earningRules: {
      title: "獲得ルール",
      subtitle: "作業者の行動に紐づく会社ルール",
      status: {
        enabled: "有効",
        manual: "手動",
        noReward: "報酬なし",
      },
      editRuleAction: "獲得ルールを編集",
    },
    history: {
      title: "調整履歴",
      subtitle: "会社管理者による手動コイン変更",
      columns: {
        employee: "従業員",
        reason: "理由",
        delta: "増減",
        by: "実行者",
      },
      viewPolicy: "ポリシーを見る",
      openTransactionAction: "取引の詳細",
    },
    adjust: {
      eyebrow: "インタラクション状態",
      title: "報酬の調整",
      description: "手動調整には理由が必要で、監査対象になります。",
      cardTitle: "手動コイン調整",
      labels: {
        employee: "従業員",
        type: "調整の種類",
        amount: "数量",
        reason: "理由",
        reference: "参照",
      },
      types: { add: "コインを追加", subtract: "コインを減らす" },
      auditTitle: "監査要件",
      auditBody:
        "調整内容、理由、管理者の情報はアクティビティログに保存されます。",
      cancel: "キャンセル",
      confirm: "{amount} コインを確定",
    },
    lifecycle: {
      eyebrow: "エンドツーエンドのフロー",
      title: "報酬: ルール → 獲得 → 調整 → 台帳",
      description:
        "会社管理者が管理するのは自社の報酬ルールのみで、プラットフォーム全体の経済設計はこの役割の範囲外です。",
      steps: [
        {
          title: "獲得ルールを確認",
          subtitle: "有効な会社インセンティブを見る",
          details: [
            { label: "例", value: "日報 / プロフィール / OJT" },
            { label: "状態", value: "有効 / 手動 / 報酬なし" },
            { label: "範囲", value: "会社ポリシーのみ" },
          ],
        },
        {
          title: "ルールを編集",
          subtitle: "会社の獲得動作を変更",
          details: [
            { label: "値", value: "コイン数" },
            { label: "対象条件", value: "トリガーと条件" },
            { label: "確認", value: "影響する今後のイベントを表示" },
          ],
        },
        {
          title: "自動付与",
          subtitle: "システムが対象の報酬を適用",
          details: [
            { label: "ソース", value: "名前付きイベント参照" },
            { label: "台帳", value: "従業員の取引を作成" },
            { label: "監査", value: "システム実行者を記録" },
          ],
        },
        {
          title: "手動調整",
          subtitle: "管理者がコインを増減",
          details: [
            { label: "必須", value: "従業員 + 数量 + 理由" },
            { label: "参照", value: "任意の日報/OJT参照" },
            { label: "ガードレール", value: "マイナス調整を確認" },
          ],
        },
        {
          title: "台帳に反映",
          subtitle: "すべての残高が一致",
          details: [
            { label: "従業員", value: "残高 + 取引履歴" },
            { label: "管理者", value: "調整履歴" },
            {
              label: "アクティビティログ",
              value: "実行者 + 理由 + 変更前/変更後",
            },
          ],
        },
      ],
      flowRule:
        "過去の取引を黙って書き換えないこと。修正は監査理由を伴う新しい調整取引として作成します。",
    },
    detail: {
      eyebrow: "具体的な運用状態",
      title: "リワード＆コイン — ルールエディタ、調整、台帳詳細",
      description:
        "コインの変更は取引ベースで監査可能であり、過去データの無断編集から保護されます。",
      ruleEdit: {
        pill: "ルール編集",
        title: "獲得ルールを編集",
        subtitle: "今後の会社の報酬動作を変更",
        labels: {
          rule: "ルール",
          rewardAmount: "報酬額",
          eligibility: "対象条件",
          effectiveFrom: "適用開始",
        },
        futureEventsOnly: "今後のイベントのみ",
        noteTitle: "影響のプレビュー",
        noteBody:
          "既存の過去取引は変更されません。今後の対象イベントには新しい金額が適用されます。",
        cancel: "キャンセル",
        save: "ルールを保存",
        footnote:
          "ルールの更新は変更前/変更後の値をアクティビティログに記録します。",
      },
      adjust: {
        pill: "調整",
        title: "手動コイン調整",
        subtitle: "業務上の理由を必須としてコインを増減",
        labels: {
          employee: "従業員 *",
          typeAmount: "種類 / 数量 *",
          reason: "理由 *",
          reference: "参照",
        },
        noteTitle: "マイナス調整",
        noteBody:
          "コインの減算にはより強い確認が必要で、現在の残高 → 変更後の残高を表示します。",
        cancel: "キャンセル",
        confirm: "{amount} コインを確定",
        footnote:
          "成功時は新しい台帳取引を作成し、既存の行を編集することはありません。",
      },
      transaction: {
        pill: "台帳",
        title: "取引の詳細",
        subtitle: "残高が変わった理由を正確に説明",
        labels: {
          transaction: "取引",
          employee: "従業員",
          beforeAfter: "変更前 → 変更後",
          actorReason: "実行者 / 理由",
          reference: "参照",
        },
        kindManualAdjustment: "手動調整",
        openEmployee: "従業員を開く",
        viewAudit: "監査を見る",
        footnote: "修正は新しい相殺調整取引によって行われます。",
      },
    },
  },
});
