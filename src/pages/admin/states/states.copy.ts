import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin "Empty & Access States" area.
 *
 * Figma (file IZZYiAlNAdYAAcX2z5AtOm, page 06 · Company Admin Experience,
 * 1182:5690):
 *   AD-10  · Empty & Access States      — 1225:1044 (base screen)
 *   AD-10B · Loading Error Confirmation — 1226:1202 (interaction states)
 *   AD-10C · Global State Recovery Flow — 1226:4070 (lifecycle flow)
 *   AD-10D · Recovery Detailed States   — 1239:827  (detailed states)
 *
 * EN is Figma-verbatim, including the curly apostrophe in "Couldn’t load
 * reports" and the curly quotes inside the "Resolved empty" note. ID and JA
 * are faithful translations. Record data — the deactivated employee name and
 * the skeleton row count — lives in states.mock.ts, never here.
 */

interface LabelledDetail {
  label: string;
  detail: string;
}

type ThreeDetails = [LabelledDetail, LabelledDetail, LabelledDetail];

interface FlowStep {
  title: string;
  subtitle: string;
  details: ThreeDetails;
}

export interface StatesCopy {
  /** AD-10 screen intro row (1225:1320). */
  screen: {
    heading: string;
    subheading: string;
    reviewScope: string;
    inviteEmployee: string;
  };
  /** AD-10 reference cards (1225:1328 / 1225:1335 / 1225:1342). */
  cards: {
    noEmployees: { title: string; body: string; action: string };
    noReports: { title: string; body: string; action: string };
    boundary: { title: string; body: string; action: string };
  };
  /** AD-10 "State coverage" card (1225:1349). */
  coverage: {
    title: string;
    subtitle: string;
    rows: {
      loading: LabelledDetail;
      error: LabelledDetail;
      noPermission: LabelledDetail;
      noResults: LabelledDetail;
      destructive: LabelledDetail;
    };
  };
  /** AD-10B "System states" board (1226:1202). */
  systemStates: {
    eyebrow: string;
    title: string;
    subtitle: string;
    loadingList: string;
    loadError: {
      title: string;
      body: string;
      retry: string;
      resetFilters: string;
    };
    confirm: {
      title: string;
      /** "{name} will no longer be able to sign in. …" */
      body: string;
      note: string;
      cancel: string;
      deactivate: string;
    };
  };
  /** AD-10C "Global State Recovery Flow" board (1226:4070). */
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      loading: FlowStep;
      empty: FlowStep;
      error: FlowStep;
      permission: FlowStep;
      destructive: FlowStep;
    };
    rule: string;
  };
  /** AD-10D "Recovery Detailed States" board (1239:827). */
  detail: {
    eyebrow: string;
    title: string;
    subtitle: string;
    read: {
      pill: string;
      title: string;
      subtitle: string;
      rows: ThreeDetails;
      note: LabelledDetail;
      resetFilters: string;
      primaryAction: string;
      footer: string;
    };
    error: {
      pill: string;
      title: string;
      subtitle: string;
      rows: ThreeDetails;
      note: LabelledDetail;
      cancel: string;
      retryFailed: string;
      footer: string;
    };
    boundary: {
      pill: string;
      title: string;
      subtitle: string;
      noPermission: LabelledDetail;
      privacy: LabelledDetail;
      destructiveAction: LabelledDetail;
      confirmation: LabelledDetail;
      success: LabelledDetail;
      returnAction: string;
      viewActivity: string;
      footer: string;
    };
  };
}

export const STATES_COPY = defineSectionCopy<StatesCopy>({
  en: {
    screen: {
      heading: "Reference states for empty and permission boundaries",
      subheading: "Use when data is unavailable or scope is restricted",
      reviewScope: "Review scope",
      inviteEmployee: "Invite employee",
    },
    cards: {
      noEmployees: {
        title: "No employees yet",
        body: "Invite your first employees to start using the company workspace.",
        action: "Invite employee",
      },
      noReports: {
        title: "No open reports",
        body: "All reports are resolved. Keep monitoring daily reports and follow-up health.",
        action: "View resolved",
      },
      boundary: {
        title: "Permission boundary",
        body: "Company Admin only sees company data, not cross-company platform data.",
        action: "Review scope",
      },
    },
    coverage: {
      title: "State coverage",
      subtitle: "Admin screens should also handle these non-happy paths",
      rows: {
        loading: {
          label: "Loading",
          detail: "Skeleton for lists, KPI cards, and detail panels",
        },
        error: {
          label: "Error",
          detail: "Retry and preserve filters/context",
        },
        noPermission: {
          label: "No permission",
          detail: "Explain company boundary without exposing platform data",
        },
        noResults: {
          label: "No results",
          detail: "Keep filters visible and provide clear reset action",
        },
        destructive: {
          label: "Destructive confirmation",
          detail: "Deactivate employee / reset rule / manual adjustment",
        },
      },
    },
    systemStates: {
      eyebrow: "INTERACTION STATES",
      title: "System states",
      subtitle:
        "Concrete references for loading, errors, no results, and confirmation.",
      loadingList: "Loading list",
      loadError: {
        title: "Couldn’t load reports",
        body: "Your filters are preserved. Try again without losing context.",
        retry: "Retry",
        resetFilters: "Reset filters",
      },
      confirm: {
        title: "Deactivate employee?",
        body: "{name} will no longer be able to sign in. Existing reports, daily reports, and activity history remain available.",
        note: "This action can be reversed by reactivating the account.",
        cancel: "Cancel",
        deactivate: "Deactivate employee",
      },
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Non-happy paths: preserve context and recover safely",
      subtitle: "Every admin module must implement these states consistently.",
      steps: {
        loading: {
          title: "Loading",
          subtitle: "Keep structure while data is pending",
          details: [
            { label: "Pattern", detail: "Skeleton list/card/detail" },
            { label: "Preserve", detail: "Current filters and route" },
            { label: "Avoid", detail: "Blank white page" },
          ],
        },
        empty: {
          title: "Empty / no results",
          subtitle: "Explain why nothing is shown",
          details: [
            { label: "Empty data", detail: "Offer first relevant action" },
            { label: "No results", detail: "Keep filters + reset" },
            { label: "Resolved empty", detail: "Celebrate without losing nav" },
          ],
        },
        error: {
          title: "Error",
          subtitle: "Fail without losing work",
          details: [
            { label: "Read error", detail: "Retry + retain filters" },
            { label: "Save error", detail: "Keep form values" },
            {
              label: "Partial failure",
              detail: "Identify failed recipients/items",
            },
          ],
        },
        permission: {
          title: "No permission",
          subtitle: "Explain company boundary",
          details: [
            {
              label: "Message",
              detail: "Not authorized for this company action",
            },
            { label: "Never expose", detail: "Cross-company or platform data" },
            { label: "Recovery", detail: "Return to allowed previous screen" },
          ],
        },
        destructive: {
          title: "Destructive confirmation",
          subtitle: "Require explicit final intent",
          details: [
            { label: "Examples", detail: "Deactivate / archive / reset" },
            { label: "Summary", detail: "Consequences + preserved data" },
            { label: "Result", detail: "Success state + Activity Log entry" },
          ],
        },
      },
      rule: "Context preservation is mandatory: error, permission, and retry states must not silently reset filters, forms, or selected objects.",
    },
    detail: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title:
        "Global states — concrete loading, error, permission, destructive recovery",
      subtitle:
        "Every module uses the same recovery contract so filters, forms, and selected objects survive non-happy paths.",
      read: {
        pill: "READ STATES",
        title: "Loading / empty / no results",
        subtitle: "Keep the current structure and route visible",
        rows: [
          {
            label: "Loading",
            detail:
              "Skeleton list + KPI + detail panel · filters remain visible",
          },
          { label: "Empty data", detail: "Explain why + first relevant action" },
          {
            label: "No results",
            detail: "Keep query and filters + Reset filters action",
          },
        ],
        note: {
          label: "Resolved empty",
          detail:
            "“No open reports” may be a positive state; keep navigation and monitoring actions available.",
        },
        resetFilters: "Reset filters",
        primaryAction: "Primary action",
        footer: "Never replace a recoverable state with a blank white screen.",
      },
      error: {
        pill: "ERROR",
        title: "Read / save / partial failure",
        subtitle: "Fail without losing context or completed work",
        rows: [
          {
            label: "Read error",
            detail: "Retry with current filters and selected object preserved",
          },
          {
            label: "Save error",
            detail: "Keep form values and validation context",
          },
          {
            label: "Partial failure",
            detail: "Identify failed recipients/items only",
          },
        ],
        note: {
          label: "Retry contract",
          detail:
            "Retry must not duplicate successful operations such as delivered reminders or created transactions.",
        },
        cancel: "Cancel",
        retryFailed: "Retry failed",
        footer:
          "Errors are observable but should not silently mutate business state.",
      },
      boundary: {
        pill: "BOUNDARY",
        title: "No permission / destructive success",
        subtitle:
          "Protect company boundaries and confirm irreversible-looking actions",
        noPermission: {
          label: "No permission",
          detail: "Not authorized for this company action",
        },
        privacy: {
          label: "Privacy",
          detail:
            "Never reveal cross-company data, counts, identifiers, or existence through error messages.",
        },
        destructiveAction: {
          label: "Destructive action",
          detail: "Deactivate employee / archive team / reset rules",
        },
        confirmation: {
          label: "Confirmation",
          detail: "Show consequence + preserved data + explicit final action",
        },
        success: {
          label: "Success state",
          detail:
            "Show the resulting state and link to Activity Log / related object.",
        },
        returnAction: "Return",
        viewActivity: "View activity",
        footer:
          "Context preservation is mandatory across error, permission, and retry states.",
      },
    },
  },

  id: {
    screen: {
      heading: "Status rujukan untuk kondisi kosong dan batas izin",
      subheading: "Gunakan saat data tidak tersedia atau cakupan dibatasi",
      reviewScope: "Tinjau cakupan",
      inviteEmployee: "Undang karyawan",
    },
    cards: {
      noEmployees: {
        title: "Belum ada karyawan",
        body: "Undang karyawan pertama Anda untuk mulai menggunakan ruang kerja perusahaan.",
        action: "Undang karyawan",
      },
      noReports: {
        title: "Tidak ada laporan terbuka",
        body: "Semua laporan telah selesai. Terus pantau laporan harian dan kesehatan tindak lanjut.",
        action: "Lihat yang selesai",
      },
      boundary: {
        title: "Batas izin",
        body: "Admin Perusahaan hanya melihat data perusahaan, bukan data platform lintas perusahaan.",
        action: "Tinjau cakupan",
      },
    },
    coverage: {
      title: "Cakupan status",
      subtitle: "Layar admin juga harus menangani jalur non-ideal berikut",
      rows: {
        loading: {
          label: "Memuat",
          detail: "Kerangka untuk daftar, kartu KPI, dan panel detail",
        },
        error: {
          label: "Kesalahan",
          detail: "Coba lagi dan pertahankan filter/konteks",
        },
        noPermission: {
          label: "Tidak ada izin",
          detail: "Jelaskan batas perusahaan tanpa membuka data platform",
        },
        noResults: {
          label: "Tidak ada hasil",
          detail: "Tetap tampilkan filter dan sediakan aksi reset yang jelas",
        },
        destructive: {
          label: "Konfirmasi destruktif",
          detail:
            "Nonaktifkan karyawan / atur ulang aturan / penyesuaian manual",
        },
      },
    },
    systemStates: {
      eyebrow: "STATUS INTERAKSI",
      title: "Status sistem",
      subtitle:
        "Referensi konkret untuk pemuatan, kesalahan, tanpa hasil, dan konfirmasi.",
      loadingList: "Memuat daftar",
      loadError: {
        title: "Tidak dapat memuat laporan",
        body: "Filter Anda tetap tersimpan. Coba lagi tanpa kehilangan konteks.",
        retry: "Coba lagi",
        resetFilters: "Atur ulang filter",
      },
      confirm: {
        title: "Nonaktifkan karyawan?",
        body: "{name} tidak akan dapat masuk lagi. Laporan, laporan harian, dan riwayat aktivitas yang ada tetap tersedia.",
        note: "Tindakan ini dapat dibatalkan dengan mengaktifkan kembali akun.",
        cancel: "Batal",
        deactivate: "Nonaktifkan karyawan",
      },
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Jalur non-ideal: pertahankan konteks dan pulih dengan aman",
      subtitle:
        "Setiap modul admin harus menerapkan status ini secara konsisten.",
      steps: {
        loading: {
          title: "Memuat",
          subtitle: "Pertahankan struktur selama data belum tersedia",
          details: [
            { label: "Pola", detail: "Kerangka daftar/kartu/detail" },
            { label: "Pertahankan", detail: "Filter dan rute saat ini" },
            { label: "Hindari", detail: "Halaman putih kosong" },
          ],
        },
        empty: {
          title: "Kosong / tanpa hasil",
          subtitle: "Jelaskan mengapa tidak ada yang ditampilkan",
          details: [
            {
              label: "Data kosong",
              detail: "Tawarkan aksi pertama yang relevan",
            },
            { label: "Tidak ada hasil", detail: "Pertahankan filter + reset" },
            {
              label: "Kosong karena selesai",
              detail: "Rayakan tanpa menghilangkan navigasi",
            },
          ],
        },
        error: {
          title: "Kesalahan",
          subtitle: "Gagal tanpa kehilangan pekerjaan",
          details: [
            {
              label: "Kesalahan baca",
              detail: "Coba lagi + pertahankan filter",
            },
            { label: "Kesalahan simpan", detail: "Pertahankan nilai formulir" },
            {
              label: "Kegagalan sebagian",
              detail: "Identifikasi penerima/item yang gagal",
            },
          ],
        },
        permission: {
          title: "Tidak ada izin",
          subtitle: "Jelaskan batas perusahaan",
          details: [
            {
              label: "Pesan",
              detail: "Tidak berwenang untuk tindakan perusahaan ini",
            },
            {
              label: "Jangan pernah tampilkan",
              detail: "Data lintas perusahaan atau platform",
            },
            {
              label: "Pemulihan",
              detail: "Kembali ke layar sebelumnya yang diizinkan",
            },
          ],
        },
        destructive: {
          title: "Konfirmasi destruktif",
          subtitle: "Wajibkan niat akhir yang eksplisit",
          details: [
            { label: "Contoh", detail: "Nonaktifkan / arsipkan / atur ulang" },
            {
              label: "Ringkasan",
              detail: "Konsekuensi + data yang dipertahankan",
            },
            { label: "Hasil", detail: "Status berhasil + entri Log Aktivitas" },
          ],
        },
      },
      rule: "Pelestarian konteks bersifat wajib: status kesalahan, izin, dan coba lagi tidak boleh diam-diam mengatur ulang filter, formulir, atau objek yang dipilih.",
    },
    detail: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title:
        "Status global — pemuatan, kesalahan, izin, dan pemulihan destruktif secara konkret",
      subtitle:
        "Setiap modul memakai kontrak pemulihan yang sama agar filter, formulir, dan objek terpilih bertahan pada jalur non-ideal.",
      read: {
        pill: "STATUS BACA",
        title: "Memuat / kosong / tanpa hasil",
        subtitle: "Tetap tampilkan struktur dan rute saat ini",
        rows: [
          {
            label: "Memuat",
            detail:
              "Kerangka daftar + KPI + panel detail · filter tetap terlihat",
          },
          {
            label: "Data kosong",
            detail: "Jelaskan alasannya + aksi pertama yang relevan",
          },
          {
            label: "Tidak ada hasil",
            detail: "Pertahankan kueri dan filter + aksi Atur ulang filter",
          },
        ],
        note: {
          label: "Kosong karena selesai",
          detail:
            "“Tidak ada laporan terbuka” bisa menjadi status positif; tetap sediakan navigasi dan aksi pemantauan.",
        },
        resetFilters: "Atur ulang filter",
        primaryAction: "Aksi utama",
        footer:
          "Jangan pernah mengganti status yang dapat dipulihkan dengan layar putih kosong.",
      },
      error: {
        pill: "KESALAHAN",
        title: "Kesalahan baca / simpan / sebagian",
        subtitle: "Gagal tanpa kehilangan konteks atau pekerjaan yang selesai",
        rows: [
          {
            label: "Kesalahan baca",
            detail:
              "Coba lagi dengan filter saat ini dan objek terpilih tetap dipertahankan",
          },
          {
            label: "Kesalahan simpan",
            detail: "Pertahankan nilai formulir dan konteks validasi",
          },
          {
            label: "Kegagalan sebagian",
            detail: "Identifikasi hanya penerima/item yang gagal",
          },
        ],
        note: {
          label: "Kontrak coba lagi",
          detail:
            "Coba lagi tidak boleh menduplikasi operasi yang sudah berhasil seperti pengingat terkirim atau transaksi yang dibuat.",
        },
        cancel: "Batal",
        retryFailed: "Coba lagi yang gagal",
        footer:
          "Kesalahan dapat diamati tetapi tidak boleh mengubah status bisnis secara diam-diam.",
      },
      boundary: {
        pill: "BATAS",
        title: "Tidak ada izin / keberhasilan destruktif",
        subtitle:
          "Lindungi batas perusahaan dan konfirmasi tindakan yang tampak tidak dapat dibatalkan",
        noPermission: {
          label: "Tidak ada izin",
          detail: "Tidak berwenang untuk tindakan perusahaan ini",
        },
        privacy: {
          label: "Privasi",
          detail:
            "Jangan pernah mengungkap data lintas perusahaan, jumlah, pengidentifikasi, atau keberadaannya melalui pesan kesalahan.",
        },
        destructiveAction: {
          label: "Tindakan destruktif",
          detail: "Nonaktifkan karyawan / arsipkan tim / atur ulang aturan",
        },
        confirmation: {
          label: "Konfirmasi",
          detail:
            "Tampilkan konsekuensi + data yang dipertahankan + aksi akhir yang eksplisit",
        },
        success: {
          label: "Status berhasil",
          detail:
            "Tampilkan status hasil dan tautkan ke Log Aktivitas / objek terkait.",
        },
        returnAction: "Kembali",
        viewActivity: "Lihat aktivitas",
        footer:
          "Pelestarian konteks bersifat wajib di seluruh status kesalahan, izin, dan coba lagi.",
      },
    },
  },

  ja: {
    screen: {
      heading: "空状態と権限境界のリファレンス状態",
      subheading: "データがない場合や範囲が制限されている場合に使用します",
      reviewScope: "範囲を確認",
      inviteEmployee: "従業員を招待",
    },
    cards: {
      noEmployees: {
        title: "従業員がまだいません",
        body: "最初の従業員を招待して、会社のワークスペースの利用を開始しましょう。",
        action: "従業員を招待",
      },
      noReports: {
        title: "未対応のレポートはありません",
        body: "すべてのレポートが解決済みです。日報とフォローアップの健全性を引き続き確認してください。",
        action: "解決済みを表示",
      },
      boundary: {
        title: "権限の境界",
        body: "会社管理者は自社のデータのみを閲覧でき、会社をまたぐプラットフォームデータは閲覧できません。",
        action: "範囲を確認",
      },
    },
    coverage: {
      title: "状態のカバレッジ",
      subtitle: "管理画面は次の非正常系も扱う必要があります",
      rows: {
        loading: {
          label: "読み込み中",
          detail: "リスト・KPIカード・詳細パネルのスケルトン",
        },
        error: {
          label: "エラー",
          detail: "再試行し、フィルターとコンテキストを保持",
        },
        noPermission: {
          label: "権限なし",
          detail: "プラットフォームデータを露出せずに会社の境界を説明",
        },
        noResults: {
          label: "結果なし",
          detail: "フィルターを表示したまま明確なリセット操作を提供",
        },
        destructive: {
          label: "破壊的操作の確認",
          detail: "従業員の無効化／ルールのリセット／手動調整",
        },
      },
    },
    systemStates: {
      eyebrow: "インタラクション状態",
      title: "システム状態",
      subtitle: "読み込み・エラー・結果なし・確認の具体的なリファレンス。",
      loadingList: "リストを読み込み中",
      loadError: {
        title: "レポートを読み込めませんでした",
        body: "フィルターは保持されています。コンテキストを失わずに再試行してください。",
        retry: "再試行",
        resetFilters: "フィルターをリセット",
      },
      confirm: {
        title: "従業員を無効化しますか？",
        body: "{name} はサインインできなくなります。既存のレポート、日報、アクティビティ履歴は引き続き利用できます。",
        note: "この操作はアカウントを再有効化することで元に戻せます。",
        cancel: "キャンセル",
        deactivate: "従業員を無効化",
      },
    },
    flow: {
      eyebrow: "エンドツーエンドのフロー",
      title: "非正常系：コンテキストを保持し安全に復旧する",
      subtitle:
        "すべての管理モジュールはこれらの状態を一貫して実装する必要があります。",
      steps: {
        loading: {
          title: "読み込み中",
          subtitle: "データ待機中も構造を維持",
          details: [
            { label: "パターン", detail: "リスト／カード／詳細のスケルトン" },
            { label: "保持するもの", detail: "現在のフィルターとルート" },
            { label: "避けること", detail: "真っ白な空白ページ" },
          ],
        },
        empty: {
          title: "空／結果なし",
          subtitle: "何も表示されない理由を説明",
          details: [
            { label: "データが空", detail: "最初に関連する操作を提示" },
            { label: "結果なし", detail: "フィルターを保持＋リセット" },
            {
              label: "解決による空状態",
              detail: "ナビゲーションを保ったまま達成を伝える",
            },
          ],
        },
        error: {
          title: "エラー",
          subtitle: "作業を失わずに失敗する",
          details: [
            { label: "読み取りエラー", detail: "再試行＋フィルター保持" },
            { label: "保存エラー", detail: "フォームの入力値を保持" },
            { label: "部分的な失敗", detail: "失敗した宛先／項目を特定" },
          ],
        },
        permission: {
          title: "権限なし",
          subtitle: "会社の境界を説明",
          details: [
            {
              label: "メッセージ",
              detail: "この会社の操作を実行する権限がありません",
            },
            {
              label: "決して開示しない",
              detail: "会社をまたぐデータやプラットフォームデータ",
            },
            { label: "復旧", detail: "許可された前の画面に戻る" },
          ],
        },
        destructive: {
          title: "破壊的操作の確認",
          subtitle: "明示的な最終意思を求める",
          details: [
            { label: "例", detail: "無効化／アーカイブ／リセット" },
            { label: "概要", detail: "影響＋保持されるデータ" },
            { label: "結果", detail: "成功状態＋アクティビティログの記録" },
          ],
        },
      },
      rule: "コンテキストの保持は必須です。エラー・権限・再試行の状態で、フィルター、フォーム、選択中のオブジェクトを暗黙にリセットしてはいけません。",
    },
    detail: {
      eyebrow: "具体的な運用状態",
      title: "グローバル状態 — 読み込み・エラー・権限・破壊的操作の復旧の具体例",
      subtitle:
        "すべてのモジュールが同じ復旧契約を用い、非正常系でもフィルター、フォーム、選択中のオブジェクトが維持されます。",
      read: {
        pill: "読み取り状態",
        title: "読み込み／空／結果なし",
        subtitle: "現在の構造とルートを表示したままにする",
        rows: [
          {
            label: "読み込み中",
            detail:
              "リスト＋KPI＋詳細パネルのスケルトン・フィルターは表示のまま",
          },
          { label: "データが空", detail: "理由の説明＋最初に関連する操作" },
          {
            label: "結果なし",
            detail: "検索条件とフィルターを保持＋フィルターをリセットする操作",
          },
        ],
        note: {
          label: "解決による空状態",
          detail:
            "「未対応のレポートはありません」は肯定的な状態になり得ます。ナビゲーションと監視操作は利用可能なままにしてください。",
        },
        resetFilters: "フィルターをリセット",
        primaryAction: "主要アクション",
        footer: "復旧可能な状態を真っ白な画面に置き換えてはいけません。",
      },
      error: {
        pill: "エラー",
        title: "読み取り／保存／部分的な失敗",
        subtitle: "コンテキストや完了済みの作業を失わずに失敗する",
        rows: [
          {
            label: "読み取りエラー",
            detail:
              "現在のフィルターと選択中のオブジェクトを保持したまま再試行",
          },
          {
            label: "保存エラー",
            detail: "フォームの入力値と検証コンテキストを保持",
          },
          { label: "部分的な失敗", detail: "失敗した宛先／項目のみを特定" },
        ],
        note: {
          label: "再試行の契約",
          detail:
            "再試行は、送信済みのリマインダーや作成済みの取引など、成功した操作を重複させてはいけません。",
        },
        cancel: "キャンセル",
        retryFailed: "失敗分を再試行",
        footer:
          "エラーは観測可能であるべきですが、業務状態を暗黙に変更してはいけません。",
      },
      boundary: {
        pill: "境界",
        title: "権限なし／破壊的操作の成功",
        subtitle: "会社の境界を保護し、取り消せないように見える操作を確認する",
        noPermission: {
          label: "権限なし",
          detail: "この会社の操作を実行する権限がありません",
        },
        privacy: {
          label: "プライバシー",
          detail:
            "エラーメッセージを通じて、会社をまたぐデータ、件数、識別子、その存在を明かしてはいけません。",
        },
        destructiveAction: {
          label: "破壊的な操作",
          detail: "従業員の無効化／チームのアーカイブ／ルールのリセット",
        },
        confirmation: {
          label: "確認",
          detail: "影響＋保持されるデータ＋明示的な最終操作を表示",
        },
        success: {
          label: "成功状態",
          detail:
            "結果の状態を表示し、アクティビティログ／関連オブジェクトへリンクします。",
        },
        returnAction: "戻る",
        viewActivity: "アクティビティを表示",
        footer:
          "エラー・権限・再試行のすべての状態でコンテキストの保持は必須です。",
      },
    },
  },
});
