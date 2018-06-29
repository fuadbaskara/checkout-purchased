import React from "react";

const StepIndicator = ({ stepState }) => (
  <div className="checkout-steps">
    <div className="checkout-steps-title">
      <h2>Checkout Steps</h2>
    </div>
    <div className="checkout-steps-indicators">
      <div className="steps-indicators">
        {stepState === 1 ? (
          <div className="first-step-active">
            <div>1</div>
          </div>
        ) : (
          <div className="first-step">
            <div>1</div>
          </div>
        )}
        <div className="line">――――――</div>
        {stepState === 2 ? (
          <div className="second-step-active">
            <div>2</div>
          </div>
        ) : (
          <div className="second-step">
            <div>2</div>
          </div>
        )}
        <div className="line">――――――</div>
        {stepState === 3 ? (
          <div className="third-step-active">
            <div>3</div>
          </div>
        ) : (
          <div className="third-step">
            <div>3</div>
          </div>
        )}
      </div>
      <div className="steps-title">
        <span className="steps-title-one">Information</span>
        <span className="steps-title-two">Shipping</span>
        <span className="steps-title-three">Confirmation</span>
      </div>
    </div>
  </div>
);

export default StepIndicator;
