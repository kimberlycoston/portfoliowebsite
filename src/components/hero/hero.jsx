import React, { useState, useEffect } from "react";
import "./hero.css";

function Hero() {
  const words = [
    "nurses",
    "patients",
    "hospital leadership",
    "buyers",
    "C-suite execs",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing (ms)
  const deletingSpeed = 100; // Speed of deleting (ms)
  const delay = 2000; // Delay before switching words

  useEffect(() => {
    const type = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        // Typing forward
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        if (currentWord === fullWord) {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting backward
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        if (currentWord === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <div className="hero-container" id="home">
      <h1 className="hero-title">Hi, I'm Kimberly Coston</h1>
      <h2 className="hero-subtitle">
        I make things that make{" "}
        <span className="typewriter-effect">{currentWord}</span> happy.
      </h2>
    </div>
  );
}

export default Hero;
