/* dev/doc/ai-agent  —  PAGES.devDocAiAgent
   Digest of Emenda AI Agent PRD MVP v1.6 — a separate product from the Stage 1 MVP. */
PAGES.devDocAiAgent=()=>`
<section class="phero"><div class="wrap">
  <span class="eyebrow">${L('Internal · document','Internal · dokumen','社内 · 文書')} · 02_Requirements</span>
  <h1>${L('Emenda AI Agent — PRD MVP v1.6','Emenda AI Agent — PRD MVP v1.6','Emenda AI Agent — PRD MVP v1.6')}</h1>
  <p>${L('A coaching agent for foreigners before and during life in Japan. Read this one carefully: it is a different product from the Stage 1 workplace MVP, with different users, a different problem and its own architecture — not an assistant feature bolted onto the workplace app.','Agent pendamping untuk orang asing sebelum dan selama tinggal di Jepang. Baca yang satu ini dengan cermat: ini produk berbeda dari MVP tempat kerja Stage 1, dengan pengguna berbeda, masalah berbeda, dan arsitekturnya sendiri — bukan fitur assistant yang ditempelkan ke aplikasi tempat kerja.','来日前・滞在中の外国人に伴走するコーチングAI。注意して読むこと——これはStage 1の職場MVPとは別の製品であり、ユーザーも課題もアーキテクチャも異なる。職場アプリに後付けしたアシスタント機能ではない。')}</p>
  <div class="dev-meta">
    <span>MVP v1.6</span>
    <span>73 ${L('pages','halaman','ページ')} · PDF</span>
    <span>27 ${L('sections','bagian','章')}</span>
    <span>2026-08-14</span>
    <span class="tag warn">Draft</span>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Core thesis','Tesis inti','中核テーゼ')}</span>
  <h2>${L('The user should not have to know the right keyword.','Pengguna seharusnya tidak wajib tahu keyword yang benar.','ユーザーが正しいキーワードを知っている必要はない。')}</h2>
  <p class="lede">${L('Not positioned as a Japan Q&A chatbot but as an agent that closes three gaps: not knowing what to look for, not knowing what the information means for you, and not knowing what to actually do next.','Tidak diposisikan sebagai chatbot tanya-jawab tentang Jepang, melainkan agent yang menutup tiga jurang: tidak tahu apa yang harus dicari, tidak tahu arti informasinya bagi diri sendiri, dan tidak tahu apa yang sebenarnya harus dilakukan berikutnya.','「日本についてのQ&Aチャットボット」ではなく、3つのギャップを埋めるエージェント——何を探すべきか分からない、その情報が自分に何を意味するのか分からない、次に何をすべきか分からない。')}</p>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">1 · DISCOVER</div>
      <h3>${L('What do I need to know?','Apa yang perlu saya tahu?','何を知る必要があるか')}</h3>
      <p>${L('Including the things it has not occurred to the user to search for. Surfacing hidden needs is a P0 requirement, not a nicety.','Termasuk hal yang belum terpikir untuk dicari. Memunculkan kebutuhan tersembunyi adalah requirement P0, bukan pemanis.','まだ検索しようと思いついていないことも含む。潜在的な必要の発見はP0要件であり、付加価値ではない。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">2 · UNDERSTAND</div>
      <h3>${L('What does this mean for my situation?','Apa arti informasi ini untuk kondisi saya?','この情報は自分の状況で何を意味するか')}</h3>
      <p>${L('Answers must change with location, residence status, purpose, language and timeline. The document requires a general rule and a this-applies-to-you statement to be visibly separated.','Jawaban harus berubah menurut lokasi, status tinggal, tujuan, bahasa, dan lini waktu. Dokumen ini mewajibkan aturan umum dan pernyataan ini-berlaku-untukmu dipisahkan secara terlihat.','回答は所在地・在留資格・目的・言語・時期によって変わらねばならない。一般則と「あなたに当てはまる理由」を明示的に分離することを要求している。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">3 · ACT</div>
      <h3>${L('What do I do now, until it is finished?','Apa yang harus saya lakukan sekarang sampai selesai?','いま何をすれば、最後まで終わるか')}</h3>
      <p>${L('Action cards, checklists and outcome follow-up. The product is measured on problem resolution, not on the number of answers produced.','Action card, checklist, dan tindak lanjut hasil. Produk diukur dari penyelesaian masalah, bukan dari jumlah jawaban yang dihasilkan.','アクションカード、チェックリスト、結果の追跡。製品は回答数ではなく問題解決で測る。')}</p>
    </div>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Evidence base','Basis bukti','根拠')}</span>
  <h2>${L('The problem space is quantified, and the numbers carry a warning.','Ruang masalahnya dikuantifikasi, dan angkanya membawa peringatan.','課題空間は数値化されており、その数値には注意書きが付く。')}</h2>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>${L('Figure','Angka','数値')}</th><th>${L('Population','Populasi','母集団')}</th><th>${L('As of','Per','時点')}</th></tr></thead>
    <tbody>
      <tr><td>4,125,395</td><td>${L('Foreign residents in Japan','Penduduk asing di Jepang','在留外国人')}</td><td>${L('end of 2025','akhir 2025','2025年末')}</td></tr>
      <tr><td>266,069</td><td>${L('of them Indonesian nationals','di antaranya warga negara Indonesia','うちインドネシア国籍')}</td><td>${L('end of 2025','akhir 2025','2025年末')}</td></tr>
      <tr><td>2,571,037</td><td>${L('Foreign workers','Pekerja asing','外国人労働者')}</td><td>${L('October 2025','Oktober 2025','2025年10月')}</td></tr>
      <tr><td>228,118</td><td>${L('of them Indonesian workers, up 34.6% year on year','di antaranya pekerja Indonesia, naik 34,6% tahun ke tahun','うちインドネシア人労働者、前年比+34.6%')}</td><td>${L('October 2025','Oktober 2025','2025年10月')}</td></tr>
      <tr><td>408,069</td><td>${L('International students, 7,032 of them Indonesian','Mahasiswa internasional, 7.032 di antaranya Indonesia','留学生、うちインドネシア出身7,032')}</td><td>${L('May 2025','Mei 2025','2025年5月')}</td></tr>
    </tbody>
  </table></div>
  ${derived('The document states explicitly that these populations overlap and must never be summed into a TAM. Survey findings sit alongside them: 78.7% get information via social media, while 16.6% who tried to consult a public institution did not know where to go, and 14.3% had difficulty describing symptoms in a medical setting.','Dokumen ini menyatakan eksplisit bahwa populasi ini tumpang tindih dan tidak boleh dijumlahkan menjadi TAM. Temuan survei berada di sampingnya: 78,7% memperoleh informasi lewat media sosial, sementara 16,6% yang mencoba berkonsultasi ke lembaga publik tidak tahu harus ke mana, dan 14,3% kesulitan menyampaikan gejala dalam konteks medis.','これらの母集団は重複しており、TAMとして合算してはならないと明記されている。併記される調査結果——情報取得はSNSが78.7%、公的機関に相談を試みた者の16.6%はどこに相談すべきか分からず、医療では14.3%が症状を伝えられなかった。')}
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Behaviour spec','Spesifikasi perilaku','挙動仕様')}</span>
  <h2>${L('Ten steps the agent runs on every turn.','Sepuluh langkah yang dijalankan agent di setiap giliran.','エージェントが毎ターン実行する10段階。')}</h2>
  <div class="cmd">
<b>1</b> Understand   <span class="c">${L('explicit ask, implicit goal, stage, language, urgency','permintaan eksplisit, tujuan implisit, tahap, bahasa, urgensi','明示の要求、暗黙の目的、段階、言語、緊急度')}</span>
<b>2</b> Context      <span class="c">${L('profile and task state; what is missing that changes the guidance','profil dan state task; apa yang kurang dan mengubah arahan','プロフィールとタスク状態、助言を左右する欠落変数')}</span>
<b>3</b> Clarify      <span class="c">${L('1–3 questions maximum; skip any whose answer changes nothing','maksimum 1–3 pertanyaan; lewati yang jawabannya tidak mengubah apa pun','最大1〜3問。答えが行動を変えない質問はしない')}</span>
<b>4</b> Discover     <span class="c">${L('hidden needs the user does not know to ask about','kebutuhan tersembunyi yang pengguna tidak tahu untuk ditanyakan','ユーザーが知らない潜在的な必要と依存関係')}</span>
<b>5</b> Retrieve     <span class="c">${L('current authoritative source and local place data','sumber otoritatif terkini dan data tempat setempat','最新の権威ある情報源と地域データ')}</span>
<b>6</b> Validate     <span class="c">${L('jurisdiction, freshness, contradictions, high-stakes constraints','yurisdiksi, kebaruan, kontradiksi, batasan berisiko tinggi','管轄、鮮度、矛盾、高リスク制約')}</span>
<b>7</b> Explain      <span class="c">${L('what it means for this user; separate fact from inference','artinya bagi pengguna ini; pisahkan fakta dari inferensi','この利用者にとっての意味。事実と推論を分離')}</span>
<b>8</b> Act          <span class="c">${L('prioritised next actions, ideally three or fewer at a time','aksi berikutnya yang diprioritaskan, idealnya maksimal tiga sekaligus','優先順位付きの次アクション。一度に3件以内が望ましい')}</span>
<b>9</b> Track        <span class="c">${L('create or update action state and expected outcome','buat atau perbarui state aksi dan hasil yang diharapkan','アクション状態と期待される結果を作成・更新')}</span>
<b>10</b> Learn       <span class="c">${L('collect outcome; never silently train on sensitive content','kumpulkan hasil; jangan pernah melatih diam-diam pada konten sensitif','結果を収集。機微な内容で黙って学習しない')}</span>
  </div>
</div></section>

<section class="sec tinted"><div class="wrap">
  <span class="eyebrow">${L('Product principles','Prinsip produk','製品原則')}</span>
  <h2>${L('Four that constrain engineering, not just tone.','Empat yang membatasi rekayasa, bukan sekadar nada bicara.','語り口ではなく実装を縛る4原則。')}</h2>
  <div class="dev-grid">
    <div class="dev-card">
      <div class="code">${L('No hidden autonomy','Tanpa otonomi tersembunyi','隠れた自律性の禁止')}</div>
      <h3>${L('The agent never submits, pays, books or contacts anyone on its own','Agent tidak pernah mengirim, membayar, memesan, atau menghubungi siapa pun sendiri','提出・支払・予約・第三者への連絡を独断で行わない')}</h3>
      <p>${L('Every such act requires explicit user action or permission. This is stated as a product principle, not a safety afterthought.','Setiap tindakan semacam itu menuntut aksi atau izin pengguna yang eksplisit. Ini dinyatakan sebagai prinsip produk, bukan tambahan keamanan belakangan.','いずれもユーザーの明示的な操作か許可を要する。安全対策の後付けではなく製品原則として明記されている。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Source before confidence','Sumber sebelum keyakinan','確信より出典')}</div>
      <h3>${L('Legal, administrative, medical, price and location claims must be retrieved','Klaim hukum, administratif, medis, harga, dan lokasi wajib diambil dari sumber','法令・行政・医療・価格・場所は必ず取得する')}</h3>
      <p>${L('Official national sources come first; local and secondary sources are usable only when clearly labelled as such. The Living and Working Guidebook is the knowledge baseline, across thirteen domains from residence procedures to garbage rules.','Sumber nasional resmi didahulukan; sumber lokal dan sekunder hanya boleh dipakai bila jelas ditandai demikian. Living and Working Guidebook menjadi baseline pengetahuan, mencakup tiga belas domain dari prosedur keimigrasian sampai aturan sampah.','公式の国レベル情報源を優先し、地方・二次情報は明示ラベル付きでのみ使用。知識ベースの基準は Living and Working Guidebook で、在留手続からごみ出しまで13領域を覆う。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Locality matters','Lokalitas penting','地域差は明示')}</div>
      <h3>${L('Municipal and prefectural differences must be explicit','Perbedaan kota dan prefektur wajib dinyatakan','市区町村・都道府県の差は明示する')}</h3>
      <p>${L('A national answer given to someone in a specific city, without saying so, counts as a defect.','Jawaban tingkat nasional yang diberikan kepada seseorang di kota tertentu, tanpa menyatakannya, terhitung cacat.','特定の市に住む人に、その旨を告げず全国一般の回答を返すことは欠陥とみなす。')}</p>
    </div>
    <div class="dev-card">
      <div class="code">${L('Escalation is a feature','Eskalasi adalah fitur','エスカレーションは機能')}</div>
      <h3>${L('When law, health or safety exceeds confidence, route to a human','Ketika hukum, kesehatan, atau keselamatan melampaui keyakinan, arahkan ke manusia','法・健康・安全が確信を超えたら人へ回す')}</h3>
      <p>${L('Routing to official or human support is treated as correct behaviour, not as a failure of the agent.','Mengarahkan ke dukungan resmi atau manusia diperlakukan sebagai perilaku yang benar, bukan kegagalan agent.','公的窓口や人へ回すことは、エージェントの失敗ではなく正しい挙動として扱う。')}</p>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <span class="eyebrow">${L('Architecture','Arsitektur','アーキテクチャ')}</span>
  <h2>${L('The isolation rule is the load-bearing part of v1.6.','Aturan isolasi adalah bagian penopang dari v1.6.','v1.6の根幹は分離規則である。')}</h2>
  <p class="lede">${L('The version subtitle is literally ARIA / Emenda Isolation Architecture. Four P0 requirements say the same thing from different angles: the Emenda Assistant answers from its own workspace and never delegates a user turn to an internal specialist agent.','Subjudul versinya secara harfiah ARIA / Emenda Isolation Architecture. Empat requirement P0 menyatakan hal yang sama dari sudut berbeda: Emenda Assistant menjawab dari workspace-nya sendiri dan tidak pernah mendelegasikan giliran pengguna ke agent spesialis internal.','版の副題そのものが ARIA / Emenda Isolation Architecture である。4つのP0要件が角度を変えて同じことを述べる——Emenda Assistantは自身のワークスペース内で回答し、ユーザーのターンを内部の専門エージェントに委譲しない。')}</p>
  <div class="dev-scroll"><table class="dev-table">
    <thead><tr><th>ID</th><th>${L('Requirement','Requirement','要件')}</th><th>${L('Rule','Aturan','規則')}</th></tr></thead>
    <tbody>
      <tr><td>FR-022</td><td>${L('Runtime intent handling','Penanganan intent saat runtime','ランタイムのintent処理')}</td><td>${L('The assistant identifies intent, stage and urgency, then selects its own workspace-scoped knowledge and tools. The coordinator is not part of the user request path.','Assistant mengidentifikasi intent, tahap, dan urgensi, lalu memilih pengetahuan dan tools dalam lingkup workspace-nya sendiri. Coordinator bukan bagian dari jalur permintaan pengguna.','アシスタントがintent・段階・緊急度を判定し、自身のワークスペース内の知識とツールを選ぶ。コーディネーターはユーザー要求経路に含まれない。')}</td></tr>
      <tr><td>FR-024</td><td>${L('Workspace context isolation','Isolasi konteks workspace','ワークスペース文脈の分離')}</td><td>${L('Persona, consented memory, task state, files, outputs, logs and permission state are all isolated to the Emenda workspace.','Persona, memori ber-consent, state task, berkas, keluaran, log, dan state permission semuanya diisolasi ke workspace Emenda.','ペルソナ、同意済みメモリ、タスク状態、ファイル、出力、ログ、権限状態はすべてEmendaワークスペースに隔離される。')}</td></tr>
      <tr><td>FR-025</td><td>${L('Private runtime API','API runtime privat','専用ランタイムAPI')}</td><td>${L('The browser must never reach internal profiles or tools directly; the backend calls the assistant profile over authenticated service-to-service APIs.','Browser tidak boleh menjangkau profil atau tools internal secara langsung; backend memanggil profil assistant lewat API service-to-service terautentikasi.','ブラウザが内部プロファイルやツールに直接到達してはならない。バックエンドが認証済みのサービス間APIでアシスタントプロファイルを呼ぶ。')}</td></tr>
      <tr><td>FR-027</td><td>${L('Graceful fallback','Fallback yang anggun','劣化時のフォールバック')}</td><td>${L('If knowledge or tool access is unavailable, the assistant falls back to sourced guidance, clarification or escalation — never to fabrication, and never by invoking a specialist agent.','Jika akses pengetahuan atau tools tidak tersedia, assistant mundur ke panduan bersumber, klarifikasi, atau eskalasi — tidak pernah mengarang, dan tidak pernah dengan memanggil agent spesialis.','知識やツールに到達できない場合は、出典付きの案内・確認・エスカレーションへ退避する。捏造も、専門エージェントの呼び出しも行わない。')}</td></tr>
    </tbody>
  </table></div>
  ${derived('The document also forbids exposing internal specialist identities to users or implying that a user turn was delegated to one.','Dokumen ini juga melarang menampilkan identitas agent spesialis internal kepada pengguna atau menyiratkan bahwa giliran pengguna didelegasikan ke salah satunya.','内部専門エージェントの識別子をユーザーに露出すること、およびユーザーのターンを委譲したと示唆することも禁じている。')}
  ${backTo('#/dev/documents', L('Back to the document library','Kembali ke pustaka dokumen','ドキュメント一覧へ戻る'))}
</div></section>`;
