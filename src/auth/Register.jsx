import React from 'react'

function Register() {
  return (
    <>
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      {/* <!-- Card Login --> */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                  <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
                  <h1 className="ml-1 text-xl font-semibold text-black">
                      PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                  </h1>
              </div>
              <h2 className="text-2xl font-medium">Create Your Account</h2>
              <div className="block md:hidden">
                <p className="text-gray-600 mb-6">Don't have an account? Create your account, it
                takes less than a minute.</p>
              </div>
              <div className="hidden md:block">
                <p className="text-gray-600 mb-6">Don't have an account? Create your account, <span className='block whitespace-pre-line'></span>it
                takes less than a minute.</p>
              </div>
              <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Nama Lengkap *</label>
                  <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">NISN *</label>
                  <input type="text" placeholder="Your Nisn" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Email *</label>
                  <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Password *</label>
                  <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-medium">Confirm Password *</label>
                  <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
              </div>
              <div class="col-span-2 mt-5">
                  <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition">
                      Register
                  </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 flex justify-center items-center hidden md:block">
              <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
          </div>
      </div>

      <div className="text-center text-sm mt-4">
          Apakah anda sudah mempunyai akun? <a href="/login" className="text-blue-500">Login</a>
      </div>
  </div>
    </>
  ) 
}

export default Register