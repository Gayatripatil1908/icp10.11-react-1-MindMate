import React, { useState } from "react";

function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <form className="grid gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Profile Picture</label>
              <input type="file" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
          </form>
        </section>

        {/* Account Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <form className="grid gap-4">
            <div>
              <label className="block mb-1 font-medium">New Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update Password</button>
          </form>
        </section>

        {/* Preferences */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Enable Notifications</span>
            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="toggle-checkbox" />
          </div>
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
    </div>
  );
}
export default Setting;
