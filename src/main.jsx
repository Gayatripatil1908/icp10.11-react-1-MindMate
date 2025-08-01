import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './views/home/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />

    
  </StrictMode>,
)
