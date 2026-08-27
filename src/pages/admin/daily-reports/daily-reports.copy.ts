import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Daily Reports area.
 *
 * Frames (file IZZYiAlNAdYAAcX2z5AtOm, page 06 · Company Admin, 1182:5690):
 *   AD-06  Daily Reports — Monitoring          1223:2373
 *   AD-06B Daily Report Reminder States        1226:1078  (interaction states)
 *   AD-06C Daily Report Operational Flow       1226:3690  (lifecycle flow)
 *   AD-06D Daily Report Detailed States        1239:511   (detailed states)
 *
 * EN is Figma-verbatim. ID/JA are faithful translations. Counts, times,
 * employee and team names, and the reminder template body are DATA and live
 * in daily-reports.mock.ts; record status values (Late / Missing) render
 * through localizeTerm.
 *
 * Governance (Figma AD-SCOPE board): Company Admin ≠ Super Admin — nothing
 * here reaches across tenants, billing or platform configuration.
 */

interface FlowDetail {
  label: string;
  body: string;
}

interface FlowStep {
  title: string;
  subtitle: string;
  details: FlowDetail[];
}

export interface DailyReportsCopy {
  /** AD-06 "Screen Content" intro row (1223:2649). */
  intro: {
    title: string;
    subtitle: string;
    exportDailyStatus: string;
    sendReminder: string;
  };
  /** AD-06 stat quad (1223:2656 … 1223:2674). */
  stats: {
    labels: { expected: string; submitted: string; late: string; missing: string };
    captions: {
      expected: string;
      /** "{percent}% completion" */
      submitted: string;
      late: string;
      missing: string;
    };
  };
  /** AD-06 "Daily report health" card (1223:2680). */
  health: { title: string; subtitle: string };
  /** AD-06 "Late & missing submissions" card (1223:2703). */
  table: {
    title: string;
    subtitle: string;
    columns: {
      employee: string;
      team: string;
      status: string;
      submitted: string;
    };
    /** Screen-reader label on each clickable row. */
    openDetail: string;
    sendReminder: string;
    exportStatus: string;
  };
  /** AD-06B board heading (1226:1079 … 1226:1081). */
  actions: { eyebrow: string; title: string; subtitle: string };
  /** AD-06B "Send reminder" panel (1226:1082). */
  reminder: {
    title: string;
    subtitle: string;
    recipients: string;
    /** "{count} missing employees" */
    recipientsValue: string;
    channel: string;
    channelValue: string;
    message: string;
    dueTime: string;
    /** "Today · {time}" */
    dueTimeValue: string;
    /** "{count} employees will be notified." */
    noticeTitle: string;
    noticeBody: string;
    cancel: string;
    send: string;
  };
  /** AD-06B "Reminder sent" panel (1226:1104). */
  sent: {
    title: string;
    /** "{count} employees notified" */
    notified: string;
    note: string;
    /** "Delivered · {count}" */
    delivered: string;
    /** "Pending · {count}" */
    pending: string;
    viewActivity: string;
  };
  /** AD-06C board (1226:3690). */
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      monitor: FlowStep;
      inspect: FlowStep;
      remind: FlowStep;
      delivery: FlowStep;
      arrives: FlowStep;
    };
    rule: string;
  };
  /** AD-06D board (1239:511). */
  detail: {
    eyebrow: string;
    title: string;
    subtitle: string;
    compose: {
      pill: string;
      title: string;
      subtitle: string;
      recipients: string;
      /** "{count} missing employees · filter: today" */
      recipientsValue: string;
      channel: string;
      channelValue: string;
      message: string;
      dueTime: string;
      /** "Today · {time}" */
      dueTimeValue: string;
      noteTitle: string;
      noteBody: string;
      cancel: string;
      send: string;
      footnote: string;
    };
    delivery: {
      pill: string;
      title: string;
      subtitle: string;
      delivered: string;
      /** "{count} employees · timestamp recorded" */
      deliveredValue: string;
      pending: string;
      /** "{count} employee · awaiting device delivery" */
      pendingValue: string;
      failed: string;
      /** "{count} employee · notification token unavailable" */
      failedValue: string;
      noteTitle: string;
      noteBody: string;
      viewRecipients: string;
      retryFailed: string;
      activityLog: string;
      activityLogValue: string;
      footnote: string;
    };
    submission: {
      pill: string;
      title: string;
      subtitle: string;
      employee: string;
      status: string;
      /** "{status} · submitted {time}" */
      statusValue: string;
      content: string;
      contentValue: string;
      reminderHistory: string;
      /** "{time} sent · delivered" */
      reminderHistoryValue: string;
      noteTitle: string;
      noteBody: string;
      openEmployee: string;
      viewReport: string;
      footnote: string;
    };
  };
}

