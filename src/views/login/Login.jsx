import React, { useState } from 'react';
import { CircleUserRound, UserRound, Eye, EyeOff } from 'lucide-react';
import { FaGoogle, FaFacebook, FaMicrosoft } from 'react-icons/fa';
import loginImage from '../../assets/Login.png';
import Navbar from '../../components/Navbar';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
  localStorage.setItem('username', username);

    toast.success('Login Successfully!', {
      duration: 1500
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1600);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl md:flex overflow-hidden">
          
          <div className="hidden md:block md:w-1/2">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="flex items-center justify-center gap-x-2 text-2xl font-bold text-[#1e5067] mb-6">
              <CircleUserRound className="w-6 h-6 relative top-[1px]" />
              Login
            </h2>
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Username</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-[#159ab7] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                  />
                  <UserRound className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1e5067] w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    className="w-full border border-[#159ab7] rounded-md px-4 py-2 pr-10 mb-4 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/3 -translate-y-1/2 text-[#1e5067] cursor-pointer focus:outline-none"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1e5067] cursor-pointer text-white font-semibold w-full py-2 mb-4 rounded-md hover:bg-[#159ab7] transition"
                >Login
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-[#159ab7] hover:text-[#ff0000] font-medium">
                Register here
              </a>
            </p>

            <div className="mt-6 flex justify-center gap-6 text-2xl">
              <a
                href="https://www.facebook.com/"
                className="text-[#3b5998] transition-transform duration-300 hover:scale-125"
                title="Login with Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.google.com/"
                className="text-[#DB4437] transition-transform duration-300 hover:scale-125"
                title="Login with Google"
              >
                <FaGoogle />
              </a>
              <a
                href="https://www.microsoft.com/en-in/"
                className="text-[#76c7ed] transition-transform duration-300 hover:scale-125"
                title="Login with Microsoft"
              >
                <FaMicrosoft />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}

export default Login;