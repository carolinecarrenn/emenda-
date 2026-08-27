import { defineSectionCopy } from "@/i18n/copy";

/**
 * Manager 07 · Analytics & Professional Continuity (Figma section 759:1296)
 * plus Manager 11 · Access / Empty Boundaries (759:1312).
 * EN strings are the Figma text verbatim; ID/JA are faithful translations.
 * Record content (titles, descriptions, names, EMENDA IDs) stays raw in
 * analytics.mock.ts and never passes through this file.
 */
export interface AnalyticsCopy {
  units: {
    min: string;
    days: string;
    daysLong: string;
  };
  status: {
    recorded: string;
  };
  analytics: {
    subtitle: string;
    scopes: {
      sevenDays: string;
      thisFacility: string;
      allWorkers: string;
    };
    tiles: {
      d1: string;
      d2: string;
      d4: string;
      d5: string;
    };
    captions: {
      clarification: string;
      confirmed: string;
      messages: string;
      median: string;
    };
    efficiencyTitle: string;
    rows: {
      d6: string;
      d7: string;
      d8: string;
      d9: string;
    };
    valueCases: string;
    valueWorkers: string;
    trendTitle: string;
    trendBody: string;
    trendResponse: {
      improving: string;
      steady: string;
    };
    privacyTitle: string;
    privacyBody: string;
    openReports: string;
    openFollowUp: string;
  };
  continuity: {
    title: string;
    subtitle: string;
    workerOwned: string;
    tenureLine: string;
    tiles: {
      workRecords: string;
      achievements: string;
      certificates: string;
      tenure: string;
    };
    recentWorkLog: string;
    careerAssetsTitle: string;
    careerAssetsSummary: string;
    careerAssetsNote: string;
    openWorkLog: string;
    viewCareerAssets: string;
    viewWorker: string;
    footer: string;
  };
  workLog: {
    title: string;
    subtitle: string;
    currentEmployer: string;
    filters: {
      last30: string;
      allRecords: string;
      allStatuses: string;
    };
    sectionTitle: string;
    sources: {
      dailyReport: string;
      workLog: string;
      managerReview: string;
    };
    accessScopeTitle: string;
    accessScopeBody: string;
    backToContinuity: string;
    footer: string;
    noMatch: string;
  };
  recordDetail: {
    title: string;
    subtitle: string;
    workerOwned: string;
    currentEmployment: string;
    metaLine: string;
    category: string;
    descriptionTitle: string;
    evidenceTitle: string;
    evidenceEvents: {
      shiftActivity: string;
      workerCommunication: string;
      dailyReportSubmitted: string;
      managerReviewRecorded: string;
      handoverCompleted: string;
    };
    verificationTitle: string;
    verificationStatusLine: string;
    verificationRecordedLine: string;
    preservedSource: string;
    backToWorkLog: string;
    viewWorker: string;
    privacyTitle: string;
    privacyBody: string;
    notFound: string;
  };
  careerAssets: {
    title: string;
    subtitle: string;
    workerOwned: string;
    portableLine: string;
    rows: {
      certificates: string;
      skills: string;
      currentRole: string;
      continuity: string;
    };
    valueAvailable: string;
    valueRecords: string;
    valueWorkerOwned: string;
    evidenceTitle: string;
    portabilityTitle: string;
    portabilityBody: string;
    openWorkLog: string;
    viewWorker: string;
  };
  restricted: {
    title: string;
    subtitle: string;
    label: string;
    workerLine: string;
    reasonTitle: string;
    reasonBody: string;
    mayBeRestrictedTitle: string;
    mayBeRestricted: string[];
    requiresTitle: string;
    requires: string[];
    neverTitle: string;
    neverBody: string;
    backToWorker: string;
    backToRecords: string;
  };
  empty: {
    title: string;
    subtitle: string;
    label: string;
    workerLine: string;
    reasonTitle: string;
    reasonIntro: string;
    reasons: string[];
    mayReceiveTitle: string;
    mayReceiveBody: string;
    neverTitle: string;
    neverBody: string;
    footer: string;
    backToWorkerDetail: string;
    reviewAccessScope: string;
  };
}

