import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/login/Register.jsx';
import Goals from './views/goals/goals.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Setting from './views/setting/Setting.jsx';
import CheckinHistory from './views/dashboard/CheckinHistory.jsx';



createRoot(document.getElementById('root')).render(
  <Router>
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/dashboard" element={<CheckinHistory />} />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>

      
    </>
  </Router>
);
