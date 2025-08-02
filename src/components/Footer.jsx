import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex items-center space-x-2">
          <img src="/src/assets/MindMate_Logo.png" alt="MindMate Logo" className="h-8 w-8" />
          <span className="font-bold text-lg text-white">MindMate</span>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
            <li><Link to="/goals" className="hover:text-white transition">Goals</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
          </ul>
        </nav>
        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} MindMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;