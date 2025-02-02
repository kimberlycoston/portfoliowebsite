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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="about-buttons">
              <button className="btn">Resume</button>
              <button className="btn">Portfolio</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about-second" className="about-second-section">
  <div className="about-title-container">
    <h1 className="about-title2 text-outline">CONNECTING<br />THE DOTS</h1>
  </div>
  <div className="about-title-container">
    <h1 className="about-title3">BETWEEN<br /> NURSING<br /> AND INNOVATION</h1>
  </div>
</section>

    </>
  );
};

export default About;
