/* comparison  —  PAGES.comparison
   Merged from 1 original layer (line 4102). */
PAGES.comparison=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Company / Comparison','Perusahaan / Perbandingan','会社 / 比較')}</span>
  <h1>${L('Almost every incumbent takes the administrator as the subject. That is the opening.','Hampir semua incumbent mengambil administrator sebagai subjek. Di situlah celahnya.','既存プレイヤーのほぼすべてが管理者を主語に取る。そこが空白である。')}</h1>
  <p>${L('Two axes organise the market: who the data is about, and where the pressure comes from. Cut that way, the Japanese foreign-worker stack clusters almost entirely in one quadrant.','Dua sumbu menata pasar: data ini tentang siapa, dan tekanannya datang dari mana. Dipotong begitu, stack pekerja asing di Jepang hampir seluruhnya menumpuk di satu kuadran.','市場は2軸で整理できる——データの主語は誰か、圧力はどこから来るか。こう切ると、日本の外国人労働分野のスタックはほぼ一つの象限に集中する。')}</p>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="confid-band">
    <span class="cb-tag">${L('INTERNAL','INTERNAL','社内限り')}</span>
    <p>${L('This page is derived from the internal competitor analysis (2026-07 edition, marked internal use only). Treat it as an internal positioning aid: gate it before sharing this site externally, and do not name partnership candidates in outward-facing material.','Halaman ini diturunkan dari analisis kompetitor internal (edisi 2026-07, ditandai untuk penggunaan internal saja). Perlakukan sebagai alat positioning internal: batasi aksesnya sebelum membagikan situs ini ke luar, dan jangan menyebut kandidat kemitraan dalam materi yang menghadap keluar.','本ページは社内競合分析（2026年7月版・社内限り）に基づく。社内向けポジショニング資料として扱い、本サイトを外部共有する前に遮断すること。また協業候補の社名を外部資料に出さないこと。')}</p>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Market layers','Lapisan pasar','市場レイヤー')}</span>
  <h2>${L('Seven layers, one empty seat.','Tujuh lapisan, satu kursi kosong.','7つのレイヤーと、空いた一席。')}</h2>
  <div class="cmp-scroll">
    <table class="cmp">
      <thead><tr>
        <th>${L('Layer','Lapisan','レイヤー')}</th>
        <th>${L('Subject','Subjek','主語')}</th>
        <th>${L('Nature of the data','Sifat datanya','データの性質')}</th>
        <th>${L('Relation to Emenda','Relasi ke Emenda','当社との関係')}</th>
      </tr></thead>
      <tbody>
        ${[
          [L('Residency & specified-skill management SaaS','SaaS manajemen residensi & specified skill','在留・特定技能管理SaaS'),
           L('Eleven vendors competing on filings and support records.','Sebelas vendor bersaing di pengarsipan dan record pendukung.','申請と支援記録で競う11社。'),'admin',
           L('Application documents, notifications, support logs — the language of the institution.','Dokumen aplikasi, notifikasi, log dukungan — bahasa institusi.','申請書類、届出、支援記録——制度の言語。'),
           L('Indirect. Saturated, and encroaching at the boundary.','Tidak langsung. Sudah jenuh, dan menggerus di batas.','間接。飽和しており、境界を侵食してくる。')],
          [L('Field operations × multilingual','Operasi lapangan × multibahasa','現場オペレーション×多言語'),
           L('One large player, not foreign-worker specific.','Satu pemain besar, tidak khusus pekerja asing.','大手1社。外国人特化ではない。'),'admin',
           L('Field work data — checklists, inspections, shift records.','Data kerja lapangan — checklist, inspeksi, record shift.','現場業務データ——チェックリスト、点検、シフト記録。'),
           L('Structural threat. Closest to the operational surface Stage 1 occupies.','Ancaman struktural. Paling dekat dengan surface operasional yang ditempati Stage 1.','構造的脅威。Stage 1が占める運用面に最も近い。')],
          [L('Living infrastructure & life log','Infrastruktur kehidupan & life log','生活インフラ・ライフログ'),
           L('Two established players on the living side.','Dua pemain mapan di sisi kehidupan.','生活面の既存2社。'),'worker',
           L('Housing, telecom, finance, consultation history.','Perumahan, telekomunikasi, keuangan, riwayat konsultasi.','住居、通信、金融、相談履歴。'),
           L('Adjacent, and a future competitor. They hold the life layer; they do not hold work.','Bersebelahan, dan kompetitor masa depan. Mereka memegang lapisan kehidupan; bukan pekerjaan.','隣接し将来の競合。生活層は握るが、労働は握っていない。')],
          [L('Field records (partial)','Record lapangan (parsial)','現場記録（部分）'),
           L('One small vendor, oriented to supervising bodies.','Satu vendor kecil, berorientasi ke badan pengawas.','監理団体向けの小規模1社。'),'admin',
           L('Daily reports written for the supervising organisation.','Laporan harian yang ditulis untuk organisasi pengawas.','監理団体向けに書かれた日報。'),
           L('Direct but small. Same artifact, opposite subject.','Langsung tapi kecil. Artefak sama, subjek berlawanan.','直接的だが小規模。成果物は同じ、主語が逆。')],
          [L('Worker Voice Tech (English-speaking markets)','Worker Voice Tech (pasar berbahasa Inggris)','Worker Voice Tech（英語圏）'),
           L('Three category reference points outside Japan.','Tiga titik referensi kategori di luar Jepang.','日本国外のカテゴリ参照点3社。'),'worker',
           L('Grievance and survey data, built for audits.','Data keluhan dan survei, dibangun untuk audit.','監査向けの苦情・サーベイデータ。'),
           L('Category reference. External pressure, not internal operations.','Referensi kategori. Tekanan eksternal, bukan operasi internal.','カテゴリ参照。外圧型であり内部運用ではない。')],
          [L('The real competitor','Kompetitor sesungguhnya','真の競合'),
           L('LINE, paper, the telephone, and full outsourcing.','LINE, kertas, telepon, dan outsourcing penuh.','LINE、紙、電話、そして完全委託。'),'admin',
           L('Unstructured. Nothing accumulates anywhere.','Tidak terstruktur. Tidak ada yang terakumulasi di mana pun.','非構造。どこにも蓄積しない。'),
           L('This is what Stage 1 actually replaces.','Inilah yang sebenarnya digantikan Stage 1.','Stage 1が実際に置き換える対象。')],
          [L('Gatekeepers','Penjaga gerbang','門番'),
           L('Registered support organisations and supervising bodies.','Lembaga pendukung terdaftar dan badan pengawas.','登録支援機関・監理団体。'),'admin',
           L('A monopoly position granted by regulation.','Posisi monopoli yang diberikan regulasi.','制度が与える独占的地位。'),
           L('Structural — but time-limited. The 2027 transition loosens it.','Struktural — tapi terbatas waktu. Transisi 2027 melonggarkannya.','構造的だが時限的。2027年の移行で緩む。')]
        ].map(([l,who,subj,data,rel])=>`<tr>
          <td><b>${l}</b><span class="who">${who}</span></td>
          <td><span class="subject ${subj}">${subj==='worker'?L('Worker','Worker','労働者'):L('Administrator','Administrator','管理者')}</span></td>
          <td>${data}</td><td>${rel}</td></tr>`).join('')}
        <tr class="us">
          <td><b>Emenda</b><span class="who">${L('Worker-subject, internal-pressure','Subjek worker, tekanan internal','労働者主語・内圧型')}</span></td>
          <td><span class="subject worker">${L('Worker','Worker','労働者')}</span></td>
          <td>${L('Primary labour data from the field — what happened, what was said, what failed to get through.','Data kerja primer dari lapangan — apa yang terjadi, apa yang dikatakan, apa yang gagal tersampaikan.','現場の一次労働データ——何が起き、何が言われ、何が伝わらなかったか。')}</td>
          <td>${L('The seat nobody occupies.','Kursi yang tidak ditempati siapa pun.','誰も座っていない席。')}</td>
        </tr>
      </tbody>
    </table>
  </div>
  ${derived('Company names are withheld here by choice; the source analysis is marked internal use only and names a partnership candidate that should not appear in outward-facing material.','Nama perusahaan sengaja tidak dicantumkan di sini; analisis sumbernya ditandai internal saja dan menyebut kandidat kemitraan yang tidak boleh muncul di materi yang menghadap keluar.','社名は意図的に伏せた。原典は社内限りであり、外部資料に出すべきでない協業候補名を含むため。')}
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('The differentiator','Pembeda','差別化')}</span>
  <h2>${L('Feature parity is not the fight. Subject and integration are.','Paritas fitur bukan pertarungannya. Subjek dan integrasi-lah pertarungannya.','機能パリティは争点ではない。主語と統合こそが争点である。')}</h2>
  <p class="lede">${L('Translation, record-keeping and messaging all already exist in the market. Spending resources to match them feature for feature would be spending on the part that is already solved. The two things that are not solved are which model the data hangs from, and whether communication and records live in the same one.','Terjemahan, pencatatan, dan messaging semuanya sudah ada di pasar. Menghabiskan sumber daya untuk menyamai mereka fitur per fitur berarti menghabiskan pada bagian yang sudah selesai. Dua hal yang belum selesai adalah dari model mana data itu digantung, dan apakah komunikasi dan record tinggal di model yang sama.','翻訳・記録・通信はすでに市場に存在する。機能単位で並ぶことに資源を割くのは、既に解かれた部分に割くことである。未解決なのは、データがどのモデルにぶら下がるか、そして通信と記録が同一モデル上にあるかの2点だけである。')}</p>
  <div class="grid g2" style="margin-top:30px">
    <div class="card reveal"><span class="cn">01</span><h3>${L('Integration','Integrasi','統合')}</h3><p>${L('Communication and records collapse into one data model. Today they are split across a chat app and a paper form, and neither knows the other exists. The switching case is that unification, not a better message bubble.','Komunikasi dan record melebur ke satu data model. Hari ini keduanya terpisah antara aplikasi chat dan formulir kertas, dan tak satu pun tahu yang lain ada. Alasan berpindah adalah unifikasi itu, bukan bubble pesan yang lebih bagus.','通信と記録を単一データモデルに統合する。現在はチャットアプリと紙の帳票に分断され、互いの存在を知らない。乗り換え理由はこの統一であって、より良い吹き出しではない。')}</p></div>
    <div class="card reveal"><span class="cn">02</span><h3>${L('Single subject','Subjek tunggal','単一主体')}</h3><p>${L('The data model is subject to the worker. Every incumbent stack is subject to the administrator. This is not a positioning adjective — it changes what happens to a record when someone resigns, transfers, or goes home.','Data model tunduk pada worker. Setiap stack incumbent tunduk pada administrator. Ini bukan kata sifat positioning — ia mengubah apa yang terjadi pada sebuah record ketika seseorang resign, pindah, atau pulang.','データモデルの主語は労働者本人である。既存スタックはすべて管理者が主語。これは positioning の形容詞ではなく、退職・転籍・帰国時に記録に何が起きるかを変える。')}</p></div>
  </div>
</div></section>
${detailedCTA()}`;
