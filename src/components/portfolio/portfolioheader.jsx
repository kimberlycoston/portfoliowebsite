// portfolioheader.jsx

import React from "react";
import "./portfolioheader.css";

const PortfolioHeader = () => {
  return (
    <div className="headliner">
      <div className="headliner-content">
        <h1>
          portfolio<span>.</span>
        </h1>
        <p>Check out some of my latest product design case studies.</p>
        <p className="subtext">
          I’ve worked for startups, agencies, corporations, and government and have led projects
          to design products used by millions of people.
        </p>
      </div>
    </div>
  );
};

export default PortfolioHeader;