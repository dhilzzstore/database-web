# 🌙 Luna Asistent

**Platform manajemen Bot WhatsApp** berbasis Express.js + EJS + Firebase.

> Developer: **Kazama Dev (Dhilzz)**

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env
# Edit .env sesuai kebutuhan
```

### 3. Setup Config
Edit file `data/config.json`:
- Isi `smtp` untuk kirim email
- Isi `oauth.google` & `oauth.github` untuk login sosial
- Isi `payment.pakasirApikey` untuk pembayaran
- Isi `recaptcha` untuk proteksi form
- Isi `firebase` untuk database

### 4. Setup Firebase
1. Buat project di [Firebase Console](https://console.firebase.google.com)
2. Aktifkan **Firestore Database**
3. Buat **Service Account** di Project Settings → Service Accounts
4. Download JSON key, ambil `client_email` dan `private_key`
5. Isi ke `.env`

### 5. Buat Akun Admin (WAJIB - lakukan SEKALI)
```bash
node core/seed-admin.js
```
Ikuti instruksi di terminal untuk membuat akun admin pertama.

### 6. Jalankan Server
```bash
# Development
npm run dev

# Production
npm start
```

Server berjalan di `http://localhost:3000`

---

## 🗂️ Struktur Folder

```
luna-asistent/
├── core/
│   ├── botManager.js      # WhatsApp bot manager (Baileys)
│   ├── firebase.js        # Firebase Admin SDK init
│   ├── mailer.js          # Email service (Nodemailer)
│   ├── middleware.js      # Auth, maintenance, logging
│   ├── passport.js        # Login strategies (Local/Google/GitHub)
│   ├── seed-admin.js      # Script buat akun admin
│   └── locales/           # File terjemahan (id.json, en.json)
├── data/
│   ├── config.json        # Konfigurasi utama website
│   ├── logs/              # Log aktivitas (auto-generated)
│   └── sessions/          # Session bot WhatsApp (auto-generated)
├── public/
│   ├── css/style.css      # Stylesheet utama
│   ├── js/app.js          # JavaScript client
│   └── images/            # Gambar (logo, qris.png, dll)
├── routes/
│   ├── index.js           # Public routes (landing, pricing, dll)
│   ├── auth.js            # Login, register, OAuth, reset password
│   ├── dashboard.js       # User dashboard routes
│   ├── admin.js           # Admin panel routes
│   ├── payment.js         # Payment routes (Pakasir)
│   └── api.js             # API routes (bot control)
├── views/
│   ├── index.ejs          # Landing page
│   ├── pricing.ejs        # Halaman harga publik
│   ├── donasi.ejs         # Halaman donasi QRIS
│   ├── partials/          # Head, Foot, Navbar, Sidebar, Topbar
│   ├── auth/              # Login, Register, Forgot/Reset Password
│   ├── dashboard/         # Semua halaman user dashboard
│   ├── admin/             # Semua halaman admin panel
│   ├── payment/           # Detail, Success, Mock payment
│   └── errors/            # 403, 404, 500, Maintenance
├── index.js               # Entry point server
├── settings.js            # Global config loader
├── tunnel.js              # Cloudflare tunnel manager
├── package.json
└── .env.example
```

---

## 🔐 Cara Akses Admin

1. Jalankan `node core/seed-admin.js` untuk buat akun admin
2. Login di `/auth/login` dengan email/password yang dibuat
3. Admin dashboard ada di `/admin`

---

## 📦 Dependencies Utama

| Package | Fungsi |
|---------|--------|
| `express` | Web framework |
| `ejs` | Template engine |
| `firebase-admin` | Database & Auth |
| `@whiskeysockets/baileys` | WhatsApp bot library |
| `passport` | Authentication |
| `nodemailer` | Kirim email |
| `helmet` | Security headers |
| `i18n` | Multi-bahasa |

---

## 🌐 Halaman Utama

| URL | Keterangan |
|-----|------------|
| `/` | Landing page |
| `/pricing` | Halaman harga |
| `/donasi` | Donasi QRIS |
| `/auth/login` | Login |
| `/auth/register` | Daftar |
| `/dashboard` | Dashboard user |
| `/admin` | Admin panel |
| `/payment/detail?paket=` | Checkout |

---

## 💳 Payment URL Format

```
/payment/detail?orderId=LUNA-xxx&paket=7day
/payment/detail?orderId=LUNA-xxx&paket=1month
/payment/detail?orderId=LUNA-xxx&paket=1year
/payment/detail?paket=slot
```

---

## 🤖 Bot Connection Flow

1. User buka `/dashboard/connections`
2. Klik slot kosong → `/dashboard/connections/:id`
3. Masukkan nomor WA (format: 628xxx)
4. Klik **Mulai Pairing**
5. Bot request pairing code via Baileys
6. User buka WA → Perangkat Tertaut → Masukkan kode
7. Bot otomatis terhubung ✅

---

## ⚙️ Config.json Key Settings

```json
{
  "maintenance": false,           // Toggle maintenance mode
  "registrationOpen": true,       // Buka/tutup pendaftaran
  "trialDays": 3,                 // Hari trial gratis
  "slotPrice": 5000,              // Harga slot tambahan
  "membership": {                 // Harga paket
    "7day":   { "price": 15000 },
    "1month": { "price": 45000 },
    "1year":  { "price": 400000 }
  },
  "smtp": { ... },               // Config email
  "oauth": { ... },              // Google & GitHub OAuth
  "payment": { ... },            // Pakasir API key
  "recaptcha": { ... }           // reCAPTCHA keys
}
```

---

## 📸 Tambah Gambar

Taruh file gambar di `public/images/`:
- `logo.png` — Logo website
- `favicon.ico` — Favicon
- `qris.png` — QR Code donasi

---

© 2026 Luna Asistent — **Kazama Dev (Dhilzz)**
