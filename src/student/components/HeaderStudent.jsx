import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import Select from "react-select"; // Import react-select

function HeaderStudent() {
  const [setIsNavbarFixed] = useState(false);
  
  // Desktop states and refs
  const [isDesktopProfileOpen, setIsDesktopProfileOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const desktopProfileButtonRef = useRef(null);

  // Mobile states and refs
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const mobileDropdownRef = useRef(null);
  const mobileProfileButtonRef = useRef(null);

  // State for setting modal visibility
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

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

  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true); // Show the modal on button click
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false); // Close the modal
  };

  const handleSaveSettings = () => {
    // Handle saving settings
    console.log("Settings saved!");
    setIsSettingsModalOpen(false); // Close the modal after saving
  };

  // Options for DUDI and Pembimbing Select
  const dudiOptions = [
    { value: 'dudi1', label: 'DUDI 1' },
    { value: 'dudi2', label: 'DUDI 2' },
    { value: 'dudi3', label: 'DUDI 3' }
  ];

  const pembimbingOptions = [
    { value: 'pembimbing1', label: 'Pembimbing 1' },
    { value: 'pembimbing2', label: 'Pembimbing 2' },
    { value: 'pembimbing3', label: 'Pembimbing 3' }
  ];

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
              <a className="bg-orange-300 text-white px-4 py-2 rounded inline-flex items-center text-sm">Student</a>
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
                      <button 
                        className="w-full bg-primary hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                        onClick={handleSettingsClick} // Open the settings modal
                      >
                        Setting
                      </button>
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
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <a
              href="dashboardsiswa"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Dashboard
            </a>
            <a
              href="jurnal"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              jurnal
            </a>
          </div>
        </nav>
      </div>

      {/* Settings Modal Pop-Up */}
      {isSettingsModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 relative"> {/* Mengatur lebar modal */}
      
      {/* Close Icon (di pojok kanan atas) */}
      <button 
        onClick={handleCloseSettingsModal} 
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      {/* Gambar di atas select2 */}
      <div className="mb-4 text-center">
        <img
          src="/assets/images/smk.png"
          alt="Settings Icon"
          className="w-30 h-30 mx-auto mb-4"
        />
      </div>

      {/* Select2 for DUDI */}
      <div className="mb-4">
        <label htmlFor="dudi-select" className="block text-sm font-medium text-gray-600 mb-2">Silahkan pilih Dudi anda</label>
        <Select
          id="dudi-select"
          options={dudiOptions}
          placeholder="Pilih Dudi"
        />
      </div>

      {/* Select2 for Pembimbing */}
      <div className="mb-4">
        <label htmlFor="pembimbing-select" className="block text-sm font-medium text-gray-600 mb-2">Silahkan pilih Pembimbing anda</label>
        <Select
          id="pembimbing-select"
          options={pembimbingOptions}
          placeholder="Pilih Pembimbing"
        />
      </div>

      {/* Buttons: Simpan and Batal */}
      <div className="flex space-x-4 mt-5">
        <button
          onClick={handleSaveSettings}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-5"
        >
          Simpan Pilihan
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default HeaderStudent;
