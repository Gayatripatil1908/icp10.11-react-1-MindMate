import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/MindMate_Logo.png';
import { Menu, X } from 'lucide-react';



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/Home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/goals', label: 'Goals' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <div className="sticky top-0 bg-[#1e5067] py-4 px-2 sm:px-4 md:px-8 lg:px-10 border-b-2 border-gray-700 shadow-md flex items-center justify-between z-50 text-[#cbd8df]">
      <span className="text-2xl sm:text-xl font-bold flex items-center cursor-pointer text-[#cbd8df]">
        <img src={imgLogo} alt="MindMate Logo" className="h-8 w-8 sm:h-10 sm:w-10 inline-block mr-2" />
        MindMate
      </span>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-4 sm:space-x-6 text-base sm:text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-orange-600 transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={() => setMenuOpen(false)}></div>
         
          <div className="absolute top-0 left-0 w-full bg-[#cdb4db] border-b-2 border-gray-700 shadow-md">
            <nav>
              <ul className="flex flex-col space-y-4 py-4 px-4 sm:px-8 text-base sm:text-lg">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-orange-600 transition-colors duration-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;