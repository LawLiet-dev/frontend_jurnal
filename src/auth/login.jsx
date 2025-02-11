import React from 'react';

export default function login() {
  return (
    <>
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      {/* <!-- Card Login --> */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                  <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
                  <h1 className="ml-3 text-xl font-semibold text-black">
                      PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                  </h1>
              </div>
              <h2 className="text-2xl font-medium ml-1">Login Your Account</h2>
              <p className="text-gray-600 mb-6 text-center">Enter your email address and password to access journal.</p>
              <form>
                  <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
                  <input type="password" placeholder="Enter your password" className="w-full p-3 mb-4 border border-gray-300 rounded" />
                  <a href="#" className="text-blue-500 text-sm mb-4 inline-block">Lupa Password?</a>
                  <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Login</button>
              </form>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
              <img src="/assets/images/smk.png" alt="School Emblem" className="w-90 h-90 mb-3" />
          </div>
      </div>

      {/* <!-- Teks Registrasi di Bawah Card --> */}
      <div className="text-center text-sm mt-4">
          Apakah anda belum mempunyai akun? <a href="#" className="text-blue-500">Registrasi</a>
      </div>
  </div>
    </>
  )
}