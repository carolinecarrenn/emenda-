# EMENDA

Repositori ini memuat dua hal yang berbeda dan tidak berbagi kode:

| | Apa | Jalankan |
|---|---|---|
| **Aplikasi** | Frontend React — 158 rute untuk worker, manager, admin, dan situs marketing publik | `npm run dev` |
| **Portal** | [`emenda deck/`](emenda%20deck/) — portal informasi dua audiens (client + dev), satu berkas HTML mandiri | `node "emenda deck/_build/serve.mjs"` |

---

## Aplikasi frontend

Vite 8 · React 19 · TypeScript 6 · Tailwind 4 · react-router 7.

```bash
npm install
npm run dev          # http://localhost:5173
```

```bash
npm run build        # tsc -b, lalu vite build
npm run preview      # http://localhost:4173 — ini yang diuji test
```

Pemeriksaan:

```bash
npx tsc -b           # tipe
npx oxlint src e2e   # lint
npx playwright test  # 235 test di 8 file spec
```

**Tidak ada backend dan tidak ada autentikasi nyata.** Setiap layar dirender dari mock
data di `src/data/**` dan `*.mock.ts` milik tiap section. Form login menerima nilai
terisi lalu berpindah halaman; ia tidak memverifikasi siapa pun. Perlakukan setiap
kredensial yang terlihat sebagai data tampilan — tidak satu pun memberi akses ke apa pun.
Selengkapnya di [docs/TESTING.md](docs/TESTING.md).

### Struktur

```
src/
├── app/router.tsx      Seluruh 158 rute
├── pages/<area>/       worker · manager · admin · marketing · auth · onboarding · access
│   └── <page>/sections/    satu berkas per section, bukan satu berkas per halaman
├── components/         ui · worker · manager · marketing
├── data/               mock data lintas peran
└── i18n/               ID · EN · JA — translasi yang kurang menggagalkan `tsc`
```

---

## Portal informasi

[`emenda deck/`](emenda%20deck/) adalah portal untuk semua informasi EMENDA — sisi client
(narasi produk) dan sisi dev (spesifikasi, dokumen sumber, status implementasi). Tanpa
dependency runtime; hasil build satu berkas `index.html` yang bisa dibuka lewat `file://`.

`emenda deck/index.html` adalah **hasil build — jangan diedit langsung.** Edit berkas di
`emenda deck/src/`, lalu `node "emenda deck/_build/build.mjs"`.

> **Sisi dev bukan area terlindungi.** Toggle Client/Dev hanya mengganti navigasi yang
> tampil; tidak ada rute yang disembunyikan. Siapa pun yang memegang `index.html`
> memegang seluruh halaman, termasuk ringkasan dokumen internal. Jangan menyajikan
> berkas ini ke publik apa adanya — termasuk lewat GitHub Pages.

Selengkapnya di [emenda deck/README.md](emenda%20deck/README.md).

---

## Desain

Sumber desainnya tepat satu: file Figma **full-emenda**
(`IZZYiAlNAdYAAcX2z5AtOm`). Berkas desain lain adalah salinan dan tidak pernah bisa
dikutip — termasuk ekspor `.fig` dan `.make` di pustaka dokumen. Jangan mendesain atau
mengukur darinya, dan jangan menganggap perbedaannya dengan file live sebagai temuan.

Aturan kanonik: **Worker mobile mendefinisikan flow dan cakupan; desktop hanya mengatur
penyajian.** Jangan pernah menskalakan antar viewport. Sebuah layar terhitung tercakup
hanya bila terjangkau **dengan klik**, bukan dengan mengetik URL. Lihat
[docs/figma-parity-plan.md](docs/figma-parity-plan.md) dan
[docs/parity-matrix.md](docs/parity-matrix.md).

---

## Yang sengaja tidak masuk git

| Path | Alasan |
|---|---|
| `docs/doc/` | 20 dokumen sumber (~16 MB). Memuat berkas dengan penandaan distribusi yang mengikat: rencana bisnis CONFIDENTIAL, analisis kompetitor `社内限り` yang melarang penyebutan nama kandidat kemitraan ke luar, dan materi yang ditujukan ke individu bernama. Portal meringkasnya di `#/dev/documents`; aslinya tetap lokal. |
| `emenda front-end/` | Clone terpisah dari repo backend tim (`AlvinEmenda/Emenda_tech`), punya `.git` sendiri. Pernah ter-commit sebagai gitlink karena pola `.gitignore`-nya ditulis dengan tanda kutip — gitignore memperlakukan kutip sebagai karakter harfiah, jadi polanya tidak mencocokkan apa pun. Sudah diperbaiki. |
| `node_modules` · `dist` · `test-results` | Hasil build dan artefak, bisa dibuat ulang. |
