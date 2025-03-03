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
              I am a critical care nurse with a keen eye for systemic
              inefficiencies and a heart for innovation. Healthcare colleagues
              often remark on my unconventional approach – “Why not computer
              science?” “Engineering seems more your thing.” “You’re a natural
              entrepreneur.” But the most probing question I grapple with is,
              “Why are you a nurse?” While my responses have often been
              lighthearted deflections, they masked my growing realization: my
              true passion lies at the intersection of healthcare and
              innovation. Confronted daily with the challenges and intricacies
              of patient care, I’ve developed a deep understanding of its
              inner workings and, more importantly, its potential for
              transformative change.
            </p>
            <p>
              My path isn’t the traditional route to engineering; it’s been
              paved with real-life experiences and self-taught skills. From
              creating small-scale solutions to improve patient care to
              conceptualizing larger systemic changes, my nursing background
              has catalyzed my engineering aspirations. Each day in the
              hospital has fueled my desire to blend the empathy and insight
              gained from nursing with the innovative potential of design
              engineering.
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
