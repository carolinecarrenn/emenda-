import { defineSectionCopy } from "@/i18n/copy";
import type {
  AccessContextKey,
  OfflineBlockedKey,
  PackageGroupKey,
  PendingActionKey,
} from "./auditData";

/**
 * Section 09 · Audit & Resilience copy (Figma 759:1304).
 * EN is the Figma text verbatim; `{token}` placeholders receive mock counts.
 */
export interface AuditCopy {
  tiles: {
    records: string;
    workers: string;
    formats: string;
    privacy: string;
    period: string;
    facility: string;
    dataScope: string;
    pending: string;
  };
  export: {
    title: string;
    subtitle: string;
    privacyEnforced: string;
    scopeHeading: string;
    dateRange: string;
    workerScope: string;
    workerScopeValue: string;
    recordTypes: string;
    recordTypesValue: string;
    packageEstimate: string;
    packageEstimateValue: string;
    includedExcludedTitle: string;
    includedLine: string;
    excludedLine: string;
    checklistTitle: string;
    checklistItems: string[];
    cta: string;
    footnote: string;
  };
  confirm: {
    title: string;
    subtitle: string;
    contentsHeading: string;
    groupLabels: Record<PackageGroupKey, string>;
    groupValues: Record<PackageGroupKey, string>;
    excludedTitle: string;
    excludedBody: string;
    confirmTitle: string;
    confirmBody: string;
    confirmCta: string;
    backCta: string;
    footnote: string;
  };
  ready: {
    title: string;
    subtitle: string;
    chip: string;
    packageTitle: string;
    packageMeta: string;
    summaryHeading: string;
    summaryLabels: Record<PackageGroupKey, string>;
    summaryValues: Record<PackageGroupKey, string>;
    privacyTitle: string;
    privacyBody: string;
    prototypeTitle: string;
    prototypeBody: string;
    downloadCta: string;
    backCta: string;
  };
  failed: {
    title: string;
    subtitle: string;
    chip: string;
    failureTitle: string;
    failureBody: string;
    preservedTitle: string;
    preservedFacility: string;
    preservedPeriod: string;
    retryTitle: string;
    retryBody: string;
    retryCta: string;
    backCta: string;
    footnote: string;
  };
  offline: {
    title: string;
    subtitle: string;
    chip: string;
    facilityValue: string;
    workersValue: string;
    pendingValue: string;
    dataScopeValue: string;
    readOnlyTitle: string;
    readOnlyBody: string;
    unavailableHeading: string;
    blocked: Record<OfflineBlockedKey, string>;
    noSilentWritesTitle: string;
    noSilentWritesBody: string;
    retryCta: string;
  };
  reconnected: {
    title: string;
    subtitle: string;
    chip: string;
    contextTitle: string;
    contextBody: string;
    pendingHeading: string;
    actionLabels: Record<PendingActionKey, string>;
    actionStatuses: Record<PendingActionKey, string>;
    actionCaptions: Record<PendingActionKey, string>;
    ruleTitle: string;
    ruleBody: string;
    continueCta: string;
    reviewCta: string;
  };
  restricted: {
    title: string;
    subtitle: string;
    deniedLabel: string;
    summaryTitle: string;
    summaryBody: string;
    contextHeading: string;
    contextLabels: Record<AccessContextKey, string>;
    accessScopeValue: string;
    requiredTitle: string;
    requiredItems: string[];
    boundaryTitle: string;
    boundaryBody: string;
  };
}

