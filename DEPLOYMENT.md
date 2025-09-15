# Deployment Guide untuk Vercel

## Langkah-langkah Deployment

### 1. Persiapan Database
- Buat PostgreSQL database di layanan cloud seperti:
  - Neon (gratis)
  - Supabase (gratis)
  - Railway (gratis)
  - PlanetScale (untuk MySQL, jika ingin switch)

### 2. Environment Variables di Vercel
Set environment variables berikut di Vercel Dashboard:

```
DATABASE_URL=postgresql://username:password@host:port/database
NEXTAUTH_URL=https://your-app-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key
```

### 3. Deploy ke Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 4. Database Migration
Setelah deploy pertama kali, jalankan:
```bash
# Push schema ke database production
npx prisma db push

# Seed data (opsional)
npx prisma db seed
```

### 5. Verifikasi Deployment
- Cek apakah aplikasi dapat diakses
- Test authentication
- Test database connection
- Test semua API endpoints

## Troubleshooting

### Jika build gagal:
1. Cek logs di Vercel dashboard
2. Pastikan semua dependencies terinstall
3. Pastikan environment variables sudah diset

### Jika database error:
1. Cek DATABASE_URL format
2. Pastikan database dapat diakses dari internet
3. Jalankan `prisma generate` di local dan push ulang

### Jika auth error:
1. Pastikan NEXTAUTH_URL sesuai domain production
2. Generate ulang NEXTAUTH_SECRET jika perlu
3. Cek middleware configuration