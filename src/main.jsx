import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/login/Register.jsx';
import Goals from './views/goals/goals.jsx';
import Setting from './views/setting/Setting.jsx';
import CheckinHistory from './views/dashboard/CheckinHistory.jsx';
import MoodTracker from './views/dashboard/MoodTracker.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/checkin-history" element={<CheckinHistory />} />
        <Route path="/dashboard" element={<MoodTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>      
    </>
  </Router>
);
