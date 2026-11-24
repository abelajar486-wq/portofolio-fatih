# Deploy ke Vercel

Frontend menggunakan Next.js, yang didukung langsung oleh Vercel. Tidak perlu
menambahkan Vite atau mengubah framework.

1. Import repository ini ke Vercel.
2. Atur **Root Directory** ke `frontend`.
3. Di **Settings → Build and Deployment**, pilih Framework Preset **Next.js**.
   Hapus override `vite build`; gunakan `npm run build` atau build command
   default. Biarkan output directory kosong/default.
4. Deploy backend NestJS dari folder `backend` ke layanan hosting terpisah.
5. Setelah backend tersedia, tambahkan environment variable `API_URL` di
   pengaturan proyek frontend Vercel. Isinya URL dasar backend, tanpa `/api`
   (contoh: `https://api.example.com`), lalu redeploy frontend.

Jika log menampilkan `vite: command not found`, Vercel masih memakai Build
Command atau Root Directory yang salah. Pastikan Root Directory adalah
`frontend` dan Build Command bukan `vite build`, lalu redeploy.

Jika `API_URL` belum diatur atau backend tidak dapat diakses, frontend akan
menampilkan data fallback yang tersedia di aplikasi.
