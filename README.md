# EMENDA deck

Portal informasi EMENDA — satu tempat untuk sisi **client** (narasi produk, pitch) dan
sisi **dev** (spesifikasi, dokumen sumber, status implementasi).

Situs ini berdiri sendiri: tidak ada dependency runtime, tidak ada framework, tidak ada
server. Hasil build adalah satu berkas `index.html` yang bisa dibuka langsung lewat
`file://` atau dikirim sebagai satu lampiran.

---

## Menjalankan

```bash
node _build/serve.mjs
```

Buka `http://localhost:4180/`. Bisa juga langsung membuka `index.html` di browser —
router-nya berbasis hash, jadi tidak butuh server.

---

## Membangun

`index.html` adalah **hasil build. Jangan diedit langsung** — perubahannya akan hilang
pada build berikutnya. Edit berkas di `src/`, lalu:

```bash
node _build/build.mjs
```

Build hanya menggabungkan berkas sesuai urutan di `src/manifest.json`. Tidak ada
transpilasi, minifikasi, maupun resolusi import.

---

## Struktur source

```
src/
├── manifest.json         Urutan penggabungan — satu-satunya sumber urutan build
├── shell/                Kerangka HTML statis: head, nav, mobile menu, footer
├── styles/               CSS berurutan, dari token sampai halaman detail
├── lib/                  Kode bersama: ikon, i18n, router, data, helper
└── pages/
    ├── client/           Satu berkas per halaman client
    └── dev/              Satu berkas per halaman dev
```

Urutan dalam `manifest.json` bukan sekadar estetika — berkas `lib/` yang dieksekusi saat
load (misalnya `61-data-pillars.js` yang memanggil `L()`) harus berada setelah berkas yang
mendefinisikan apa yang dipakainya. Halaman aman diletakkan di mana pun setelah
`20-pages-init.js`, karena isinya hanya penugasan ke objek `PAGES`.

### Menambah halaman

1. Buat `src/pages/<client|dev>/<route>.js` berisi satu definisi:
   ```js
   PAGES.namaHalaman = () => `
   <section class="phero"><div class="wrap">...</div></section>`;
   ```
2. Daftarkan rutenya di `src/lib/80-routes.js`.
3. Tambahkan path berkasnya ke array `script` di `src/manifest.json`.
4. Tautkan dari nav (`src/shell/10-nav.html` dan `src/shell/20-mobile-menu.html`).

---

## Dua audiens, satu build

Portal ini melayani dua pembaca dari satu berkas hasil build. Tombol **Client / Dev** di
header menentukan navigasi mana yang tampil dan chrome apa yang dibawa halaman.

| | Client | Dev |
|---|---|---|
| Navigasi | Product · Solutions · Platform · Industries · Resources · Company | Overview · Documents · Build · Portal |
| Tombol header | Live product | Figma · Live app |
| Penanda | — | Strip `Internal` di bawah header |
| Rute | `#/home`, `#/product`, … | `#/dev`, `#/dev/documents`, … |

Mode disimpan di `localStorage` sebagai `emenda_mode`, dan membuka rute `#/dev/*` otomatis
memindahkan portal ke mode dev — sehingga tautan yang dibagikan tetap membuka navigasi
yang benar.

> **Mode adalah penyajian, bukan kontrol akses.** Tidak ada rute yang disembunyikan.
> Siapa pun yang memegang `index.html` memegang seluruh halaman, termasuk sisi internal.
> Jangan menaruh apa pun di portal ini yang tidak boleh dilihat penerima berkasnya.

Halaman sisi dev:

| Rute | Isi |
|---|---|
| `#/dev` | Ikhtisar lima artefak: di mana, menjawab apa, cara membuka |
| `#/dev/documents` | Indeks pustaka dokumen, plus dua masalah yang diketahui |
| `#/dev/requirements` | DRD Stage 1 v2.0 — 9 layar, prinsip, komponen, 13 open question |
| `#/dev/frontend` | Stack, 158 route per area, konvensi, batasan |
| `#/dev/parity` | Aturan sumber kanonik, isi parity matrix, kontrak bahasa |
| `#/dev/testing` | 235 test per file, dan apa yang tidak dibuktikannya |
| `#/dev/portal` | Halaman ini dalam bentuk web |
| `#/dev/doc/feature-catalog` | Feature Catalog v1.0 r10 — 59/27, 15 modul, release view |
| `#/dev/doc/mvp-requirements` | MVP 要件定義書 v1.2 — hipotesis inti, model data, insentif pekerja |
| `#/dev/doc/ai-agent` | AI Agent PRD v1.6 — produk terpisah, arsitektur isolasi |
| `#/dev/doc/data-platform` | Pipeline D1–D13, matriks manfaat, dan celahnya |
| `#/dev/doc/business` | Struktur bisnis + rencana bisnis, layer pasar, mengapa 2027 |
| `#/dev/doc/competition` | Analisis kompetitor 16 profil — khusus internal |

### Aturan konten sisi dev

1. **Satu sumber Figma.** File `full-emenda` adalah satu-satunya sumber desain. Berkas
   desain lain — termasuk `emenda.fig` dan `emenda.make` di pustaka dokumen — adalah
   salinan dan tidak pernah bisa dikutip.
2. **Angka selalu bersama sumbernya.** Ada tiga total berbeda yang beredar untuk jumlah
   screen/state. Sebutkan sumbernya, atau hitung ulang dari berkasnya.
3. **Hormati penandaan dokumen.** Analisis kompetitor bertanda `社内限り` dan melarang
   penyebutan nama kandidat kemitraan ke luar. Karena portal ini tanpa kontrol akses,
   nama itu sengaja tidak ditulis di `#/dev/doc/competition`.

---

## Bahasa

Seluruh teks baru harus melewati `L(en, id, ja)` — helper ini menyelesaikan bahasa pada
saat render, sehingga pergantian bahasa tidak memerlukan reload.

```js
${L('Report', 'Laporan', '報告')}
```

Ada mekanisme kedua yang masih tersisa dari versi lama: `applyLanguage()` menelusuri DOM
dan menerjemahkan teks yang cocok persis dengan kamus `I18N` di `src/lib/40-i18n-engine.js`.
Mekanisme itu hanya menopang konten lama yang masih hardcoded English; kalimat yang tidak
ada di kamus akan diam-diam tetap berbahasa Inggris. **Jangan menambah konten baru yang
bergantung padanya** — pakai `L()`.

---

## Pemeriksaan

```bash
node _build/check.mjs
```

Merender setiap rute, melaporkan kegagalan render, error JS, tab/akordeon, pergantian
bahasa, dan halaman yang tidak tertaut dari navigasi.

```bash
node _build/verify.mjs [baseline.html] [candidate.html]
```

Merender setiap rute dalam ketiga bahasa pada dua berkas lalu membandingkan markup-nya
karakter per karakter. Dipakai untuk membuktikan bahwa sebuah refactor mengubah struktur
tanpa mengubah keluaran. Baseline bawaannya `_build/index.pre-refactor.html`, yaitu
snapshot berkas tunggal sebelum source dipecah.

---

## Catatan tentang refactor

Sebelumnya `index.html` dibangun berlapis: `PAGES.home` didefinisikan ulang enam kali
(`const _homeV15Base = PAGES.home; PAGES.home = () => _homeV15Base() + ...`), dan satu
patch memperbaiki tautan dengan regex terhadap HTML hasil generate. Semua lapisan itu
murni append, jadi bisa diratakan menjadi satu definisi per halaman.

Empat blok terbukti tidak terjangkau dan ikut dihapus: `PAGES.productOverview` dan
`PAGES.demo` (tidak punya rute), definisi pertama `PAGES.company` (ditimpa utuh), serta
patch regex tersebut — kedua polanya tidak mencocokkan apa pun pada markup yang dihasilkan.

Kesetaraan hasil dibuktikan lewat `verify.mjs`: 40 rute × 3 bahasa, 120/120 render
identik, tanpa error JS.