export const DAILY_REPORTS_COPY = defineSectionCopy<DailyReportsCopy>({
  en: {
    intro: {
      title: "Monitor submission compliance by team and employee",
      subtitle: "Keep daily reporting healthy",
      exportDailyStatus: "Export daily status",
      sendReminder: "Send reminder",
    },
    stats: {
      labels: {
        expected: "Expected",
        submitted: "Submitted",
        late: "Late",
        missing: "Missing",
      },
      captions: {
        expected: "submissions today",
        submitted: "{percent}% completion",
        late: "still accepted",
        missing: "need reminder",
      },
    },
    health: {
      title: "Daily report health",
      subtitle: "Submission status by team",
    },
    table: {
      title: "Late & missing submissions",
      subtitle: "Employees who need reminder or follow-up",
      columns: {
        employee: "Employee",
        team: "Team",
        status: "Status",
        submitted: "Submitted",
      },
      openDetail: "Employee submission detail",
      sendReminder: "Send reminder",
      exportStatus: "Export status",
    },
    actions: {
      eyebrow: "INTERACTION STATES",
      title: "Daily report actions",
      subtitle:
        "Targeted reminder, bulk reminder, and completion acknowledgment.",
    },
    reminder: {
      title: "Send reminder",
      subtitle: "Notify employees with late or missing daily reports.",
      recipients: "Recipients",
      recipientsValue: "{count} missing employees",
      channel: "Channel",
      channelValue: "In-app notification",
      message: "Message",
      dueTime: "Due time",
      dueTimeValue: "Today · {time}",
      noticeTitle: "{count} employees will be notified.",
      noticeBody: "Existing report drafts are not changed.",
      cancel: "Cancel",
      send: "Send reminder",
    },
    sent: {
      title: "Reminder sent",
      notified: "{count} employees notified",
      note: "Delivery status updates will appear in Activity Log.",
      delivered: "Delivered · {count}",
      pending: "Pending · {count}",
      viewActivity: "View activity",
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Daily reports: monitor → remind → submission updates",
      subtitle:
        "Admin monitors compliance; the employee remains the author of their daily report.",
      steps: {
        monitor: {
          title: "Monitor today",
          subtitle: "Review expected vs submitted",
          details: [
            { label: "Summary", body: "Expected / submitted / late / missing" },
            { label: "Breakdown", body: "By team and employee" },
            { label: "Filter", body: "Missing, late, or specific team" },
          ],
        },
        inspect: {
          title: "Inspect employee",
          subtitle: "Open submission status detail",
          details: [
            { label: "Context", body: "Employee + team + manager" },
            { label: "State", body: "Missing / late / submitted" },
            { label: "History", body: "Recent daily-report pattern" },
          ],
        },
        remind: {
          title: "Send reminder",
          subtitle: "Choose one or bulk recipients",
          details: [
            { label: "Channel", body: "In-app notification" },
            { label: "Message", body: "Company reminder template" },
            {
              label: "Guardrail",
              body: "Do not mark report submitted automatically",
            },
          ],
        },
        delivery: {
          title: "Delivery result",
          subtitle: "Track reminder outcome",
          details: [
            { label: "Sent", body: "Timestamp + recipient count" },
            { label: "Failed", body: "Retry only failed recipients" },
            { label: "Audit", body: "Reminder action is logged" },
          ],
        },
        arrives: {
          title: "Submission arrives",
          subtitle: "Monitoring updates automatically",
          details: [
            { label: "State", body: "Missing → submitted/late" },
            { label: "Dashboard", body: "Daily health KPI updates" },
            {
              label: "No overwrite",
              body: "Admin cannot edit employee-authored content",
            },
          ],
        },
      },
      rule: "Reminder state and submission state are separate; sending a reminder never changes the employee submission status.",
    },
    detail: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Daily Reports — reminder delivery and submission detail",
      subtitle:
        "Reminder and submission are distinct states with targeted retry and employee-authored content preserved.",
      compose: {
        pill: "REMINDER",
        title: "Compose reminder",
        subtitle: "Target one employee, a team, or all missing submissions",
        recipients: "Recipients *",
        recipientsValue: "{count} missing employees · filter: today",
        channel: "Channel *",
        channelValue: "In-app notification",
        message: "Message *",
        dueTime: "Due time",
        dueTimeValue: "Today · {time}",
        noteTitle: "Guardrail",
        noteBody:
          "Sending a reminder does not change submission state and does not modify drafts.",
        cancel: "Cancel",
        send: "Send reminder",
        footnote: "Delivery attempts are logged per recipient.",
      },
      delivery: {
        pill: "DELIVERY",
        title: "Reminder delivery result",
        subtitle: "Show sent, failed, and retryable recipients",
        delivered: "Delivered",
        deliveredValue: "{count} employees · timestamp recorded",
        pending: "Pending",
        pendingValue: "{count} employee · awaiting device delivery",
        failed: "Failed",
        failedValue: "{count} employee · notification token unavailable",
        noteTitle: "Partial failure",
        noteBody:
          "Retry only the failed recipient; do not resend to delivered employees.",
        viewRecipients: "View recipients",
        retryFailed: "Retry failed",
        activityLog: "Activity Log",
        activityLogValue: "Reminder batch + delivery summary",
        footnote: "Batch success does not imply report submission.",
      },
      submission: {
        pill: "SUBMISSION",
        title: "Employee submission detail",
        subtitle: "Read-only monitoring of employee-authored report",
        employee: "Employee",
        status: "Status",
        statusValue: "{status} · submitted {time}",
        content: "Content",
        contentValue: "Employee-authored daily summary · read only",
        reminderHistory: "Reminder history",
        reminderHistoryValue: "{time} sent · delivered",
        noteTitle: "Automatic dashboard update",
        noteBody:
          "Missing → Late/Submitted updates team health and daily KPI automatically.",
        openEmployee: "Open employee",
        viewReport: "View report",
        footnote:
          "Company Admin can monitor but cannot rewrite worker daily-report content.",
      },
    },
  },

  id: {
    intro: {
      title: "Pantau kepatuhan pengumpulan per tim dan karyawan",
      subtitle: "Jaga laporan harian tetap sehat",
      exportDailyStatus: "Ekspor status harian",
      sendReminder: "Kirim pengingat",
    },
    stats: {
      labels: {
        expected: "Diharapkan",
        submitted: "Terkirim",
        late: "Terlambat",
        missing: "Belum ada",
      },
      captions: {
        expected: "pengumpulan hari ini",
        submitted: "{percent}% selesai",
        late: "masih diterima",
        missing: "perlu pengingat",
      },
    },
    health: {
      title: "Kesehatan laporan harian",
      subtitle: "Status pengumpulan per tim",
    },
    table: {
      title: "Pengumpulan terlambat & belum ada",
      subtitle: "Karyawan yang perlu pengingat atau tindak lanjut",
      columns: {
        employee: "Karyawan",
        team: "Tim",
        status: "Status",
        submitted: "Dikirim",
      },
      openDetail: "Detail pengumpulan karyawan",
      sendReminder: "Kirim pengingat",
      exportStatus: "Ekspor status",
    },
    actions: {
      eyebrow: "STATUS INTERAKSI",
      title: "Aksi laporan harian",
      subtitle:
        "Pengingat bertarget, pengingat massal, dan konfirmasi penyelesaian.",
    },
    reminder: {
      title: "Kirim pengingat",
      subtitle:
        "Beri tahu karyawan yang laporan hariannya terlambat atau belum ada.",
      recipients: "Penerima",
      recipientsValue: "{count} karyawan belum mengirim",
      channel: "Saluran",
      channelValue: "Notifikasi dalam aplikasi",
      message: "Pesan",
      dueTime: "Batas waktu",
      dueTimeValue: "Hari ini · {time}",
      noticeTitle: "{count} karyawan akan diberi tahu.",
      noticeBody: "Draf laporan yang sudah ada tidak diubah.",
      cancel: "Batal",
      send: "Kirim pengingat",
    },
    sent: {
      title: "Pengingat terkirim",
      notified: "{count} karyawan diberi tahu",
      note: "Pembaruan status pengiriman akan muncul di Log Aktivitas.",
      delivered: "Terkirim · {count}",
      pending: "Menunggu · {count}",
      viewActivity: "Lihat aktivitas",
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Laporan harian: pantau → ingatkan → pembaruan pengumpulan",
      subtitle:
        "Admin memantau kepatuhan; karyawan tetap menjadi penulis laporan hariannya.",
      steps: {
        monitor: {
          title: "Pantau hari ini",
          subtitle: "Tinjau yang diharapkan vs yang terkirim",
          details: [
            {
              label: "Ringkasan",
              body: "Diharapkan / terkirim / terlambat / belum ada",
            },
            { label: "Rincian", body: "Per tim dan karyawan" },
            { label: "Filter", body: "Belum ada, terlambat, atau tim tertentu" },
          ],
        },
        inspect: {
          title: "Periksa karyawan",
          subtitle: "Buka detail status pengumpulan",
          details: [
            { label: "Konteks", body: "Karyawan + tim + manajer" },
            { label: "Status", body: "Belum ada / terlambat / terkirim" },
            { label: "Riwayat", body: "Pola laporan harian terkini" },
          ],
        },
        remind: {
          title: "Kirim pengingat",
          subtitle: "Pilih satu atau banyak penerima",
          details: [
            { label: "Saluran", body: "Notifikasi dalam aplikasi" },
            { label: "Pesan", body: "Templat pengingat perusahaan" },
            {
              label: "Pengaman",
              body: "Jangan tandai laporan terkirim secara otomatis",
            },
          ],
        },
        delivery: {
          title: "Hasil pengiriman",
          subtitle: "Lacak hasil pengingat",
          details: [
            { label: "Terkirim", body: "Waktu + jumlah penerima" },
            { label: "Gagal", body: "Coba ulang hanya penerima yang gagal" },
            { label: "Audit", body: "Aksi pengingat dicatat" },
          ],
        },
        arrives: {
          title: "Pengumpulan masuk",
          subtitle: "Pemantauan diperbarui otomatis",
          details: [
            { label: "Status", body: "Belum ada → terkirim/terlambat" },
            { label: "Dasbor", body: "KPI kesehatan harian diperbarui" },
            {
              label: "Tanpa penimpaan",
              body: "Admin tidak dapat mengubah konten tulisan karyawan",
            },
          ],
        },
      },
      rule: "Status pengingat dan status pengumpulan terpisah; mengirim pengingat tidak pernah mengubah status pengumpulan karyawan.",
    },
    detail: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Laporan Harian — pengiriman pengingat dan detail pengumpulan",
      subtitle:
        "Pengingat dan pengumpulan adalah status yang terpisah, dengan percobaan ulang bertarget dan isi tulisan karyawan tetap utuh.",
      compose: {
        pill: "PENGINGAT",
        title: "Susun pengingat",
        subtitle:
          "Targetkan satu karyawan, satu tim, atau semua yang belum mengirim",
        recipients: "Penerima *",
        recipientsValue: "{count} karyawan belum mengirim · filter: hari ini",
        channel: "Saluran *",
        channelValue: "Notifikasi dalam aplikasi",
        message: "Pesan *",
        dueTime: "Batas waktu",
        dueTimeValue: "Hari ini · {time}",
        noteTitle: "Pengaman",
        noteBody:
          "Mengirim pengingat tidak mengubah status pengumpulan dan tidak mengubah draf.",
        cancel: "Batal",
        send: "Kirim pengingat",
        footnote: "Setiap upaya pengiriman dicatat per penerima.",
      },
      delivery: {
        pill: "PENGIRIMAN",
        title: "Hasil pengiriman pengingat",
        subtitle:
          "Tampilkan penerima yang terkirim, gagal, dan dapat dicoba ulang",
        delivered: "Terkirim",
        deliveredValue: "{count} karyawan · waktu tercatat",
        pending: "Menunggu",
        pendingValue: "{count} karyawan · menunggu pengiriman ke perangkat",
        failed: "Gagal",
        failedValue: "{count} karyawan · token notifikasi tidak tersedia",
        noteTitle: "Gagal sebagian",
        noteBody:
          "Coba ulang hanya untuk penerima yang gagal; jangan kirim ulang ke karyawan yang sudah menerima.",
        viewRecipients: "Lihat penerima",
        retryFailed: "Coba ulang yang gagal",
        activityLog: "Log Aktivitas",
        activityLogValue: "Batch pengingat + ringkasan pengiriman",
        footnote:
          "Keberhasilan batch tidak berarti laporan sudah dikumpulkan.",
      },
      submission: {
        pill: "PENGUMPULAN",
        title: "Detail pengumpulan karyawan",
        subtitle: "Pemantauan hanya-baca atas laporan yang ditulis karyawan",
        employee: "Karyawan",
        status: "Status",
        statusValue: "{status} · dikirim {time}",
        content: "Konten",
        contentValue: "Ringkasan harian tulisan karyawan · hanya baca",
        reminderHistory: "Riwayat pengingat",
        reminderHistoryValue: "{time} dikirim · sampai",
        noteTitle: "Pembaruan dasbor otomatis",
        noteBody:
          "Belum ada → Terlambat/Terkirim memperbarui kesehatan tim dan KPI harian secara otomatis.",
        openEmployee: "Buka karyawan",
        viewReport: "Lihat laporan",
        footnote:
          "Admin Perusahaan dapat memantau tetapi tidak dapat menulis ulang isi laporan harian pekerja.",
      },
    },
  },

  ja: {
    intro: {
      title: "チームと従業員ごとの提出状況を確認",
      subtitle: "日報の提出を健全に保つ",
      exportDailyStatus: "日次ステータスを書き出す",
      sendReminder: "リマインダーを送信",
    },
    stats: {
      labels: {
        expected: "提出予定",
        submitted: "提出済み",
        late: "遅延",
        missing: "未提出",
      },
      captions: {
        expected: "本日の提出予定数",
        submitted: "完了率 {percent}%",
        late: "受付は継続中",
        missing: "リマインドが必要",
      },
    },
    health: {
      title: "日報の健全性",
      subtitle: "チーム別の提出状況",
    },
    table: {
      title: "遅延・未提出の日報",
      subtitle: "リマインドまたはフォローアップが必要な従業員",
      columns: {
        employee: "従業員",
        team: "チーム",
        status: "ステータス",
        submitted: "提出時刻",
      },
      openDetail: "従業員の提出詳細",
      sendReminder: "リマインダーを送信",
      exportStatus: "ステータスを書き出す",
    },
    actions: {
      eyebrow: "インタラクション状態",
      title: "日報のアクション",
      subtitle: "個別リマインド、一括リマインド、完了の確認。",
    },
    reminder: {
      title: "リマインダーを送信",
      subtitle: "日報が遅延または未提出の従業員に通知します。",
      recipients: "宛先",
      recipientsValue: "未提出の従業員 {count} 名",
      channel: "チャネル",
      channelValue: "アプリ内通知",
      message: "メッセージ",
      dueTime: "期限",
      dueTimeValue: "本日 · {time}",
      noticeTitle: "{count} 名の従業員に通知されます。",
      noticeBody: "既存の日報の下書きは変更されません。",
      cancel: "キャンセル",
      send: "リマインダーを送信",
    },
    sent: {
      title: "リマインダーを送信しました",
      notified: "{count} 名の従業員に通知しました",
      note: "配信ステータスの更新はアクティビティログに表示されます。",
      delivered: "配信済み · {count}",
      pending: "保留中 · {count}",
      viewActivity: "アクティビティを見る",
    },
    flow: {
      eyebrow: "エンドツーエンドのフロー",
      title: "日報：状況確認 → リマインド → 提出の更新",
      subtitle:
        "管理者は提出状況を確認しますが、日報の作成者は従業員のままです。",
      steps: {
        monitor: {
          title: "本日の状況確認",
          subtitle: "提出予定と提出済みを確認",
          details: [
            { label: "サマリー", body: "提出予定 / 提出済み / 遅延 / 未提出" },
            { label: "内訳", body: "チームと従業員ごと" },
            { label: "絞り込み", body: "未提出・遅延・特定のチーム" },
          ],
        },
        inspect: {
          title: "従業員を確認",
          subtitle: "提出ステータスの詳細を開く",
          details: [
            { label: "コンテキスト", body: "従業員 + チーム + 管理者" },
            { label: "状態", body: "未提出 / 遅延 / 提出済み" },
            { label: "履歴", body: "最近の日報の傾向" },
          ],
        },
        remind: {
          title: "リマインダーを送信",
          subtitle: "個別または一括で宛先を選択",
          details: [
            { label: "チャネル", body: "アプリ内通知" },
            { label: "メッセージ", body: "会社のリマインドテンプレート" },
            {
              label: "ガードレール",
              body: "日報を自動的に提出済みにしない",
            },
          ],
        },
        delivery: {
          title: "配信結果",
          subtitle: "リマインダーの結果を追跡",
          details: [
            { label: "送信", body: "タイムスタンプ + 宛先数" },
            { label: "失敗", body: "失敗した宛先のみ再送" },
            { label: "監査", body: "リマインド操作は記録されます" },
          ],
        },
        arrives: {
          title: "提出が届く",
          subtitle: "モニタリングは自動で更新",
          details: [
            { label: "状態", body: "未提出 → 提出済み/遅延" },
            { label: "ダッシュボード", body: "日次の健全性 KPI が更新" },
            {
              label: "上書きなし",
              body: "管理者は従業員が書いた内容を編集できません",
            },
          ],
        },
      },
      rule: "リマインダーの状態と提出の状態は別です。リマインダーを送っても従業員の提出ステータスが変わることはありません。",
    },
    detail: {
      eyebrow: "具体的な運用状態",
      title: "日報 — リマインダー配信と提出の詳細",
      subtitle:
        "リマインダーと提出は別々の状態で、対象を絞った再送を行い、従業員が書いた内容はそのまま保持されます。",
      compose: {
        pill: "リマインダー",
        title: "リマインダーを作成",
        subtitle: "従業員 1 名、チーム、または未提出者全員を対象にします",
        recipients: "宛先 *",
        recipientsValue: "未提出の従業員 {count} 名 · フィルター：本日",
        channel: "チャネル *",
        channelValue: "アプリ内通知",
        message: "メッセージ *",
        dueTime: "期限",
        dueTimeValue: "本日 · {time}",
        noteTitle: "ガードレール",
        noteBody:
          "リマインダーの送信は提出状態を変更せず、下書きも変更しません。",
        cancel: "キャンセル",
        send: "リマインダーを送信",
        footnote: "配信の試行は宛先ごとに記録されます。",
      },
      delivery: {
        pill: "配信",
        title: "リマインダー配信結果",
        subtitle: "送信済み・失敗・再送可能な宛先を表示します",
        delivered: "配信済み",
        deliveredValue: "従業員 {count} 名 · タイムスタンプ記録済み",
        pending: "保留中",
        pendingValue: "従業員 {count} 名 · 端末への配信待ち",
        failed: "失敗",
        failedValue: "従業員 {count} 名 · 通知トークンが利用できません",
        noteTitle: "一部失敗",
        noteBody:
          "失敗した宛先のみ再送してください。配信済みの従業員には再送しないでください。",
        viewRecipients: "宛先を見る",
        retryFailed: "失敗分を再送",
        activityLog: "アクティビティログ",
        activityLogValue: "リマインダーのバッチ + 配信サマリー",
        footnote: "バッチの成功は日報の提出を意味しません。",
      },
      submission: {
        pill: "提出",
        title: "従業員の提出詳細",
        subtitle: "従業員が作成した日報の閲覧専用モニタリング",
        employee: "従業員",
        status: "ステータス",
        statusValue: "{status} · {time} 提出",
        content: "内容",
        contentValue: "従業員が作成した日次サマリー · 閲覧のみ",
        reminderHistory: "リマインダー履歴",
        reminderHistoryValue: "{time} 送信 · 配信済み",
        noteTitle: "ダッシュボードの自動更新",
        noteBody:
          "未提出 → 遅延/提出済み になると、チームの健全性と日次 KPI が自動的に更新されます。",
        openEmployee: "従業員を開く",
        viewReport: "日報を見る",
        footnote:
          "会社管理者はモニタリングはできますが、作業者の日報の内容を書き換えることはできません。",
      },
    },
  },
});