export const AUDIT_COPY = defineSectionCopy<AuditCopy>({
  en: {
    tiles: {
      records: "RECORDS",
      workers: "WORKERS",
      formats: "FORMATS",
      privacy: "PRIVACY",
      period: "PERIOD",
      facility: "FACILITY",
      dataScope: "DATA SCOPE",
      pending: "PENDING",
    },
    export: {
      title: "Audit Export",
      subtitle:
        "Prototype evidence package · permitted operational records only",
      privacyEnforced: "Enforced",
      scopeHeading: "EXPORT SCOPE",
      dateRange: "Date range",
      workerScope: "Worker scope",
      workerScopeValue: "{lead} + {count} workers",
      recordTypes: "Record types",
      recordTypesValue: "Communication · Reports · Follow-up · Support",
      packageEstimate: "Package estimate",
      packageEstimateValue: "{count} permitted operational records",
      includedExcludedTitle: "INCLUDED / EXCLUDED",
      includedLine:
        "Included: operational communication · reports · follow-up · permitted admin",
      excludedLine:
        "Excluded: Health · Stress · Life · family/private data · private eCoin",
      checklistTitle: "REVIEW BEFORE GENERATE",
      checklistItems: [
        "Organization / facility confirmed",
        "Worker scope reviewed · record types reviewed",
        "Private-data exclusions enforced",
      ],
      cta: "Review & generate export",
      footnote: "Prototype only · no production backend file is generated.",
    },
    confirm: {
      title: "Export Confirmation",
      subtitle:
        "Review the audit evidence package before generating prototype export",
      contentsHeading: "PACKAGE CONTENTS",
      groupLabels: {
        communication: "Communication",
        dailyReports: "Daily Reports",
        followUp: "Follow-up",
        support: "Support",
      },
      groupValues: {
        communication: "{count} permitted messages / translations",
        dailyReports: "{submitted} submitted + {missing} missing status",
        followUp: "{count} reviewed follow-up records",
        support: "{count} manager support records",
      },
      excludedTitle: "EXCLUDED BY DESIGN",
      excludedBody:
        "Health · Stress · Life · family/private worker data · emergency contacts · private eCoin",
      confirmTitle: "CONFIRM EXPORT",
      confirmBody:
        "Scope and privacy exclusions confirmed · prototype limitation understood",
      confirmCta: "Confirm Export",
      backCta: "Back to Audit Export",
      footnote: "Operational Report and Audit Export remain separate.",
    },
    ready: {
      title: "Export Ready",
      subtitle: "Mock audit evidence package ready",
      chip: "Ready",
      packageTitle: "Audit evidence package ready",
      packageMeta: "{records} records · {workers} workers · {formats} · prototype",
      summaryHeading: "PACKAGE SUMMARY",
      summaryLabels: {
        communication: "Communication",
        dailyReports: "Daily Reports",
        followUp: "Follow-up",
        support: "Support / admin",
      },
      summaryValues: {
        communication: "{count} records",
        dailyReports: "{submitted} + {missing} status records",
        followUp: "{count} reviewed records",
        support: "{count} permitted records",
      },
      privacyTitle: "PRIVACY-SAFE PACKAGE",
      privacyBody:
        "Private Health / Stress / Life / family data / private eCoin remain excluded.",
      prototypeTitle: "PROTOTYPE STATE",
      prototypeBody:
        "Mock file only · no production export backend is claimed.",
      downloadCta: "Download Demo",
      backCta: "Back to Audit Export",
    },
    failed: {
      title: "Audit Export Failed",
      subtitle: "Evidence package was not generated · scope remains saved",
      chip: "Failed",
      failureTitle: "Export could not be prepared",
      failureBody:
        "No file was generated. Selected worker scope, record types, and privacy exclusions remain saved.",
      preservedTitle: "CONFIGURATION PRESERVED",
      preservedFacility: "Facility: {facility}",
      preservedPeriod: "Period: {period} · {workers} workers · {records} records",
      retryTitle: "SAFE RETRY",
      retryBody:
        "Re-check facility scope and connectivity before retrying. Do not show a success state until export is confirmed.",
      retryCta: "Try Again",
      backCta: "Back to Audit Export",
      footnote: "No success state or file record is created on failure.",
    },
    offline: {
      title: "Offline · Read-only",
      subtitle: "Cached operational context is viewable; writes are disabled",
      chip: "Offline",
      facilityValue: "Care Facility",
      workersValue: "{count} cached",
      pendingValue: "{count} actions",
      dataScopeValue: "Operational",
      readOnlyTitle: "READ-ONLY MODE",
      readOnlyBody:
        "Previously loaded operational information may be reviewed. Private data remains excluded.",
      unavailableHeading: "UNAVAILABLE WHILE OFFLINE",
      blocked: {
        sendMessage: "Send Message",
        saveSettings: "Save Settings",
        generateOperationalReport: "Generate Operational Report",
        generateAuditExport: "Generate Audit Export",
        resolveFollowUp: "Resolve Follow-up",
      },
      noSilentWritesTitle: "NO SILENT WRITES",
      noSilentWritesBody:
        "Do not claim send/save/export success until action is confirmed after reconnection.",
      retryCta: "Retry Connection",
    },
    reconnected: {
      title: "Connection restored",
      subtitle:
        "Pending Manager actions were revalidated against current facility context",
      chip: "Back online",
      contextTitle: "{facility} confirmed",
      contextBody:
        "Original organization / facility context preserved for pending actions.",
      pendingHeading: "PENDING ACTION REVIEW",
      actionLabels: {
        followUpDraft: "Follow-up draft",
        settingsChanges: "Settings changes",
        reportGeneration: "Report generation",
      },
      actionStatuses: {
        followUpDraft: "Ready to send",
        settingsChanges: "Ready to save",
        reportGeneration: "Needs fresh data check",
      },
      actionCaptions: {
        followUpDraft: "Facility context revalidated.",
        settingsChanges: "Facility context revalidated.",
        reportGeneration: "Revalidate source data before generating.",
      },
      ruleTitle: "REVALIDATION RULE",
      ruleBody:
        "Pending actions never auto-complete after reconnect. Manager confirms each action in current context.",
      continueCta: "Continue to Dashboard",
      reviewCta: "Review Pending Actions",
    },
    restricted: {
      title: "Permission Restricted",
      subtitle:
        "Manager action blocked safely · current role/facility scope preserved",
      deniedLabel: "ACCESS DENIED SAFELY",
      summaryTitle: "This action is not available to this Manager role",
      summaryBody:
        "Do not reveal additional worker or facility data while explaining the restriction.",
      contextHeading: "CURRENT ACCESS CONTEXT",
      contextLabels: {
        managerRole: "Manager role",
        organization: "Organization",
        facility: "Facility",
        accessScope: "Access scope",
      },
      accessScopeValue: "Operational · current facility",
      requiredTitle: "REQUIRED TO CONTINUE",
      requiredItems: [
        "permitted role for this action",
        "matching organization / facility scope",
        "active Manager session",
      ],
      boundaryTitle: "PRIVACY BOUNDARY",
      boundaryBody:
        "Health Log · Stress Check · Life Log · family/private data · private eCoin stay unavailable.",
    },
  },

  id: {
    tiles: {
      records: "CATATAN",
      workers: "PEKERJA",
      formats: "FORMAT",
      privacy: "PRIVASI",
      period: "PERIODE",
      facility: "FASILITAS",
      dataScope: "CAKUPAN DATA",
      pending: "TERTUNDA",
    },
    export: {
      title: "Ekspor Audit",
      subtitle:
        "Paket bukti prototipe · hanya catatan operasional yang diizinkan",
      privacyEnforced: "Diterapkan",
      scopeHeading: "CAKUPAN EKSPOR",
      dateRange: "Rentang tanggal",
      workerScope: "Cakupan pekerja",
      workerScopeValue: "{lead} + {count} pekerja",
      recordTypes: "Jenis catatan",
      recordTypesValue: "Komunikasi · Laporan · Tindak Lanjut · Dukungan",
      packageEstimate: "Perkiraan paket",
      packageEstimateValue: "{count} catatan operasional yang diizinkan",
      includedExcludedTitle: "TERMASUK / DIKECUALIKAN",
      includedLine:
        "Termasuk: komunikasi operasional · laporan · tindak lanjut · admin yang diizinkan",
      excludedLine:
        "Dikecualikan: Kesehatan · Stres · Kehidupan · data keluarga/pribadi · eCoin pribadi",
      checklistTitle: "TINJAU SEBELUM MEMBUAT",
      checklistItems: [
        "Organisasi / fasilitas dikonfirmasi",
        "Cakupan pekerja ditinjau · jenis catatan ditinjau",
        "Pengecualian data pribadi diterapkan",
      ],
      cta: "Tinjau & buat ekspor",
      footnote:
        "Hanya prototipe · tidak ada file backend produksi yang dihasilkan.",
    },
    confirm: {
      title: "Konfirmasi Ekspor",
      subtitle:
        "Tinjau paket bukti audit sebelum membuat ekspor prototipe",
      contentsHeading: "ISI PAKET",
      groupLabels: {
        communication: "Komunikasi",
        dailyReports: "Laporan Harian",
        followUp: "Tindak Lanjut",
        support: "Dukungan",
      },
      groupValues: {
        communication: "{count} pesan / terjemahan yang diizinkan",
        dailyReports: "{submitted} terkirim + {missing} status belum ada",
        followUp: "{count} catatan tindak lanjut yang ditinjau",
        support: "{count} catatan dukungan manajer",
      },
      excludedTitle: "DIKECUALIKAN SECARA DESAIN",
      excludedBody:
        "Kesehatan · Stres · Kehidupan · data pekerja keluarga/pribadi · kontak darurat · eCoin pribadi",
      confirmTitle: "KONFIRMASI EKSPOR",
      confirmBody:
        "Cakupan dan pengecualian privasi dikonfirmasi · keterbatasan prototipe dipahami",
      confirmCta: "Konfirmasi Ekspor",
      backCta: "Kembali ke Ekspor Audit",
      footnote: "Laporan Operasional dan Ekspor Audit tetap terpisah.",
    },
    ready: {
      title: "Ekspor Siap",
      subtitle: "Paket bukti audit tiruan siap",
      chip: "Siap",
      packageTitle: "Paket bukti audit siap",
      packageMeta:
        "{records} catatan · {workers} pekerja · {formats} · prototipe",
      summaryHeading: "RINGKASAN PAKET",
      summaryLabels: {
        communication: "Komunikasi",
        dailyReports: "Laporan Harian",
        followUp: "Tindak Lanjut",
        support: "Dukungan / admin",
      },
      summaryValues: {
        communication: "{count} catatan",
        dailyReports: "{submitted} + {missing} catatan status",
        followUp: "{count} catatan ditinjau",
        support: "{count} catatan diizinkan",
      },
      privacyTitle: "PAKET AMAN PRIVASI",
      privacyBody:
        "Kesehatan / Stres / Kehidupan / data keluarga / eCoin pribadi tetap dikecualikan.",
      prototypeTitle: "STATUS PROTOTIPE",
      prototypeBody:
        "Hanya file tiruan · tidak ada klaim backend ekspor produksi.",
      downloadCta: "Unduh Demo",
      backCta: "Kembali ke Ekspor Audit",
    },
    failed: {
      title: "Ekspor Audit Gagal",
      subtitle: "Paket bukti tidak dibuat · cakupan tetap tersimpan",
      chip: "Gagal",
      failureTitle: "Ekspor tidak dapat disiapkan",
      failureBody:
        "Tidak ada file yang dibuat. Cakupan pekerja, jenis catatan, dan pengecualian privasi yang dipilih tetap tersimpan.",
      preservedTitle: "KONFIGURASI DIPERTAHANKAN",
      preservedFacility: "Fasilitas: {facility}",
      preservedPeriod:
        "Periode: {period} · {workers} pekerja · {records} catatan",
      retryTitle: "COBA LAGI DENGAN AMAN",
      retryBody:
        "Periksa ulang cakupan fasilitas dan koneksi sebelum mencoba lagi. Jangan tampilkan status berhasil sampai ekspor dikonfirmasi.",
      retryCta: "Coba Lagi",
      backCta: "Kembali ke Ekspor Audit",
      footnote:
        "Tidak ada status berhasil atau catatan file yang dibuat saat gagal.",
    },
    offline: {
      title: "Luring · Hanya baca",
      subtitle:
        "Konteks operasional tersimpan dapat dilihat; penulisan dinonaktifkan",
      chip: "Luring",
      facilityValue: "Fasilitas Perawatan",
      workersValue: "{count} tersimpan",
      pendingValue: "{count} tindakan",
      dataScopeValue: "Operasional",
      readOnlyTitle: "MODE HANYA BACA",
      readOnlyBody:
        "Informasi operasional yang sudah dimuat dapat ditinjau. Data pribadi tetap dikecualikan.",
      unavailableHeading: "TIDAK TERSEDIA SAAT LURING",
      blocked: {
        sendMessage: "Kirim Pesan",
        saveSettings: "Simpan Pengaturan",
        generateOperationalReport: "Buat Laporan Operasional",
        generateAuditExport: "Buat Ekspor Audit",
        resolveFollowUp: "Selesaikan Tindak Lanjut",
      },
      noSilentWritesTitle: "TANPA PENULISAN DIAM-DIAM",
      noSilentWritesBody:
        "Jangan klaim kirim/simpan/ekspor berhasil sampai tindakan dikonfirmasi setelah tersambung kembali.",
      retryCta: "Coba Sambungkan Lagi",
    },
    reconnected: {
      title: "Koneksi pulih",
      subtitle:
        "Tindakan Manajer yang tertunda divalidasi ulang terhadap konteks fasilitas saat ini",
      chip: "Kembali daring",
      contextTitle: "{facility} dikonfirmasi",
      contextBody:
        "Konteks organisasi / fasilitas asli dipertahankan untuk tindakan yang tertunda.",
      pendingHeading: "TINJAUAN TINDAKAN TERTUNDA",
      actionLabels: {
        followUpDraft: "Draf tindak lanjut",
        settingsChanges: "Perubahan pengaturan",
        reportGeneration: "Pembuatan laporan",
      },
      actionStatuses: {
        followUpDraft: "Siap dikirim",
        settingsChanges: "Siap disimpan",
        reportGeneration: "Perlu pemeriksaan data terbaru",
      },
      actionCaptions: {
        followUpDraft: "Konteks fasilitas divalidasi ulang.",
        settingsChanges: "Konteks fasilitas divalidasi ulang.",
        reportGeneration: "Validasi ulang data sumber sebelum membuat.",
      },
      ruleTitle: "ATURAN VALIDASI ULANG",
      ruleBody:
        "Tindakan tertunda tidak pernah selesai otomatis setelah tersambung kembali. Manajer mengonfirmasi setiap tindakan dalam konteks saat ini.",
      continueCta: "Lanjut ke Dasbor",
      reviewCta: "Tinjau Tindakan Tertunda",
    },
    restricted: {
      title: "Izin Dibatasi",
      subtitle:
        "Tindakan Manajer diblokir dengan aman · cakupan peran/fasilitas saat ini dipertahankan",
      deniedLabel: "AKSES DITOLAK DENGAN AMAN",
      summaryTitle: "Tindakan ini tidak tersedia untuk peran Manajer ini",
      summaryBody:
        "Jangan ungkapkan data pekerja atau fasilitas tambahan saat menjelaskan pembatasan.",
      contextHeading: "KONTEKS AKSES SAAT INI",
      contextLabels: {
        managerRole: "Peran manajer",
        organization: "Organisasi",
        facility: "Fasilitas",
        accessScope: "Cakupan akses",
      },
      accessScopeValue: "Operasional · fasilitas saat ini",
      requiredTitle: "DIPERLUKAN UNTUK MELANJUTKAN",
      requiredItems: [
        "peran yang diizinkan untuk tindakan ini",
        "cakupan organisasi / fasilitas yang cocok",
        "sesi Manajer yang aktif",
      ],
      boundaryTitle: "BATAS PRIVASI",
      boundaryBody:
        "Log Kesehatan · Cek Stres · Log Kehidupan · data keluarga/pribadi · eCoin pribadi tetap tidak tersedia.",
    },
  },

  ja: {
    tiles: {
      records: "レコード",
      workers: "ワーカー",
      formats: "フォーマット",
      privacy: "プライバシー",
      period: "期間",
      facility: "施設",
      dataScope: "データ範囲",
      pending: "保留",
    },
    export: {
      title: "監査エクスポート",
      subtitle: "プロトタイプ証跡パッケージ · 許可された業務記録のみ",
      privacyEnforced: "適用済み",
      scopeHeading: "エクスポート範囲",
      dateRange: "期間",
      workerScope: "ワーカー範囲",
      workerScopeValue: "{lead} + 他{count}名のワーカー",
      recordTypes: "記録種別",
      recordTypesValue:
        "コミュニケーション · レポート · フォローアップ · サポート",
      packageEstimate: "パッケージ見込み",
      packageEstimateValue: "許可された業務記録 {count} 件",
      includedExcludedTitle: "含む / 除外",
      includedLine:
        "含む: 業務コミュニケーション · レポート · フォローアップ · 許可された管理情報",
      excludedLine:
        "除外: 健康 · ストレス · ライフ · 家族/私的データ · プライベートeCoin",
      checklistTitle: "生成前の確認",
      checklistItems: [
        "組織 / 施設を確認済み",
        "ワーカー範囲を確認 · 記録種別を確認",
        "私的データの除外を適用済み",
      ],
      cta: "確認してエクスポートを生成",
      footnote:
        "プロトタイプのみ · 本番バックエンドのファイルは生成されません。",
    },
    confirm: {
      title: "エクスポート確認",
      subtitle:
        "プロトタイプエクスポートを生成する前に監査証跡パッケージを確認してください",
      contentsHeading: "パッケージ内容",
      groupLabels: {
        communication: "コミュニケーション",
        dailyReports: "デイリーレポート",
        followUp: "フォローアップ",
        support: "サポート",
      },
      groupValues: {
        communication: "許可されたメッセージ / 翻訳 {count} 件",
        dailyReports: "提出済み {submitted} 件 + 未提出ステータス {missing} 件",
        followUp: "確認済みフォローアップ記録 {count} 件",
        support: "管理者サポート記録 {count} 件",
      },
      excludedTitle: "設計上の除外",
      excludedBody:
        "健康 · ストレス · ライフ · 家族/私的なワーカーデータ · 緊急連絡先 · プライベートeCoin",
      confirmTitle: "エクスポートの確認",
      confirmBody:
        "範囲とプライバシー除外を確認済み · プロトタイプの制約を理解済み",
      confirmCta: "エクスポートを確定",
      backCta: "監査エクスポートに戻る",
      footnote: "業務レポートと監査エクスポートは分離されたままです。",
    },
    ready: {
      title: "エクスポート準備完了",
      subtitle: "モック監査証跡パッケージの準備が完了しました",
      chip: "準備完了",
      packageTitle: "監査証跡パッケージ準備完了",
      packageMeta:
        "{records} レコード · {workers} 名のワーカー · {formats} · プロトタイプ",
      summaryHeading: "パッケージ概要",
      summaryLabels: {
        communication: "コミュニケーション",
        dailyReports: "デイリーレポート",
        followUp: "フォローアップ",
        support: "サポート / 管理",
      },
      summaryValues: {
        communication: "{count} レコード",
        dailyReports: "{submitted} + ステータス {missing} レコード",
        followUp: "確認済み {count} レコード",
        support: "許可された {count} レコード",
      },
      privacyTitle: "プライバシー保護パッケージ",
      privacyBody:
        "プライベートな健康 / ストレス / ライフ / 家族データ / プライベートeCoin は除外されたままです。",
      prototypeTitle: "プロトタイプ状態",
      prototypeBody:
        "モックファイルのみ · 本番エクスポートのバックエンドは主張しません。",
      downloadCta: "デモをダウンロード",
      backCta: "監査エクスポートに戻る",
    },
    failed: {
      title: "監査エクスポート失敗",
      subtitle: "証跡パッケージは生成されていません · 範囲は保存されたままです",
      chip: "失敗",
      failureTitle: "エクスポートを準備できませんでした",
      failureBody:
        "ファイルは生成されていません。選択したワーカー範囲、記録種別、プライバシー除外は保存されたままです。",
      preservedTitle: "設定は保持されています",
      preservedFacility: "施設: {facility}",
      preservedPeriod:
        "期間: {period} · {workers} 名のワーカー · {records} レコード",
      retryTitle: "安全な再試行",
      retryBody:
        "再試行する前に施設範囲と接続状況を確認してください。エクスポートが確認されるまで成功状態を表示しないでください。",
      retryCta: "再試行",
      backCta: "監査エクスポートに戻る",
      footnote: "失敗時に成功状態やファイル記録は作成されません。",
    },
    offline: {
      title: "オフライン · 読み取り専用",
      subtitle: "キャッシュされた業務情報は閲覧できます。書き込みは無効です",
      chip: "オフライン",
      facilityValue: "介護施設",
      workersValue: "{count} 名キャッシュ済み",
      pendingValue: "{count} 件の操作",
      dataScopeValue: "業務",
      readOnlyTitle: "読み取り専用モード",
      readOnlyBody:
        "以前に読み込まれた業務情報は確認できます。私的データは除外されたままです。",
      unavailableHeading: "オフライン時は利用不可",
      blocked: {
        sendMessage: "メッセージ送信",
        saveSettings: "設定の保存",
        generateOperationalReport: "業務レポートの生成",
        generateAuditExport: "監査エクスポートの生成",
        resolveFollowUp: "フォローアップの解決",
      },
      noSilentWritesTitle: "サイレント書き込みの禁止",
      noSilentWritesBody:
        "再接続後に操作が確認されるまで、送信/保存/エクスポートの成功を主張しないでください。",
      retryCta: "接続を再試行",
    },
    reconnected: {
      title: "接続が回復しました",
      subtitle:
        "保留中のマネージャー操作は現在の施設コンテキストに対して再検証されました",
      chip: "オンラインに復帰",
      contextTitle: "{facility} を確認しました",
      contextBody:
        "保留中の操作について、元の組織 / 施設コンテキストが保持されています。",
      pendingHeading: "保留中の操作の確認",
      actionLabels: {
        followUpDraft: "フォローアップの下書き",
        settingsChanges: "設定の変更",
        reportGeneration: "レポートの生成",
      },
      actionStatuses: {
        followUpDraft: "送信可能",
        settingsChanges: "保存可能",
        reportGeneration: "最新データの確認が必要",
      },
      actionCaptions: {
        followUpDraft: "施設コンテキストを再検証しました。",
        settingsChanges: "施設コンテキストを再検証しました。",
        reportGeneration: "生成前にソースデータを再検証してください。",
      },
      ruleTitle: "再検証ルール",
      ruleBody:
        "保留中の操作は再接続後に自動完了しません。マネージャーが現在のコンテキストで各操作を確認します。",
      continueCta: "ダッシュボードへ進む",
      reviewCta: "保留中の操作を確認",
    },
    restricted: {
      title: "権限が制限されています",
      subtitle:
        "マネージャー操作は安全にブロックされました · 現在の役割/施設範囲は保持されています",
      deniedLabel: "安全にアクセスを拒否しました",
      summaryTitle: "この操作はこのマネージャー役割では利用できません",
      summaryBody:
        "制限を説明する際に、追加のワーカーまたは施設データを開示しないでください。",
      contextHeading: "現在のアクセスコンテキスト",
      contextLabels: {
        managerRole: "マネージャー役割",
        organization: "組織",
        facility: "施設",
        accessScope: "アクセス範囲",
      },
      accessScopeValue: "業務 · 現在の施設",
      requiredTitle: "続行に必要な条件",
      requiredItems: [
        "この操作に許可された役割",
        "一致する組織 / 施設範囲",
        "有効なマネージャーセッション",
      ],
      boundaryTitle: "プライバシー境界",
      boundaryBody:
        "健康ログ · ストレスチェック · ライフログ · 家族/私的データ · プライベートeCoin は引き続き利用できません。",
    },
  },
});
