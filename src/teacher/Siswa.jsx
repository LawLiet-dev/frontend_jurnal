import React from 'react'
import HeaderTeacher from '../components/HeaderTeacher'

function Siswa() {
  return (
    <div>

    <HeaderTeacher />
    
    <section className="relative overflow-hidden py-6 mt-20">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                    <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold">Informasi siswa</h3>
            </div>
  <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
    <thead>
      <tr className="bg-primary text-white">
        <th className="px-6 py-3 text-left font-semibold border border-black">Nama</th>
        <th className="px-6 py-3 text-left font-semibold border border-black">Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">Farel</td>
        <td className="px-6 py-4 border border-black">
            <a href="detail" className="border border-black text-black rounded-md hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i>Detail</a>
        </td>
      </tr>
      <tr className="bg-white hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">Ilham</td>
        <td className="px-6 py-4 border border-black">
            <a href="detail" className="border border-black text-black rounded-md hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i>Detail</a>
        </td>
      </tr>
      <tr className="bg-gray-50 hover:bg-primary/10 transition-all">
        <td className="px-6 py-4 border border-black">Halima</td>
        <td className="px-6 py-4 border border-black">
            <a href="detail" className="border border-black text-black rounded-md hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/40 transition-all duration-500 py-2 px-4"><i className="fas fa-edit mr-2"></i>Detail</a>
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

export default Siswa