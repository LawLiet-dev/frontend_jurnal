import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useAuthStore } from "../store/auth";

function HeaderTeacher() {
  const { user, logout } = useAuthStore();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    
    // States for dropdown menus
    const [isDesktopProfileOpen, setIsDesktopProfileOpen] = useState(false);
    const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  
    // Refs
    const sidebarRef = useRef(null);
    const hamburgerRef = useRef(null);
    const desktopDropdownRef = useRef(null);
    const desktopProfileButtonRef = useRef(null);
    const mobileDropdownRef = useRef(null);
    const mobileProfileButtonRef = useRef(null);
  
    // Event Handlers
    const handleDesktopProfileClick = () => {
      setIsDesktopProfileOpen(!isDesktopProfileOpen);
    };
  
    const handleMobileProfileClick = () => {
      setIsMobileProfileOpen(!isMobileProfileOpen);
    };
  
    const handleHamburgerClick = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    // Click outside handlers
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Handle desktop profile dropdown
        if (
          isDesktopProfileOpen &&
          desktopDropdownRef.current &&
          !desktopDropdownRef.current.contains(event.target) &&
          !desktopProfileButtonRef.current?.contains(event.target)
        ) {
          setIsDesktopProfileOpen(false);
        }
  
        // Handle mobile profile dropdown
        if (
          isMobileProfileOpen &&
          mobileDropdownRef.current &&
          !mobileDropdownRef.current.contains(event.target) &&
          !mobileProfileButtonRef.current?.contains(event.target)
        ) {
          setIsMobileProfileOpen(false);
        }
  
        // Handle sidebar
        if (
          isSidebarOpen &&
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target) &&
          !hamburgerRef.current?.contains(event.target)
        ) {
          setIsSidebarOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDesktopProfileOpen, isMobileProfileOpen, isSidebarOpen]);

    useEffect(() => {
      const handleScroll = () => setIsNavbarFixed(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const logoutHandler = () => {
    logout();
    navigate('/');
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
              <h1 className="text-xl font-semibold text-black">
                PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
            {/* button */}
            <a className="bg-orange-300 text-white px-4 py-2 rounded inline-flex items-center text-sm">Teacher</a>
              <div className="relative ml-auto z-40">
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
                      <div className="ml-5">
                        <h5 className="text-lg font-semibold text-gray-800">{user?.name || 'User'}</h5>
                        <span className="block text-gray-600 text-sm mb-1">{user?.role || 'Teacher'}</span>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Mail className="w-4 h-4 mr-2" />
                            {user?.email || 'email@example.com'}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 space-y-2">
                      <button 
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                        onClick={logoutHandler}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <Link
              to="/teacher/*"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Dashboard
            </Link>
            <Link
              to="/siswa/*"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Siswa
            </Link>
            <Link
              to="/journal/*"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              jurnal
            </Link>
          </div>
        </nav>
      </div>

      <div className={`md:hidden ${isNavbarFixed ? "py-2" : "py-4"}`}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <img
                src="/assets/images/smk.png"
                alt="Logo SMKN 1 Kraksaan"
                className="w-8 h-8"
              />
              <h1 className="text-lg font-semibold text-black ml-2">
                PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
              </h1>
            </div>
            
            {/* Hamburger Button */}
            <button 
              ref={hamburgerRef}
              className="text-black p-2 focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Sidebar */}
        <div 
          ref={sidebarRef}
          className={`fixed top-0 left-0 z-40 bottom-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
            </div>

            {/* User Profile Section */}
            <div className="mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/assets/images/profile/user-7.jpg" 
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{user?.name || 'User'}</p>
                  <p className="text-sm text-gray-500">{user?.role || 'Teacher'}</p>
                </div>
                <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                style={{ marginLeft:"90px" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              <Link
                to="/teacher/*"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/siswa/*"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Siswa
              </Link>
              <Link
                to="/journal/*"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Jurnal
              </Link>
            </nav>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <button
                onClick={logoutHandler}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default HeaderTeacher;