//import useState and useEffect
import { useEffect } from 'react';
import HeaderStudent from "./components/HeaderStudent";
import Notification from "./components/Notification";

function Student() {
  return (
    <div>
      <HeaderStudent />
      <Notification />

      <div className="bg-gray-100">
  <div className="container mx-auto p-4">
   <div className="flex flex-col lg:flex-row gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
     <div className="flex justify-between items-center mb-4">
      <div>
       <h1 className="text-xl font-semibold">
        Journal Saya
       </h1>
       <p className="text-sm text-gray-600">
        Pembimbing: Anda belum memilih pembimbing &nbsp;
        <a className="text-blue-500" href="list">
         Pilih
        </a>
       </p>
      </div>
     </div>
     <table className="w-full text-left">
      <thead>
       <tr className="border-b">
        <th className="py-2">
         Image
        </th>
        <th className="py-2">
         Deskripsi
        </th>
        <th className="py-2">
         Tanggal
        </th>
        <th className="py-2">
         Aksi
        </th>
       </tr>
      </thead>
      <tbody>
       <tr className="border-b">
        <td className="py-4">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="/assets/images/pkl.jpg" width="100" />
        </td>
        <td className="py-2">
         Lorem ipsum generator,...
        </td>
        <td className="py-2 text-blue-500">
         01 Januari 2025
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="/assets/images/pkl.jpg" width="100"/>
        </td>
        <td className="py-2">
         Lorem ipsum generator,...
        </td>
        <td className="py-2 text-blue-500">
         01 Januari 2025
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="/assets/images/pkl.jpg" width="100"/>
        </td>
        <td className="py-2">
         Lorem ipsum generator,...
        </td>
        <td className="py-2 text-blue-500">
         01 Januari 2025
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-4">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="/assets/images/pkl.jpg" width="100"/>
        </td>
        <td className="py-2">
         Lorem ipsum generator,...
        </td>
        <td className="py-2 text-blue-500">
         01 Januari 2025
        </td>
        <td className="py-2">
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Detail
         </button>
        </td>
       </tr>
       <tr className="border-4">
        <td className="py-5">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="/assets/images/pkl.jpg" width="100"/>
        </td>
        <td className="py-2">
         Lorem ipsum generator,...
        </td>
        <td className="py-2 text-blue-500">
         01 Januari 2025
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
    <div className="bg-blue-500 rounded-lg shadow-lg p-2 ml-0 lg:ml-6 mt-6 lg:mt-0 w-full lg:w-1/3">
     <h2 className="text-white text-xl font-semibold px-5 mt-5">
      Statistik Jurnal
     </h2>
     <p className="text-white px-5 mb-4">
      jurnal siswa
     </p>
     <img alt="School logo" className="mx-auto" height="200" src="/assets/images/smk.png" width="200"/>
     <div className="bg-white rounded-lg p-10 mt-10">
      <div className="flex justify-between items-center mb-10">
       <div>
        <p className="text-gray-500 text-xl font-semibold">
         Mengisi
        </p>
        <p className="text-gray-500">
         Journal
        </p>
       </div>
       <div className="text-blue-500 bg-blue-100 rounded-lg px-3">
        5 X
       </div>
      </div>
      <div className="flex justify-between items-center">
       <div>
        <p className="text-gray-500 text-xl font-semibold">
         Tidak mengisi
        </p>
        <p className="text-gray-500">
         Journal
        </p>
       </div>
       <div className="text-blue-500 bg-blue-100 rounded-lg px-3">
        10 X
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  </div>
    </div>
  );
}

export default Student;
