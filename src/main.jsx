import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/login/Login';
import Goals from './views/goals/goals';

import Navbar from './components/Navbar';
import Footer from './components/Footer';



createRoot(document.getElementById('root')).render(
  <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>

      <Footer />
    </>
  </Router>
);
