import React, { useState, useEffect } from 'react';
import '../../../public/assets/css/navbar.css';

export default function Navbar({ backgroundColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 bg-white transition-all z-100 shadow-md ${isNavbarFixed ? 'py-2' : 'py-4'}`} style={{ backgroundColor }}>
      <div className="flex justify-between items-center px-10">
        <div className="flex items-center">
          <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
          <h1 className="ml-3 text-xl font-semibold text-black">
            PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-6">
          <ul className="flex gap-x-6 text-sm font-medium text-black">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
          <a
            href="#"
            className="ml-6 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            LOGIN
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
            <button 
              id="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isMenuOpen ? 'hamburger-active' : ''}
              style={{
                position: 'absolute',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <nav id="nav-menu" 
                 style={{ display: isMenuOpen ? 'block' : 'none' }}>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">Contact</a>
                </li>
                <hr></hr>
                <li className="nav-item">
                    <a href="/login" className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
