import { defineSectionCopy } from "@/i18n/copy";

/** {title, body, cta} of one mint "Next action" panel variant. */
export interface PanelCopy {
  title: string;
  body: string;
  cta: string;
}

/** {title, body} of one "Recent updates" feed entry. */
export interface UpdateCopy {
  title: string;
  body: string;
}

/**
 * Headless Home (WD-18 base + A..L / mobile W-18). One key per Figma string;
 * EN copy is verbatim from the mocks. Employer-name strings are functions so
 * the unified EMPLOYER.name mock (Sakura Care) stays data, not copy.
 */
export interface HomeCopy {
  greeting: {
    morning: (name: string) => string;
    welcome: (name: string) => string;
  };
  subtitle: {
    connected: (employer: string) => string;
    headless: string;
    newUser: string;
    identityPending: string;
    needsAttention: string;
    profileIncomplete: string;
    employerNotConnected: string;
    offline: string;
    loading: string;
    inviteReceived: string;
    profileComplete: string;
    connectedOffline: (employer: string) => string;
    accessEnded: string;
  };
  idCard: {
    label: string;
    viewId: string;
    status: {
      verified: string;
      setupNotFinished: string;
      reviewInProgress: string;
      needsReview: string;
      verifiedCached: string;
    };
  };
  panel: {
    connected: { title: string; body: (employer: string) => string; cta: string };
    headless: PanelCopy;
    newUser: PanelCopy;
    identityPending: PanelCopy;
    needsAttention: PanelCopy;
    profileIncomplete: PanelCopy;
    employerNotConnected: PanelCopy;
    inviteReceived: { title: (employer: string) => string; body: string; cta: string };
    profileComplete: PanelCopy;
    connectedOffline: { title: string; body: (employer: string) => string; cta: string };
    accessEnded: { title: (employer: string) => string; body: string; cta: string };
  };
  offlineBanner: { title: string; body: string; retry: string };
  profileCard: {
    title: string;
    percent: (value: number) => string;
    helper: string;
  };
  statusCard: {
    workTools: { title: string; body: string };
    workToolsOffline: { title: string; badge: string; body: string };
    profileReady: { title: string; badge: string; body: string };
  };
  explore: {
    heading: string;
    careerCv: string;
    japanPreparation: string;
    documentsRecords: string;
    knowledgeQa: string;
    connectEmployer: string;
    employerConnection: string;
    employerAccessHistory: string;
    helpSupport: string;
  };
  coin: {
    title: string;
    caption: string;
  };
  updates: {
    heading: string;
    dailyReportSubmitted: string;
    dailyReportVerified: string;
    identityVerified: UpdateCopy;
    emendaIdCreated: UpdateCopy;
    identitySubmitted: UpdateCopy;
    identityNeedsReview: UpdateCopy;
    profileUpdate: UpdateCopy;
    readyToConnect: UpdateCopy;
    lastSynced: { title: (time: string) => string; body: string };
    inviteReceived: { title: string; body: (employer: string) => string };
    profileComplete: UpdateCopy;
    employerConnected: { title: string; body: (employer: string) => string };
    connectedOffline: UpdateCopy;
    accessEnded: UpdateCopy;
    time: {
      today: string;
      now: string;
      justNow: string;
      offline: string;
      none: string;
    };
  };
}

