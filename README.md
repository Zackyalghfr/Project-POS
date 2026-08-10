================================================================
  WARUNG LALAPAN — README
================================================================

CARA MENJALANKAN PROYEK
----------------------------------------------------------------
Proyek ini tidak bisa dibuka langsung dengan double-click file
HTML. Harus dijalankan melalui web server lokal.

Pilihan 1 — VS Code + Live Server (Disarankan)
  1. Install VS Code  : https://code.visualstudio.com
  2. Install extension Live Server di VS Code
     (Ctrl+Shift+X → cari "Live Server" → Install)
  3. Buka folder "warung-lalapan" di VS Code
     (File → Open Folder → pilih folder warung-lalapan)
  4. Klik kanan file index.html → "Open with Live Server"
  5. Browser otomatis terbuka di http://127.0.0.1:5500

Pilihan 2 — Python
  1. Buka terminal / command prompt
  2. Masuk ke folder proyek:
     cd path/ke/warung-lalapan
  3. Jalankan perintah:
     python -m http.server 8000
  4. Buka browser dan ketik:
     http://localhost:8000


STRUKTUR FOLDER
----------------------------------------------------------------
warung-lalapan/
├── index.html          → Redirect otomatis ke halaman login
├── gambar/             → Folder semua file gambar makanan
├── shared/
│   ├── shared.css      → Style global (topbar, sidebar, dll)
│   └── shared.js       → Data menu, localStorage, utilities
├── login/              → Halaman login
├── register/           → Halaman register
├── menu/               → Halaman menu utama
├── pesanan/            → Halaman tinjau pesanan
├── pembayaran/         → Halaman pilih metode pembayaran
└── transaksi/          → Halaman ringkasan & proses pembayaran


DAFTAR FITUR UI
----------------------------------------------------------------
1. Login
   - Form input username dan password
   - Validasi input (minimal 4 karakter)
   - Tombol show/hide password
   - Link menuju halaman register

2. Register
   - Form input nama, email, password, konfirmasi password
   - Validasi input di setiap field
   - Tombol show/hide password
   - Link kembali ke halaman login

3. Menu Utama
   - Grid makanan dan minuman (4 kolom)
   - Filter kategori (semua / makanan / minuman)
   - Pencarian makanan secara real-time
   - Tombol tambah item ke keranjang
   - Badge jumlah item di sidebar

4. Pesanan
   - Daftar item yang sudah ditambahkan
   - Tombol tambah dan kurangi jumlah per item
   - Nomor pesanan unik otomatis
   - Subtotal sticky di bagian bawah

5. Pembayaran
   - 4 pilihan metode: Tunai, QRIS, SpayLater, Kredit/Debit
   - Kartu pilihan aktif ditandai dengan highlight biru
   - Pilihan tersimpan dan terbawa ke halaman transaksi

6. Transaksi
   - Ringkasan grand total, pajak 10%, dan total akhir
   - Tampilan metode pembayaran yang dipilih
   - Tombol proses pembayaran
   - Reset otomatis setelah pembayaran berhasil


CATATAN
----------------------------------------------------------------
- Data pesanan, metode pembayaran, dan nama user disimpan
  menggunakan localStorage sehingga tetap ada saat berpindah
  halaman.

================================================================