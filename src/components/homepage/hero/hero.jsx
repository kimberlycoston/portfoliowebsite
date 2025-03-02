// hero.jsx
import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
  const [dividerPosition, setDividerPosition] = useState(52);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const newDividerPosition = 100 - ((clientX - left) / width) * 100; // Inverted direction
    setDividerPosition(newDividerPosition);
  };

  const handleMouseLeave = () => {
    setDividerPosition(52); // Reset to default position when the mouse leaves
  };

  return (
    <div
      className="hero-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-wrapper scaled-wrapper centered-wrapper">
        <div
          className="hero-image-wrapper designer"
          style={{
            clipPath: `polygon(0 0, ${dividerPosition}% 0, ${dividerPosition}% 100%, 0 100%)`,
            transition: 'clip-path 0.5s ease',
          }}
        >
          <img
            src="/designer_headshot_left.png"
            alt="Designer Headshot"
            className="hero-image"
          />
          <div
            className="hero-text designer-text"
            style={{ opacity: dividerPosition > 20 ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            creator
          </div>
          <p
            className="hero-description designer-description"
            style={{ opacity: dividerPosition > 20 ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            Building AI-driven tools and innovative healthcare solutions.
          </p>
        </div>
        <div
          className="hero-image-wrapper"
          style={{
            clipPath: `polygon(${dividerPosition}% 0, 100% 0, 100% 100%, ${dividerPosition}% 100%)`,
            transition: 'clip-path 0.5s ease',
          }}
        >
          <img
            src="/nurse_right_update.png"
            alt="Nurse Headshot"
            className="hero-image"
          />
          <div
            className="hero-text nurse-text"
            style={{ opacity: dividerPosition < 80 ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            nurse
          </div>
          {/* <p
            className="hero-description nurse-description"
            style={{ opacity: dividerPosition < 80 ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            Critical care nurse dedicated to improving patient experiences.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
