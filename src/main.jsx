import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';
import Contact from './views/contact/Contact.jsx';
import Dashboard from './views/dashboard/Dashboard.jsx';
import Login from './views/login/Login.jsx';
import Goals from './views/goals/goals.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Setting from './views/setting/Setting.jsx';



createRoot(document.getElementById('root')).render(
  <Router>
    <>
    
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Settings" element={<Setting />} />
      </Routes>

      
    </>
  </Router>
);
