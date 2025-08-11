import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

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
        <h1 className="text-3xl font-bold mb-6">🎯 Goals & Habits Tracker</h1>
        
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <input
              type="text"
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              placeholder="Enter your goal..."
              className="border rounded-md px-3 py-2 col-span-2"
            />
            <input
              type="time"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className="border rounded-md px-3 py-2"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border rounded-md px-3 py-2"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <button
            onClick={addGoal}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Goal
          </button>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
          {goals.length === 0 ? (
            <p className="text-gray-500">No goals added yet.</p>
          ) : (
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <p
                      className={
                        goal.done
                          ? "line-through text-gray-500"
                          : "text-lg font-medium"
                      }
                    >
                      {goal.text}{" "}
                      <span className="text-sm text-gray-400">
                        ({goal.priority} priority)
                      </span>
                    </p>
                    {goal.reminder && (
                      <p className="text-sm text-gray-400">
                        ⏰ Reminder: {goal.reminder}
                      </p>
                    )}
                    <p className="text-xs text-green-500">
                      🔥 Streak: {goal.streak} days
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleDone(index)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      {goal.done ? "Undo" : "Done"}
                    </button>
                    <button
                      onClick={() => deleteGoal(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="font-medium">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Goals;
