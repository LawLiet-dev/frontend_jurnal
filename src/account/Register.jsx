import React from 'react'

function Register() {
  return (
    <div className="bg-default-100 tracking-wide">
    <div className="min-h-screen flex items-center justify-center">
        <div className="container">
            <div>
                <div className="bg-white shadow rounded mb-6">
                    <div className="flex justify-center">
                        <div className="bg-white shadow-md p-12 rounded-s xl:col-span-5 md:col-span-6">
                            <div className="mb-12">
                                <a href="">
                                    <img src="assets/images/logo.jpg" alt="logo-img" className="h-8" />
                                </a>
                            </div>
                            <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Buat akun
                            </h6>
                            <p className="text-default-500 text-sm/[1.6] mt-1 mb-6">Tidak punya akun? buat akunmu sekarang.</p>
                            <form action="#">

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-default-600">Email
                                        <small>*</small></label>
                                    <input type="email" id="email"
                                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                        placeholder="Your Email" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password"
                                        className="block text-sm font-medium mb-1 text-default-600">Password
                                        <small>*</small></label>
                                    <input type="password" id="password" name="password"
                                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                        placeholder="Enter your password" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password"
                                        className="block text-sm font-medium mb-1 text-default-600">Konfirmasi Password
                                        <small>*</small></label>
                                    <input type="password" id="password" name="password"
                                        className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                        placeholder="Enter your password" />
                                </div>

                                <div className="mb-0 text-center">
                                    <button
                                        className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
                                        type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <p className="text-default-500 leading-6 text-base">Sudah memiliki akun? <a
                            href="login" className="text-primary font-semibold ms-1">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register