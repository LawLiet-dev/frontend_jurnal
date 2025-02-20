import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";

function HeaderTeacher() {
  const [setIsNavbarFixed] = useState(false);
  
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

  return (
    <div className="bg-gray-100">
      {/* Header untuk Desktop */}
      <div className="hidden md:block">
        <header className="bg-white shadow-sm container">
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
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-gray-800">Farel</h5>
                        <span className="block text-gray-600 text-sm mb-1">0023889765</span>
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
        </header>
        <nav className="bg-white shadow-sm container">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <a
              href="dashboardguru"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Dashboard
            </a>
            <a
              href="siswa"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Siswa
            </a>
            <a
              href="view"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              jurnal
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderTeacher;