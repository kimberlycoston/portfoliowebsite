import React, { useState, useEffect } from 'react';
import './casestudy.css';

const TypingEffect = ({ titles, color }) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullTitle = titles[currentIndex];
      if (isDeleting) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length - 1));
      } else {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length + 1));
      }

      if (!isDeleting && currentTitle === fullTitle) {
        setTimeout(() => setIsDeleting(true), 5000); // Pause before deleting
      } else if (isDeleting && currentTitle === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % titles.length); // Move to the next title
      }
    }, isDeleting ? 50 : 150); // Speed of typing and deleting

    return () => clearTimeout(timeout);
  }, [currentTitle, isDeleting, currentIndex, titles]);

  return (
    <h2 style={{ color }}>
      {currentTitle}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;