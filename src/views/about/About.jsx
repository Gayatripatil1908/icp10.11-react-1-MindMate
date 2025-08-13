import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar"; // Ensure the same Navbar component is imported

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
    
        <section className="about-section">
          <h2>🌟 Our Mission</h2>
          <p>
            At MindMate, We believe that mental health is just as important as
            physical health. Our mission is to make mental wellness accessible,
            private, and easy for everyone. By combining mood tracking,
            journaling, and AI-powered conversations, we help you build a deeper
            connection with yourself — one day at a time.
          </p>
        </section>

        <section className="about-section">
          <h2>💡 What We Offer</h2>
          <ul>
            <li>🤖 AI Chat Support – A friendly AI companion to listen and guide you.</li>
            <li>📈 Mood Tracking – Understand your emotional patterns over time.</li>
            <li>📓 Smart Journaling – Express your thoughts and get meaningful reflections.</li>
            <li>📊 Mood Trends – Visual graphs and insights into your mental well-being.</li>
            <li>🔒 Privacy First – Your data stays yours, always.</li>
          </ul>
        </section>

       
      </div>
    </>
  );
};

export default About;
