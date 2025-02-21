import React from 'react'
import HeaderTeacher from './components/HeaderTeacher'

function Siswa() {
  return (
    <div>
      <HeaderTeacher />
      <div className="bg-white text-gray-800 lg:px-20">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-7 mt-3">
            <h1 className="text-2xl font-bold lg:ml-4">
            Jurnal Harian Siswa 
            </h1>
          </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
          <thead>
            <tr>
            <th className="py-2 px-4">
              Nama
            </th>
            <th className="py-2 px-4">
              Image
            </th>
            <th className="py-2 px-4">
              Kegiatan
            </th>
            <th className="py-2 px-4">
              Deskripsi
            </th>
            <th className="py-2 px-4">
              Tanggal
            </th>
            <th className="py-2 px-4">
              Aksi
            </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
            <td className="py-2 px-4">
              Farel Lucky
            </td>
            <td className="py-2 px-4">
              <img alt="Student activity image" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr className="border-t">
            <td className="py-2 px-4">
              Ihsan Adi Purnomo
            </td>
            <td className="py-2 px-4">
              <img alt="Student activity image" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr className="border-t">
            <td className="py-2 px-4">
              Dandi Putra
            </td>
            <td className="py-2 px-4">
              <img alt="Student activity image" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr className="border-t">
            <td className="py-2 px-4">
              Ahmad Zaini
            </td>
            <td className="py-2 px-4">
              <img alt="Student activity image" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr className="border-t">
            <td className="py-2 px-4">
              Ahmad Zaini
            </td>
            <td className="py-2 px-4">
              <img alt="Student activity image" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td className="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <a className="mx-2 text-blue-500" href="#">
          1
          </a>
          <a className="mx-2 text-blue-500 font-bold" href="#">
          2
          </a>
          <a className="mx-2 text-blue-500" href="#">
          3
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Siswa