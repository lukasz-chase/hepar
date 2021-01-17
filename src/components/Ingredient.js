import React, { useState } from "react";

const Ingredient = ({ ingredient }) => {
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
          {ingredient.name}
        </span>
      </div>
    </>
  );
};

export default Ingredient;
