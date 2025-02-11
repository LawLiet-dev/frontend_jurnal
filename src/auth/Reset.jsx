import React from 'react'

function Reset() {
  return (
    <>
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                  <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
                  <h1 className="ml-1 text-xl font-semibold text-black">
                      PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                  </h1>
              </div>
              <h2 className="text-2xl font-medium ml-1">Get Access Back</h2>
              <p className="text-gray-600 mb-6 md:ml-1">Can't log in? Fill in the form below to regain<span className='hidden md:block md:whitespace-pre-line'>access.</span></p>
              <form>
                  <div>
                    <label className="block text-gray-700 font-medium">Email *</label>
                    <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" name='email'/>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">Password *</label>
                    <input type="password" placeholder="Enter your password" className="w-full p-3 mb-4 border border-gray-300 rounded" name='password' />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">Confirm Password *</label>
                    <input type="password" placeholder="Enter your confirmation password" className="w-full p-3 mb-4 border border-gray-300 rounded" name='password_confirmation'/>
                  </div>
                  <a href="/login" className="text-blue-500 text-sm mb-4 inline-block">Ingat Password?</a>
                  <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Perbarui</button>
              </form>
          </div>
          <div className="md:w-1/2 flex justify-center items-center hidden md:block">
              <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
          </div>
      </div>
  </div>
    </>
  )
}

export default Reset