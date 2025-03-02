import React from "react";
import { Link } from "react-router-dom"; // Ensure React Router is set up
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/about" className="footer-link">About</Link></li>
          <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
          <li><Link to="/resume" className="footer-link">Resume</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
