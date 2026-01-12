# Panduan Deployment LEOFA Website

## 🚀 Rekomendasi: Vercel (Paling Cocok untuk Demo)

### Kenapa Vercel?

✅ **Native support** untuk TanStack Start + Nitro  
✅ **Zero-config** deployment (auto-detect)  
✅ **SSR support** otomatis  
✅ **Free tier** cukup untuk demo  
✅ **Fast deployment** (< 2 menit)  
✅ **Global CDN** untuk performa optimal  
✅ **Built-in analytics**

### Cara Deploy ke Vercel

#### Opsi 1: Via Vercel Dashboard (Paling Mudah)

1. **Push code ke GitHub**

   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub account

3. **Import Project**
   - Klik "Add New Project"
   - Pilih repository GitHub Anda
   - Vercel akan **auto-detect** TanStack Start
   - Klik "Deploy"

4. **Selesai!**
   - Vercel akan build dan deploy otomatis
   - URL akan tersedia dalam 1-2 menit

#### Opsi 2: Via Vercel CLI

```bash
# Install Vercel CLI
bun add -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

### Konfigurasi yang Sudah Disiapkan

✅ `vercel.json` - Konfigurasi build  
✅ `vite.config.ts` - Output directory untuk Vercel  
✅ Environment variable `VERCEL=1` untuk build

### Environment Variables (Jika Diperlukan)

Jika ada environment variables, tambahkan di:

- Vercel Dashboard → Project Settings → Environment Variables

### Custom Domain (Opsional)

1. Vercel Dashboard → Project Settings → Domains
2. Tambahkan domain Anda
3. Update DNS records sesuai instruksi

---

## Alternatif: Netlify

Jika ingin menggunakan Netlify:

### Setup Netlify

1. **Install Netlify CLI**

   ```bash
   bun add -g netlify-cli
   ```

2. **Create `netlify.toml`**

   ```toml
   [build]
     command = "bun run build"
     publish = ".output/public"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   ```bash
   netlify deploy
   netlify deploy --prod
   ```

⚠️ **Note**: Netlify memerlukan konfigurasi tambahan untuk SSR dengan Nitro.

---

## Alternatif: Cloudflare Pages

Cocok untuk static site, tapi **SSR support terbatas**.

```bash
# Install Wrangler
bun add -g wrangler

# Deploy
wrangler pages deploy .output/public
```

---

## Tips untuk Demo

1. **Test build lokal dulu**

   ```bash
   bun run build
   bun run preview
   ```

2. **Pastikan semua route berfungsi**
   - Homepage: `/id/`, `/en/`, `/zh/`
   - About: `/id/about`, dll
   - Contact, Privacy Policy, Terms

3. **Check SEO**
   - Meta tags sudah ada
   - Structured data sudah ada
   - Sitemap (jika ada)

4. **Performance**
   - Optimize images
   - Check Core Web Vitals
   - Test di mobile (70% traffic)

---

## Troubleshooting

### Build Error di Vercel

1. Check build logs di Vercel Dashboard
2. Pastikan `bun` tersedia (Vercel auto-detect)
3. Pastikan semua dependencies terinstall

### SSR tidak bekerja

1. Pastikan `vercel.json` ada
2. Check `vite.config.ts` - output directory
3. Pastikan `server.ts` ada dan benar

### i18n routing tidak bekerja

1. Check route structure: `src/routes/{-$locale}/`
2. Pastikan Intlayer config benar
3. Test semua locale: `/id/`, `/en/`, `/zh/`

---

## Next Steps Setelah Deploy

1. ✅ Setup custom domain (jika ada)
2. ✅ Configure analytics (Vercel Analytics built-in)
3. ✅ Setup monitoring (Vercel Speed Insights)
4. ✅ Test semua halaman dan locale
5. ✅ Share URL demo dengan tim!

---

**Happy Deploying! 🚀**
