// MoodTracker.jsx

import React, { useState } from "react";
import {
  FaSmile,
  FaFrown,
  FaAngry,
  FaMeh,
  FaTired,
} from "react-icons/fa";

const MoodTracker = () => {
  const questions = [
    "Did you get enough sleep?",
    "Are you feeling stressed today?",
    "Did you have any positive interactions today?",
  ];

  const moods = [
    { icon: <FaSmile color="#fdd835" />, label: "Happy" },
    { icon: <FaFrown color="#64b5f6" />, label: "Sad" },
    { icon: <FaAngry color="#e53935" />, label: "Angry" },
    { icon: <FaMeh color="#ffb74d" />, label: "Neutral" },
    { icon: <FaTired color="#9575cd" />, label: "Tired" },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [detectedMood, setDetectedMood] = useState(null);
  const [note, setNote] = useState("");

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = value;
    setAnswers(updatedAnswers);
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      detectMood(answers);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const detectMood = (answers) => {
    let score = 0;
    answers.forEach((a) => {
      if (a === "yes") score++;
    });

    if (score === 3) setDetectedMood("Happy");
    else if (score === 2) setDetectedMood("Neutral");
    else if (score === 1) setDetectedMood("Tired");
    else setDetectedMood("Sad");
  };

  return (
    <div className="tracker-container">
      <div className="card bounce-in">
        {!detectedMood ? (
          <div className="question-content">
            <h2>Mood Tracker</h2>
            <p>{questions[step]}</p>
            <div className="btn-group">
              <button
                className={answers[step] === "yes" ? "active" : ""}
                onClick={() => handleAnswer("yes")}
              >
                Yes
              </button>
              <button
                className={answers[step] === "no" ? "active" : ""}
                onClick={() => handleAnswer("no")}
              >
                No
              </button>
            </div>

            <div className="step-buttons">
              <button disabled={step === 0} onClick={prevStep}>
                ← Back
              </button>
              <button
                disabled={!answers[step]}
                onClick={nextStep}
              >
                {step === questions.length - 1 ? "Submit" : "Next →"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result-content">
            <h2>Your Mood</h2>
            <p>You might be feeling:</p>
            <h3>
              {moods.find((m) => m.label === detectedMood)?.icon} {detectedMood}
            </h3>

            <textarea
              placeholder="Add a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button
              onClick={() => {
                setStep(0);
                setAnswers(Array(questions.length).fill(null));
                setDetectedMood(null);
                setNote("");
              }}
            >
              Track Again
            </button>
          </div>
        )}
      </div>

      <style>{`
        .tracker-container {
          background-color: #F4F0FF;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }

        .bounce-in {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0% { transform: scale(0.95); opacity: 0; }
          50% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); }
        }

        .card {
          width: 100%;
          max-width: 500px;
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s;
        }

        h2 {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        p {
          text-align: center;
          font-size: 1.1rem;
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          margin-top: 1.5rem;
        }

        .btn-group button {
          padding: 0.7rem 1.4rem;
          font-size: 1rem;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          background-color: #ece4ff;
          transition: all 0.3s ease;
        }

        .btn-group button.active {
          background-color: #d1c4e9;
          font-weight: bold;
          border-color: #9575cd;
        }

        .btn-group button:hover {
          background-color: #e0d7ff;
          transform: translateY(-2px);
        }

        .step-buttons {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
        }

        .step-buttons button {
          padding: 0.7rem 1.4rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background-color: #9575cd;
          color: white;
          transition: all 0.3s ease-in-out;
        }

        .step-buttons button:hover {
          background-color: #7e57c2;
          transform: scale(1.05);
        }

        .step-buttons button:disabled {
          background-color: #d1c4e9;
          color: #666;
          cursor: not-allowed;
        }

        .result-content h3 {
          font-size: 1.6rem;
          margin: 1rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        textarea {
          display: block;
          width: 100%;
          margin: 1rem 0;
          padding: 0.6rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          resize: none;
        }

        .result-content button {
          display: block;
          margin: auto;
          background-color: #e53935;
          color: white;
          padding: 0.6rem 1.4rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .result-content button:hover {
          background-color: #d32f2f;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default MoodTracker;
