import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Button from "../../components/Button.jsx"; // ✅ Import custom button

function Goals() {
  const [darkMode, setDarkMode] = useState(false);
  const [goals, setGoals] = useState([]);
  const [goalText, setGoalText] = useState("");
  const [reminder, setReminder] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addGoal = () => {
    if (!goalText.trim()) return;
    setGoals([
      ...goals,
      { text: goalText, reminder, priority, done: false, streak: 0 },
    ]);
    setGoalText("");
    setReminder("");
    setPriority("Medium");
  };

  const toggleDone = (index) => {
    const updated = [...goals];
    updated[index].done = !updated[index].done;
    updated[index].streak = updated[index].done
      ? updated[index].streak + 1
      : updated[index].streak;
    setGoals(updated);
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  const sectionClass = darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-900";

  const inputClass = darkMode
    ? "bg-gray-700 text-white border-gray-600"
    : "bg-white text-gray-900 border-gray-300";

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* Page Title */}
        <h1 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          🎯 Goals & Habits Tracker
        </h1>

        {/* Add Goal Section */}
        <section className={`rounded-lg shadow-md p-6 mb-6 ${sectionClass}`}>
          <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <input
              type="text"
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              placeholder="Enter your goal..."
              className={`border rounded-md px-3 py-2 col-span-2 ${inputClass}`}
            />
            <input
              type="time"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className={`border rounded-md px-3 py-2 ${inputClass}`}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`border rounded-md px-3 py-2 ${inputClass}`}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="mt-4">
            <Button title="+ Add Goal" onClick={addGoal} />
          </div>
        </section>

        {/* Goals List */}
        <section className={`rounded-lg shadow-md p-6 mb-6 ${sectionClass}`}>
          <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
          {goals.length === 0 ? (
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
              No goals added yet.
            </p>
          ) : (
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between border-b pb-2 ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <div>
                    <p
                      className={
                        goal.done
                          ? darkMode
                            ? "line-through text-gray-400"
                            : "line-through text-gray-500"
                          : "text-lg font-medium"
                      }
                    >
                      {goal.text}{" "}
                      <span
                        className={darkMode ? "text-gray-400" : "text-gray-500"}
                      >
                        ({goal.priority} priority)
                      </span>
                    </p>
                    {goal.reminder && (
                      <p
                        className={darkMode ? "text-gray-400" : "text-gray-500"}
                      >
                        ⏰ Reminder: {goal.reminder}
                      </p>
                    )}
                    <p className="text-xs text-green-500">
                      🔥 Streak: {goal.streak} days
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      title={goal.done ? "Undo" : "Done"}
                      onClick={() => toggleDone(index)}
                    />
                    <Button
                      title="Delete"
                      onClick={() => deleteGoal(index)}
                      className="bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Preferences */}
        <section className={`rounded-lg shadow-md p-6 ${sectionClass}`}>
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="font-medium">Dark Mode</span>
            <Button
              title={darkMode ? "Light" : "Dark"}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Goals;
