/* roadmap  —  PAGES.roadmap
   Merged from 1 original layer (line 4306). */
PAGES.roadmap=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Resources / Roadmap','Sumber Daya / Roadmap','リソース / ロードマップ')}</span>
  <h1>${L('Four phases, and one metric per phase that can kill it.','Empat fase, dan satu metrik per fase yang bisa menggugurkannya.','4つのフェーズと、各フェーズを棄却しうる指標が一つずつ。')}</h1>
  <p>${L('Each phase carries a single north-star metric. If the north star does not move, the hypothesis behind that phase is wrong and the next phase should not be funded. Supporting KPIs exist to explain the north star, not to replace it when it disappoints.','Tiap fase membawa satu metrik north-star. Kalau north-star-nya tidak bergerak, hipotesis di balik fase itu salah dan fase berikutnya tidak layak didanai. KPI pendukung ada untuk menjelaskan north-star, bukan menggantikannya ketika ia mengecewakan.','各フェーズは北極星指標を一つ持つ。北極星が動かなければ、そのフェーズの仮説は誤りであり、次のフェーズに資金を投じるべきではない。補助KPIは北極星を説明するために存在し、期待外れのときにそれを差し替えるためではない。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Phase plan','Rencana fase','フェーズ計画')}</span>
  <h2>${L('From replacement tool to primary data infrastructure.','Dari alat pengganti menjadi infrastruktur data primer.','置き換えツールから一次データ基盤へ。')}</h2>
  <div class="phases">
    ${[
      ['P0', L('2026 Q3–Q4 · 3 months','2026 Q3–Q4 · 3 bulan','2026 Q3–Q4・3か月'),
        L('PoC MVP — the replacement tool','PoC MVP — alat pengganti','PoC MVP——置き換えツール'),
        L('Replace LINE, paper and the telephone with Stage 1 and demonstrate that the north star moves. Two to three companies — one care, one interior fit-out, one food or manufacturing — ten to thirty workers each, ninety days, ¥5,000 per worker per month.','Ganti LINE, kertas, dan telepon dengan Stage 1 dan buktikan north-star-nya bergerak. Dua sampai tiga perusahaan — satu care, satu interior, satu makanan atau manufaktur — masing-masing sepuluh sampai tiga puluh worker, sembilan puluh hari, ¥5.000 per worker per bulan.','LINE・紙・電話をStage 1で置き換え、北極星が動くことを実証する。2〜3社（介護1・内装1・食品または製造1）、各10〜30名、90日、月額5,000円／人。'),
        L('Share of messages initiated by the worker','Proporsi pesan yang diinisiasi worker','労働者起点メッセージ比率'),
        L('Daily report submission rate · unread over 24h · worker WAU · paid retention','Tingkat submit laporan harian · unread lebih dari 24 jam · WAU worker · retensi berbayar','日報提出率・24時間超未読・労働者WAU・有償継続率')],
      ['P1', L('After the PoC','Setelah PoC','PoC後'),
        L('Identity that outlives the employer','Identitas yang bertahan lebih lama dari employer','雇用主より長く生きるID'),
        L('Issue the EMENDA ID before arrival in Japan, unattended and free to the worker, and prove it stays active through resignation and transfer. This is the phase where the product stops being an employer tool.','Terbitkan EMENDA ID sebelum tiba di Jepang, tanpa petugas dan gratis bagi worker, dan buktikan ia tetap aktif melewati resign dan transfer. Ini fase di mana produk berhenti menjadi alat employer.','来日前に、無人かつ本人無料でEMENDA IDを発行し、退職・転籍を越えて有効であることを実証する。製品が雇用主のツールであることをやめるフェーズ。'),
        L('Share of IDs still active after transfer or resignation','Proporsi ID yang masih aktif setelah transfer atau resign','転籍・退職後もアクティブなID比率'),
        L('IDs issued before arrival · proofs of experience issued · free individual users','ID yang diterbitkan sebelum kedatangan · bukti pengalaman yang diterbitkan · pengguna individu gratis','来日前発行ID数・実績証明発行数・個人無料ユーザー数')],
      ['P2', L('Data infrastructure','Infrastruktur data','データ基盤'),
        L('Connect rather than hand over','Menyambungkan, bukan menyerahkan','引き渡さず接続する'),
        L('Stage 1 data is connected to, not transferred. The point of origin and the custody stay with Emenda and the worker. Context translation begins learning from mistranslation feedback collected in P0 and P1.','Data Stage 1 disambungkan, bukan ditransfer. Titik asal dan kustodi tetap pada Emenda dan worker. Context translation mulai belajar dari feedback salah terjemah yang dikumpulkan di P0 dan P1.','Stage 1データは移転ではなく接続される。発生点と保持はEmendaと本人に留まる。文脈翻訳はP0・P1で集めた誤訳フィードバックから学習を始める。'),
        L('Rate at which workers actually exercise data portability on transfer','Tingkat worker benar-benar menggunakan portabilitas data saat transfer','転籍時のデータ持ち出し実行率'),
        L('Stress-check participation · coin circulation · accuracy of transfer-risk alerts','Partisipasi stress-check · sirkulasi coin · akurasi alert risiko transfer','ストレスチェック受検率・コイン流通量・転籍予兆アラート的中率')],
      ['P3', L('External layer','Lapisan eksternal','外部層'),
        L('Consented data, useful outside','Data ter-consent, berguna di luar','同意されたデータが外部で役立つ'),
        L('Credit providers and support agencies read consented data through an API, without the record leaving the worker. This is the phase the whole model exists to reach — and the one that is meaningless if P0 fails.','Penyedia kredit dan lembaga pendukung membaca data ter-consent lewat API, tanpa record itu meninggalkan worker. Ini fase yang menjadi tujuan seluruh model — dan tak berarti apa-apa kalau P0 gagal.','与信提供者と支援機関が、記録を本人の手から離さずAPI経由で同意済みデータを読む。モデル全体が目指すフェーズであり、P0が失敗すれば無意味になるフェーズ。'),
        L('Consented data deliveries through the external API','Pengiriman data ter-consent lewat API eksternal','外部API経由の本人同意データ提供件数'),
        L('Credit approved · automation rate of support-agency work · IDs active after returning home','Kredit yang disetujui · tingkat otomasi kerja lembaga pendukung · ID aktif setelah pulang','与信承認額・支援機関業務の自動化率・帰国後アクティブID')]
    ].map(([k,when,t,d,ns,kpi])=>`<div class="phase reveal">
      <div class="pk">${k}<span>${when}</span></div>
      <div><h3>${t}</h3><p>${d}</p></div>
      <div class="ns"><b>${L('North star','North star','北極星')}</b><div class="nsv">${ns}</div><div class="nsk">${kpi}</div></div>
    </div>`).join('')}
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Why now','Mengapa sekarang','なぜ今か')}</span>
  <h2>${L('In April 2027 the premise of the market changes by statute.','Pada April 2027 premis pasarnya berubah karena undang-undang.','2027年4月、市場の前提が制度ごと変わる。')}</h2>
  <div class="grid g3" style="margin-top:30px">
    <div class="card reveal"><span class="cn">01</span><h3>${L('Transfer becomes possible','Transfer menjadi mungkin','転籍が可能になる')}</h3><p>${L('The technical intern programme is abolished and replaced. A worker becomes an agent who can choose where to move next — which is the moment proof of work experience acquires value.','Program technical intern dihapus dan diganti. Worker menjadi agen yang bisa memilih ke mana pindah — dan saat itulah bukti pengalaman kerja mendapat nilai.','技能実習制度は廃止され、育成就労へ移行する。労働者は次の移動先を選べる主体となり、その瞬間に就労実績の証明が価値を持つ。')}</p></div>
    <div class="card reveal"><span class="cn">02</span><h3>${L('The gatekeeper position loosens','Posisi penjaga gerbang melonggar','門番の地位が緩む')}</h3><p>${L('Supervising bodies hold a position granted by regulation rather than by product. The transition makes that position structural but time-limited.','Badan pengawas memegang posisi yang diberikan regulasi, bukan produk. Transisi ini membuat posisi itu struktural tapi terbatas waktu.','監理団体の地位は製品ではなく制度が与えたものである。移行はその地位を構造的だが時限的なものにする。')}</p></div>
    <div class="card reveal"><span class="cn">03</span><h3>${L('The data does not exist yet','Datanya belum ada','データはまだ存在しない')}</h3><p>${L('Around 2.3 million foreign workers, and no primary record of what any of them actually did at work. Credit, housing and career decisions are all designed on top of that blank.','Sekitar 2,3 juta pekerja asing, dan tidak ada record primer tentang apa yang sebenarnya mereka lakukan di tempat kerja. Kredit, perumahan, dan keputusan karier semuanya dirancang di atas kekosongan itu.','外国人労働者は約230万人。しかし彼らが職場で実際に何をしたかの一次記録は存在しない。与信も住居もキャリアも、その空白の上に設計されている。')}</p></div>
  </div>
  <p class="source-note">${L('Figures and dates from the internal business plan and market documents in the project document library.','Angka dan tanggal dari rencana bisnis internal dan dokumen pasar di document library proyek.','数値と日付はプロジェクト文書ライブラリ内の社内事業計画および市場資料による。')}</p>
</div></section>
${detailedCTA()}`;
