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
              src="/headshot2.png"
              alt="Headshot"
            />
          </div>
          <div className="about-text">
          <div className="about-title-container">
            <h1 className="about-title text-outline">ABOUT ME</h1>
            </div>
            <div className="about-content"></div>
            <p>
            I am a critical care nurse and design engineer-in-training passionate about bridging the gap between healthcare and technology.
            My career began at the bedside, where I saw firsthand the inefficiencies that impact both patients and healthcare staff.
            </p>
            <p>Rather than accepting these challenges as the norm, I sought solutions—turning frustration into innovation.</p>
            <p>
            Now, as a Master’s of Engineering student in Design & Technology Innovation at Duke,
            I’m expanding my ability to design scalable solutions that address real clinical pain points.
            </p>
            <p>
           I believe that truly effective solutions are those that not only improve day-to-day 
           workflow but also align with institutional and stakeholder priorities—ensuring adoption, scalability, and lasting impact. 
            </p>
            <p> 
            At my core, I am driven by the idea that better design leads to better care,
            and I am committed to building solutions that streamline processes,
            reduce inefficiencies, and empower healthcare workers—ultimately
            improving both staff and patient experiences.
            </p>
            {/* <div className="about-buttons">
              <button className="btn">Resume</button>
              <button className="btn">Portfolio</button>
            </div> */}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
