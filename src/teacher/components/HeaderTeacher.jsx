import React, { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";

function HeaderTeacher() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  
  // Desktop states and refs
  const [isDesktopProfileOpen, setIsDesktopProfileOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const desktopProfileButtonRef = useRef(null);

  // Mobile states and refs
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const mobileDropdownRef = useRef(null);
  const mobileProfileButtonRef = useRef(null);

  // Handle navbar fixed on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop click outside handler
  useEffect(() => {
    const handleDesktopClickOutside = (event) => {
      if (
        isDesktopProfileOpen && 
        desktopDropdownRef.current && 
        !desktopDropdownRef.current.contains(event.target) &&
        !desktopProfileButtonRef.current.contains(event.target)
      ) {
        setIsDesktopProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDesktopClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleDesktopClickOutside);
    };
  }, [isDesktopProfileOpen]);

  // Mobile click outside handler
  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      if (
        isMobileProfileOpen && 
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(event.target) &&
        !mobileProfileButtonRef.current.contains(event.target)
      ) {
        setIsMobileProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMobileClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleMobileClickOutside);
    };
  }, [isMobileProfileOpen]);

  const handleDesktopProfileClick = () => {
    setIsDesktopProfileOpen(!isDesktopProfileOpen);
  };

  const handleMobileProfileClick = () => {
    setIsMobileProfileOpen(!isMobileProfileOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Header untuk Desktop */}
      <div className="hidden md:block">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <img
                src="/assets/images/smk.png"
                alt="Logo SMKN 1 Kraksaan"
                className="w-12 h-12"
              />
              <h1 className="ml-3 text-xl font-semibold text-black">
                PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
              </h1>
            </div>
            <div className="relative ml-auto">
              {/* Desktop Profile Button */}
              <div 
                className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleDesktopProfileClick}
                ref={desktopProfileButtonRef}
              >
                <img 
                  alt="User profile picture" 
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
                  src="/assets/images/profile/user-7.jpg" 
                />
              </div>

              {/* Desktop Dropdown Menu */}
              <div 
                ref={desktopDropdownRef}
                className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                  isDesktopProfileOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="text-xl font-semibold text-gray-800">User Profile</h5>
                  </div>
                  <div className="flex items-center pb-4 border-b border-gray-200">
                    <img 
                      src="/assets/images/profile/user-7.jpg" 
                      className="rounded-full w-16 h-16 border-2 border-gray-200 object-cover"
                      alt="Profile"
                    />
                    <div className="ml-4">
                      <h5 className="text-lg font-semibold text-gray-800">Farel</h5>
                      <span className="block text-gray-600 text-sm mb-1">RPL</span>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Farel@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <a
              href="teacher"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Dashboard
            </a>
            <a
              href="siswa"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              siswa
            </a>
          </div>
        </nav>
      </div>

      {/* Header untuk Mobile & Tablet */}
      <div className={`block md:hidden ${isNavbarFixed ? "py-2" : "py-4"}`}>
        <div className="flex justify-between items-center px-6">
          {/* Tombol Hamburger di kiri */}
          <div className="text-center">
            <button 
              className="text-black"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <div 
                id="drawer-navigation" 
                className="fixed top-0 left-0 z-40 w-75 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white" 
                tabIndex="-1" 
                aria-labelledby="drawer-navigation-label"
              >
                <div className="flex item-center">
                  <img src="/assets/images/icons/smk.png" alt="smk" className="w-9 h-12" />
                  <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase my-auto">
                    PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                  </h5>
                </div>
                <button 
                  type="button" 
                  data-drawer-hide="drawer-navigation" 
                  aria-controls="drawer-navigation" 
                  className="text-gray-400 bg-transparent mt-3 hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-blue-500"
                >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
            <div className="border border-b-gray-500"></div>
                <div className="py-4 overflow-y-auto">
                  <ul className="space-y-2 font-medium">
                    <li>
                      <a href="teacher" className="flex items-center p-2 text-black rounded-lg hover:bg-blue-500 hover:text-white group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Dashboard</span>
                      </a>
                    </li>
                    <li>
                        <a href="siswa" className="flex items-center p-2 text-black rounded-lg hover:bg-blue-500 group">
                          <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">Siswa</span>
                        </a>
                    </li>
                  </ul>
              </div>
          </div>

          {/* Mobile Profile Button and Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={handleMobileProfileClick}
              ref={mobileProfileButtonRef}
            >
              <img
                alt="User profile picture"
                className="h-10 w-10 rounded-full"
                src="/assets/images/profile/user-7.jpg"
              />
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
              ref={mobileDropdownRef}
              className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                isMobileProfileOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="p-6">
                <div className="mb-4">
                  <h5 className="text-xl font-semibold text-gray-800">User Profile</h5>
                </div>
                <div className="flex items-center pb-4 border-b border-gray-200">
                  <img 
                    src="/assets/images/profile/user-7.jpg" 
                    className="rounded-full w-16 h-16 border-2 border-gray-200 object-cover"
                    alt="Profile"
                  />
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold text-gray-800">Farel</h5>
                    <span className="block text-gray-600 text-sm mb-1">RPL</span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Farel@gmail.com
                    </div>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTeacher;