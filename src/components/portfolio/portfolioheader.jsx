// portfolioheader.jsx

import React from "react";
import "./portfolioheader.css";

const PortfolioHeader = () => {
  return (
    <>
    <div className="headliner">
      <div className="headliner-content">
        <h1>
          portfolio<span>.</span>
        </h1>
        <p>ideas, innovation, and execution. </p>
        <p className="subtext">
          every project starts with a problem worth solving.<p></p> here's how I'm building solutions to make healthcare smarter, faster, and more human.
        </p>
      </div>
      {/* Radio Button Component */}
      <div className="radio-button-container">
          <div className="radio-input">
            <label className="label">
              <div className="back-side"></div>
              <input type="radio" id="value-1" name="value-radio" value="value-1" />
              <span className="text">just give me the highlights</span>
              <span className="bottom-line"></span>
            </label>

            <label className="label">
              <div className="back-side"></div>
              <input type="radio" id="value-2" name="value-radio" value="value-2" />
              <span className="text">i enjoy reading novels</span>
              <span className="bottom-line"></span>
            </label>

            <label className="label">
              <div className="back-side"></div>
              <input type="radio" id="value-3" name="value-radio" value="value-3" />
              <span className="text">cool button to click</span>
              <span className="bottom-line"></span>
            </label>
          </div>
        </div>
      </div>
        {/* Skewed Divider Section */}
      <section>
        <div className="skewed"></div>
      </section>
  </>
  );
};

export default PortfolioHeader;