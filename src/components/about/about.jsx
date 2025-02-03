import React from "react";
import "./about.css"; // Create this CSS file for styling

const About = () => {
  return (
    <>
      {/* First Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img
              src="/src/assets/headshot.png" // Replace with your image path
              alt="Headshot"
            />
          </div>
          <div className="about-text">
            <h1 className="about-title text-outline">ABOUT ME</h1>
            <p>
            I’m Kimberly Coston, a registered nurse in the cardiac intensive care unit at Duke University Hospital and a graduate student at Duke University in the Master of Engineering in Design and Technology Innovation program. My work bridges nursing, design, and technology, with a focus on creating solutions that improve efficiency, enhance the nursing experience, and solve real-world problems in healthcare.            </p>
            <p>
            I firmly believe that if you understand the problem, you can find a solution—even if you don’t know how to build it yet. That’s what I love the most: figuring it out. Whether it’s programming, hardware, or artificial intelligence, I thrive on learning new skills quickly and working backwards from a vision to bring ideas to life.            </p>
            <p>
            I value user-centered design and believe the best solutions come from those closest to the problem. I prioritize efficiency, having seen firsthand that time is healthcare's most valuable resource. And above all, I love the process of learning—especially when it means transforming a frustrating problem into a solution that makes people’s lives easier.            </p>
            <div className="about-buttons">
            <a href="https://drive.google.com/file/d/1e4_0sJroot_Mt_LRlIxCP5WQU5W2ZWPd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">
            Resume
            </a>
              <button className="btn">Portfolio</button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
