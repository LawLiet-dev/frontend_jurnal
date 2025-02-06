import React from 'react'

function Login() {
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
                            <h6 className="text-base/[1.6] font-semibold text-default-600 mb-0 mt-4">Login
                            </h6>
                            <p className="text-default-500 text-sm/[1.6] mt-1 mb-6">Sudah punya akun? Silahkan isi dan masuk.</p>
                            <hr className="-mx-10 my-10" />
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
                                <div className="flex items-center mb-4">
                                    <input id="remember" type="checkbox" className="shrink-0 border-default-400 rounded text-blue-600" />
                                    <label htmlFor="remember" className="text-xs/none text-default-700 font-medium ms-3">Remember me</label>
                                </div>

                                <div className="mb-0 text-center">
                                    <button
                                        className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
                                        type="submit">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <p className="text-default-500 leading-6 text-base">Tidak memiliki akun? <a
                            href="register" className="text-primary font-semibold ms-1">Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login