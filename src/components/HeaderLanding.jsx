import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

function HeaderLanding({ backgroundColor }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();
    
    // Tutup mobile menu ketika path berubah
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);
    
    // Track scroll position and window width
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        // Apply overflow-x: hidden to prevent horizontal scrolling
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.documentElement.style.overflowX = '';
            document.body.style.overflowX = '';
        };
    }, [windowWidth]);

    // Handle toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    // Dynamic navbar height based on scroll position and screen size
    const getNavbarWidth = () => {
        if (windowWidth <= 320) {
            return scrollPosition > 50 ? "320px" : "320px";
        } 
        else if (windowWidth <= 375) {
            return scrollPosition > 50 ? "380px" : "380px";
        } 
        // else if (windowWidth <= 768) {
        //     return scrollPosition > 50 ? "450px" : "450px";
        // }
        return "auto";
    };    

    return (
        <div className="overflow-hidden w-full">
            <div id="navbar"
                style={{ 
                    backgroundColor,
                    width: "100%",
                    width: getNavbarWidth(),
                    overflowX: "hidden"
                }}
                className="fixed top-0 inset-x-0 flex items-center z-99 w-full transition-all py-2">
                <div className="container mx-auto max-w-screen-xl">
                    <nav className="flex items-center w-full">
                        <div className="flex items-center">
                            <Link to="/" >
                                <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-20" />
                            </Link>
                            <Link to="/">
                                <h1 className="ml-3 text-xl font-semibold text-black">
                                    PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                                </h1>
                            </Link>
                        </div>

                        <div className="hidden lg:block ms-auto">
                            <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={location.pathname === "/" ? { color: "#2563EB" } : {}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" style={location.pathname === "/about" ? { color: "#2563EB" } : {}}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" style={location.pathname === "/contact" ? { color: "#2563EB" } : {}}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:flex items-center ms-3">
                            <Link to="/login"
                                className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">Login</Link>
                        </div>

                        <div className="lg:hidden flex items-center ms-auto px-2.6">
                            <button 
                                type="button" 
                                className="py-3 px-4 inline-flex items-center"
                                onClick={toggleMobileMenu}
                            >
                                <i className="i-fa6-solid-bars text-2xl text-default-500"></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[70]"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 start-0 transition-transform duration-300 transform h-full max-w-xs w-full z-[99] bg-white border-e ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div>
                    <div className="flex flex-col h-full divide-y-2 divide-default-200">
                        <div className="p-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <Link to="/" onClick={toggleMobileMenu}>
                                    <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-20" />
                                </Link>
                                <Link to="/" onClick={toggleMobileMenu}>
                                    <h1 className="ml-3 text-xl font-semibold text-black">
                                        PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                                    </h1>
                                </Link>
                            </div>

                            <button 
                                type="button"
                                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Close</span>
                                <i className="i-fa6-solid-xmark text-xl"></i>
                            </button>
                        </div>

                        <div className="p-6 overflow-scroll h-full">
                            <ul className="navbar-nav flex flex-col gap-2">
                                <li className="nav-item">
                                    <Link 
                                        to="/" 
                                        className="nav-link" 
                                        style={location.pathname === "/" ? { color: "#2563EB" } : {}}
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/about" 
                                        className="nav-link" 
                                        style={location.pathname === "/about" ? { color: "#2563EB" } : {}}
                                        onClick={toggleMobileMenu}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/contact" 
                                        className="nav-link" 
                                        style={location.pathname === "/contact" ? { color: "#2563EB" } : {}}
                                        onClick={toggleMobileMenu}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 flex items-center justify-center">
                            <Link 
                                to="/login"
                                className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm"
                                onClick={toggleMobileMenu}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLanding;