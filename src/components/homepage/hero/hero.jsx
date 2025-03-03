import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
  const [dividerPosition, setDividerPosition] = useState(48);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const newDividerPosition = 100 - ((clientX - left) / width) * 100; // Inverted direction
    setDividerPosition(newDividerPosition);
  };

  const handleMouseLeave = () => {
    setDividerPosition(48); // Reset to default position when the mouse leaves
  };

  return (
    <div
      className="hero-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-wrapper scaled-wrapper centered-wrapper">
        
        {/* Nurse Objects (Left Background) */}
        <img
          src="/nurse-objects.png"
          alt="Nurse Background Objects"
          className="background-image nurse-objects"
          style={{
            opacity: dividerPosition === 48 ? 1 : Math.min(1, (dividerPosition - 20) / 55), // Full opacity when default
            transition: 'opacity 0.5s ease-in-out',
          }}
        />

        {/* Innovator Objects (Right Background) */}
        <img
          src="/innovator-objects.png"
          alt="Innovator Background Objects"
          className="background-image innovator-objects"
          style={{
            opacity: dividerPosition === 48 ? 1 : Math.min(1, (80 - dividerPosition) / 55), // Full opacity when default
            transition: 'opacity 0.5s ease-in-out',
          }}
        />

        {/* Nurse Headshot (Left) */}
        <div
          className="hero-image-wrapper nurse"
          style={{
            clipPath: `polygon(0 0, ${dividerPosition}% 0, ${dividerPosition}% 100%, 0 100%)`,
            transition: 'clip-path 0.5s ease',
          }}
        >
          <img
            src="/nurse_left_alone.png"
            alt="Nurse Headshot"
            className="hero-image"
          />
        </div>

        {/* Innovator Headshot (Right) */}
        <div
          className="hero-image-wrapper innovator"
          style={{
            clipPath: `polygon(${dividerPosition}% 0, 100% 0, 100% 100%, ${dividerPosition}% 100%)`,
            transition: 'clip-path 0.5s ease',
          }}
        >
          <img
            src="/innovator_right_alone.png"
            alt="Innovator Headshot"
            className="hero-image"
          />
        </div>

        {/* Nurse Text (Left) */}
        <div
          className="hero-text nurse-text"
          style={{
            opacity: dividerPosition === 48 ? 1 : Math.min(1, (dividerPosition - 20) / 55), // Full opacity when default
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          nurse
        </div>

        {/* Innovator Text (Right) */}
        <div
          className="hero-text innovator-text"
          style={{
            opacity: dividerPosition === 48 ? 1 : Math.min(1, (80 - dividerPosition) / 55), // Full opacity when default
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          innovator
        </div>
      </div>
    </div>
  );
};

export default Hero;
