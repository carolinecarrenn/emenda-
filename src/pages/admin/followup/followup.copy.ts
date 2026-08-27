import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Follow-up & Escalation area, Figma page
 * 06 · Company Admin Experience (1182:5690):
 *
 *   AD-05  Follow-up & Escalation — Board        (1223:1997)  → base screen
 *   AD-05B Escalation Decision States            (1226:131)   → ?state=escalate
 *   AD-05C Escalation & Recovery Flow            (1226:2870)  → ?state=lifecycle
 *   AD-05D Escalation Detailed States            (1239:432)   → ?state=detail
 *
 * EN strings are the Figma text verbatim; ID / JA are faithful translations.
 * DATA never passes through this file: report IDs (RPT-xxxx), person and team
 * names, dates, clock times and counts stay raw in followup.mock.ts and are
 * interpolated into the {placeholder} slots below.
 *
 * Governance (Figma AD-SCOPE board): Company Admin ≠ Super Admin — nothing
 * here reaches across tenants, billing or platform configuration.
 */

interface LifecycleDetailCopy {
  label: string;
  text: string;
}

interface LifecycleStepCopy {
  title: string;
  subtitle: string;
  details: {
    a: LifecycleDetailCopy;
    b: LifecycleDetailCopy;
    c: LifecycleDetailCopy;
  };
}

interface DetailNoteCopy {
  title: string;
  body: string;
}

export interface AdminFollowUpCopy {
  intro: {
    title: string;
    subtitle: string;
    exportBoard: string;
    escalateCase: string;
  };
  stats: {
    labels: {
      needFollowUp: string;
      inProgress: string;
      escalated: string;
      resolvedToday: string;
    };
    captions: {
      needFollowUp: string;
      inProgress: string;
      /** "including {count} high" */
      escalated: string;
      /** "{percent}% within SLA" */
      resolvedToday: string;
    };
  };
  board: {
    title: string;
    subtitle: string;
    columns: {
      needFollowUp: string;
      inProgress: string;
      escalated: string;
    };
    reasons: {
      /** "No owner · {hours}h left" */
      noOwner: string;
      /** "Missing evidence · {days}d left" */
      missingEvidence: string;
      /** "Owner: {name}" */
      ownerAssigned: string;
      waitingEmployee: string;
      harassmentConcern: string;
      repeatedNoProgress: string;
    };
    pills: {
      pending: string;
      inProgress: string;
      high: string;
    };
  };
  queue: {
    title: string;
    subtitle: string;
    reasons: {
      /** "Escalated from {team}" */
      escalatedFromTeam: string;
      /** "No progress for {days} days" */
      noProgressDays: string;
      awaitingApproval: string;
    };
    priority: {
      high: string;
      medium: string;
    };
    playbook: {
      title: string;
      assignOwner: string;
      escalateNoUpdate: string;
      closeAfterOutcome: string;
      captureEvidence: string;
    };
  };
  decision: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** "Escalate {id}" */
    cardTitle: string;
    cardSubtitle: string;
    fields: {
      reason: string;
      escalateTo: string;
      nextAction: string;
      dueBy: string;
    };
    values: {
      /** "No progress after {days} days" */
      reason: string;
      /** "Company Admin · {name}" */
      escalateTo: string;
      nextAction: string;
    };
    impact: DetailNoteCopy;
    cancel: string;
    confirm: string;
  };
  lifecycle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      needsFollowUp: LifecycleStepCopy;
      adminIntervention: LifecycleStepCopy;
      escalate: LifecycleStepCopy;
      recoveryAction: LifecycleStepCopy;
      confirmOutcome: LifecycleStepCopy;
    };
    flowRule: string;
  };
  detail: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intervene: {
      pill: string;
      title: string;
      subtitle: string;
      fields: {
        case: string;
        currentOwner: string;
        action: string;
        reason: string;
      };
      values: {
        /** "{id} · No progress · overdue {days}d" */
        case: string;
        action: string;
        reason: string;
      };
      requestEvidence: string;
      reassign: string;
      note: DetailNoteCopy;
      footer: string;
    };
    escalate: {
      pill: string;
      title: string;
      subtitle: string;
      fields: {
        reason: string;
        escalateTo: string;
        nextAction: string;
        dueBy: string;
      };
      note: DetailNoteCopy;
      cancel: string;
      confirm: string;
      footer: string;
    };
    recovery: {
      pill: string;
      title: string;
      subtitle: string;
      fields: {
        latestUpdate: string;
        employeeOutcome: string;
        adminDecision: string;
      };
      values: {
        latestUpdate: string;
        employeeOutcome: string;
        adminDecision: string;
      };
      noProgress: DetailNoteCopy;
      continueFollowUp: string;
      closeWithOutcome: string;
      contextInvariant: DetailNoteCopy;
      footer: string;
    };
  };
  nav: {
    backToBoard: string;
  };
}

