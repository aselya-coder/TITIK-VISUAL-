import { Card, CardContent } from "@/components/ui/card";

export function DashboardWelcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center max-w-2xl mx-auto">
      <div className="bg-blue-50 p-4 rounded-full mb-6">
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang di Admin Panel</h1>
      <p className="text-lg text-gray-500 mb-10">
        Kelola konten website Titik Visual dengan mudah tanpa mengubah desain layout.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Pilih Halaman</h3>
            <p className="text-sm text-gray-500">
              Gunakan sidebar di sebelah kiri untuk memilih halaman yang ingin diedit.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Edit Konten</h3>
            <p className="text-sm text-gray-500">
              Ubah teks, gambar, atau link pada setiap section sesuai kebutuhan.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Simpan</h3>
            <p className="text-sm text-gray-500">
              Klik tombol "Simpan Perubahan" di pojok kanan atas untuk menerapkan update.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
