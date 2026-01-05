import React from "react";
import './progressbar.css';

const ProgressBar = ({ currentStep = 0 }) => {
  const steps = ["Choose type","Customization details","Your details","Payment","Order complete"];

  return (
    <div className="progress-container">

      <div className="progress-bar">
        {steps.map((label, index) => {
          let stepClass = "step";
          if (index === currentStep) stepClass += " active";

          return (
            <div key={index} className={stepClass}>
              <div className="step-dot"></div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;