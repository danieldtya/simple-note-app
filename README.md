# Simple Note App: Aplikasi Catatan Pribadi

Aplikasi catatan pribadi berbasis React yang berjalan sepenuhnya di sisi klien. Dibangun dengan React 19 dan Vite 7.

## Asal-usul repo ini

Repo ini adalah proyek akhir kelas **Belajar Membuat Aplikasi Web dengan React** dari Dicoding, yang saya kerjakan sebagai bagian dari **Program Asah 2026 led by Dicoding** (learning path AI Full-Stack Developer). Proyek ini menjadi tempat saya pertama kali menerapkan konsep dasar React secara utuh: component, props, state, event handling, dan controlled component.

Kelanjutannya, dengan routing, integrasi API, autentikasi, Context, dan Hooks, ada di repo [kartotek-dari-asah](https://github.com/danieldtya/kartotek-dari-asah).

## Fitur

<!-- Hapus fitur yang tidak kamu implementasikan sebelum push -->

- Menampilkan daftar catatan, dengan pesan khusus ketika belum ada catatan
- Menambahkan catatan baru melalui form, dengan batas judul maksimal 50 karakter dan penghitung sisa karakter
- Menghapus catatan
- Mencari catatan berdasarkan judul
- Mengarsipkan dan mengembalikan catatan dari arsip

## Menjalankan

Membutuhkan Node.js versi 20.19 atau lebih baru (persyaratan Vite 7).

```
npm install
npm run dev      # mode pengembangan
npm run build    # build produksi ke folder dist
npm run serve    # pratinjau hasil build
```

## Teknologi

- React 19
- Vite 7
- ESLint dengan konfigurasi `eslint-config-dicodingacademy`
