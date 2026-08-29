/* business-model  —  PAGES.businessModel
   Merged from 1 original layer (line 2631). */
PAGES.businessModel=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Company / Business Model','Perusahaan / Business Model','会社 / Business Model')}</span>
  <h1>${L('Sell a practical operating tool today; compound the value of primary work data over time.','Menjual operating tool yang praktis hari ini; meningkatkan nilai primary work data dari waktu ke waktu.','今日の実務toolを販売し、一次労働データの価値を長期的に積み上げる。')}</h1>
  <p>${L('The business strategy treats Stage 1 as the entry product: multilingual communication plus work management for receiving companies and foreign workers. The long-term asset is the worker-originated primary data created by real daily operations.','Business strategy menempatkan Stage 1 sebagai entry product: komunikasi multilingual + work management untuk receiving company dan foreign worker. Aset jangka panjangnya adalah primary data yang berasal dari worker dan terbentuk dari operasi harian nyata.','Stage 1は受入企業・外国人労働者向け多言語communication＋work management。長期資産は日々の実務から生まれる労働者起点の一次データです。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Customer segments','Segmen customer','顧客segment')}</span>
  <h2>${L('Two immediate B2B entry segments.','Dua segmen B2B sebagai entry awal.','初期B2Bの2segment。')}</h2>
  <div class="deep-grid">
    <div class="deep-card wide"><div class="num">SEGMENT 01</div><h3>${L('Receiving companies','Receiving company','受入企業')}</h3><p>${L('Caregiving and other field operations where Japanese-only communication, paper reporting, and phone-based clarification create friction. Direct value: operational efficiency, clearer records, and better workforce continuity.','Caregiving dan field operation lain di mana komunikasi Japanese-only, paper reporting, dan clarification lewat telepon menimbulkan friction. Value langsung: efisiensi operasional, record lebih jelas, dan workforce continuity.','介護等の現場で日本語のみ、紙report、電話確認によるfrictionを削減。価値：効率、記録明確化、継続性。')}</p></div>
    <div class="deep-card wide"><div class="num">SEGMENT 02</div><h3>${L('Companies moving toward self-managed support','Perusahaan yang menuju self-managed support','自社支援へ移行する企業')}</h3><p>${L('Organizations reducing dependency on outsourced support need a software layer for records, interviews, follow-up, reporting, and operational continuity. Emenda remains software rather than scaling through human services.','Organisasi yang mengurangi ketergantungan pada outsourced support membutuhkan software layer untuk record, interview, follow-up, reporting, dan operational continuity. Emenda tetap software, bukan scale lewat human service.','外部支援依存を減らす企業へ、記録・面談・follow-up・reportingのsoftware layerを提供。人的serviceではscaleしません。')}</p></div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Commercial model','Model komersial','Commercial model')}</span>
  <h2>${L('Subscription around active workers and the operating scope.','Subscription berdasarkan active worker dan operating scope.','active workerとoperating scopeを基準にしたsubscription。')}</h2>
  <div class="grid g3" style="margin-top:28px">
    <div class="card"><span class="cn">${L('REFERENCE','REFERENSI','REFERENCE')}</span><h3>¥5,000 / ${L('person / month','orang / bulan','人 / 月')}</h3><p>${L('PoC reference price stated in the July 2026 external business plan. Treat as a validation price, not a permanent public list price.','Harga referensi PoC yang tercantum di external business plan Juli 2026. Perlakukan sebagai validation price, bukan permanent public list price.','2026年7月外部事業計画に記載されたPoC参考価格。恒久公開価格ではなく検証価格。')}</p></div>
    <div class="card"><span class="cn">${L('SCALE DRIVER','SCALE DRIVER','SCALE DRIVER')}</span><h3>${L('Active workers','Active worker','Active worker')}</h3><p>${L('The natural B2B value unit is the number of workers/relationships using the operating layer.','Unit value B2B yang natural adalah jumlah worker/relationship yang memakai operating layer.','B2B value unitはoperating layerを利用するworker/relationship数。')}</p></div>
    <div class="card"><span class="cn">${L('EXPANSION','EXPANSION','EXPANSION')}</span><h3>${L('Modules & connections','Modul & koneksi','Module・connection')}</h3><p>${L('Future commercial expansion can come from deeper modules and integrations, but packaging should follow validated customer value rather than feature count alone.','Commercial expansion ke depan dapat berasal dari module dan integration lebih dalam, tetapi packaging mengikuti customer value yang tervalidasi, bukan sekadar jumlah feature.','将来はmodule・integration拡張。ただしfeature数ではなくvalidated customer valueでpackage設計。')}</p></div>
  </div>
  <p class="note-source">${L('Commercial details should be synchronized with the latest approved sales/pricing decision before external publishing.','Detail komersial harus disinkronkan dengan keputusan sales/pricing terbaru sebelum external publish.','外部公開前に最新のsales/pricing承認内容と同期してください。')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Scope boundary','Batas scope','Scope boundary')}</span>
  <h2>${L('Scalability comes from staying software-first.','Scalability datang dari tetap software-first.','software-firstを維持してscale。')}</h2>
  <div class="scope-boundary">
    <div class="scope-box in"><h3>${L('Inside Emenda','Di dalam Emenda','Emenda内')}</h3><ul>${[
      L('Multilingual communication and work records','Komunikasi multilingual dan work record','多言語communication・work record'),
      L('Identity, connection, consent, follow-up, evidence','Identity, connection, consent, follow-up, evidence','ID・connection・consent・follow-up・evidence'),
      L('Software support for self-managed operations','Software support untuk self-managed operation','自社運用を支えるsoftware'),
      L('Primary work-data platform and selected connections','Primary work-data platform dan selected connection','一次労働data platform・選択接続')
    ].map(x=>`<li>✓ ${x}</li>`).join('')}</ul></div>
    <div class="scope-box out"><h3>${L('Outside the core','Di luar core','core外')}</h3><ul>${[
      L('Staffing / recruitment placement','Staffing / recruitment placement','人材紹介・配置'),
      L('Becoming a registered support / supervising organization','Menjadi registered support / supervising organization','登録支援・監理組織になること'),
      L('Scaling through human-service outsourcing','Scale melalui human-service outsourcing','人的service受託でscale'),
      L('Selling worker data as a transferable commodity','Menjual worker data sebagai komoditas yang ditransfer','worker dataを移転商品として販売')
    ].map(x=>`<li>× ${x}</li>`).join('')}</ul></div>
  </div>
</div></section>`;
