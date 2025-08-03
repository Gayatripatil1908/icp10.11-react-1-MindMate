import React, { useState } from 'react';
import { FaSmile, FaFrown, FaMeh, FaAngry, FaTired } from 'react-icons/fa';

const MoodTracker = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalMood, setFinalMood] = useState(null);

  const questions = [
    "Did you sleep well last night?",
    "Do you feel energetic today?",
    "Are you excited about anything today?",
    "Have you felt stressed recently?",
    "Do you feel like talking to someone right now?"
  ];

  const options = ['Yes', 'No'];

  const moodsMap = {
    'Happy': <FaSmile color="orange" size={48} />,
    'Sad': <FaFrown color="blue" size={48} />,
    'Neutral': <FaMeh color="gray" size={48} />,
    'Angry': <FaAngry color="red" size={48} />,
    'Tired': <FaTired color="purple" size={48} />
  };

  const calculateMood = () => {
    const yesCount = answers.filter(a => a === 'Yes').length;
    const noCount = answers.length - yesCount;

    if (yesCount >= 4) return 'Happy';
    if (yesCount === 3) return 'Neutral';
    if (yesCount === 2) return 'Tired';
    if (yesCount === 1) return 'Sad';
    return 'Angry';
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const mood = calculateMood(updatedAnswers);
      setFinalMood(mood);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mood Tracker</h2>

      {!finalMood ? (
        <div style={styles.questionBox}>
          <p style={styles.question}>{questions[questionIndex]}</p>
          <div style={styles.options}>
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={styles.button}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.resultBox}>
          <p style={styles.resultText}>Your mood today is:</p>
          <div>{moodsMap[finalMood]}</div>
          <h3 style={{ marginTop: '1rem' }}>{finalMood}</h3>
        </div>
      )}
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', sans-serif",
    background: '#fff0f6',
    minHeight: '80vh'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#d6336c'
  },
  questionBox: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'inline-block'
  },
  question: {
    fontSize: '1.2rem',
    marginBottom: '1rem'
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#ffccd5',
    color: '#333',
    fontWeight: 'bold'
  },
  resultBox: {
    backgroundColor: '#fff3f6',
    padding: '2rem',
    borderRadius: '1rem',
    display: 'inline-block',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)'
  },
  resultText: {
    fontSize: '1.2rem',
    marginBottom: '1rem'
  }
};

export default MoodTracker;
