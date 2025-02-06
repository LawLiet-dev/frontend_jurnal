import React from 'react'

function Notification() {
  return (
    <div>
    
    <section className="relative overflow-hidden py-6">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            {/* Header Section */}
            <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold">Notifikasi</h3>
            </div>
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-semibold text-default-700">
                                        Permintaan di tolak
                                    </label>
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-red-500/10 text-red-500">
                                    Alasan: Tidak memenuhi syarat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification 2 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-semibold text-default-700">
                                        Permintaan di terima
                                    </label>
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-green-500/10 text-green-500">
                                    Alasan: Semua syarat terpenuhi
                                </span>
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

export default Notification