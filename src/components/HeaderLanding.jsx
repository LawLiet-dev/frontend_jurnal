import React from 'react'

function HeaderLanding() {
  return (
    <div>
    <header id="navbar"
        className="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
        <div className="container">
            <nav className="flex items-center">           
                    <img src="assets/images/logopkl.jpg" className="h-8 logo-dark" alt="Logo Dark" />
                    <img src="assets/images/logo-light.png" className="h-8 logo-light" alt="Logo Light" />              
                <div className="hidden lg:block ms-auto">
                    <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#tentang">Tentang</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#company">Company</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#jurnal">Jurnal</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden flex items-center ms-auto px-2.5">
                    <button type="button" className="py-3 px-4 inline-flex items-center" aria-haspopup="dialog"
                        aria-expanded="false" aria-controls="mobileMenu" data-hs-overlay="#mobileMenu">
                        <i className="i-fa6-solid-bars text-2xl text-default-500"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    <div id="mobileMenu"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e"
        role="dialog" tabIndex="-1" aria-labelledby="mobileMenu-label">
        <div>
            <div className="flex flex-col h-full divide-y-2 divide-default-200">
                <div className="p-6 flex items-center justify-between">
                    <a href="index.html">
                        <img src="assets/images/logo-dark.png" className="h-8" alt="Logo" />
                    </a>

                    <button type="button"
                        className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Close" data-hs-overlay="#mobileMenu">
                        <span className="sr-only">Close</span>
                        <i className="i-fa6-solid-xmark text-xl"></i>
                    </button>
                </div>

                <div className="p-6 overflow-scroll h-full">
                <ul className="navbar-nav flex flex-col gap-2 hs-accordion-group">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#tentang">Tentang</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#company">Company</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#jurnal">Jurnal</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeaderLanding