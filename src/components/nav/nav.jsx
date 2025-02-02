import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
