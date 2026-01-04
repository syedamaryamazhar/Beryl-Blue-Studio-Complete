import React from "react";
import "./Progress.css";

const Progress = ({ currentStep }) => {
  return (
    <div className="progress-container">
      <div className="progress-track">
        <div className={`progress-line step-${currentStep}`}></div>

        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
          <div className="circle"></div>
          <p>Cart</p>
        </div>

        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
          <div className="circle"></div>
          <p>Checkout</p>
        </div>

        <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
          <div className="circle"></div>
          <p>Order Confirmation</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
