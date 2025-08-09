// Dashboard.js
import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar';

function Dashboard() {
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      toast(`😉 Welcome, ${username}!`,{
        style: {
          border: '1px solid #159ab7',
          padding: '6px',
          color: '#1e5067'
            }}
          );
        }
      }, []);

  return (
    <div>
      <Navbar />
    <div className="min-h-screen p-4 bg-gray-50">
      <Toaster /> 
      <h1 className="text-3xl font-bold">MINDMATE DASHBOARD</h1>
    </div>
    </div>
  );
}

export default Dashboard;
