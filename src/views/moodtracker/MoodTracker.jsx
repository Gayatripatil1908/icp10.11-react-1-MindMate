import React, { useState } from 'react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: '😄', label: 'Happy' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😠', label: 'Angry' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😰', label: 'Anxious' },
  ];

  return (
    <>
      {/* Page Content */}
      <div className="mood-tracker">
        <h2>How are you feeling today?</h2>
        <p>Select your mood below:</p>
        <div className="mood-options">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className={`mood-btn ${selectedMood === mood.label ? 'selected' : ''}`}
              onClick={() => setSelectedMood(mood.label)}
            >
              <span role="img" aria-label={mood.label}>
                {mood.emoji}
              </span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <p className="selected-mood">You selected: <strong>{selectedMood}</strong></p>
        )}
      </div>

      {/* CSS Styling */}
      <style>
        {`
          .mood-tracker {
            text-align: center;
            padding: 2rem;
            min-height: 80vh;
            background-color: #fdfdfd;
            font-family: 'Segoe UI', sans-serif;
          }

          .mood-tracker h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .mood-tracker p {
            color: #555;
          }

          .mood-options {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
          }

          .mood-btn {
            font-size: 2rem;
            padding: 1rem;
            border: none;
            background-color: #eee;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .mood-btn:hover {
            transform: scale(1.2);
          }

          .mood-btn.selected {
            background-color: #ffd1dc;
            transform: scale(1.2);
          }

          .selected-mood {
            margin-top: 2rem;
            font-size: 1.2rem;
            color: #222;
          }
        `}
      </style>
    </>
  );
};

export default MoodTracker;
