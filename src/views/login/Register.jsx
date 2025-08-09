import { UserRoundPlus } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import registerImage from '../../assets/Register.png';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import Button from '../../components/Button.jsx';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    toast.success('Registered Successfully!', {
      duration: 1500,
      position: 'top-center',
    });

    setTimeout(() => {
      navigate('/login');
    }, 1600);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2 py-10">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl md:flex overflow-hidden">

          <div className="hidden md:block md:w-1/2">
            <img
              src={registerImage}
              alt="Register"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="flex items-center justify-center gap-x-2 text-2xl font-bold text-[#1e5067] mb-6">
              <UserRoundPlus className="w-6 h-6 relative top-[1px]" />
              Register
            </h2>

            <form className="space-y-5" onSubmit={handleRegister}>
              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className="w-full border border-[#159ab7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                />
              </div>

              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className="w-full border border-[#159ab7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                />
              </div>

              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-[#159ab7] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full border border-[#159ab7] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/3 -translate-y-1/2 text-[#1e5067] cursor-pointer focus:outline-none"
                  >
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[#1e5067] font-semibold mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type='password'
                    required
                    placeholder="Confirm your password"
                    className="w-full border border-[#159ab7] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/3 -translate-y-1/2 text-[#1e5067] cursor-pointer focus:outline-none">
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="accent-[#1e5067] w-3 h-3 mt-1.5"
                  required
                />
                <label className="text-sm text-gray-700 mb-5">
                  I agree to the{' '}
                  <a href="/terms" className="text-[#1e5067] hover:text-[#ff0000] underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className="flex justify-center !w-full">
                <Button title="Register" />
              </div>
            </form>

            <p className="mt-7 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-[#159ab7] hover:text-[#ff0000] font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}

export default Register;
