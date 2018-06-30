import React from "react";
import { Link } from "react-router-dom";

const ButtonForm = ({
  stepState,
  backButton,
  validateCurrentForm,
  showSubmitNotice
}) => (
  <div className="buttons-container">
    {stepState === 1 ? (
      <div />
    ) : stepState === 2 ? (
      <button onClick={backButton} className="first-next-button back-button">
        <b>{`<`} Back</b>
      </button>
    ) : stepState === 3 ? (
      <button onClick={backButton} className="first-next-button back-button">
        <b>{`<`} Back</b>
      </button>
    ) : (
      <div />
    )}
    {stepState === 1 ? (
      <button onClick={validateCurrentForm} className="first-next-button">
        <b>Next ></b>
      </button>
    ) : stepState === 2 ? (
      <button onClick={validateCurrentForm} className="first-next-button">
        <b>Next ></b>
      </button>
    ) : (
      <span />
    )}
    {stepState === 3 ? (
      <button onClick={showSubmitNotice} className="first-next-button">
        <b>Finish</b>
      </button>
    ) : (
      <div />
    )}
  </div>
);

export default ButtonForm;
