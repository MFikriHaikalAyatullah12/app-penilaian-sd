# Aplikasi Penilaian Guru SD

Aplikasi web untuk membantu guru Sekolah Dasar dalam mengelola data siswa dan penilaian dengan mudah dan efisien.

## Fitur Utama

✅ **Sistem Autentikasi**
- Register dan login guru
- Setiap guru hanya dapat mengakses satu kelas (1-6)
- Session management yang aman

✅ **Manajemen Siswa**
- Tambah, edit, dan hapus data siswa
- Input NISN (opsional)
- Data tersimpan per kelas

✅ **Sistem Penilaian**
- Input nilai per mata pelajaran
- Support multiple tugas/ulangan per siswa
- Perhitungan persentase otomatis
- Filter berdasarkan siswa dan mata pelajaran

✅ **Mata Pelajaran Kurikulum SD**
- **Kelas 1-3**: Bahasa Indonesia, Matematika, Pendidikan Pancasila, Pendidikan Agama Islam, Seni, Penjas
- **Kelas 4-6**: Ditambah Bahasa Inggris dan IPAS

✅ **Export Excel**
- Rekap nilai per mata pelajaran (sheet terpisah)
- Akumulasi dan rata-rata nilai otomatis
- Statistik per siswa

✅ **Responsive Design**
- Optimized untuk mobile dan desktop
- Interface yang user-friendly

✅ **Keamanan Data**
- Data tersimpan aman di database PostgreSQL
- Middleware proteksi route
- Validasi input yang ketat

## Teknologi yang Digunakan

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Excel Export**: ExcelJS
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast

## Persyaratan Sistem

- Node.js 18.17 atau lebih tinggi
- NPM atau Yarn
- Browser modern (Chrome, Firefox, Safari, Edge)

## Instalasi dan Setup

### 1. Clone atau Download Project
```bash
# Pastikan Anda sudah berada di folder "penilaian sd"
cd "penilaian sd"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Database
Database PostgreSQL sudah dikonfigurasi menggunakan Neon. Schema dan seed data akan otomatis dijalankan.

```bash
# Generate Prisma Client
npm run db:generate

# Push schema ke database (jika belum)
npm run db:push

# Seed data mata pelajaran (jika belum)
npm run db:seed
```

### 4. Jalankan Aplikasi
```bash
npm run dev
```

Aplikasi akan berjalan di: `http://localhost:3000`

## Cara Penggunaan

### 1. Registrasi Guru
1. Buka `http://localhost:3000`
2. Klik "Daftar di sini"
3. Isi form registrasi:
   - Nama lengkap
   - Email
   - Password (minimal 6 karakter)
   - Pilih kelas yang akan diajar (1-6)
4. Klik "Daftar"

### 2. Login
1. Masukkan email dan password
2. Klik "Masuk"
3. Anda akan diarahkan ke dashboard

### 3. Mengelola Data Siswa
1. Dari dashboard, klik "Kelola Data Siswa"
2. Klik "Tambah Siswa" untuk menambah siswa baru
3. Isi nama siswa dan NISN (opsional)
4. Gunakan tombol "Edit" atau "Hapus" untuk mengelola data

### 4. Input Nilai
1. Klik "Input & Kelola Nilai" dari dashboard
2. Klik "Tambah Nilai"
3. Pilih siswa dan mata pelajaran
4. Masukkan nama tugas dan nilai
5. Nilai akan otomatis dihitung persentasenya

### 5. Export ke Excel
1. Dari dashboard, klik "Export ke Excel"
2. File Excel akan otomatis didownload
3. File berisi sheet terpisah untuk setiap mata pelajaran
4. Dilengkapi dengan rekapitulasi dan statistik

### 6. Hapus Akun
1. Scroll ke bawah di dashboard
2. Di bagian "Zona Berbahaya", klik "Hapus Akun"
3. Konfirmasi penghapusan
4. **PERHATIAN**: Semua data siswa dan nilai akan ikut terhapus

## Struktur Database

### Users (Guru)
- ID, Email, Password, Nama, Kelas yang diajar

### Students (Siswa)
- ID, Nama, NISN, Kelas, ID Guru

### Subjects (Mata Pelajaran)
- ID, Nama, Level Kelas (1-3 atau 4-6)

### Grades (Nilai)
- ID, ID Siswa, ID Mata Pelajaran, ID Guru, Nama Tugas, Nilai, Nilai Maksimal, Tanggal

## Keamanan dan Privasi

- ✅ Password di-hash menggunakan bcrypt
- ✅ Session terenkripsi dengan NextAuth.js
- ✅ Guru hanya bisa akses data kelasnya sendiri
- ✅ Validasi input di frontend dan backend
- ✅ Protection middleware untuk route sensitif
- ✅ Database connection aman dengan SSL

## Fitur Responsive

Aplikasi ini dioptimalkan untuk:
- **Desktop**: Layout full dengan sidebar dan tabel lengkap
- **Tablet**: Layout adaptif dengan navigasi yang lebih compact
- **Mobile**: Interface mobile-first dengan hamburger menu dan card layout

## Troubleshooting

### Error "Database connection failed"
- Pastikan URL database di file `.env` benar
- Cek koneksi internet
- Pastikan database Neon masih aktif

### Error "Module not found"
- Jalankan `npm install` ulang
- Hapus folder `node_modules` dan `package-lock.json`, lalu install ulang

### Error saat build
- Pastikan semua dependencies terinstall
- Jalankan `npm run lint` untuk check error

### Aplikasi lambat
- Check koneksi internet (database external)
- Restart aplikasi dengan `npm run dev`

## Development

### Commands Berguna
```bash
# Development
npm run dev

# Build production
npm run build

# Start production
npm run start

# Lint code
npm run lint

# Database commands
npm run db:push     # Push schema changes
npm run db:seed     # Seed initial data
npm run db:generate # Generate Prisma client
```

### Environment Variables
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
NODE_ENV="development"
```

## Kontribusi

Aplikasi ini dibuat untuk memudahkan guru SD dalam proses penilaian siswa. Jika ada bug atau saran perbaikan, silakan laporkan.

## Lisensi

© 2025 - Aplikasi Penilaian Guru SD. Dibuat untuk membantu pendidikan di Indonesia.

---

**Happy Teaching! 📚👩‍🏫👨‍🏫**