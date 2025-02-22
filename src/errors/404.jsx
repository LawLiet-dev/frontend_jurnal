import React from 'react';
import { Home } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-lg">
        {/* Ilustrasi 404 */}
        <div className="text-8xl font-bold text-blue-600">404</div>
        
        {/* Pesan Error */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="text-gray-600">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau dihapus.
        </p>
        
        {/* Tombol Kembali ke Beranda */}
        <div className="pt-6">
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom404;