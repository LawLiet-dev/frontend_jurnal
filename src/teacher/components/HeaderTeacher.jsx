import React from 'react'

function HeaderTeacher() {
  return (
    <div>

<div className="bg-gray-100">
  <header className="bg-white shadow-sm">
   <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center px-15">
          <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
          <h1 className="ml-3 text-xl font-semibold text-black">
            PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
          </h1>
        </div>
    <div className="flex items-center space-x-4 px-15">
     <img alt="User profile picture" className="h-10 w-10 rounded-full" height="40" src="/assets/images/avatar.png" width="40"/>
    </div>
   </div>
  </header>
  <nav className="bg-white shadow-sm px-15">
   <div className="container mx-auto flex space-x-4 py-2 px-6">
    <a href="teacher" className='text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:z-100 hover:text-white hover:rounded-lg'>Dashboard</a>
    <a href="siswa" className='text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:z-100 hover:text-white hover:rounded-lg'>Siswa</a>
   </div>
  </nav>
 </div>

    </div>
  )
}

export default HeaderTeacher