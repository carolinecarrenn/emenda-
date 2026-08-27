import { defineSectionCopy } from "@/i18n/copy";

/** Section 10 · Connect Employer & Consent (WD-49..WD-52 / W-49..W-52).
 *  EN strings are verbatim Figma mock copy (source of truth). Strings that
 *  embed the employer name are functions — the name itself is data
 *  (employerMock) and is never translated. */
export interface EmployerCopy {
  breadcrumb: string;
  scope: {
    accessScope: string;
    employerLabel: string;
    canAccessTitle: string;
    staysPrivateTitle: string;
    canAccessItems: string[];
    staysPrivateItems: string[];
    /** Two condensed access lines used by the connecting / disconnecting cards. */
    accessPairs: string[];
  };
  connect: {
    title: string;
    subtitle: string;
    subtitleChecking: string;
    subtitleInvalid: string;
    subtitleExpired: string;
    subtitleOffline: string;
    inviteCodeLabel: string;
    validationMessage: string;
    safetyNote: string;
    safetyNoteOffline: string;
    invalidBanner: string;
    expiredBanner: string;
    offlineBanner: string;
    checkInvite: string;
    checking: string;
    tryAnotherCode: string;
    enterNewCode: string;
  };
  review: {
    title: string;
    subtitle: string;
    consentLabel: (employer: string) => string;
    connectEmployer: string;
    declineInvite: string;
    connecting: {
      title: string;
      subtitle: (employer: string) => string;
      statusEyebrow: string;
      cardTitle: (employer: string) => string;
      cardBody: string;
      approvedEyebrow: string;
      protectedLine: string;
      button: string;
    };
    connected: {
      title: string;
      subtitle: (employer: string) => string;
      cardTitle: (employer: string) => string;
      cardBody: string;
      continueHome: string;
      viewCareerCv: string;
    };
    failed: {
      title: string;
      subtitle: (employer: string) => string;
      statusEyebrow: string;
      cardTitle: (employer: string) => string;
      cardBody: string;
      consentNote: string;
      /** W-50D node 943:93 — the red banner above the action pair. */
      errorBanner: string;
      tryAgain: string;
      backToReview: string;
    };
    declineConfirm: {
      title: string;
      body: (employer: string) => string;
      keepReviewing: string;
    };
    declined: {
      title: string;
      subtitle: (employer: string) => string;
      cardTitle: string;
      cardBody: string;
      backHome: string;
      enterAnother: string;
    };
  };
  manage: {
    title: string;
    subtitle: (employer: string) => string;
    subtitleOffline: string;
    controlNote: (employer: string) => string;
    viewCareerCv: string;
    viewAccessHistory: string;
    disconnectEmployer: string;
    offlineBanner: string;
    modal: {
      title: (employer: string) => string;
      body: (employer: string) => string;
      keepConnected: string;
    };
    disconnecting: {
      title: string;
      subtitle: (employer: string) => string;
      /** W-51B node 938:97 — the eyebrow inside the mobile status card. */
      statusEyebrow: string;
      cardTitle: (employer: string) => string;
      cardBody: string;
      currentEyebrow: string;
      protectedLine: string;
      button: string;
    };
    disconnected: {
      title: string;
      subtitle: (employer: string) => string;
      cardTitle: string;
      cardBody: string;
      connectAnother: string;
    };
    failed: {
      title: string;
      subtitle: (employer: string) => string;
      cardTitle: (employer: string) => string;
      cardBody: string;
      failNote: (employer: string) => string;
      /** W-51D — the red banner above the action pair. */
      errorBanner: (employer: string) => string;
      tryAgain: string;
      backToConnection: string;
    };
    accessEnded: {
      title: string;
      subtitle: string;
      cardTitle: string;
      cardBody: string;
      /** WD-51F node 1182:1674 — the desktop card restates the outcome and
       *  drops the mobile card body to the 12px retention note under it. */
      desktopBody: string;
    };
  };
  history: {
    title: string;
    subtitleActive: string;
    subtitleEnded: string;
    approvedHeader: string;
    accessLine: string;
    statusActive: string;
    statusEnded: string;
    consentScope: string;
    consentParagraph: string;
    endedHeader: string;
    endedText: (employer: string) => string;
    backToConnection: string;
  };
}

