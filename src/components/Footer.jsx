import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold text-[#1e5067]">MindMate</h2>
          <p className="mt-2 text-sm">
            Your AI-powered mental wellness companion. Track your mood, journal, and grow every day.
          </p>
        </div>

        
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#features" className="hover:text-purple-600">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-600">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-purple-600">Testimonials</a></li>
            <li><a href="#get-started" className="hover:text-purple-600">Get Started</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-md font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#privacy" className="hover:text-purple-600">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-purple-600">Terms & Conditions</a></li>
            <li><a href="mailto:support@mindmate.com" className="hover:text-purple-600">support@mindmate.com</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} MindMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;