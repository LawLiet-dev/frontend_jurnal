import React from "react";
import HeaderStudent from "./components/HeaderStudent";
import Notification from "./components/Notification";

function Jurnal() {
  return (
    <div>
      <HeaderStudent />
      <Notification />

      <div className="bg-gray-100 p-4">
<div className="mx-auto">
    <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="tanggal">Tanggal</label>
                <div className="relative">
                    <input className="w-full border border-gray-300 p-2 rounded" id="tanggal" placeholder="date-month-year" type="date"/>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="kegiatan">Kegiatan</label>
                <input className="w-full border border-gray-300 p-2 rounded" id="kegiatan" placeholder="Nama Kegiatan" type="text"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="deskripsi">Deskripsi</label>
                <textarea className="w-full border border-gray-300 p-2 rounded" id="deskripsi" placeholder="Deskripsi"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="image">Image</label>
                <div className="relative">
                    <input className="w-full border border-gray-300 p-2 rounded" id="image" type="file"/>
                    <i className="fas fa-paperclip absolute left-3 top-3 text-gray-500"></i>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" style={{ marginRight:"5px" }}>Submit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
            </div>
        </div>
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2 px-4 text-left">Image</th>
                    <th className="py-2 px-4 text-left">Kegiatan</th>
                    <th className="py-2 px-4 text-left">Deskripsi</th>
                    <th className="py-2 px-4 text-left">Tanggal</th>
                    <th className="py-2 px-4 text-left">Aksi</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t">
                    <td className="py-2 px-4"><img alt="Image description" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/WE0IlgpJ7jnxDcRtSgmXeZkQxW231OdwVy5tlx1PHr0.jpg" width="50"/></td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4 text-blue-500">01 Januari 2025</td>
                    <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" style={{ marginRight:"5px" }}>Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4"><img alt="Image description" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/WE0IlgpJ7jnxDcRtSgmXeZkQxW231OdwVy5tlx1PHr0.jpg" width="50"/></td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4 text-blue-500">01 Januari 2025</td>
                    <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" style={{ marginRight:"5px" }}>Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4"><img alt="Image description" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/WE0IlgpJ7jnxDcRtSgmXeZkQxW231OdwVy5tlx1PHr0.jpg" width="50"/></td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4 text-blue-500">01 Januari 2025</td>
                    <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" style={{ marginRight:"5px" }}>Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4"><img alt="Image description" className="w-12 h-12 object-cover" height="50" src="https://storage.googleapis.com/a1aa/image/WE0IlgpJ7jnxDcRtSgmXeZkQxW231OdwVy5tlx1PHr0.jpg" width="50"/></td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4">Lorem ipsum generator...</td>
                    <td className="py-2 px-4 text-blue-500">01 Januari 2025</td>
                    <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" style={{ marginRight:"5px" }}>Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>

    </div>
  );
}

export default Jurnal;
