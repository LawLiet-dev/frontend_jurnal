import React from 'react'
import HeaderStudent from '../components/HeaderStudent'

function Jurnal() {
  return (
    <div>

    <HeaderStudent />

    <section className="relative overflow-hidden py-6 mt-20">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                    <div className="flex flex-wrap items-center">
      <a href="add" className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">Tambah</a>
    </div>
  <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
    <thead>
      <tr className="bg-primary text-white">
        <th className="px-6 py-3 text-left font-semibold border border-black">Nomor</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Tanggal</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Nama Kegiatan</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Deskripsi</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">1</td>
        <td className="px-6 py-4 border border-black">2025-02-01</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi aurnal</td>
        <td className="px-6 py-4 border border-black">FE</td>
        <td className="px-6 py-4 border border-black">
            <a href="edit" className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i> Edit</a>
            <a href="" className="text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg border border-red-500 transition-colors duration-500"> <i className="fas fa-trash-alt mr-2"></i> Delete</a>
        </td>
      </tr>
      <tr className="bg-white hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">2</td>
        <td className="px-6 py-4 border border-black">2025-02-02</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi jurnal</td>
        <td className="px-6 py-4 border border-black">BE</td>
        <td className="px-6 py-4 border border-black">
            <a href="edit" className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i> Edit</a>
            <a href="" className="text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg border border-red-500 transition-colors duration-500"> <i className="fas fa-trash-alt mr-2"></i> Delete</a>
        </td>
      </tr>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">3</td>
        <td className="px-6 py-4 border border-black">2025-02-03</td>
        <td className="px-6 py-4 border border-black">Membuat aplikasi jurnal</td>
        <td className="px-6 py-4 border border-black">Analisis</td>
        <td className="px-6 py-4 border border-black">
            <a href="edit" className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i> Edit</a>
            <a href="" className="text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg border border-red-500 transition-colors duration-500"> <i className="fas fa-trash-alt mr-2"></i> Delete</a>
        </td>
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

export default Jurnal