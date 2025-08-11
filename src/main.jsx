import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';
import Dashboard from './views/dashboard/Dashboard.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/login/Register.jsx';
import Goals from './views/goals/goals.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Setting from './views/setting/Setting.jsx';
import CheckInHistory from './views/dashboard/CheckinHistory.jsx';



createRoot(document.getElementById('root')).render(
  <Router>
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/checkin-history" element={<CheckInHistory />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>

      
    </>
  </Router>
);
