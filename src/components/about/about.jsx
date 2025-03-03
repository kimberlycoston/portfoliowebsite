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
            <h1 className="about-title text-outline">ABOUT ME</h1>
            <p>
            I am a critical care nurse and design engineer-in-training passionate about bridging the gap between healthcare and technology. My career began at the bedside, where I saw firsthand the inefficiencies that impact both patients and providers. Rather than accepting these challenges as the norm, I sought solutions—turning frustration into innovation.
            </p>
            <p>
            Now, as a Master’s of Engineering student in Design & Technology Innovation at Duke, I’m expanding my ability to design scalable solutions that aimpactful, user-centered solutions. My unconventional path has fueled a unique perspective: I don’t just develop technology for healthcare—I design with nurses, for nurses. Each project I take on stems from real clinical pain points, aiming to improve workflow, accessibility, and patient outcomes.
            </p>
            <p> 
            I believe that true innovation happens when technology serves its users—not the other way around. 
            </p>
            <p>
            My work lives at the intersection of design, healthcare, and strategic innovation. I believe that truly effective solutions are those that not only improve day-to-day workflow but also align with institutional priorities—ensuring adoption, scalability, and lasting impact. 
            </p>
            <p> 
            At my core, I am driven by the idea that better design leads to better care, and I am committed to building solutions that streamline processes, reduce inefficiencies, and empower healthcare workers—ultimately improving both provider and patient experiences.
            </p>
            <div className="about-buttons">
              <button className="btn">Resume</button>
              <button className="btn">Portfolio</button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