export const EMPLOYER_COPY = defineSectionCopy<EmployerCopy>({
  en: {
    breadcrumb: "Headless home",
    scope: {
      accessScope: "ACCESS SCOPE",
      employerLabel: "EMPLOYER",
      canAccessTitle: "EMPLOYER CAN ACCESS",
      staysPrivateTitle: "STAYS PRIVATE",
      canAccessItems: [
        "Daily Reports",
        "Work communication",
        "Follow-up / status",
        "Verified work history",
      ],
      staysPrivateItems: [
        "Private documents",
        "Health / Stress / Life",
        "Emergency contacts",
        "Emenda Coin balance",
      ],
      accessPairs: [
        "Daily Reports · Work communication",
        "Follow-up/status · Verified work history",
      ],
    },
    connect: {
      title: "Connect employer",
      subtitle:
        "Enter the invite code from your employer. You will review the employer and sharing details before connecting.",
      subtitleChecking: "Checking this invite with EMENDA…",
      subtitleInvalid: "This employer invite could not be verified.",
      subtitleExpired: "This employer invite is no longer active.",
      subtitleOffline:
        "You need an internet connection to verify an employer invite.",
      inviteCodeLabel: "INVITE CODE",
      validationMessage: "Enter an invite code.",
      safetyNote:
        "Only use an invite from an employer you recognize. You’ll review exactly what is shared before connecting.",
      safetyNoteOffline:
        "Your invite code stays on this screen while you reconnect.",
      invalidBanner:
        "This invite code is invalid or does not belong to this EMENDA ID.",
      expiredBanner:
        "This invite expired, was revoked, or was already used. Ask the employer to send a new invite.",
      offlineBanner:
        "No internet connection. Employer invites cannot be verified right now.",
      checkInvite: "Check invite",
      checking: "Checking…",
      tryAnotherCode: "Try another code",
      enterNewCode: "Enter a new code",
    },
    review: {
      title: "Review employer invite",
      subtitle:
        "Review the employer and exactly what will be shared before you choose to connect.",
      consentLabel: (employer) =>
        `I agree to connect with ${employer} and allow only the work access listed above.`,
      connectEmployer: "Connect employer",
      declineInvite: "Decline invite",
      connecting: {
        title: "Connecting employer",
        subtitle: (employer) =>
          `EMENDA is connecting ${employer} with the permissions you approved.`,
        statusEyebrow: "CONNECTION STATUS",
        cardTitle: (employer) => `Connecting ${employer}`,
        cardBody:
          "Please wait while EMENDA securely finishes the employer connection.",
        approvedEyebrow: "APPROVED CONNECTION",
        protectedLine:
          "Private documents, Health / Stress / Life, emergency contacts, and Emenda Coin balance remain protected.",
        button: "Connecting…",
      },
      connected: {
        title: "Employer connected",
        subtitle: (employer) =>
          `${employer} is now connected to your worker-owned EMENDA ID.`,
        cardTitle: (employer) => `${employer} connected`,
        cardBody:
          "Work access is active for Daily Reports, work communication, follow-up/status, and verified work history. Private worker-owned data remains protected.",
        continueHome: "Continue to Home",
        viewCareerCv: "View Career & CV",
      },
      failed: {
        title: "Couldn’t connect employer",
        subtitle: (employer) =>
          `${employer} was not connected. No information was shared.`,
        statusEyebrow: "CONNECTION STATUS",
        cardTitle: (employer) => `Couldn’t connect ${employer}`,
        cardBody:
          "Your employer connection was not created. Review the invite and try again.",
        consentNote:
          "Your consent is still selected, but no employer connection was created.",
        errorBanner:
          "Connection failed. Check your connection and try again.",
        tryAgain: "Try again",
        backToReview: "Back to review",
      },
      declineConfirm: {
        title: "Decline employer invite?",
        body: (employer) =>
          `${employer} will not be connected and no information will be shared from this invite.`,
        keepReviewing: "Keep reviewing",
      },
      declined: {
        title: "Employer invite declined",
        subtitle: (employer) => `${employer} was not connected.`,
        cardTitle: "Invite declined",
        cardBody:
          "No employer connection was created and no information was shared from this invite.",
        backHome: "Back to Headless home",
        enterAnother: "Enter another invite",
      },
    },
    manage: {
      title: "Employer connection",
      subtitle: (employer) =>
        `Manage your active connection with ${employer} and review what the employer can access.`,
      subtitleOffline:
        "Cached connection details are available while you are offline.",
      controlNote: (employer) =>
        `Connected to ${employer}. You stay in control of this connection and can disconnect the employer at any time.`,
      viewCareerCv: "View Career & CV",
      viewAccessHistory: "View access history",
      disconnectEmployer: "Disconnect employer",
      offlineBanner:
        "You’re offline. Connection details are cached. Disconnecting requires internet.",
      modal: {
        title: (employer) => `Disconnect ${employer}?`,
        body: (employer) =>
          `${employer} will lose access to the shared information. Your EMENDA ID, profile, documents, and records remain yours.`,
        keepConnected: "Keep connected",
      },
      disconnecting: {
        title: "Disconnecting employer",
        subtitle: (employer) =>
          `EMENDA is removing ${employer}’s access to the information shared through this connection.`,
        statusEyebrow: "CONNECTION STATUS",
        cardTitle: (employer) => `Disconnecting ${employer}`,
        cardBody:
          "Please wait while EMENDA securely removes employer access.",
        currentEyebrow: "CURRENT CONNECTION",
        protectedLine:
          "Your private identity documents, PIN/OTP, emergency information, and private support/Q&A remain protected.",
        button: "Disconnecting…",
      },
      disconnected: {
        title: "Employer disconnected",
        subtitle: (employer) =>
          `${employer} no longer has access through your EMENDA connection.`,
        cardTitle: "Connection ended",
        cardBody:
          "No employer connection is active. Your EMENDA ID, profile, documents, and records remain yours.",
        connectAnother: "Connect another employer",
      },
      failed: {
        title: "Couldn’t disconnect employer",
        subtitle: (employer) =>
          `${employer} is still connected. No access changes were made.`,
        cardTitle: (employer) => `Couldn’t disconnect ${employer}`,
        cardBody:
          "Employer access is still active. Try again when you have a stable connection.",
        failNote: (employer) =>
          `The disconnect request failed. ${employer} still has the approved work access.`,
        errorBanner: (employer) =>
          `Couldn’t disconnect ${employer}. Check your connection and try again.`,
        tryAgain: "Try again",
        backToConnection: "Back to connection",
      },
      accessEnded: {
        title: "Employer access ended",
        subtitle:
          "The employer connection ended outside this device. No employer access remains active, and your worker-owned records are retained.",
        cardTitle: "Work access ended",
        cardBody:
          "No employer connection is active. Your EMENDA ID, profile, documents, and records remain yours.",
        desktopBody:
          "Work access ended. No employer access remains active, and your worker-owned records are retained.",
      },
    },
    history: {
      title: "Access & consent history",
      subtitleActive:
        "Review employer access grants and changes recorded for your worker-owned EMENDA ID.",
      subtitleEnded:
        "Review employer access grants and revocations recorded for your worker-owned EMENDA ID.",
      approvedHeader: "EMPLOYER CONNECTION APPROVED",
      accessLine:
        "Access: Daily Reports, Work communication, Follow-up/status, Verified work history",
      statusActive: "Status: Active",
      statusEnded: "Status: Ended",
      consentScope: "CONSENT SCOPE",
      consentParagraph:
        "Approved by you before the connection became active. Private documents, Health / Stress / Life, emergency contacts, and Emenda Coin balance were excluded.",
      endedHeader: "EMPLOYER ACCESS ENDED",
      endedText: (employer) =>
        `${employer} no longer has work access. Your EMENDA ID and worker-owned history were retained.`,
      backToConnection: "Back to connection",
    },
  },
  id: {
    breadcrumb: "Beranda headless",
    scope: {
      accessScope: "CAKUPAN AKSES",
      employerLabel: "PEMBERI KERJA",
      canAccessTitle: "DAPAT DIAKSES PEMBERI KERJA",
      staysPrivateTitle: "TETAP PRIVAT",
      canAccessItems: [
        "Laporan Harian",
        "Komunikasi kerja",
        "Tindak lanjut / status",
        "Riwayat kerja terverifikasi",
      ],
      staysPrivateItems: [
        "Dokumen pribadi",
        "Kesehatan / Stres / Kehidupan",
        "Kontak darurat",
        "Saldo Emenda Coin",
      ],
      accessPairs: [
        "Laporan Harian · Komunikasi kerja",
        "Tindak lanjut/status · Riwayat kerja terverifikasi",
      ],
    },
    connect: {
      title: "Hubungkan pemberi kerja",
      subtitle:
        "Masukkan kode undangan dari pemberi kerja Anda. Anda akan meninjau pemberi kerja dan detail berbagi sebelum terhubung.",
      subtitleChecking: "Memeriksa undangan ini dengan EMENDA…",
      subtitleInvalid:
        "Undangan pemberi kerja ini tidak dapat diverifikasi.",
      subtitleExpired: "Undangan pemberi kerja ini sudah tidak aktif.",
      subtitleOffline:
        "Anda memerlukan koneksi internet untuk memverifikasi undangan pemberi kerja.",
      inviteCodeLabel: "KODE UNDANGAN",
      validationMessage: "Masukkan kode undangan.",
      safetyNote:
        "Hanya gunakan undangan dari pemberi kerja yang Anda kenal. Anda akan meninjau persis apa yang dibagikan sebelum terhubung.",
      safetyNoteOffline:
        "Kode undangan Anda tetap di layar ini selama Anda menyambung kembali.",
      invalidBanner:
        "Kode undangan ini tidak valid atau bukan milik EMENDA ID ini.",
      expiredBanner:
        "Undangan ini kedaluwarsa, dicabut, atau sudah digunakan. Minta pemberi kerja mengirim undangan baru.",
      offlineBanner:
        "Tidak ada koneksi internet. Undangan pemberi kerja tidak dapat diverifikasi saat ini.",
      checkInvite: "Periksa undangan",
      checking: "Memeriksa…",
      tryAnotherCode: "Coba kode lain",
      enterNewCode: "Masukkan kode baru",
    },
    review: {
      title: "Tinjau undangan pemberi kerja",
      subtitle:
        "Tinjau pemberi kerja dan persis apa yang akan dibagikan sebelum Anda memilih untuk terhubung.",
      consentLabel: (employer) =>
        `Saya setuju terhubung dengan ${employer} dan hanya mengizinkan akses kerja yang tercantum di atas.`,
      connectEmployer: "Hubungkan pemberi kerja",
      declineInvite: "Tolak undangan",
      connecting: {
        title: "Menghubungkan pemberi kerja",
        subtitle: (employer) =>
          `EMENDA sedang menghubungkan ${employer} dengan izin yang Anda setujui.`,
        statusEyebrow: "STATUS KONEKSI",
        cardTitle: (employer) => `Menghubungkan ${employer}`,
        cardBody:
          "Mohon tunggu selama EMENDA menyelesaikan koneksi pemberi kerja dengan aman.",
        approvedEyebrow: "KONEKSI DISETUJUI",
        protectedLine:
          "Dokumen pribadi, Kesehatan / Stres / Kehidupan, kontak darurat, dan saldo Emenda Coin tetap terlindungi.",
        button: "Menghubungkan…",
      },
      connected: {
        title: "Pemberi kerja terhubung",
        subtitle: (employer) =>
          `${employer} kini terhubung dengan EMENDA ID milik pekerja Anda.`,
        cardTitle: (employer) => `${employer} terhubung`,
        cardBody:
          "Akses kerja aktif untuk Laporan Harian, komunikasi kerja, tindak lanjut/status, dan riwayat kerja terverifikasi. Data privat milik pekerja tetap terlindungi.",
        continueHome: "Lanjut ke Beranda",
        viewCareerCv: "Lihat Karier & CV",
      },
      failed: {
        title: "Tidak dapat menghubungkan pemberi kerja",
        subtitle: (employer) =>
          `${employer} tidak terhubung. Tidak ada informasi yang dibagikan.`,
        statusEyebrow: "STATUS KONEKSI",
        cardTitle: (employer) => `Tidak dapat menghubungkan ${employer}`,
        cardBody:
          "Koneksi pemberi kerja Anda tidak dibuat. Tinjau undangan dan coba lagi.",
        consentNote:
          "Persetujuan Anda masih dipilih, tetapi tidak ada koneksi pemberi kerja yang dibuat.",
        errorBanner:
          "Koneksi gagal. Periksa koneksi Anda lalu coba lagi.",
        tryAgain: "Coba lagi",
        backToReview: "Kembali ke tinjauan",
      },
      declineConfirm: {
        title: "Tolak undangan pemberi kerja?",
        body: (employer) =>
          `${employer} tidak akan terhubung dan tidak ada informasi yang akan dibagikan dari undangan ini.`,
        keepReviewing: "Lanjut meninjau",
      },
      declined: {
        title: "Undangan pemberi kerja ditolak",
        subtitle: (employer) => `${employer} tidak terhubung.`,
        cardTitle: "Undangan ditolak",
        cardBody:
          "Tidak ada koneksi pemberi kerja yang dibuat dan tidak ada informasi yang dibagikan dari undangan ini.",
        backHome: "Kembali ke Beranda headless",
        enterAnother: "Masukkan undangan lain",
      },
    },
    manage: {
      title: "Koneksi pemberi kerja",
      subtitle: (employer) =>
        `Kelola koneksi aktif Anda dengan ${employer} dan tinjau apa yang dapat diakses pemberi kerja.`,
      subtitleOffline:
        "Detail koneksi tersimpan tersedia selama Anda offline.",
      controlNote: (employer) =>
        `Terhubung dengan ${employer}. Anda tetap mengendalikan koneksi ini dan dapat memutuskan pemberi kerja kapan saja.`,
      viewCareerCv: "Lihat Karier & CV",
      viewAccessHistory: "Lihat riwayat akses",
      disconnectEmployer: "Putuskan pemberi kerja",
      offlineBanner:
        "Anda offline. Detail koneksi tersimpan dalam cache. Memutuskan koneksi memerlukan internet.",
      modal: {
        title: (employer) => `Putuskan ${employer}?`,
        body: (employer) =>
          `${employer} akan kehilangan akses ke informasi yang dibagikan. EMENDA ID, profil, dokumen, dan catatan Anda tetap milik Anda.`,
        keepConnected: "Tetap terhubung",
      },
      disconnecting: {
        title: "Memutuskan pemberi kerja",
        subtitle: (employer) =>
          `EMENDA sedang menghapus akses ${employer} ke informasi yang dibagikan melalui koneksi ini.`,
        statusEyebrow: "STATUS KONEKSI",
        cardTitle: (employer) => `Memutuskan ${employer}`,
        cardBody:
          "Mohon tunggu selama EMENDA menghapus akses pemberi kerja dengan aman.",
        currentEyebrow: "KONEKSI SAAT INI",
        protectedLine:
          "Dokumen identitas pribadi, PIN/OTP, informasi darurat, dan dukungan/T&J pribadi Anda tetap terlindungi.",
        button: "Memutuskan…",
      },
      disconnected: {
        title: "Pemberi kerja diputuskan",
        subtitle: (employer) =>
          `${employer} tidak lagi memiliki akses melalui koneksi EMENDA Anda.`,
        cardTitle: "Koneksi berakhir",
        cardBody:
          "Tidak ada koneksi pemberi kerja yang aktif. EMENDA ID, profil, dokumen, dan catatan Anda tetap milik Anda.",
        connectAnother: "Hubungkan pemberi kerja lain",
      },
      failed: {
        title: "Tidak dapat memutuskan pemberi kerja",
        subtitle: (employer) =>
          `${employer} masih terhubung. Tidak ada perubahan akses yang dilakukan.`,
        cardTitle: (employer) => `Tidak dapat memutuskan ${employer}`,
        cardBody:
          "Akses pemberi kerja masih aktif. Coba lagi saat koneksi Anda stabil.",
        failNote: (employer) =>
          `Permintaan pemutusan gagal. ${employer} masih memiliki akses kerja yang disetujui.`,
        errorBanner: (employer) =>
          `Tidak dapat memutuskan ${employer}. Periksa koneksi Anda lalu coba lagi.`,
        tryAgain: "Coba lagi",
        backToConnection: "Kembali ke koneksi",
      },
      accessEnded: {
        title: "Akses pemberi kerja berakhir",
        subtitle:
          "Koneksi pemberi kerja berakhir di luar perangkat ini. Tidak ada akses pemberi kerja yang tetap aktif, dan catatan milik pekerja Anda dipertahankan.",
        cardTitle: "Akses kerja berakhir",
        cardBody:
          "Tidak ada koneksi pemberi kerja yang aktif. EMENDA ID, profil, dokumen, dan catatan Anda tetap milik Anda.",
        desktopBody:
          "Akses kerja berakhir. Tidak ada akses pemberi kerja yang tetap aktif, dan catatan milik pekerja Anda dipertahankan.",
      },
    },
    history: {
      title: "Riwayat akses & persetujuan",
      subtitleActive:
        "Tinjau pemberian akses pemberi kerja dan perubahan yang tercatat untuk EMENDA ID milik pekerja Anda.",
      subtitleEnded:
        "Tinjau pemberian akses pemberi kerja dan pencabutan yang tercatat untuk EMENDA ID milik pekerja Anda.",
      approvedHeader: "KONEKSI PEMBERI KERJA DISETUJUI",
      accessLine:
        "Akses: Laporan Harian, Komunikasi kerja, Tindak lanjut/status, Riwayat kerja terverifikasi",
      statusActive: "Status: Aktif",
      statusEnded: "Status: Berakhir",
      consentScope: "CAKUPAN PERSETUJUAN",
      consentParagraph:
        "Disetujui oleh Anda sebelum koneksi menjadi aktif. Dokumen pribadi, Kesehatan / Stres / Kehidupan, kontak darurat, dan saldo Emenda Coin dikecualikan.",
      endedHeader: "AKSES PEMBERI KERJA BERAKHIR",
      endedText: (employer) =>
        `${employer} tidak lagi memiliki akses kerja. EMENDA ID dan riwayat milik pekerja Anda dipertahankan.`,
      backToConnection: "Kembali ke koneksi",
    },
  },
  ja: {
    breadcrumb: "ヘッドレスホーム",
    scope: {
      accessScope: "アクセス範囲",
      employerLabel: "雇用主",
      canAccessTitle: "雇用主がアクセス可能",
      staysPrivateTitle: "非公開のまま",
      canAccessItems: [
        "日次レポート",
        "業務コミュニケーション",
        "フォローアップ / ステータス",
        "確認済みの職歴",
      ],
      staysPrivateItems: [
        "個人文書",
        "健康 / ストレス / 生活",
        "緊急連絡先",
        "Emenda Coin残高",
      ],
      accessPairs: [
        "日次レポート · 業務コミュニケーション",
        "フォローアップ/ステータス · 確認済みの職歴",
      ],
    },
    connect: {
      title: "雇用主と接続",
      subtitle:
        "雇用主からの招待コードを入力してください。接続する前に、雇用主と共有内容の詳細を確認できます。",
      subtitleChecking: "EMENDAでこの招待を確認しています…",
      subtitleInvalid: "この雇用主の招待は確認できませんでした。",
      subtitleExpired: "この雇用主の招待は現在有効ではありません。",
      subtitleOffline:
        "雇用主の招待を確認するにはインターネット接続が必要です。",
      inviteCodeLabel: "招待コード",
      validationMessage: "招待コードを入力してください。",
      safetyNote:
        "心当たりのある雇用主からの招待のみ使用してください。接続する前に、何が共有されるかを正確に確認できます。",
      safetyNoteOffline:
        "再接続する間、招待コードはこの画面に保持されます。",
      invalidBanner:
        "この招待コードは無効か、このEMENDA IDのものではありません。",
      expiredBanner:
        "この招待は期限切れ、取り消し済み、または使用済みです。雇用主に新しい招待の送付を依頼してください。",
      offlineBanner:
        "インターネット接続がありません。現在、雇用主の招待を確認できません。",
      checkInvite: "招待を確認",
      checking: "確認中…",
      tryAnotherCode: "別のコードを試す",
      enterNewCode: "新しいコードを入力",
    },
    review: {
      title: "雇用主の招待を確認",
      subtitle:
        "接続を選ぶ前に、雇用主と共有される内容を正確に確認してください。",
      consentLabel: (employer) =>
        `${employer}と接続し、上記の業務アクセスのみを許可することに同意します。`,
      connectEmployer: "雇用主と接続",
      declineInvite: "招待を辞退",
      connecting: {
        title: "雇用主と接続中",
        subtitle: (employer) =>
          `EMENDAが承認された権限で${employer}を接続しています。`,
        statusEyebrow: "接続ステータス",
        cardTitle: (employer) => `${employer}を接続中`,
        cardBody:
          "EMENDAが雇用主との接続を安全に完了するまでお待ちください。",
        approvedEyebrow: "承認された接続",
        protectedLine:
          "個人文書、健康 / ストレス / 生活、緊急連絡先、Emenda Coin残高は保護されたままです。",
        button: "接続中…",
      },
      connected: {
        title: "雇用主と接続しました",
        subtitle: (employer) =>
          `${employer}はワーカー所有のEMENDA IDに接続されました。`,
        cardTitle: (employer) => `${employer}と接続済み`,
        cardBody:
          "日次レポート、業務コミュニケーション、フォローアップ/ステータス、確認済みの職歴への業務アクセスが有効です。ワーカー所有のプライベートデータは保護されたままです。",
        continueHome: "ホームへ進む",
        viewCareerCv: "キャリア & CVを見る",
      },
      failed: {
        title: "雇用主と接続できませんでした",
        subtitle: (employer) =>
          `${employer}は接続されませんでした。情報は共有されていません。`,
        statusEyebrow: "接続ステータス",
        cardTitle: (employer) => `${employer}と接続できませんでした`,
        cardBody:
          "雇用主との接続は作成されませんでした。招待を確認して、もう一度お試しください。",
        consentNote:
          "同意は選択されたままですが、雇用主との接続は作成されませんでした。",
        errorBanner:
          "接続に失敗しました。通信状況を確認してもう一度お試しください。",
        tryAgain: "もう一度試す",
        backToReview: "確認に戻る",
      },
      declineConfirm: {
        title: "雇用主の招待を辞退しますか？",
        body: (employer) =>
          `${employer}は接続されず、この招待から情報が共有されることはありません。`,
        keepReviewing: "確認を続ける",
      },
      declined: {
        title: "雇用主の招待を辞退しました",
        subtitle: (employer) => `${employer}は接続されませんでした。`,
        cardTitle: "招待を辞退しました",
        cardBody:
          "雇用主との接続は作成されず、この招待から情報は共有されませんでした。",
        backHome: "ヘッドレスホームに戻る",
        enterAnother: "別の招待を入力",
      },
    },
    manage: {
      title: "雇用主との接続",
      subtitle: (employer) =>
        `${employer}とのアクティブな接続を管理し、雇用主がアクセスできる内容を確認します。`,
      subtitleOffline:
        "オフライン中はキャッシュされた接続詳細を利用できます。",
      controlNote: (employer) =>
        `${employer}と接続中です。この接続の主導権はあなたにあり、いつでも雇用主との接続を解除できます。`,
      viewCareerCv: "キャリア & CVを見る",
      viewAccessHistory: "アクセス履歴を見る",
      disconnectEmployer: "雇用主との接続を解除",
      offlineBanner:
        "オフラインです。接続詳細はキャッシュされています。接続解除にはインターネットが必要です。",
      modal: {
        title: (employer) => `${employer}との接続を解除しますか？`,
        body: (employer) =>
          `${employer}は共有された情報へのアクセスを失います。あなたのEMENDA ID、プロフィール、文書、記録はあなたのものとして残ります。`,
        keepConnected: "接続を維持",
      },
      disconnecting: {
        title: "雇用主との接続を解除中",
        subtitle: (employer) =>
          `EMENDAがこの接続を通じて共有された情報への${employer}のアクセスを削除しています。`,
        statusEyebrow: "接続ステータス",
        cardTitle: (employer) => `${employer}との接続を解除中`,
        cardBody:
          "EMENDAが雇用主のアクセスを安全に削除するまでお待ちください。",
        currentEyebrow: "現在の接続",
        protectedLine:
          "個人の身分証明書類、PIN/OTP、緊急情報、プライベートなサポート/Q&Aは保護されたままです。",
        button: "解除中…",
      },
      disconnected: {
        title: "雇用主との接続を解除しました",
        subtitle: (employer) =>
          `${employer}はEMENDA接続を通じたアクセスを失いました。`,
        cardTitle: "接続が終了しました",
        cardBody:
          "アクティブな雇用主との接続はありません。あなたのEMENDA ID、プロフィール、文書、記録はあなたのものとして残ります。",
        connectAnother: "別の雇用主と接続",
      },
      failed: {
        title: "雇用主との接続を解除できませんでした",
        subtitle: (employer) =>
          `${employer}はまだ接続されています。アクセスの変更は行われていません。`,
        cardTitle: (employer) =>
          `${employer}との接続を解除できませんでした`,
        cardBody:
          "雇用主のアクセスはまだ有効です。安定した接続があるときにもう一度お試しください。",
        failNote: (employer) =>
          `接続解除のリクエストが失敗しました。${employer}は承認された業務アクセスを引き続き保持しています。`,
        errorBanner: (employer) =>
          `${employer}との接続を解除できませんでした。通信状況を確認してもう一度お試しください。`,
        tryAgain: "もう一度試す",
        backToConnection: "接続に戻る",
      },
      accessEnded: {
        title: "雇用主のアクセスが終了しました",
        subtitle:
          "雇用主との接続はこのデバイスの外で終了しました。有効な雇用主のアクセスはなく、ワーカー所有の記録は保持されています。",
        cardTitle: "業務アクセスが終了しました",
        cardBody:
          "アクティブな雇用主との接続はありません。あなたのEMENDA ID、プロフィール、文書、記録はあなたのものとして残ります。",
        desktopBody:
          "業務アクセスが終了しました。有効な雇用主のアクセスはなく、ワーカー所有の記録は保持されています。",
      },
    },
    history: {
      title: "アクセスと同意の履歴",
      subtitleActive:
        "ワーカー所有のEMENDA IDに記録された雇用主のアクセス許可と変更を確認します。",
      subtitleEnded:
        "ワーカー所有のEMENDA IDに記録された雇用主のアクセス許可と取り消しを確認します。",
      approvedHeader: "雇用主との接続が承認されました",
      accessLine:
        "アクセス: 日次レポート、業務コミュニケーション、フォローアップ/ステータス、確認済みの職歴",
      statusActive: "ステータス: 有効",
      statusEnded: "ステータス: 終了",
      consentScope: "同意範囲",
      consentParagraph:
        "接続が有効になる前にあなたが承認しました。個人文書、健康 / ストレス / 生活、緊急連絡先、Emenda Coin残高は除外されました。",
      endedHeader: "雇用主のアクセスが終了",
      endedText: (employer) =>
        `${employer}は業務アクセスを失いました。あなたのEMENDA IDとワーカー所有の履歴は保持されています。`,
      backToConnection: "接続に戻る",
    },
  },
});
