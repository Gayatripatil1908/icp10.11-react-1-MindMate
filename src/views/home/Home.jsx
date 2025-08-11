
import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import Button from '../../components/Button.jsx';
import {Facebook, Twitter, Instagram} from 'lucide-react';
function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #cbd8df 0%, #9ac5d3 40%, #159ab7 70%, #1e5067 90%, #141e26 100%)' }}>
      <Navbar />

      <section className="py-20" style={{ background: '#cbd8df', color: '#141e26', boxShadow: '0 4px 24px #9ac5d340', borderBottom: '4px solid #9ac5d3' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#159ab7' }}>Your Personal AI Mental Wellness Companion</h1>
          <p className="text-xl mb-8">Track your mood, journal your thoughts, and talk to your AI friend — all in one place.</p>
          <div className="space-x-4">
            <Button title="Get Started" />
            <button style={{ background: '#141e26', color: '#cbd8df', border: '2px solid #1e5067', boxShadow: '0 2px 8px #141e2680' }} className="px-8 py-4 rounded-full font-bold transition-all duration-300 transition-transform duration-200 ease-out
                 hover:scale-105 active:scale-95">Learn More</button>
          </div>
        </div>
      </section>

      

      <section className="py-20" style={{ background: '#9ac5d3', color: '#141e26' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12" style={{ color: '#159ab7' }}>How MindMate Helps You Grow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300" style={{ background: '#cbd8df' }}>
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold" style={{ color: '#159ab7' }}>1. Track</h3>
              <p className="text-base mt-2">Log your mood daily with emojis or sliders.</p>
            </div>
            <div className="rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300" style={{ background: '#1e5067' }}>
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold" style={{ color: '#9ac5d3' }}>2. Reflect</h3>
              <p className="text-base mt-2">Write journal entries and receive insights.</p>
            </div>
            <div className="rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300" style={{ background: '#159ab7' }}>
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold" style={{ color: '#cbd8df' }}>3. Grow</h3>
              <p className="text-base mt-2">See patterns and build better emotional habits.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 my-8 rounded-full" style={{ background: 'linear-gradient(90deg, #9ac5d3, #159ab7, #1e5067, #141e26)' }}></div>

      <section className="py-20" style={{ background: '#159ab7', color: '#cbd8df' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: '#9ac5d3' }}>Start Your Mental Wellness Journey Today</h2>
          <p className="mb-8 text-lg">It's free, private, and designed with care.</p>
          <button style={{ background: '#141e26', color: '#cbd8df', boxShadow: '0 2px 8px #1e506780' }} className="px-8 py-4 rounded-full font-bold transition-all duration-300 transition-transform duration-200 ease-out
                 hover:scale-105 active:scale-95">Get Started</button>
        </div>
      </section>

      <div className="w-full h-2 my-8 rounded-full" style={{ background: 'linear-gradient(90deg, #159ab7, #1e5067, #141e26, #cbd8df)' }}></div>

      <section className="py-20" style={{ background: '#cbd8df', color: '#141e26' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12" style={{ color: '#159ab7' }}>What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" style={{ background: '#9ac5d3' }}>
              <p className="italic mb-4 text-lg">“MindMate helped me track my mood and improve my habits. Love the AI friend!”</p>
              <span className="font-semibold" style={{ color: '#159ab7' }}>— Priya</span>
            </div>
            <div className="p-8 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" style={{ background: '#1e5067' }}>
              <p className="italic mb-4 text-lg">“Journaling is so easy and insightful. Highly recommend!”</p>
              <span className="font-semibold" style={{ color: '#cbd8df' }}>— Rahul</span>
            </div>
            <div className="p-8 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 text-[#cbd8df]" style={{ background: '#141e26' }}>
              <p className="italic mb-4 text-lg">“The privacy and care in design make me feel safe.”</p>
              <span className="font-semibold" style={{ color: '#9ac5d3' }}>— Ananya</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 my-8 rounded-full" style={{ background: 'linear-gradient(90deg, #141e26, #cbd8df, #9ac5d3, #159ab7)' }}></div>

      <section className="py-20" style={{ background: '#9ac5d3', color: '#141e26' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-10 text-center" style={{ color: '#159ab7' }}>Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="rounded-xl shadow-lg p-6 hover:bg-[#cbd8df] transition-all duration-300">
              <h3 className="font-bold" style={{ color: '#159ab7' }}>Is MindMate free?</h3>
              <p className="text-base mt-2">Yes, MindMate is completely free to use.</p>
            </div>
            <div className="rounded-xl shadow-lg p-6 hover:bg-[#9ac5d3] transition-all duration-300">
              <h3 className="font-bold" style={{ color: '#1e5067' }}>Is my data private?</h3>
              <p className="text-base mt-2">Absolutely! Your data is private and secure.</p>
            </div>
            <div className="rounded-xl shadow-lg p-6 hover:bg-[#159ab7] transition-all duration-300">
              <h3 className="font-bold" style={{ color: '#cbd8df' }}>Can I talk to the AI friend anytime?</h3>
              <p className="text-base mt-2">Yes, your AI friend is available 24/7 for support.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 my-8 rounded-full" style={{ background: 'linear-gradient(90deg, #9ac5d3, #159ab7, #1e5067, #141e26)' }}></div>

      <section className="py-10 text-center" style={{ background: '#141e26', color: '#cbd8df' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#159ab7' }}>Connect with us</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9ac5d3' }} className="text-3xl transition-transform duration-300 hover:scale-125">
              <span role="img" aria-label="Facebook"><Facebook/></span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#159ab7' }} className="text-3xl transition-transform duration-300 hover:scale-125">
              <span role="img" aria-label="Twitter"><Twitter/></span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1e5067' }} className="text-3xl transition-transform duration-300 hover:scale-125">
              <span role="img" aria-label="Instagram"><Instagram/></span>
            </a>
          </div>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'linear-gradient(90deg, #159ab7, #9ac5d3)', color: '#141e26', boxShadow: '0 2px 8px #159ab780' }}
        className="fixed bottom-8 right-8 px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 font-bold text-lg"
        aria-label="Scroll to top"
      >
        ↑ Top
      </button>
      <Footer />
    </div>
  );
}


export default Home;
        
