import React from 'react'
import HeaderStudent from '../components/HeaderStudent'

function Pembimbing() {
  return (
    <div>

    <HeaderStudent />

    <section className="relative overflow-hidden py-6 mt-20">
    <div className="container">
        {/* Wrapper for all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            {/* Header Section */}
            <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold text-center">Silahkan pilih Guru dan Dudi anda</h3>
            </div>
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300">
                        <div className="overflow-x-auto shadow-xl rounded-lg">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left font-semibold">Kategori</th>
            <th className="py-3 px-6 text-left font-semibold">Pilih</th>
          </tr>
        </thead>
        <tbody>
          {/* Row untuk Guru */}
          <tr className="border-b">
            <td className="py-4 px-6 font-medium">Guru</td>
            <td className="py-4 px-6 w-full">
              <div className="hs-accordion border border-gray-300 rounded-lg">
                <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                  Pilih Guru
                  <span className="material-symbols-rounded text-xl block transition-all hs-accordion-active:rotate-180">
                    <i className="i-fa6-solid-angle-down"></i>
                  </span>
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                  <div className="flex flex-wrap gap-4 pt-3 p-5 max-w-full">
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Pak Agus</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Bu Dina</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Pak Muhti</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          {/* Row untuk Dudi */}
          <tr className="border-b">
            <td className="py-4 px-6 font-medium">Dudi</td>
            <td className="py-4 px-6 w-full">
              <div className="hs-accordion border border-gray-300 rounded-lg">
                <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                  Pilih Dudi
                  <span className="material-symbols-rounded text-xl block transition-all hs-accordion-active:rotate-180">
                    <i className="i-fa6-solid-angle-down"></i>
                  </span>
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                  <div className="flex flex-wrap gap-4 pt-3 p-5 max-w-full">
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Dudi A</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Dudi B</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Dudi C</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <p className="text-lg font-semibold">Dudi D</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="-mx-10 my-5" />

    <div className="flex justify-start mt-4">
      <a href="#" className="bg-primary text-white rounded-lg text-sm font-semibold px-6 py-3 hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:outline-primary/40">
        Pilih
      </a>
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

export default Pembimbing