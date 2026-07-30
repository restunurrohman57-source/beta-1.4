# Portofolio — Restu Nurrokhman (v2.0)

Situs statis HTML/CSS/JS. Buka `index.html` langsung, tanpa `npm install`.

## Yang berubah di v2.0

- **Intro mobil** sekarang autoplay sekali (~2.2 detik, tanpa blur), bukan
  discroll lagi. Hanya main sekali per sesi browser (`sessionStorage`).
- **Hero baru** ("Selamat Datang") dengan latar bintang bergerak, teks
  gradasi warna, foto profil besar di kanan, tombol Lihat Project/Hubungi
  Saya, ikon koneksi — di `main.js` bagian 5 & `style.css` bagian 7.
- **Kartu bio gantung & buku foto dihapus** (baliknya bug) — foto masa lalu
  kembali jadi slideshow biasa, sekarang berdiri sendiri & lebih besar.
- **Skill dipecah 4 bagian**: Bahasa Pemrograman (marquee, sama seperti
  sebelumnya), Bahasa asing (Indonesia/English/日本語), Sertifikat Bahasa,
  Job/Bidang — semua di `main.js` bagian 0, gampang diedit.
- **Navbar**: "PORTOFOLIO" → "Restu.dev".

## Placeholder yang WAJIB kamu ganti

- `LANGUAGES`, `CERTS`, `FIELDS` di `main.js` bagian 0 — datanya masih
  contoh (level bahasa asal, 1 sertifikat placeholder, bidang tebakan).
- `heroRole`, `heroDesc` di `TRANSLATIONS` (bagian 1) — deskripsi diri
  masih generik.
- `PROJECTS` (di dalam `TRANSLATIONS.<lang>.projects`) — masih contoh.

## Struktur

```
index.html
assets/css/style.css   — 16 bagian bernomor
assets/js/main.js       — 11 bagian bernomor
assets/frames/            — 240 frame mobil (intro)
assets/img/profile.jpg      — foto hero
assets/img/memories/         — 7 foto kenangan
```
