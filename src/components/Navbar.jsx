import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import imgLogo from '../assets/MindMate_Logo.png';


function Navbar() {
  return (
    <div className="static top-0 bg-orange-200 py-4 px-10 border-b-2 border-gray-300 shadow-md flex items-center justify-between">
      <span className="text-xl font-bold text-gray-800 flex items-center">
        <img src={imgLogo} alt="MindMate Logo" className="h-10 w-10 inline-block mr-2" />
        MindMate
      </span>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link to="/dashboard" className="hover:text-orange-600">Dashboard</Link></li>
          <li><Link to="/goals" className="hover:text-orange-600">Goals</Link></li>
          <li><Link to="/login" className="hover:text-orange-600">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;