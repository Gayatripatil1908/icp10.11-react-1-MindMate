import React, { useState } from 'react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [moodLog, setMoodLog] = useState([]);

  const moods = [
    { icon: 'fa-face-smile', label: 'Happy', color: '#FFD93D' },
    { icon: 'fa-face-frown', label: 'Sad', color: '#57C5B6' },
    { icon: 'fa-face-angry', label: 'Angry', color: '#FF6B6B' },
    { icon: 'fa-face-meh', label: 'Neutral', color: '#A3A3A3' },
    { icon: 'fa-face-surprise', label: 'Anxious', color: '#845EC2' },
  ];

  const handleSave = () => {
    if (!selectedMood) return;
    const newEntry = {
      mood: selectedMood,
      note,
      date: new Date(),
    };
    setMoodLog([newEntry, ...moodLog]);
    setSelectedMood(null);
    setNote('');
  };

  return (
    <>
      <div className="mood-tracker">
        <h2>How are you feeling today?</h2>
        <p>Select your mood below:</p>

        <div className="mood-options">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className={`mood-btn ${selectedMood === mood.label ? 'selected' : ''}`}
              onClick={() => setSelectedMood(mood.label)}
              title={mood.label}
              style={{ color: mood.color }}
            >
              <i className={`fa-solid ${mood.icon}`}></i>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="mood-input">
            <p className="selected-mood">
              You selected: <strong>{selectedMood}</strong>
            </p>
            <textarea
              placeholder="Add a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <br />
            <button onClick={handleSave} className="save-btn">Save Mood</button>
          </div>
        )}

        {moodLog.length > 0 && (
          <div className="mood-history">
            <h3>Your Mood Log</h3>
            <ul>
              {moodLog.map((entry, index) => (
                <li key={index}>
                  {entry.date.toLocaleDateString()} - <strong>{entry.mood}</strong>{entry.note && `: ${entry.note}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .mood-tracker {
          text-align: center;
          padding: 2rem;
          min-height: 80vh;
          background-color: #f9f9f9;
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
          gap: 1.2rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .mood-btn {
          font-size: 2rem;
          padding: 1rem;
          border: none;
          background-color: #fff;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }

        .mood-btn.selected {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }

        .mood-input {
          margin-top: 2rem;
        }

        textarea {
          margin-top: 1rem;
          width: 80%;
          min-height: 60px;
          padding: 0.5rem;
          border-radius: 5px;
          border: 1px solid #ccc;
          resize: vertical;
        }

        .save-btn {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #ff4d6d;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .save-btn:hover {
          background-color: #ff3355;
        }

        .selected-mood {
          margin-top: 1.5rem;
          font-size: 1.2rem;
          color: #222;
        }

        .mood-history {
          margin-top: 3rem;
          text-align: left;
          padding: 1rem;
          background: #fff;
          border-radius: 10px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 0 8px rgba(0,0,0,0.05);
        }

        .mood-history h3 {
          text-align: center;
          margin-bottom: 1rem;
        }

        .mood-history ul {
          list-style-type: none;
          padding-left: 0;
        }

        .mood-history li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </>
  );
};

export default MoodTracker;
