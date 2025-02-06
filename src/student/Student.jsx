import React from 'react'
import HeaderStudent from '../components/HeaderStudent'

function Student() {
  return (
    <div>
    <HeaderStudent />

    <section className="relative overflow-hidden mt-20">
  <div className="container">
    <div className="grid grid-cols-12 gap-6 mt-2">
      <div className="lg:col-span-5 col-span-12">
        <div className="bg-white rounded border border-gray-300 shadow-lg">
          <div className="p-6">
            <div className="flex">
              <div className="grow">
                <div className="flex">
                  <img 
                    src="/assets/images/avatar.png" 
                    className="img-fluid w-12 h-12 rounded me-3" 
                    alt="Profile" 
                  />
                  <div className="grow">
                    <h4 className="text-lg text-default-800 mb-1 mt-0 font-semibold">Student</h4>
                    <p className="text-default-400 pb-0 text-sm mb-4 font-medium">User</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-2 flex-wrap py-4 border-b">
              <a href="#" className="flex gap-0.5 text-default-400 text-sm">
                <i className="i-tabler-mail size-5 me-2"></i>
                farel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>

    <section className="relative overflow-hidden">
  <div className="container">
    <div className="flex items-center justify-between my-6">
      <div>
        <h4 className="text-base text-default-800">Pembimbing dan Dudi</h4>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
      
      {/* Project 1 */}
      <div className="bg-white rounded border border-gray-300 shadow-lg">
        <div className="p-6">
          <div className="mt-3">
            <h4 className="mt-0 mb-1">
              <a className="text-lg text-default-600 hover:text-primary" href="#">Pak Agus</a>
            </h4>
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-primary/10 text-primary">Guru</span>
          </div>

          <div className="flex -space-x-2 mt-3">
            <img 
              className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-default-800" 
              src="assets/images/avatar.png" 
              alt="Image Description" 
            />
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white rounded border border-gray-300 shadow-lg">
        <div className="p-6">
          <div className="mt-3">
            <h4 className="mt-0 mb-1">
              <a className="text-lg text-default-600 hover:text-primary" href="#">Pak B</a>
            </h4>
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-primary/10 text-primary">Dudi</span>
          </div>

          <div className="flex -space-x-2 mt-3">
            <img 
              className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-default-800" 
              src="assets/images/avatar.png" 
              alt="Image Description" 
            />
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-white rounded border border-gray-300 shadow-lg">
        <div className="p-6">
          <div className="mt-3">
            <h4 className="mt-0 mb-1">
              <a className="text-lg text-default-600 hover:text-primary" href="#">Pak C</a>
            </h4>
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-primary/10 text-primary">Guru</span>
          </div>
          <div className="flex -space-x-2 mt-3">
            <img 
              className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-default-800" 
              src="assets/images/avatar.png" 
              alt="Image Description" 
            />
          </div>
        </div>
      </div>

    </div>
  </div>
    </section>

    </div>
  )
}

export default Student