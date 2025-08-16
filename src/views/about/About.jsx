import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";

import Gayatri from "../../assets/Gayatri.jpg";
import Samarth from "../../assets/Samarth.jpg";
import Shreya from "../../assets/Shreya.jpg";
import Ganesh from "../../assets/Ganesh.jpg";
import Prayag from "../../assets/Prayag.jpg";
import Shravani from "../../assets/Shravani.jpg";


const About = () => {
  const team = [
    { name: "Gayatri", img: Gayatri },
    { name: "Samarth", img: Samarth },
    { name: "Shreya",  img: Shreya },
    { name: "Shravani", img: Shravani },
    { name: "Ganesh", img: Ganesh },
    { name: "Prayag",  img: Prayag },
  ];

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
            connection with yourself one day at a time.
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

        <section className="about-section">
          <h2>❣️ Why Choose MindMate?</h2>
          <p>
            Unlike traditional mood tracker apps, MindMate uses AI to provide
            gentle insights and personalized affirmations. It’s designed with a
            calm, minimal interface to make tracking your emotions feel effortless —
            not like a chore.
          </p>
        </section>

        <section className="about-section">
          <h2>🤝 Our Promise</h2>
          <ul>
            <li>100% Data Privacy – No third-party sharing.</li>
            <li>AI that listens, not judges.</li>
            <li>Simple and user-friendly design.</li>
            <li>Accessible to everyone, free to start.</li>
          </ul>
        </section>

        {/* OUR TEAM — 3 cards per row like your screenshot */}
        <section className="about-section team">
          <h2> Our Team </h2>
          <p className="team-sub">We’re a small crew built MindMate.</p>

          <div className="team-grid">
            {team.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="avatar-wrap">
                  <img src={m.img} alt={m.name} className="avatar" />
                </div>
                <h3 className="member-name">{m.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
