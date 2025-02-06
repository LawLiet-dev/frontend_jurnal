import React from 'react'

function Add() {
  return (
    <div>

    <section className="relative overflow-hidden py-6">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            {/* Header Section */}
            <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold text-center">Create Data</h3>
            </div>
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300">
                            <div className="mb-4">
                                <label htmlFor="namaKegiatan" className="block text-sm font-medium text-gray-700">Tanggal</label>
                                <input
                                  type="date"
                                  id="tanggal"
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="namaKegiatan" className="block text-sm font-medium text-gray-700">Nama Kegiatan</label>
                                <input
                                  type="text"
                                  id="namaKegiatan"
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                  placeholder="Masukkan nama kegiatan" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                <textarea
                                  id="deskripsi"
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                  placeholder="Masukkan deskripsi kegiatan"
                                  rows="4">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    </div>
  )
}

export default Add