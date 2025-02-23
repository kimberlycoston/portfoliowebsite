import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the home page */}
        </li>
        <li>
          <a href="#about">About</a> {/* Smooth scroll to the About section */}
        </li>
        <li>
          <Link to="/portfolio">Projects</Link> {/* Link to the portfolio page */}
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a> {/* Link to an external PDF file */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
