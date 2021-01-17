import React, { useState } from "react";

const Step = ({ step }) => {
  const [clicked, SetClicked] = useState(false);
  return (
    <>
      <h3 className="step-click" onClick={() => SetClicked(!clicked)}>
        {clicked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        )}{" "}
        Step {step.number}
      </h3>
      <p className={clicked ? "step-done" : "step-not-done"}>{step.step}</p>
    </>
  );
};

export default Step;
