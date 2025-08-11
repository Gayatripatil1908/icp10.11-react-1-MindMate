import React from "react";
import Navbar from "../../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to <span className="highlight">Our Website</span>! We are passionate
          about creating innovative solutions that make life easier.
          Our team is committed to delivering high-quality products, excellent
          customer service, and continuous improvements.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🌟 Our Mission</h3>
            <p>
              To bring technology and creativity together to solve real-world
              problems effectively.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To be a trusted leader in innovation, inspiring the next generation
              of creators and thinkers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
