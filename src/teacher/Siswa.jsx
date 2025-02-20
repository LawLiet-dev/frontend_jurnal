import React from 'react'
import HeaderTeacher from '../components/HeaderGuru'

function Siswa() {
  return (
    <div>
      <HeaderTeacher />
      <div className="bg-gray-100 container">
  <div className="container mx-auto p-4">
   <div className="flex flex-col lg:flex-row gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
     <table className="w-full text-left">
      <thead>
       <tr className="border-b">
        <th className="py-2">
         nama
        </th>
        <th className="py-2">
         Nisn
        </th>
        <th className="py-2">
         Email
        </th>
        <th className="py-2">
         Aksi
        </th>
       </tr>
      </thead>
      <tbody>
       <tr className="border-b">
        <td className="py-4">
         Farel Lucky Ardiansyah
        </td>
        <td className="py-2">
         00998976063
        </td>
        <td className="py-2 text-blue-500">
         farel@gmail.com
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         Farel
        </td>
        <td className="py-2">
         00998976063
        </td>
        <td className="py-2 text-blue-500">
         farel@gmail.com
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         Farel
        </td>
        <td className="py-2">
         00998976063
        </td>
        <td className="py-2 text-blue-500">
         farel@gmail.com
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         Farel
        </td>
        <td className="py-2">
         00998976063
        </td>
        <td className="py-2 text-blue-500">
         farel@gmail.com
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         Farel
        </td>
        <td className="py-2">
         00998976063
        </td>
        <td className="py-2 text-blue-500">
         farel@gmail.com
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
  </div>
    </div>
  )
}

export default Siswa