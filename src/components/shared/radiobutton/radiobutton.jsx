{/* Radio Button Component */}
import React from "react";
import "./radiobutton.css";

const RadioButton = () => {
  return (
   
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

    );
    };

export default RadioButton;