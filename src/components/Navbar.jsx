import React from 'react'
import './Navbar.css'; 
import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <NavLink exact to="/" className='nav-logo'>
                MindMate 
            </NavLink>

            <ul className='nav-menu'>
                <li className='nav-item'>
                    <NavLink exact to="/"  className='nav-links'> Home
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/About"  className='nav-links'> About
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/"  className='nav-links'> Home
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/Login"  className='nav-links'> Login
                    </NavLink>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar;