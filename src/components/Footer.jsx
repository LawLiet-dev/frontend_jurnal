import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div className="bg-default-100">

        <div className="border-b"></div>

        <div className="container">

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 py-6">
                <div>
                <div className="flex items-center">
                    <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-20" />
                    <div className="hover-target img-5">
                        <h1 className="ml-3 text-xl font-semibold text-black">
                            PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                        </h1>
                    </div>
                </div>
                    <p className="text-default-500/80 mt-5 w-4/5 mb-10">Menuju indonesia emas</p>
                    <p className="text-default-500/80 mt-5 w-4/5">Jalan Tenis No.10 Kota Kraksaan Probolinggo</p>
                </div>

                <div>
                    <div className="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">

                        <div>
                            <div className="flex flex-col gap-3">
                                <h5 className="mb-3 uppercase">Pages</h5>
                                <div className="text-default-500/80"><Link to="/">Home</Link></div>
                                <div className="text-default-500/80"><Link to="/about">About</Link></div>
                                <div className="text-default-500/80"><Link to="/contact">Contact</Link></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3">
                                <h5 className="mb-3 uppercase">Get In Touch</h5>
                                <div className="text-default-500/80"><a href="#">admin@smkn1kraksan.sch.id.</a></div>
                                    <div className="text-default-500/80">
                                        <div className="flex gap-7">
                                        <span>
                                            <a href="#">
                                                <i className="i-tabler-brand-facebook size-5 hover:text-primary transition-all"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#">
                                                {/* <i className="i-tabler-brand-tiktok size-5 hover:text-primary transition-all"></i> */}
                                                {/* <img src="/assets/images/icons/tiktok.png" alt="tiktok" className='w-5 h-5 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100'/> */}
                                                <img 
                                                    src="/assets/images/icons/tiktok.png" 
                                                    alt="tiktok" 
                                                    className='w-5 h-5 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100 hover:filter hover:brightness-0 hover:invert-50 hover:sepia-100 hover:hue-rotate-180 hover:saturate-200 hover:text-blue-500' 
                                                />
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#">
                                                <i className="i-tabler-brand-instagram size-5 hover:text-primary transition-all"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="border-b"></div>

            <div className="grid text-center sm:text-start gap-6 py-5">
                <div>
                    <p className="text-sm text-default-500 text-center">
                        <script>document.write(new Date().getFullYear())</script>2025©
                        <a href="#" className="text-default-800 hover:text-primary transition-all font-medium"> SMKN 1 KRAKSAAN. </a>
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Footer