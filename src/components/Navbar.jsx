import React from 'react'
import './Navbar.css'; 
import imgLogo from '../assets/MindMate_Logo.png';


function Navbar() {
  return <div className="static top-0 bg-orange-200 py-4 px 10 border-b-2 border-gray-300 shadow-md ">
    <span className="text-xl font-bold text-gray-800 flex items-center">
        <img src={imgLogo} alt="MindMate Logo" className="h-10 w-10 inline-block mr-2" />
        MindMate
    </span>
  </div>
    
  
}

export default Navbar;