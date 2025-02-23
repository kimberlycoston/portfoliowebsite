import React from "react";
import "./hero.css"; // You'll create this file for styling

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Hi, I'm Kimberly Coston</h1>
      <h2 className="hero-subtitle">I make things that make people happy.</h2>
      <h2 className="hero-subtitle2">patients <em>and</em> nurses.</h2>
      <a href="#about" className="hero-link">
        Let's see
      </a>
    </div>
  );
}

export default Hero;
