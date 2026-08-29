/* request-demo  —  PAGES.requestDemo
   Merged from 1 original layer (line 4361). */
PAGES.requestDemo=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Request a demo','Minta demo','デモの依頼')}</span>
  <h1>${L('Three steps from a first call to a pilot plan.','Tiga langkah dari panggilan pertama sampai rencana pilot.','初回の打合せからパイロット計画まで、3ステップ。')}</h1>
  <p>${L('The running product is public at emenda.tech and the design file is open — so the demo is not a reveal. It is the conversation about which of your workflows breaks first, and whether the 90-day pilot is worth running at all.','Produk yang berjalan sudah publik di emenda.tech dan file desainnya terbuka — jadi demo ini bukan pengungkapan. Ini percakapan tentang workflow mana milik Anda yang paling dulu patah, dan apakah pilot 90 hari itu layak dijalankan sama sekali.','稼働中の製品はemenda.techで公開され、デザインファイルも開いている。したがってデモは種明かしではない。御社のどのワークフローが最初に壊れるか、そして90日パイロットを走らせる価値があるかを話す場である。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('How it runs','Bagaimana jalannya','進め方')}</span>
  <h2>${L('No slideware. The product is already open.','Tanpa slideware. Produknya sudah terbuka.','スライドは不要。製品は既に開いている。')}</h2>
  <div class="steps">
    ${[
      ['1',L('Live walkthrough','Walkthrough langsung','ライブ・ウォークスルー'),
        L('We open the running app and walk one complete loop — a worker submits a daily report, a manager verifies it, the worker sees the outcome. Then you drive it yourself.','Kami membuka aplikasi yang berjalan dan menelusuri satu loop lengkap — worker mengirim laporan harian, manager memverifikasi, worker melihat hasilnya. Lalu Anda yang mengoperasikannya.','稼働中のアプリを開き、完全な一巡を辿る——労働者が日報を提出し、管理者が検証し、労働者が結果を見る。その後は御社に操作していただく。'),
        L('60 minutes','60 menit','60分')],
      ['2',L('Fit-gap workshop','Workshop fit-gap','フィットギャップ検討'),
        L('We map your actual workflow against the nine pillars and name the gaps out loud, including the ones that would need building. The output is a written list, not a verbal reassurance.','Kami memetakan workflow Anda yang sebenarnya terhadap sembilan pilar dan menyebut gap-nya terang-terangan, termasuk yang harus dibangun. Outputnya daftar tertulis, bukan jaminan lisan.','御社の実際の業務を9つの柱に突き合わせ、要開発のものも含めてギャップを明示する。成果物は口頭の安心ではなく、書かれた一覧である。'),
        L('Half day','Setengah hari','半日')],
      ['3',L('Proposal and pilot plan','Proposal dan rencana pilot','提案とパイロット計画'),
        L('A ninety-day pilot with ten to thirty workers, the metric it will be judged on agreed in advance, and the condition under which we would tell you to stop.','Pilot sembilan puluh hari dengan sepuluh sampai tiga puluh worker, metrik penilaiannya disepakati di depan, dan kondisi di mana kami akan menyarankan Anda berhenti.','10〜30名・90日のパイロット。評価指標を事前に合意し、中止を進言する条件もあらかじめ定める。'),
        L('Written within a week','Tertulis dalam seminggu','1週間以内に書面で')]
    ].map(([n2,t,d,dur])=>`<div class="step reveal"><div class="sn">${n2}</div><h3>${t}</h3><p>${d}</p><div class="dur">${dur}</div></div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Before you ask','Sebelum Anda bertanya','ご依頼の前に')}</span>
  <h2>${L('What you should know going in.','Yang perlu Anda ketahui sejak awal.','事前にご承知おきいただきたいこと。')}</h2>
  <ul class="plist">
    <li><span class="pi">01</span><span><b>${L('This is a prototype, not a product you can buy today.','Ini prototype, bukan produk yang bisa dibeli hari ini.','これはプロトタイプであり、本日購入できる製品ではない。')}</b> ${L('There is no backend and no authentication. A pilot means building the server side against a design that is already fully specified — not configuring something that exists.','Belum ada backend dan belum ada authentication. Pilot berarti membangun sisi server di atas desain yang sudah sepenuhnya dispesifikasikan — bukan mengonfigurasi sesuatu yang sudah ada.','バックエンドも認証も存在しない。パイロットとは、既に完全に仕様化された設計に対してサーバー側を構築することであり、既存物の設定作業ではない。')}</span></li>
    <li><span class="pi">02</span><span><b>${L('Stage 1 replaces LINE, paper and the telephone.','Stage 1 menggantikan LINE, kertas, dan telepon.','Stage 1はLINE・紙・電話を置き換える。')}</b> ${L('It does not integrate with an incumbent system, and it does not try to compete with the private messaging your team already uses.','Ia tidak berintegrasi dengan sistem incumbent, dan tidak mencoba bersaing dengan messaging privat yang sudah dipakai tim Anda.','既存システムとの統合は行わず、御社の私的な連絡手段と競合しようともしない。')}</span></li>
    <li><span class="pi">03</span><span><b>${L('The worker owns the identity.','Worker memiliki identitasnya.','IDの主体は労働者本人である。')}</b> ${L('If that is not acceptable to your organization, the model will not fit, and it is better to establish that in the first hour than in the third month.','Kalau itu tidak bisa diterima organisasi Anda, modelnya tidak akan cocok, dan lebih baik memastikannya di jam pertama daripada di bulan ketiga.','それが御社にとって受け入れがたい場合、このモデルは適合しない。3か月目より最初の1時間で確認する方がよい。')}</span></li>
    <li><span class="pi">04</span><span><b>${L('Pricing for the pilot is ¥5,000 per worker per month.','Harga pilot adalah ¥5.000 per worker per bulan.','パイロット価格は月額5,000円／人。')}</b> ${L('Billing is B2B only. Emenda does not monetise the individual — the worker’s side of the value is the coin, the portable record and the next job.','Penagihan hanya B2B. Emenda tidak memonetisasi individu — nilai di sisi worker adalah coin, record portabel, dan pekerjaan berikutnya.','課金はB2Bのみ。Emendaは個人からマネタイズしない。本人側の価値はコイン、持ち運べる記録、そして次の仕事である。')}</span></li>
  </ul>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Send a request','Kirim permintaan','依頼を送る')}</span>
  <h2>${L('Tell us the workflow, not the feature list.','Ceritakan workflow-nya, bukan daftar fiturnya.','機能一覧ではなく、業務の流れをお聞かせください。')}</h2>
  <form class="demo-form" id="demoForm">
    <div class="field"><label>${L('Your name','Nama Anda','お名前')}</label><input type="text" name="name" required></div>
    <div class="field"><label>${L('Organization','Organisasi','組織名')}</label><input type="text" name="org" required></div>
    <div class="field"><label>${L('Email','Email','メールアドレス')}</label><input type="email" name="email" required></div>
    <div class="field"><label>${L('Industry','Industri','業種')}</label>
      <select name="industry">
        <option>${L('Caregiving','Perawatan (Kaigo)','介護')}</option>
        <option>${L('Construction & interior fit-out','Konstruksi & interior','建設・内装')}</option>
        <option>${L('Manufacturing & food','Manufaktur & makanan','製造・食品')}</option>
        <option>${L('Logistics & warehouse','Logistik & gudang','物流・倉庫')}</option>
        <option>${L('Other','Lainnya','その他')}</option>
      </select></div>
    <div class="field"><label>${L('Foreign workers on site','Pekerja asing di lokasi','現場の外国人労働者数')}</label>
      <select name="size"><option>1–10</option><option>11–30</option><option>31–100</option><option>100+</option></select></div>
    <div class="field"><label>${L('Preferred language','Bahasa yang diinginkan','希望言語')}</label>
      <select name="lang"><option>日本語</option><option>English</option><option>Bahasa Indonesia</option></select></div>
    <div class="field full"><label>${L('Which part of the day breaks first?','Bagian mana dari hari kerja yang paling dulu patah?','一日のどの部分が最初に壊れますか')}</label>
      <textarea name="problem" placeholder="${L('For example: shift handover notes written in Indonesian never reach the record.','Misalnya: catatan serah terima shift yang ditulis dalam Bahasa Indonesia tidak pernah sampai ke record.','例：インドネシア語で書かれた申し送りが記録に届かない。')}"></textarea></div>
    <div class="full"><button type="submit" class="btn btn-p btn-lg">${L('Compose the request','Susun permintaannya','依頼文を作成')}</button></div>
  </form>
  <p class="form-note">${L('This site has no server. Submitting opens your own mail client with the request pre-filled, so you can see and edit exactly what is sent before it leaves your machine. Nothing is transmitted from this page.','Situs ini tidak punya server. Mengirim akan membuka mail client Anda sendiri dengan permintaan yang sudah terisi, sehingga Anda bisa melihat dan mengedit persis apa yang dikirim sebelum meninggalkan mesin Anda. Tidak ada yang dikirim dari halaman ini.','本サイトにサーバーはない。送信すると、依頼内容が下書きされた状態でご自身のメールクライアントが開く。端末を離れる前に、送られる内容をそのまま確認・編集できる。本ページからは何も送信されない。')}</p>
</div></section>
${detailedCTA()}`;
