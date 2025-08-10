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


// import React, { useEffect } from 'react';
// import { toast, Toaster } from 'react-hot-toast';
// import Navbar from '../../components/Navbar';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Smile, Meh, Frown, Settings, LogOut } from 'lucide-react';

// function Dashboard() {
//   useEffect(() => {
//     const username = localStorage.getItem('username');
//     if (username) {
//       toast(`😉 Welcome, ${username}!`, {
//         style: {
//           border: '1px solid #159ab7',
//           padding: '6px',
//           color: '#1e5067'
//         }
//       });
//     }
//   }, []);

//   // Sample mood data for the graph
//   const moodData = [
//     { day: 'Mon', mood: 4 },
//     { day: 'Tue', mood: 3 },
//     { day: 'Wed', mood: 5 },
//     { day: 'Thu', mood: 2 },
//     { day: 'Fri', mood: 4 },
//     { day: 'Sat', mood: 5 },
//     { day: 'Sun', mood: 4 }
//   ];

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen p-6 bg-[#F5F5F5]">
//         <Toaster />
//         {/* Compulsory heading */}
//         <h1 className="text-3xl font-bold text-[#BE5985]">MINDMATE DASHBOARD</h1>

//         {/* Welcome Section */}
//         <section className="mt-6 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-xl font-semibold text-[#1e5067]">Hi Gayatri! 🌸 How are you feeling today?</h2>
//           <p className="text-gray-600 mt-2">
//             Let's take a step toward better mental wellness. You can track your mood, write in your journal, or read today’s affirmation.
//           </p>
//         </section>

//         {/* Mood Tracker */}
//         <section className="mt-6 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-lg font-semibold text-[#BE5985]">📈 How do you feel right now?</h2>
//           <div className="flex gap-4 mt-4">
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">😄</button>
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">🙂</button>
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">😐</button>
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">😟</button>
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">😫</button>
//             <button className="p-3 rounded-full hover:bg-[#F8E7F6]">😠</button>
//           </div>
//           <textarea
//             placeholder="Add a note... e.g., Had a long day at college"
//             className="mt-4 w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD88CF]"
//           />
//           <button className="mt-3 px-4 py-2 bg-[#BE5985] text-white rounded-lg hover:bg-[#a71c1c]">
//             Save Mood
//           </button>
//         </section>

//         {/* Mood Graph
//         <section className="mt-6 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-lg font-semibold text-[#BE5985]">📊 Your Mood This Week</h2>
//           <div className="mt-4" style={{ height: 250 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={moodData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis domain={[0, 5]} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="mood" stroke="#BE5985" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </section> */}

//         {/* Journal */}
//         <section className="mt-6 bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-lg font-semibold text-[#BE5985]">📓 Write in Your Journal</h2>
//           <textarea
//             placeholder="What’s on your mind today?"
//             className="mt-4 w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD88CF]"
//           />
//           <div className="flex justify-between mt-2 text-sm text-gray-500">
//             <span>Word count: 0</span>
//             <span>Tags: #gratitude #wellness</span>
//           </div>
//           <button className="mt-3 px-4 py-2 bg-[#BE5985] text-white rounded-lg hover:bg-[#a71c1c]">
//             Save Entry
//           </button>
//         </section>

//         {/* Daily Affirmation */}
//         <section className="mt-6 bg-white p-6 rounded-2xl shadow-md text-center">
//           <h2 className="text-lg font-semibold text-[#BE5985]">🌟 Today’s Affirmation</h2>
//           <p className="mt-2 text-gray-700 italic">“You are doing your best, and that is enough.”</p>
//           <button className="mt-3 px-4 py-2 bg-[#DD88CF] text-white rounded-lg hover:bg-[#a71c1c]">
//             Show me another
//           </button>
//         </section>

//         {/* Quick Stats */}
//         <section className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
//           <div className="bg-white p-4 rounded-2xl shadow text-center">
//             <p className="text-2xl font-bold text-[#BE5985]">23</p>
//             <p className="text-gray-500">Moods Logged</p>
//           </div>
//           <div className="bg-white p-4 rounded-2xl shadow text-center">
//             <p className="text-2xl font-bold text-[#BE5985]">15</p>
//             <p className="text-gray-500">Journal Entries</p>
//           </div>
//           <div className="bg-white p-4 rounded-2xl shadow text-center">
//             <p className="text-2xl font-bold text-[#BE5985]">🔥 4</p>
//             <p className="text-gray-500">Day Streak</p>
//           </div>
//           <div className="bg-white p-4 rounded-2xl shadow text-center">
//             <p className="text-2xl font-bold text-[#BE5985]">10</p>
//             <p className="text-gray-500">AI Chats</p>
//           </div>
//         </section>

//         {/* Settings & Logout */}
//         <div className="mt-8 flex justify-end gap-4">
//           <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
//             <Settings size={18} /> Settings
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//             <LogOut size={18} /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
