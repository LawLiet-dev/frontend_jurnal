import React from 'react'

function Detail() {
  return (
    <div>

<section className="relative overflow-hidden py-6">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                    <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold">Jurnal Farel</h3>
            </div>
  <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
    <thead>
      <tr className="bg-primary text-white">
        <th className="px-6 py-3 text-left font-semibold border border-black">Nomor</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Tanggal</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Nama Kegiatan</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Deskripsi</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">1</td>
        <td className="px-6 py-4 border border-black">2025-02-01</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi aurnal</td>
        <td className="px-6 py-4 border border-black">FE</td>
      </tr>
      <tr className="bg-white hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">2</td>
        <td className="px-6 py-4 border border-black">2025-02-02</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi jurnal</td>
        <td className="px-6 py-4 border border-black">BE</td>
      </tr>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">3</td>
        <td className="px-6 py-4 border border-black">2025-02-03</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi jurnal</td>
        <td className="px-6 py-4 border border-black">Analisis</td>
      </tr>
    </tbody>
  </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    </div>
  )
}

export default Detail