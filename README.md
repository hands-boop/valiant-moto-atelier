# VALIANT MOTO ATELIER INDONESIA
> Situs Web Portofolio & Showroom Perlengkapan Sepeda Motor Mewah Modern

Website ini dibangun sesuai dengan struktur visual dan komposisi tata letak yang presisi seperti referensi katalog otomotif kelas dunia, namun dengan identitas merek yang unik, berkelas, dan elegan: **VALIANT MOTO ATELIER** (*The Modern Heritage & High-Performance Gear*).

---

## 🌟 Fitur Utama & Struktur Desain

1. **Header & Identitas Brand Terpusat**:
   - Navigasi kiri: Beranda, Perusahaan, Produk, Keamanan.
   - Logo Atelier Mewah di Tengah: Lambang perisai & sayap geometris dengan tipografi berkelas.
   - Navigasi kanan: Media, Karir, Kontak Kami, Pencarian Pintar (Search Modal), dan Keranjang Belanja interaktif.
   - **Pemilih Tema Aksen Warna**: Champagne Gold (Default Mewah), Racing Emerald, Midnight Sapphire, dan Rosso Crimson.

2. **Hero Showcase & Signature Vertical Racing Stripe**:
   - Garis balap vertikal ikonik yang membentang di latar belakang.
   - Helm Utama Mengambang 3D (*JET-X20 MLAG Titanium*) dengan efek interaktif *parallax tilt* saat kursor bergerak.
   - Pratinjau mini carousel (*VM-500 Chrome*).
   - Indikator aksis timeline horizontal melintasi garis balap.

3. **Split Story & Pedestal Pengendara Motor**:
   - Kolom Kiri: Profil sambutan *Valiant Moto Accessories Ltd.*
   - Kolom Tengah: Foto pengendara jaket kulit berdiri gagah bersama motor scrambler kustom di atas tumpukan batu alam (*pedestal stone*).
   - Kolom Kanan: Program interaktif *"Bagikan Desain Anda"* lengkap dengan modal form pengunggahan karya sketsa/grafis helm.

4. **Kategori Produk Pilihan**:
   - Slider kategori dinamis dengan tombol panah navigasi.
   - Tampilan 4 produk utama: Sarung Tangan Kulit Pro, Classic Jet Dual-Stripe, Aether Touring Series, dan Vintage Smoked Goggle.

5. **Galeri Sinematik / Strip Media Cerita (Dark Banner)**:
   - 5 kartu kisah visual bernomor `01`, `02`, `03`, `04`, `05`.
   - Kartu `03` berbingkai aksen khusus dengan tombol putar video interaktif (*Ekspedisi Lintas Jawa*).

6. **Carousel Lineup Helm Unggulan (Bottom Row)**:
   - Menampilkan 5 varian: Scrambler, Jet Camo Mlag, Chrome with Visor Plain (fokus tengah membesar dengan tombol Beli Sekarang), Zero, dan Ball-Re Dot.
   - Interaksi rotasi dan pemilihan helm secara langsung.

7. **Footer Lengkap & Stempel Grafis Rider**:
   - 4 Kolom navigasi rapi: Umum, Korporat, Produk, Media.
   - Badge grafis stempel miring `JET-X20 MLAG` + `RIDER`.

8. **Interaktivitas Ekstra**:
   - Quick View Modal dengan spesifikasi teknis lengkap (Sertifikasi SNI/ECE 22.06, bahan komposit, garansi).
   - Drawer Keranjang Belanja dengan kalkulasi subtotal dan integrasi instan pesanan ke WhatsApp.
   - Efek umpan balik audio mikro-mekanikal menggunakan Web Audio API.

---

## 🚀 Menjalankan Secara Lokal

Cukup buka `index.html` langsung di browser, atau gunakan server lokal:

```bash
# Menjalankan dengan live server / npx serve
npx serve .
```

---

## 📦 Publikasi ke GitHub & Vercel

### 1. Inisialisasi Git & GitHub
Repository lokal sudah diinisialisasi dan di-commit. Untuk membuat repositori baru di GitHub akun Anda:

```bash
# Buat repositori baru di GitHub (misal bernama: valiant-moto-atelier)
# Hubungkan remote dan push:
git remote add origin https://github.com/<USERNAME-ANDA>/valiant-moto-atelier.git
git branch -M main
git push -u origin main
```

*(Atau jika menggunakan GitHub CLI: `gh repo create valiant-moto-atelier --public --source=. --remote=origin --push`)*

### 2. Deploy ke Vercel
Proyek ini telah dilengkapi file konfigurasi `vercel.json` dan `package.json`. Untuk meluncurkan ke Vercel:

```bash
# Opsi A: Melalui Vercel CLI
npx vercel

# Opsi B: Melalui Dashboard Vercel (https://vercel.com)
1. Buka vercel.com dan login.
2. Klik "Add New..." -> "Project".
3. Pilih repository GitHub "valiant-moto-atelier".
4. Klik "Deploy". Website langsung aktif dalam hitungan detik!
```
