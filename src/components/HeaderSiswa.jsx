import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import Select from "react-select";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import Cookies from "js-cookie";
import Api from "../services/api"
import { useAuthStore } from "../store/auth";

function HeaderSiswa() {
  const location = useLocation();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    student: null,
    teachers: [],
    dudis: [],
    approvalStatus: null 
  });
  
  // States for dropdown menus
  const [isDesktopProfileOpen, setIsDesktopProfileOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  
  // Selected values for DUDI and Teacher
  const [selectedDudi, setSelectedDudi] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [errors, setErrors] = useState({});

  // Refs
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const desktopProfileButtonRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileProfileButtonRef = useRef(null);
  const modalRef = useRef(null);

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

  // Fetch settings data
  const fetchSettings = async () => {
    try {
      const token = Cookies.get("token");
      
      if (!token) {
        console.error("No token found");
        return;
      }

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const settingsResponse = await Api.get("/api/settings");
      
      if (settingsResponse.data.status) {
        const { students, teacher, dudi } = settingsResponse.data.data;
        setStudentData({
          student: students,
          teachers: teacher,
          dudis: dudi,
          approvalStatus: students?.approval_status || 'pending' 
        });

        // Set initial selected values if they exist
        if (students?.dudis_id) {
          const currentDudi = dudi.find(d => d.id === students.dudis_id);
          if (currentDudi) {
            setSelectedDudi({ value: currentDudi.id, label: currentDudi.name });
          }
        }
        
        if (students?.teachers_id) {
          const currentTeacher = teacher.find(t => t.id === students.teachers_id);
          if (currentTeacher) {
            setSelectedTeacher({ value: currentTeacher.id, label: currentTeacher.name });
          }
        }
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      setErrors({ api: "Failed to fetch settings data" });
    }
  };

  // Handle settings update
  const handleSaveSettings = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrors({ auth: "No token found" });
        return;
      }

      const studentId = studentData.student?.id;
      if (!studentId) {
        setErrors({ student: "Student ID not found" });
        return;
      }

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      const response = await Api.put(`/api/setting/${studentId}`, {
        dudis_id: selectedDudi?.value,
        teachers_id: selectedTeacher?.value
      });

      if (response.data.status) {
        setIsSettingsModalOpen(false);
        fetchSettings();
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      setErrors(error.response?.data?.errors || { api: "Failed to save settings" });
    }
  };

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => setIsNavbarFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle PDF export
  const handleExportPDF = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        alert("Please log in to export PDF");
        return;
      }

      // Set up headers for PDF response
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get(`/api/export-pdf`, {
        responseType: 'blob',
        headers: {
          Accept: 'application/pdf'
        }
      });

      // Check if response is valid
      if (!(response.data instanceof Blob)) {
        throw new Error("Invalid response format");
      }

      // Create blob from response
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      
      // Generate filename with timestamp
      const timestamp = new Date().toISOString().split('T')[0];
      const fileName = `student-report-${timestamp}.pdf`;
      
      // Trigger download
      saveAs(pdfBlob, fileName);

    } catch (error) {
      console.error("Error exporting PDF:", error);
    }
  };

  // Initial data fetch
    useEffect(() => {
      fetchSettings();
    }, []);

  // Convert data to Select options
  const dudiOptions = studentData.dudis.map(dudi => ({
    value: dudi.id,
    label: dudi.name
  }));

  const teacherOptions = studentData.teachers.map(teacher => ({
    value: teacher.id,
    label: teacher.name
  }));

  // UI event handlers
  const handleSettingsClick = () => {
    if (!studentData.student?.id) {
      setErrors({ student: "Student data not loaded" });
      return;
    }
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
    setErrors({});
  };

  const logoutHandler = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-white">
      {/* Header untuk Desktop */}
      <div className="hidden md:block">
        <header className="bg-white shadow-lg border-b border-gray-200 relative z-10">
          <div className="container mx-auto flex justify-between items-center py-2 px-6">
            <div className="flex items-center">
              <img
                src="/assets/images/smk.png"
                alt="Logo SMKN 1 Kraksaan"
                className="w-12 h-30"
              />
              <h1 className="text-xl font-semibold text-black">
                PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Role badge */}
              <a className="bg-orange-300 text-white px-4 py-2 rounded inline-flex items-center text-sm">
                {user?.role || 'Student'}
              </a>
              <div className="relative ml-auto z-40">
                {/* Profile Button */}
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

                {/* Dropdown Menu */}
                {isDesktopProfileOpen && (
                  <div 
                    ref={desktopDropdownRef}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100"
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
                          <h5 className="text-lg font-semibold text-gray-800">{user?.name || 'User'}</h5>
                          <span className="block text-gray-600 text-sm mb-1">{studentData.student?.nisn || '-'}</span>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Mail className="w-4 h-4 mr-2" />
                            {user?.email || 'email@example.com'}
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 space-y-2">
                        <button 
                          className="w-full bg-primary hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                          onClick={handleSettingsClick}
                        >
                          Setting
                        </button>
                        <button 
                          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Navigation */}
        <nav className="bg-white mt-1">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <Link
              to="/student/*"
              // className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
              className={`px-4 py-2 ${
                location.pathname.includes("/student")
                  ? "shadow-lg bg-blue-500 text-white rounded-lg"
                  : "text-gray-600"
              } hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg`}
            >
              Dashboard
            </Link>
            <Link
              to="/jurnal/*"
              // className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
              className={`px-4 py-2 ${
                location.pathname.includes("/jurnal")
                  ? "shadow-lg bg-blue-500 text-white rounded-lg"
                  : "text-gray-600"
              } hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg`}
            >
              jurnal
            </Link>
            <button 
              onClick={handleExportPDF}  
              style={{ color:"#4B5563" }}
              className="px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg hover:bg-blue-500"
            >
              Export PDF
            </button>
          </div>
        </nav>
      </div>

      {/* Settings Modal */}
      {/* {isSettingsModalOpen && ( 
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 relative" ref={modalRef}>
          <button 
            onClick={handleCloseSettingsModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="mb-4 text-center">
            <img
              src="/assets/images/smk.png"
              alt="Settings Icon"
              className="w-30 h-30 mx-auto mb-4"
            />
          </div>

          {errors.api && (
            <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
              {errors.api}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="dudi-select" className="block text-sm font-medium text-gray-600 mb-2">
              Silahkan pilih Dudi anda
            </label>
            <Select
              id="dudi-select"
              options={dudiOptions}
              value={selectedDudi}
              onChange={setSelectedDudi}
              placeholder="Pilih Dudi"
              isSearchable
              className={errors.dudi ? "border-red-500" : ""}
            />
            {errors.dudi && <span className="text-red-500 text-sm">{errors.dudi}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="pembimbing-select" className="block text-sm font-medium text-gray-600 mb-2">
              Silahkan pilih Pembimbing anda
            </label>
            <Select
              id="pembimbing-select"
              options={teacherOptions}
              value={selectedTeacher}
              onChange={setSelectedTeacher}
              placeholder="Pilih Pembimbing"
              isSearchable
              className={errors.teacher ? "border-red-500" : ""}
            />
            {errors.teacher && <span className="text-red-500 text-sm">{errors.teacher}</span>}
          </div>

          <div className="flex space-x-4 mt-5">
            <button
              onClick={handleSaveSettings}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-5 hover:bg-blue-600 transition-colors"
              disabled={!selectedDudi || !selectedTeacher}
            >
              Simpan Pilihan
            </button>
          </div>
        </div>
      </div>
    )} */}
      {isSettingsModalOpen && ( 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/30 backdrop-blur-md z-50">
          <div 
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative"
            ref={modalRef}
          >
            <button 
              onClick={handleCloseSettingsModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="mb-4 text-center">
              <img
                src="/assets/images/smk.png"
                alt="Settings Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
            </div>

            {errors.api && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
                {errors.api}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="dudi-select" className="block text-sm font-medium text-gray-600 mb-2">
                Pilih Dudi Anda
              </label>
              <Select
                id="dudi-select"
                options={dudiOptions}
                value={selectedDudi}
                onChange={setSelectedDudi}
                placeholder="Pilih Dudi"
                isSearchable
                className={errors.dudi ? "border-red-500" : ""}
              />
              {errors.dudi && <span className="text-red-500 text-sm">{errors.dudi}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="pembimbing-select" className="block text-sm font-medium text-gray-600 mb-2">
                Pilih Pembimbing Anda
              </label>
              <Select
                id="pembimbing-select"
                options={teacherOptions}
                value={selectedTeacher}
                onChange={setSelectedTeacher}
                placeholder="Pilih Pembimbing"
                isSearchable
                className={errors.teacher ? "border-red-500" : ""}
              />
              {errors.teacher && <span className="text-red-500 text-sm">{errors.teacher}</span>}
            </div>

            <div className="flex space-x-4 mt-5">
              <button
                onClick={handleSaveSettings}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                disabled={!selectedDudi || !selectedTeacher}
              >
                Simpan Pilihan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header untuk Mobile & Tablet */}
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
              {/* <img
                src="/assets/images/smk.png"
                alt="Logo SMKN 1 Kraksaan"
                className="w-8 h-8"
              /> */}
              {/* <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 my-40 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button> */}
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
                  <p className="text-sm text-gray-500">{user?.role || 'Student'}</p>
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
                to="/student/*"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/jurnal/*"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Jurnal
              </Link>
              <button 
                onClick={handleExportPDF}  
                style={{ color:"#4B5563" }}
                className="px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg hover:bg-blue-500"
              >
                Export PDF
            </button>
            </nav>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <button
                onClick={handleSettingsClick}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-2"
              >
                Settings
              </button>
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

export default HeaderSiswa;