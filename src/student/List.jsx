import React from 'react'

function List() {
  return (
    <div>
        <div className="bg-gray-100">
    <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-4">
            <a href="student"><i className="fas fa-arrow-left text-xl"></i></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-xl font-bold mb-4">Silahkan pilih guru anda</h2>
                <div className="mb-4">
                    <select className="select2 w-full p-2 border rounded mb-2" placeholder="Pilih guru">
                        <option value="">Pak Agus</option>
                        <option value="">Pak Dwi</option>
                        <option value="">Pak Mukti</option>
                        <option value="">Pak Faw</option>
                        <option value="">Bu Dina</option>
                        <option value="">Pak Kafin</option>
                        <option value="">Bu Fitri</option>
                        <option value="">Bu Anisa</option>
                    </select>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Silahkan pilih dudi anda</h2>
                <div className="mb-4">
                    <select className="select2 w-full p-2 border rounded mb-2" placeholder="Pilih dudi">
                        <option value="Mr. Johnson">Pak Sandika Galih</option>
                        <option value="Mr. Johnson">Pak Dea Afrizal</option>
                        <option value="Mr. Johnson">Pak Regi</option>
                        <option value="Mr. Johnson">Pak Windah</option>
                        <option value="Mr. Johnson">Pak Manca</option>
                        <option value="Mr. Johnson">Bu Cloe</option>
                        <option value="Mr. Johnson">Bu Chitanda</option>
                        <option value="Mr. Johnson">Bu Violet</option>
                        <option value="Mr. Johnson">Bu Noele</option>
                        <option value="Mr. Johnson">Pak Oreki</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default List