export const HOME_COPY = defineSectionCopy<HomeCopy>({
  en: {
    greeting: {
      morning: (name) => `Good morning, ${name}`,
      welcome: (name) => `Welcome, ${name}`,
    },
    subtitle: {
      connected: (employer) =>
        `${employer} is connected. Your worker-owned EMENDA ID remains yours.`,
      headless: "Your personal EMENDA space is ready.",
      newUser: "Your EMENDA ID is ready. You can finish setup at your own pace.",
      identityPending:
        "You can keep using EMENDA while your identity is reviewed.",
      needsAttention: "One item needs your attention.",
      profileIncomplete:
        "Complete your profile to make your CV and applications stronger.",
      employerNotConnected: "Your worker-owned account is ready.",
      offline: "Cached account information is still available.",
      loading: "Your EMENDA account",
      inviteReceived: "You have a new employer invitation.",
      profileComplete: "Your profile is complete and ready to use.",
      connectedOffline: (employer) =>
        `${employer} is connected. Cached account information is shown while you are offline.`,
      accessEnded: "Your worker-owned account is ready.",
    },
    idCard: {
      label: "MY EMENDA ID",
      viewId: "View ID",
      status: {
        verified: "Identity verified",
        setupNotFinished: "Identity setup not finished",
        reviewInProgress: "Identity review in progress",
        needsReview: "Identity needs review",
        verifiedCached: "Identity verified · cached",
      },
    },
    panel: {
      connected: {
        title: "Employer connected",
        body: (employer) =>
          `${employer} can access only the information you approved. Your portable profile and records remain yours.`,
        cta: "View Career & CV",
      },
      headless: {
        title: "Connect an employer",
        body: "Use an employer invite when you are ready to unlock work tools.",
        cta: "Connect employer",
      },
      newUser: {
        title: "Finish identity setup",
        body: "Add your identity details and document so your EMENDA ID can be verified.",
        cta: "Continue identity setup",
      },
      identityPending: {
        title: "Identity submitted",
        body: "We will update your EMENDA ID when the review is complete.",
        cta: "View EMENDA ID",
      },
      needsAttention: {
        title: "Review your identity document",
        body: "Some document details could not be confirmed. Review them and submit again.",
        cta: "Review document",
      },
      profileIncomplete: {
        title: "Complete your profile",
        body: "Add experience, skills, languages, and preferences.",
        cta: "Continue profile",
      },
      employerNotConnected: {
        title: "Connect an employer",
        body: "Use an employer invite to unlock work tools. You will review what is shared first.",
        cta: "Connect employer",
      },
      inviteReceived: {
        title: (employer) => `${employer} invited you to connect`,
        body: "Review the employer and exactly what will be shared before connecting.",
        cta: "Review employer",
      },
      profileComplete: {
        title: "Connect an employer",
        body: "Your profile is ready. Connect an employer when you are ready to unlock work tools.",
        cta: "Connect employer",
      },
      connectedOffline: {
        title: "Employer connected · cached",
        body: (employer) =>
          `${employer}’s approved access is shown from your last sync. Changes require internet.`,
        cta: "View connection",
      },
      accessEnded: {
        title: (employer) =>
          `${employer} work access ended. Your EMENDA ID and portable history remain yours.`,
        body: "Review the ended access, or connect another employer when you are ready.",
        cta: "Connect another employer",
      },
    },
    offlineBanner: {
      title: "No internet connection",
      body: "Some information may be out of date until you reconnect.",
      retry: "Try again",
    },
    profileCard: {
      title: "Your profile",
      percent: (value) => `${value}% complete`,
      helper:
        "Add experience, skills, and preferences to strengthen your profile and CV.",
    },
    statusCard: {
      workTools: {
        title: "Work tools unlocked",
        body: "You can now use connected work tools while keeping your portable profile.",
      },
      workToolsOffline: {
        title: "Work tools offline",
        badge: "Offline",
        body: "Connected work tools require internet. Your portable profile remains available.",
      },
      profileReady: {
        title: "Profile ready",
        badge: "Ready",
        body: "Your profile is ready to use for CVs and applications.",
      },
    },
    explore: {
      heading: "Explore",
      careerCv: "Career & CV",
      japanPreparation: "Japan preparation",
      documentsRecords: "Documents & records",
      knowledgeQa: "Knowledge & Q&A",
      connectEmployer: "Connect employer",
      employerConnection: "Employer connection",
      employerAccessHistory: "Employer access history",
      helpSupport: "Help & support",
    },
    coin: {
      title: "Emenda Coin",
      caption: "View balance and reward activity ›",
    },
    updates: {
      heading: "Recent updates",
      dailyReportSubmitted: "Daily Report submitted",
      dailyReportVerified: "Daily Report verified",
      identityVerified: {
        title: "Identity verified",
        body: "Your EMENDA ID is ready to use.",
      },
      emendaIdCreated: {
        title: "EMENDA ID created",
        body: "Finish identity setup when you are ready.",
      },
      identitySubmitted: {
        title: "Identity submitted",
        body: "Verification review is in progress.",
      },
      identityNeedsReview: {
        title: "Identity needs review",
        body: "Review your document to continue.",
      },
      profileUpdate: {
        title: "Profile update",
        body: "Add experience and skills to strengthen your CV.",
      },
      readyToConnect: {
        title: "Ready to connect",
        body: "Use an employer invite when you receive one.",
      },
      lastSynced: {
        title: (time) => `Last synced ${time}`,
        body: "Cached information is shown while offline.",
      },
      inviteReceived: {
        title: "Employer invitation received",
        body: (employer) => `${employer} wants to connect with your EMENDA ID.`,
      },
      profileComplete: {
        title: "Profile complete",
        body: "Your profile is ready for CVs and applications.",
      },
      employerConnected: {
        title: "Employer connected",
        body: (employer) => `${employer} connected with your consent.`,
      },
      connectedOffline: {
        title: "Employer connected",
        body: "Cached employer connection information is shown while offline.",
      },
      accessEnded: {
        title: "Employer access ended",
        body: "Review the ended access, or connect another employer when you are ready.",
      },
      time: {
        today: "Today",
        now: "Now",
        justNow: "Just now",
        offline: "Offline",
        none: "—",
      },
    },
  },
  id: {
    greeting: {
      morning: (name) => `Selamat pagi, ${name}`,
      welcome: (name) => `Selamat datang, ${name}`,
    },
    subtitle: {
      connected: (employer) =>
        `${employer} sudah terhubung. EMENDA ID milik pekerja tetap menjadi milik Anda.`,
      headless: "Ruang EMENDA pribadi Anda sudah siap.",
      newUser:
        "EMENDA ID Anda sudah siap. Anda dapat menyelesaikan pengaturan sesuai kecepatan Anda.",
      identityPending:
        "Anda tetap dapat menggunakan EMENDA selama identitas Anda ditinjau.",
      needsAttention: "Satu hal memerlukan perhatian Anda.",
      profileIncomplete:
        "Lengkapi profil Anda agar CV dan lamaran Anda lebih kuat.",
      employerNotConnected: "Akun milik pekerja Anda sudah siap.",
      offline: "Informasi akun tersimpan masih tersedia.",
      loading: "Akun EMENDA Anda",
      inviteReceived: "Anda menerima undangan pemberi kerja baru.",
      profileComplete: "Profil Anda sudah lengkap dan siap digunakan.",
      connectedOffline: (employer) =>
        `${employer} sudah terhubung. Informasi akun tersimpan ditampilkan selama Anda offline.`,
      accessEnded: "Akun milik pekerja Anda sudah siap.",
    },
    idCard: {
      label: "EMENDA ID SAYA",
      viewId: "Lihat ID",
      status: {
        verified: "Identitas terverifikasi",
        setupNotFinished: "Pengaturan identitas belum selesai",
        reviewInProgress: "Peninjauan identitas sedang berlangsung",
        needsReview: "Identitas perlu ditinjau",
        verifiedCached: "Identitas terverifikasi · cache",
      },
    },
    panel: {
      connected: {
        title: "Pemberi kerja terhubung",
        body: (employer) =>
          `${employer} hanya dapat mengakses informasi yang Anda setujui. Profil portabel dan catatan Anda tetap milik Anda.`,
        cta: "Lihat Karier & CV",
      },
      headless: {
        title: "Hubungkan pemberi kerja",
        body: "Gunakan undangan pemberi kerja saat Anda siap membuka alat kerja.",
        cta: "Hubungkan pemberi kerja",
      },
      newUser: {
        title: "Selesaikan pengaturan identitas",
        body: "Tambahkan detail identitas dan dokumen Anda agar EMENDA ID Anda dapat diverifikasi.",
        cta: "Lanjutkan pengaturan identitas",
      },
      identityPending: {
        title: "Identitas terkirim",
        body: "Kami akan memperbarui EMENDA ID Anda setelah peninjauan selesai.",
        cta: "Lihat EMENDA ID",
      },
      needsAttention: {
        title: "Tinjau dokumen identitas Anda",
        body: "Beberapa detail dokumen tidak dapat dikonfirmasi. Tinjau dan kirim ulang.",
        cta: "Tinjau dokumen",
      },
      profileIncomplete: {
        title: "Lengkapi profil Anda",
        body: "Tambahkan pengalaman, keterampilan, bahasa, dan preferensi.",
        cta: "Lanjutkan profil",
      },
      employerNotConnected: {
        title: "Hubungkan pemberi kerja",
        body: "Gunakan undangan pemberi kerja untuk membuka alat kerja. Anda akan meninjau apa yang dibagikan terlebih dahulu.",
        cta: "Hubungkan pemberi kerja",
      },
      inviteReceived: {
        title: (employer) => `${employer} mengundang Anda untuk terhubung`,
        body: "Tinjau pemberi kerja dan apa saja yang akan dibagikan sebelum terhubung.",
        cta: "Tinjau pemberi kerja",
      },
      profileComplete: {
        title: "Hubungkan pemberi kerja",
        body: "Profil Anda sudah siap. Hubungkan pemberi kerja saat Anda siap membuka alat kerja.",
        cta: "Hubungkan pemberi kerja",
      },
      connectedOffline: {
        title: "Pemberi kerja terhubung · cache",
        body: (employer) =>
          `Akses yang disetujui untuk ${employer} ditampilkan dari sinkronisasi terakhir Anda. Perubahan memerlukan internet.`,
        cta: "Lihat koneksi",
      },
      accessEnded: {
        title: (employer) =>
          `Akses kerja ${employer} telah berakhir. EMENDA ID dan riwayat portabel Anda tetap milik Anda.`,
        body: "Tinjau akses yang berakhir, atau hubungkan pemberi kerja lain saat Anda siap.",
        cta: "Hubungkan pemberi kerja lain",
      },
    },
    offlineBanner: {
      title: "Tidak ada koneksi internet",
      body: "Beberapa informasi mungkin belum diperbarui sampai Anda terhubung kembali.",
      retry: "Coba lagi",
    },
    profileCard: {
      title: "Profil Anda",
      percent: (value) => `${value}% selesai`,
      helper:
        "Tambahkan pengalaman, keterampilan, dan preferensi untuk memperkuat profil dan CV Anda.",
    },
    statusCard: {
      workTools: {
        title: "Alat kerja terbuka",
        body: "Anda kini dapat menggunakan alat kerja yang terhubung sambil tetap menjaga profil portabel Anda.",
      },
      workToolsOffline: {
        title: "Alat kerja offline",
        badge: "Offline",
        body: "Alat kerja yang terhubung memerlukan internet. Profil portabel Anda tetap tersedia.",
      },
      profileReady: {
        title: "Profil siap",
        badge: "Siap",
        body: "Profil Anda siap digunakan untuk CV dan lamaran.",
      },
    },
    explore: {
      heading: "Jelajahi",
      careerCv: "Karier & CV",
      japanPreparation: "Persiapan Jepang",
      documentsRecords: "Dokumen & catatan",
      knowledgeQa: "Pengetahuan & Tanya Jawab",
      connectEmployer: "Hubungkan pemberi kerja",
      employerConnection: "Koneksi pemberi kerja",
      employerAccessHistory: "Riwayat akses pemberi kerja",
      helpSupport: "Bantuan & dukungan",
    },
    coin: {
      title: "Emenda Coin",
      caption: "Lihat saldo dan aktivitas hadiah ›",
    },
    updates: {
      heading: "Pembaruan terbaru",
      dailyReportSubmitted: "Laporan Harian terkirim",
      dailyReportVerified: "Laporan Harian terverifikasi",
      identityVerified: {
        title: "Identitas terverifikasi",
        body: "EMENDA ID Anda siap digunakan.",
      },
      emendaIdCreated: {
        title: "EMENDA ID dibuat",
        body: "Selesaikan pengaturan identitas saat Anda siap.",
      },
      identitySubmitted: {
        title: "Identitas terkirim",
        body: "Peninjauan verifikasi sedang berlangsung.",
      },
      identityNeedsReview: {
        title: "Identitas perlu ditinjau",
        body: "Tinjau dokumen Anda untuk melanjutkan.",
      },
      profileUpdate: {
        title: "Pembaruan profil",
        body: "Tambahkan pengalaman dan keterampilan untuk memperkuat CV Anda.",
      },
      readyToConnect: {
        title: "Siap terhubung",
        body: "Gunakan undangan pemberi kerja saat Anda menerimanya.",
      },
      lastSynced: {
        title: (time) => `Terakhir disinkronkan ${time}`,
        body: "Informasi tersimpan ditampilkan saat offline.",
      },
      inviteReceived: {
        title: "Undangan pemberi kerja diterima",
        body: (employer) => `${employer} ingin terhubung dengan EMENDA ID Anda.`,
      },
      profileComplete: {
        title: "Profil lengkap",
        body: "Profil Anda siap untuk CV dan lamaran.",
      },
      employerConnected: {
        title: "Pemberi kerja terhubung",
        body: (employer) => `${employer} terhubung dengan persetujuan Anda.`,
      },
      connectedOffline: {
        title: "Pemberi kerja terhubung",
        body: "Informasi koneksi pemberi kerja tersimpan ditampilkan saat offline.",
      },
      accessEnded: {
        title: "Akses pemberi kerja berakhir",
        body: "Tinjau akses yang berakhir, atau hubungkan pemberi kerja lain saat Anda siap.",
      },
      time: {
        today: "Hari ini",
        now: "Sekarang",
        justNow: "Baru saja",
        offline: "Offline",
        none: "—",
      },
    },
  },
  ja: {
    greeting: {
      morning: (name) => `おはようございます、${name}さん`,
      welcome: (name) => `ようこそ、${name}さん`,
    },
    subtitle: {
      connected: (employer) =>
        `${employer}と接続されています。あなたが所有するEMENDA IDはあなたのものです。`,
      headless: "あなた専用のEMENDAスペースの準備ができました。",
      newUser:
        "EMENDA IDの準備ができました。設定はご自身のペースで完了できます。",
      identityPending:
        "本人確認の審査中もEMENDAを引き続き利用できます。",
      needsAttention: "1件の項目に対応が必要です。",
      profileIncomplete:
        "プロフィールを完成させて、CVと応募をより強力にしましょう。",
      employerNotConnected: "あなたが所有するアカウントの準備ができました。",
      offline: "キャッシュされたアカウント情報は引き続き利用できます。",
      loading: "あなたのEMENDAアカウント",
      inviteReceived: "新しい雇用主からの招待があります。",
      profileComplete: "プロフィールが完成し、利用できる状態です。",
      connectedOffline: (employer) =>
        `${employer}と接続されています。オフライン中はキャッシュされたアカウント情報が表示されます。`,
      accessEnded: "あなたが所有するアカウントの準備ができました。",
    },
    idCard: {
      label: "マイEMENDA ID",
      viewId: "IDを表示",
      status: {
        verified: "本人確認済み",
        setupNotFinished: "本人確認の設定が未完了です",
        reviewInProgress: "本人確認の審査中です",
        needsReview: "本人確認の再確認が必要です",
        verifiedCached: "本人確認済み · キャッシュ",
      },
    },
    panel: {
      connected: {
        title: "雇用主と接続済み",
        body: (employer) =>
          `${employer}はあなたが承認した情報のみにアクセスできます。ポータブルなプロフィールと記録はあなたのものです。`,
        cta: "キャリア＆CVを表示",
      },
      headless: {
        title: "雇用主と接続する",
        body: "仕事ツールを利用する準備ができたら、雇用主の招待を使用してください。",
        cta: "雇用主と接続",
      },
      newUser: {
        title: "本人確認の設定を完了する",
        body: "EMENDA IDを確認できるよう、本人情報と書類を追加してください。",
        cta: "本人確認の設定を続ける",
      },
      identityPending: {
        title: "本人確認を提出済み",
        body: "審査が完了したらEMENDA IDを更新します。",
        cta: "EMENDA IDを表示",
      },
      needsAttention: {
        title: "本人確認書類を確認してください",
        body: "書類の一部の詳細を確認できませんでした。確認して再提出してください。",
        cta: "書類を確認",
      },
      profileIncomplete: {
        title: "プロフィールを完成させる",
        body: "経験、スキル、言語、希望条件を追加してください。",
        cta: "プロフィールを続ける",
      },
      employerNotConnected: {
        title: "雇用主と接続する",
        body: "雇用主の招待を使って仕事ツールを利用できます。共有内容は事前に確認できます。",
        cta: "雇用主と接続",
      },
      inviteReceived: {
        title: (employer) => `${employer}から接続の招待が届きました`,
        body: "接続する前に、雇用主と共有される内容を正確に確認してください。",
        cta: "雇用主を確認",
      },
      profileComplete: {
        title: "雇用主と接続する",
        body: "プロフィールの準備ができました。仕事ツールを利用する準備ができたら、雇用主と接続してください。",
        cta: "雇用主と接続",
      },
      connectedOffline: {
        title: "雇用主と接続済み · キャッシュ",
        body: (employer) =>
          `${employer}の承認済みアクセスは前回の同期時点の内容です。変更にはインターネットが必要です。`,
        cta: "接続を表示",
      },
      accessEnded: {
        title: (employer) =>
          `${employer}の勤務アクセスが終了しました。EMENDA IDとポータブルな履歴はあなたのものです。`,
        body: "終了したアクセスを確認するか、準備ができたら別の雇用主と接続してください。",
        cta: "別の雇用主と接続",
      },
    },
    offlineBanner: {
      title: "インターネットに接続されていません",
      body: "再接続するまで一部の情報が最新でない場合があります。",
      retry: "再試行",
    },
    profileCard: {
      title: "あなたのプロフィール",
      percent: (value) => `${value}%完了`,
      helper:
        "経験、スキル、希望条件を追加して、プロフィールとCVを強化しましょう。",
    },
    statusCard: {
      workTools: {
        title: "仕事ツールが利用可能になりました",
        body: "ポータブルなプロフィールを保ちながら、接続された仕事ツールを利用できます。",
      },
      workToolsOffline: {
        title: "仕事ツールはオフラインです",
        badge: "オフライン",
        body: "接続された仕事ツールにはインターネットが必要です。ポータブルなプロフィールは引き続き利用できます。",
      },
      profileReady: {
        title: "プロフィール準備完了",
        badge: "準備完了",
        body: "プロフィールはCVや応募に利用できる状態です。",
      },
    },
    explore: {
      heading: "探索",
      careerCv: "キャリア＆CV",
      japanPreparation: "日本準備",
      documentsRecords: "書類と記録",
      knowledgeQa: "ナレッジ＆Q&A",
      connectEmployer: "雇用主と接続",
      employerConnection: "雇用主との接続",
      employerAccessHistory: "雇用主アクセス履歴",
      helpSupport: "ヘルプとサポート",
    },
    coin: {
      title: "Emenda Coin",
      caption: "残高と特典の履歴を見る ›",
    },
    updates: {
      heading: "最近の更新",
      dailyReportSubmitted: "日報を提出済み",
      dailyReportVerified: "日報を確認済み",
      identityVerified: {
        title: "本人確認済み",
        body: "EMENDA IDが利用できるようになりました。",
      },
      emendaIdCreated: {
        title: "EMENDA IDを作成しました",
        body: "準備ができたら本人確認の設定を完了してください。",
      },
      identitySubmitted: {
        title: "本人確認を提出済み",
        body: "確認審査が進行中です。",
      },
      identityNeedsReview: {
        title: "本人確認の再確認が必要です",
        body: "続行するには書類を確認してください。",
      },
      profileUpdate: {
        title: "プロフィール更新",
        body: "経験とスキルを追加してCVを強化しましょう。",
      },
      readyToConnect: {
        title: "接続の準備完了",
        body: "雇用主の招待が届いたら使用してください。",
      },
      lastSynced: {
        title: (time) => `最終同期 ${time}`,
        body: "オフライン中はキャッシュされた情報が表示されます。",
      },
      inviteReceived: {
        title: "雇用主からの招待を受信",
        body: (employer) =>
          `${employer}があなたのEMENDA IDとの接続を希望しています。`,
      },
      profileComplete: {
        title: "プロフィール完成",
        body: "プロフィールはCVや応募に利用できます。",
      },
      employerConnected: {
        title: "雇用主と接続済み",
        body: (employer) => `${employer}があなたの同意のもとで接続されました。`,
      },
      connectedOffline: {
        title: "雇用主と接続済み",
        body: "オフライン中はキャッシュされた接続情報が表示されます。",
      },
      accessEnded: {
        title: "雇用主のアクセスが終了",
        body: "終了したアクセスを確認するか、準備ができたら別の雇用主と接続してください。",
      },
      time: {
        today: "今日",
        now: "今",
        justNow: "たった今",
        offline: "オフライン",
        none: "—",
      },
    },
  },
});
