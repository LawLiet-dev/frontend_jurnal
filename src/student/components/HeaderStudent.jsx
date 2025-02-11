import React, { useState, useEffect } from "react";

function HeaderStudent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsNavbarFixed(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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
            <div className="flex items-center space-x-4">
              <a href="list">
                <i className="fas fa-clipboard-list text-gray-500 mr-2"></i>
              </a> 
              <img
                alt="User profile picture"
                className="h-10 w-10 rounded-full"
                src="/assets/images/profile/user-1.jpg"
              />
            </div>
          </div>
        </header>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto flex space-x-4 py-2 px-6">
            <a
              href="/student"
              className="text-gray-600 px-4 py-2 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:rounded-lg"
            >
              Dashboard
            </a>
            <a
              href="/jurnal"
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
          <div style={{ display: "flex", alignItems: "center", padding: "0 1rem" }}>
            {/* Tombol Hamburger */}
            <button
              id="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isMenuOpen ? "hamburger-active" : ""}
              style={{
                position: "absolute",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            {/* Navigasi Mobile */}
            <nav
              id="nav-menu"
              style={{
                display: isMenuOpen ? "block" : "none",
                position: "absolute",
                right: "1rem",
                top: "60px",
                background: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "10px",
                zIndex: 50,
              }}
            >
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a
                    href="login"
                    className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderStudent