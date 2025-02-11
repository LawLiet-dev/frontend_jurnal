//import useState and useEffect
import { useEffect } from 'react';
import HeaderStudent from "./components/HeaderStudent";
import Notification from "./components/Notification";

function Student() {
  return (
    <div>
      <HeaderStudent />
      <Notification />

      {/* <div className="bg-gray-100">
  <div className="container mx-auto p-4">
   <div className="flex flex-col lg:flex-row gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
     <div className="flex justify-between items-center mb-4">
      <div>
       <h1 className="text-xl font-semibold">
        Journal Saya
       </h1>
       <p className="text-sm text-gray-600">
        Pembimbing: Anda belum memilih pembimbing
        <a className="text-blue-500" href="#">
         Pilih
        </a>
       </p>
      </div>
      <div>
       <select className="border border-gray-300 rounded-lg p-2">
        <option>
         December 2024
        </option>
        <option>
         January 2025
        </option>
        <option>
         February 2025
        </option>
        <option>
         March 2025
        </option>
        <option>
         April 2025
        </option>
       </select>
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
        <td className="py-2">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/buw9VOufM2rjZjRB2Fg0CdFlosI9GvWWRjkijLHFFJ4.jpg" width="100"/>
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
          <i className="fas fa-chevron-right">
          </i>
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-2">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/buw9VOufM2rjZjRB2Fg0CdFlosI9GvWWRjkijLHFFJ4.jpg" width="100"/>
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
          <i className="fas fa-chevron-right">
          </i>
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-2">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/buw9VOufM2rjZjRB2Fg0CdFlosI9GvWWRjkijLHFFJ4.jpg" width="100"/>
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
          <i className="fas fa-chevron-right">
          </i>
         </button>
        </td>
       </tr>
       <tr className="border-b">
        <td className="py-2">
         <img alt="Image description" className="w-20 h-20 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/buw9VOufM2rjZjRB2Fg0CdFlosI9GvWWRjkijLHFFJ4.jpg" width="100"/>
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
          <i className="fas fa-chevron-right">
          </i>
         </button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
    <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
     <h2 className="text-white text-lg font-semibold mb-4">
      Statistik Jurnal
     </h2>
     <div className="flex justify-center mb-4">
      <img alt="Statistik Jurnal Logo" className="w-60 h-60 object-cover" height="150" src="/assets/images/smk.png" width="150"/>
     </div>
     <div className="bg-white p-20 rounded-lg mt-10">
      <div className="flex justify-between items-center mb-2">
       <span className="text-gray-700">
        Mengisi Journal
       </span>
       <span className="text-blue-500">
        5X
       </span>
      </div>
      <div className="flex justify-between items-center">
       <span className="text-gray-700">
        Tidak mengisi Journal
       </span>
       <span className="text-blue-500">
        10X
       </span>
      </div>
     </div>
    </div>
   </div>
  </div>
      </div> */}


    </div>
  );
}

export default Student;
