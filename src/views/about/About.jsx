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

       
      </div>
    </>
  );
};

export default About;
