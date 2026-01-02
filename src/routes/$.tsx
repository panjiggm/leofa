import { createFileRoute, Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export const Route = createFileRoute('/$')({
  component: NotFound,
})

function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-white mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
