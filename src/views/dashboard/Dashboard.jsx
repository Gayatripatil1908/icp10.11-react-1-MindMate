import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import {
  activitiesList,
  habitList,
  healthList,
  weatherList,
} from "../../Config/Dashboard";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mood, setMood] = useState("😊");
  const [sleep, setSleep] = useState(8);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [stress, setStress] = useState(3);
  const [energy, setEnergy] = useState(3);
  const [weather, setWeather] = useState("☀️");
  const [health, setHealth] = useState("💪");
  const [notes, setNotes] = useState("");
  const [doneHabits, setDoneHabits] = useState([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      toast(`😉 Welcome, ${storedUsername}!`, {
        style: {
          border: "1px solid #159ab7",
          padding: "6px",
          color: "#1e5067",
        },
      });
    }
  }, []);

  function toggleSelection(list, item, setFunction) {
    if (list.includes(item)) {
      setFunction(list.filter((i) => i !== item));
    } else {
      setFunction([...list, item]);
    }
  }

  const toggleHabit = (habit) => {
    setDoneHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  const handleSubmit = () => {
    const checkinData = {
      mood,
      sleep,
      selectedActivities,
      stress,
      energy,
      weather,
      health,
      notes,
      doneHabits,
      date: new Date().toLocaleString(),
    };

    const existingCheckins = JSON.parse(localStorage.getItem("checkins")) || [];
    existingCheckins.unshift(checkinData);

    localStorage.setItem("checkins", JSON.stringify(existingCheckins));

    toast.success("Check-in saved!");
    navigate("/checkin-history");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <Toaster />

      <div className="p-6 sm:mx-6 md:mx-12 rounded-xl shadow-lg mb-8 mt-7 bg-white max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1e5067] border-b-2 border-[#159ab7] pb-2">
            Hello{" "}
            <span className="text-orange-500 font-bold text-2xl sm:text-3xl">
              {username || "User"}
            </span>
            , how are you feeling today?
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-[#1e5067]">
              Select your mood
            </label>
            <div className="flex gap-3 flex-wrap">
              {["😊", "😔", "😟", "😠", "😐"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setMood(emoji)}
                  className={`px-3 py-2 rounded-lg text-2xl cursor-pointer ${
                    mood === emoji
                      ? "bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"
                      : "bg-gray-200 border border-gray-300"
                  } hover:bg-[#159ab7] transition`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Sleep */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[#1e5067]">
              Hours of Sleep Last Night
            </label>
            <input
              type="number"
              min="0"
              max="24"
              value={sleep}
              onChange={(e) => setSleep(e.target.value)}
              className="w-20 p-2 rounded border border-[#159ab7] focus:outline-none focus:ring-2 focus:ring-[#159ab7]"
            />{" "}
            hrs
          </div>

          {/* Activities */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[#1e5067]">
              What activities did you do today?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {activitiesList.map((act) => (
                <button
                  key={act.name}
                  onClick={() =>
                    toggleSelection(
                      selectedActivities,
                      act.name,
                      setSelectedActivities
                    )
                  }
                  className={`p-3 rounded-lg flex flex-col items-center cursor-pointer ${
                    selectedActivities.includes(act.name)
                      ? "bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"
                      : "bg-gray-200"
                  } hover:bg-[#159ab7] transition`}
                >
                  <span className="text-2xl">{act.icon}</span>
                  <span className="text-[15px] mt-1">{act.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stress & Energy */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-[#1e5067]">
                Stress Level
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={stress}
                onChange={(e) => setStress(e.target.value)}
                className="w-full accent-[#159ab7]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#1e5067]">
                Energy Level
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                className="w-full accent-[#159ab7]"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col sm:flex-row gap-6">
            {/* Weather */}
            <div className="flex-1">
              <label className="block mb-2 font-medium text-[#1e5067]">
                Weather Today
              </label>
              <div className="flex gap-4 flex-wrap">
                {weatherList.map((w) => (
                  <button
                    key={w.name}
                    onClick={() => setWeather(w.icon)}
                    className={`p-3 rounded-lg cursor-pointer ${
                      weather === w.icon
                        ? "bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"
                        : "bg-gray-200 border border-gray-300"
                    } hover:bg-[#159ab7] hover:text-white transition`}
                  >
                    {w.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Physical Health */}
            <div className="flex-1">
              <label className="block mb-2 font-medium text-[#1e5067]">
                Physical Health
              </label>
              <div className="flex gap-4 flex-wrap">
                {healthList.map((h) => (
                  <button
                    key={h.name}
                    onClick={() => setHealth(h.icon)}
                    className={`p-3 rounded-lg cursor-pointer ${
                      health === h.icon
                        ? "bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"
                        : "bg-gray-200 border border-gray-300"
                    } hover:bg-[#159ab7] hover:text-white transition`}
                  >
                    {h.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Habit Reminders */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 text-[#1e5067] border-b-2 border-[#159ab7] pb-2">
              Habit Reminders
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {habitList.map((habit) => {
                const Icon = habit.icon;
                return (
                  <div
                    key={habit.name}
                    className="p-5 rounded-xl shadow-lg bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] text-[#1e5067] flex flex-col items-center justify-between transition transform hover:scale-105"
                  >
                    <Icon size={40} />
                    <p className="mt-2 text-lg font-bold text-center">
                      {habit.name}
                    </p>
                    <button
                      onClick={() => toggleHabit(habit.name)}
                      className={`mt-4 flex items-center gap-1 px-3 py-1 rounded-full text-sm cursor-pointer font-medium transition-colors ${
                        doneHabits.includes(habit.name)
                          ? "bg-white text-green-600"
                          : "bg-white/20 text-white hover:bg-white/40"
                      }`}
                    >
                      <CheckCircle size={16} />
                      {doneHabits.includes(habit.name) ? "Done" : "Mark Done"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-[#1e5067]">
              Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any thoughts or reflections..."
              className="w-full p-3 rounded border border-[#159ab7] focus:outline-none focus:ring-2 focus:ring-[#159ab7] resize-none"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button onClick={handleSubmit} title="Submit Check-In" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;