# Deploy ke Vercel

Frontend menggunakan Next.js, yang didukung langsung oleh Vercel. Tidak perlu
menambahkan Vite atau mengubah framework.

1. Import repository ini ke Vercel.
2. Atur **Root Directory** ke `frontend`.
3. Biarkan Framework Preset terdeteksi sebagai **Next.js**. Build command adalah
   `npm run build`; output directory biarkan default.
4. Deploy backend NestJS dari folder `backend` ke layanan hosting terpisah.
5. Setelah backend tersedia, tambahkan environment variable `API_URL` di
   pengaturan proyek frontend Vercel. Isinya URL dasar backend, tanpa `/api`
   (contoh: `https://api.example.com`), lalu redeploy frontend.

Jika `API_URL` belum diatur atau backend tidak dapat diakses, frontend akan
menampilkan data fallback yang tersedia di aplikasi.
