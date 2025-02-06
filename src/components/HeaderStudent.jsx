import React from 'react'

function HeaderStudent() {
  return (
    <div>
    <header className="@@link-color fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white transition-all py-3.5">
        <div className="container">
            <nav className="flex items-center">
                    <img src="assets/images/logo.jpg" className="h-8 logo-dark" alt="Logo Dark" />
                    <img src="assets/images/logo-light.png" className="h-8 logo-light" alt="Logo Light" />
                <div className="hidden lg:block mx-auto grow">
                    <ul id="navbar-navlist"
                        className="grow flex flex-col lg:flex-row lg:items-center lg:justify-center mt-4 lg:mt-0">
                        <li className="nav-item pe-4">
                            <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all"
                                href="student">
                                <span className="i-solar-widget-5-bold-duotone size-5 me-2"></span>
                                <span className="grow">Dashboard</span>
                            </a>
                        </li>
                        <li className="jurnal">
                            <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all"
                                href="pembimbing">
                                <span className="i-solar-folder-2-bold-duotone size-5 me-2"></span>
                                <span className="grow">Pembimbing</span>
                            </a>
                        </li>
                        <li className="jurnal">
                            <a className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-default-700 hover:text-primary transition-all"
                                href="jurnal">
                                <span className="i-solar-folder-2-bold-duotone size-5 me-2"></span>
                                <span className="grow">Jurnal</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="block grow ms-auto lg:shrink me-4 lg:me-0">
                    <ul className="navbar-nav flex gap-x-3 items-center justify-end lg:justify-center">
                        <li className="nav-item">
                            <div className="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
                                <a href="javascript:void(0);"
                                    className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                                    <span className="h-full hover:text-primary">
                                        <i className="i-solar-notification-unread-lines-bold-duotone size-6"></i>
                                    </span>
                                </a>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-72 min-w-72 border p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                                    <div className="space-y-0.5">
                                        <div className="nav-item">
                                            <a className="nav-link p-3 hover:bg-default-100" href="notification">
                                                <div className="flex items-center -ms-1.5">
                                                    <span
                                                        className="bg-green-400/10 text-green-400 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                        <i className="i-tabler-mail-plus size-6"></i>
                                                    </span>
                                                    <div className="flex-grow-1">
                                                        <p className="text-xs/none">Notification</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
                                <a href="javascript:void(0);"
                                    className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
                                    <div className="flex items-center">
                                        <div className="shrink">
                                            <div className="h-8 w-8 me-2">
                                                <img src="assets/images/avatar.png"
                                                    className="avatar h-full w-full rounded-full me-2" alt="" />
                                            </div>
                                        </div>
                                        <div className="hidden lg:block grow ms-1 leading-normal">
                                            <span className="block text-sm font-medium">Student</span>
                                        </div>
                                    </div>
                                </a>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-48 min-w-48 border p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                                            <a className="nav-link !p-2" href="akun">
                                                <i className="i-tabler-user size-4 me-2"></i>
                                                Profile
                                            </a>
                                        </div>

                                        <div className="nav-item rounded hover:bg-default-100 transition-all">
                                            <a className="nav-link !p-2" href="login">
                                                <i className="i-tabler-lock-open size-4 me-2"></i>
                                                Sign Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden flex items-center ms-auto px-2.5">
                    <button type="button" className="py-3 px-4 inline-flex items-center" aria-haspopup="dialog"
                        aria-expanded="false" aria-controls="adminMobileMenu" data-hs-overlay="#adminMobileMenu">
                        <i className="i-fa6-solid-bars text-2xl text-default-500"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    <div id="adminMobileMenu"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e"
        role="dialog" tabIndex="-1" aria-labelledby="adminMobileMenu-label">
        <div className="flex flex-col h-full divide-y-2 divide-default-200">

            <div className="p-6 flex items-center justify-between">
                <a href="index.html">
                    <img src="assets/images/logo-dark.png" className="h-8" alt="Logo" />
                </a>

                <button type="button"
                    className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                    aria-label="Close" data-hs-overlay="#adminMobileMenu">
                    <span className="sr-only">Close</span>
                    <i className="i-fa6-solid-xmark text-xl"></i>
                </button>
            </div>


            <div className="p-6 overflow-scroll h-full">
                <ul className="navbar-nav flex flex-col gap-2">

                    <li className="nav-item">
                        <a href="student" className="nav-link">
                            <span className="i-solar-widget-5-bold-duotone size-5 me-2"></span>
                            <span className="grow">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="pembimbing" className="nav-link">
                            <span className="i-solar-widget-5-bold-duotone size-5 me-2"></span>
                            <span className="grow">Pembimbing</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="jurnal" className="nav-link">
                            <span className="i-solar-folder-2-bold-duotone size-5 me-2"></span>
                            <span className="grow">Jurnal</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeaderStudent