import { defineSectionCopy } from "@/i18n/copy";

/**
 * Section 08 · OJT & Human Rights DD copy (Figma section 759:1300).
 * EN is the Figma text verbatim; ID + JA are faithful translations.
 * Record content (module names, draft guidance text, worker names, dates)
 * never passes through here — it stays raw in `ojtMock.ts`.
 */

/** Replaces {token} placeholders in a copy template. */
export function fillOjtCopy(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match: string, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export interface OjtCopy {
  hub: {
    subtitle: string;
    tileModules: string;
    tileModulesValue: string;
    tilePending: string;
    tilePendingValue: string;
    tileCompletion: string;
    tileDraftReview: string;
    flowHeading: string;
    flowLine: string;
    listHeading: string;
    moduleNeedsReview: string;
    modulePublishedOpens: string;
    modulePublishedCompleted: string;
    rowReview: string;
    rowOpen: string;
    queueHeading: string;
    queueBody: string;
    reviewCta: string;
    footer: string;
  };
  detail: {
    title: string;
    subtitle: string;
    summaryLine1: string;
    summaryLine2: string;
    summaryLine2Published: string;
    tileAssigned: string;
    tilePending: string;
    tileCompletion: string;
    tileLanguages: string;
    guidanceHeading: string;
    humanReviewHeading: string;
    checks: string[];
    sourceHeading: string;
    sourceBody: string;
    reviewEdit: string;
    viewWorkers: string;
    backToOjt: string;
    notFound: string;
  };
  review: {
    title: string;
    subtitle: string;
    statusLine1: string;
    statusLine2: string;
    statusLine3: string;
    editorHeading: string;
    checklistHeading: string;
    checks: string[];
    sourceNote: string;
    approvePublish: string;
    saveDraft: string;
    backToDetail: string;
    footer: string;
    blockedNote: string;
    draftSavedToast: string;
    draftSavedBody: string;
  };
  published: {
    title: string;
    subtitle: string;
    chip: string;
    summaryLine1: string;
    summaryLine2: string;
    guidanceHeading: string;
    summaryHeading: string;
    assigned: string;
    source: string;
    openDetail: string;
    backToHub: string;
    footer: string;
  };
  hrdd: {
    subtitle: string;
    chipFacility: string;
    tileEvidence: string;
    tileFollowUp: string;
    tileOpenGaps: string;
    tilePeriod: string;
    coverageHeading: string;
    coverage: {
      workerQuestions: string;
      dailyReports: string;
      followUp: string;
      ojtGuidance: string;
    };
    gapHeading: string;
    gapBody: string;
    scopeHeading: string;
    included: string;
    excluded: string;
    drilldown: string;
    openAuditExport: string;
  };
  evidence: {
    title: string;
    subtitle: string;
    tileWorkerQuestions: string;
    tileManagerResponse: string;
    tileTwoWay: string;
    tileFollowUp: string;
    recordsHeading: string;
    types: {
      workerQuestion: string;
      managerResponse: string;
      dailyReport: string;
      followUp: string;
      adminVisa: string;
    };
    sources: {
      communication: string;
      submitted: string;
      openHumanReview: string;
      openItems: string;
    };
    statuses: {
      complete: string;
      needsReview: string;
      review: string;
    };
    privacyHeading: string;
    privacyBody: string;
    backToHrdd: string;
    openAuditExport: string;
  };
  states: {
    loadingNote: string;
    offlineTitle: string;
    offlineBody: string;
    offlineNote: string;
  };
}

export const OJT_COPY = defineSectionCopy<OjtCopy>({
  en: {
    hub: {
      subtitle:
        "D11 workflow · AI-assisted draft, human review, edit, then publish",
      tileModules: "MODULES",
      tileModulesValue: "{count} active",
      tilePending: "PENDING",
      tilePendingValue: "{count} workers",
      tileCompletion: "COMPLETION",
      tileDraftReview: "DRAFT REVIEW",
      flowHeading: "HUMAN-CONTROLLED FLOW",
      flowLine:
        "Permitted source → AI-assisted draft → Manager review/edit → Publish",
      listHeading: "KNOWLEDGE / OJT",
      moduleNeedsReview: "Assigned · {pending} pending · {languages}",
      modulePublishedOpens: "Published · {opens} opens this week",
      modulePublishedCompleted: "Published · {completed} / {total} completed",
      rowReview: "Review",
      rowOpen: "Open",
      queueHeading: "DRAFT REVIEW QUEUE",
      queueBody:
        "{count} AI-assisted draft waiting for Manager review · no automatic publication",
      reviewCta: "Review OJT Detail",
      footer:
        "Private Health / Stress / Life / eCoin data is excluded from OJT sources.",
    },
    detail: {
      title: "OJT Detail",
      subtitle: "Human-reviewed guidance · {module}",
      summaryLine1: "Assigned · {workers} workers · {pending} pending · {languages}",
      summaryLine2: "Updated {date} · human review required",
      summaryLine2Published: "Updated {date} · published",
      tileAssigned: "ASSIGNED",
      tilePending: "PENDING",
      tileCompletion: "COMPLETION",
      tileLanguages: "LANGUAGES",
      guidanceHeading: "DRAFT LEARNING GUIDANCE",
      humanReviewHeading: "HUMAN REVIEW",
      checks: [
        "Operational accuracy",
        "Worker-facing wording",
        "Translation reviewed",
        "Privacy boundary",
      ],
      sourceHeading: "SOURCE RECORDS",
      sourceBody:
        "{records} permitted records · {conversations} conversations + {reports} Daily Report",
      reviewEdit: "Review & Edit",
      viewWorkers: "View Workers",
      backToOjt: "Back to OJT",
      notFound: "This OJT module is not available.",
    },
    review: {
      title: "Review OJT Draft",
      subtitle: "Manager edits and approval are required before publication",
      statusLine1: "Draft {version} · AI-assisted · not published",
      statusLine2: "Reviewer · {manager} · {role}",
      statusLine3: "{workers} workers · {languages} · translation review ready",
      editorHeading: "CONTENT EDITOR",
      checklistHeading: "HUMAN REVIEW · ALL REQUIRED",
      checks: [
        "Accuracy checked",
        "Actionable wording",
        "Translation reviewed",
        "Privacy boundary checked",
      ],
      sourceNote:
        "Source: {records} permitted records · private worker data excluded",
      approvePublish: "Approve & Publish",
      saveDraft: "Save Draft",
      backToDetail: "Back to OJT Detail",
      footer: "AI-assisted drafts never publish automatically.",
      blockedNote: "All human review checks are required before publication.",
      draftSavedToast: "Draft saved",
      draftSavedBody: "Not published · Manager review is still required.",
    },
    published: {
      title: "OJT Published",
      subtitle: "Human-reviewed workplace guidance is now available",
      chip: "Published",
      summaryLine1: "Version {version} · {languages} · {workers} assigned workers",
      summaryLine2: "Published by {manager} · {role} · {time}",
      guidanceHeading: "PUBLISHED GUIDANCE",
      summaryHeading: "PUBLICATION SUMMARY",
      assigned: "Assigned: {names}",
      source:
        "Source: {conversations} conversations + {reports} Daily Report · private data excluded",
      openDetail: "Open OJT Detail",
      backToHub: "Back to Knowledge / OJT",
      footer: "Manager-approved publication · no automatic publish.",
    },
    hrdd: {
      subtitle:
        "D12 · privacy-safe due-diligence evidence from permitted records",
      chipFacility: "Current facility",
      tileEvidence: "EVIDENCE",
      tileFollowUp: "FOLLOW-UP",
      tileOpenGaps: "OPEN GAPS",
      tilePeriod: "PERIOD",
      coverageHeading: "EVIDENCE COVERAGE",
      coverage: {
        workerQuestions: "Worker questions answered",
        dailyReports: "Daily Report coverage",
        followUp: "Manager follow-up evidence",
        ojtGuidance: "OJT / guidance evidence",
      },
      gapHeading: "OPEN GAP · FOLLOW-UP EVIDENCE INCOMPLETE",
      gapBody:
        "{count} worker questions have no linked manager follow-up record. Evidence gap only — no automatic adverse decision.",
      scopeHeading: "INCLUDED / EXCLUDED",
      included:
        "Included: Communication · Daily Reports · Follow-up · permitted work/admin",
      excluded: "Excluded: Health · Stress · Life · private eCoin / family data",
      drilldown: "Evidence Drill-down",
      openAuditExport: "Open Audit Export",
    },
    evidence: {
      title: "HRDD Evidence Drill-down",
      subtitle: "Trace summary metrics to permitted operational evidence",
      tileWorkerQuestions: "WORKER QUESTIONS",
      tileManagerResponse: "MANAGER RESPONSE",
      tileTwoWay: "TWO-WAY EVIDENCE",
      tileFollowUp: "FOLLOW-UP",
      recordsHeading: "EVIDENCE RECORDS",
      types: {
        workerQuestion: "Worker question",
        managerResponse: "Manager response",
        dailyReport: "Daily Report",
        followUp: "Follow-up",
        adminVisa: "Admin / visa",
      },
      sources: {
        communication: "Communication",
        submitted: "Submitted",
        openHumanReview: "open human review",
        openItems: "{count} open items",
      },
      statuses: {
        complete: "Complete",
        needsReview: "Needs review",
        review: "Review",
      },
      privacyHeading: "PRIVACY BOUNDARY",
      privacyBody:
        "Health Log, Stress Check, Life Log, family/private worker data and private eCoin are excluded by design.",
      backToHrdd: "Back to HRDD",
      openAuditExport: "Open Audit Export",
    },
    states: {
      loadingNote: "Loading permitted records…",
      offlineTitle: "Offline · read-only",
      offlineBody:
        "Cached values are shown. Nothing is drafted, published or exported while offline.",
      offlineNote:
        "No silent writes · pending actions are revalidated on reconnect.",
    },
  },
  id: {
    hub: {
      subtitle:
        "Alur D11 · draf berbantuan AI, tinjauan manusia, penyuntingan, lalu publikasi",
      tileModules: "MODUL",
      tileModulesValue: "{count} aktif",
      tilePending: "TERTUNDA",
      tilePendingValue: "{count} pekerja",
      tileCompletion: "PENYELESAIAN",
      tileDraftReview: "TINJAUAN DRAF",
      flowHeading: "ALUR TERKENDALI MANUSIA",
      flowLine:
        "Sumber yang diizinkan → Draf berbantuan AI → Tinjauan/edit Manajer → Publikasi",
      listHeading: "PENGETAHUAN / OJT",
      moduleNeedsReview: "Ditugaskan · {pending} tertunda · {languages}",
      modulePublishedOpens: "Dipublikasikan · {opens} dibuka minggu ini",
      modulePublishedCompleted: "Dipublikasikan · {completed} / {total} selesai",
      rowReview: "Tinjau",
      rowOpen: "Buka",
      queueHeading: "ANTREAN TINJAUAN DRAF",
      queueBody:
        "{count} draf berbantuan AI menunggu tinjauan Manajer · tanpa publikasi otomatis",
      reviewCta: "Tinjau Detail OJT",
      footer:
        "Data privat Kesehatan / Stres / Kehidupan / eCoin dikecualikan dari sumber OJT.",
    },
    detail: {
      title: "Detail OJT",
      subtitle: "Panduan yang ditinjau manusia · {module}",
      summaryLine1:
        "Ditugaskan · {workers} pekerja · {pending} tertunda · {languages}",
      summaryLine2: "Diperbarui {date} · perlu tinjauan manusia",
      summaryLine2Published: "Diperbarui {date} · dipublikasikan",
      tileAssigned: "DITUGASKAN",
      tilePending: "TERTUNDA",
      tileCompletion: "PENYELESAIAN",
      tileLanguages: "BAHASA",
      guidanceHeading: "DRAF PANDUAN PEMBELAJARAN",
      humanReviewHeading: "TINJAUAN MANUSIA",
      checks: [
        "Akurasi operasional",
        "Bahasa untuk pekerja",
        "Terjemahan ditinjau",
        "Batas privasi",
      ],
      sourceHeading: "CATATAN SUMBER",
      sourceBody:
        "{records} catatan yang diizinkan · {conversations} percakapan + {reports} Laporan Harian",
      reviewEdit: "Tinjau & Edit",
      viewWorkers: "Lihat Pekerja",
      backToOjt: "Kembali ke OJT",
      notFound: "Modul OJT ini tidak tersedia.",
    },
    review: {
      title: "Tinjau Draf OJT",
      subtitle: "Suntingan dan persetujuan Manajer wajib sebelum publikasi",
      statusLine1: "Draf {version} · berbantuan AI · belum dipublikasikan",
      statusLine2: "Peninjau · {manager} · {role}",
      statusLine3: "{workers} pekerja · {languages} · tinjauan terjemahan siap",
      editorHeading: "EDITOR KONTEN",
      checklistHeading: "TINJAUAN MANUSIA · SEMUA WAJIB",
      checks: [
        "Akurasi diperiksa",
        "Bahasa dapat ditindaklanjuti",
        "Terjemahan ditinjau",
        "Batas privasi diperiksa",
      ],
      sourceNote:
        "Sumber: {records} catatan yang diizinkan · data privat pekerja dikecualikan",
      approvePublish: "Setujui & Publikasikan",
      saveDraft: "Simpan Draf",
      backToDetail: "Kembali ke Detail OJT",
      footer: "Draf berbantuan AI tidak pernah dipublikasikan otomatis.",
      blockedNote: "Semua tinjauan manusia wajib diselesaikan sebelum publikasi.",
      draftSavedToast: "Draf disimpan",
      draftSavedBody: "Belum dipublikasikan · tinjauan Manajer tetap diperlukan.",
    },
    published: {
      title: "OJT Dipublikasikan",
      subtitle: "Panduan kerja yang ditinjau manusia kini tersedia",
      chip: "Dipublikasikan",
      summaryLine1:
        "Versi {version} · {languages} · {workers} pekerja ditugaskan",
      summaryLine2: "Dipublikasikan oleh {manager} · {role} · {time}",
      guidanceHeading: "PANDUAN DIPUBLIKASIKAN",
      summaryHeading: "RINGKASAN PUBLIKASI",
      assigned: "Ditugaskan: {names}",
      source:
        "Sumber: {conversations} percakapan + {reports} Laporan Harian · data privat dikecualikan",
      openDetail: "Buka Detail OJT",
      backToHub: "Kembali ke Pengetahuan / OJT",
      footer: "Publikasi disetujui Manajer · tanpa publikasi otomatis.",
    },
    hrdd: {
      subtitle:
        "D12 · bukti uji tuntas yang aman privasi dari catatan yang diizinkan",
      chipFacility: "Fasilitas saat ini",
      tileEvidence: "BUKTI",
      tileFollowUp: "TINDAK LANJUT",
      tileOpenGaps: "CELAH TERBUKA",
      tilePeriod: "PERIODE",
      coverageHeading: "CAKUPAN BUKTI",
      coverage: {
        workerQuestions: "Pertanyaan pekerja terjawab",
        dailyReports: "Cakupan Laporan Harian",
        followUp: "Bukti tindak lanjut manajer",
        ojtGuidance: "Bukti OJT / panduan",
      },
      gapHeading: "CELAH TERBUKA · BUKTI TINDAK LANJUT BELUM LENGKAP",
      gapBody:
        "{count} pertanyaan pekerja tidak memiliki catatan tindak lanjut manajer yang terkait. Hanya celah bukti — tanpa keputusan merugikan otomatis.",
      scopeHeading: "TERMASUK / DIKECUALIKAN",
      included:
        "Termasuk: Komunikasi · Laporan Harian · Tindak Lanjut · kerja/admin yang diizinkan",
      excluded:
        "Dikecualikan: Kesehatan · Stres · Kehidupan · eCoin privat / data keluarga",
      drilldown: "Telusuri Bukti",
      openAuditExport: "Buka Ekspor Audit",
    },
    evidence: {
      title: "Telusuran Bukti HRDD",
      subtitle: "Lacak metrik ringkasan ke bukti operasional yang diizinkan",
      tileWorkerQuestions: "PERTANYAAN PEKERJA",
      tileManagerResponse: "RESPONS MANAJER",
      tileTwoWay: "BUKTI DUA ARAH",
      tileFollowUp: "TINDAK LANJUT",
      recordsHeading: "CATATAN BUKTI",
      types: {
        workerQuestion: "Pertanyaan pekerja",
        managerResponse: "Respons manajer",
        dailyReport: "Laporan Harian",
        followUp: "Tindak lanjut",
        adminVisa: "Admin / visa",
      },
      sources: {
        communication: "Komunikasi",
        submitted: "Terkirim",
        openHumanReview: "tinjauan manusia terbuka",
        openItems: "{count} item terbuka",
      },
      statuses: {
        complete: "Lengkap",
        needsReview: "Perlu tinjauan",
        review: "Tinjau",
      },
      privacyHeading: "BATAS PRIVASI",
      privacyBody:
        "Log Kesehatan, Cek Stres, Log Kehidupan, data keluarga/privat pekerja, dan eCoin privat dikecualikan secara desain.",
      backToHrdd: "Kembali ke HRDD",
      openAuditExport: "Buka Ekspor Audit",
    },
    states: {
      loadingNote: "Memuat catatan yang diizinkan…",
      offlineTitle: "Luring · hanya baca",
      offlineBody:
        "Nilai tersimpan ditampilkan. Tidak ada draf, publikasi, atau ekspor saat luring.",
      offlineNote:
        "Tanpa penulisan diam-diam · tindakan tertunda divalidasi ulang saat tersambung kembali.",
    },
  },
  ja: {
    hub: {
      subtitle:
        "D11ワークフロー · AI支援の下書き、人による確認・編集、その後に公開",
      tileModules: "モジュール",
      tileModulesValue: "{count} 件稼働",
      tilePending: "保留",
      tilePendingValue: "{count} 名",
      tileCompletion: "完了率",
      tileDraftReview: "下書き確認",
      flowHeading: "人が管理するフロー",
      flowLine: "許可された情報源 → AI支援の下書き → 管理者の確認/編集 → 公開",
      listHeading: "ナレッジ / OJT",
      moduleNeedsReview: "割り当て済み · 保留 {pending} 名 · {languages}",
      modulePublishedOpens: "公開済み · 今週 {opens} 回閲覧",
      modulePublishedCompleted: "公開済み · {completed} / {total} 完了",
      rowReview: "確認",
      rowOpen: "開く",
      queueHeading: "下書き確認キュー",
      queueBody:
        "AI支援の下書き {count} 件が管理者の確認待ちです · 自動公開はありません",
      reviewCta: "OJT詳細を確認",
      footer:
        "非公開の健康 / ストレス / 生活 / eCoinデータはOJTの情報源から除外されます。",
    },
    detail: {
      title: "OJT詳細",
      subtitle: "人が確認したガイダンス · {module}",
      summaryLine1: "割り当て済み · {workers} 名 · 保留 {pending} 名 · {languages}",
      summaryLine2: "{date} 更新 · 人による確認が必要",
      summaryLine2Published: "{date} 更新 · 公開済み",
      tileAssigned: "割り当て",
      tilePending: "保留",
      tileCompletion: "完了率",
      tileLanguages: "言語",
      guidanceHeading: "学習ガイダンスの下書き",
      humanReviewHeading: "人による確認",
      checks: [
        "業務上の正確性",
        "ワーカー向けの表現",
        "翻訳を確認済み",
        "プライバシー境界",
      ],
      sourceHeading: "情報源レコード",
      sourceBody:
        "許可されたレコード {records} 件 · 会話 {conversations} 件 + デイリーレポート {reports} 件",
      reviewEdit: "確認・編集",
      viewWorkers: "ワーカーを表示",
      backToOjt: "OJTに戻る",
      notFound: "このOJTモジュールは利用できません。",
    },
    review: {
      title: "OJT下書きの確認",
      subtitle: "公開前に管理者の編集と承認が必要です",
      statusLine1: "下書き {version} · AI支援 · 未公開",
      statusLine2: "確認者 · {manager} · {role}",
      statusLine3: "{workers} 名 · {languages} · 翻訳確認の準備完了",
      editorHeading: "コンテンツエディタ",
      checklistHeading: "人による確認 · すべて必須",
      checks: [
        "正確性を確認",
        "実行可能な表現",
        "翻訳を確認済み",
        "プライバシー境界を確認",
      ],
      sourceNote:
        "情報源: 許可されたレコード {records} 件 · 非公開のワーカーデータは除外",
      approvePublish: "承認して公開",
      saveDraft: "下書きを保存",
      backToDetail: "OJT詳細に戻る",
      footer: "AI支援の下書きが自動的に公開されることはありません。",
      blockedNote: "公開前に人による確認項目をすべて完了する必要があります。",
      draftSavedToast: "下書きを保存しました",
      draftSavedBody: "未公開 · 管理者の確認が引き続き必要です。",
    },
    published: {
      title: "OJT公開済み",
      subtitle: "人が確認した職場ガイダンスが利用可能になりました",
      chip: "公開済み",
      summaryLine1: "バージョン {version} · {languages} · 割り当て {workers} 名",
      summaryLine2: "公開者 {manager} · {role} · {time}",
      guidanceHeading: "公開済みガイダンス",
      summaryHeading: "公開サマリー",
      assigned: "割り当て: {names}",
      source:
        "情報源: 会話 {conversations} 件 + デイリーレポート {reports} 件 · 非公開データは除外",
      openDetail: "OJT詳細を開く",
      backToHub: "ナレッジ / OJTに戻る",
      footer: "管理者が承認した公開 · 自動公開はありません。",
    },
    hrdd: {
      subtitle: "D12 · 許可されたレコードによるプライバシー安全な人権DD証跡",
      chipFacility: "現在の施設",
      tileEvidence: "証跡",
      tileFollowUp: "フォローアップ",
      tileOpenGaps: "未解決ギャップ",
      tilePeriod: "期間",
      coverageHeading: "証跡カバレッジ",
      coverage: {
        workerQuestions: "回答済みのワーカー質問",
        dailyReports: "デイリーレポートのカバレッジ",
        followUp: "管理者フォローアップの証跡",
        ojtGuidance: "OJT / ガイダンスの証跡",
      },
      gapHeading: "未解決ギャップ · フォローアップ証跡が未完了",
      gapBody:
        "ワーカーの質問 {count} 件に紐づく管理者フォローアップ記録がありません。証跡上のギャップのみ — 自動的な不利益決定は行われません。",
      scopeHeading: "対象 / 除外",
      included:
        "対象: コミュニケーション · デイリーレポート · フォローアップ · 許可された業務/管理情報",
      excluded:
        "除外: 健康 · ストレス · 生活 · 非公開eCoin / 家族データ",
      drilldown: "証跡のドリルダウン",
      openAuditExport: "監査エクスポートを開く",
    },
    evidence: {
      title: "人権DD証跡ドリルダウン",
      subtitle: "サマリー指標を許可された業務証跡までたどる",
      tileWorkerQuestions: "ワーカー質問",
      tileManagerResponse: "管理者の回答",
      tileTwoWay: "双方向の証跡",
      tileFollowUp: "フォローアップ",
      recordsHeading: "証跡レコード",
      types: {
        workerQuestion: "ワーカー質問",
        managerResponse: "管理者の回答",
        dailyReport: "デイリーレポート",
        followUp: "フォローアップ",
        adminVisa: "管理 / 在留資格",
      },
      sources: {
        communication: "コミュニケーション",
        submitted: "提出済み",
        openHumanReview: "人による確認が未完了",
        openItems: "未対応 {count} 件",
      },
      statuses: {
        complete: "完了",
        needsReview: "確認が必要",
        review: "確認",
      },
      privacyHeading: "プライバシー境界",
      privacyBody:
        "健康ログ、ストレスチェック、生活ログ、家族/非公開のワーカーデータ、非公開eCoinは設計上除外されています。",
      backToHrdd: "人権DDに戻る",
      openAuditExport: "監査エクスポートを開く",
    },
    states: {
      loadingNote: "許可されたレコードを読み込み中…",
      offlineTitle: "オフライン · 読み取り専用",
      offlineBody:
        "キャッシュされた値を表示しています。オフライン中は下書き・公開・エクスポートは行われません。",
      offlineNote: "サイレント書き込みなし · 再接続時に保留中の操作を再検証します。",
    },
  },
});