export const ANALYTICS_COPY = defineSectionCopy<AnalyticsCopy>({
  en: {
    units: { min: "min", days: "d", daysLong: "days" },
    status: { recorded: "Recorded" },
    analytics: {
      subtitle: "Operational metrics · 7-day facility view",
      scopes: {
        sevenDays: "7 days",
        thisFacility: "This facility",
        allWorkers: "All workers",
      },
      tiles: {
        d1: "D1 QUESTIONS",
        d2: "D2 UNDERSTANDING",
        d4: "D4 WORKER-LED",
        d5: "D5 RESPONSE",
      },
      captions: {
        clarification: "clarification",
        confirmed: "confirmed",
        messages: "messages",
        median: "median",
      },
      efficiencyTitle: "EFFICIENCY & RETENTION",
      rows: {
        d6: "D6 Template usage",
        d7: "D7 Rework / double work",
        d8: "D8 Tenure / retention",
        d9: "D9 Follow-up signal",
      },
      valueCases: "{count} cases",
      valueWorkers: "{count} workers",
      trendTitle: "7-DAY OPERATIONAL TREND",
      trendBody: "Report rate {reportRate} · worker-led {workerLed} · {response}",
      trendResponse: {
        improving: "response improving",
        steady: "response steady",
      },
      privacyTitle: "PRIVACY BOUNDARY",
      privacyBody:
        "No individual Health / Stress / Life data appears in analytics.",
      openReports: "Open Reports",
      openFollowUp: "Open Follow-up",
    },
    continuity: {
      title: "Professional Continuity",
      subtitle: "Career / work records",
      workerOwned: "Worker-Owned",
      tenureLine: "{employer} · {count} {days}",
      tiles: {
        workRecords: "WORK RECORDS",
        achievements: "ACHIEVEMENTS",
        certificates: "CERTIFICATES",
        tenure: "TENURE",
      },
      recentWorkLog: "RECENT WORK LOG",
      careerAssetsTitle: "CAREER ASSETS",
      careerAssetsSummary:
        "{certificates} work certificates · {skills} skills / achievements · continuity active",
      careerAssetsNote:
        "Professional assets remain associated with the worker across employer changes.",
      openWorkLog: "Open Work Log",
      viewCareerAssets: "View Career Assets",
      viewWorker: "View Worker",
      footer:
        "Employer sees permitted professional/employment records only. Private Health / Stress / Life / eCoin remain excluded.",
    },
    workLog: {
      title: "Worker Work Log",
      subtitle: "Permitted professional records",
      currentEmployer: "Current employer · {facility}",
      filters: {
        last30: "Last 30 days",
        allRecords: "All records",
        allStatuses: "All statuses",
      },
      sectionTitle: "WORK LOG",
      sources: {
        dailyReport: "Daily Report",
        workLog: "Work Log",
        managerReview: "Manager review",
      },
      accessScopeTitle: "ACCESS SCOPE",
      accessScopeBody:
        "Only permitted professional records for the active employment relationship.",
      backToContinuity: "Back to Continuity",
      footer: "Private Health / Stress / Life / eCoin records never appear here.",
      noMatch: "No records match this filter.",
    },
    recordDetail: {
      title: "Work Log Detail",
      subtitle: "Source + verification",
      workerOwned: "Worker-Owned",
      currentEmployment: "{facility} · Current employment",
      metaLine: "{date} · {source} · {category}",
      category: "Work Activity",
      descriptionTitle: "DESCRIPTION",
      evidenceTitle: "PROFESSIONAL EVIDENCE",
      evidenceEvents: {
        shiftActivity: "Shift activity recorded",
        workerCommunication: "Worker communication",
        dailyReportSubmitted: "Daily Report submitted",
        managerReviewRecorded: "Manager review recorded",
        handoverCompleted: "Handover completed",
      },
      verificationTitle: "VERIFICATION & SOURCE",
      verificationStatusLine: "Status: {status} · Source: {source}",
      verificationRecordedLine: "Recorded by: {name} · Evidence: {evidence}",
      preservedSource: "Preserved source",
      backToWorkLog: "Back to Work Log",
      viewWorker: "View Worker",
      privacyTitle: "PRIVACY BOUNDARY",
      privacyBody:
        "No private Health / Stress / Life / eCoin information is attached.",
      notFound: "Record not found",
    },
    careerAssets: {
      title: "Career Assets",
      subtitle:
        "Worker-owned professional assets · employer-visible permitted scope",
      workerOwned: "Worker-Owned",
      portableLine: "Portable professional record · current employer scope",
      rows: {
        certificates: "Work certificates",
        skills: "Skills / achievements",
        currentRole: "Current role",
        continuity: "Career continuity",
      },
      valueAvailable: "{count} available",
      valueRecords: "{count} records",
      valueWorkerOwned: "Worker-owned",
      evidenceTitle: "VERIFIED PROFESSIONAL EVIDENCE",
      portabilityTitle: "PORTABILITY RULE",
      portabilityBody:
        "Professional assets remain associated with the worker across employer changes.",
      openWorkLog: "Open Work Log",
      viewWorker: "View Worker",
    },
    restricted: {
      title: "Professional Records Access",
      subtitle:
        "Restricted · worker-approved professional sharing or active employment scope required",
      label: "ACCESS RESTRICTED",
      workerLine: "Worker-owned identity · current employer: {employer}",
      reasonTitle: "Professional records are unavailable",
      reasonBody:
        "No active worker-approved sharing scope is available for this employer.",
      mayBeRestrictedTitle: "ACCESS MAY BE RESTRICTED WHEN",
      mayBeRestricted: [
        "sharing was not granted",
        "consent expired or was revoked",
        "employment relationship is inactive",
      ],
      requiresTitle: "EMPLOYER ACCESS REQUIRES",
      requires: [
        "worker-approved professional sharing",
        "active employment relationship",
        "permitted professional / employment scope",
      ],
      neverTitle: "EMPLOYER STILL NEVER RECEIVES",
      neverBody: "Health Log · Stress Check · Life Log · private eCoin / personal data",
      backToWorker: "Back to Worker",
      backToRecords: "Back to Records",
    },
    empty: {
      title: "Professional Records",
      subtitle:
        "Empty state · no employer-permitted professional records available",
      label: "NO RECORDS AVAILABLE",
      workerLine: "Current employer · {employer} · Worker-owned identity intact",
      reasonTitle: "No professional records available",
      reasonIntro: "This can happen when:",
      reasons: [
        "no professional records have been created",
        "records are outside the current employment scope",
        "worker-approved sharing is not active",
      ],
      mayReceiveTitle: "EMPLOYER MAY RECEIVE",
      mayReceiveBody:
        "Permitted Work Log · verified achievements · certificates / professional evidence · employment-scoped career records",
      neverTitle: "EMPLOYER NEVER RECEIVES",
      neverBody: "Health Log · Stress Check · Life Log · private eCoin / personal data",
      footer:
        "Access remains worker-controlled and limited to permitted professional / employment records.",
      backToWorkerDetail: "Back to Worker Detail",
      reviewAccessScope: "Review Access Scope",
    },
  },
  id: {
    units: { min: "mnt", days: "h", daysLong: "hari" },
    status: { recorded: "Tercatat" },
    analytics: {
      subtitle: "Metrik operasional · tampilan fasilitas 7 hari",
      scopes: {
        sevenDays: "7 hari",
        thisFacility: "Fasilitas ini",
        allWorkers: "Semua pekerja",
      },
      tiles: {
        d1: "D1 PERTANYAAN",
        d2: "D2 PEMAHAMAN",
        d4: "D4 INISIATIF PEKERJA",
        d5: "D5 RESPONS",
      },
      captions: {
        clarification: "klarifikasi",
        confirmed: "terkonfirmasi",
        messages: "pesan",
        median: "median",
      },
      efficiencyTitle: "EFISIENSI & RETENSI",
      rows: {
        d6: "D6 Penggunaan templat",
        d7: "D7 Pengerjaan ulang / ganda",
        d8: "D8 Masa kerja / retensi",
        d9: "D9 Sinyal tindak lanjut",
      },
      valueCases: "{count} kasus",
      valueWorkers: "{count} pekerja",
      trendTitle: "TREN OPERASIONAL 7 HARI",
      trendBody:
        "Tingkat laporan {reportRate} · inisiatif pekerja {workerLed} · {response}",
      trendResponse: {
        improving: "respons membaik",
        steady: "respons stabil",
      },
      privacyTitle: "BATAS PRIVASI",
      privacyBody:
        "Tidak ada data Health / Stress / Life individu yang muncul dalam analitik.",
      openReports: "Buka Laporan",
      openFollowUp: "Buka Tindak Lanjut",
    },
    continuity: {
      title: "Kesinambungan Profesional",
      subtitle: "Catatan karier / kerja",
      workerOwned: "Milik Pekerja",
      tenureLine: "{employer} · {count} {days}",
      tiles: {
        workRecords: "CATATAN KERJA",
        achievements: "PENCAPAIAN",
        certificates: "SERTIFIKAT",
        tenure: "MASA KERJA",
      },
      recentWorkLog: "CATATAN KERJA TERBARU",
      careerAssetsTitle: "ASET KARIER",
      careerAssetsSummary:
        "{certificates} sertifikat kerja · {skills} keterampilan / pencapaian · kesinambungan aktif",
      careerAssetsNote:
        "Aset profesional tetap melekat pada pekerja meski berganti employer.",
      openWorkLog: "Buka Catatan Kerja",
      viewCareerAssets: "Lihat Aset Karier",
      viewWorker: "Lihat Pekerja",
      footer:
        "Employer hanya melihat catatan profesional/ketenagakerjaan yang diizinkan. Health / Stress / Life / eCoin pribadi tetap dikecualikan.",
    },
    workLog: {
      title: "Catatan Kerja Pekerja",
      subtitle: "Catatan profesional yang diizinkan",
      currentEmployer: "Employer saat ini · {facility}",
      filters: {
        last30: "30 hari terakhir",
        allRecords: "Semua catatan",
        allStatuses: "Semua status",
      },
      sectionTitle: "CATATAN KERJA",
      sources: {
        dailyReport: "Laporan Harian",
        workLog: "Catatan Kerja",
        managerReview: "Tinjauan manajer",
      },
      accessScopeTitle: "CAKUPAN AKSES",
      accessScopeBody:
        "Hanya catatan profesional yang diizinkan untuk hubungan kerja yang aktif.",
      backToContinuity: "Kembali ke Kesinambungan",
      footer:
        "Catatan Health / Stress / Life / eCoin pribadi tidak pernah muncul di sini.",
      noMatch: "Tidak ada catatan yang cocok dengan filter ini.",
    },
    recordDetail: {
      title: "Detail Catatan Kerja",
      subtitle: "Sumber + verifikasi",
      workerOwned: "Milik Pekerja",
      currentEmployment: "{facility} · Hubungan kerja saat ini",
      metaLine: "{date} · {source} · {category}",
      category: "Aktivitas Kerja",
      descriptionTitle: "DESKRIPSI",
      evidenceTitle: "BUKTI PROFESIONAL",
      evidenceEvents: {
        shiftActivity: "Aktivitas shift tercatat",
        workerCommunication: "Komunikasi pekerja",
        dailyReportSubmitted: "Laporan Harian terkirim",
        managerReviewRecorded: "Tinjauan manajer tercatat",
        handoverCompleted: "Serah terima selesai",
      },
      verificationTitle: "VERIFIKASI & SUMBER",
      verificationStatusLine: "Status: {status} · Sumber: {source}",
      verificationRecordedLine: "Dicatat oleh: {name} · Bukti: {evidence}",
      preservedSource: "Sumber tersimpan",
      backToWorkLog: "Kembali ke Catatan Kerja",
      viewWorker: "Lihat Pekerja",
      privacyTitle: "BATAS PRIVASI",
      privacyBody:
        "Tidak ada informasi Health / Stress / Life / eCoin pribadi yang dilampirkan.",
      notFound: "Catatan tidak ditemukan",
    },
    careerAssets: {
      title: "Aset Karier",
      subtitle:
        "Aset profesional milik pekerja · cakupan yang diizinkan untuk employer",
      workerOwned: "Milik Pekerja",
      portableLine: "Catatan profesional portabel · cakupan employer saat ini",
      rows: {
        certificates: "Sertifikat kerja",
        skills: "Keterampilan / pencapaian",
        currentRole: "Peran saat ini",
        continuity: "Kesinambungan karier",
      },
      valueAvailable: "{count} tersedia",
      valueRecords: "{count} catatan",
      valueWorkerOwned: "Milik pekerja",
      evidenceTitle: "BUKTI PROFESIONAL TERVERIFIKASI",
      portabilityTitle: "ATURAN PORTABILITAS",
      portabilityBody:
        "Aset profesional tetap melekat pada pekerja meski berganti employer.",
      openWorkLog: "Buka Catatan Kerja",
      viewWorker: "Lihat Pekerja",
    },
    restricted: {
      title: "Akses Catatan Profesional",
      subtitle:
        "Dibatasi · perlu berbagi profesional yang disetujui pekerja atau cakupan kerja yang aktif",
      label: "AKSES DIBATASI",
      workerLine: "Identitas milik pekerja · employer saat ini: {employer}",
      reasonTitle: "Catatan profesional tidak tersedia",
      reasonBody:
        "Tidak ada cakupan berbagi yang disetujui pekerja dan aktif untuk employer ini.",
      mayBeRestrictedTitle: "AKSES DAPAT DIBATASI KETIKA",
      mayBeRestricted: [
        "berbagi belum diberikan",
        "persetujuan kedaluwarsa atau dicabut",
        "hubungan kerja tidak aktif",
      ],
      requiresTitle: "AKSES EMPLOYER MEMERLUKAN",
      requires: [
        "berbagi profesional yang disetujui pekerja",
        "hubungan kerja yang aktif",
        "cakupan profesional / ketenagakerjaan yang diizinkan",
      ],
      neverTitle: "EMPLOYER TETAP TIDAK PERNAH MENERIMA",
      neverBody:
        "Health Log · Stress Check · Life Log · eCoin pribadi / data personal",
      backToWorker: "Kembali ke Pekerja",
      backToRecords: "Kembali ke Catatan",
    },
    empty: {
      title: "Catatan Profesional",
      subtitle:
        "Keadaan kosong · tidak ada catatan profesional yang diizinkan untuk employer",
      label: "TIDAK ADA CATATAN TERSEDIA",
      workerLine:
        "Employer saat ini · {employer} · Identitas milik pekerja tetap utuh",
      reasonTitle: "Tidak ada catatan profesional tersedia",
      reasonIntro: "Ini dapat terjadi ketika:",
      reasons: [
        "belum ada catatan profesional yang dibuat",
        "catatan berada di luar cakupan kerja saat ini",
        "berbagi yang disetujui pekerja tidak aktif",
      ],
      mayReceiveTitle: "EMPLOYER DAPAT MENERIMA",
      mayReceiveBody:
        "Catatan Kerja yang diizinkan · pencapaian terverifikasi · sertifikat / bukti profesional · catatan karier dalam cakupan kerja",
      neverTitle: "EMPLOYER TIDAK PERNAH MENERIMA",
      neverBody:
        "Health Log · Stress Check · Life Log · eCoin pribadi / data personal",
      footer:
        "Akses tetap dikendalikan pekerja dan terbatas pada catatan profesional / ketenagakerjaan yang diizinkan.",
      backToWorkerDetail: "Kembali ke Detail Pekerja",
      reviewAccessScope: "Tinjau Cakupan Akses",
    },
  },
  ja: {
    units: { min: "分", days: "日", daysLong: "日" },
    status: { recorded: "記録済み" },
    analytics: {
      subtitle: "業務指標 · 7日間の施設ビュー",
      scopes: {
        sevenDays: "7日間",
        thisFacility: "この施設",
        allWorkers: "全ワーカー",
      },
      tiles: {
        d1: "D1 質問数",
        d2: "D2 理解度",
        d4: "D4 ワーカー発信",
        d5: "D5 応答",
      },
      captions: {
        clarification: "確認事項",
        confirmed: "確認済み",
        messages: "メッセージ",
        median: "中央値",
      },
      efficiencyTitle: "効率性と定着",
      rows: {
        d6: "D6 テンプレート利用",
        d7: "D7 手戻り / 二重作業",
        d8: "D8 在籍期間 / 定着",
        d9: "D9 フォローアップシグナル",
      },
      valueCases: "{count}件",
      valueWorkers: "{count}名",
      trendTitle: "7日間の業務トレンド",
      trendBody:
        "レポート率 {reportRate} · ワーカー発信 {workerLed} · {response}",
      trendResponse: {
        improving: "応答は改善傾向",
        steady: "応答は横ばい",
      },
      privacyTitle: "プライバシー境界",
      privacyBody:
        "個人のHealth / Stress / Lifeデータは分析に表示されません。",
      openReports: "レポートを開く",
      openFollowUp: "フォローアップを開く",
    },
    continuity: {
      title: "職務の継続性",
      subtitle: "キャリア / 業務記録",
      workerOwned: "労働者所有",
      tenureLine: "{employer} · {count}{days}",
      tiles: {
        workRecords: "業務記録",
        achievements: "実績",
        certificates: "証明書",
        tenure: "在籍期間",
      },
      recentWorkLog: "最近の業務ログ",
      careerAssetsTitle: "キャリア資産",
      careerAssetsSummary:
        "業務証明書 {certificates}件 · スキル / 実績 {skills}件 · 継続性は有効",
      careerAssetsNote:
        "職務上の資産は雇用主が変わってもワーカーに紐づき続けます。",
      openWorkLog: "業務ログを開く",
      viewCareerAssets: "キャリア資産を見る",
      viewWorker: "ワーカーを見る",
      footer:
        "雇用主が見られるのは許可された職務 / 雇用記録のみです。個人のHealth / Stress / Life / eCoinは除外されます。",
    },
    workLog: {
      title: "ワーカー業務ログ",
      subtitle: "許可された職務記録",
      currentEmployer: "現在の雇用主 · {facility}",
      filters: {
        last30: "直近30日",
        allRecords: "すべての記録",
        allStatuses: "すべてのステータス",
      },
      sectionTitle: "業務ログ",
      sources: {
        dailyReport: "日報",
        workLog: "業務ログ",
        managerReview: "マネージャー確認",
      },
      accessScopeTitle: "アクセス範囲",
      accessScopeBody: "有効な雇用関係で許可された職務記録のみ。",
      backToContinuity: "継続性に戻る",
      footer:
        "個人のHealth / Stress / Life / eCoin記録がここに表示されることはありません。",
      noMatch: "このフィルターに一致する記録はありません。",
    },
    recordDetail: {
      title: "業務ログ詳細",
      subtitle: "出典 + 検証",
      workerOwned: "労働者所有",
      currentEmployment: "{facility} · 現在の雇用",
      metaLine: "{date} · {source} · {category}",
      category: "業務活動",
      descriptionTitle: "説明",
      evidenceTitle: "職務エビデンス",
      evidenceEvents: {
        shiftActivity: "シフト活動を記録",
        workerCommunication: "ワーカーのコミュニケーション",
        dailyReportSubmitted: "日報を提出",
        managerReviewRecorded: "マネージャー確認を記録",
        handoverCompleted: "引き継ぎ完了",
      },
      verificationTitle: "検証と出典",
      verificationStatusLine: "ステータス: {status} · 出典: {source}",
      verificationRecordedLine: "記録者: {name} · エビデンス: {evidence}",
      preservedSource: "保全された出典",
      backToWorkLog: "業務ログに戻る",
      viewWorker: "ワーカーを見る",
      privacyTitle: "プライバシー境界",
      privacyBody:
        "個人のHealth / Stress / Life / eCoin情報は添付されていません。",
      notFound: "記録が見つかりません",
    },
    careerAssets: {
      title: "キャリア資産",
      subtitle: "労働者所有の職務資産 · 雇用主に開示される許可範囲",
      workerOwned: "労働者所有",
      portableLine: "持ち運び可能な職務記録 · 現在の雇用主の範囲",
      rows: {
        certificates: "業務証明書",
        skills: "スキル / 実績",
        currentRole: "現在の職務",
        continuity: "キャリアの継続性",
      },
      valueAvailable: "{count}件利用可能",
      valueRecords: "{count}件の記録",
      valueWorkerOwned: "労働者所有",
      evidenceTitle: "検証済み職務エビデンス",
      portabilityTitle: "ポータビリティ規則",
      portabilityBody:
        "職務上の資産は雇用主が変わってもワーカーに紐づき続けます。",
      openWorkLog: "業務ログを開く",
      viewWorker: "ワーカーを見る",
    },
    restricted: {
      title: "職務記録へのアクセス",
      subtitle:
        "制限中 · ワーカーが承認した職務共有、または有効な雇用範囲が必要です",
      label: "アクセス制限",
      workerLine: "労働者所有のID · 現在の雇用主: {employer}",
      reasonTitle: "職務記録は利用できません",
      reasonBody:
        "この雇用主に対して有効な、ワーカー承認済みの共有範囲がありません。",
      mayBeRestrictedTitle: "アクセスが制限される場合",
      mayBeRestricted: [
        "共有が許可されていない",
        "同意が失効または撤回された",
        "雇用関係が有効でない",
      ],
      requiresTitle: "雇用主のアクセスに必要な条件",
      requires: [
        "ワーカーが承認した職務共有",
        "有効な雇用関係",
        "許可された職務 / 雇用範囲",
      ],
      neverTitle: "雇用主が受け取らないもの",
      neverBody:
        "Health Log · Stress Check · Life Log · 個人のeCoin / 個人データ",
      backToWorker: "ワーカーに戻る",
      backToRecords: "記録に戻る",
    },
    empty: {
      title: "職務記録",
      subtitle: "空の状態 · 雇用主に許可された職務記録はありません",
      label: "利用できる記録がありません",
      workerLine: "現在の雇用主 · {employer} · 労働者所有のIDは維持されています",
      reasonTitle: "利用できる職務記録がありません",
      reasonIntro: "次の場合に発生します:",
      reasons: [
        "職務記録がまだ作成されていない",
        "記録が現在の雇用範囲外である",
        "ワーカー承認済みの共有が有効でない",
      ],
      mayReceiveTitle: "雇用主が受け取れるもの",
      mayReceiveBody:
        "許可された業務ログ · 検証済みの実績 · 証明書 / 職務エビデンス · 雇用範囲のキャリア記録",
      neverTitle: "雇用主が受け取らないもの",
      neverBody:
        "Health Log · Stress Check · Life Log · 個人のeCoin / 個人データ",
      footer:
        "アクセスはワーカーの管理下にあり、許可された職務 / 雇用記録に限定されます。",
      backToWorkerDetail: "ワーカー詳細に戻る",
      reviewAccessScope: "アクセス範囲を確認",
    },
  },
});
