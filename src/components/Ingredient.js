import React, { useState } from "react";

const Ingredient = ({ ingredient, amount, unit }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="ingredient">
        <input
          type="checkbox"
          className="check"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />{" "}
        <span className={checked ? "item-checked" : "item-not-checked"}>
          <span className="ingredients-amount">
            {Math.round(amount)}
            {unit}{" "}
          </span>{" "}
          {ingredient.name}
        </span>
      </div>
    </>
  );
};

export default Ingredient;
