import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './nav.css'; // Import the CSS file

function Nav() {
  const location = useLocation(); // Get the current location

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
      {/* Website Portfolio Logo on the Far Left */}
      <div className="logo">
        <a href="/">kc.</a> {/* Replace with your logo or image */}
      </div>

      {/* Navigation Menu Aligned to the Right */}
      <ul>
        <li>
          <a href="/" className={location.pathname === '/' ? 'active' : ''}>
            home
          </a>
        </li>
        <li>
          <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>
            about
          </a>
        </li>
        <li>
          <a href="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
            portfolio
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1e4_0sJroot_Mt_LRlIxCP5WQU5W2ZWPd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;