export const ADMINFOLLOWUP_COPY = defineSectionCopy<AdminFollowUpCopy>({
  en: {
    intro: {
      title: "Move cases forward with clear next actions",
      subtitle: "Escalate only when needed",
      exportBoard: "Export board",
      escalateCase: "Escalate case",
    },
    stats: {
      labels: {
        needFollowUp: "Need follow-up",
        inProgress: "In progress",
        escalated: "Escalated",
        resolvedToday: "Resolved today",
      },
      captions: {
        needFollowUp: "requires admin attention",
        inProgress: "actively handled",
        escalated: "including {count} high",
        resolvedToday: "{percent}% within SLA",
      },
    },
    board: {
      title: "Follow-up board",
      subtitle: "Track movement from follow-up to resolution",
      columns: {
        needFollowUp: "Need follow-up",
        inProgress: "In progress",
        escalated: "Escalated",
      },
      reasons: {
        noOwner: "No owner · {hours}h left",
        missingEvidence: "Missing evidence · {days}d left",
        ownerAssigned: "Owner: {name}",
        waitingEmployee: "Waiting employee response",
        harassmentConcern: "Harassment concern",
        repeatedNoProgress: "Repeated no progress",
      },
      pills: {
        pending: "Pending",
        inProgress: "In progress",
        high: "High",
      },
    },
    queue: {
      title: "Escalation queue",
      subtitle: "Cases that need decision or reassignment",
      reasons: {
        escalatedFromTeam: "Escalated from {team}",
        noProgressDays: "No progress for {days} days",
        awaitingApproval: "Awaiting admin approval",
      },
      priority: {
        high: "High",
        medium: "Medium",
      },
      playbook: {
        title: "Admin playbook",
        assignOwner: "Assign owner within 4 hours",
        escalateNoUpdate: "Escalate if no update in 24 hours",
        closeAfterOutcome: "Close only after outcome is recorded",
        captureEvidence: "Capture evidence before resolution",
      },
    },
    decision: {
      eyebrow: "INTERACTION STATES",
      title: "Escalation decision",
      subtitle:
        "Explicit reason, destination, and consequence before escalation.",
      cardTitle: "Escalate {id}",
      cardSubtitle:
        "This action keeps the case open and records the escalation in Activity Log.",
      fields: {
        reason: "Escalation reason",
        escalateTo: "Escalate to",
        nextAction: "Required next action",
        dueBy: "Due by",
      },
      values: {
        reason: "No progress after {days} days",
        escalateTo: "Company Admin · {name}",
        nextAction: "Review evidence and reassign owner",
      },
      impact: {
        title: "Impact",
        body: "Current manager remains visible in history, but ownership moves to Admin.",
      },
      cancel: "Cancel",
      confirm: "Confirm escalation",
    },
    lifecycle: {
      eyebrow: "END-TO-END FLOW",
      title: "Follow-up lifecycle: attention → intervention → recovery",
      subtitle: "Escalation is a decision path, not a cosmetic status.",
      steps: {
        needsFollowUp: {
          title: "Needs follow-up",
          subtitle: "Item appears in Admin queue",
          details: {
            a: {
              label: "Trigger",
              text: "No owner / overdue / employee needs help",
            },
            b: { label: "Context", text: "Previous actions remain visible" },
            c: {
              label: "First step",
              text: "Try normal reassignment/follow-up",
            },
          },
        },
        adminIntervention: {
          title: "Admin intervention",
          subtitle: "Choose the next concrete action",
          details: {
            a: { label: "Reassign", text: "Change responsible manager" },
            b: { label: "Request evidence", text: "Ask employee/manager" },
            c: { label: "Extend due date", text: "Only with reason" },
          },
        },
        escalate: {
          title: "Escalate",
          subtitle: "Use when normal follow-up is insufficient",
          details: {
            a: { label: "Reason", text: "Mandatory" },
            b: { label: "Destination", text: "Company escalation owner" },
            c: { label: "Due date", text: "Explicit next checkpoint" },
          },
        },
        recoveryAction: {
          title: "Recovery action",
          subtitle: "New owner responds",
          details: {
            a: { label: "Update", text: "Action + evidence recorded" },
            b: { label: "Employee state", text: "Can still choose Need help" },
            c: { label: "No progress", text: "Return to escalation queue" },
          },
        },
        confirmOutcome: {
          title: "Confirm outcome",
          subtitle: "Resolve or continue",
          details: {
            a: { label: "Resolved", text: "Close with outcome + evidence" },
            b: { label: "Not resolved", text: "Create next follow-up" },
            c: {
              label: "Need help",
              text: "Escalate again with accumulated context",
            },
          },
        },
      },
      flowRule:
        "Never reset context when escalating: report history, evidence, owner changes, and outcome attempts remain attached.",
    },
    detail: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Follow-up & escalation — intervention, escalation, recovery",
      subtitle:
        "Escalation is represented as a full decision workflow with checkpoint ownership and recovery loop.",
      intervene: {
        pill: "INTERVENE",
        title: "Admin intervention",
        subtitle: "Try the least disruptive next action first",
        fields: {
          case: "Case",
          currentOwner: "Current owner",
          action: "Action",
          reason: "Reason *",
        },
        values: {
          case: "{id} · No progress · overdue {days}d",
          action: "Reassign / request evidence / extend due date",
          reason: "Required when due date or owner changes",
        },
        requestEvidence: "Request evidence",
        reassign: "Reassign",
        note: {
          title: "No silent escalation",
          body: "Admin must explicitly choose escalation if normal intervention is insufficient.",
        },
        footer: "Every intervention appends to the case history.",
      },
      escalate: {
        pill: "ESCALATE",
        title: "Confirm escalation",
        subtitle: "Reason, destination, required action, and due date",
        fields: {
          reason: "Reason *",
          escalateTo: "Escalate to *",
          nextAction: "Required next action *",
          dueBy: "Due by *",
        },
        note: {
          title: "Impact",
          body: "Case stays open. Previous owner stays visible in history; escalation owner becomes responsible for next checkpoint.",
        },
        cancel: "Cancel",
        confirm: "Confirm escalation",
        footer:
          "Escalation reason and destination are searchable in Activity Log.",
      },
      recovery: {
        pill: "RECOVERY",
        title: "Recovery checkpoint",
        subtitle: "Decide what happens after escalated action",
        fields: {
          latestUpdate: "Latest update",
          employeeOutcome: "Employee outcome",
          adminDecision: "Admin decision",
        },
        values: {
          latestUpdate: "New owner contacted manager and attached evidence",
          employeeOutcome: "Resolved / Not resolved / Need help",
          adminDecision: "Close / continue follow-up / escalate again",
        },
        noProgress: {
          title: "No progress",
          body: "If checkpoint is missed, the item returns to escalation queue with all accumulated context.",
        },
        continueFollowUp: "Continue follow-up",
        closeWithOutcome: "Close with outcome",
        contextInvariant: {
          title: "Context invariant",
          body: "Never reset report history, evidence, owner changes, or previous outcome attempts.",
        },
        footer: "Recovery result updates AD-04 report status and AD-01 dashboard.",
      },
    },
    nav: {
      backToBoard: "Back to follow-up board",
    },
  },

  id: {
    intro: {
      title: "Dorong kasus maju dengan tindakan lanjutan yang jelas",
      subtitle: "Eskalasi hanya bila diperlukan",
      exportBoard: "Ekspor papan",
      escalateCase: "Eskalasi kasus",
    },
    stats: {
      labels: {
        needFollowUp: "Perlu tindak lanjut",
        inProgress: "Sedang berjalan",
        escalated: "Dieskalasi",
        resolvedToday: "Selesai hari ini",
      },
      captions: {
        needFollowUp: "perlu perhatian admin",
        inProgress: "sedang ditangani",
        escalated: "termasuk {count} prioritas tinggi",
        resolvedToday: "{percent}% dalam SLA",
      },
    },
    board: {
      title: "Papan tindak lanjut",
      subtitle: "Pantau perpindahan dari tindak lanjut hingga penyelesaian",
      columns: {
        needFollowUp: "Perlu tindak lanjut",
        inProgress: "Sedang berjalan",
        escalated: "Dieskalasi",
      },
      reasons: {
        noOwner: "Tanpa penanggung jawab · sisa {hours} jam",
        missingEvidence: "Bukti belum lengkap · sisa {days} hari",
        ownerAssigned: "Penanggung jawab: {name}",
        waitingEmployee: "Menunggu respons karyawan",
        harassmentConcern: "Dugaan pelecehan",
        repeatedNoProgress: "Berulang kali tanpa kemajuan",
      },
      pills: {
        pending: "Menunggu",
        inProgress: "Sedang berjalan",
        high: "Tinggi",
      },
    },
    queue: {
      title: "Antrean eskalasi",
      subtitle: "Kasus yang perlu keputusan atau pengalihan",
      reasons: {
        escalatedFromTeam: "Dieskalasi dari {team}",
        noProgressDays: "Tidak ada kemajuan selama {days} hari",
        awaitingApproval: "Menunggu persetujuan admin",
      },
      priority: {
        high: "Tinggi",
        medium: "Sedang",
      },
      playbook: {
        title: "Panduan admin",
        assignOwner: "Tetapkan penanggung jawab dalam 4 jam",
        escalateNoUpdate: "Eskalasi jika tidak ada pembaruan dalam 24 jam",
        closeAfterOutcome: "Tutup hanya setelah hasil dicatat",
        captureEvidence: "Kumpulkan bukti sebelum penyelesaian",
      },
    },
    decision: {
      eyebrow: "STATUS INTERAKSI",
      title: "Keputusan eskalasi",
      subtitle: "Alasan, tujuan, dan konsekuensi yang jelas sebelum eskalasi.",
      cardTitle: "Eskalasi {id}",
      cardSubtitle:
        "Tindakan ini membiarkan kasus tetap terbuka dan mencatat eskalasi di Log Aktivitas.",
      fields: {
        reason: "Alasan eskalasi",
        escalateTo: "Eskalasi ke",
        nextAction: "Tindakan berikutnya yang wajib",
        dueBy: "Tenggat",
      },
      values: {
        reason: "Tidak ada kemajuan setelah {days} hari",
        escalateTo: "Admin Perusahaan · {name}",
        nextAction: "Tinjau bukti dan alihkan penanggung jawab",
      },
      impact: {
        title: "Dampak",
        body: "Manajer saat ini tetap terlihat di riwayat, tetapi kepemilikan berpindah ke Admin.",
      },
      cancel: "Batal",
      confirm: "Konfirmasi eskalasi",
    },
    lifecycle: {
      eyebrow: "ALUR MENYELURUH",
      title: "Siklus tindak lanjut: perhatian → intervensi → pemulihan",
      subtitle: "Eskalasi adalah jalur keputusan, bukan status kosmetik.",
      steps: {
        needsFollowUp: {
          title: "Perlu tindak lanjut",
          subtitle: "Item muncul di antrean Admin",
          details: {
            a: {
              label: "Pemicu",
              text: "Tanpa penanggung jawab / terlambat / karyawan butuh bantuan",
            },
            b: {
              label: "Konteks",
              text: "Tindakan sebelumnya tetap terlihat",
            },
            c: {
              label: "Langkah pertama",
              text: "Coba pengalihan/tindak lanjut biasa",
            },
          },
        },
        adminIntervention: {
          title: "Intervensi admin",
          subtitle: "Pilih tindakan konkret berikutnya",
          details: {
            a: { label: "Alihkan", text: "Ganti manajer penanggung jawab" },
            b: { label: "Minta bukti", text: "Tanya karyawan/manajer" },
            c: { label: "Perpanjang tenggat", text: "Hanya dengan alasan" },
          },
        },
        escalate: {
          title: "Eskalasi",
          subtitle: "Gunakan bila tindak lanjut biasa tidak cukup",
          details: {
            a: { label: "Alasan", text: "Wajib" },
            b: {
              label: "Tujuan",
              text: "Penanggung jawab eskalasi perusahaan",
            },
            c: {
              label: "Tenggat",
              text: "Titik periksa berikutnya yang eksplisit",
            },
          },
        },
        recoveryAction: {
          title: "Tindakan pemulihan",
          subtitle: "Penanggung jawab baru merespons",
          details: {
            a: { label: "Pembaruan", text: "Tindakan + bukti tercatat" },
            b: {
              label: "Status karyawan",
              text: "Masih bisa memilih Butuh bantuan",
            },
            c: {
              label: "Tidak ada kemajuan",
              text: "Kembali ke antrean eskalasi",
            },
          },
        },
        confirmOutcome: {
          title: "Konfirmasi hasil",
          subtitle: "Selesaikan atau lanjutkan",
          details: {
            a: { label: "Selesai", text: "Tutup dengan hasil + bukti" },
            b: {
              label: "Belum selesai",
              text: "Buat tindak lanjut berikutnya",
            },
            c: {
              label: "Butuh bantuan",
              text: "Eskalasi lagi dengan konteks yang terkumpul",
            },
          },
        },
      },
      flowRule:
        "Jangan pernah menghapus konteks saat eskalasi: riwayat laporan, bukti, perubahan penanggung jawab, dan upaya penyelesaian tetap melekat.",
    },
    detail: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Tindak lanjut & eskalasi — intervensi, eskalasi, pemulihan",
      subtitle:
        "Eskalasi ditampilkan sebagai alur keputusan penuh dengan kepemilikan titik periksa dan lingkaran pemulihan.",
      intervene: {
        pill: "INTERVENSI",
        title: "Intervensi admin",
        subtitle: "Coba dulu tindakan berikutnya yang paling tidak mengganggu",
        fields: {
          case: "Kasus",
          currentOwner: "Penanggung jawab saat ini",
          action: "Tindakan",
          reason: "Alasan *",
        },
        values: {
          case: "{id} · Tidak ada kemajuan · terlambat {days} hari",
          action: "Alihkan / minta bukti / perpanjang tenggat",
          reason: "Wajib bila tenggat atau penanggung jawab berubah",
        },
        requestEvidence: "Minta bukti",
        reassign: "Alihkan",
        note: {
          title: "Tidak ada eskalasi diam-diam",
          body: "Admin harus memilih eskalasi secara eksplisit bila intervensi biasa tidak cukup.",
        },
        footer: "Setiap intervensi ditambahkan ke riwayat kasus.",
      },
      escalate: {
        pill: "ESKALASI",
        title: "Konfirmasi eskalasi",
        subtitle: "Alasan, tujuan, tindakan wajib, dan tenggat",
        fields: {
          reason: "Alasan *",
          escalateTo: "Eskalasi ke *",
          nextAction: "Tindakan berikutnya yang wajib *",
          dueBy: "Tenggat *",
        },
        note: {
          title: "Dampak",
          body: "Kasus tetap terbuka. Penanggung jawab sebelumnya tetap terlihat di riwayat; penanggung jawab eskalasi bertanggung jawab atas titik periksa berikutnya.",
        },
        cancel: "Batal",
        confirm: "Konfirmasi eskalasi",
        footer: "Alasan dan tujuan eskalasi dapat dicari di Log Aktivitas.",
      },
      recovery: {
        pill: "PEMULIHAN",
        title: "Titik periksa pemulihan",
        subtitle: "Tentukan apa yang terjadi setelah tindakan eskalasi",
        fields: {
          latestUpdate: "Pembaruan terakhir",
          employeeOutcome: "Hasil karyawan",
          adminDecision: "Keputusan admin",
        },
        values: {
          latestUpdate:
            "Penanggung jawab baru menghubungi manajer dan melampirkan bukti",
          employeeOutcome: "Selesai / Belum selesai / Butuh bantuan",
          adminDecision: "Tutup / lanjutkan tindak lanjut / eskalasi lagi",
        },
        noProgress: {
          title: "Tidak ada kemajuan",
          body: "Bila titik periksa terlewat, item kembali ke antrean eskalasi dengan seluruh konteks yang terkumpul.",
        },
        continueFollowUp: "Lanjutkan tindak lanjut",
        closeWithOutcome: "Tutup dengan hasil",
        contextInvariant: {
          title: "Konteks tidak berubah",
          body: "Jangan pernah menghapus riwayat laporan, bukti, perubahan penanggung jawab, atau upaya penyelesaian sebelumnya.",
        },
        footer:
          "Hasil pemulihan memperbarui status laporan AD-04 dan dasbor AD-01.",
      },
    },
    nav: {
      backToBoard: "Kembali ke papan tindak lanjut",
    },
  },

  ja: {
    intro: {
      title: "明確な次のアクションで案件を前に進める",
      subtitle: "必要な場合のみエスカレーション",
      exportBoard: "ボードを書き出す",
      escalateCase: "案件をエスカレーション",
    },
    stats: {
      labels: {
        needFollowUp: "要フォローアップ",
        inProgress: "対応中",
        escalated: "エスカレーション済み",
        resolvedToday: "本日解決",
      },
      captions: {
        needFollowUp: "管理者の対応が必要",
        inProgress: "対応進行中",
        escalated: "うち高優先度 {count} 件",
        resolvedToday: "SLA 内 {percent}%",
      },
    },
    board: {
      title: "フォローアップボード",
      subtitle: "フォローアップから解決までの流れを追跡",
      columns: {
        needFollowUp: "要フォローアップ",
        inProgress: "対応中",
        escalated: "エスカレーション済み",
      },
      reasons: {
        noOwner: "担当者なし・残り {hours} 時間",
        missingEvidence: "証跡不足・残り {days} 日",
        ownerAssigned: "担当: {name}",
        waitingEmployee: "従業員の回答待ち",
        harassmentConcern: "ハラスメントの懸念",
        repeatedNoProgress: "進捗なしの繰り返し",
      },
      pills: {
        pending: "保留",
        inProgress: "対応中",
        high: "高",
      },
    },
    queue: {
      title: "エスカレーションキュー",
      subtitle: "判断または再割り当てが必要な案件",
      reasons: {
        escalatedFromTeam: "{team} からエスカレーション",
        noProgressDays: "{days} 日間進捗なし",
        awaitingApproval: "管理者の承認待ち",
      },
      priority: {
        high: "高",
        medium: "中",
      },
      playbook: {
        title: "管理者プレイブック",
        assignOwner: "4 時間以内に担当者を割り当てる",
        escalateNoUpdate: "24 時間更新がなければエスカレーションする",
        closeAfterOutcome: "結果を記録してから終了する",
        captureEvidence: "解決前に証跡を残す",
      },
    },
    decision: {
      eyebrow: "インタラクション状態",
      title: "エスカレーションの判断",
      subtitle: "エスカレーション前に理由・宛先・影響を明示します。",
      cardTitle: "{id} をエスカレーション",
      cardSubtitle:
        "この操作では案件は開いたままとなり、エスカレーションがアクティビティログに記録されます。",
      fields: {
        reason: "エスカレーションの理由",
        escalateTo: "エスカレーション先",
        nextAction: "必要な次のアクション",
        dueBy: "期限",
      },
      values: {
        reason: "{days} 日間進捗なし",
        escalateTo: "会社管理者・{name}",
        nextAction: "証跡を確認し担当者を再割り当てする",
      },
      impact: {
        title: "影響",
        body: "現在のマネージャーは履歴に残りますが、担当は管理者に移ります。",
      },
      cancel: "キャンセル",
      confirm: "エスカレーションを確定",
    },
    lifecycle: {
      eyebrow: "エンドツーエンドの流れ",
      title: "フォローアップの流れ: 気づき → 介入 → 回復",
      subtitle:
        "エスカレーションは見せかけのステータスではなく、判断の経路です。",
      steps: {
        needsFollowUp: {
          title: "要フォローアップ",
          subtitle: "項目が管理者キューに表示される",
          details: {
            a: {
              label: "トリガー",
              text: "担当者なし / 期限超過 / 従業員が支援を必要",
            },
            b: {
              label: "コンテキスト",
              text: "これまでの対応は表示されたまま",
            },
            c: {
              label: "最初の一手",
              text: "通常の再割り当て・フォローアップを試す",
            },
          },
        },
        adminIntervention: {
          title: "管理者の介入",
          subtitle: "次の具体的なアクションを選ぶ",
          details: {
            a: { label: "再割り当て", text: "担当マネージャーを変更" },
            b: { label: "証跡を依頼", text: "従業員・マネージャーに依頼" },
            c: { label: "期限を延長", text: "理由がある場合のみ" },
          },
        },
        escalate: {
          title: "エスカレーション",
          subtitle: "通常のフォローアップで不十分な場合に使う",
          details: {
            a: { label: "理由", text: "必須" },
            b: { label: "宛先", text: "会社のエスカレーション担当" },
            c: { label: "期限", text: "明示的な次のチェックポイント" },
          },
        },
        recoveryAction: {
          title: "回復アクション",
          subtitle: "新しい担当者が対応する",
          details: {
            a: { label: "更新", text: "対応と証跡を記録" },
            b: { label: "従業員の状態", text: "「支援が必要」を選び直せる" },
            c: { label: "進捗なし", text: "エスカレーションキューに戻る" },
          },
        },
        confirmOutcome: {
          title: "結果を確定",
          subtitle: "解決するか継続するか",
          details: {
            a: { label: "解決", text: "結果と証跡を添えて終了" },
            b: { label: "未解決", text: "次のフォローアップを作成" },
            c: {
              label: "支援が必要",
              text: "蓄積した文脈とともに再度エスカレーション",
            },
          },
        },
      },
      flowRule:
        "エスカレーション時に文脈をリセットしないこと: レポート履歴・証跡・担当者の変更・これまでの対応はすべて引き継がれます。",
    },
    detail: {
      eyebrow: "具体的な運用状態",
      title: "フォローアップとエスカレーション — 介入・エスカレーション・回復",
      subtitle:
        "エスカレーションは、チェックポイントの担当と回復ループを備えた完全な判断ワークフローとして表現されます。",
      intervene: {
        pill: "介入",
        title: "管理者の介入",
        subtitle: "まずは影響の最も小さい次のアクションを試す",
        fields: {
          case: "案件",
          currentOwner: "現在の担当者",
          action: "アクション",
          reason: "理由 *",
        },
        values: {
          case: "{id}・進捗なし・{days} 日超過",
          action: "再割り当て / 証跡の依頼 / 期限の延長",
          reason: "期限または担当者を変更する場合は必須",
        },
        requestEvidence: "証跡を依頼",
        reassign: "再割り当て",
        note: {
          title: "無言のエスカレーションは不可",
          body: "通常の介入で不十分な場合、管理者が明示的にエスカレーションを選択する必要があります。",
        },
        footer: "すべての介入は案件履歴に追記されます。",
      },
      escalate: {
        pill: "エスカレーション",
        title: "エスカレーションの確定",
        subtitle: "理由・宛先・必要なアクション・期限",
        fields: {
          reason: "理由 *",
          escalateTo: "エスカレーション先 *",
          nextAction: "必要な次のアクション *",
          dueBy: "期限 *",
        },
        note: {
          title: "影響",
          body: "案件は開いたままです。前の担当者は履歴に残り、エスカレーション先の担当者が次のチェックポイントに責任を持ちます。",
        },
        cancel: "キャンセル",
        confirm: "エスカレーションを確定",
        footer:
          "エスカレーションの理由と宛先はアクティビティログで検索できます。",
      },
      recovery: {
        pill: "回復",
        title: "回復チェックポイント",
        subtitle: "エスカレーション後の扱いを決める",
        fields: {
          latestUpdate: "最新の更新",
          employeeOutcome: "従業員の結果",
          adminDecision: "管理者の判断",
        },
        values: {
          latestUpdate: "新しい担当者がマネージャーに連絡し、証跡を添付しました",
          employeeOutcome: "解決 / 未解決 / 支援が必要",
          adminDecision: "終了 / フォローアップ継続 / 再エスカレーション",
        },
        noProgress: {
          title: "進捗なし",
          body: "チェックポイントを逃した場合、項目は蓄積された文脈とともにエスカレーションキューに戻ります。",
        },
        continueFollowUp: "フォローアップを継続",
        closeWithOutcome: "結果を添えて終了",
        contextInvariant: {
          title: "文脈の不変条件",
          body: "レポート履歴・証跡・担当者の変更・これまでの対応をリセットしないこと。",
        },
        footer:
          "回復の結果は AD-04 のレポート状態と AD-01 のダッシュボードに反映されます。",
      },
    },
    nav: {
      backToBoard: "フォローアップボードに戻る",
    },
  },
});
