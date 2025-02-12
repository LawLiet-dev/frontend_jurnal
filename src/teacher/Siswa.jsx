import React from 'react'
import HeaderTeacher from './components/HeaderTeacher'
import '../../public/assets/css/teacher.css'

function Siswa() {
  return (
    <div>
      <HeaderTeacher />
      <body class="bg-white text-gray-800">
        <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-7">
          <h1 class="text-2xl font-bold">
          Jurnal Harian Siswa
          </h1>
          {/* <select class="p-2 border border-gray-300 rounded">
          <option>
            March 2024
          </option>
          </select> */}
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
          <thead>
            <tr>
            <th class="py-2 px-4">
              Nama
            </th>
            <th class="py-2 px-4">
              Image
            </th>
            <th class="py-2 px-4">
              Kegiatan
            </th>
            <th class="py-2 px-4">
              Deskripsi
            </th>
            <th class="py-2 px-4">
              Tanggal
            </th>
            <th class="py-2 px-4">
              Aksi
            </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
            <td class="py-2 px-4">
              Farel Lucky
            </td>
            <td class="py-2 px-4">
              <img alt="Student activity image" class="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td class="py-2 px-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr class="border-t">
            <td class="py-2 px-4">
              Ihsan Adi Purnomo
            </td>
            <td class="py-2 px-4">
              <img alt="Student activity image" class="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td class="py-2 px-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr class="border-t">
            <td class="py-2 px-4">
              Dandi Putra
            </td>
            <td class="py-2 px-4">
              <img alt="Student activity image" class="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td class="py-2 px-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr class="border-t">
            <td class="py-2 px-4">
              Ahmad Zaini
            </td>
            <td class="py-2 px-4">
              <img alt="Student activity image" class="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td class="py-2 px-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
            <tr class="border-t">
            <td class="py-2 px-4">
              Ahmad Zaini
            </td>
            <td class="py-2 px-4">
              <img alt="Student activity image" class="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/W57rw0CQqo6dRPSH4WT8tEvkGlfScya_TmaXK0ky-9E.jpg" width="50"/>
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4">
              Lorem ipsum generator...
            </td>
            <td class="py-2 px-4 text-blue-500">
              01 Januari 2025
            </td>
            <td class="py-2 px-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Detail
              </button>
            </td>
            </tr>
          </tbody>
          </table>
        </div>
        <div class="flex justify-center mt-4">
          <a class="mx-2 text-blue-500" href="#">
          1
          </a>
          <a class="mx-2 text-blue-500 font-bold" href="#">
          2
          </a>
          <a class="mx-2 text-blue-500" href="#">
          3
          </a>
        </div>
        </div>
      </body>
    </div>
  )
}

export default Siswa