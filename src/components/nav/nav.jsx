
import "./nav.css";

import React, { useEffect } from 'react';

function Nav() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 200) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#featured-projects">Projects</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1e4_0sJroot_Mt_LRlIxCP5WQU5W2ZWPd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
