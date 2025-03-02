import React, { useEffect } from 'react';
import './nav.css'; // Assuming you have nav-specific CSS here

function Nav() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <nav>
      {/* Hamburger Button for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="https://drive.google.com/file/d/1e4_0sJroot_Mt_LRlIxCP5WQU5W2ZWPd/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
